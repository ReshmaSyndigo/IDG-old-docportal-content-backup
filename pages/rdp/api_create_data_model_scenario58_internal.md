---
title: Create Validation Model
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario58.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create validation model, using a scenario.

## Scenario

To create validation model for "SKU" entity type.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the [entity model](api_validation_model.html) object, 
* Specify the id as "sku_entityValidationModel", name as "sku", and type as "entityValidationModel". 
* Specify the validations to be performed on the attributes and relationships in all contexts. For example:

| Data | Validation |
|---------|----------|
| headline | Length: 5 - 100 |
| cost | Precision: 2 |
| leadtime | Range: 2 - 365 days |
| email | Pattern Validation: Can take A-Z,a-z , ., _, or % character one or more times. Must have @ symbol. Must be followed by . and other alphabets, like .com, .co.in,.org |
| ischildof relationship | Cardinality: 1 |
| vat in Germany context | Precision: 2, Range: 0 - 100 |

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "sku_entityValidationModel",</span>
    <span style="background-color: #FFFF00">"name": "sku",</span>
    <span style="background-color: #FFFF00">"type": "entityValidationModel",</span>
    <span style="background-color: #FFFF00">"domain": "generic",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "properties": {
            "required": true
          }
        },
        "mdmname": {
          "properties": {
            "required": true
          }
        },
        "productfeatures": {
          "properties": {
            "required": false,
            "isLocalizable": true
          }
        },
        <span style="background-color: #FFFF00">"headline": {</span>
          "properties": {
            <span style="background-color: #FFFF00">"minLength": "5",</span>
            <span style="background-color: #FFFF00">"maxLength": "100",</span>
            "required": false,
            "isLocalizable": true
          }
        },
        "featurespecs": {
          "properties": {
            "isCollection": true,
            "required": false,
            "isLocalizable": true
          }
        },
        <span style="background-color: #FFFF00">"leadtime": {</span>
          "properties": {
            <span style="background-color: #FFFF00">"range": [</span>
              {
                <span style="background-color: #FFFF00">"rangeTo": 365,</span>
                <span style="background-color: #FFFF00">"rangeFrom": 2,</span>
                "isRangeToInclusive": false,
                "isRangeFromInclusive": false
              }
            ],
            "rangeTo": 365,
            "rangeFrom": 2,
            "isRangeToInclusive": false,
            "isRangeFromInclusive": false,
            "required": false,
            "uomEntityInfo": [
              {
                "uomRelationshipName": "hasUnits",
                "uomEntityType": "Time"
              }
            ],
            "uomAllowedUnitSymbols": [
              {
                "unitSymbol": "days"
              }
            ]
          }
        },
        "cost": {
          "properties": {
            "precision": 2,
            "required": false
          }
        },
        "email": {
          "properties": {
            "isLocalizable": false,
            "pattern": "[\\w\\._%-]+@[\\w]+(\\.[A-Za-z]+)*(\\.[A-Za-z]{2,6})",
            "allowedInput": "valid email addresses"
          }
        },
        "msrp": {
          "properties": {
            "precision": 2,
            "required": false
          }
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            "properties": {
              <span style="background-color: #FFFF00">"cardinality": [</span>
                {
                  "minimum": "1"
                },
                {
                  "maximum": "1"
                }
              ]
            },
            "attributes": {
              "linkdescription": {
                "properties": {
                  "required": false,
                  "isLocalizable": true
                }
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
          "message": "Submitted entityValidationModel for create with Id sku_entityValidationModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityValidationModel",
            "create",
            "sku_entityValidationModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the created validation model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* After creating the model, when you [create an entity](api_app_create_entity.html) the attributes and relationships are validated for correctness based on this validation model.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.