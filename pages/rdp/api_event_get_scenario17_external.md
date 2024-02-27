---
title: Get Govern Events for an Entity based on Creation Date, Entity Type, and Entity Id
sidebar: rdp_sidebar
permalink: api_event_get_scenario17.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get the govern events for an Entity based on creation date, entity type, and entity Id, using a scenario.

## Scenario

To get the govern events for an entity of type "sku" using its entity Id and creation date.

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> typesCriterion : Specify as "entitygovernevent".
* query -> attributesCriterion : Specify the entityType as "sku".
* query -> attributesCriterion : Specify the entity Id as "E47".
* query -> propertiesCriterion : Specify the required creation date range.
* 

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
          <span style="background-color: #FFFF00">"entitygovernevent"</span>
        ],
        <span style="background-color: #FFFF00">"propertiesCriterion": [</span>
          {
            "createdDate": {
              "gte": "2017-10-15T00:30:43.260-0500",
              "lte": "2018-10-20T08:45:43.260-0500",
              "type": "_datetime"
            }
          }
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "entityType": {
              "exact": "sku"
            }
          },
          {
            "entityId": {
              "exact": "E47"
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
      "maxRecords": 100
    }
  }
}
</code>
</pre>

## Response

Returns the govern events for an entity of type "sku" with the Id as "E47" for the specified creation date.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "eb43dc83-df81-46fb-af38-6776566d463f",
    "maxRecords": 100
  },
  "response": {
    "events": [
      {
        "id": "6b0bfdce-8f78-4cd9-8103-87539a1c7238",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "createdService": "entityGovernService",
          "createdBy": "santosh.durvasula@riversand.com_user",
          "modifiedService": "entityGovernService",
          "modifiedBy": "santosh.durvasula@riversand.com_user",
          "createdDate": "2018-02-20T01:11:59.760-0600",
          "modifiedDate": "2018-02-20T01:11:59.760-0600"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "id": "6a21eefc-e61a-45a2-8056-edcf2911c39c",
                  "value": "GovernAdd"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "a14d4fc6-91c9-48ab-8937-dd6039a35cfe",
                  "value": "copClient"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "2accae43-320d-4b0d-ac15-97e33e092170",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "d8dadf05-5a38-4896-9895-217ebf59673c",
                  "value": "att5GFJKR2GvWlOEtstveQ"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "id": "c6fbc517-d706-4e7f-8298-740b80ef58e4",
                  "value": "GovernAdd"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "id": "b986e636-f716-4284-b609-e3bf1338c7f2",
                  "value": "create"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "d66f2a74-31b5-4480-8fa3-1c441e4ad448",
                  "value": "3b13f65f-8dda-4dcd-b2d6-81ea97a21916"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "id": "d9dac0ea-15cb-4758-97b4-e73876e1beef",
                  "value": "0029d6e3-33e7-40c9-908e-0750a9ca403c"
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