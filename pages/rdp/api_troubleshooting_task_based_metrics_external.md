---
title: Task Based Metrics
sidebar: rdp_sidebar
permalink: api_troubleshooting_task_based_metrics.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to fetch task summary for the RESTful API **{TENANT_ID}/api/requesttrackingservice/get** to get the task summary for tenant seed data, using a scenario. Task summary object contains the following metrics:
* **totalRecordsSuccess**: Successfully processed record count.
* **totalRDPErrors**: Number of requests failed in RDP (persistence failure, and so on).
* **totalLoadError**: Request count for request failed while sending to RDP (Permission denied multiple matches, and so on).
* **totalRecords**: Records count available in the zip.
* **fileId**: Seed load file Id, fileName attribute may be the same as fileId.
* **status**: Load status, failure will have Errored/Completed with an Error status.

You can use **taskId** associated with the Seed load, from the API response. The **taskId** helps you to fetch the task summary.

## Request

This topic describes how to use the RESTful API **{TENANT_ID}/api/requesttrackingservice/get** to get the task summary for tenant seed data.

<pre>
<code>
POST **{WEBURL}:{WEBPORT}/{TENANT_ID}/api/requesttrackingservice/get**
Host: customer.riversand.com
Content-Type: application/json
{
    "params": {
        "query": {
            "id": "15575bc6-6c11-48f9-8a52-3c6723788d6e",
            "filters": {
                "typesCriterion": [
                    "tasksummaryobject"
                ]
            }
        },
        "fields": {
            "attributes": [
                "_ALL"
            ]
        },
        "options": {
            "maxRecords": 1
        }
    }
}
</code>
</pre>

## Parent Task summary

Seed load API supports zip file format containing Excel Sheets and JSON Objects in Seed format. Zip files containing both of them utilize Parent-Child task to report Status tracking. Response for seed load API has taskId that helps Parent task to track Overall status of Load.

{% picture api_parent_task_id.png alt="Parent Task Id" %}

A single Task is created for all JSON objects, each Excel will have a separate task. They can be tracked for Status and error individually as well with External events and Request object tracking.

This topic describes how to use the RESTful API {TENANT_ID}/api/requesttrackingservice/get to find all child tasks for tenant seed data.

## Request

To find all child task we can use attributesCriterion for parentTaskId in following manner:

<pre>
<code>
POST **{WEBURL}:{WEBPORT}/{TENANT_ID}/api/requesttrackingservice/get**
Host: customer.riversand.com
Content-Type: application/json
{
    "params": {
        "query": {
            "filters": {
                "typesCriterion": [
                    "tasksummaryobject"
                ],
                "attributesCriterion": [
                    {
                        "parentTaskId": {
                            "exact": "5126859f-65c7-41d3-ad03-ba313eaedad0"
                        }
                    }
                ]
            }
        },
        "fields": {
            "attributes": [
                "totalRecords",
                "status",
                "totalRecordsProcessed",
                "fileName"
            ]
        },
        "options": {
            "maxRecords": 20
        }
    }
}
</code>
</pre>