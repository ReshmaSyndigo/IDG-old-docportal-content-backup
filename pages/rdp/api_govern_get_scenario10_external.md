---
title: Get related entities of Pending Business Condition
permalink: api_govern_get_scenario10.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getgoverndata}}** to get the list of entities that are mapped to the specific business condition using a scenario. Based on this you can verify whether the specific business condition is in pending state from the list of entities.

## Scenario

To get the list of entities that are mapped to the "Fix Validation Error" business condition, which is in the pending state.

{% include snippets/header.html %}

## Request

To get the above entity govern data, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request send the following details:

* query -> filters -> typesCriterion -> "sku".
* query -> filters -> attributesCriterion -> businessConditionName: Specify as "fixValidationErrorbc_businessCondition".

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ],
        "attributesCriterion": [
          {
            "businessConditions": {
              "attributes": [
                {
                  <span style="background-color: #FFFF00"> "businessConditionName": { </span>
                    <span style="background-color: #FFFF00"> "exact": "fixValidationErrorbc_businessCondition" </span>
                  }
                }
              ],
              "not": true
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
      "maxRecords": 1
    }
  }
}
</code>
</pre>

## Response

Returns the list of entities for which the "Fix Validation Error" business condition is in the pending state. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "6de6e09b-f17c-4cce-9964-9e853910f880",
    "maxRecords": 1,
    "taskId": "6de6e09b-f17c-4cce-9964-9e853910f880"
  },
  "response": {
    "entities": [
      {
        "id": "d1aa9881-25b2-436d-9b39-635e0b9923ac",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "createdService": "entityGovernService",
          "createdBy": "rdwadmin@riversand.com_user",
          "createdDate": "2021-07-22T07:00:20.664-0500",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2021-07-22T07:02:18.379-0500"
        },
        "data": {
          "attributes": {
            "suppliername": {
              "values": [
                {
                  "id": "33b94566-21c1-4194-bf2e-d25cd1c04c1b",
                  "value": "Nike",
                  "locale": "en-US",
                  "os": "businessRule",
                  "osid": "copysuppliernametogovernentity_businessRule",
                  "ostype": "businessRule",
                  "source": "internal"
                }
              ]
            },
            "salesprice": {
              "values": [
                {
                  "id": "c413e52f-2dcf-447c-b023-1b6ff309fd18",
                  "value": "valueIds/91e56873-0892-419c-86ac-9b7b68aed278",
                  "properties": {
                    "messages": [
                      {
                        "messageType": "error",
                        "messageCode": "Prec001",
                        "businessRule": "precisionValidationRule",
                        "messageParams": 2
                      }
                    ]
                  }
                }
              ]
            },
            "dollarmargin": {
              "values": [
                {
                  "id": "26bcb654-3ceb-45dc-a3f4-8b3b5de66626",
                  "value": "valueIds/d27938d7-ecfb-4aca-a6aa-a8d60c5b202f",
                  "properties": {
                    "messages": [
                      {
                        "messageType": "error",
                        "messageCode": "Prec001",
                        "businessRule": "precisionValidationRule",
                        "messageParams": 2
                      }
                    ]
                  }
                }
              ]
            },
            "map": {
              "values": [
                {
                  "id": "d7f4c9d9-749b-4386-a08b-0f1117eedb40",
                  "value": "valueIds/fb86cb4c-23ac-4ab3-a02f-2ceee56297db",
                  "properties": {
                    "messages": [
                      {
                        "messageType": "error",
                        "messageCode": "Prec001",
                        "businessRule": "precisionValidationRule",
                        "messageParams": 2
                      }
                    ]
                  }
                }
              ]
            },
            "msrp": {
              "values": [
                {
                  "id": "3276e3c7-ad16-4366-996c-c25010e16a85",
                  "value": "valueIds/dad4349b-d251-4287-851d-1b081258629d",
                  "properties": {
                    "messages": [
                      {
                        "messageType": "error",
                        "messageCode": "Prec001",
                        "businessRule": "precisionValidationRule",
                        "messageParams": 2
                      }
                    ]
                  }
                }
              ]
            },
            "listprice": {
              "values": [
                {
                  "id": "d678166c-c1c3-44c9-a68e-9e1ee1e673b9",
                  "value": "valueIds/3f58ec7b-eeb2-4cd9-94a4-b997e1e648f5",
                  "properties": {
                    "messages": [
                      {
                        "messageType": "error",
                        "messageCode": "Prec001",
                        "businessRule": "precisionValidationRule",
                        "messageParams": 2
                      }
                    ]
                  }
                }
              ]
            },
            "manufactureraddress": {
              "group": [
                {
                  "id": "5b465a62-959e-49d4-99ff-2e3beed46c7f",
                  "ratings": {
                    "values": [
                      {
                        "id": "78ecb7b9-c98a-41c7-baff-9e9be1c0935e",
                        "value": "valueIds/c4cfc4a5-c518-441e-b0d0-57929f613a9a",
                        "properties": {
                          "messages": [
                            {
                              "messageType": "error",
                              "messageCode": "Prec001",
                              "businessRule": "precisionValidationRule",
                              "messageParams": 2
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "alternatevendor": {
              "group": [
                {
                  "id": "e64cf195-348e-483a-a57e-bfcc5c7ab1a5",
                  "vendorid": {
                    "values": [
                      {
                        "id": "bf1cba0f-6e65-49ae-8f4f-bac95ade9152",
                        "value": "valueIds/71e58603-3839-451f-87f3-6d9ac7ce553d",
                        "properties": {
                          "messages": [
                            {
                              "messageType": "error",
                              "messageCode": "patternViolation002",
                              "businessRule": "patternValidationRule",
                              "messageParams": [
                                "",
                                "[A-Za-z][0-9]{4}"
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
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
            "furnituredetailscollocgcoch6dna1": {
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
            "nestedlocalize": {
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
            "vaccumcleanerdetails": {
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
            "furnituredetailssimpleg1dna1": {
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
            "nestednonlocalized": {
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
            "furnituredetailscollocgcoch8dna1": {
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
            "furnituredetailscollocg4dna1": {
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
            "furnituredetailscollocgcoch10dna1": {
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
            "ehnestednonlocalized": {
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
            "ehvaccumcleanerdetails": {
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
            "ehnestedlocalize": {
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
            "ischildofrelexist": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "validateskuisassignedtoproduct_businessRule"
                  }
                ]
              }
            },
            "entityhasrequirederror": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "GEN001",
                    "businessRule": "validaterequiredattributesarefilledbr_businessRule",
                    "messageParams": "Entity has Required errors, please correct it else entity will not be published"
                  }
                ]
              }
            },
            "entityhasprecessionerror": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "GEN001",
                    "businessRule": "validateprecessionattributesarefilledbr_businessRule",
                    "messageParams": "Entity has precession errors, please correct it else entity will not be published"
                  }
                ]
              }
            },
            "bcstatus": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "publishskuonlywhenallthebcsmappedtoworkflowaresatisfiedrule_businessRule"
                  }
                ]
              }
            },
            "businessConditions": {
              "group": [
                {
                  "id": "10a30d42-8764-4974-a17c-c5f97e04577f",
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "4e4089dd-a6be-49f2-999a-9b569b07526b",
                        "value": "publishskuonlywhenallthebcsmappedtoworkflowaresatisfiedcondition_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "b14202ef-b433-4a3a-afe6-5d0eda7679d8",
                        "value": false
                      }
                    ]
                  }
                },
                {
                  "id": "006a90d5-51cb-4ad0-a2e9-82d457d0f667",
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "c507607d-8f7f-4469-b006-2ec2604c19ae",
                        "value": "skumarketingattributespopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "dcca802b-cd57-4e9e-8cb2-789fa2098f60",
                        "value": false
                      }
                    ]
                  }
                },
                {
                  "id": "73f6a46a-f618-4dff-8661-8f7c2237f175",
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "e9f184ca-e8e3-4a79-8a51-3b1839d6c7e1",
                        "value": "validaterequiredattributesarefilledbc_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "63a198e6-e26d-472d-960d-5a162302890b",
                        "value": false
                      }
                    ]
                  }
                },
                {
                  "id": "39169175-3a30-4924-8363-04a87291ce5e",
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "00911adc-5454-47cd-a48e-53194440ae26",
                        "value": "skupricingattributespopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "1b111938-d87e-48ea-82ff-2ae7145c0723",
                        "value": true
                      }
                    ]
                  }
                },
                {
                  "id": "bc9ca2aa-ca1d-4a0b-b839-9fdf5e456932",
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "e668026b-de29-4acc-9e34-4ce97531ca3b",
                        "value": "skubasicattributespopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "984a5b2c-85d2-441a-a8db-c1162d932056",
                        "value": false
                      }
                    ]
                  }
                },
                {
                  "id": "4e20967c-773d-4d98-ae1c-1583a9b31e68",
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "283b73e8-a3e0-4449-a525-efbc707e0eb1",
                        "value": "validateskuisnotassignedtoproduct_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "40a272d4-501a-4649-ac6e-befb9892af58",
                        "value": false
                      }
                    ]
                  }
                },
                {
                  "id": "d5900ad4-c9f4-494e-841f-adea2256d6f1",
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "7fe85611-7004-471b-a44d-217091ce8ba7",
                        "value": "validateprecessionattributesarefilledbc_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "c61bbac7-4893-4b03-be7b-acd49e43087b",
                        "value": false
                      }
                    ]
                  }
                },
                {
                  "id": "07ed96d6-3329-416f-aed1-7005d2374b95",
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "43ef3f0b-6432-4ca4-b61e-2721a1bf4548",
                        "value": "skuinternalattributespopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "21971d05-3049-4721-a36a-972eff356c7d",
                        "value": false
                      }
                    ]
                  }
                }
              ]
            },
            "subbrand": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skumarketingattributesvalidationrule_businessRule"
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
                    "businessRule": "skumarketingattributesvalidationrule_businessRule"
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
                    "businessRule": "skuinternalattributesvalidationrule_businessRule"
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
                    "businessRule": "skuinternalattributesvalidationrule_businessRule"
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
                    "businessRule": "skuinternalattributesvalidationrule_businessRule"
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
                    "businessRule": "skuinternalattributesvalidationrule_businessRule"
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
                    "businessRule": "skuinternalattributesvalidationrule_businessRule"
                  }
                ]
              }
            },
            "manufacturernamedetails": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "skuinternalattributesvalidationrule_businessRule"
                  }
                ]
              }
            }
          },
          "contexts": [
            {
              "context": {
                "self": "self",
                "workflow": "TranslationWorkflow"
              },
              "attributes": {
                "workflowInstanceId": {
                  "values": [
                    {
                      "id": "53d34bea-e9a3-47f4-8864-cf77352834b4",
                      "value": "30262eae-96fd-4375-b0c8-c19bebe6b1d8"
                    }
                  ]
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "a621cf21-6fe1-4e9b-9c1a-e91778efb15c",
                      "value": "2021-07-22T12:00:24.786+0000"
                    }
                  ]
                },
                "rsInternalWFInvokedBy": {
                  "values": [
                    {
                      "id": "25d5617f-15b3-4b8a-bdae-78b63997ef46",
                      "value": "rdwadmin@riversand.com_user"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "id": "c9ced094-8e4a-4055-b93c-8ac8919f1183",
                      "value": "Executing"
                    }
                  ]
                },
                "activities": {
                  "group": [
                    {
                      "id": "c41ebefe-6c85-4ef5-b7c4-8918a5f4a5db",
                      "workflowInstanceId": {
                        "values": [
                          {
                            "id": "83613f1c-5c27-4548-b87d-1060e4e16456",
                            "value": "30262eae-96fd-4375-b0c8-c19bebe6b1d8"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "bf46636c-c475-40b0-aecc-343a8aeba1a9",
                            "value": "505dbb51-8ecd-400f-b825-04347e650de0"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "f109c4ea-5370-45a4-9c7d-4b2b90e3c80d",
                            "value": "enrichtranslation"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "9b91ebab-2611-4c4c-8dd4-2e54516e1d5c",
                            "value": "_UNASSIGNED"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "49794ee2-67c3-482a-bc52-b803211aac13",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "c5d29453-4041-4a2c-85a1-a13f9c4c4c67",
                            "value": "2021-07-22T12:00:24.818+0000"
                          }
                        ]
                      }
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
    "totalRecords": 70043
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.