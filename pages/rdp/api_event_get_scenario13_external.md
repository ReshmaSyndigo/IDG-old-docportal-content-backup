---
title: Get Workflow History of an Entity
sidebar: rdp_sidebar
permalink: api_event_get_scenario13.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get the workflow events of an entity, using a scenario.

## Scenario

To get the "NewSKUIntroduction" workflow events for an entity of type "sku".

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> contexts : Specify the context type as "self" and entity id as "eOzo0e4AwpV0l".
* query -> contexts : Specify the name of the workflow as "NewSKUIntroduction".
* query -> typesCriterion : Specify as "entitygovernevent".

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "self": "self/eOzo0e4AwpV0l",
          "workflow": "NewSKUIntroduction"
        }
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"entitygovernevent"</span>
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
    "options": {
      "totalRecords": 1
    }
  }
}
</code>
</pre>

## Response

Returns the workflow events for the "sku" entity. In the response, you can view all the workflow events related to "NewSKUIntroduction" that occurred for the entity. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "d9bf7233-6447-48bb-9b1f-6642a7aabcdb",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "1e757275-738f-4889-86c3-49b50791bbf0",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "createdService": "entityGovernService",
          "createdBy": "system_user",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "createdDate": "2018-09-06T05:31:31.891-0500",
          "modifiedDate": "2018-09-06T05:31:31.891-0500",
          "changeContext": "entityGovernService",
          "changeType": "addContext"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a7e52ace-fc33-4ad1-a850-c8883814bbc8",
                  "value": "GovernAdd"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "30cbf769-ec65-4ed9-8128-d284179df9ed",
                  "value": "copClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "88a0370f-b017-4f85-a0d3-ab34a2933506",
                  "value": "2018-09-06T05:31:31.888-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ac140edd-9787-4594-b030-11c2ca81af14",
                  "value": "profileType"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "952a939d-a2e6-46fa-8844-b0f98061800f",
                  "value": "0a7d9312-abf0-4542-9a9c-38961582e7cp"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "496244b9-c199-4cab-be7d-b5529e86ccc9",
                  "value": "GovernAdd"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a85bf034-f2d5-4f5f-86be-9cf0fc51e778",
                  "value": "create"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1611704b-a3a7-405c-8efe-6ef22566e1b0",
                  "value": "5d5e78e9-9392-47ad-bd7d-d6169481ff95"
                }
              ]
            }
          },
          "relationships": {
            "eventTarget": [
              {
                "id": "0906dcff-4f6d-4f1d-9818-48ad009ad974",
                "relTo": {
                  "id": "0a7d9312-abf0-4542-9a9c-38961582e7cp",
                  "type": "profileType"
                },
                "properties": {
                  "version": 1
                }
              }
            ]
          }
        }
      },
      {
        "id": "2dd4b9e9-ffcd-4b97-a7eb-e4877cb203a3",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "createdService": "entityGovernService",
          "createdBy": "system_user",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "createdDate": "2018-09-06T05:31:29.926-0500",
          "modifiedDate": "2018-09-06T05:31:29.926-0500",
          "changeContext": "entityGovernService",
          "changeType": "addContext"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1e6496c0-5a1e-4393-8b97-71edb757a9ca",
                  "value": "GovernAdd"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "40a7c289-34c2-4bd2-a2ea-e0c298bda004",
                  "value": "copClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "207427eb-b373-4ec9-bf7a-ace7436b539d",
                  "value": "2018-09-06T05:31:29.918-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4ed1fdfb-d079-4a3f-95fb-1e6169acaff5",
                  "value": "length"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b514ef98-1d9d-47e7-9a79-e02112d545b1",
                  "value": "b9fa8280-8028-4513-942d-ccb99042c2ac"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b6d52642-1d64-4381-9a36-c11ad6472c50",
                  "value": "GovernAdd"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3ba9ba48-baa4-435f-91f5-62bfa400eb3a",
                  "value": "create"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c465fecc-5bf9-4387-95ed-27a78d2e41f9",
                  "value": "96cf2fcc-5882-48da-8dc8-aaa7489b00c9"
                }
              ]
            }
          },
          "relationships": {
            "eventTarget": [
              {
                "id": "3205b5f9-36ab-4ed1-9804-f38a6d04cdfe",
                "relTo": {
                  "id": "b9fa8280-8028-4513-942d-ccb99042c2ac",
                  "type": "length"
                },
                "properties": {
                  "version": 1
                }
              }
            ]
          }
        }
      }
      .
      .
      .
      .
      .
    ],
    "status": "success",
    "totalRecords": 10763
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.