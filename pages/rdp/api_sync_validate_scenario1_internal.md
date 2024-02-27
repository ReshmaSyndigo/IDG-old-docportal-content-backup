---
title: Validate Business Rules and Model Rules Synchronously
sidebar: rdp_sidebar
permalink: api_sync_validate_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.syncValidate}}** to synchronously validate business rules and model rules of an entity, using a scenario.

## Scenario

To validate business and model rules synchronously for a "sku" entity "Polo Mens Shirt Blue_Large".

{% include snippets/header.html %}

## Request

To perform synchronous validation, you can use the REST API {{site.data.rdp_glossary.syncValidate}}. In the request send the following details:

* params: Set evaluateModelRules to true if you wish to validate model rules.
* entity: Specify the attribute and relationship details of the entity to be validated.

<pre>
<code>
POST **{{site.data.rdp_glossary.syncValidate}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
  "someJson": {}
  },
  "params": {
    <span style="background-color: #FFFF00">"evaluateModelRules": "true"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "e1",</span>
    <span style="background-color: #FFFF00">"name":"Polo Mens Shirt Blue_Large",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmdid": {
          "values": [
            {
              "value": "MDM_001",
              "source": "internal",
              "locale": "en-US"
              
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
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
                    "value": "2 Items Bought Together",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              }
            },
            "relTo": {
              "id": "PoloShirt",
              "type": "product"
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Response

Returns the [entity govern details](api_entity_govern_object_structure.html) after executing the validation business and model rules for the specified entity.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "4126d0f1-1304-4b60-9bc8-642aae0e111c"
  },
  "response": {
    "entities": [
      {
        "id": "e1",
        "name":"Polo Mens Shirt Blue_Large",
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
                  "id": "PoloShirt",
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

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.