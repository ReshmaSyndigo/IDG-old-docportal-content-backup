---
title: Governance Business Condition Data Model 
sidebar: rdp_sidebar
permalink: api_business_condition_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the validation and computation business conditions details. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [data](#data): Contains an array of [attribute](#attributes) and [relationship](#relationships) details of Governance Business Rule Definition Data Model.

<br>
{% if site.build == "internal" %}
See [Create Business Condition with Validation Rules](api_create_data_model_scenario72.html) for more scenarios and examples.{% endif %} This topic describes the Governance Business Condition Entity Data Model object structure using a sample scenario.

## Scenario 

Consider that you wish to create "SKU Pricing Attributes need to be populated" business condition for "skuPricingAttributesValidationRule" in the NewSKUIntroduction workflow. The following example demonstrates the sample JSON format to create a business condition:

<pre><code>
{
  "entityModel": {
    "id": "skuPricingAttributesPopulated_businessCondition",
    "name": "SKU Pricing Attributes need to be populated",
    "type": "businessCondition",
    "domain": "generic",
    "data": {
      "attributes": {
        "name": {
          "values": [
            {
              "value": "SKU Pricing Attributes need to be populated",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Required Attributes need to be completed",
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
        "impactRoles": {
          "values": [
            {
              "value": "admin",
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
            },
            {
              "value": "buyer",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "impactAttributes": {
          "values": [
            {
              "value": "listprice",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "salesprice",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "msrp",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "map",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "dollarmargin",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      "relationships": {
        "hasBusinessRules": [
          {
            "direction": "both",
            "relationshipType": "association",
            "id": "hasBusinessRules_skuPricingAttributesValidationRule_businessRule",
            "relTo": {
              "id": "skuPricingAttributesValidationRule_businessRule",
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
          }
        ]
      }
    }
  }
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture governancbusinessconditiondatamodel.png alt="Governance Business Condition Data Model" %}

## entityModel

This object is the parent container that holds all the required information about the entity model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String |
| name | Indicates the name of the business condition. | String |
| type | Indicates the type of entity model. | String | 
| domain | Indicates the root domain this workflow model belongs to. | String |
| data | Indicates the section for all business data. | [data](#data) | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | skuPricingAttributesPopulated_businessCondition |
| name | SKU Pricing Attributes need to be populated |
| type | businessCondition |
| domain | generic |

## data

This object contains the contexts and attributes of the model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group attributes. | [attributes](#attributes) | 
| relationships | Indicates an array of group of relationships. | [relationships](#relationships)

## attributes

This object contains an array of attributes. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## relationships

This object contains an array of relationships. The following table lists the details of the relationships object: 

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the name of the attribute. | [relationship](#relationship) |

## attribute

This object contains details of the attribute values. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|------|
| name | Indicates the name of the business condition. | List of [values](#values) objects. |
| description | Indicates a description given to the business condition. | List of [values](#values) objects. |
| ruleType | Indicates the type of the rule - business condition. | String |
| executionMode | Indicates the mode of execution. | String |
| enabled | Indicates if the business condition is enabled. | List of [values](#values) objects |
| isDraft | Indicates if the business condition is a draft. | Boolean |
| isDeleted | Indicates if the business condition is deleted or not. | Boolean |
| impactRoles | Indicates the roles impacted by the business condition. | List of [values](#values) objects |
| impactAttributes | Indicates the attributes impacted by the business condition. | List of [values](#values) objects |
| liveTraceEnabled | Indicates if live tracing is enabled or not. | Boolean |
| liveTraceEntityStateLogType | Indicates options to specify the overall entity state logging behavior. | Possible options are: beforeOnly, beforeOnlyWithOriginalEntity, afterOnly, afterOnlyWithOriginalEntity, both, bothWithOriginalEntity, and none. |

{% include callout.html content="**Note:** 
The **Business Rule Live Tracing Framework** consists of **liveTraceEnabled** and **liveTraceEntityStateLogType** flags for tracing and troubleshooting.
" type="primary" %}


## relationship

This object contains details of the relationship values. The following table lists the details of the relationship object: 

| Property | Description | Type | 
|----------|-------------|------|
| direction | Indicates the association of the relationship this model has. | String |
| relationshipType | Indicates the type of the relationship this model has. | String |
| id | Indicates the id of the business rule which this business condition is mapped to. | String |
| relTo | Indicates the details about the related domain in the relationship. | [relto](#relto) |
| attributes | Indicates the relationship attributes. | [attribute](#attribute) |

Data for Sample [Scenario](#scenario): Set the following properties for **relationship** object:

| Property | Description | 
|----------|-------------|
| direction | both |
| relationshipType | association |
| id | hasBusinessRules_skuPricingAttributesValidationRule_businessRule |

## values 

This object contains the values of the simple, nested, and relationship attributes of an entity. The following table lists the details of the values object:

| Property | Description | Type | 
|----------|-------------|------|
| source | Indicates the source of attribute value. | String |
| locale | Indicates the locale for the attribute value. | String | 
| value | Indicates the actual attribute value. | String, Number, Boolean | 

Data for Sample [Scenario](#scenario): Set the following properties for **values** object:

| Property | Description | 
|----------|-------------|
| source | internal |
| locale | en-US |
| value | Required Attributes need to be completed | 

## relTo

This object contains the details about the related domain object. The following table lists the details of the relTo object:

| Property | Description | Type | 
|----------|-------------|-------|
| id | Indicates the identifier of the business rule. | String |
| type | Indicates the type of relationship. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relTo** object:

| Property | Description | 
|----------|-------------|
| id | skuPricingAttributesValidationRule_businessRule |
| type | businessRule |