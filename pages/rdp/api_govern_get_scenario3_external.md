---
title: Get Validation Rules Status of an Entity
sidebar: rdp_sidebar
permalink: api_govern_get_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getgoverndata}}** to get validation rules status of an entity.

## Scenario

To get the status of the validation rules status of the "sku" entity "skuentity1".

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request send the following details:

* query -> Id: Specify the entity identifier as "skuentity1".
* query -> filters -> typesCriterion: Specify "sku" entity type.
* fields -> attributes: Specify "_ALL" attribute.

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "skuentity1",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the validation rule status for the "sku" entity "skuentity1". 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "bdee33ab-7925-4ed2-8934-5db92ff7eb51",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "skuentity1",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-07-12T09:54:24.233-0500"
        },
        "data": {
          "attributes": {
            "upc": {
              "values": [
                {
                  "id": "d8e05948-2929-4121-a5d8-7bff5770a664",
                  "properties": {
                    "messages": [
                      {
                        "messageType": "error",
                        "messageCode": "MaxLen001",
                        "businessRule": "maxLengthValidationRule",
                        "messageParams": 14
                      }
                    ]
                  }
                }
              ]
            },
            "suppliername": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4c5ba694-fd9a-40b5-aabd-3bd683c82066",
                  "os": "businessRule",
                  "osid": "CopySupplierNameToGovernEntity_businessRule",
                  "ostype": "businessRule",
                  "value": "Nike"
                }
              ]
            },
            "description": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "requiredAttributeValidationRule"
                  },
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "11ReferenceRequired1": {
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
            "11ParentNested2": {
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
            "productfeatures": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "color": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "size": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "currency": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "cost": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuBasicAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "listprice": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuPricingAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "salesprice": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuPricingAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "msrp": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuPricingAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "map": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuPricingAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "dollarmargin": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuPricingAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "internalavailabilitydate": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuInternalAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "registered": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuInternalAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "trademark": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuInternalAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "setupgoaldate": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuInternalAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "setuppriority": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuInternalAttributesValidationRule_businessRule"
                  }
                ]
              }
            },
            "model": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuMarketingAttributesValidationRule_businessRule"
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
                        "id": "eb2033e1-4320-42f1-8784-b8fc525280b2",
                        "value": "skuBasicAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "9f59a9f5-0f68-4632-80d4-4059a506aa49",
                        "value": false
                      }
                    ]
                  },
                  "id": "48cabdf5-994f-4841-977c-a7833cd92d20"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "a0849d99-6f99-4c61-9bf8-adc7b62a9eb3",
                        "value": "skuMarketingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "9487b016-5f6c-498e-8de1-eb5b2288e907",
                        "value": false
                      }
                    ]
                  },
                  "id": "d6bc3c46-b7e7-4de1-8a3e-797bf90c3270"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "0e0bee8c-b8c3-4822-a7d8-c7864a7f979d",
                        "value": "skuPricingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "4286b87f-30cb-4d31-bcf9-64c4c0f5689b",
                        "value": false
                      }
                    ]
                  },
                  "id": "2bd4c7f6-e370-4db9-ab9b-fbe7911d9ff3"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "e018ce83-9f03-4c9e-a0f4-1925da2edc73",
                        "value": "validateSkuIsNotAssignedToProduct_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "4341816e-45ee-4f66-9776-4d603ed6a7df",
                        "value": true
                      }
                    ]
                  },
                  "id": "41b96d0a-7711-418d-9f48-fcdb8e6d801b"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "4759b195-890e-4b13-a162-83d48f04382d",
                        "value": "skuInternalAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "2668d86f-aead-4c21-9dc0-dedb380ba37c",
                        "value": false
                      }
                    ]
                  },
                  "id": "50901243-82b9-4d19-8b1a-aae751baa848"
                }
              ]
            }
          },
          "contexts": [
            {
              "context": {
                "self": "self",
                "workflow": "NewSKUIntroduction"
              },
              "attributes": {
                "workflowInstanceId": {
                  "values": [
                    {
                      "id": "b81777fd-d8dc-4ecb-96e8-f03c6976b986",
                      "value": "5f4048e4-dc50-4ba3-9295-a86e77c45575"
                    }
                  ]
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "bab6dbaa-1ba3-4c21-8aa9-037bdac6a851",
                      "value": "2018-07-12T14:54:41.072+0000"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "id": "1b439689-bb71-4d14-a975-db082b6d8594",
                      "value": "Executing"
                    }
                  ]
                },
                "activities": {
                  "group": [
                    {
                      "workflowInstanceId": {
                        "values": [
                          {
                            "id": "cb65e4e4-5149-44ae-8014-f02a273727e7",
                            "value": "5f4048e4-dc50-4ba3-9295-a86e77c45575"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "877f5236-c97e-4436-9773-307e04e370c9",
                            "value": "ef11d50d-7cc1-4b38-a5ff-38139d7145d0"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "cb63d38f-1317-4d6e-93f4-285b13fb15d7",
                            "value": "skuSubmission"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "f5138924-fd56-4055-bc89-a85bb9acc98f",
                            "value": "dev1vendor@riversand.com"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "7da677c5-768f-4b98-92d6-528611b8d045",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "1164f573-9dbf-4e91-8ccf-b809cd2eb59e",
                            "value": "2018-07-12T14:54:42.161+0000"
                          }
                        ]
                      },
                      "id": "b481a55f-ab6a-4e82-8b2c-ddef16b91d14"
                    }
                  ]
                }
              }
            }
          ]
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