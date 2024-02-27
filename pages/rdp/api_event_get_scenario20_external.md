---
title: Get Workflow History of an Entity for a particular Business Condition and Business Condition Status
sidebar: rdp_sidebar
permalink: api_event_get_scenario20.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get information on the attributes of a business condition using a scenario.

## Scenario

Consider a business condition defined for an entity of type "sku". Now you wish to generate the various attributes defined for the business condition by specifying the businessConditionName and businessConditionStatus. 

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> typesCriterion : Specify the entity type as "sku".
* query -> attributesCriterion : Specify the businessConditionName and businessConditionStatus.

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku"
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "businessConditions/businessConditionName": {
              "eq": "skuBasicAttributesPopulated_businessCondition"
            }
          },
          {
            "businessConditions/businessConditionStatus": {
              "eq": "false"
            }
          }
        ]
      }
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        "businessConditions"
      ],
      "relationships": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the various attributes and contexts for the specified business condition for an entity of type "sku".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "4cce587e-def1-4f34-9b50-8fdfc1592daa",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "er7OHH6l4jRTU",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-11T06:53:29.453-0500"
        },
        "data": {
          "attributes": {
            "businessConditions": {
              "group": [
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "d2b9eccf-5a9b-4e6c-ae6b-27f73f94c54c",
                        "value": "skuBasicAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "1b8c0281-4b4b-4114-9581-d6ff88f0024f",
                        "value": false
                      }
                    ]
                  },
                  "id": "1d9f8cc4-6525-4437-9000-7113ffc5c697"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "e7f031ed-1c7f-434b-8cb3-ec37dba89215",
                        "value": "skuMarketingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "e0dfbd1b-e002-4827-8811-9706d6f6f1f8",
                        "value": false
                      }
                    ]
                  },
                  "id": "a5e9d92b-560f-464e-8047-850badaa66a6"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "3ca649ae-4512-4f33-905f-668d2650beb7",
                        "value": "skuPricingAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "3b703ead-a665-41a0-8bc3-053a67b09293",
                        "value": false
                      }
                    ]
                  },
                  "id": "1538955d-57a1-4a25-9dce-70923d073e3d"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "15595d61-3f6c-4bd0-bc63-07df996eb636",
                        "value": "validateSkuIsNotAssignedToProduct_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "51cb803c-1eb3-4664-90d9-3f66e8d68a24",
                        "value": true
                      }
                    ]
                  },
                  "id": "6789fa28-eb1d-4399-a9b8-49a766f86476"
                },
                {
                  "businessConditionName": {
                    "values": [
                      {
                        "id": "9603b1f9-e613-40c7-ae7c-d53b3aa1ff0a",
                        "value": "skuInternalAttributesPopulated_businessCondition"
                      }
                    ]
                  },
                  "businessConditionStatus": {
                    "values": [
                      {
                        "id": "c2f129b9-f3ac-48d8-8376-2a47f61b5b02",
                        "value": false
                      }
                    ]
                  },
                  "id": "fbaad2c6-5bce-4f00-9771-49565bf5ca65"
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
    "totalRecords": 45
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.