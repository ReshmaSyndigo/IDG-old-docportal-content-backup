---
title: Get Workflow History of an Entity for a particular Workflow Activity and Business Condition
sidebar: rdp_sidebar
permalink: api_event_get_scenario19.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get the govern events for an Entity based on workflow name, step name, and business condition using a scenario.

## Scenario

To get the govern events for an entity of type "sku" using its workflow name, activity name, and business condition.

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> typesCriterion : Specify the entity type as "sku" and entity id as "eOzo0e4AwpV0l".
* query -> activityname : Specify as "SKU Submission".
* query -> workflow : Specify as "NewSKUIntroduction".
* query -> businessConditionName : Specify as "SKU(s) is associated to Product(s)."
* query -> businessConditionStatus : Specify as "true".

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}** 
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"entityId": {</span>
        "exact": "eOzo0e4AwpV0l"
      },
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku"
        ]
      }
    },
    "fields": {
      <span style="background-color: #FFFF00">"activities/activityName": {</span>
        "eq": "SKU Submission",
        "contexts": [
          {
            "workflow": "NewSKUIntroduction"
          }
        ]
      },
      <span style="background-color: #FFFF00">"businessConditions/businessConditionName": {</span>
        "eq": "SKU(s) is associated to Product(s)"
      },
      <span style="background-color: #FFFF00">"businessConditions/businessConditionStatus": {</span>
        "eq": "true"
      },
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

Returns the govern events for an entity of type "sku" with the activityName "SKU Submission" and workflow "NewSKUIntroduction" for the specified businessConditionName and businessConditionStatus.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "a046a42e-2cb6-45bf-977a-ca8f89768699",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "d9zUnLHuT-qlNblM5noTSA",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-11T01:20:43.954-0500"
        },
        "data": {
          "attributes": {
            "suppliername": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "18ed6600-cd28-4c8d-8dad-f0658e02d370",
                  "os": "businessRule",
                  "osid": "CopySupplierNameToGovernEntity_businessRule",
                  "ostype": "businessRule",
                  "value": "Nike"
                }
              ]
            },
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
            "height": {
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
            "businessConditions": {
              "group": [
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "6a300300-89bf-4bba-a6aa-0ff817caa2a3",
                        "value": "skuBasicAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "fe0deef1-2777-446f-b724-4ad26144f654",
                        "value": false
                      }
                    ]
                  },
                  "id": "a92df121-2bc1-42e5-9b1a-b7323048b753"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "bc459208-6630-496a-a8d1-f9ef9eee4fb1",
                        "value": "skuMarketingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "3fa20b89-b510-4559-aebf-8a78da11f5f5",
                        "value": false
                      }
                    ]
                  },
                  "id": "b1d5db0e-f1d3-46d2-a157-28490ff929a4"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "62bb4ffb-d68f-4aae-bfd8-741951308cf3",
                        "value": "skuPricingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "cf16ec6f-b52d-4a98-bf85-eac6fdf5ae75",
                        "value": false
                      }
                    ]
                  },
                  "id": "61d4c199-797b-45a6-b30c-af9c88be2ef2"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "1f10e1af-dfe3-4c67-a836-51e314f07eb5",
                        "value": "validateSkuIsNotAssignedToProduct_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "9d4538f0-00f3-48a6-bb2b-78a2c11944ab",
                        "value": true
                      }
                    ]
                  },
                  "id": "823fe8e1-1629-4ec8-ab84-78c748ed3e4f"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "d1f4c663-1f8a-49d7-82b7-b4c4ca410388",
                        "value": "skuInternalAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "6d4689dc-ceb8-482b-9c81-73c0d48a2a49",
                        "value": false
                      }
                    ]
                  },
                  "id": "1fab5801-fff3-46e7-bf70-6b901e2a2ca9"
                }
              ]
            },
            "unknown": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuImageAddedValidationRule_businessRule"
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
            "subbrand": {
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
                      "id": "10fb441a-9ab4-4968-8724-96115d7abe2d",
                      "value": "54f9ebc9-e246-4a8f-99ba-09307621f110"
                    }
                  ]
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "b1967411-6f28-4bda-9440-c0ea9e2cd359",
                      "value": "2018-09-11T06:20:43.333-0500"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "id": "75037fda-b833-480a-a61e-236405cff781",
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
                            "id": "becc1ca0-63a7-4a1e-ac75-6bf3bd1715c2",
                            "value": "54f9ebc9-e246-4a8f-99ba-09307621f110"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "e70d9e05-2fec-441c-94a2-3bde08a7f31e",
                            "value": "ef11d50d-7cc1-4b38-a5ff-38139d7145d0"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "78a862f8-99f4-4c15-8a00-8ccddc5d3888",
                            "value": "skuSubmission"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "d61f8a0d-c0f2-4148-a96d-f831ad38ec98",
                            "value": "dev1vendor@riversand.com"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "3b6e018a-51fe-4a84-be54-508890ab2766",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "8d2303a7-130a-4b0b-afde-881c784850de",
                            "value": "2018-09-11T06:20:43.474-0500"
                          }
                        ]
                      },
                      "id": "44e3b4ad-a138-4690-85d0-bfd39a56ba37"
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
    "totalRecords": 43
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.