---
title: Entity Manage Model
sidebar: rdp_sidebar
permalink: api_manage_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the basic model structure of the entity; its attributes and relationships. This also includes attribute data types. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of an entity model.
* [properties](#properties): Contains the audit information of the data model such as createdDate and modifiedDate.
* [data](#data): Contains an array of [attributes](#attributes) and [relationships](#relationships) model details of an entity.

<br>
{% if site.build == "internal" %}
See [Create Manage Model](api_create_data_model_scenario51.html), for more scenarios and examples.
{% endif %}

## Scenario 

Consider that you wish to create a basic manage model for sku entities with the details for attributes and relationships. The following example demonstrates the sample JSON format to create a manage model for "sku" entity type where merge sequence is defined for external sources Brand Bank and Ice Cat:

<pre><code>
{
  "entityModel": {
    "id": "sku_entityManageModel",
    "name": "sku",
    "type": "entityManageModel",
    "domain": "generic",
    "mergeMatrix": [
      {
        "mergeSequence": "Brand Bank>>Ice Cat"
      }
    ],
    "data": {
      "attributes": {
        "mdmid": {
          "properties": {
            "externalName": "MDM ID",
            "groupName": "Basic",
            "isEntityIdentifier": true,
            "dataType": "string",
            "mergeMatrix": [
              {
                "ignoreMergeMatrix": false,
                "mergeSequence": "Brand Bank>>Ice Cat"
              }
            ]
          }
        },
        "mdmname": {
          "properties": {
            "externalName": "SKU Name",
            "groupName": "Basic",
            "isExternalName": true,
            "dataType": "string"
          }
        },
        "productfeatures": {
          "properties": {
            "externalName": "Product Features",
            "groupName": "Basic",
            "dataType": "string",
            "isLocalizable": true
          }
        },
        "leadtime": {
          "properties": {
            "externalName": "Lead Time",
            "groupName": "Basic",
            "dataType": "integer",
            "uomEntityInfo": [
              {
                "uomRelationshipName": "hasUnits",
                "uomEntityType": "Time"
              }
            ]
          }
        },
        "size": {
          "properties": {
            "externalName": "Size",
            "groupName": "Basic",
            "dataType": "string",
            "isReferenceType": true,
            "referenceEntityInfo": [
              {
                "refRelationshipName": "hasReferenceTo",
                "refEntityType": "sizes"
              }
            ],
            "valueMappingContext": [
              "[Role]",
              "[User Id]",
              "[Ownership Id]"
            ],
            "supportsValueMapping": true,
            "valueMappingTypeName": "sizevaluemapping"
          }
        },
        "alternatevendor": {
          "properties": {
            "externalName": "Alternate Vendors",
            "groupName": "Internal Information",
            "dataType": "nested",
            "mergeMatrix": [
              {
                "ignoreMergeMatrix": false,
                "mergeSequence": "Ice Cat>>Brand Bank"
              }
            ]
          },
          "group": [
            {
              "vendorpartnumber": {
                "properties": {
                  "externalName": "Part Number",
                  "groupName": "alternatevendor",
                  "dataType": "string"
                }
              },
              "vendorid": {
                "properties": {
                  "externalName": "Vendor ID",
                  "groupName": "alternatevendor",
                  "isAttributeIdentifier": true,
                  "dataType": "string"
                }
              },
              "vendorcost": {
                "properties": {
                  "externalName": "Vendor Price",
                  "groupName": "alternatevendor",
                  "dataType": "decimal"
                }
              },
              "vendorname": {
                "properties": {
                  "externalName": "Vendor Name",
                  "groupName": "alternatevendor",
                  "dataType": "string"
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
        "itemtype": {
          "properties": {
            "externalName": "Item Type",
            "dataType": "string",
            "groupName": "Enhancer Attributes",
            "isReferenceType": true,
            "displayType": "referencelist",
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
                  "externalName": "Link Description",
                  "groupName": "Relationship Attributes",
                  "dataType": "string",
                  "isLocalizable": true
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

{% picture entitymanagemodel.png alt="Entity Manage Model" %}

## entityModel

This object is the parent container that holds all the required information about manage model. You can identify a model by using id, name, version, and type. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String | 
| name | Indicates the name of the model. Generally, this is the entity type for which the model is defined. | String |  
| type | Indicates the type of entity model. | String | 
| domain | Indicates the domain for which the model belongs to. | String |
| data | Indicates the section for all business data. | [data](#data) |
| mergeMatrix | Indicates an array of merge precedence related properties. | String|
| mergeSequence | Indicates the highest precedence order defined at first for an external source with the lesser precedence level defined next and so on. The various external sources are separated by the symbol "»". | String | 
| ignoreMergeMatrix | Indicates whether or not to ignore values from different data sources merged into one single record. | Boolean |
| aggregate | Indicates whether the incoming value of the entity has to be appended with the existing value of the entity. "aggregate" works only for collection attributes. It is not applicable for relationships and nested attributes. | Boolean |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | sku_entityManageModel |
| name | sku |
| type | entityManageModel |
| domain | generic |

## data

This object contains the attributes and relationships of the manage model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |
| relationships | Indicates an array of group of [relationships](#relationships) objects. | [relationships](#relationships) |
| contexts | Indicates an array of group of contexts. | [contexts](#contexts) |

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

## contexts 

This object contains the context information for which the configuration is applicable. The following table lists the details of the contexts object:

| Property | Description | Type | 
|----------|-------------|------|
| context | Indicates the context to which object is linked to. | [context](#context) |
| attributes | Indicates a list of contextual attributes. | [attributes](#attributes) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> -> properties | Indicates the properties of the attribute. | List of [properties](#properties) objects | 
| <<AttrName>> -> group -> properties | Indicates a set of attributes grouped together with any number of levels as required. This is the typical structure for Nested Attributes. | List of [properties](#properties) objects | 

## relationship

This object contains the details of the relationship of an entity. The following table lists the details of the relationship object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> -> properties | Indicates the properties of the relationship. | List of [properties](#properties) objects | 
| <<RelName>> -> attributes | Indicates the name of the relationship attribute. | [attribute](#attribute) |

## context

This object indicates the primary contexts used. The following table lists the details of the context object:

| Property | Description | Type | 
|----------|-------------|------|
| <<Primarycontext>> | Indicates the name of primary context to which the object is linked to. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **context** object:

| Property | Description | 
|----------|-------------|
| country | _ALL |
| channel | _ALL |

## properties

This object contains the properties of the attributes and relationships object. The following table lists the details of the properties object:

{% if site.build == "internal" %}
| Property | Description | Type | 
|----------|-------------|------|
| externalName | Indicates the external name of the attribute. | String |
| group -> groupName | Indicates the group name of the attribute. | String |
| isEntityIdentifier | Indicates if this attribute is the primary identifier for the entity. | Boolean |
| dataType | Indicates the data type of the attribute. This is a typically a structure for simple attributes. | String. Possible values are - string, date, datetime and decimal |
| isExternalName | Indicates that the value of this attribute is copied to entity name. Only one attribute must have this property set as true. | Boolean |
| isLocalizable | Indicates if this attribute is localizable. | Boolean |
| isReferenceType | Indicates if this attribute is a reference type. | Boolean |
| supportsValueMapping | Indicates if this attribute supports [ValueMapping](api_create_data_model_scenario8.html). | Boolean |
| valueMappingTypeName | Indicates the name of the [valueMapping](api_create_data_model_scenario8.html). | String |
| isCollection | Indicates if this attribute is a collection attribute. | Boolean | 
| displayType | Indicates the widget type for displaying in UI. | String |
| relationshipType | Indicates the type of relationship. | String |
| relationshipOwnership | Indicates whether the relationship is owned. | String |
| uomEntityInfo | Indicates unit of measure attributes information. | [uomEntityInfo](#uomentityinfo) |
| isAttributeIdentifier | Indicates if an attribute is an identifier. | Boolean |
| referenceEntityInfo | Indicates details of reference entities. | [referenceEntityInfo](#referenceentityinfo) |
| valueMappingContext | Context for [value mapping](api_create_data_model_scenario8.html). | [valueMappingContext](#valuemappingcontext) | 
| pathEntityInfo | Indicates details about additional context paths. | [pathEntityInfo](#pathentityinfo) |
| relatedEntityInfo | Indicates details of the entity type in a relationship. | [relatedEntityInfo](#relatedentityinfo) |
{% endif %}

{% if site.build == "external" %}
| Property | Description | Type | 
|----------|-------------|------|
| externalName | Indicates the external name of the attribute. | String |
| group -> groupName | Indicates the group name of the attribute. | String |
| isEntityIdentifier | Indicates if this attribute is the primary identifier for the entity. | Boolean |
| dataType | Indicates the data type of the attribute. This is a typically a structure for simple attributes. | String. Possible values are - string, date, datetime and decimal |
| isExternalName | Indicates that the value of this attribute is copied to entity name. Only one attribute must have this property set as true. | Boolean |
| isLocalizable | Indicates if this attribute is localizable. | Boolean |
| isReferenceType | Indicates if this attribute is a reference type. | Boolean |
| supportsValueMapping | Indicates if this attribute supports Value Mapping. | Boolean |
| valueMappingTypeName | Indicates the name of the Value Mapping. | String |
| isCollection | Indicates if this attribute is a collection attribute. | Boolean | 
| displayType | Indicates the widget type for displaying in UI. | String |
| relationshipType | Indicates the type of relationship. | String |
| relationshipOwnership | Indicates whether the relationship is owned. | String |
| uomEntityInfo | Indicates unit of measure attributes information. | [uomEntityInfo](#uomentityinfo) |
| isAttributeIdentifier | Indicates if an attribute is an identifier. | Boolean |
| referenceEntityInfo | Indicates details of reference entities. | [referenceEntityInfo](#referenceentityinfo) |
| valueMappingContext | Context for value mapping. | [valueMappingContext](#valuemappingcontext) | 
| pathEntityInfo | Indicates details about additional context paths. | [pathEntityInfo](#pathentityinfo) |
| relatedEntityInfo | Indicates details of the entity type in a relationship. | [relatedEntityInfo](#relatedentityinfo) |
{% endif %}

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| externalName | MDM ID |
| groupName | Basic |
| isEntityIdentifier | true |
| dataType | string |
| isExternalName | true |
| isLocalizable | true |
| isReferenceType | true |
| supportsValueMapping | true |
| valueMappingTypeName | true |
| isCollection | true |
| displayType | path |
| relationshipType | Composition |
| relationshipOwnership | owned |

## uomEntityInfo

This object provides UOM attributes information. The following table lists the details of the uomEntityInfo object:

| Property | Description | Type | 
|----------|-------------|------|
| uomRelationshipName | Indicates the name of the relationship. | String |
| uomEntityType | Indicates the type of UOM attribute. | String |

Data for Sample [Scenario](#scenario): Set the following properties for uomEntityInfo object:

| Property | Description | 
|----------|-------------|
| uomRelationshipName | hasUnits |
| uomEntityType | Time |

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
| refEntityType | itemtype |

## valueMappingContext

This object provides details of context for value mapping. The following table lists the details of the valueMappingContext object:

| Property | Description | Type |
|----------|-------------|------|
| << valueMappingContext >> | Value mapping context is the context in which the value mapping happens. It can be a combination of the following: roles, taxonomy, classification, country, channel, User Id, Role Ownership Data. | String |  

Data for Sample [Scenario](#scenario): Set the following properties for **valueMappingContext** object:

| Property | Description | 
|----------|-------------|
| << valueMappingContext >> | Role, User Id |

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