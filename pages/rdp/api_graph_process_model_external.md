---
title: Graph Process Model
sidebar: rdp_sidebar
permalink: api_graph_process_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}  

Riversand Platform is designed to handle wide variety of data from master to unstructured data. You can visualize the entire data as a huge graph structure with nodes or vertices and edges representing the link between different nodes. As all the data in Riversand Platform is modeled either as entity, attribute, or relationship, a **Node** represents an entity such as SKU or an image.

You can create different graph process models for linking source entities with target entities using a specific relationship type and you can also delete entities or relationships. {% if site.build == "internal" %} See [Create Graph Process Models to Link Nodes](api_create_graph_process_model.html) for more scenarios.{% endif %}

This object defines the model for linking source entity with target entity using using a specific relationship type. **Graph Process Model** contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [properties](#properties): Contains an array of [matchRules](#matchrules) to identify the related node to link source and target entities.
* [data](#data): Contains the details of the action that must be performed on the target entity after finding a match.

{% if site.build == "internal" %} To include UOM attribute as an attribute match type, add the "uomMatchType" property and specify any one of the following values.
* exactUomBased to perform an exact value and UOM match. 
* convertedUomBased to perform an equivalent match.{% endif %} 


<br>

This topic describes the graph process model object structure using a sample scenario. 

## Scenario 

Consider that you wish to create a graph process model for rolling up SKU to Product to meet the following requirement. The following example demonstrates the sample JSON format to create a graph process model:

<pre><code>
{
  "entityModels": [
    {
      "id": "sku_ischildof_product_graphProcessModel",
      "name": "sku_ischildof_product",
      "type": "graphProcessModel",
      "domain": "generic",
      "properties": {
        "createdService": "entityManageModelService",
        "createdBy": "system_user",
        "createdDate": "2021-06-21T01:53:56.287-0500",
        "defaultValueSource": "internal",
        "defaultValueLocale": "en-US",
        "graphProcessPath": "sku_ischildof_product",
        "matchRulesOperator": "or",
        "matchRules": [
          {
            "seq": 1,
            "matchType": "attributeBased",
            "attributeMaps": [
              {
                "productid": "productid"
              }
            ],
            "targetFilters": [
              {
                "attributeFilters": [
                  {
                    "productid": [
                      {
                        "value": "P001",
                        "operator": "eq"
                      }
                    ]
                  }
                ],
                "businessConditionFilters": [
                  {
                    "targetEntity_businessCondition": [
                      {
                        "value": "true",
                        "operator": "equal"
                      }
                    ]
                  }
                ]
              }
            ],
            "noMatchResult": [
              {
                "actions": [
                  {
                    "actionName": "Create"
                  },
                  {
                    "actionName": "AddSourceRelationship"
                  },
                  {
                    "actionName": "CopyData"
                  }
                ]
              }
            ],
            "singleMatchResult": [
              {
                "actions": [
                  {
                    "actionName": "AddSourceRelationship"
                  },
                  {
                    "actionName": "CopyData"
                  }
                ]
              }
            ],
            "multiMatchResult": [
              {
                "actions": [
                  {
                    "actionName": "Error"
                  }
                ]
              }
            ],
            "smartIdAttributes": [
              {
                "attributeNames": "productid",
                "concatDelimiter": "_"
              }
            ]
          }
        ],
        "relExists": [
          {
            "actions": [
              {
                "actionName": "CopyData"
              }
            ]
          }
        ],
        "modifiedService": "entityManageModelService",
        "modifiedBy": "system_user",
        "modifiedDate": "2021-06-29T14:35:03.728-0500"
      },
      "data": {
        "attributes": {
          "productid": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "assemblyrequired": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "availableunits": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "startdate": {
            "properties": {
              "strategy": "min"
            }
          },
          "enddate": {
            "properties": {
              "strategy": "max"
            }
          },
          "backordereligible": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "brand": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "cost": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "buytodemand": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "condition": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "currency": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "daystoreturn": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "discount": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "dollarmargin": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "dropshipindicator": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "featurespecs": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "headline": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "subhead": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "description": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "color": {
            "properties": {
              "strategy": "aggregate"
            }
          },
          "size": {
            "properties": {
              "strategy": "aggregate"
            }
          },
          "upc": {
            "properties": {
              "strategy": "aggregate"
            }
          },
          "alternatevendor": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "internalavailabilitydate": {
            "properties": {
              "strategy": "min"
            }
          },
          "registered": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "trademark": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          },
          "setupgoaldate": {
            "properties": {
              "strategy": "min"
            }
          },
          "setuppriority": {
            "properties": {
              "strategy": "min"
            }
          },
          "tags": {
            "properties": {
              "strategy": "copyWhenNotLocal"
            }
          },
          "manufacturernamedetails": {
            "properties": {
              "strategy": "copyWhenEmpty"
            }
          }
        },
        "relationships": {
          "hasimages": [
            {
              "id": "f612f27b-c200-48e2-8928-a89fd2dca642",
              "properties": {
                "externalName": "Images",
                "strategy": "copy",
                "relationshipType": "association",
                "relatedEntityInfo": [
                  {
                    "relEntityType": "image"
                  }
                ]
              }
            }
          ],
          "hasvideos": [
            {
              "id": "6bede655-6835-4fa9-8c2c-25cdbbd6ad37",
              "properties": {
                "externalName": "videos",
                "strategy": "copy",
                "relationshipType": "association",
                "relatedEntityInfo": [
                  {
                    "relEntityType": "video"
                  }
                ]
              }
            }
          ]
        },
        "contexts": [
          {
            "context": {
              "channel": "Germany Retail"
            },
            "attributes": {
              "chblazersize": {
                "properties": {
                  "strategyMode": "merge",
                  "strategy": "copy"
                }
              },
              "champchannels": {
                "properties": {
                  "strategyMode": "merge",
                  "strategy": "copy"
                }
              },
              "customerdetails": {
                "properties": {
                  "strategyMode": "merge",
                  "strategy": "copy"
                }
              }
            }
          },
          {
            "context": {
              "channel": "_ALL"
            },
            "attributes": {
              "secondarydescription": {
                "properties": {
                  "strategyMode": "replace",
                  "strategy": "copy"
                }
              }
            }
          },
          {
            "context": {
              "country": "Germany"
            },
            "attributes": {
              "apimccopresentationinstructions": {
                "properties": {
                  "strategyMode": "replace",
                  "strategy": "copy"
                }
              },
              "apimccochfoslightinggrp": {
                "properties": {
                  "strategyMode": "replace",
                  "strategy": "copy"
                }
              },
              "cofurnituresize": {
                "properties": {
                  "strategyMode": "replace",
                  "strategy": "copy"
                }
              },
              "cochfoslightinggrp": {
                "properties": {
                  "strategyMode": "replace",
                  "strategy": "copy"
                }
              },
              "customerdetails": {
                "properties": {
                  "strategyMode": "replace",
                  "strategy": "copy"
                }
              }
            }
          },
          {
            "context": {
              "country": "Australia"
            },
            "properties": {
              "includeAllAttributes": true
            }
          },
          {
            "context": {
              "country": "France"
            },
            "properties": {
              "includeAllAttributes": true
            }
          }
        ]
      }
    }
  ]
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture graphprocessmodel-1.png alt="Graph Process Model" %}

## entityModel

This object is the parent container that holds all the required information about the graph Process model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this model. | String | 
| name | Indicates the name of the model. | String | 
| type | Indicates the type of model. | String | 
| domain | Indicates the domain for which the model is applicable. | String |
| properties | Indicates the properties of the object. Properties must be used to store simple name-value pairs, where the values are **Absolute** and **do not change with context**. Attributes must be used in scenarios where the value can have additional properties or context specificity. | [properties](#properties) |
| data | Indicates the section for all business data. | [data](#data) | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | sku_ischildof_product_graphProcessModel |
| name | sku_ischildof_product |
| type | graphProcessModel |
| domain | generic |

## properties

This object contains an array of [matchRules](#matchrules) to identify the related node to link source and target entities. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| defaultValueSource | Indicates the default source for the attribute value. | String | 
| defaultValueLocale | Indicates the default locale for the attribute value. | String |
| graphProcessPath | Indicates the graph path from source node to target node. | String | 
| matchRulesOperator | Indicates the operator to be used for computing the matching as specified in matchRules. Supported value is "or". If the value "or" is specified, then the matching stops if a match is found for a specific [attributeMaps](#matchrules) in the sequence. | String | 
| matchRules | Indicates an array of matchRules used for finding the related target entity. | [matchRules](#matchrules) | 
| relExists | Indicates actions that must be taken if the relationship between the source and target already exists. | [actions](#actions) |
| includeAllAttributes | Indicates that all the attributes in the specified context must evaluated as per the strategy. | Boolean |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Value | 
|----------|-------|
| defaultValueSource | internal |
| defaultValueLocale | en-US |
| graphProcessPath | sku_ischildof_product |
| matchRulesOperator | or | 
| includeAllAttributes | true |

## data

This object contains the actions that must be performed on the target entity as per the strategy specified. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of attributes with strategy for each attribute to be used after linking the source with the target entity. | [attributes](#attributes) |
| relationships | Indicates the relationship details to link the source with the target entity. | [relationships](#relationships) | 
| contexts | Indicates an array of context with strategy for each context to be used after linking the source with the target entity. | [contexts](#contexts) | 

## matchRules

This object contains an array of match rules in a  specific sequence used for finding the related target entity. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| seq | Indicates the sequence for this match rule. | Number |
| matchType | Indicates how to find target entities. Once found, specified actions are performed on them. Currently, the value supported is **attributeBased**. This match type finds the target entities which match the specified map criteria given in "attributeMaps". The other match types supported are **relationshipBased**, **self** and **whereUsedRelationshipBased**. <br/> **relationshipBased** match type finds the target entities from "relationships" of source entity <br/> **self** match type is used to perform specified actions on the source entity itself. No target entities are required here. <br/> **whereUsedRelationshipBased** match type finds all the target entities where source entity is linked as related entity. Based on the match, appropriate action is taken. Example: entityModel id = "product_ischildof_sku_graphProcessModel". See Create Graph Process Model to Rolldown Product to SKU | String | 
| attributeMaps | Indicates which source attribute value must be compared against the target attribute value. | String |
| businessConditionFilters | Indicates the business conditions which has to be satisfied while performing match on target entity. | String |
| noMatchResult | Indicates the actions that must be taken when no match is found. | [actions](#actions) |
| singleMatchResult | Indicates the actions that must be taken when a single match result is found. | [actions](#actions) | 
| multiMatchResult | Indicates the actions that must be taken when multiple match results are found. | [actions](#actions) |  
| smartIdAttributes | Indicates the "attributeName", which is used to create an unique entity ID for the target entity. Unique ID is generated based on the value provided for this attribute in the source entity. |

Data for Sample [Scenario](#scenario): The following lists the supported action names in **matchRules** object.

| Property | Description | 
|----------|---------------|
| seq | 1 | 
| matchType | attributeBased |

## actions

This object contains the actions that must be performed for the specific match result. The following table lists the details of the actions object:

| Property | Description | Type | 
|----------|-------------|------|
| actionName | Indicates the action that must be performed for the specific match result. You can specify multiple actions. | String | 

Data for Sample [Scenario](#scenario): The following lists the supported action names in **actions** object.

| ActionName | Description | 
|----------|---------------|
| Create | Creates a new target entity. | 
| AddSourceRelationship | Adds the relationship between source and target entity. |
| AddTargetRelationship  | Adds the relationship between target and source entity. |
| CopyData | Copies the data from source to target. |
| Error | Skips taking the action. |
| DoNothing | Skips taking the action. |

## attributes

This object contains an array of attributes. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## relationships

This object contains an array of relationships. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the relationship name of the attribute. | [relationship](#relationship) |

## contexts

This object contains an array of contexts. The following table lists the details of the contexts object:

| Property | Description | Type | 
|----------|-------------|------|
| context | Indicates the details about country, channel, market, and so on. | [context](#context) |
| properties | Indicates the properties of the context. | [properties](#properties) |

## attribute

This object contains the details of the attribute of an entity. Also, you have option to add classification specific attribute to copy from source entity to target entity. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|------|
| properties -> strategy | Indicates the strategy to be used for the specific attribute. Possible values are - copyWhenEmpty, copy, copyWhenNotLocal, min and max. | String |
| properties -> strategyMode | Indicates whether the attribute values must be replaced or merged at the target. Currently "replace" and "merge" are supported. Note that replace and merge action is applicable only for **copy** and **copyWhenNotLocal** strategy. Also note that there is no default strategyMode. If strategyMode is not provided, then it follows normal compare and merge operation. | String |

Data for Sample [Scenario](#scenario): The following lists the supported strategies in **attribute** object.

| Strategy | Description | 
|----------|---------------|
| copyWhenEmpty | Copies the attribute value from source to target if the target attribute value is empty. | 
| copy | Copies the attribute value from source to target. "copy" along with strategyMode as "replace" is used if you wish to delete the target value when the source value is deleted. This applies to relationships as well. "copy" along with strategyMode as "merge" is used if you wish to aggregate the source value with the target value. Although "copy" with "merge" is typically used for nested attribute rows, it is applicable for simple and collection attributes also.| 
| copyWhenNotLocal | Copies the attribute value from source to target if the target attribute does not have a local value. If the target has its own local value, then the attribute value is not copied from source to target. This implies that no action is taken. **For Example**: If discount value at source is 10 and discount value at target is 20 (which is updated by local value) and the strategy is copyWhenNotLocal, then no action is performed. If the target attribute does not have a local value, then discount value of 10 from source is copied to the target. This applies to relationships as well. |
| aggregate| Appends the attribute value from source to target. Consider a scenario where the source discount value is 10 and the target discount value is 20. The "aggregate" functionality merges both these values in the target entity and the result at the target is 10, 20. This strategy is applicable only for simple and collection attributes. For nested attributes, you can use strategy "copy" with strategyMode as "merge".|
| min | Compares the attribute value of source and target and copies the minimum attribute value to the target. |
| max | Compares the attribute value of source and target and copies the maximum attribute value to the target. |

## relationship

This object contains the relationship details to link the source with the target entity. Currently, "hasimages" and "hasvideos" relationship types are supported for linking a source to a target. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| properties -> externalName | Indicates the external name for the relationship. | String |
| properties -> strategy | Indicates the strategy to be used for the specific relationship. | String |
| properties -> relationshipType | Indicates the type of relationship such as association, aggregation. |String | 
| properties -> relatedEntityInfo -> relEntityType | Indicates related entity type. | String |


Data for sample [Scenario](#scenario): Set the following properties for **relationships** object:

| Property | Value | 
|----------|-------|
| properties -> externalName | Images |
| properties -> strategy | checkHistoryAndCopy |
| properties -> relationshipType | association | 
| properties -> relatedEntityInfo -> relEntityType | image | 

{% include callout.html content="**Note**: checkHistoryAndCopy checks entity relationships. This is a high performance API and must not be used extensively. 
" type="primary" %}


## context

This object contains an array of context with strategy for each context to be used after linking the source with the target entity. Each array contains context and properties object. The following table lists the details of the context object:

| Property | Description | Type | 
|----------|-------------|------|
| dchannel | Indicates the name of the channel. | String |
| properties -> strategy | Indicates the strategy to be used for the specific context. | String | 

Data for sample [Scenario](#scenario): Set the following properties for **context** object:

| Property | Value | 
|----------|-------|
| dchannel | YouTube |
| properties -> strategy | copy |