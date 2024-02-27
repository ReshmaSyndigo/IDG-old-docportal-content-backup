---
title: Understand Key Concepts
sidebar: rdp_sidebar
permalink: analytics_keyconcepts.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

This article provides an insight on the key concepts used in Analytics facet.

The below picture depicts the analytics workflow for processing/analyzing the incoming and outgoing data:

{% picture key-concepts-analytics.png alt="Analytics Workflow" %}

## Job Definitions

The Batch app contains one or more job definitions, which include the basic instructions on how to run the application process. The Job definition is a JSON file, which includes the following information:

* Executables and libraries for bundling and executing the tasks.
* Environment variables 
* Description of input and output files
* Quotas to consider during execution
* Task Status info

## Job Triggers

Batch jobs are triggered by events that occur in the runtime environment. An app developer needs to be able to define and manage which events to listen to, and what jobs to get triggered when the event occurs. These triggers are json configurations that describe how jobs get invoked for certain actions.

<!-- For example, a REST API trigger implies the installation of a 'proxyConfig', blob watched trigger implies the creation of an Azure Blob Storage, Event Grid trigger for the standard blob watcher function and so on. -->

Anaytics facet supports three types of triggers, each of which is configured differently based on the event type. All the three triggers share some common attributes:

* **id** - the application unique id for this trigger. Should be the same as the file name.
* **type** - the type for this trigger (currently supported: blob_watcher, schedule, rest_call).
* **job_def** - a job definition to create a job with in the current application.

<br> 

### Blob Watcher Triggers

One of the most common event types is the ability to watch for the creation of a blob in a Azure storage container.  This action will cause a job to be executed/trigerred from a specified application. The uploaded file is provided to the job in addition to any files specified in the input_files section of the job definition. 

There are three environment variables that describe the blob location:

* **SOURCE_BLOB_PATH** - the path in the container to the blob
* **SOURCE_BLOB_NAME** -  the name of the blob itself
* **SOURCE_FILE_NAME** - the name of the underlying file extracted from the blob’s meta data. This is useful because the RDP UI renames an uploaded file to a GUID blob name, but this preserves the original file name.

Here is a sample JSON definition of a blob watcher trigger:

<pre>
<code>
{    
    "id": "blob-upload",
    "type": "blob-watcher",
    "job_def": "simple-job-py",
    "storage_account_resource": "tenant",
    "container": "customer-uploads"
}
</code>
</pre>

In the above sample definition, there are two trigger specific attributes:

* **storage_account_resource** - name of the storage account resource, where the blob container is hosted. Currently, only “tenant” and “batch” are supported.

* **container** - name of the container (created during deployment if it does not exist). Note that the {{tenant}} substitution string allows for the tenant name to be inserted at tenant enablement time.

Internally, the blob container is watched by an event grid that triggers a function. The function’s job is to create the job from the job definition file.

<br>

### Schedule Trigger

This pertains to event type in which a job needs to run at a scheduled interval, say to invoke and drain an event hub of data and process it.

Here is a sample JSON definition of a Schedule trigger:

<pre>
<code>
{    
    "id": "event-consumer",
    "type": "schedule",
    "job_def": "event-consumer",
    "recurrence_interval": "PT1H"
}
</code>
</pre>

The attribute **recurrence_interval** - The ISO 8601 duration string for this interval. For example, PT1H (every 60 minutes)

<br>

### REST API Trigger

Some jobs need to be invoked from RDP itself (say, through UI when a user clicks a button or from a RS Business Rule). To support this, batch applications can call an RDP REST call to invoke a job.

Here is a sample JSON definition of a REST API trigger: 

<pre>
<code>
{    
    "id": "export",
    "type": "rest_call",
    "job_def": "rsconnect-runner",
    "environment_variables": {
        "MAX_RECORDS": "2000"
    }
}
</code>
</pre>

Here, the attribute **environment_variables** is defined and will be made available to task during execution as an environment variables.Note that, there are also existing set of environment variables that are configured by default for all jobs (tenant, pod) that do not have to be specified here.

The REST call can be made either using **POST** or **GET**. When the call is made as a **POST**, then the contents of the request are saved as a local file for the task, with a name specified in the environment variable TASK_REQUEST_FILE.

<br>

### Batch Event Trigger

This trigger type collects the RDP events on a scheduled-basis and then process those events using a standard batch job definition. To support this, the batch SDK runs an scheduled job (15 minutes), called the **Event Monitor**. This monitors the event streams that comes from the Azure Event Hub. Applications register their interest in these events through a batch trigger, called **Event Subscriptions** and the event monitor verify each event with all subscriptions to the tenant. 

The following picture illustrates the event monitor process flow:

{% picture batch-event-monitor-trigger.png alt="Batch Event Monitor Trigger" %}

