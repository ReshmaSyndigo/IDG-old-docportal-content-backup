---
title: Get Task Detail Errors using ID
sidebar: rdp_sidebar
permalink: api_event_get_scenario12.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform allows you to view system errors occurred during data import. You can view the error details in **Task Detail** page. For more information see [Get Familiar with Task Details](/{{site.data.rdp_links_version.APPU}}/user_view_task_get_familiar.html).

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}** to get task detail errors using ID.

## Scenario

To get task detail errors based on task id.

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> id -> Specify the task id.
* query -> filters -> typesCriterion: Specify the entity type as "requestobject".
* query -> requestStatus -> exact: Specify as "error".
* query -> fields -> attributes : "_ALL" to get all attributes of the request.

<pre>
<code>
POST **{{site.data.rdp_glossary.getrequesttrackingobject}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "5efab354-26a0-483c-bea9-692e7393f995", </span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"requestobject"</span>
        ],
        "attributesCriterion": [
          {
            "requestStatus": {
             <span style="background-color: #FFFF00"> "exact": "error"</span>
            }
          }
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
    }
  }
}
</code>
</pre>

## Response

If the above request is submitted successfully, then the following response with status is received from the API:

<pre>
<code>
{
  "response": {
    "requestObjects": [
      {
        "id": "5efab354-26a0-483c-bea9-692e7393f995",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2020-12-17T00:39:34.959-0600",
          "modifiedDate": "2020-12-17T00:39:34.959-0600"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "f9667478-b6b6-4bbb-b9e7-faf7b02e9e82",
                  "value": "update",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "309ff25a-e8df-4efe-b6d9-a124dadbfa0c",
                  "value": "qCBGPGfGRK-J9G3ghpmysA",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "f97f9c24-8888-481a-a2bd-e3ad7f0b0c34",
                  "value": "sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "id": "b08120a2-719b-4963-8950-b419a2522579",
                  "value": "entityManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "f05a96cf-ef1d-458b-8d67-d77d3a72389d",
                  "value": "5efab354-26a0-483c-bea9-692e7393f995",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "id": "c0252844-eff7-47bf-9184-c4c251171baa",
                  "value": "error",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "39e65e47-526d-497d-936d-098e6ff7c552",
                  "value": "2b5919e6-120e-43e4-a4bc-bc2216bbdee4",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "3c20e58c-249a-4952-8e47-89622a899f68",
                  "value": "5efab354-26a0-483c-bea9-692e7393f995",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "05dc635a-5e27-4ab5-8da8-f64b3b24b6c3",
                  "value": "copClient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "32862e61-d378-4aeb-b1e3-558590c4f518",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "fe1169eb-191b-4e9a-8e9c-e004513a2b2b",
                  "value": 1608187174904,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "id": "f6dc72f8-e8b5-456f-8806-07943bfb3d59",
                  "value": "error",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "id": "9fc6b314-ea9d-4fac-9ff2-a73a7bf4baa3",
                  "value": "4cabe633-100b-458b-886d-7e752fbd7224",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "parentTaskId": {
              "values": [
                {
                  "id": "eac33440-4e75-43b3-bfc6-036f2919cd3b",
                  "value": "fa097433-8831-4ae5-9044-f76e9edd662a",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "isEntityData": {
              "values": [
                {
                  "id": "cfc842ad-6667-46bf-af81-5f5b22c78d9f",
                  "value": true,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "id": "5d8782a6-8c0d-4ce4-9f1f-2d7e06b80bce",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"message": { </span>
              "values": [
                {
                  "id": "e0b9a80f-d77d-4a3e-89ec-bd0027cd2e93",
                  "value": "Failed to process request, 5efab354-26a0-483c-bea9-692e7393f995",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"messageCode": {</span>
              "values": [
                {
                  "id": "dd99c139-2c34-476c-a25c-1070e5e0abd2",
                  "value": "E0129",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"messageParams": {</span>
              "values": [
                {
                  "id": "cf163dd3-393f-4aa2-bfe2-0f417e887ec5",
                  "value": "\"5efab354-26a0-483c-bea9-692e7393f995\"",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          "jsonData": {}
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.