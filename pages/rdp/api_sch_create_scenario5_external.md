---
title: Create a schedule to identify impacted data objects
sidebar: rdp_sidebar
permalink: api_sch_create_scenario5.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/schedulerservice/create to create a schedule object, using a scenario.

## Scenario

Create a schedule to identify the individual data objects that are impacted as a result of a model or template update (Content template model, template qualification config, and data governance model update only). See [Create a schedule to identify impacted auth model data objects](api_sch_create_scenario7.html).

{% include snippets/header.html %}

## Request

{% if site.build == "internal" %}
* Impact identification schedule configuration processes all generic objects of type **impactIdentifyRequestObject** in the system (specified by typesCriterion in the query). See [Get Generic Objects for Impact Processing Identification](api_gen_obj_get_scenario7.html).
* Once processing is done, a new set of generic objects are created with type as **impactExecuteRequestObject**. See [Get Generic Objects for Impact Processing Execution](api_gen_obj_get_scenario8.html).
{% endif %}

{% if site.build == "external" %}
* Impact identification schedule configuration processes all generic objects of type **impactIdentifyRequestObject** in the system (specified by typesCriterion in the query).
* Once processing is done, a new set of generic objects are created with type as **impactExecuteRequestObject**.
{% endif %}

To create the above schedule object, use the REST API {{site.data.rdp_glossary.schcreate}}. In the request, specify the following details:

* Filters: Indicate the criteria for generic objects to be picked up for processing. 
  * query->filters->attributesCriterion: Specify the "status" as "QUEUED".
  * query->filters->typesCriterion: Specify as "impactIdentifyRequestObject".

| Attribute | Description | 
|-----------|-------------------------------------|
| id | Indicates the ID of the schedule task. In this case it is, **impactidentify-schedule**. |
| enabled | Indicates if the schedule configuration is enabled and must be **true** for impact processing identification to be scheduled. |
| scheduleType | Indicates the type of the schedule configuration. Currently, only fixedRate is supported. |
| scheduleTaskName | Indicates the name of the schedule task. In this case it is, **impact-identification**. |
| scheduleTaskUrl | Indicates the rest URL of the task to be scheduled. |
|scheduleTaskPayload | Indicates the HTTP request body to be sent which is a RQL (Riversand Query Language) query. |
| intervalInMins | Indicates the schedule frequency in minutes for performing the impact calculation identification process. |
| authContext | Indicates the authorization headers as needed for a Riversand Platform request. |
| maxRecords | Indicates the batch size, to be used for performing the identification process for all the retrieved objects in batches until exhausted. |
| sort | Indicates the field to sort on and the datatype of the field. |
| fields | Indicates the attributes to be fetched. |
|  groupBy | Indicates the group or the model that has changed and is pre-defined as "chBucket". If a business rule or business condition has changed, then the value of chBucket is "DDG". <br/> **DDG** is used for governance rules, conditions, mappings, contentTemplateModels and templateQualificationConfigs. <br/> **authorizationModel** is used for recalculating authorization models of all users belonging to a certain role. |
| distinct | Indicates that only one unique object is fetched for each combination of the specified attribute's values. |
| doId | Indicates the data object ID of the object that underwent a change, and for which we need to run impact identification. | 
| doType | Indicates the data object type of the object. |
| evId | Indicates the event ID of the event that captures the change that occurred to the object. |
| aggregate | Indicates the distinct operation, that forms an array of all the event IDs found for the specified attributes across the individual objects combined by distinct. For example, consider a sku with ID 1001 was impacted due to the following: <br/> 2 BusinessRule objects: br1 and br2 <br/> 1 businessCondition object: bc1 <br/> In this case, the resulting **impactIdentifyRequestObject** has the following: <br/> doId: 1001 <br/> doType: sku <br/> businessRule: [ br1 , br2 ] <br/> businessCondition: [ bc1 ] |

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
      "id": "impactidentify-schedule",
      "name": "schedule for impact identification",
      "type": "scheduleobject",
      "properties": {
        "enabled": true
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
                "value": "impact-identification"
              }
            ]
          },
          <span style="background-color: #FFFF00">"scheduleTaskUrl": {</span>
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "http://uri/{{TENANT}}/api/impactmanageservice/identify"
              }
            ]
          }
        },
        "jsonData": {
          "scheduleConfiguration": {
            <span style="background-color: #FFFF00">"intervalInMins": 10080,</span>
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
                "maxRecords": 1000
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
                    <span style="background-color: #FFFF00">"impactIdentifyRequestObject"</span>
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
              "groupBy": {
                "attributes": [
                  "chBucket"
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
                  "evId"
                ]
              },
              "fields": {
                "attributes": [
                  "_ALL"
                ]
              }
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
    "requestId": "73e234d0-542f-4e09-b867-e6bc3f2f1aa0"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0054",
          "message": "Impact identify request sent successfully.",
          "messageType": "success"
        }
      ]
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