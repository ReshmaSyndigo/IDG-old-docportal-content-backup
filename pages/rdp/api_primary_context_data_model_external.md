---
title: Primary Context
sidebar: rdp_sidebar
permalink: api_primary_context_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

**Primary Context** is the context to which an entity object is linked. It can be country, channel, season etc. It allows maintaining different values for same attributes/relationships in different context.
The following are the examples of primary contexts in Riversand Platform: 
* Country
* Channel
<br>
This topic describes the "country" context object structure using a sample scenario. Country manage model defines a model for reference list of countries such as Germany, Belgium. In this model, you can define: 
* Attributes required for the model
* Relationships such as channel belonging to a country (germanyretail, belgiumweb) or a list of allowed locales for the country.

Note that you can define a manage model for a specific instance of the country such as Germany.

## Scenario

<pre><code>
{
  "entityModel": {
    "id": "country_entityManageModel",
    "name": "country",
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
            "dataType": "string"
          }
        }
      },
      "relationships": {
        "belongstocountry": [
          {
            "properties": {
              "externalName": "Channels",
              "relationshipType": "Association",
              "relationshipOwnership": "whereused",
              "relatedEntityInfo": [
                {
                  "relEntityType": "channel"
                }
              ]
            },
            "attributes": {}
          }
        ],
        "allowedlocales": [
          {
            "properties": {
              "externalName": "Allowed Locales",
              "relationshipType": "Association",
              "relationshipOwnership": "owned",
              "relatedEntityInfo": [
                {
                  "relEntityType": "locale"
                }
              ]
            },
            "attributes": {}
          }
        ]
      }
    }
  }
}
</code></pre> 

The following diagram depicts the structure of the above Data Model:

{% picture entityprimarycontextmodel.png alt="Entity Primary Context Model" %}

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
| id | country_entityManageModel |
| name | country |
| type | entityManageModel |
| domain | generic |

## data

This object contains the attributes and relationships of the manage model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |
| relationships | Indicates an array group of [relationships](#relationships) objects. | [relationships](#relationships) |

## attributes

This object contains an array of attributes of manage model. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## relationships

This object contains an array of relationships of manage model. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the relationship name of the attribute. | [relationship](#relationship) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| <<AttrName>> -> properties | Indicates the properties of the attribute. | List of [properties](#properties) objects | 

## relationship

This object contains the details of the relationship of an entity. The following table lists the details of the relationship object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> -> properties | Indicates the properties of the relationship. | List of [properties](#properties) objects | 
| <<RelName>> -> attributes | Indicates the name of the relationship attribute. | [attribute](#attribute) |

## properties

This object contains the properties of the attributes object. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| externalName | Indicates the external name of the attribute. | String |
| groupName | Indicates the group name of the attribute. | String |
| isEntityIdentifier | Indicates if this attribute is the primary identifier for the entity. | Boolean |
| dataType | Indicates the data type of the attribute. This is a typically a structure for simple attributes. | String. Possible values are - string, date, datetime and decimal |
| relationshipType | Indicates the type of relationship. | String |
| relationshipOwnership | Indicates whether the relationship is owned or not. | String |
| relatedEntityInfo |  Indicates details of the entity type in a relationship. | [relatedEntityInfo](#relatedentityinfo) |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| externalName | Code |
| groupName | Reference Data |
| isEntityIdentifier | true |
| dataType | string |
| relationshipType | Association |
| relationshipOwnership | owned |

## relatedEntityInfo

This object provides details of entity type used in the relationship. The following table lists the details of the relatedEntityInfo object:

| Property | Description | Type |
|----------|-------------|------|
| relEntityType | Indicates the entity type in a relationship. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relatedEntityInfo** object:

| Property | Description | 
|----------|-------------|
| relEntityType | locale |