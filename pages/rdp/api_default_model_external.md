---
title: Entity Default Values Model
sidebar: rdp_sidebar
permalink: api_default_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the default values for attributes in a model. When you create an entity, the values for these attributes are populated by default and the user can override it if needed. This is useful if there are certain attributes for which the value, in most of the cases, remains the same for each created entity. You can specify the default value keywords for certain attributes in the model.

Default Values Model contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of an entity model.
* [properties](#properties): Contains the audit information of the data model such as createdDate and modifiedDate.
* [data](#data): Contains an array of [attributes](#attributes) and [relationships](#relationships) model details of an entity.

<br>
{% if site.build == "internal" %}
See [Create Default Value Model](api_create_data_model_scenario62.html), for more scenarios and examples.
{% endif %}

## Scenario 

Consider that you wish to create a default values model for "sku" entity type with certain attribute and its default values. The following example demonstrates the sample JSON format to create a default values model:

<pre><code>
{
  "entityModel": {
    "id": "sku_entityDefaultValuesModel",
    "name": "sku",
    "type": "entityDefaultValuesModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "suppliername": {
          "properties": {
            "defaultValues": "[[currentuser.ownershipdata]]"
          }
        },
        "status": {
          "properties": {
            "defaultValues": "New"
          }
        },
        "createdate": {
          "properties": {
            "defaultValues": "[[systemdatetime]]"
          }
        },
        "hypearticle": {
          "properties": {
            "defaultValues": "False"
          }
        },
        "enabled": {
          "properties": {
            "defaultValues": "False"
          }
        }
      },
      "relationships": {
        "ischildof": [
          {
            "properties": {
              "externalName": "Child of",
              "relationshipType": "Composition",
              "relationshipOwnership": "owned",
              "relatedEntityInfo": [
                {
                  "relEntityType": "product"
                }
              ]
            },
            "attributes": {
              "linkdescription": {
                "properties": {}
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

{% picture entitydefaultmodel.png alt="Entity Default Model" %}

## entityModel

This object is the parent container that holds all the required information about default values model. You can identify a model by using id, name, version, and type. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String | 
| name | Indicates the name of the model. Generally, this is the entity type for which the model is defined. | String |  
| type | Indicates the type of the entity model. | String | 
| domain | Indicates the domain for which the model belongs to. | String |  
| data | Indicates the section for all business data. | [data](#data) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | sku_entityDefaultValuesModel |
| name | sku |
| type | entityDefaultValuesModel |
| domain | generic |

## data

This object contains the default value details of the attributes. The following table lists the details of the attributes object:

| Property | Description | Type |
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |
| relationships | Indicates an array of group of [relationships](#relationships) objects. | [relationships](#relationships) |

## attributes

This object contains an array of attributes of default values model. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## relationships

This object contains an array of relationships of default values model. The following table lists the details of the relationships object:

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

This object contains the properties of the attribute and relationship object. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| defaultValues | Indicates the default values of attributes. | String | 
| externalName | Indicates the external name of an attribute. | String |
| relationshipType | Indicates the type of relationship. | String |
| relationshipOwnership | Indicates whether the relationship is owned or not. | String |
| relatedEntityInfo |  Indicates details of the entity type in a relationship. | [relatedEntityInfo](#relatedentityinfo) |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| defaultValues | New |
| externalName | Child of |
| relationshipType | Composition |
| relationshipOwnership | owned |

## relatedEntityInfo

This object provides details of entity type used in the relationship. The following table lists the details of the relatedEntityInfo object:

| Property | Description | Type |
|----------|-------------|------|
| relEntityType | Indicates the entity type in a relationship. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relatedEntityInfo** object:

| Property | Description | 
|----------|-------------|
| relEntityType | product |