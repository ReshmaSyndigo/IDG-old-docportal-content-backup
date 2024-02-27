---
title: Get all schedule Info objects
sidebar: rdp_sidebar
permalink: api_sch_get_scenario9.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schget}}** to get a schedule info object, using a scenario. 

## Scenario

To get all schedule info objects that are created by various schedule objects.

{% include snippets/header.html %}

## Request

To get the above schedule info object, you can use the REST API {{site.data.rdp_glossary.schget}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the type as "scheduleinfo".

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
          <span style="background-color: #FFFF00">"scheduleinfo"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 2
    }
  }
}
</code>
</pre>

## Response

Returns all schedule info objects.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e7c16dcd-a1b7-4ad5-8e44-b066b3674e77",
    "maxRecords": 2
  },
  "response": {
    "scheduleObjects": [
      {
        "id": "81beacc6-92c7-4d8b-a46d-2b2d69de0611",
        "type": "scheduleinfo",
        "domain": "scheduleDataObject",
        "properties": {
          "scheduleId": "groomRequestObjects",
          "scheduleTaskName": "Schedule of grooming request objects",
          "scheduleTaskUrl": "http:{URI}/api/rsGenericInboundService/process",
          "lastInvocation": "1519796035331"
        }
      },
      {
        "id": "5faafdb5-5efe-4a04-b806-3f69410e1e21",
        "type": "scheduleinfo",
        "domain": "scheduleDataObject",
        "properties": {
          "scheduleId": "groomExternalEvents",
          "scheduleTaskName": "groomExternalEvents",
          "scheduleTaskUrl": "http:{URI}/api/bulkeventservice/createtask",
          "lastInvocation": "1519794355297"
        }
      }
    ],
    "status": "success",
    "totalRecords": 15
  }
}
</code></pre>

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.