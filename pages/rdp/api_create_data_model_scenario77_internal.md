---
title: Qualify Business Rule based on Trigger Attributes and Relationships
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario77.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to qualify the business rule based on the specified triggered attributes and relationships, using a scenario.

## Scenario

Consider that you wish to qualify the business rules if the attributes specified in the **triggerAttributes** and the relationships specified in the **triggerRelationships** are changed based on the create, update, or delete actions.

For example, "calculatedimensionslabel_businessRule" is created and the attributes such as length, width, and height are mapped to the SKU entity types. The business rule is qualified if the specified attributes are updated for the respective entity.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_business_rule_defn_data_model.html) object, fill the details about the attributes of the business rule such as business rule name, description, type, enabled, isDraft, triggerAttributes, and triggerRelationships as required. In this scenario, the business rule computes the "dimensionslabel" attribute value based on length, width, and height attribute values.

**Sample Business Rule:**

<pre><code>
varLength:=GetAttributeValue["_DEFAULT","_DEFAULT","length"]; varWidth:=GetAttributeValue["_DEFAULT","_DEFAULT","width"]; varHeight:=GetAttributeValue["_DEFAULT","_DEFAULT","height"]; IIF[IsNullOrEmpty[varLength],SetVariable["varLength","L"],false] AND IIF[IsNullOrEmpty[varWidth],SetVariable["varWidth","W"],false] AND IIF[IsNullOrEmpty[varHeight],SetVariable["varHeight","H"],false] AND SetAttributeValue["_DEFAULT","_DEFAULT","dimensionslabel",CONCAT[varLength," X ",varWidth," X ",varHeight]]
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
    <span style="background-color: #FFFF00"> "id": "calculatedimensionslabel_businessRule", </span>
    <span style="background-color: #FFFF00"> "type": "businessRule", </span>
    "properties": {
      "createdService": "entityManageModelService",
      "createdBy": "rdwadmin@riversand.com_user",
      "createdDate": "2022-03-02T04:59:49.132-0600",
      "modifiedService": "entityManageModelService",
      "modifiedBy": "rdwadmin@riversand.com_user",
      "modifiedDate": "2022-03-02T05:42:34.214-0600"
    },
    "data": {
      "attributes": {
        "name": {
          "values": [
            {
              "id": "6_0",
              "value": "Calculates the Dimensions Label",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "description": {
          "values": [
            {
              "id": "6_0",
              "value": "Calculates the Dimensions Label attribute value of an entity when L/W/H is updated",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "id": "6_0",
              "value": "computation",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "executionMode": {
          "values": [
            {
              "id": "6_0",
              "value": "any",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "definition": {
          "values": [
            {
              "id": "6_0",
              "value": "SetAttributeValue[\"_DEFAULT\",\"_DEFAULT\",\"dimensionslabel\",NOW[]]",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "enabled": {
          "values": [
            {
              "id": "6_0",
              "value": true,
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "enabledOnMigration": {
          "values": [
            {
              "id": "6_0",
              "value": false,
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "isDraft": {
          "values": [
            {
              "id": "6_0",
              "value": false,
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "isDeleted": {
          "values": [
            {
              "id": "6_0",
              "value": false,
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        <span style="background-color: #FFFF00"> "triggerAttributes": { </span>
          "values": [
            {
              "id": "6_0",
              <span style="background-color: #FFFF00"> "value": "length", </span>
              "locale": "en-US",
              "source": "internal"
            },
            {
              "id": "6_0",
              <span style="background-color: #FFFF00"> "value": "width", </span>
              "locale": "en-US",
              "source": "internal"
            },
            {
              "id": "6_0",
              <span style="background-color: #FFFF00"> "value": "Height", </span>
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        <span style="background-color: #FFFF00"> "triggerRelationships": { </span>
          "values": [
            {
              "id": "6_0",
              "value": "hasimages",
              "locale": "en-US",
              "source": "internal"
            },
            {
              "id": "6_0",
              "value": "ischildof",
              "locale": "en-US",
              "source": "internal"
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
          "message": "Submitted businessRule for create with Id calculatedimensionslabel_businessRule. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "businessRule",
            "create",
            "calculatedimensionslabel_businessRule"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

{% include callout.html content="**Notes**: 
* The rule is qualified based on the changed attributes and relationships from the respective business rules in the current context.
* If the attributes are changed in any locale, then the rule is considered as qualified.
* If any of the attributes specified in 'triggerAttributes' are changed, then the business rule is considered as qualified.
* If any of the relationships specified in the 'triggerRelationships' are changed, then the business rule is considered as qualified.
* Consider that there are two business rules, BR1 and BR2. Both the business rules are mapped to the length attribute, which is a triggerAttributes. If you update the length attribute for BR1, then the same update is considered as change for BR2 also.
" type="primary" %}

The following table depicts the behavior of triggerAttributes and triggerRelationships:

| changeType | triggerAttributes | triggerRelationships | 
|------------|-------------------|----------------------|
| changeType considered | • addContext <br/>• addAttributeToContext <br/>• updateAttributeInContext <br/>• deleteAttributeFromContext | • addContext <br/>• AddAttributeToRelationship <br/>•updateAttributeInRelationship <br/>•deleteAttributeFromRelationship <br/>• addRelationshipToContext <br/>• deleteRelationshipFromContext <br/>• updRelSrcInfo |
| changeType ignored | • updateContext <br/>• deleteContext <br/>• addAttributeToRelationship <br/>•updateAttributeInRelationship <br/>•deleteAttributeFromRelationship <br/>• addRelationshipToContext <br/>• updRelSrcInfo <br/>•deleteRelationshipFromContext <br/>• deleteDataObject | • updateContext <br/>• deleteContext <br/>• addAttributeToContext <br/>• updateAttributeInContext <br/>•deleteAttributeFromContext <br/>• deleteDataObject |

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* After creating the business rule and [mapping to a context](api_create_data_model_scenario73.html):
  * [Create an entity](api_app_create_entity.html) so that the business rule is triggered. 
  * [Get govern data](api_get_govern_data.html) for the entity. You can view the business rules or conditions instance data for the entity with the details of the rules and status.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
