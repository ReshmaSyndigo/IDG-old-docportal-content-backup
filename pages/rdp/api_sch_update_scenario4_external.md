---
title: Update the task payload of a schedule
sidebar: rdp_sidebar
permalink: api_sch_update_scenario4.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schupdate}}** to update a schedule object, using a scenario.

## Scenario

To update the task payload of schedule object from the current value of timestamp "2018-01-01" to "2019-01-01" that schedules the title generation for sku entities.

{% include snippets/header.html %}

## Request

To update the schedule object, you can use the REST API {{site.data.rdp_glossary.schupdate}}. In the request send the following details:

* enabled: Specify as "true".
* scheduleTaskUrl: Specify the URL of the required REST API task.
* intervalInMins: Specify the value as 60.
* scheduleTaskPayload: Change the "sourceTimestamp" field from "2018-01-01" to "2019-01-01".

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
            "x-rdp-userRoles": "admin",
            "x-rdp-clientId": "rdpclient",
            "x-rdp-tenantId": "",
            "x-rdp-ownershipdata": "",
            "x-rdp-userid": "system_user",
            "x-rdp-username": "system",
            "x-rdp-useremail": "system",
            "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
          }
        },
        <span style="background-color: #FFFF00">"scheduleTaskPayload": {</span>
          "params": {
            "taskType": "delete",
            "operationType": "inboundService",
            "query": {
              "filters": {
                "typesCriterion": [
                  "sku"
                ],
                "attributesCriterion": [
                  {
                    "sourceTimestamp": {
                      "gt": "2019-01-01T00:00:01.000+0000",
                      "lt": "now-60d/d",
                      "type": "_DATETIME"
                    }
                  }
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
    "requestId": "d010bbf7-dbde-4b0b-b72e-ca65f2b11d28"
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