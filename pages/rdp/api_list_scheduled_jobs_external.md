---
title: List Scheduled Jobs
sidebar: rdp_sidebar
permalink: api_list_scheduled_jobs.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API to list the scheduled batch jobs for your apps. Also, it provides information related to duration when a particular job needs to be listed for job schedules. Batch scheduling, helps you to schedule batch jobs through proxyservice API RSConnect routing to batch processing.

## Scenario

To list the scheduled batch jobs for your apps.

{% include snippets/header.html %}

## Request

To list the scheduled jobs, use the REST API **{TenantURL or ID}/api/proxyservice/call**.
In the request, send the following details:
* **APP_ID** - ID of the app (“_ALL” allows iteration over all apps enabled for the tenant).
* **JOB_DEF_ID** - Name of the job definition for which the scheduled job needs to run (“_ALL” allows iteration over all job_defs for a given app).
* **METHOD** - List.

<pre>
<code>
POST **{TenantURL or ID}/api/proxyservice/call**
Headers: Content-Type: application/json
Body:
POST **{TenantURL or ID}/api/proxyservice/call**
Headers: Content-Type: application/json
Body:
{
    "proxyObject": {
        <span style="background-color: #FFFF00"> "type": "schedule-batch-{METHOD}", </span>
        "data": {
            "jsonData": {
                "requestBody": {
                    "jobIdentifier": {
                        <span style="background-color: #FFFF00"> "appId": "{APP_ID}", </span>
                        <span style="background-color: #FFFF00"> "jobDefId": "{JOB_DEF_ID}" </span>
                    }
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
        "requestId": "73d44cd6-40ca-4e7b-8d67-c2f035dd9a72",
        "taskId": "73d44cd6-40ca-4e7b-8d67-c2f035dd9a72"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "status": "success",
            "request": {
                "tenantId": "{TENANT_ID}",
                "appId": "{APP_ID}",
                "jobDefId": "{JOB_DEF_ID}",
                "requestBody": {
                    "jobIdentifier": {
                        "appId": "{APP_ID}",
                        "jobDefId": "{JOB_DEF_ID}"
                    }
                }
            },
            "response": {
                "jobSchedules": [
                    {
                        <span style="background-color: #FFFF00"> "id": "{TENANT_ID}_{APP_ID}_{JOB_DEF_ID}_{CREATION_TIMESTAMP}", </span>
                        <span style="background-color: #FFFF00"> "recurrence_interval": "{ISO_8601_TIME_INTERVAL}", </span>
                        "pool_id": "rsbatch"
                    }
                ]
            }
        },
        "totalRecords": 0
    }
}
</code></pre>

{% include callout.html content="**Notes:** 
* **id** is the application id that is listed.
* **recurrence_interval** is the time when a particular job needs to repeat to get listed.
" type="primary" %}

## Troubleshooting
See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.