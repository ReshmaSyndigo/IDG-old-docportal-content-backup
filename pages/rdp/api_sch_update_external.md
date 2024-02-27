---
title: Update a Schedule Object using Scheduler Service
sidebar: rdp_sidebar
permalink: api_sch_update.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to update a schedule object:

* [Update the interval of a schedule](api_sch_update_scenario3.html)
* [Update the task payload of a schedule](api_sch_update_scenario4.html)
* [Update the task URL of a schedule](api_sch_update_scenario5.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.schupdate}}

**Parameters**: The following table lists the parameters of the JSON request to update a schedule object:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entity | Yes | Indicates the schedule object with the values to be updated. See [Schedule Object Structure](api_sch_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request and response to "inactivate" the schedule object which is currently "active" and schedules the publishing of the entities:

<pre><code>
POST {TenantURL or ID}/api/schedulerservice/update
Headers: Content-Type: application/json
Body:
{
  "scheduleObject": {
    "id": "scheduleToPublishEntities",
    "name": "Schedule To Publish Entities",
    "type": "scheduleobject",
    "properties": {
      "enabled": false
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
            "x-rdp-tenantId": "",
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


{% include callout.html content="**Note:** In the above request Json, the **enabled** property is set to **false** to make this schedule object as inactive.
" type="primary" %}

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "31ff528a-ef10-4eab-a580-c2ec785e1ea4"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Schedule has been submitted for update with schedule Id : scheduleToPublishEntities. Schedule changes will take affect within 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/schedulerservice/get\" API to verify the updated schedule object. See [Get a Schedule Object using Scheduler Service](api_sch_get.html).
* The response message of the task executed is internal to the task. The schedule can only determine the success of the HTTP REST API call based on known HTTP protocol such as HTTP response 200. Any other internal interpretation of the response message is not in the scope of the schedule service.
" type="primary" %}

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.