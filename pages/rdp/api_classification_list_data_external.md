---
title: Classification
sidebar: rdp_sidebar
permalink: api_classification_list_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

To group entities into categories and define a hierarchial structure of entities, a classification is added. In Riversand Platform, Classification is an enhancer attribute also referred to as additional context. The following lists a few examples of classification hierarchy:

* Electronics >> Instruments >> Keyboards 
* Electronics >> Personal Audio >> Portable Speakers 
* Food and Beverages >> Coffee 
* Home & Kitchen >> Major Appliances >> Dishwashers 

<br>
This topic describes the object structure of classification "keyboards", using a sample scenario.

## Scenario

<pre><code>
{
  "metaInfo": {
    "dataIndex": "entityData",
    "collectionName": "entities",
    "responseObjectName": "response"
  },
  "entities": [
    {
      "id": "keyboards",
      "name": "Keyboards",
      "type": "classification",
      "data": {
        "attributes": {
          "identifier": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "keyboards"
              }
            ]
          },
          "externalName": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "Keyboards"
              }
            ]
          },
          "rootexternalname": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "Product Classifications"
              }
            ]
          },
          "externalnamepath": {
            "values": [
              {
                "locale": "en-US",
                "source": "internal",
                "value": "Product Classifications>>Instruments>>Keyboards"
              }
            ]
          }
        },
        "relationships": {
          "belongsto": [
            {
              "relTo": {
                "id": "instruments",
                "type": "classification"
              }
            }
          ]
        }
      }
    }
  ]
}
</code></pre> 

If a classification is related to multiple parents, only the first parent is considered while forming the classification path.

{% include callout.html content="**Note**: Each item in the Classification list is defined by [Additional Context](api_additional_context_data_model.html).
" type="primary" %}

## metaInfo

This object contains the information about the data which is sent to the API such as dataIndex and collectionName. The following table lists the details of the metaInfo object:

| Property | Description | Type | 
|----------|-------------|------|
| dataIndex | Indicates the index identifier in the elastic database. | String | 
| collectionName | Indicates the name of the collection to which these lists belongs to. | String | 
| responseObjectName | Indicates the name of the response object. | String |

Data for sample [scenario](#scenario): Set the following properties for **metaInfo** object:

| Property | Value | 
|----------|-------|
| dataIndex | entityData |
| collectionName | entities |
| responseObjectName | response |

## entities

This object indicates entity details such as id, name, type, data. The following table lists the details of the entities object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this entity. | String | 
| name | Indicates the name of this entity. | String | 
| type | Indicates the type of this array. | String |
| data | Indicates attributes and relationships details of this entity. | [data](#data) |

Data for sample [scenario](#scenario): Set the following properties for **entities** object:

| Property | Value | 
|----------|-------|
| id | keyboards |
| name | Keyboards |
| type | classification |

## data

This object contains the attributes and relationships of this entity. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |
| relationships | Indicates an array of group of [relationships](#relationships) objects. | [relationships](#relationships) |

## attributes

This object contains an array of attributes of this entity. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| identifier | Indicates the identifier attribute. You can obtain the full classification path without traversing the classification hierarchy tree structure by using just the classification identifier. | [attribute](#attribute) |
| externalName | Indicates the name of the classification. | [attribute](#attribute) |
| rootexternalname | Indicates the root name of the classification. | [attribute](#attribute) |
| externalnamepath | Indicates the full path of the classification. | [attribute](#attribute) |

## relationships

This object contains an array of relationships. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the name of the relationship. | [relationship](#relationship) |

## attribute

This object contains various details of an attribute. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|-------|
| values | Indicates the details of locale, source, value of the attribute. | [values](#values) |

## relationship

This object contains various details of a relationship. The following table lists the details of the relationship object:

| Property | Description | Type | 
|----------|-------------|-------|
| relTo | Indicates the details about the related domain in the relationship | [relTo](#relTo) |

## values

This object contains the values of the simple, nested, and relationship attributes of an entity. The following table lists the details of the values object:

| Property | Description | Type | 
|----------|-------------|------|
| value | Indicates the actual attribute value. | String, Boolean | 
| source | Indicates the source of attribute value. | String  | 
| locale | Indicates the locale for the attribute value. | String | 

## relTo

This object contains the details about the related domain object. The following table lists the details of the relTo object:

| Property | Description | Type | 
|----------|-------------|-------|
| id | Indicates the identifier of the related object. | String |
| type | Indicates the type of the related object. | String |

Data for Sample [Scenario](#scenario): Define the following values for each attribute as required:

| Attribute | Value | 
|----------|-------------|
| identifier | keyboards |
| externalName | Keyboards |
| rootexternalname | Product Classifications |
| externalnamepath | Product Classifications>>Instruments>>Keyboards |