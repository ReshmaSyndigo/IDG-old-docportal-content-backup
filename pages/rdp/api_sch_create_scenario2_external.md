---
title: Create a schedule to link entity to a product 
sidebar: rdp_sidebar
permalink: api_sch_create_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schcreate}}** to create a schedule object, using a scenario.

## Scenario

Create a schedule to link "sku" entity to a "product" for all "sku" entities, which satisfies - "sku_ischildof_product" and "sku_product_Rollup" match configurations.

{% include snippets/header.html %}

## Request

To create the above schedule object, use the REST API {{site.data.rdp_glossary.schcreate}}. In the request send the following details:

* enabled: Specify as "true".
* scheduleTaskUrl: Specify the URL of the required REST API task.
* intervalInMins: Specify the required time gap in minutes after which the scheduled task executes once again.
* scheduleTaskPayload: Specify all the query details of the REST API of the task that you wish to schedule.

<pre>
<code>
POST {{site.data.rdp_glossary.schcreate}}
Headers: Content-Type: application/json
Body:
{
  "scheduleObject": {
    "id": "scheduleToLinkSkuToImage",
    "name": "Schedule of linking sku to image",
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
              "value": "schedule-sku-image-link"
            }
          ]
        },
        <span style="background-color: #FFFF00">"scheduleTaskUrl": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "http://{URI}/api/rsGenericInboundService/process"
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
            "taskType": "processScheduledGraphRequests",
            "operationType": "inboundService",
            "batchSize": 1000,
            "query": {
              "filters": {
                "attributesCriterion": [
                  {
                    "status": {
                      "exact": "QUEUED"
                    }
                  },
                  {
                    "taskType": {
                      "exact": "schedule-10min-graphProcess"
                    }
                  },
                  {
                    "graphprocessconfig": {
                      "exacts": [
                        "sku_ischildof_product",
                        "sku_product_Rollup"
                      ]
                    }
                  }
                ],
                "typesCriterion": [
                  "scheduledrequestobject"
                ]
              }
            },
            "sort": {
              "attributes": [
                {
                  "dataObjectId": "_DESC",
                  "sortType": "_STRING"
                }
              ]
            },
            "distinct": {
              "attributes": [
                "dataObjectId",
                "graphprocessconfig"
              ]
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

If the schedule create request is submitted successfully, then the following response is received from create schedule API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "3e3b0b27-cc5d-4a6a-af59-04b9d68ad061"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Schedule has been submitted for create with schedule Id : scheduleToLinkSkuToImage. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/schedulerservice/get\" API to verify the created schedule object. See [Get a Schedule Object using Scheduler Service](api_sch_get.html) and [Get a particular schedule Info object using schedule Id](api_sch_get_scenario10.html).
* The response message of the task executed is internal to the task. The schedule can only determine the success of the HTTP REST API call based on known HTTP protocol such as HTTP response 200. Any other internal interpretation of the response message is not in the scope of the schedule service.
" type="primary" %}

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.