---
title: Get Entity History in All Contexts
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario30.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentityhistory}}** to get history of an entity in all contexts, using a scenario.

## Scenario

To get entity history of "SKU" entity in all contexts.

{% include snippets/header.html %}

## Request

To get the entity history, you can use the REST API {{site.data.rdp_glossary.appgetentityhistory}}. In the request send the following details :

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> filters -> allContextual: Set to true to get history in all contexts.
* query -> id -> Specify the entity Id.
* fields -> attributes: Specify the attributes for which you wish to get the history.
* sort -> modifiedDate, sort -> sortType: To sort history in ascending/descending order of modified date.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/getentityhistory**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        <span style="background-color: #FFFF00">"allContextual": true,</span>
        "nonContextual": false
      },
      <span style="background-color: #FFFF00">"id": "PoloShirts"</span>
    },
    "sort": {
      "properties": [
        {
          "modifiedDate": "_DESC",
          "sortType": "_DATETIME"
        }
      ]
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

Returns all change events at self, country and channel contexts.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "0b5f23bc-c3d5-41f0-b6c0-3c964ff63193",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "efe43fc7-297c-4437-a86f-82e58d5bee61",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2018-12-06T23:22:55.240-0600"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "58e549b5-7e5f-4fb3-9c71-d27313c21153",
                  "value": "EntityUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f286d297-d085-4b56-9826-14625270ff5d",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "507bd145-f9c4-4d7c-828d-94bdc38ef086",
                  "value": "2018-12-06T23:22:55.240-0600"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "aa09eb2d-f8d4-4658-8313-2fccba0a51ef",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b6d245c9-d542-4bd9-95ab-fd0cb937a37d",
                  "value": "PoloShirts"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "197f2c1a-b974-4c78-86ea-2c5736ff7dff",
                  "value": "EntityUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "60781265-9171-4bde-b885-caaa1b64f572",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ef6b690f-1638-4d85-b47f-86198fa1384d",
                  "value": "f764e149-8689-41d7-8e98-6022a688c402"
                }
              ]
            }
          }
        }
      },
      {
        "id": "08306e5d-c4c3-4ab0-90bb-f9bebdbb3f26",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-12-06T23:22:52.447-0600",
          "modifiedDate": "2018-12-06T23:22:52.447-0600",
          "changeContext": "entityManageService",
          "changeType": "addContext"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "387eca4c-4e0c-455f-b3df-8c54d5a19097",
                  "value": "7December"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "productid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "136f289d-be68-4b03-8a91-92c35a001fcf",
                  "value": "7December"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d38319d4-374f-41fc-8e4e-c1b44581b380",
                  "value": "7December"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "cost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a89a33cf-9ad3-41b6-af49-03214537429d",
                  "value": 90
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3663c2ea-cfc6-4081-975e-0f9ee238f498",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f662eb46-6cd0-40ec-8f00-33d5483c64dc",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2018-12-06T23:22:52.103-0600"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4f5c7361-2b5a-490f-abe4-405a55da93a7",
                  "value": "AttributesAdd"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6ca4cbe2-5809-43f2-a6f4-ac93cbd4444f",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "15266126-2c1c-4051-94e5-4c72b7824d18",
                  "value": "2018-12-06T23:22:52.447-0600"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2346aa98-2ed8-45ea-99d3-b62cdd287e65",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3496752a-4acb-45c0-b816-5783a26add04",
                  "value": "PoloShirts"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "32124293-a6c8-4098-a53f-2cb355733d1b",
                  "value": "EntityAdd"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "edec4c4c-07a9-42da-92f4-d22a2324029b",
                  "value": "create"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f2a5aaa2-138a-4d3b-9938-ab45f6a62eda",
                  "value": "2548b023-85ae-42d0-a9c3-3adb16895392"
                }
              ]
            }
          }
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
            },
            {
              "context": {
                "channel": "Belgium Web"
              },
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            }
          ]
        }
      },
      {
        "id": "f041a116-3c77-4ecf-8c78-44742f5da8db",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2018-12-06T23:23:08.406-0600"
        },
        "data": {
          "attributes": {
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9dd265b9-bde3-4a07-ab4b-2c597a3ef3ab",
                  "value": "Product Classifications>>Dress Shirts"
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
                  "id": "dce02f5c-5f14-4093-b9f9-536401669bdf",
                  "value": "EntityUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1b874b08-9014-491a-9a18-059be009d96d",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5b3a2252-c2bb-4e5a-854a-22da5ffb678f",
                  "value": "2018-12-06T23:23:08.406-0600"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "81d8d06d-c48b-4fca-bee1-1175f4e91980",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "41d2daac-62fd-4ad3-9efb-41bce37db761",
                  "value": "PoloShirts"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8e9fba97-d267-4195-92c0-4356d28737f7",
                  "value": "EntityUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "351a5d28-c58f-45dc-8f56-831f665d18cb",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e4df17fb-4fff-4a7f-bfc6-6a3f8117e4ef",
                  "value": "9d538662-1262-401a-8560-bf2b93306c39"
                }
              ]
            }
          }
        }
      },
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
      }
    ],
    "status": "success",
    "totalRecords": 5
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.