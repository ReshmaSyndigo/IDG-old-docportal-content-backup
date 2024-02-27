---
title: Get Govern Events for a particular Entity Type
sidebar: rdp_sidebar
permalink: api_event_get_scenario16.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get the govern events for a particular entity type, using a scenario.

## Scenario

To get the govern events for an entity of type "sku".

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> typesCriterion : Specify as "entitygovernevent".
* query -> attributesCriterion : Specify the entity type as "sku".

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
        "attributesCriterion": [
           {
            <span style="background-color: #FFFF00">"entityType": {</span>
              "exact": "sku"
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
      "maxRecords": 4
    }
  }
}
</code>
</pre>

## Response

Returns the govern events for an entity of type "sku". 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "8f8914d9-a2e6-441c-a9b0-52cf51bc278c",
    "maxRecords": 4
  },
  "response": {
    "events": [
      {
        "id": "3664d51f-f58e-4687-ae9e-bec43fd42406",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "createdService": "entityGovernService",
          "createdBy": "rekhakudlur@gmail.com_user",
          "modifiedService": "entityGovernService",
          "modifiedBy": "rekhakudlur@gmail.com_user",
          "createdDate": "2018-02-21T07:50:25.009-0600",
          "modifiedDate": "2018-02-21T07:50:25.009-0600"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "id": "13cac8cb-6a62-4ef3-8a61-55e573764161",
                  "value": "GovernAdd"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "8be2219f-27d6-476c-a318-e4551c23e4c1",
                  "value": "copClient"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "31541626-cde5-4df6-bee9-3aca0e3e5365",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "3c11f26a-dbc5-4a87-9fe9-26f2e8b0fadd",
                  "value": "6u1B6awhTWiIANR1se_0Fg"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "id": "9a9ff34d-f012-49b3-9f69-4a635f258862",
                  "value": "GovernAdd"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "id": "56d57112-932e-4e5c-ae9f-abb382184062",
                  "value": "create"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "7165d2d8-c973-4bb7-a184-8eabe12f19da",
                  "value": "233ab0fa-2923-48b0-8377-105122e83411"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "id": "b572b96f-d178-43a5-9fa5-e8cc96d61bbc",
                  "value": "c57f543a-863b-494e-b921-f11d97f28c1e"
                }
              ]
            }
          }
        }
      },
      {
        "id": "934cb35f-fb48-4d54-8a05-39eed9b41c8a",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "rekhakudlur@gmail.com_user",
          "modifiedDate": "2018-02-21T07:50:23.744-0600"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "id": "ed2da776-30ee-4022-b6b7-e302e5222d93",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "ebf25133-74b7-4368-aa47-696fc4fbba4d",
                  "value": "copClient"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "699d39f6-70ab-4c4b-99c0-fbba99d684ad",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "a39d0e1a-34cf-4d37-8a93-23cd49b268e4",
                  "value": "TzDN_IdSRLqi1bz7DFR7VQ"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "id": "e312c93c-15ae-42e0-8291-a7e3e5f51f95",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "id": "b0a367f7-98ba-4786-b559-9c4c901ce306",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "0e13ff05-6236-47a8-940e-822615c2734d",
                  "value": "a2eecb1f-0660-436d-b05c-cb66c8dcaf23"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "id": "5673cf47-b573-48d5-a664-a454d42a110c",
                  "value": "c57f543a-863b-494e-b921-f11d97f28c1e"
                }
              ]
            }
          }
        }
      },
      {
        "id": "f1768aa8-28b1-44a0-95ee-2a8cfc166d50",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-02-21T07:50:23.517-0600"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "id": "8759e873-6741-44af-b2fe-e55a24c5ed29",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "72be2a07-d6fe-4776-8667-ad37ecf2da16",
                  "value": "governanceClient"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "90441029-915f-443b-a561-cc532ce7cac7",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "865ad4bd-cabc-4c12-bef6-9f62682856b8",
                  "value": "PzHZDAtOR1yGu6s0Uc7UMA"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "id": "c78bf670-05f7-4713-b536-32697d746652",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "id": "a87e9938-62d4-481f-8e9f-0377a5921f33",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "31c690ca-811c-4b0b-97aa-7c2d29452630",
                  "value": "56e28e55-08ab-44cb-969f-bc295d5481db"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "id": "ffda1b72-28e8-401a-8595-6bc114fa8008",
                  "value": "c57f543a-863b-494e-b921-f11d97f28c1e"
                }
              ]
            }
          }
        }
      },
      {
        "id": "f36a57c3-f9e7-4ca2-9a59-c87e8719dbaa",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-02-21T07:50:19.086-0600"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "id": "073084fc-068b-410c-b530-49df6616bfec",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "004088a7-6dae-4c50-9df6-b1650f706435",
                  "value": "governanceClient"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "18677156-18b5-47f6-9c66-be362f32e390",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "f18f9262-79c8-43a0-9e4e-0116d472f95b",
                  "value": "cKLQV30QTheh0mA3Q0MH9g"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "id": "4200f229-ad7d-473c-a401-f7074146b4f5",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "id": "7b72077f-8d41-4cfe-8e65-3db1e7e0c97c",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "3fbabad1-96c9-4049-8761-48f4c5a8598f",
                  "value": "90be62b7-63be-4ce5-83b2-0c7ea36af0fa"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "id": "164f6eaa-b55a-4fe9-b257-dad73eda1e19",
                  "value": "c57f543a-863b-494e-b921-f11d97f28c1e"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 119
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.