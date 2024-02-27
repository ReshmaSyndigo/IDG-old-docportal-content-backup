---
title: Create/Update Scheduled Jobs
sidebar: rdp_sidebar
permalink: api_create_update_scheduled_jobs.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API to create or update scheduled batch jobs for your apps based on the interval or duration you wish. To create or update a scheduled job, you must provide details, such as appId, JobDefId, and recorrunceinterval, and so on. Batch scheduling, helps you to schedule batch jobs through proxyservice API RSConnect routing to batch processing.

## Scenario

To create or update scheduled batch jobs for your apps based on interval or duration you wish.

{% include snippets/header.html %} 

## Request

To create or update a scheduled job, use the REST API **{TenantURL or ID}/api/proxyservice/call**.
In the request, send the following details:
* **APP_ID** - ID of the app for which you want to schedule a job.
* **JOB_DEF_ID** - Name of the job definition for which the scheduled job needs to run.
* **ISO_8601_TIME_INTERVAL** - Time interval after which this particular job needs to repeat.
* **ISO_8601_TIME** - Time after which the scheduled job needs to start.

<pre>
<code>
POST **{TenantURL or ID}/api/proxyservice/call**
Headers: Content-Type: application/json
Body:
{
    "proxyObject": {
        "type": "schedule-batch-process",
        "data": {
            "jsonData": {
                "requestBody": {
                    "jobIdentifier": {
                        <span style="background-color: #FFFF00"> "appId": "{APP_ID}", </span>
                        <span style="background-color: #FFFF00"> "jobDefId": "{JOB_DEF_ID}" </span>
                    },
                    "batchOptions": {
                        "poolId": "rsbatch"
                    },
                    "scheduledJobOptions": {
                        <span style="background-color: #FFFF00"> "recurrenceInterval": "{ISO_8601_TIME_INTERVAL}", </span>
                        <span style="background-color: #FFFF00"> "doNotRunUntil": "{ISO_8601_TIME}" </span>
                    },
                    "jobInputPayload": {
                    }
                },
                "requestHeaders": {
                    "x-rdp-taskId": "{$guid}"
                }
            }
        }
    }
}
</code>
</pre> 

## Response

If the above request is submitted successfully, then the following response is received from the API:

<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "7e7acb62-1eba-4477-8fcf-92066fd652e9",
        "taskId": "7e7acb62-1eba-4477-8fcf-92066fd652e9"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "status": "success",
            "request": {
                "jobIdentifier": {
                    "appId": "{APP_ID}",
                    "jobDefId": "{JOB_DEF_ID}"
                },
                "batchOptions": {
                    "poolId": "rsbatch"
                },
                "scheduledJobOptions": {
                    "recurrenceInterval": "{ISO_8601_TIME_INTERVAL}",
                    "doNotRunUntil": "{ISO_8601_TIME}"
                },
                "jobInputPayload": {
                }
            },
            "response": {
                <span style="background-color: #FFFF00"> "jobId": "{TENANT_ID}_{APP_ID}_{JOB_DEF_ID}_{CREATION_TIMESTAMP}" </span>
            }
        },
        "totalRecords": 0
    }
}
</code></pre>

{% include callout.html content="**Notes:** 
* Use the **jobId** you received from a response to track the details related to the scheduled job.
* All the jobs created previously for the given **APP_ID**, **JOB_DEF** combination gets deleted before the new **APP_ID**, **JOB_DEF** combination gets created. It will not update the existing job and it will use the latest deployed version of the App.
" type="primary" %}

## Troubleshooting
See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.