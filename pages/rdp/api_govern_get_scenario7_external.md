---
title: Get Business Conditions for Multiple Entity Types
sidebar: rdp_sidebar
permalink: api_govern_get_scenario7.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getgoverndata}}** to get business conditions for multiple entity types, using a scenario.

## Scenario

To get the business conditions for "skuSubmission" in "newSKUIntroduction" workflow for "sku" and "product" entities.

{% include snippets/header.html %}

## Request

To get the above entity govern data, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request send the following details:

* query -> contexts: Specify the "workflow" as "newSKUIntroduction".
* query -> filters -> attributesCriterion -> activities/activityName: Specify as "skuSubmission".
* query -> filters -> status: Specify as "Executing".
* query -> filters -> businessConditions/businessConditionName: Specify as "skuBasicAttributesPopulated_businessCondition".
* query -> filters -> businessConditions/businessConditionStatus: Specify as false.
* query -> filters -> typesCriterion: Specify as "sku" and "product".
* fields -> attributes: Specify as "_ALL".

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "workflow": "newSKUIntroduction"
        }
      ],
      "filters": {
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "activities/activityName": {
              "eq": "skuSubmission"
            }
          },
          {
            "status": {
              "eq": "Executing"
            }
          },
          {
            "businessConditions/businessConditionName": {
              "eq": "skuBasicAttributesPopulated_businessCondition"
            },
            "businessConditions/businessConditionStatus": {
              "eq": false
            }
          }
        ],
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku",
          "product"
        ]
      }
    },
    "fields": {
     <span style="background-color: #FFFF00">"attributes": ["businessConditions"]</span>
    },
    "options": {
      "maxRecords": 2
    }
  }
}
</code>
</pre>

## Response

Returns all the business conditions for "skuSubmission" in "newSKUIntroduction" workflow for "sku" and "product" entities. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "ff4d9504-b7fd-4d3e-96f2-30046282ff7c",
    "maxRecords": 2
  },
  "response": {
    "entities": [
      {
        "id": "tun0jeEmT8qW9eMwTjygoA",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-07-12T08:10:02.535-0500"
        },
        "data": {
          "attributes": {
            "businessConditions": {
              "group": [
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "2172f36c-612b-4979-9a94-4076569477a5",
                        "value": "skuMarketingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "e65de447-f75e-4ede-b3dc-fb3f4d9627b2",
                        "value": false
                      }
                    ]
                  },
                  "id": "c9b8b21b-ff9b-4fee-8edc-cd16543bb987"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "60a605a5-b7b3-47ec-91e4-458e2af9c416",
                        "value": "skuPricingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "a6a8a66c-7147-42ba-b0dc-9e15d53d57f2",
                        "value": false
                      }
                    ]
                  },
                  "id": "b44a6fc3-3f04-47bd-b8ed-9fd2d3d210b3"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "5f94fff2-8f78-4970-8cab-3ee7ed6a95cb",
                        "value": "skuInternalAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "fc0e9294-0329-4547-9f59-92cce1aea850",
                        "value": false
                      }
                    ]
                  },
                  "id": "5ea4c82b-555b-4392-aa0b-52b7b02252c3"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "4f55f50f-2e01-46a9-a80d-4c07c5cf27f5",
                        "value": "skuBasicAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "323ee885-863c-486a-88ff-fecc2c91264e",
                        "value": false
                      }
                    ]
                  },
                  "id": "560a4e9a-313a-4ecc-bf9f-83e947d27eed"
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
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "U271cx7YSn-pMR8IHwOqpA",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-07-12T08:10:05.138-0500"
        },
        "data": {
          "attributes": {
            "businessConditions": {
              "group": [
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "9d40b4ed-ac19-4123-9986-dd870e8f4ea5",
                        "value": "skuMarketingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "9f781357-e1af-4270-98c6-134954850777",
                        "value": false
                      }
                    ]
                  },
                  "id": "4bef7e55-8e8e-43c0-ab4e-6fcba4b0d0bc"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "c3e0f2ad-f2bb-43b9-80e4-91d6bca3d65e",
                        "value": "skuPricingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "261b54c6-bfde-420f-bebc-9b1ec4e1e765",
                        "value": false
                      }
                    ]
                  },
                  "id": "b0554f23-d071-4d29-b211-d289461c1b1d"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "3cd526c5-e61d-490d-a983-f179248d286f",
                        "value": "skuInternalAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "52b02e3b-d0dd-46eb-bc63-aca7f2752482",
                        "value": false
                      }
                    ]
                  },
                  "id": "fb5933ee-2a4f-4c8f-b545-405177ec46ad"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "08075077-5ece-41f2-a33a-0823c8fc16d0",
                        "value": "skuBasicAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "c7a7f86c-a693-4144-8f5b-3b8eed4e4277",
                        "value": false
                      }
                    ]
                  },
                  "id": "e9d9f0d0-a76a-48ac-9465-ecb55b703ade"
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
              "attributes": {}
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 32892
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.