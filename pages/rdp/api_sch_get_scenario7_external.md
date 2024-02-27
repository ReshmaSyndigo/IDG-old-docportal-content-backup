---
title: Get a schedule object performing a particular task
sidebar: rdp_sidebar
permalink: api_sch_get_scenario7.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schget}}** to get a schedule object, using a scenario. 

## Scenario

To get schedule objects which are scheduled to perform "delete" tasks.

{% include snippets/header.html %}

## Request

To get the above schedule object, you can use the REST API {{site.data.rdp_glossary.schget}}. In the request send the following details:

* fields -> attributesCriterion: Specify the taskType as "delete".
* query -> filters -> typesCriterion: Specify the type as "scheduleobject".

<pre>
<code>
POST **{TenantURL or ID}/api/schedulerservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"scheduleobject"</span>
        ]
      }
    },
    "fields": {
      "attributesCriterion": [
        {
          <span style="background-color: #FFFF00">"taskType": {</span>
            "exact": "delete"
          }
        }
      ]
    },
    "options": {
      "totalRecords": 15
    }
  }
}
</code>
</pre>

## Response

Returns the schedule object matching the task type in the specified attribute Criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "dfeb8183-ec58-48f5-a70f-8615fc876c53",
    "maxRecords": 2000
  },
  "response": {
    "scheduleObjects": [
      {
        "id": "scheduleToPublishEntities",
        "name": "Schedule To Publish Entities",
        "type": "scheduleobject"
      },
      {
        "id": "authorization-model-identify-schedule",
        "name": "schedule for authorization model identification",
        "type": "scheduleobject"
      },
      {
        "id": "store-snapshot-of-processing-lag",
        "name": "Store snapshot of lag in processing",
        "type": "scheduleobject"
      },
      {
        "id": "digestemailidentify-schedule",
        "name": "schedule for digest email identification",
        "type": "scheduleobject"
      },
      {
        "id": "groomEntityManageEvents",
        "name": "Schedule of grooming entity manage events",
        "type": "scheduleobject"
      },
      {
        "id": "impactexecute-schedule",
        "name": "schedule for impact execution",
        "type": "scheduleobject"
      },
      {
        "id": "scheduleToLinkSkuToImage",
        "name": "Schedule of linking sku to image",
        "type": "scheduleobject"
      },
      {
        "id": "retryDownloadAssets",
        "name": "Schedule for Retry of Download of Assets From URL",
        "type": "scheduleobject"
      },
      {
        "id": "scheduleToGenerateTitleForSkuEntity",
        "name": "Schedule of Title generation for sku entities",
        "type": "scheduleobject"
      },
      {
        "id": "groomGenericDiagnosticObjects",
        "name": "Schedule of grooming diagnosticobject",
        "type": "scheduleobject"
      },
      {
        "id": "impactidentify-schedule",
        "name": "schedule for impact identification",
        "type": "scheduleobject"
      },
      {
        "id": "scheduleToLinkSkuToProduct",
        "name": "Schedule of linking skus to product",
        "type": "scheduleobject"
      },
      {
        "id": "digestemailexecute-schedule",
        "name": "schedule for digest email execution",
        "type": "scheduleobject"
      },
      {
        "id": "authorization-model-execute-schedule",
        "name": "schedule for authorization model execution",
        "type": "scheduleobject"
      },
      {
        "id": "groomEntityGovernEvents",
        "name": "Schedule of grooming entity govern events",
        "type": "scheduleobject"
      }
    ],
    "status": "success",
    "totalRecords": 15
  }
}
</code></pre>

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.