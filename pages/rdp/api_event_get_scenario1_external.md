---
title: Get Events of an Entity when a Context is Added
sidebar: rdp_sidebar
permalink: api_event_get_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, when you create an entity with the context or update an existing entity to add a new context, it results in an **addContext** change type. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get such events using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response. 

## Scenario

To get events for a "sku" entity when a context is added. 

{% include snippets/header.html %}

## Request

Consider a "sku" entity linked to a context. To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> attributesCriterion: Specify the required entity Id for which you wish to query the events.
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
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "entityId": {
              "exact": "eMMvAvNVNCnfK"
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
      ],
      "contexts": [
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
      "maxRecords": 4
    }
  }
}
</code>
</pre>

## Response

Returns the events generated for "addContext" change type. The following response snippet demonstrates a generated event related to to adding a new context to the existing entity with the contextual attributes. As you can see the response, the events show that there is a new context added to a "sku" entity.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "a5f270f8-6564-4af5-ae32-51678b26c398",
    "maxRecords": 4
  },
  "response": {
    "events": [
      {
        "id": "4c6211fa-f11f-4f66-8ba0-74d7dfaa07c9",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-09-05T00:46:40.003-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "60ef34df-ac22-40af-a027-d878bcb468ea",
                  "value": "EntityUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7fb8191e-c13a-4928-b150-4cf2923cb68e",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1cd0e47d-84cd-4173-aac1-604d75b95a9c",
                  "value": "2018-09-05T00:46:40.001-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c5b7e1fd-cb36-473c-89d5-f2ac8b00d6ef",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "eceab2e4-bcc6-4c2e-a859-15260acd153e",
                  "value": "eMMvAvNVNCnfK"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4afc6059-5eed-458e-86ed-dbef9caf6314",
                  "value": "EntityUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "acd59e10-c697-416b-8945-02e90afa1462",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ecabea0b-06a3-45a4-872d-c3e6ddce8a67",
                  "value": "fb1af74c-54cc-4079-bbae-2f70beafad76"
                }
              ]
            }
          },
          "relationships": {
            "eventTarget": [
              {
                "id": "5e4782a9-b58d-4850-92e1-ad46d88c5bc8",
                "relTo": {
                  "id": "eMMvAvNVNCnfK",
                  "type": "sku"
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
        "id": "4bf09d97-75f6-4f99-9239-69ed16221aff",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-09-05T00:46:01.909-0500",
          "modifiedDate": "2018-09-05T00:46:01.909-0500",
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
                  "id": "ba28a2bc-cd0b-4064-8d57-7e4a8a494590",
                  "value": "xyz123"
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
                  "id": "268277a7-a1b9-4e7c-b641-b85723539801",
                  "value": "xyz123"
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
                  "id": "f09535f6-a5ea-4866-9656-d6a58f50e8ff",
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
                  "id": "29a44328-d299-4ed4-816c-ce851c27fa09",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2018-09-05T00:46:01.815-0500"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8f671122-99b4-4a10-a253-d87e0c3aaa3a",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "90912305-fa22-4c6c-af91-cac70fb31903",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "NewvAluetrrr002": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1bdd9a8a-b996-4970-b2af-95097614dd26",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "ABCD",
                  "value": "ABCD"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "NewvAluetrrr001": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "12e16757-240a-4728-a044-cf648dce8209",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "Nike",
                  "value": "Nike"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "defaultvaluetest": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ed989b6d-d1ed-4e86-8193-1806fd8fa9c3",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "value",
                  "value": "value"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "Producername": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0aa8bab8-5be4-46c6-a383-6f520aee1fee",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "ABC",
                  "value": "ABC"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "defaultvaluetest001": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d36147ee-cfce-4319-8b3e-1d51e962507d",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "Cache enabled",
                  "value": "Cache enabled"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "Testingcache": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "92a4bce6-07f3-4948-aa59-23c19e1069ef",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "ab",
                  "value": "ab"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "defaultvalueattr1": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c255f3d1-4e56-4ef7-a1dd-e8cabbf87cd9",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "santosh",
                  "value": "santosh"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "Testingdefaultvalue": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "27b9d40a-a9a9-45c4-a3e7-55285ace9d62",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "abcd",
                  "value": "abcd"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "phtestdefvalue": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6a6bb731-3444-489c-a1f9-95e013c3ce07",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "phtest",
                  "value": "phtest"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "defaultvalueattr2": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "eec4312a-991d-4c86-9ed9-64de74c693eb",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "Kohli",
                  "value": "Kohli"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "MYNKDVAttr": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2581ebb0-834c-46a0-bd3b-f4f1924683c0",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "MYNKDVAttrValue",
                  "value": "MYNKDVAttrValue"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e2f1b80d-3bd6-45b6-85cc-23a7f12d9b35",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "L X W X H"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "MigrationFLAGOFF": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4ffd5ec1-d48d-49b1-a8e3-3daa142da7ce",
                  "os": "businessRule",
                  "osid": "setAttributeValueWhenMigrationFlagIsOFF_businessRule",
                  "ostype": "businessRule",
                  "value": "YES"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addContext"
              }
            },
            "Migration": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d0a8c53e-7e2a-44f5-87ea-197ab7a84568",
                  "os": "businessRule",
                  "osid": "setAttributeValueWhenMigrationFlagIsOn_businessRule",
                  "ostype": "businessRule",
                  "value": "YES"
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
                  "id": "0507b42f-8503-4b84-b3cc-ca3c3cdf74ff",
                  "value": "AttributesAdd"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a9e6087c-22c2-473a-aaee-e097f1e0e656",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "51864f79-3b6d-4922-a549-2fee496f61df",
                  "value": "2018-09-05T00:46:01.903-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "16d9c311-624d-4fd0-80e8-fe2f82963424",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3433ee6e-a6d6-40c1-8653-5ff49f340c5e",
                  "value": "eMMvAvNVNCnfK"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d1408514-6b15-49df-84b2-ab542cb2a55e",
                  "value": "EntityAdd"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4a31f62f-3d8b-4e0a-9214-8ee41b0473ef",
                  "value": "create"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9395f672-d9d9-42f9-9b13-4d4cd76cd140",
                  "value": "9b9306ca-2c1e-4e36-b5b0-937f7af57e26"
                }
              ]
            }
          },
          "relationships": {
            "eventTarget": [
              {
                "id": "cdbd5eaf-13ce-4a86-96c9-439fcd3b79e1",
                "relTo": {
                  "id": "eMMvAvNVNCnfK",
                  "type": "sku"
                },
                "properties": {
                  "version": 1
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}

</code></pre>

## Key points to consider for verification

The following lists key points you can consider for your verification when you get an event generated for any of the create, update, or delete operation you carried out on a data object such as an entity. This aids you in troubleshooting the requests, if there are any errors. 

* The attributes such as eventType and entityAction helps you find out which operation has triggered this event. In the above [response](#response), eventType indicates that "EntityUpdate" has triggered this event. 
* The attributes such as relatedRequestId helps you get the request Id of the request which has triggered this event. In the above [response](#response), relatedRequestId indicates the request Id for the "update" operation which added the context to the existing entity triggering an event.
* The {{site.data.rdp_glossary.getevent}} API also returns the corresponding [change type](api_event_change_types.html) properties for each of the created, updated, or deleted contexts, attributes, or relationships. In the above [response](#response), "changeType" indicates "addContext" as you added a new context with the attributes to an existing entity.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.