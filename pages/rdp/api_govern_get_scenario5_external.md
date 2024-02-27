---
title: Get Status of a Business Condition in a Workflow 
sidebar: rdp_sidebar
permalink: api_govern_get_scenario5.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getgoverndata}}** to get status of a business condition in a workflow, using a scenario.

## Scenario

To get the status of the business condition "skuBasicAttributesPopulated_businessCondition" associated to the workflow activity "skuSubmission" in newSKUIntroduction" workflow for a "sku" entity "skuentity1".

{% include snippets/header.html %}

## Request

To get the above entity govern data, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request send the following details:

* query -> contexts: Specify the "workflow" as "newSKUIntroduction".
* query -> Id: Specify the entity identifier as "skuentity1".
* query -> filters -> typesCriterion: Specify as "sku".
* query -> filters -> attributesCriterion -> activities/activityName: Specify "skuSubmission" activity name.
* query -> filters -> attributesCriterion -> activities/assignedUser: Specify as "_UNASSIGNED".
* query -> filters -> attributesCriterion -> businessConditionName: Specify "skuBasicAttributesPopulated_businessCondition" as business condition name.
* fields -> attributes: Specify "businessConditions", "status", and "activities" attributes.

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id":"skuentity1",</span>
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "workflow": "newSKUIntroduction"
        }
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        "attributesCriterion": [
          {
            "businessConditions": {
              "attributes": [
                {
                  <span style="background-color: #FFFF00">"businessConditionName": {</span>
                    "eq": "skuBasicAttributesPopulated_businessCondition"
                  }
                }
              ]
            }
          },
          {
            <span style="background-color: #FFFF00">"status": {</span>
              "eq": "Executing"
            }
          },
          {
           <span style="background-color: #FFFF00">"activities/activityName": {</span>
            "eq":"skuSubmission"
           }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        <span style="background-color: #FFFF00">"businessConditions", "status", "activities"</span>
      ]
    }
  }
}
</code>
</pre>

## Response

Returns status of the business condition "skuBasicAttributesPopulated_businessCondition" associated to the workflow activity "skuSubmission" in newSKUIntroduction" workflow status for a "sku" entity "skuentity1". 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "8eb72a2c-b4e5-440c-ad3c-914455ccdce3",
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