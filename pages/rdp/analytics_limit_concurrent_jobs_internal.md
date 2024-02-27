---
title: Limit Concurrent Batch Jobs using Named Quotas
sidebar: rdp_sidebar
permalink: analytics_limit_concurrent_jobs.html
folder: rdp
type: Description
---

The Riversand batch platform supports limitations on the number of simultaneous batch jobs per tenant using named quotas. A named quota is defined as the allocated capacity of simultaneous jobs in batch system (Say, entity import, entity export). This limitation reduces the consumption of resources on the batch system and handles system overload effectively, thereby ensures that the data is handled in an orderly manner and improves the performance. Named quotas are defined per App and per tenant with its default limitations on the allowed simultaneous batch jobs at one. However, the batch system allows for configuration of the number of jobs that can run simultaneously per app.

### Examples of Named Quota

| Named Quota | App | Job Defs | Default Quota | Description | 
|-------------|------|----------|---------------|-------------|
| autoapp_import | autoapp | * aces_import <br> * pies_import | 2 | Autoapp import jobs for both ACES and PIES files. |
| autoapp_system | autoapp | * note-entity-creation <br> * app-update-sync <br> * entity-delete-sync | 1 | Autoapp system jobs. | 
| rdp_import_export | rsintegration | profile-runner | 4 | All batch based imports and exports. | 
| rdp_system | various rdp apps | * system_grooming <br> * bulk_update <br> * report_aggregation | 1 | System level tasks that are generally low priority. |

### Example Scenario 

Consider an example, AutoApp import quota (PIES import, ACES import) for a given tenant can only have 3 concurrent jobs and currently there are two jobs (Job 1 and Job 2) running. If another job (Job 6) is submitted, this will be scheduled in the batch system parallelly based on the allowed simultaneous job execution. 

Consider in RDP system quota (entity import, entity export) for a given tenant can only have 2 concurrent jobs. If there are already 2 jobs (Job 3 & Job 4) running, then when another job (Job 8) is requested by the user, the system will wait in queue until the completion of one of the active jobs before scheduling the new job on the batch system.

{% picture batch_limit_jobs.png alt="Limit Concurrent Batch Jobs" %}

### How to configure the quota for a batch job

The attribute quotas is added to batch job definition for the batch system to refer the named quota (or quotas) considered at the processing or run-time. If this attribute is not present, the batch jobs will run only a single job. For most application job definitions, a larger number is desirable, however it will be necessary to get approval from Riversand for more than 4.

To solve this issue, the quotas attribute allows for specifying one or more quotas in the job definition config to indicate the maximum number of jobs simultaneously running.

The following JSON describes the sample Job Definition configuration:

<pre>
<code>
{
  "id": "simple-demo",
  "quotas": ["test-quota"],
  "rdp_task_status": {
    "rdp_task_type": "",
    "file_stream_type": "defaultAzureBlobStore"
  },
  "config_properties": {
  "TEST": "test-variable-1",
  "TEST2": "test-variable-2"
  },
  "tasks": [
  {
    "id": "job-start-task",
    "runtime": "java",
    "code_path": "../../../source/java/helloworld/target",
    "jar_name": "simple-demo-1.0.0-SNAPSHOT.jar",
    "main_class": "com.riversand.examples.SimpleDemo",
    "input_files": [
      {
      "storageType": "tenant",
      "container": "test-container",
      "blobPrefix": "new_data",
      "localFilePath": "./input/"
      }
    ],
  "output_files": [
    {
      "storageType": "tenant",
      "container": "test-container",
      "localFilePattern": "./output/*",
      "blobPath": "job-output"
    }
  ],
  "environment_variables": {
    "ENV1": "{TEST}",
    "ENV2": "{TEST2}"
    }
  }
  ]  
}
</code>
</pre>


Consider you wish to set a limit on autoapp aces import jobs to be executed concurrently in the batch system. 

The following JSON is the sample named quota configuration for autoapp_aces_import jobs:

<pre>
<code>
{
        "configObject": {
        "id": "autoapp_aces_import",
        "name": "autoapp_aces_import",
        "type": "batchQuotaAppConfig",
        "data": {
        "jsonData": {
        "batch_concurrent_execution": {
        "value": 2,
        "description": ""
        }
      }
    }
  }
}
</code>
</pre>

The following table describes the JSON property required in the above configuration:

| Property | Description | 
|----------|--------------|
| id | Name of the quota used to reference quotas in job definitions. |
| type | Type of batch configuration. |
| batch_concurrent_execution | Number of concurrent batch jobs that can run for any job def, that is subscribed to this quota within a tenant. |
