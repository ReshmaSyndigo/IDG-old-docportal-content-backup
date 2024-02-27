---
title: Entity Govern Model for Entity Type
sidebar: rdp_sidebar
permalink: api_governance_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes the object structure of govern model for an entity type using a sample scenario. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [data](#data): Contains an array of attributes that contains the details of businessConditions.

<br>
{% if site.build == "internal" %}
See [Create Entity Govern Model for Entity Type](api_create_data_model_scenario75.html) for more scenarios and examples.{% endif %} This topic describes the Govern Model for Entity Type object structure using a sample scenario.

## Scenario

Consider you wish to create a govern model for "sku" entity type.

<pre><code>
{
  "entityModel": {
    "id": "sku_entityGovernModel",
    "name": "sku",
    "type": "entityGovernModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "businessConditions": {
          "group": [
            {
              "businessConditionName": {
                "properties": {
                  "dataType": "string",
                  "externalName": "Business Condition Name",
                  "isAttributeIdentifier": "true"
                }
              },
              "businessConditionStatus": {
                "properties": {
                  "attributeType": "boolean",
                  "externalName": "Business Condition Status"
                }
              }
            }
          ],
          "properties": {
            "attributeType": "group",
            "externalName": "Business Conditions",
            "isCollection": "true"
          }
        }
      }
    }
  }
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture entitygovernmodelforentitytype.png alt="Entity Govern Model For Entity Type" %}

## entityModel

This object is the parent container that holds all the required information about governance model. You can identify a model by using id, name, version, and type. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this governance model. | String | 
| name | Indicates the name of this governance model. | String |
| type | Indicates the type of this array. | String | 
| domain | Indicates the root domain to which the governance model belongs to. | String | 
| data | Indicates the section for all business data. | [data](#data) |  

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | sku_entityGovernModel |
| name | sku |
| type | entityGovernModel |
| domain | generic |

## data

This object contains the business data of the model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of attributes of the workflow. | [attributes](#attributes) |

## attributes

This object contains various details of businessConditions. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| businessConditions | Indicates the businessConditions details. | [group](#group) |

## group

This object contains various details of businessConditionName and businessConditionStatus. The following table lists the details of the group object:

| Property | Description | Type | 
|----------|-------------|------|
| businessConditionName | Indicates the businessConditionName details. | [properties](#properties) |
| businessConditionStatus | Indicates the status of businessCondition. | [properties](#properties) |

## properties

This object contains details of businessConditionName, businessConditionStatus, businessConditions. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| dataType | Indicates the data type of the attribute. | String |
| externalName | Indicates the external name of businessConditionName, businessConditionStatus. | String |
| isAttributeIdentifier | Indicates whether the attribute is an identifier. | Boolean |
| attributeType | Indicates the data type of the attribute. | String |
| isCollection | Indicates if this attribute is a collection attribute or not. | Boolean |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| dataType | string |
| externalName | Business Condition Name |
| isAttributeIdentifier | true |
| attributeType | boolean |
| isCollection | true |