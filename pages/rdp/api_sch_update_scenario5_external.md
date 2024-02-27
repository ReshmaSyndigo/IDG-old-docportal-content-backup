---
title: Update the task URL of a schedule
sidebar: rdp_sidebar
permalink: api_sch_update_scenario5.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schupdate}}** to update a schedule object, using a scenario.

## Scenario

To update the task URL of schedule object from the current value of **"http://{URI}/api/eventservice/create"** to **"http://{URI}/api/bulkeventservice/createtask"** that schedules the title generation for sku entities.

{% include snippets/header.html %}

## Request

To update the schedule object, you can use the REST API {{site.data.rdp_glossary.schupdate}}. In the request send the following details:

* enabled: Specify as "true".
* scheduleTaskUrl: Change the "value" field of "scheduleTaskUrl" attribute from "http://{URI}/api/eventservice/create" to "http://{URI}/api/bulkeventservice/createtask".
* intervalInMins: Specify the value as 60.
* scheduleTaskPayload:Specify all the query details of the REST API of the task that you wish to schedule.

<pre>
<code>
POST {TenantURL or ID}/api/schedulerservice/update
Headers: Content-Type: application/json
Body:
{
  "scheduleObject": {
    "id": "scheduleToGenerateTitleForSkuEntity",
    "name": "Schedule of Title generation for sku entities",
    "type": "scheduleobject",
    "properties": {
     <span style="background-color: #FFFF00">"enabled": true</span>
    },
    "data": {
      "attributes": {
        "scheduleType": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "fixedRate"
            }
          ]
        },
        "scheduleTaskName": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "schedule-for-title-generation"
            }
          ]
        },
        <span style="background-color: #FFFF00">"scheduleTaskUrl": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "http://{URI}/api/bulkeventservice/createtask"
            }
          ]
        }
      },
      "jsonData": {
        "scheduleConfiguration": {
          <span style="background-color: #FFFF00">"intervalInMins": 60,</span>
          "authContext": {
            "x-rdp-userId": "rdp",
            "x-rdp-clientId": "rdpClient",
            "x-rdp-userRoles": "admin"
          }
        },
        <span style="background-color: #FFFF00">"scheduleTaskPayload": {</span>
          "params": {
            "query": {
              "id": "some-other-unknown-id",
              "filters": {
                "typesCriterion": [
                  "sku"
                ]
              }
            }
          }
        }
      }
    }
  }
}
</code>
</pre> 

## Response

If the schedule update request is submitted successfully, then the following response is received from update schedule API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "48e28443-24d2-4033-864b-8d45e9bf709b"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted scheduleobject for update with Id scheduleToGenerateTitleForSkuEntity. Check after some time",
          "messageCode": "I0121",
          "messageType": "success",
          "messageParams": [
            "scheduleobject",
            "update",
            "scheduleToGenerateTitleForSkuEntity"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/schedulerservice/get\" API to verify the updated schedule object. See [Get a Schedule Object using Scheduler Service](api_sch_get.html) and [Get a particular schedule Info object using schedule Id](api_sch_get_scenario10.html).
* The response message of the task executed is internal to the task. The schedule can only determine the success of the HTTP REST API call based on known HTTP protocol such as HTTP response 200. Any other internal interpretation of the response message is not in the scope of the schedule service.
" type="primary" %}

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.