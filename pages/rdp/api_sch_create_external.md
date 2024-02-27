---
title: Create a Schedule Object using Scheduler Service
sidebar: rdp_sidebar
permalink: api_sch_create.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create a schedule object using Scheduler Service:

* [Create a schedule to generate title for entity](api_sch_create_scenario1.html)
* [Create a schedule to link entity to a product](api_sch_create_scenario2.html)
* [Create a schedule to link entity to an image](api_sch_create_scenario12.html)
* [Create a schedule to identify notifications for digest emails](api_sch_create_scenario3.html)
* [Create a schedule to execute notifications for digest emails](api_sch_create_scenario4.html)
* [Create a schedule to export entity data](api_sch_create_scenario9.html)
* [Create a schedule to identify impacted data objects](api_sch_create_scenario5.html)
* [Create a schedule to execute model changes to impacted data objects](api_sch_create_scenario6.html)
* [Create a schedule to identify auth model impacted data objects](api_sch_create_scenario7.html)
* [Create a schedule to execute auth model changes to impacted data objects](api_sch_create_scenario8.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.schcreate}}

**Parameters**: The following table lists the parameters of the JSON request to create a schedule object:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | scheduleObject | Yes | Indicates the details of the schedule object to be created. See [Schedule Object Structure](api_sch_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response or not.|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |
|response|totalRecords|Indicates the list of schedule objects that matched the search criteria.|

## Example

The following example demonstrates a sample request and response to create a schedule object to publish the entities:

<pre><code>
POST {TenantURL or ID}/api/schedulerservice/create
Headers: Content-Type: application/json
Body:
{
  "scheduleObject": {
    "id": "scheduleToPublishEntities",
    "name": "Schedule To Publish Entities",
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
        "scheduleTaskName": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "scheduled_json_data_publish"
            }
          ]
        },
        "scheduleTaskUrl": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "http://{URI}/api/rsConnectService/publish"
            }
          ]
        }
      },
      "jsonData": {
        "scheduleConfiguration": {
          "intervalInMins": 30,
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
        "scheduleTaskPayload": {
          "params": {
            "query": {
              "filters": {
                "attributesCriterion": [
                  {
                    "taskType": {
                      "exact": "publish_entities"
                    }
                  },
                  {
                    "status": {
                      "exact": "QUEUED"
                    }
                  }
                ],
                "typesCriterion": [
                  "scheduledrequestobject"
                ]
              }
            },
            "fields": {
              "attributes": [
                "_ALL"
              ],
              "relationships": [
                "_ALL"
              ]
            },
            "rsconnect": {
              "profiles": [
                "scheduled_json_data_publish"
              ]
            }
          }
        }
      }
    }
  }
}
</code></pre>


**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "8c826f53-8312-418c-a6b6-6b0d2c16d63b"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Schedule has been submitted for create with schedule Id : scheduleToPublishEntities. Please check back after 1 min"
    },
    "totalRecords": 0
  }
</code></pre>

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/schedulerservice/get\" API to verify the created schedule object. See [Get a Schedule Object using Scheduler Service](api_sch_get.html).
* The response message of the task executed is internal to the task. The schedule can only determine the success of the HTTP REST API call based on known HTTP protocol such as HTTP response 200. Any other internal interpretation of the response message is not in the scope of the schedule service.
" type="primary" %}

## Troubleshooting
See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.