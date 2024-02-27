---
title: Entity Manage Model for Reference Data Domain
sidebar: rdp_sidebar
permalink: api_reference_manage_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the basic model structure of reference entity; its attributes and relationships. This also includes attribute data types. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of an entity model.
* [data](#data): Contains an array of [attributes](#attributes) details of an entity.

<br>
{% if site.build == "internal" %}
See [Create Manage Model](api_create_data_model_scenario51.html), for more scenarios and examples.
{% endif %}

## Scenario 

Consider that you wish to create a basic manage model for colors entity type with the details for attributes and relationships. The following example demonstrates the sample JSON format to create a manage model:

<pre><code>
{
  "entityModel": {
    "id": "colors_entityManageModel",
    "name": "colors",
    "type": "entityManageModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "code": {
          "properties": {
            "externalName": "Code",
            "groupName": "Reference Data",
            "isEntityIdentifier": true,
            "dataType": "string"
          }
        },
        "value": {
          "properties": {
            "externalName": "Value",
            "groupName": "Reference Data",
            "isExternalName": true,
            "dataType": "string",
            "mergeMatrix": [
              {
                "mergeSequence": "Brand Bank>>Ice Cat",
                "ignoreMergeMatrix": false,
                "aggregate": true
              }
            ]
          }
        },
        "type": {
          "properties": {
            "externalName": "Type",
            "groupName": "Reference Data",
            "dataType": "string"
          }
        }
      }
    }
  }
}
</code></pre> 

## entityModel

This object is the parent container that holds all the required information about manage model. You can identify a model by using id, name, version, and type. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String | 
| name | Indicates the name of the model. Generally, this is the entity type for which the model is defined. | String |  
| type | Indicates the model type of the entity model. | String | 
| domain | Indicates the domain for which the model belongs to. | String |  
| data | Indicates the section for all business data. | [data](#data) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | colors_entityManageModel |
| name | colors |
| type | entityManageModel |
| domain | generic |

## data

This object contains the attributes of the manage model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |

## attributes

This object contains an array of attributes of manage model. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| <<AttrName>> -> properties | Indicates the properties of the attribute. | List of [properties](#properties) objects | 

## properties

This object contains the properties of the attributes object. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| externalName | Indicates the external name of the attribute. | String |
| groupName | Indicates the group name of the attribute. | String |
| isEntityIdentifier | Indicates if this attribute is the primary identifier for the entity. | Boolean |
| dataType | Indicates the data type of the attribute. This is a typically a structure for simple attributes. | String. Possible values are - string, date, datetime and decimal |
| mergeMatrix | Indicates an array of merge precedence related properties. | String |
| mergeSequence | Indicates the highest precedence order defined at first for an external source with the lesser precedence level defined next and so on. The various external sources are separated by the symbol ">>". | |
| ignoreMergeMatrix | Indicates whether or not to ignore values from different data sources merged into one single record. | Boolean | 
| aggregate | Indicates whether the incoming value of the entity has to be appended with the existing value of the entity. Aggregate works only for collection attributes. It is not applicable for relationships and nested attributes. | Boolean |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| externalName | Code |
| groupName | Reference Data |
| isEntityIdentifier | true |
| dataType | string |

