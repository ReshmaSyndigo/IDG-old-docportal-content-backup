---
title: Validate Data Synchronously
sidebar: rdp_sidebar
permalink: api_sync_validate.html
type: HowToAPI
folder: rdp 
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to perform synchronous validation of data:

* [Validate Business and Model Rules Synchronously](api_sync_validate_scenario1.html)

{% include callout.html content="**Note**: This is primarily used in the user interface to execute synchronous business rules and validation model rules before creating or updating the data. This is applicable only for validation rules.
" type="primary" %} 

All rules with the "executionMode" set as "syncOnly" or "any" are executed. {% if site.build == "internal" %} See [Create and Map Business Rules using Governance Business Rule Model](api_create_gov_business_rules_model.html).{% endif %} 

## Example

The following example demonstrates a sample JSON request to synchronously validate business rules and model rules for sku entity "poloadidas":

POST {{site.data.rdp_glossary.syncValidate}}

<pre><code>
{
  "clientId": "someguid",
  "clientState": {
  "someJson": {}
  },
  "params": {
    "evaluateModelRules": "true"
  },
  "entity": {
    "id": "poloadidas",
    "type": "sku",
    "data": {
      "attributes": {
        "mdmdid": {
          "values": [
            {
              "value": "poloadidas",
              "source": "internal",
              "locale": "en-US"
              
            }
          ]
        }
      },
      "relationships": {
        "ischildof": [
          {
            "id": "rel01",
            "direction": "both",
            "source": "internal",
            "relationshipType": "Composition",
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    "value": "Often bought together",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              }
            },
            "relTo": {
              "id": "PoloTies",
              "type": "product"
            }
          }
        ]
      }
    }
  }
}
</code></pre>

