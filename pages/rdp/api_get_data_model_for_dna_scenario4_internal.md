---
title: Validate Deeply Nested Attribute (DNA) errors
sidebar: rdp_sidebar
permalink: api_get_data_model_for_dna_scenario4.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can validate the Deeply Nested Attribute (DNA) errors. The **entityValidationModel** model allows you to define various validations for DNA by setting validation properties in the validation model.

For example, you have defined “precision” value as 2 in the model, but if you enter 3 precision value.

**Result**: An error message is displayed. 

"**Note:** If you save the data with incorrect values, then you can view those validation error messages using the **{{site.data.rdp_glossary.getgoverndata}}** API.

{% picture dna-validation-error.png alt="Validation Error Message Workflow" %}

In this process, you can perform the following:
1. [Create validation Model for DNA](#create-validation-model-for-dna)
2. [Entity Create or Update the DNA](#entity-create-or-update-the-dna)

After performing the above, you can [verify validation errors related to DNA via Entity Govern Service](#verify-validation-errors-related-to-dna-via-entity-govern-service)

## Create Validation Model for DNA

You can create validation model for DNA. The following sample is the entity validation model for **nutritionalinformation** DNA:

<div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">
                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><b>Create Validation Model</b></a>
        </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse noCrossRef">
      <div class="panel-body">
        <pre><code>
          {
            "id": "sku_entityValidationModel",
            "name": "sku",
            "type": "entityValidationModel",
            "domain": "generic",
            "source": "internal",
            "properties": {
              "createdService": "entityManageModelService",
              "createdBy": "system_user",
              "createdDate": "2021-03-12T04:34:49.801-0600",
              "modifiedService": "entityManageModelService",
              "modifiedBy": "system_user",
              "modifiedDate": "2021-03-12T05:44:25.657-0600"
            },
            "data": {
              "attributes": {
                "nutritionalinformation": {
                  "group": [
                    {
                      "id": "2e5068d3-704d-4582-b5e3-ee4ba82305a1",
                      "contains": {
                        "properties": {
                          "isCollection": false
                        }
                      },
                      "nutrientdetails": {
                        "group": [
                          {
                            "id": "5ht3450d-3354-4fee-84a7-99e8835170ba",
                            "servingsizedescription": {
                              "properties": {
                                "isCollection": true,
                                "maxLength": 15,
                                "minLength": 10
                              }
                            },
                            "servingsize": {
                              "properties": {
                                "required": true
                              }
                            }
                          }
                        ]
                      },
                      "nutritionfacts": {
                        "properties": {
                          "required": true
                        }
                      },
                      "nutrients": {
                        "group": [
                          {
                            "id": "6e53450d-3354-4fee-84a7-99e8835170ba",
                            "cholestrol": {
                              "properties": {
                                "range": [
                                  {
                                    "rangeTo": 10,
                                    "isRangeFromInclusive": true,
                                    "isRangeToInclusive": true,
                                    "rangeFrom": 1
                                  }
                                ],
                                "uomAllowedUnitSymbols": [
                                  "g",
                                  "mg"
                                ],
                                "precision": 2
                              }
                            },
                            "sodium": {
                              "properties": {
                                "uomAllowedUnitSymbols": [
                                  "g",
                                  "mg"
                                ]
                              }
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "properties": {
                    "isLocalizable": false
                  }
                }
              }
            }
          }
        </code></pre>
      </div>
    </div>
  </div>
</div>

## Entity Create or Update with DNA

During the entity create or update process, if you do not provide the correct values. If the entity does not have attribute values according to the properties configured in the validation model, then the **entitygovernservice/get** will capture the errors of those attribute values.

The following sample is to create or update the entity with **nutritionalinformation** attribute having values that are violating the configured properties in the validation model:

<div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">
                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><b>Entity Create or Update</b></a>
        </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse noCrossRef">
      <div class="panel-body">
        <pre><code>
          {
            "entity": {
              "id": "integrationImportEntity001",
              "type": "sku",
              "data": {
                "attributes": {
                  "nutritionalinformation": {
                    "group": [
                      {
                        "id": "43ac0d55-3cb2-483e-9e7a-e2c5858087ce",
                        "locale": "en-US",
                        "source": "internal",
                        "contains": {
                          "values": [
                            {
                              "id": "441f56ea-cded-46d7-8a54-c42c9a3de2bd",
                              "value": "Wheat and milk",
                              "locale": "en-US",
                              "source": "internal"
                            },
                            {
                              "id": "441f56ea-cded-46d7-8a54-c42c9a3de2bd",
                              "value": "Rice and tea",
                              "locale": "en-US",
                              "source": "internal"
                            }
                          ]
                        },
                        "ingredientlist": {
                          "values": [
                            {
                              "id": "91aa9663-5ee6-4e21-bbc0-966fc00eaf34",
                              "value": "Bulgur wheat",
                              "locale": "en-US",
                              "source": "internal"
                            }
                          ]
                        },
                        "nutrientdetails": {
                          "group": [
                            {
                              "id": "2763f8fb-06b9-47b6-8b33-dce31fcc17bb",
                              "locale": "en-US",
                              "source": "internal",
                              "servingsizedescription": {
                                "values": [
                                  {
                                    "id": "78837d23-a6c5-493f-ba2e-53f3fb33319d",
                                    "value": "1 Serving per Container",
                                    "locale": "en-US",
                                    "source": "internal"
                                  },
                                  {
                                    "id": "67837d23-a6c5-493f-ba2e-53f3fb33319d",
                                    "value": "2 Serving",
                                    "locale": "en-US",
                                    "source": "internal"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "nutrients": {
                          "group": [
                            {
                              "id": "b8f2df69-4fad-4ae8-a24c-0166d5e887af",
                              "locale": "en-US",
                              "source": "internal",
                              "cholestrol": {
                                "values": [
                                  {
                                    "id": "ba27e9c8-106a-4958-91cd-fcebf753bdce",
                                    "value": 5.2,
                                    "locale": "en-US",
                                    "source": "internal",
                                    "uom": "cg"
                                  }
                                ]
                              },
                              "sodium": {
                                "values": [
                                  {
                                    "id": "5627e9c8-106a-4958-91cd-fcebf753bdce",
                                    "value": "sodium",
                                    "locale": "en-US",
                                    "source": "internal",
                                    "uom": "mg"
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      },
                      {
                        "locale": "de-DE",
                        "source": "internal",
                        "contains": {
                          "values": [
                            {
                              "value": "Tea and Coffee",
                              "locale": "de-DE",
                              "source": "internal"
                            }
                          ]
                        },
                        "nutrientdetails": {
                          "group": [
                            {
                              "locale": "de-DE",
                              "source": "internal",
                              "servingsize": {
                                "values": [
                                  {
                                    "value": "1 Serving",
                                    "locale": "de-DE",
                                    "source": "internal"
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        </code></pre>
      </div>
    </div>
  </div>
</div>

## Verify validation errors related to DNA via Entity Govern Service

You can validate the data provided by the user via **entitygovernservice/get**. If the entity does not have attribute values according to the properties configured in the validation model, then the **entitygovernservice/get** captures the errors of those attribute values.

The following sample is the response for **nutritionalinformation** for invalid data with error messages:

<div class="panel-group" id="accordion">
  <div class="panel panel-default">
    <div class="panel-heading">
        <h4 class="panel-title">
                <a class="noCrossRef accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree"><b>Validate Entity Data via Entity Govern Service</b></a>
        </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse noCrossRef">
      <div class="panel-body">
        <pre><code>
          {
            "id": "integrationImportEntity001",
            "type": "sku",
            "properties": {
              "modifiedByService": "WorkflowGovernanceService",
              "createdService": "entityGovernService",
              "createdBy": "system_user",
              "createdDate": "2021-03-10T01:21:10.112-0600",
              "modifiedService": "entityGovernService",
              "modifiedBy": "system_user",
              "modifiedDate": "2021-03-12T05:52:25.572-0600"
            },
            "data": {
              "attributes": {
                "nutritionalinformation": {
                  "group": [
                    {
                      "id": "43ac0d55-3cb2-483e-9e7a-e2c5858087ce",
                      "contains": {
                        "properties": {
                          "messages": [
                            {
                              "messageType": "error",
                              "messageCode": "isCollectionViolation001",
                              "businessRule": "isCollectionViolationRule"
                            }
                          ]
                        }
                      },
                      "nutrientdetails": {
                        "group": [
                          {
                            "id": "2763f8fb-06b9-47b6-8b33-dce31fcc17bb",
                            "servingsizedescription": {
                              "values": [
                                {
                                  "id": "e5282146-6317-4c5e-8b49-f927f7938df3",
                                  "value": "valueIds/78837d23-a6c5-493f-ba2e-53f3fb33319d",
                                  "properties": {
                                    "messages": [
                                      {
                                        "messageType": "error",
                                        "messageCode": "MaxLen001",
                                        "businessRule": "maxLengthValidationRule",
                                        "messageParams": [
                                          "15"
                                        ]
                                      }
                                    ]
                                  }
                                },
                                {
                                  "id": "681fa8c5-a73a-4587-abce-a41cfd0efa97",
                                  "value": "valueIds/67837d23-a6c5-493f-ba2e-53f3fb33319d",
                                  "properties": {
                                    "messages": [
                                      {
                                        "messageType": "error",
                                        "messageCode": "MinLen001",
                                        "businessRule": "minLengthValidationRule",
                                        "messageParams": [
                                          "10"
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            "servingsize": {
                              "properties": {
                                "messages": [
                                  {
                                    "messageType": "error",
                                    "messageCode": "Req001",
                                    "businessRule": "requiredAttributeValidationRule"
                                  }
                                ]
                              }
                            }
                          }
                        ]
                      },
                      "nutrients": {
                        "group": [
                          {
                            "id": "b8f2df69-4fad-4ae8-a24c-0166d5e887af",
                            "cholestrol": {
                              "values": [
                                {
                                  "id": "e90b25da-d587-4dbb-8adb-4e0ea3aeda4b",
                                  "value": "valueIds/ba27e9c8-106a-4958-91cd-fcebf753bdce",
                                  "properties": {
                                    "messages": [
                                      {
                                        "messageType": "error",
                                        "messageCode": "Range006",
                                        "businessRule": "rangeValidationRule",
                                        "messageParams": [
                                          "1",
                                          "10"
                                        ]
                                      },
                                      {
                                        "messageType": "error",
                                        "messageCode": "AlUomVal001",
                                        "businessRule": "allowedUomValuesValidationRule"
                                      },
                                      {
                                        "messageType": "error",
                                        "messageCode": "Prec001",
                                        "businessRule": "precisionValidationRule",
                                        "messageParams": [
                                          "2"
                                        ]
                                      }
                                    ]
                                  }
                                }
                              ]
                            },
                            "sodium": {
                              "values": [
                                {
                                  "id": "b563e255-b1f3-4220-bc45-4be530ca99ce",
                                  "value": "valueIds/5627e9c8-106a-4958-91cd-fcebf753bdce",
                                  "properties": {
                                    "messages": [
                                      {
                                        "messageType": "error",
                                        "messageCode": "InvalidVal001",
                                        "businessRule": "invalidValueRule"
                                      }
                                    ]
                                  }
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "nutritionfacts": {
                        "properties": {
                          "messages": [
                            {
                              "messageType": "error",
                              "messageCode": "Req001",
                              "businessRule": "requiredAttributeValidationRule"
                            }
                          ]
                        }
                      }
                    },
                    {
                      "id": "1f428f1c-3358-44d5-824f-6589dd844ee9",
                      "properties": {
                        "messages": [
                          {
                            "messageType": "error",
                            "messageCode": "isLocalizableViolation001",
                            "businessRule": "isLocalizableViolationRule"
                          }
                        ]
                      },
                      "nutrientdetails": {
                        "group": [
                          {
                            "id": "ebf0807e-80e2-45e7-8ba5-1ea4f2e67c56",
                            "properties": {
                              "messages": [
                                {
                                  "messageType": "error",
                                  "messageCode": "isLocalizableViolation001",
                                  "businessRule": "isLocalizableViolationRule"
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "nutritionfacts": {
                        "properties": {
                          "messages": [
                            {
                              "messageType": "error",
                              "messageCode": "Req001",
                              "businessRule": "requiredAttributeValidationRule"
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              }
            }
          }
        </code></pre>
      </div>
    </div>
  </div>
</div>


## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

## Related Links

* [Create Display Model for Deeply Nested Attribute (DNA)](api_create_display_model_dna.html)
* [Create Manage Model for Deeply Nested Attribute (DNA)](api_create_manage_model_dna.html)
* [Create an Entity with Deeply Nested Attribute (DNA)](api_crt_dna_entities.html)
* [Update an entity with Deeply Nested Attribute (DNA) values](api_updt_dna_entities.html)
* [Delete Deeply Nested Attribute (DNA) from an Entity](api_del_dna_entities.html)