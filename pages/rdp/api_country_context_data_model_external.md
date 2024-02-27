---
title: Primary Context Instance - Country
sidebar: rdp_sidebar
permalink: api_country_context_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the basic structure of the Country context which is a type of primary context. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of an entity model. 
* [properties](#properties): Contains the audit information of the data model such as createdDate and modifiedDate. 
* [data](#data): Contains an array of contexts, attributes, and relationships model details of an entity.

| Country | Models |
|----------|---------|
| Germany | Entity Manage Model |
|         |	Entity Validation Model |
|         |	Entity Display Model |
|         |	Entity Default Values Model |

You can define [Entity Manage Model](api_manage_model.html), [Entity Validation Model](api_validation_model.html), [Entity Display Model](api_display_model.html), [Entity Default Values Model](api_default_model.html) for a country. This topic describes the manage model for "germany".

## Scenario

<pre><code>
{
  "entityModel": {
    "id": "germany_entityManageModel",
    "name": "Germany",
    "type": "entityManageModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "description": {
          "properties": {
            "externalName": "Description",
            "groupName": "Basic",
            "dataType": "string",
            "mergeMatrix": [
              {
                "mergeSequence": "Ice Cat>>Brand Bank",
                "ignoreMergeMatrix": false
              }
            ],
            "isLocalizable": true
          }
        }
      },
      "packaginginfo": {
        "properties": {
          "externalName": "Packaging Information",
          "groupName": "Internal Information",
          "dataType": "nested"
        },
        "group": [
          {
            "packagingtype": {
              "properties": {
                "externalName": "Packaging Type",
                "groupName": "packaginginfo",
                "isAttributeIdentifier": true,
                "dataType": "string",
                "isReferenceType": true,
                "referenceEntityInfo": [
                  {
                    "refRelationshipName": "hasReferenceTo",
                    "refEntityType": "packagingtype"
                  }
                ]
              }
            },
            "packagingwidth": {
              "properties": {
                "externalName": "Width",
                "groupName": "packaginginfo",
                "dataType": "decimal"
              }
            },
            "packagingheight": {
              "properties": {
                "externalName": "Height",
                "groupName": "packaginginfo",
                "dataType": "decimal"
              }
            },
            "packaginglength": {
              "properties": {
                "externalName": "Length",
                "groupName": "packaginginfo",
                "dataType": "decimal"
              }
            },
            "packagingweight": {
              "properties": {
                "externalName": "Weight",
                "groupName": "packaginginfo",
                "dataType": "decimal",
                "mergeMatrix": [
                  {
                    "mergeSequence": "Ice Cat>>Brand Bank",
                    "ignoreMergeMatrix": false
                  }
                ]
              }
            }
          }
        ]
      },
      "productclassification": {
        "properties": {
          "externalName": "Product classification",
          "dataType": "string",
          "groupName": "Enhancer Attributes",
          "displayType": "path",
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
      "mergeMatrix": [
        {
          "mergeSequence": "Ice Cat>>Brand Bank",
          "ignoreMergeMatrix": false,
          "vat": {
            "properties": {
              "externalName": "VAT in %",
              "groupName": "Item Details",
              "dataType": "decimal"
            }
          },
          "countryoforigin": {
            "properties": {
              "externalName": "Country of Origin",
              "groupName": "Item Details",
              "dataType": "string",
              "isReferenceType": true,
              "referenceEntityInfo": [
                {
                  "refRelationshipName": "hasReferenceTo",
                  "refEntityType": "country"
                }
              ]
            }
          }
        }
      ]
    }
  }
}
</code></pre> 

The following diagram depicts the structure of the above Data Model:

{% picture primarycontextinstance.png alt="Primary Context Instance - Country" %}

## entityModel

This object contains an array of various attributes of a particular entityType. The following table lists the details of the entityModel object: 

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this entityType. | String | 
| name | Indicates the name of this entityType. | String | 
| type | Indicates the type of this array. | String |
| domain | Indicates the domain to which this entityType belongs to. | String |
| data | Indicates an array of group of [properties](#properties). | [properties](#properties) | 

Data for sample [scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Value | 
|----------|-------|
| id | germany_entityManageModel |
| name | Germany |
| type | entityManageModel |
| domain | generic |

## data

This object contains details of attributes. The following table lists the details of the **data** object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of attributes. | [attributes](#attributes) |

## attributes

This object contains various details of attributes. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> |  Indicates an object that contains all the details about an attribute such as externalName, groupName. | [attribute](#attribute) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| Property | Description | Type |
|----------|-------------|-------|
| <<AttrName>> -> properties | Indicates the various [properties](#properties) of the attribute. | [properties](#properties) |

## properties

This object contains details of the attribute such as externalName, groupName. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|-------|
| externalName | Indicates the external name of an attribute. | String |
| groupName | Indicates the name of the attribute group it belongs to. | String | 
| dataType | Indicates the dataType used for the property. | String | 
| isLocalizable | Indicates if this attribute is localizable or not. | Boolean |
| isAttributeIdentifier | Indicates whether the attribute is an identifier. | Boolean |
| isReferenceType |  Indicates if this attribute is a reference type or not. | Boolean |
| isCollection | Indicates if this attribute is a collection attribute or not. | Boolean |
| referenceEntityInfo | Indicates details of reference entities. | [referenceEntityInfo](#referenceEntityInfo) |
| pathEntityInfo | Indicates details about additional context paths. | [pathEntityInfo](#pathEntityInfo) |
| mergeMatrix | Indicates an array of merge precedence related properties. | |
| mergeSequence | Indicates the highest precedence order defined at first for an external source with the lesser precedence level defined next and so on. The various external sources are separated by the symbol ">>". | String |
| ignoreMergeMatrix | Indicates whether or not to ignore values from different data sources merged into one single record. | Boolean | 
| aggregate | Indicates whether the incoming value of the entity has to be appended with the existing value of the entity. Aggregate works only for collection attributes and nested attributes. | Boolean |

Data for sample [scenario](#scenario): Set the following values for the **properties** object:

| Property | Value | 
|----------|-------|
| externalName | Packaging Type |
| groupName | packaginginfo |
| dataType | string |
| isLocalizable | true | 
| isAttributeIdentifier | true |
| isReferenceType | true |
| isCollection | true |

## referenceEntityInfo

This object provides details of reference entities such as refRelationshipName, refEntityType. The following table lists the details of the referenceEntityInfo object:

| Property | Description | Type |
|----------|-------------|------|
| refRelationshipName | Indicates the reference relationship name. | String | 
| refEntityType | Indicates the reference entity type of the entity instance. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **referenceEntityInfo** object:

| Property | Description | 
|----------|-------------|
| refRelationshipName | hasReferenceTo |
| refEntityType | packagingtype |

## pathEntityInfo

This object provides details of reference entities such as pathRelationshipName, pathEntityType. The following table lists the details of the pathEntityInfo object:

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

