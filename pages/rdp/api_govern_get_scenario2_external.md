---
title: Get Business Condition Status of an Entity
sidebar: rdp_sidebar
permalink: api_govern_get_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getgoverndata}}** to get business condition status of an entity.

## Scenario

To get the status of the business conditions of the "sku" entity "skuentity1".

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request send the following details:

* query -> Id: Specify the entity identifier as "skuentity1".
* query -> filters -> typesCriterion: Specify "sku" entity type.
* fields -> attributes: Specify "businessConditions" attribute.

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
        <span style="background-color: #FFFF00">"businessConditions"</span>
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the status of the business conditions for the "sku" entity "9LHRIyuMRviABdwQxM0A8Q".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "42e78f8d-078b-4a4d-8765-05f115dd970b",
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
              "attributes": {}
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