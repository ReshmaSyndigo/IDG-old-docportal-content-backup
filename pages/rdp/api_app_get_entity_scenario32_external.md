---
title: Get Entity History in Specific Context
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario32.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentityhistory}}** to get history of an entity in specified context, using a scenario.

## Scenario

To get entity history of "SKU" entity in "Belgium" context.

{% include snippets/header.html %}

## Request

To get the entity history, you can use the REST API {{site.data.rdp_glossary.appgetentityhistory}}. In the request send the following details :

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> contexts : Specify the context for which you wish to get the history.
* query -> filters -> allContextual, nonContextual : Set to false.
* query -> id -> Specify the entity Id.
* fields -> attributes: Specify the attributes for which you wish to get the history.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/getentityhistory**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "country": "Belgium"
        }
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        <span style="background-color: #FFFF00">"allContextual": false,</span>
        <span style="background-color: #FFFF00">"nonContextual": false</span>
      },
      <span style="background-color: #FFFF00">"id": "PoloShirts"</span>
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "sort": {
      "properties": [
        {
          "modifiedDate": "_DESC",
          "sortType": "_DATETIME"
        }
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

Returns all change events in "Belgium" context only. 
* **Note**: 
* If "nonContextual" flag is set to "true" in the above request, it returns all change events in self and Belgium context.
* If "allContextual" flag is set to "true" in the above request, it returns all change events in all contexts, including self.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "d1420998-2532-461a-b543-e6c87ff56c8c",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "49903e0b-c6ae-4759-bdf2-c35377abcfd6",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2018-12-10T23:03:36.869-0600"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cbc97094-fb9a-4aab-98f6-76d17fe48c79",
                  "value": "EntityUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c1fc0be7-9fb4-4013-aed6-13855c4283b8",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d7b3537f-182b-4539-bfeb-6bb58c2843c1",
                  "value": "2018-12-10T23:03:36.869-0600"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "54887156-b1a9-456d-99e3-fe05736df05b",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5197b908-33f7-4e3c-bcdd-513e365260ea",
                  "value": "PoloShirts"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6b9d7adb-22e8-4c66-9a44-bf1b5712d15b",
                  "value": "EntityUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "389635b0-79ee-452d-a814-25c9c04dfa2c",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a2640314-8022-4fa7-9611-55b411628a00",
                  "value": "89c13993-0476-48c2-a53b-4514cbab66d1"
                }
              ]
            }
          },
          "contexts": [
            {
              "context": {
                "country": "Belgium"
              },
              "attributes": {
                "description": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "fr-BE",
                      "id": "249ae558-5a5f-41e0-aea1-a45d9aa4f284",
                      "value": "Description in Country"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityManageService",
                    "changeType": "addAttributeToContext"
                  }
                }
              }
            }
          ]
        }
      },
      {
        "id": "cc18574b-0560-4f3d-9359-56b2a0f15610",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2018-12-06T23:27:17.648-0600"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cf758e57-32dd-419d-ac63-c40d6f4445e9",
                  "value": "EntityUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "923293a6-fb91-4c9e-82ce-e4cddff724de",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e605c739-0670-43d1-b7a9-d53ad9043567",
                  "value": "2018-12-06T23:27:17.648-0600"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "618564d8-65dc-40b0-ab26-d11147b9dcac",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e7898af3-2c0a-4cce-af50-23e0381124df",
                  "value": "PoloShirts"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "74162c53-2a3b-4580-a14a-5a4d3066dbc1",
                  "value": "EntityUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2f117159-9c7d-4f00-a110-74cdb2a11049",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f26e7951-a0ea-4ff0-881f-d4f83c549d0e",
                  "value": "9e905bdb-96b5-4e44-9399-c63b07dc4bc6"
                }
              ]
            }
          },
          "contexts": [
            {
              "context": {
                "country": "Belgium"
              },
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            }
          ]
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