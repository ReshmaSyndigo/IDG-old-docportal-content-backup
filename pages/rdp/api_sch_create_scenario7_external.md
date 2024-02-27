---
title: Create a schedule to identify impacted auth model data objects 
sidebar: rdp_sidebar
permalink: api_sch_create_scenario7.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/schedulerservice/create to create a schedule object, using a scenario.

## Scenario

Create a schedule to identify the individual data objects that are impacted as a result of any authorization model update.

{% include snippets/header.html %}

## Request

Impact identification phase processes all the generic objects of type **impactIdentifyRequestObject** in the system (specified by typesCriterion in the query).{% if site.build == "internal" %} See [Get Generic Objects for Impact Processing Identification](api_gen_obj_get_scenario7.html).{% endif %}

{% include callout.html content="**Note**: 
* A separate schedule is required for identifying impacted Auth model data objects as any change in user permissions must be reflected in the system as soon as it is implemented. 
" type="primary" %}

To create the above schedule object, use the REST API {{site.data.rdp_glossary.schcreate}}. In the request, specify the following details:

* Filters: Indicate the criteria for generic objects to be picked up for processing. 
  * query->filters->attributesCriterion: Specify the "status" as "QUEUED".
  * query->filters->chBucket: Specify as "authorizationModel".
  * query->filters->typesCriterion: Specify as "impactIdentifyRequestObject".

| Attribute | Description | 
|-----------|--------------|
| id | Indicates the ID of the schedule task. In this case it is, **impactidentify-schedule**. |
| enabled | Indicates if the schedule configuration is enabled and must be **true** for impact processing identification to be scheduled. |
| scheduleType | Indicates the type of the schedule configuration. Currently, only fixedRate is supported. |
| scheduleTaskName | Indicates the name of the schedule task. In this case it is, **impact-identification**. |
| scheduleTaskUrl | Indicates the rest URL of the task to be scheduled. |
|scheduleTaskPayload | Indicates the HTTP request body to be sent which is a RQL (Riversand Query Language) query. |
| intervalInMins | Indicates the schedule frequency in minutes for performing the impact calculation identification process. |
| authContext | Indicates the authorization headers as needed for a Riversand Platform request. |
| maxRecords | Indicates the batch size, to be used for performing the identification process for all the retrieved objects in batches until exhausted. |
| fields | Indicates the attributes to be fetched. |
| distinct | Indicates that only one unique object is fetched for each combination of the specified attribute's values. |
| doId | Indicates the data object ID of the object that underwent a change, and for which we need to run impact identification. | 
| doType | Indicates the data object type of the object. |
| evId | Indicates the event ID of the event that captures the change that occurred to the object. |

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
                    },
                    {
                      <span style="background-color: #FFFF00">"chBucket": {</span>
                        "exact": "authorizationModel"
                      }
                    }
                  ],
                  "typesCriterion": [
                    <span style="background-color: #FFFF00">"impactIdentifyRequestObject"</span>
                  ]
                }
              },
              "distinct": {
                "attributes": [
                  "doId"
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
          "message": "Impact identify request sent successfully.",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

### Sample generic objects of users whose roles are affected

The sample generic objects are returned when you use the RESTful API {TenantURL or ID}/api/genericobjectmanageservice/get. {% if site.build == "internal" %} See [Get Generic Objects for Impact Processing Identification](api_gen_obj_get_scenario7.html).{% endif %}

| Generic Object 1 | Generic Object 2 | Generic Object 3 |
|------------------|------------------|---------------------|
| doId: user1 | doId: user2 | doId: user1 |
| Role: admin | Role: buyer | Role: buyer |
| locale: en-US | domain:thing | domain:thing |
| status : QUEUED | status : QUEUED | status : QUEUED |

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.