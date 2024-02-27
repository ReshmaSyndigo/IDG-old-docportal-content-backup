---
title: Create a schedule to execute model changes to impacted data objects 
sidebar: rdp_sidebar
permalink: api_sch_create_scenario6.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/schedulerservice/create to create a schedule object, using a scenario.

## Scenario

Create a schedule to execute the model change to the individual data objects that are impacted as a result of a model or template update.

{% include snippets/header.html %}

## Request

Impact execution phase processes generic objects of type **impactExecuteRequestObject** in the system (specified by **typesCriterion** in the query). {% if site.build == "internal" %} See [Get Generic Objects for Impact Processing Execution](api_gen_obj_get_scenario8.html).{% endif %}

{% include callout.html content="**Note**: 
Impact calculation is a heavy process, so it is recommended that the frequency of the schedule object to identify impacted data objects is lower than the frequency of the schedule object to execute model changes to impacted data objects.
" type="primary" %}

To create the above schedule object, use the REST API {{site.data.rdp_glossary.schcreate}}. In the request, specify the following details:

* Filters: Indicate the criteria for generic objects to be picked up for processing. 
  * query->filters->attributesCriterion: Specify the "status" as "QUEUED".
  * query->filters->typesCriterion: Specify as "impactExecuteRequestObject".

| Attribute | Description | 
|-----------|--------------|
| id | Indicates the ID of the schedule task. In this case it is, **impactexecute-schedule**. |
| enabled | Indicates if the schedule configuration is enabled and must be **true** for impact processing execution to be scheduled. |
| scheduleType | Indicates the type of the schedule configuration. Currently, only fixedRate is supported. |
| scheduleTaskName | Indicates the name of the schedule task. In this case it is, **impact-execution**. |
| scheduleTaskUrl | Indicates the rest URL of the task to be scheduled. |
|scheduleTaskPayload | Indicates the HTTP request body to be sent which is a RQL (Riversand Query Language) query. |
| intervalInMins | Indicates the schedule frequency in minutes for performing the imapct calculation execution process. |
| authContext | Indicates the authorization headers as needed for a Riversand Platform request. |
| maxRecords | Indicates the max number of objects to process as part of the current request sent by the scheduler service. (This is different from the behavior in impact identify) |
| sort | Indicates the field to sort on and the datatype of the field. |
| fields | Indicates the attributes to be fetched. |
| distinct | Indicates that only one unique object is fetched for each combination of the specified attribute's values. |
| doId | Indicates the data object ID of the impacted object identified in the identification phase, and for which impact processing must be executed. | 
| doType | Indicates the data object type of the impacted object. |
| aggregate | Indicates the aggregate of attributes for the impact process execution. |

<pre>
<code>
POST {{site.data.rdp_glossary.schcreate}}
Headers: Content-Type: application/json
Body:
{
  "metaInfo": {
    "dataIndex": "scheduleObject",
    "collectionName": "scheduleObjects",
    "responseObjectName": "response"
  },
  "scheduleObjects": [
    {
      "id": "impactexecute-schedule",
      "name": "schedule for impact execution",
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
                "value": "impact-execution"
              }
            ]
          },
          <span style="background-color: #FFFF00">"scheduleTaskUrl": {</span>
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "http://uri/{{TENANT}}/api/impactmanageservice/execute"
              }
            ]
          }
        },
        "jsonData": {
          "scheduleConfiguration": {
            <span style="background-color: #FFFF00">"intervalInMins": 15,</span>
            "authContext": {
              "x-rdp-userRoles": "admin",
              "x-rdp-clientId": "rdpclient",
              "x-rdp-tenantId": "{{TENANT}}",
              "x-rdp-ownershipdata": "",
              "x-rdp-userid": "system_user",
              "x-rdp-username": "system",
              "x-rdp-useremail": "system",
              "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
            }
          },
          <span style="background-color: #FFFF00">"scheduleTaskPayload": {</span>
            "params": {
              "options": {
                "maxRecords": 100
              },
              "query": {
                "filters": {
                  "attributesCriterion": [
                    {
                      <span style="background-color: #FFFF00">"status": {</span>
                        "exact": "QUEUED"
                      }
                    }
                  ],
                  "typesCriterion": [
                    <span style="background-color: #FFFF00">"impactExecuteRequestObject"</span>
                  ]
                }
              },
              "sort": {
                "attributes": [
                  {
                    "doId": "_DESC",
                    "sortType": "_STRING"
                  }
                ]
              },
              "distinct": {
                "attributes": [
                  "doId",
                  "doType"
                ]
              },
              "aggregate": {
                "attributes": [
                  "contentTemplateModel",
                  "templateQualificationConfig",
                  "businessRule",
                  "businessCondition",
                  "ruleContextMappings"
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
  ]
}
</code>
</pre>

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/schedulerservice/get\" API to verify the created schedule object. See [Get a Schedule Object using Scheduler Service](api_sch_get.html) and [Get a particular schedule Info object using schedule Id](api_sch_get_scenario10.html).
* The response message of the task executed is internal to the task. The schedule can only determine the success of the HTTP REST API call based on known HTTP protocol such as HTTP response 200. Any other internal interpretation of the response message is not in the scope of the schedule service.
" type="primary" %}

## Response

If the schedule create request is submitted successfully, then the following response is received from create schedule API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "73e234d0-542f-4e09-b867-e6bc3f2f1aa0"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0054",
          "message": "Impact execute request sent successfully.",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.