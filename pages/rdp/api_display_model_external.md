---
title: Entity Display Model
sidebar: rdp_sidebar
permalink: api_display_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the display name and display type for the attributes and relationships of entities that is used by the user interface to display various aspects of the data. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of an entity model.
* [properties](#properties): Contains the audit information of the data model such as createdDate and modifiedDate.
* [data](#data): Contains an array of [attributes](#attributes), and [relationships](#relationships) details of an entity.

<br>
{% if site.build == "internal" %}
See [Create Display Model](api_create_data_model_scenario60.html), for more scenarios and examples.
{% endif %}

## Scenario 

Consider that you wish to create a display model for sku entity type with certain attribute such as mdmid, mdmname, productfeatures, featurespecs, leadtime, buytodemand, cost and with the display model details for "ischildof" relationship. The following example demonstrates the sample JSON format to create a display model:

<pre><code>
{
  "entityModel": {
    "id": "sku_entityDisplayModel",
    "name": "sku",
    "type": "entityDisplayModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "mdmid": {
          "properties": {
            "displayType": "textbox",
            "displaySequence": "1010",
            "description": ""
          }
        },
        "mdmname": {
          "properties": {
            "displayType": "textbox",
            "displaySequence": "1020",
            "description": ""
          }
        },
        "productfeatures": {
          "properties": {
            "displayType": "textarea",
            "displaySequence": "1050",
            "description": ""
          }
        },
        "color": {
          "properties": {
            "displayType": "referencelist",
            "displaySequence": "1080",
            "description": "",
            "referenceEntityInfo": [
              {
                "thumbnail": "none",
                "listTitle": "{entity.attributes.value}",
                "listSubTitle": ""
              }
            ]
          }
        },
        "hotmarket": {
          "properties": {
            "displayType": "boolean",
            "displaySequence": "2570",
            "description": ""
          }
        },
        "alternateimagesurl": {
          "properties": {
            "displayType": "textbox",
            "displaySequence": "8040",
            "description": ""
          }
        },
        "availableincountries": {
          "properties": {
            "displayType": "referencelist",
            "displaySequence": "1010",
            "description": "Select the countries where the sku is available",
            "referenceEntityInfo": [
              {
                "thumbnail": "none",
                "listTitle": "{entity.attributes.value}",
                "listSubTitle": ""
              }
            ]
          }
        },
        "productclassification": {
          "properties": {
            "displayType": "path",
            "displaySequence": "1020",
            "description": "",
            "isCollection": true,
            "pathEntityInfo": [
              {
                "pathRelationshipName": "belongsTo",
                "pathEntityType": "classification",
                "rootNode": "productclassificationroot",
                "pathSeperator": ">>"
              }
            ]
          }
        },
        "itemtype": {
          "properties": {
            "displayType": "referencelist",
            "displaySequence": "1030",
            "description": "",
            "isReferenceType": true,
            "referenceEntityInfo": [
              {
                "refRelationshipName": "hasReferenceTo",
                "refEntityType": "itemtype"
              }
            ]
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
                "properties": {
                  "displayType": "textarea",
                  "displaySequence": "4040",
                  "description": ""
                }
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

{% picture entitydisplaymodel.png alt="Entity Display Model" %}

## entityModel

This object is the parent container that holds all the required information about display model. You can identify a model by using id, name, version, and type. The following table lists the details of the entityModel object:

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
| id | sku_entityDisplayModel |
| name | sku |
| type | entityDisplayModel |
| domain | generic |

## data

This object contains the attributes and relationships of the display model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |
| relationships | Indicates an array of group of [relationships](#relationships) objects. | [relationships](#relationships) | 

## attributes

This object contains an array of attributes of display model. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## relationships

This object contains an array of relationships of display model. The following table lists the details of the relationships object:

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
| displayType | Indicates the widget type for displaying in UI. | String | 
| displaySequence | Indicates the sequence in which the attributes are displayed. | Integer |
| description | Provides the details of a particular attribute. | String |
| externalName | Indicates the external name of an attribute. | String | 
| relationshipType | Indicates the type of relationship. | String |
| relationshipOwnership | Indicates whether the relationship is owned or not. | String |
| referenceEntityInfo | Indicates details of reference entities. | [referenceEntityInfo](#referenceentityinfo) |
| pathEntityInfo | Indicates details about additional context paths. | [pathEntityInfo](#pathentityinfo) |
| relatedEntityInfo |  Indicates details of the entity type in a relationship. | [relatedEntityInfo](#relatedentityinfo) |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| displayType | textbox |
| displaySequence | 1010 |
| description | "" |
| externalName | Child of |
| relationshipType | Composition |
| relationshipOwnership | owned |

## referenceEntityInfo

This object provides details of reference entities such as refRelationshipName, refEntityType. The following table lists the details of the referenceEntityInfo object:

| Property | Description | Type |
|----------|-------------|------|
| refRelationshipName | Indicates the reference relationship name. | String | 
| refEntityType | Indicates the reference entity type of the entity instance. | String | 
| thumbnail | Indicates whether a thumbnail is available. | String | 
| listTitle | Indicates the title of the reference list. | String | 
| listSubTitle | Indicates the subtitle of the reference list. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **referenceEntityInfo** object:

| Property | Description | 
|----------|-------------|
| refRelationshipName | hasReferenceTo |
| refEntityType | itemtype |
| listSubTitle | none |
| listTitle | {entity.attributes.value} |
| listSubTitle | "" |

## pathEntityInfo

This object provides details of additional context path. The following table lists the details of the pathEntityInfo object:

| Property | Description | Type |
|----------|-------------|------|
| pathRelationshipName | Indicates the name of pathRelationship. | String |
| pathEntityType | Indicates the type of path. | String |
| rootNode | Indicates the root node of the path. | String |
| pathSeperator | Indicates the operator used to seperate the paths. | Operator |

Data for Sample [Scenario](#scenario): Set the following properties for **pathEntityInfo** object:

| Property | Description | 
|----------|-------------|
| pathRelationshipName | belongsTo |
| pathEntityType | classification |
| rootNode | productclassificationroot |
| pathSeperator | >> |

## relatedEntityInfo

This object provides details of entity type used in the relationship. The following table lists the details of the relatedEntityInfo object:

| Property | Description | Type |
|----------|-------------|------|
| relEntityType | Indicates the entity type in a relationship. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relatedEntityInfo** object:

| Property | Description | 
|----------|-------------|
| relEntityType | product |