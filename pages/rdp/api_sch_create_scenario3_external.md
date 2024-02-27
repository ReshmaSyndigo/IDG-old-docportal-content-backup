---
title: Create a schedule to identify generic objects for digest emails 
sidebar: rdp_sidebar
permalink: api_sch_create_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/schedulerservice/create to create a schedule object, using a scenario.

## Scenario

Create a schedule to identify the generic objects for digest email notification.

{% include callout.html content="**Notes**:
* When a task such as entity import/entity export/bulk task/workflow assignment change/workflow auto assignment is performed, generic objects with type as **digestEmailIdentifyRequestObject** are created, if respective notification config object has **digestemailenabled** attribute as true.
* **Identify related schedule configuration** picks up all generic objects with type **digestEmailIdentifyRequestObject**, and once processing is done, a new set of generic objects are created with type as **digestEmailExecuteRequestObject**.
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above schedule object, use the REST API {{site.data.rdp_glossary.schcreate}}. In the request, specify the following details:

| Attribute | Description | 
|-----------|--------------|
| id | Indicates the ID of the schedule task. In this case it is, **digestemailidentify-schedule**. |
| enabled | Indicates if the schedule configuration is enabled and must be **true** for digest emails to be sent as per the schedule. |
| scheduleTaskName | Indicates the name of the schedule task. In this case it is, **digestemail-identification**. |
| scheduleTaskUrl | Indicates the rest URL of the task that must be scheduled. |

* scheduleTaskPayload: : Indicates the request for the rest API mentioned in the scheduleTaskUrl. This payload indicates how generic objects should be picked up. Generic objects are picked up based on the details given in "query" section of the payload.

    * Filters: Indicate the criteria for generic objects to be picked up for processing. 
    * attributesCriterion: Indicates the match criteria for the generic objects to be picked up. In the case of digest emails, it is "status" attribute with value QUEUED. This means that, all generic objects with status as QUEUED are picked up for further processing.
    * typesCriterion: Indicates the type of generic objects to be picked up. In the case of digest emails, it is fixed for identify schedule object which is **digestEmailIdentifyRequestObject**.

The following attributes are customizable. 

| Attribute | Description | 
|-----------|--------------|
| intervalInMins | Indicates the required time interval in minutes after which the scheduled task executes. |
| sort | Indicates the attributes for sorting the generic objects. |
| groupBy | Indicates the category for grouping the generic objects. |
| distinct | Indicates the attributes used for uniquely identifying one occurence of the generic object. The task parameters- taskType, taskStatus, fileType and profileName are ignored in case of digest email for assignmentNotification. Similarly, assignment parametrs- workflowName, activityName, and assignedUser are ignored in case of digest email for taskNotification. |
| aggregate | Indicates the attributes to aggregate the generic objects. Example: entityId, taskId. |
| fields | Indicates the information to be fetched from each generic object. Example: attributes, relationships. |

<pre>
<code>
POST {{site.data.rdp_glossary.schcreate}}
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
        <span style="background-color: #FFFF00">"scheduleTaskName": {</span>
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
              "value": "{uri}/api/rsGenericInboundService/process"
            }
          ]
        }
      },
      "jsonData": {
        "scheduleConfiguration": {
          <span style="background-color: #FFFF00">"intervalInMins": 720,</span>
          "authContext": {
            "x-rdp-userId": "rdp",
            "x-rdp-clientId": "rdpClient",
            "x-rdp-userRoles": "admin"
          }
        },
        <span style="background-color: #FFFF00">"scheduleTaskPayload": {</span>
          "params": {
            "options": {
              "maxRecords": 1000
            },
            "query": {
              "filters": {
                "attributesCriterion": [
                  {
                    "status": {
                      "exact": "QUEUED"
                    }
                  }
                ],
                "typesCriterion": [
                  "digestEmailIdentifyRequestObject"
                ]
              }
            },
            "sort": {
              "attributes": [
                {
                  "notificationType": "_DESC",
                  "sortType": "_STRING"
                }
              ]
            },
            "groupBy": {
              "attributes": [
                "notificationType"
              ]
            },
            "distinct": {
              "attributes": [
                "workflowName",
                "activityName",
                "assignedUser",
                "taskType",
                "taskStatus",
                "fileType",
                "profileName"
              ]
            },
            "aggregate": {
              "attributes": [
                "entityId",
                "taskId"
              ]
            },
            "fields": {
              "attributes": [
                "_ALL"
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
    "requestId": "a7a487bd-f47d-470a-aaa8-9e6effdf4b12"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Schedule has been submitted for create with schedule Id : scheduleToGenerateTitleForSkuEntity. Please check back after 1 min"
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