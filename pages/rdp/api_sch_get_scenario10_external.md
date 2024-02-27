---
title: Get a particular schedule Info object using schedule Id
sidebar: rdp_sidebar
permalink: api_sch_get_scenario10.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schget}}** to get a schedule info object, using a scenario.

## Scenario

To get schedule info object that is created by the schedule object which schedules external event grooming jobs.

{% include snippets/header.html %}

## Request

To get the above schedule info object, you can use the REST API {{site.data.rdp_glossary.schget}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the type as "scheduleinfo".
* query -> filters -> propertiesCriterion: Specify required schedule Id.

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
        ],
        "propertiesCriterion": [
          {
            <span style="background-color: #FFFF00">"scheduleId": {</span>
              "exact": "digestemailidentify-schedule"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "totalRecords": 100
    }
  }
}
</code>
</pre>

## Response

Returns the corresponding schedule info object.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "24b258df-3fee-4c93-959e-9fedab67bdff",
    "maxRecords": 2000
  },
  "response": {
    "scheduleObjects": [
      {
        "id": "c8c53244-bb6f-4152-a335-58bf1119eee4",
        "type": "scheduleinfo",
        "domain": "scheduleDataObject",
        "properties": {
          "scheduleId": "digestemailidentify-schedule",
          "scheduleTaskName": "digestemail-identification",
          "scheduleTaskUrl": "http://rdp-rest:8085/rdw/api/impactmanageservice/identify",
          "lastInvocation": "1536560711941"
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.