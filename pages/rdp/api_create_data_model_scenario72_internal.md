---
title: Create Business Condition with Validation Rules
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario72.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a business condition, using a scenario.

## Scenario

To create "skuBasicAttributesPopulated" business condition and check if all basic attributes and relationships are populated. This internally implies that, you wish to create a relationship of type "hasBusinessRules" between the business condition and the business rules.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_business_condition_data_model.html) object, fill the details about the model id and name. Specify type as "businessCondition". In the data object, 
  * Specify the details of the impacted roles, attributes and relationships, for the business condition "skuBasicAttributesPopulated_businessCondition". 
  * Create an array of relationship type "hasBusinessRules" and in the relTo object for each, specify the id of the business rule and type as "businessRule".

POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json

<pre>
<code>
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "skuBasicAttributesPopulated_businessCondition",</span>
    <span style="background-color: #FFFF00">"name": "Basic SKU Attributes & Relationships need to be populated",</span>
    <span style="background-color: #FFFF00">"type": "businessCondition",</span>
    "domain": "generic",
    "data": {
      "attributes": {
        "name": {
          "values": [
            {
              "value": "Basic SKU Attributes & Relationhips need to be populated",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Required Attributes & Relationships need to be completed",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "value": "businessCondition",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "executionMode": {
          "values": [
            {
              "value": "any",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "enabled": {
          "values": [
            {
              "value": "true",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "isDraft": {
          "values": [
            {
              "value": "false",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "isDeleted": {
          "values": [
            {
              "value": "false",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"impactRoles": {</span>
          "values": [
            {
              "value": "admin",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "vendor",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "productmanager",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "merchandising",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "marketing",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"impactAttributes": {</span>
          "values": [
            {
              "value": "mdmid",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "mdmname",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "description",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "productfeatures",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "color",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "size",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "upc",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "currency",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "cost",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"impactRelationships": {</span>
          "values": [
            {
              "value": "hasimages",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      "relationships": {
        <span style="background-color: #FFFF00">"hasBusinessRules": [</span>
          {
            "direction": "both",
            "relationshipType": "association",
            "id": "hasBusinessRules_skuBasicAttributesValidationRule_businessRule",
            <span style="background-color: #FFFF00">"relTo": {</span>
              "id": "skuBasicAttributesValidationRule_businessRule",
              "type": "businessRule"
            },
            "attributes": {
              "isDeleted": {
                "values": [
                  {
                    "value": "false",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "executionOrder": {
                "values": [
                  {
                    "value": "1",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              }
            }
          },
          {
            "direction": "both",
            "relationshipType": "association",
            "id": "hasBusinessRules_skuImageAddedValidationRule_businessRule",
            <span style="background-color: #FFFF00">"relTo": {</span>
              "id": "skuImageAddedValidationRule_businessRule",
              "type": "businessRule"
            },
            "attributes": {
              "isDeleted": {
                "values": [
                  {
                    "value": "false",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "executionOrder": {
                "values": [
                  {
                    "value": "2",
                    "source": "internal",
                    "locale": "en-US"
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
</code>
</pre>

## Response

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3ce5b682-48ce-4dd1-97c9-5352fffffc9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted businessCondition for create with Id skuBasicAttributesPopulated_businessCondition. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "businessCondition",
            "create",
            "skuBasicAttributesPopulated_businessCondition"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Verify the created default model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.