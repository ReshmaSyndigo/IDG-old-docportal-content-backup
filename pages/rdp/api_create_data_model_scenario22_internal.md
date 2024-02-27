---
title: "Create Business Rule to Validate Basic Attributes"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario22.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a business rule to validate all basic attributes, using a scenario.

## Scenario

To create a business rule "skuBasicAttributesValidationRule_businessRule" to validate all basic attributes.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

* entityModel: In the [entity model](api_business_rule_defn_data_model.html) object, fill the details about the attributes of the business rule such as business rule name, description, type, enabled, isDraft, and version as required. 

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "skuBasicAttributesValidationRule_businessRule",</span>
    <span style="background-color: #FFFF00">"type": "businessRule",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "name": {
          "values": [
            {
              "value": "Basic SKU Attribute Population",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "This is the step where vendor populates all the basic attributes of the SKU",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "value": "validation",
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
        "definition": {
          "values": [
            {
              "value": "IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"mdmid\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"mdmid\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"mdmid\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"mdmname\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"mdmname\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"mdmname\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"description\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"description\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"description\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"productfeatures\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"productfeatures\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"productfeatures\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"color\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"color\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"color\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"size\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"size\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"size\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"upc\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"upc\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"upc\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"currency\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"currency\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"currency\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"cost\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"cost\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"cost\"]]",
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
        }
      }
    }
  }
}
</code></pre> 

## Response

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre><code>
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
          "message": "Submitted businessRule for create with Id skuBasicAttributesValidationRule_businessRule. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "businessRule",
            "create",
            "skuBasicAttributesValidationRule_businessRule"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* After creating the business rule and [mapping to a context](api_create_data_model_scenario73.html): 
  * [Get govern data](api_get_govern_data.html) for the entity. You can view the business rules or conditions instance data for the entity with the details of the rules and status.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.