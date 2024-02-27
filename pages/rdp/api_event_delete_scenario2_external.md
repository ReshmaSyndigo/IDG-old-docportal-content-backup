---
title: Get Manage History for Entity
sidebar: rdp_sidebar
permalink: api_event_delete_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, there are various events that occur to an entity. When an event is deleted from an entity Riversand Platform records these change types. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get such events using a [scenario](#scenario).

## Scenario

To get history of events for "sku" entity.

{% include snippets/header.html %}

## Request

In the request send the following details:

* query -> attributesCriterion : Specify the required entity Id for which you wish to get the events.
* query -> typesCriterion : As this change type occurred on the managed data, specify as "entitymanageevent". 

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"entitymanageevent"</span>
        ],
        "attributesCriterion": [
          {
            "entityId": {
              <span style="background-color: #FFFF00">"exact": "ePhEuHHOcz4rH"</span>
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1000
    }
  }
}
</code>
</pre> 

## Response

Returns the events that are currently present for "sku" entity. As you can see in the response, the "EntityCreate" event that was deleted in the [Delete Entity Manage Event](api_event_delete_scenario1.html) is not present. All the other events corresponding to the entity, such as EntityUpdate can be seen.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "4f457ac7-1436-4941-bec7-799ade1aec8d",
    "maxRecords": 1000
  },
  "response": {
    "events": [
      {
        "id": "8f2e90eb-f94d-425e-a05f-92c18cb49030",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2018-09-21T02:28:39.062-0500"
        },
        "data": {
          "attributes": {
            "productid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "94bcebfa-19dc-4a2e-8d48-6fa7f3320869",
                  "value": "123456"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addAttributeToContext"
              }
            },
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e68726d9-9c83-4654-87e7-c5f0670c52a6",
                  "value": "EntityUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2f68c368-862c-4e56-bf9d-fe6502b1d3b3",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e235190c-95d3-4fb2-ac5a-245ad0f42475",
                  "value": "2018-09-21T02:28:39.062-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "14499a43-02ea-4d2a-a6a3-326e37a1f723",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8daa8b16-ea6d-4b1c-a297-83809935de17",
                  "value": "ePhEuHHOcz4rH"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "542f931d-f5e6-4238-9fb8-7436a02a2802",
                  "value": "EntityUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5d9a31ca-a2e6-45d2-ac24-6d91d08a31b4",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e250b1ea-eb0e-49fc-a381-8b05b6342c32",
                  "value": "5747acf0-cee9-4c67-a8d1-73990ece1a73"
                }
              ]
            }
          }
        }
      },
      {
        "id": "7644e893-db4e-4431-88aa-ab3ebfb102c4",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2018-09-21T02:28:43.063-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "bae25dd1-cf39-4247-80e0-f9883bedefb4",
                  "value": "EntityUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "02797487-4302-4da4-8a2d-541d2ba8a154",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b6fa225e-2ddc-47f4-9864-e9be3fd7a4f2",
                  "value": "2018-09-21T02:28:43.063-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b7b190f7-31db-4321-9b6c-b697c8b3df93",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "efa0e5b6-9b76-44d8-b6c3-90a9701d0217",
                  "value": "ePhEuHHOcz4rH"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8162edac-902b-42a7-83e7-b0ebf622953c",
                  "value": "EntityUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b003b0e0-a2b5-401f-b1bc-564713880d5a",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d15ef6b1-f0d7-49d5-88df-a5cef3e614c6",
                  "value": "2b38e2df-e988-42e9-8d24-fb4d8b87f586"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.