To optimize batch processing, the event subscriptions helps to filter events at multiple levels based on Event Info, Event Data, Entity Data matching.  

The following JSON demonstrates the sample match configuration of Subscription Batch Trigger:

<pre>
<code>
{    
    "id": "message_config_create",
    "type": "event_subscription",
    "match": {
        "eventInfo": {
            "type": ["entitymanageevent"],
            "eventType":["EntityUpdate"],
            "entityType":["applicationgroup"],
            "clientId":["governanceClient"]
        }
        "eventData": "...jmespath...",
        "entityData": "...jmespath..."
    },
    "includeEntityInProcessing": false,
}
</code>
</pre>

In the above sample, **eventInfo** section allows the match based on the event data (high level event description) from the event hub messages. 
**eventData** allows an arbitrary expression to match the event content retrieved from the blob store. 
**entityData** allows matching on the source entity itself. All three sections must match as true for any event to match. 

Note that, [JMESPath](https://jmespath.org/) is used to perform event and entity matching. JMESPath works on a JSON array, and matches zero or more array elements in the source document. In this case, the source array contains one element - either the event or the related entity document and a match is assumed if the source document is returned from attempting the match.

<!-- During batch application tenant enablement, new configuration objects are created for the subscriptions used by an app. The trigger and the job definition are required to retrieve and initiate the app jobs using event triggers.

The following JSON demonstrates a sample event batch application config object:

<pre>
<code>
{
    "configObject": {
        "id": "event-app-sample-event-responder-config",
        "name": "event-app-sample-event-responder-configuration",
        "type": "eventBatchAppConfig",
        "data": {
            "jsonData": {
                "match": {
                    "eventInfo": {
                        "type":"entitymanageevent",
                        "eventType":"EntityUpdate",
                        "entityType":"applicationgroup",
                        "clientId":"governanceClient"
                    }
                    "eventData": "...jmespath...",
                    "entityData": "...jmespath..."
                },
                "includeEntityInProcessing": false,
                "job_def": {
                    "id": "sample-event-responder",
                    "runtime": "java",
                    "jar_name": "event-responder-1.0.0-SNAPSHOT.jar",
                    "main_class": "com.riversand.examples.events.EventResponderMain",
                    "rdp_task_status": {
                        "rdp_task_type": "Sample Event Responder",
                        "file_stream_type": "defaultAzureBlobStore"
                    },
                    "input_files": [],
                    "output_files": []
                },
                "node_pool": "rsbatch"
            }
        }
    }
}
</code>
</pre>

The config object contains all information required to filter the events and launch the job in response to the events that have been collected.
Note that the **node_pool** should be provided during tenant enablement, since it is not defined in the job_def or the trigger file. -->

<br>

#### Batch Processing

Based on the above triggers that invokes the corresponding jobs, batch processing gets initiated. The input data file (blobs) that gets loaded to the processor at task start-up (when job gets invoked) and output files that are uploaded at task end. This interacts with the RDP services for specific functions, such as ability to show status, invoke batch workloads, retrieve and send data to RDP. 

Batch workloads consists of data management needs that are blob storage, table storage, CosmosDB, and other data technologies like hosted SQL Server. The data storage is not recommended for long term. Riversand Anaytics facet supports long term storage of CosmosDB data that can be saved / restored from blob storage based on the requirement. 

{% picture data-manipulation.png alt="Batch Processing" %}

For example, the basic interaction with RDP is the ability to make REST API calls, through which specific types of interaction includes:

* Send job state for task summary
* Retrieve configuration(s) and entity data
* Send individual entities 

The key features of batch processing involves the following:

* Upon invoking, process the data using Command Line Interface (CLI) Process
* It supports multi-Language for executing the codes (Java, Javascript, Python)
* Library support for RDP REST API calls, config access, report generation, and so on
* Supports access to external data sources

<br>

#### Batch Output

After processing the input data files and invoked jobs/tasks is completed, the batch processor provides the output data in format supported by Anaytics facet. Application can publish the output data (in form of files) to designated Storage account, send it to RDP services or publish to eventhub. Output format and its location can vary based on application requirement and can utilize job definition to provide such configuration. 

<!-- Depending upon the business requirements, there can be different ways of providing batch outputs: 

* One way to provide output is by collecting output data files from current working environment and send those files to storage container (say, Blob storage). 

* Other ways of providing output includes creating entities by directly making API calls to RDP, sending data to an Azure eventhub and storing information in an external database of some type (such as CosmosDB or Azure Table Storage) and so on. 

For instance, upon interacting with RDP services, the batch workload will be able to import bulk data using Azure event hub (default Azure libraries) and RSConnect, and also can send output data to the data visualizer for visualizing the data reports.  -->