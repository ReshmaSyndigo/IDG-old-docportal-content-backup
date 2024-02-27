---
title: Get External Events by ID
sidebar: rdp_sidebar
permalink: api_event_get_scenario23.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, an external event is used to track the status of a particular job in a system by the user. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get external events by specifying the event ID using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response. 

## Scenario

To get the external events by specifying the event ID.

{% include snippets/header.html %}

## Request

Consider you wish to get all the external events of a particular task. In the request specify the following

* query -> typesCriterion : Specify as "externalevent". 
* query -> Specify the appropriate external event ID. In this scenario we have specified "24affd8b-7cda-4499-ab3c-70fe606a9d2e". 

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "24affd8b-7cda-4499-ab3c-70fe606a9d2e",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"externalevent"</span>
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
</code>
</pre>

## Response

Returns the external events belonging to that particular ID. As you can see the response there is one external event.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3039422e-225a-4a05-a8c8-03b8fb774cfd",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "24affd8b-7cda-4499-ab3c-70fe606a9d2e",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-21T09:19:36.798-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-21T09:19:36.798-0500"
        },
        "data": {
          "attributes": {
            "taskType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a5b63a8d-1a73-452e-8b2b-eaa8264e4ded",
                  "value": "loadplatformseed"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d270b63c-7531-4c70-9f30-9f85f6d72a2d",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            },
            "engine": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cae57950-a14c-488a-b96c-25d5e0a2a1c4",
                  "value": "COP"
                }
              ]
            },
            "module": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e0c24e6d-d2fc-4e95-82f8-236478cf21e2",
                  "value": "rsAdminInboundService"
                }
              ]
            },
            "operationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bf8e7198-0325-40f8-a005-2dc3bc23c03d",
                  "value": "inboundService"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a28925d4-aad7-4c5e-af87-e6dcbbcfb458",
                  "value": "INBOUND"
                }
              ]
            },
            "createdOn": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "124b3476-ffb1-4a2d-8b20-a0a3133cae9c",
                  "value": "2018-08-21T14:19:36.789+0000"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f1ddfb7c-3d41-4cd4-b32c-3a9f45388747",
                  "value": "system_user"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "99f88bd6-7b14-477f-8c8d-b2b950693e03",
                  "value": "7abc0099-c177-446f-9800-1e8ac1ad047f"
                }
              ]
            },
            "taskStatus": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "89a09d25-d2fb-46f9-9239-829150dd21e2",
                  "value": "Queued"
                }
              ]
            },
            "originatingClientId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "afa067b2-d8e9-4073-8bcd-4e7d91f1b412",
                  "value": "rdpclient"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.