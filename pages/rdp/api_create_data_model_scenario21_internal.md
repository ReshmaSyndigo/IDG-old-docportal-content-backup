---
title: "Create Business Rule to Update Attribute Value"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario21.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a business rule to update an attribute value, using a scenario.

## Scenario

To create a business rule "UpdateMDMIDForProduct_businessRule" to update attribute "mdmid" for newly created product with product id, if "mdmid" is not provided.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_business_rule_defn_data_model.html) object, fill the details about the attributes of the business rule such as business rule name, description, type, enabled, isDraft, and version as required. In this scenario, the business rule updates the attribute "mdmid" of product with the product id, if mdmid is not provided. 

<pre><code>
IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"mdmid\"],SetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"mdmid\",GetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"productid\"]],false] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"mdmname\"],SetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"mdmname\",GetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"productid\"]],false]"
</code></pre> 

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
    <span style="background-color: #FFFF00">"id": "UpdateMDMIDForProduct_businessRule",</span>
    <span style="background-color: #FFFF00">"type": "businessRule",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "name": {
          "values": [
            {
              "value": "Update MDM ID",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Update MDMID for Newly Created Product if MDMID is not provided",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "value": "computation",
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
              "value": "IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"mdmid\"],SetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"mdmid\",GetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"productid\"]],false] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"mdmname\"],SetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"mdmname\",GetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"productid\"]],false]",
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
          "message": "Submitted businessRule for create with Id UpdateMDMIDForProduct_businessRule. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "businessRule",
            "create",
            "UpdateMDMIDForProduct_businessRule"
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
  * [Create an entity](api_app_create_entity.html) so that the business rule is triggered. 
  * [Get govern data](api_get_govern_data.html) for the entity. You can view the business rules or conditions instance data for the entity with the details of the rules and status.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
