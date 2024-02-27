---
title: Rule Context Mapping
sidebar: rdp_sidebar
permalink: api_rule_context_mapping_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Rule Context Mapping Model maps the various business rules to self/primary context. It contains the following sub-objects:

* [entityModel](#entityModel): Contains all the required information of the entity model.
* [data](#data): Contains an array of relationships that contains the details of businessConditions.

<br>
{% if site.build == "internal" %}
See [Map Business Rules or Business Conditions to a Context](api_create_data_model_scenario73.html) for more scenarios and examples.{% endif %} This topic describes the Rule Context Mapping Model object structure using a sample scenario.

## Scenario

Consider you wish to create a rule context mapping model for mapping "invokeupdateskuforsku" businessRule.

<pre><code>
{
  "entityModel": {
    "id": "sku_ruleContextMappings",
    "type": "ruleContextMappings",
    "domain": "generic",
    "data": {
      "relationships": {
        "hasBusinessRules": [
          {
            "id": "hasBusinessRules_invokeupdateskuforsku_businessRule",
            "relationshipType": "association",
            "direction": "both",
            "relTo": {
              "id": "invokeupdateskuforsku_businessRule",
              "type": "businessRule"
            },
            "attributes": {
              "ignoreChangeContext": {
                "values": [
                  {
                    "value": true,
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "isDeleted": {
                "values": [
                  {
                    "value": false,
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
                    "value": true,
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
              },
              "triggerActions": {
                "values": [
                  {
                    "value": "update",
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

{% picture rulecontextmappingdatamodel.png alt="Rule Context Mapping Data Model" %}

## entityModel

This object is the parent container that holds all the required information about the model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this attribute model. | String | 
| type | Indicates the type of this array. | String | 
| domain | Indicates the root domain to which domain of this attribute model belongs to. | String | 
| data | Indicates the section for all business data. | [data](#data) |  

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | sku_ruleContextMappings |
| type | ruleContextMappings |
| domain | generic |

## data

This object contains the business data of the model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of relationships of the workflow. | [relationships](#relationships) |

## relationships

This object contains an array of relationships. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the name of the relationship. | [relationship](#relationship) |

## relationship

This object contains the relatioship details such as id, direction. The following table lists the details of the relationship object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the relationship id. | String |
| relationshipType | Indicates the type of the relationship. | String |
| direction | Indicates the association of the relationship this model has. | String |
| relTo | Indicates the details about the related domain in the relationship. | [relto](#relto) |
| attributes | Indicates the relationship attributes. | [attributes](#attributes) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | hasBusinessRules_invokeupdateskuforsku_businessRule |
| relationshipType | association |
| direction | both |

## relTo

This object contains the details about the related domain object. The following table lists the details of the relTo object:

| Property | Description | Type | 
|----------|-------------|-------|
| id | Indicates the identifier of the related business rule. | String |
| type | Indicates the type of the business rule. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relTo** object:

| Property | Description | 
|----------|-------------|
| id | invokeupdateskuforsku_businessRule |
| type | businessRule |

## attributes

This object contains an array of attributes. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|-------|
| <<AttrName>> -> values | Indicates the name off the relationship attribute. | [values](#values) |

## values

This object contains the values of the simple, nested, and relationship attributes of an entity. The following table lists the details of the values object:

| Property | Description | Type | 
|----------|-------------|------|
| value | Indicates the actual attribute value. | String, Boolean | 
| source | Indicates the source of attribute value. | String  | 
| locale | Indicates the locale for the attribute value. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **values** object:

| Property | Description | 
|----------|-------------|
| value | true |
| source | internal |
| locale | en-US |