**Response**: Returns the [entity govern details](api_entity_govern_object_structure.html) after executing the validation business and model rules for the specified entity.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "4126d0f1-1304-4b60-9bc8-642aae0e111c"
  },
  "response": {
    "entities": [
      {
        "id": "poloadidas",
        "type": "sku",
        "properties": {
          "messages": [
            {
              "messageType": "error",
              "messageCode": "minCardinalityViolation001",
              "businessRule": "minCardinalityViolationRule",
              "messageParams": "newyearoffer"
            }
          ]
        },
        "data": {
          "attributes": {
            "length": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "requiredAttributeValidationRule"
                  }
                ]
              }
            },
            "width": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "requiredAttributeValidationRule"
                  }
                ]
              }
            },
            "currency": {
              "values": [
                {
                  "id": "79150a84-25f4-430d-9f6f-209135e16d51",
                  "value": "valueIds/c6cd1f12-e229-498f-a2d8-e6ebf23c8b46",
                  "properties": {
                    "messages": []
                  }
                }
              ],
              "properties": {
                "messages": [
                  {
                    "messageType": "success",
                    "messageCode": "SYS001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "size": {
              "values": [
                {
                  "id": "caf26267-4615-40c8-84c9-abdfefd7a19f",
                  "value": "valueIds/dd85b6fb-a62c-49c7-b493-17e224db8144",
                  "properties": {
                    "messages": []
                  }
                }
              ],
              "properties": {
                "messages": [
                  {
                    "messageType": "success",
                    "messageCode": "SYS001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "mdmname": {
              "values": [
                {
                  "id": "5743b652-a228-4fe3-9e13-b07f008104a3",
                  "value": "valueIds/f22177ae-ea70-47d0-9967-29735c286bb9",
                  "properties": {
                    "messages": []
                  }
                }
              ],
              "properties": {
                "messages": [
                  {
                    "messageType": "success",
                    "messageCode": "SYS001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "setupgoaldate": {
              "values": [
                {
                  "id": "844dcd76-fdc2-4c2e-8a29-a6e1fe0be88e",
                  "value": "valueIds/f252c41e-5949-404e-b40e-de7b50dbc249",
                  "properties": {
                    "messages": []
                  }
                }
              ],
              "properties": {
                "messages": [
                  {
                    "messageType": "success",
                    "messageCode": "SYS001",
                    "businessRule": "skuInternalAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "setuppriority": {
              "values": [
                {
                  "id": "7d6ce71f-a589-4f62-92df-ebb2b1dee6e0",
                  "value": "valueIds/0935bdcf-6595-44a0-9157-a2d4f58c1d10",
                  "properties": {
                    "messages": []
                  }
                }
              ],
              "properties": {
                "messages": [
                  {
                    "messageType": "success",
                    "messageCode": "SYS001",
                    "businessRule": "skuInternalAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "map": {
              "values": [
                {
                  "id": "fd6f1fc6-4d38-4219-baf7-7c545127f308",
                  "value": "valueIds/75087796-cc43-4697-9a22-856bc37d0604",
                  "properties": {
                    "messages": []
                  }
                }
              ],
              "properties": {
                "messages": [
                  {
                    "messageType": "success",
                    "messageCode": "SYS001",
                    "businessRule": "skuPricingAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "salesprice": {
              "values": [
                {
                  "id": "672c041e-e90f-49b6-a136-2de85a524122",
                  "value": "valueIds/a41eeaff-844f-4f7a-aed9-f0e8223d9749",
                  "properties": {
                    "messages": []
                  }
                }
              ],
              "properties": {
                "messages": [
                  {
                    "messageType": "success",
                    "messageCode": "SYS001",
                    "businessRule": "skuPricingAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "businessConditions": {
              "group": [
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "3d442db6-a39b-441e-8269-110636e11ef5",
                        "value": "mongoliclocalizationrequired_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "fa0ba5b5-1a5f-40c0-9085-ea2aa4e387ec",
                        "value": "false"
                      }
                    ]
                  },
                  "id": "8afea6b5-1650-44a0-855b-a128f0b2ebb4"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "3e072e86-6e81-4115-bb93-ecc4bee91ac9",
                        "value": "arabicsomalialocalizationrequired_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "67f6835f-6ede-4b05-a0fe-db9c480071e5",
                        "value": "false"
                      }
                    ]
                  },
                  "id": "2edc5640-2206-492f-aa5c-e3ffca87512e"
                }
              ]
            }
          },
          "relationships": {
            "hasimages": [
              {
                "relTo": {
                  "id": "cZjeGHxzRm-yl9J6Xw1uHA",
                  "type": "image"
                },
                "id": "hasimages_cZjeGHxzRm-yl9J6Xw1uHA",
                "properties": {
                  "direction": "both",
                  "relationshipType": "hasimages"
                },
                "attributes": {}
              }
            ],
            "ischildof": [
              {
                "relTo": {
                  "id": "PoloTies",
                  "type": "product"
                },
                "id": "rel01",
                "properties": {
                  "relationshipType": "Composition"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "id": "a6467a9f-2376-4521-be5a-2b13f3f15627",
                        "value": "valueIds/6dfdfa93-5abd-4ab4-8652-c23167f1181a",
                        "properties": {
                          "messages": []
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

### Request Object

## params

This object indicates the parameters of the JSON request to perform synchronous validation. The following table lists the details of params object:

| Property | Description | Type |
|-------|-------------|--------|
| evaluateModelRules | Indicates if the rules specified in the Validation Model must be evaluated or not. | Boolean |

Data for Sample Scenario: Set the following properties for **params** object:

| Property | Description | 
|----------|-------------|
| evaluateModelRules | true |

## entity

This object indicates the details of the entity whose govern data has to be validated synchronously. The following table lists the details of entity object:

| Property | Description | Type |
|-------|-------------|--------|
| id | Indicates the identifier of the entity. | String |
| type | Indicates the type of the entity. | String |
| data | Indicates attribute and relationship details of an entity. | [data](#data) |

Data for Sample Scenario: Set the following properties for **entity** object:

| Property | Description | 
|----------|-------------|
| id | poloadidas |
| type | sku |

## data

This object indicates attribute and relationship details of the entity whose govern data has to be validated synchronously. The following table lists the details of data object:

| Property | Description | Type |
|-------|-------------|--------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |
| relationships | Indicates an array of group of [relationships](#relationships) objects. | [relationships](#relationships) |

## attributes

This object contains an array of attributes of the entity whose govern data has to be validated synchronously. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## relationships

This object contains an array of the entity whose govern data has to be validated synchronously. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the relationship name of the attribute. | [relationship](#relationship) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> -> values | Indicates the value, source and locale of the given attribute. | List of [values](#values) objects |

## values

This object contains the values of the attributes of an entity. The following table lists the details of the values object:

| Property | Description | Type | 
|----------|-------------|------|
| source | Indicates the source of attribute value. | String |
| locale | Indicates the locale for the attribute value. | String | 
| value | Indicates the actual attribute value. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **values** object:

| Property | Description | 
|----------|-------------|
| source | internal |
| locale | en-US |
| value | poloadidas |

## relationship

This object contains the details of the relationship of an entity. The following table lists the details of the relationship object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> -> id | Indicates the unique identifier of the relationship. | String | 
| <<RelName>> -> direction | Indicates the association of the relationship this entity has. | String |
| <<RelName>> -> source | Indicates the source of relationship. | String |
| <<RelName>> -> relationshipType | Indicates the relationship type of the entity. | String |
| <<RelName>> -> attributes | Indicates the relationship attributes of the entity. | [attributes](#attributes) |
| <<RelName>> -> relTo | Indicates the details about the related domain in the relationship. | [relto](#relto) |

## relTo

This object contains the details about the related domain object. The following table lists the details of the relTo object:

| Property | Description | Type | 
|----------|-------------|-------|
| id | Indicates the identifier of the related entity. | String |
| type | Indicates the type of the entity. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relTo** object:

| Property | Description | 
|----------|-------------|
| id | PoloTies |
| type | product |

### Response Object

The response is returned in a JSON format and includes the following details:

## request

This object indicates details corresponding to the request. The following table lists the details of request object:

| Property | Description | Type |
|-------|-------------|--------|
| returnRequest | Indicates if request sent which is included in the response received or not. | Boolean |
| requestId | Indicates a system generated unique request identifier. This can be used to track requests. | String |

Data for Sample Scenario: Set the following properties for **request** object:

| Property | Description | 
|----------|-------------|
| returnRequest | false |
| requestId | 4126d0f1-1304-4b60-9bc8-642aae0e111c |

## response

This object indicates the response details. The following table lists the details of response object:

| Property | Description | Type |
|-------|-------------|--------|
| entities | Indicates the list of entity govern data objects that matched the search criteria. See [Entity Object Structure](api_entity_govern_object_structure.html), for more information. |
| status | Indicates if the request is submitted successfully or not. | String |
| totalRecords | Indicates the total number of records received in the response. | Integer |

Data for Sample Scenario: Set the following properties for **response** object:

| Property | Description | 
|----------|-------------|
| status | success |
| totalRecords | 1 |

{% include callout.html content="**Note**:
If you do not specify any attributes or relationships in fields then only basic entity information such as entity Id and entity type are returned in the response.
" type="primary" %}