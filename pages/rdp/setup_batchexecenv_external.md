---
title: Understand Batch Execution Environment
sidebar: rdp_sidebar
permalink: setup_batchexecenv.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

The initial version of the App facets supports running a single batch task as a part of a job. The batch program has access to RDP REST APIs, logging to RDP’s Kibana, and some default environment variables. 

#### Logging

When using a java runtime, App developer should include the following **log4j2.xml** file in the resources directory. This will be included in your local working directory and will allow messages to be sent to the RDP Kibana. You will need to include the gelf appender package *biz.paluch.logging.gelf.log4j2* to your maven *pom.xml*. Note that, you can use the following file as is and do not change any values.

{% picture logging.png alt="log4j2.xml configuration file" %}

<br>

#### Files Specification

In general, all batch tasks run by installing programs, configurations files, and working inputs and outputs on the local disk. Input and output data files are located in the current working directory. For example, if the job was launched by the blob watcher trigger, then the source blob will be located in the working directory that the program was launched in. Other files can be specified in the **job_def.json**.

<br>

#### Environment Variables

##### Default Environment Variables

The following are the **default environment variables** available when an batch job is executed.

| Default Variable | Description |
|-------------------|-------------|
| POD_ID | This is the name of the pod that hosts the tenant for which this job is being run. |
| RDP_URL | This is the IP address for the RDP REST endpoint for this pod. Note that, this is the internal address of a target server, not the external address. |
| RDP_PORT | The port to call the RDP REST endpoint. Currently, hardcoded to 8085. |
| KIBANA_URL | The endpoint address for sending gelf logs to the pod’s logging infrastructure. |
| KIBANA_PORT | The endpoint port for logging. Currently hardcoded to 12201. |
| APP_ID | The name of the app as specified in the application.json. |
| APP_VERSION | The current version of the application being run. |
| JOB_DEF_ID | The id of the job definition (say, simple-job-py). |
| TENANT | The RDP tenant for which this is being run. |
| TASK_ID | The RDP task summary id. Used for task summary updates and external events. |
| JOB_ID | The name of this job as defined in batch process. Used for logging, but not directly applicable to applications. |
| APP_PACKAGE_LOCATION | This de-references to the location on disk where the job executables and packaged files are located. |
| BATCH_UTIL_ID | The name of the package containing Batch App utility libraries. |
| BATCH_UTIL_VERSION | The version of utility libraries that is available to the job. |
| BATCH_UTIL_PACKAGE_LOCATION |This de-references to the location on disk where utility libraries are located. |

<br>

##### Blob Watcher Trigger Variables

The following are the environment variables available when a batch job is executed from a blob watcher trigger.

| Default Variable | Description |
|-------------------|-------------|
| SOURCE_BLOB_PATH | The path in the container where the blob originated. |
| SOURCE_BLOB_NAME | This is the name of the source blob. This file will be located in the local working directory of the job execution environment. In addition to the above, When the file is uploaded from RDP via the UI, any metadata tags on the blob itself can be included in this variable. |
| X_RDP_CLIENTID | This is the client id specified from UI. |
| X_RDP_OWNERSHIPDATA | Ownership data that the RDP user is representing (Example,Vendor). |
| X_RDP_TASKID | This is the target Task Summary id to use for this execution. |
| X_RDP_TENANTID | The name of the tenant. |
| X_RDP_USERID | The RDP user id who uploaded the file. |