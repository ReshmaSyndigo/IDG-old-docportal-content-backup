---
title: Get Workflow History of one Entity without Sort on startdatetime
sidebar: rdp_sidebar
permalink: api_event_get_scenario18.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get workflow events of an entity for a Workflow Activity, using a scenario.

## Scenario

To get the workflow events of an entity "sku" of the "NewSKUIntroduction" workflow using the attribute "startDateTime".

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> contexts : Specify the context type as "self" and entity id as "eOzo0e4AwpV0l".
* query -> contexts : Specify the name of the workflow as "NewSKUIntroduction".
* query -> typesCriterion : Specify as "entitygovernevent".
* query -> attributes : "startDateTime".

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
    "sort": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        {
          "startDateTime": "_DESC",
          "sortType": "_DATETIME"
        }
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

Returns the workflow events for the "sku" entity. In the response, you can view all the govern events related of the "NewSKUIntroduction" workflow arranged according to the "startDateTime".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3a8a313e-c40d-441c-89ca-729922bab863",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "072e3502-7215-4281-ade2-1a4ef5dbcc7d",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-11T04:42:27.920-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "27a2d162-626d-432f-a1e5-3e57daa806ab",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d666a2d6-3946-43e2-85c2-dc3d9798c9eb",
                  "value": "governanceClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e6bceb26-142b-4e1b-9f40-6a02c3aed502",
                  "value": "2018-09-11T04:42:27.874-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e2344a2f-97a0-41f2-a8cf-91124c74c81e",
                  "value": "product"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cb7fcabf-d0f3-4a93-a613-b23c2159d831",
                  "value": "ebc25959-8172-470f-861c-c01632e70c73"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c5f8d3f8-6e31-4587-b0cf-4079899ecc8e",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "59e2495a-d4e6-4cc6-9bf2-3a63ab8d6204",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a4b3d3c3-66a5-49a1-9985-ae717e7b4541",
                  "value": "bb6008c3-6ef9-4357-aa7c-058ca367bbde"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d742d732-3eaa-4a30-b06f-c135a7c0122f",
                  "value": "233d88b6-8896-4a99-b0ee-097f356c5e99"
                }
              ]
            }
          },
          "relationships": {
            "eventTarget": [
              {
                "id": "edce429d-6215-4c74-8443-487099185e22",
                "relTo": {
                  "id": "ebc25959-8172-470f-861c-c01632e70c73",
                  "type": "product"
                },
                "properties": {
                  "version": 1
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "self": "self",
                "workflow": "NewProductIntroduction"
              },
              "attributes": {
                "workflowInstanceId": {
                  "values": [
                    {
                      "id": "225d90d6-e327-445f-a145-8111d769eb38",
                      "value": "d27aa771-62f8-4068-bd28-dc72db218a74"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "6ef019c0-c931-4965-9d1e-64355d7334df",
                      "value": "2018-09-11T09:42:27.027-0500"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                },
                "status": {
                  "values": [
                    {
                      "id": "c0626284-c48b-4932-968f-5d3a1cf1be8d",
                      "value": "Executing"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                }
              },
              "properties": {
                "changeContext": "entityGovernService",
                "changeType": "addContext"
              }
            }
          ]
        }
      }
      .
      .
      .
      .
      .
    ],
    "status": "success",
    "totalRecords": 10866
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.