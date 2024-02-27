---
title:  Create Graph Process Model
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario67.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform is designed to handle wide variety of data from master to unstructured data. You can visualize the entire data as a huge graph structure with nodes or vertices and edges representing the link between different nodes. As all the data in Riversand Platform is modeled either as entity, attribute, or relationship, a **Node** represents an entity such as SKU or an image. 

You can create different graph process models for linking source entities with target entities using a specific relationship type and you can also delete entities or relationships. See [Create Graph Process Models to Link Nodes](api_create_graph_process_model.html) for more scenarios. 

This object defines the model for linking source entity with target entity using using a specific relationship type. Using this model, you can actually link node / entities in Riversand Platform using [Entity Graph Service](api_entity_graph_service.html). **Graph Process Model** contains the following sub-objects:

* [Request Level Attributes](#request-level-attributes): Contains attributes required for processing the request.
* [params](#params): Contains any additional parameters required for processing data in the request.
* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [properties](#properties): Contains an array of [matchRules](#matchrules) to identify the related node to link source and target entities.
* [data](#data): Contains the details of the action that must be performed on the target entity after finding a match.

This topic describes the graph process model object structure using a sample scenario. 

{% include callout.html content="**Note**: Currently, the application supports only deterministic match for finding the match results.
" type="primary" %}

## Scenario 

Consider that you wish to create a graph process model for rolling up SKU to Product to meet the following requirement:

* Create a match configuration to match either productGroup or a set of attributes in product. Based on the match perform the following actions:

| Result | Possible Action |
|----------|-------------|
| No product Found | Create a Product entity and link to the SKU entity, merge the required attributes. |
| Single product Found | Link existing product entity to the SKU entity, merge the required attributes. |
| Multiple Targets Found | Error out.|

* Copy certain attributes from SKU to Product when the value of that attribute in product is empty

The following example demonstrates the sample JSON format to create a graph process model:

<pre><code>
{
  "entityModel": {
    "id": "sku_ischildof_product_graphProcessModel",
    "name": "sku_ischildof_product",
    "type": "graphProcessModel",
    "domain": "generic",
    "properties": {
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
      ]
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
        }
      },
      "relationships": {
        "hasimages": [
          {
            "properties": {
              "externalName": "Images",
              "strategy": "checkHistoryAndCopy",
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
            "properties": {
              "externalName": "videos",
              "strategy": "checkHistoryAndCopy",
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
            "taxonomy": "Master Taxonomy",
            "classification": "_ALL"
          },
          "properties": {
            "includeAllAttributes": true
          }
        }
      ]
    }
  }
}
</code></pre>

This topic describes the properties of the graph process model details using this scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set data for the [sample Scenario](#scenario).

## entityModel

This object is the parent container that holds all the required information about the entity model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| id | Indicates the model identifier. This must be of the format **«source_entity»«relationship_type»«target_entity»_graphProcessModel**.| String | No |
| name | Indicates the name of the model. This must be of the format **«source_entity»«relationship_type»«target_entity»**. | String | Yes |
| type | Indicates the model type. For graph process model the value is **graphProcessModel**. | String | Yes |
| domain | Indicates the domain for which the model is applicable. | String | No |
| properties | Indicates the properties of the object. Properties must be used to store simple name-value pairs, where the values are **Absolute** and **do not change with context**. Attributes must be used in scenarios where the value can have additional properties or context specificity. | [properties](#properties) | No |
| data | Indicates the section for all business data. | [data](#data) | No |

Based on the Id and name of the model you wish to provide, you can set the following properties:

| Property | Description | 
|----------|-------------|
| id | sku_ischildof_product_graphProcessModel |
| name | sku_ischildof_product |
| type | graphProcessModel |
| domain | generic |

The following sections describe how to set the values for [properties](#properties) and [data](#data) objects.

## properties

This object contains an array of [matchRules](#matchrules) to identify the related node to link source and target entities. The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| defaultValueSource | Indicates the default source for the attribute value. | String | Yes |
| defaultValueLocale | Indicates the default locale for the attribute value. | String | Yes |
| sourceFilters | Indicates an array of filters used on the source entities. | String | No |
| targetFilters | Indicates an array of filters used on the target entities. | String | No |
| resultSortOrder | Indicates an array of attributes used to sort the result entities. | String | No |
| matchRulesOperator | Indicates the operator to be used for computing the matching as specified in matchRules. Supported value is "or". If the value "or" is specified, then the matching stops if a match is found for a specific [attributeMaps](#matchrules) in the sequence. | String | No |
| matchRules | Indicates an array of [matchRules](#matchrules) used for finding the related target entity.| [matchRules](#matchrules) | Yes |
| relExists | Indicates [actions](#actions) that must be taken if the relationship between the source and target already exists. | [actions](#actions) | Yes |

Data for sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Value | 
|----------|-------|
| defaultValueSource | internal |
| defaultValueLocale | en-US |
| matchRulesOperator | or | 

## matchRules

This object contains an array of match rules in a  specific sequence used for finding the related target entity. The following table lists the details of the data object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| seq | Indicates the sequence for this match rule.| String | Yes |
| matchType | Indicates how to find target entities. Once found, specified actions are performed on them. Currently, the value supported is **attributeBased**. This match type finds the target entities which match the specified map criteria given in "attributeMaps". The other match types supported are **relationshipBased**, **self** and **whereUsedRelationshipBased**. <br/> **relationshipBased** match type finds the target entities from "relationships" of source entity <br/> **self** match type is used to perform specified actions on the source entity itself. No target entities are required here. <br/> **whereUsedRelationshipBased** match type finds all the target entities where source entity is linked as related entity. Based on the match, appropriate action is taken. Example: entityModel id = "product_ischildof_sku_graphProcessModel". See Create Graph Process Model to Rolldown Product to SKU | String | Yes |
| attributeMaps | Indicates an array of a comma separated list in the format <<source_attribute>>:<<target_attribute>> indicates which source attribute value must be compared against the target attribute value. | String | Yes |
| noMatchResult | Indicates the [actions](#actions) that must be taken when no match is found. | [actions](#actions) | Yes |
| singleMatchResult | Indicates the [actions](#actions) that must be taken when a single match result is found. | [actions](#actions) | Yes |
| multiMatchResult | Indicates the [actions](#actions) that must be taken when multiple match results are found. | [actions](#actions) | Yes |
| smartIdAttributes | Indicates an array of a comma separated list of attributes that forms a primary key for identifying duplicates. This is useful if there are multiple incoming source entity in a batch that are processed in parallel. | [smartIdAttributes](#smartidattributes) | No |

### actions

This object contains the actions that must be performed for the specific match result. The following table lists the details of the actions object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| actions -> actionName | Indicates the action that must be performed for the specific match result. You can specify multiple actions. | String | Yes |

The following lists the supported action names:

| ActionName | Description | 
|----------|---------------|
| Create | Creates a new target entity | 
| AddSourceRelationship | Adds the relationship between source and target entity |
| CopyData | Copies the [data](#data) from source to target |
| Error | Throws an error |
| DoNothing | Skips taking the action |
| content generation method name| If content generation method name is used, then specify the "configQueryTemplate" and other attributes related to content generation like "targetAttributeName", "trim" and "trimAction". See [Pick Strategy in Multi Match Result](#Pick Strategy in Multi Match Result). |

### Pick Strategy in Multi Match Result

If you have an action in multiMatchResult and you wish to use a strategy to pick the target entities, then you can provide the pick strategy as follows:

{% include callout.html content="**Note**: The supported values for **pickStrategy** are **first** and **last**.
" type="primary" %}


<pre><code>
{
  "multiMatchResult": [
    {
      "pickStrategy": "first",
      "actions": [
        {
          "actionName": "PopulateSourceEntityAttributeByContentGeneration",
          "targetAttributeName": "producttitle",
          "trim": "256",
          "trimAction": "createEvent",
          "configQueryTemplate": "ppTitleGenerationConfigSearchQuery_contentTemplateModel"
        }
      ]
    }
  ]
</code></pre>

### smartIdAttributes

This object contains an array of a comma separated list of attributes that forms a primary key for identifying duplicates. This is useful if there are multiple incoming source entities in a batch that are processed in parallel. The following table lists the details of the properties of the smartIdAttributes object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| attributeNames | Indicates a comma separated list of attributes that form the primary key. Typically, this includes all the attributes specified in [attributeMaps](#matchrules). | String | No |
| concatDelimiter | Indicates the delimiter used to concatenate the list of attributes. | String | No |

Data for sample [Scenario](#scenario): Create an array of match rules with the required sequence as follows:

**Match for productgroup**:

| Property | Value | 
|----------|-------|
| seq | 1 |
| matchType | attributeBased |
| attributeMaps | "productgroup": "productgroup" | 
| noMatchResult -> actions -> actionName | Create <br/> AddSourceRelationship <br/> CopyData | 
| singleMatchResult -> actions -> actionName | AddSourceRelationship <br/> CopyData | 
| multiMatchResult -> actions -> actionName | Error | 
| smartIdAttributes -> attributeNames | productgroup | 

**Match for set of attributes**:

| Property | Value | 
|----------|-------|
| seq | 2 |
| matchType | attributeBased |
| attributeMaps | "subproducttype": "subproducttype" <br/> "itemtype": "itemtype" | 
| noMatchResult -> actions -> actionName | Create <br/> AddSourceRelationship <br/> CopyData | 
| singleMatchResult -> actions -> actionName | AddSourceRelationship <br/> CopyData | 
| multiMatchResult -> actions -> actionName | Error | 
| smartIdAttributes -> attributeNames | "subproducttype", "itemtype" | 
| smartIdAttributes -> concatDelimiter | _ | 

**relExists**:

| Property | Value | 
|----------|-------|
| actions -> actionName | CopyData | 

## data

This object contains the actions that must be performed on the target entity as per the strategy specified. The following table lists the details of the data object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| attributes | Indicates an array of attributes with strategy for each attribute to be used after linking the source with the target entity. | [attributes](#attributes) | No |
| relationships | Indicates the relationship details to link the source with the target entity. | [relationships](#relationships) | No |
| contexts | Indicates an array of context with strategy for each context to be used after linking the source with the target entity. | [contexts](#contexts) | Yes |

### attributes

This object contains an array of attributes with strategy for each attribute to be used after linking the source with the target entity. The following table lists the details of the attributes object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<attributename>> -> properties -> strategy | Indicates the strategy to be used for the specific attribute. | String | Yes |

The following lists the supported strategies:

| Strategy | Description | 
|----------|---------------|
| CopyWhenEmpty | Copies the attribute value from source to target if the target attribute value is empty. | 
| Min | Compares the attribute value of source and target and copies the minimum attribute value to the target. |
| Max | Compares the attribute value of source and target and copies the maximum attribute value to the target. |

Data for sample [Scenario](#scenario): Set the following properties for **attributes** object:

| Property | Value | 
|----------|-------|
| description -> properties -> strategy | copyWhenEmpty |
| startdate -> properties -> strategy | min |
| enddate -> properties -> strategy | max |

Similarly, specify the rest of the attributes as required.

### relationships

This object contains the relationship details to link the source with the target entity. Currently, "hasimages" and "ischildof" relationship types are supported for linking a source to a target. The following table lists the details of the relationships object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<relationshipname>> -> properties -> externalName | Indicates the external name for the relationship. | String | Yes |
| <<relationshipname>> -> properties -> strategy | Indicates the strategy to be used for the specific relationship. Currently, supported value is **copyWhenEmpty** | String | Yes |
| <<relationshipname>> -> properties -> relationshipType | Indicates the type of relationship such as association, aggregation. | String | Yes |
| <<relationshipname>> -> properties -> relatedEntityInfo -> relEntityType | Indicates related entity type. | String | Yes |

Data for sample [Scenario](#scenario): Set the following properties for **relationships** object:

| Property | Value | 
|----------|-------|
| ischildof -> properties -> externalName | IsChildOf |
| ischildof -> properties -> strategy | copyWhenEmpty |
| ischildof -> properties -> relationshipType | association | 
| ischildof -> properties -> relatedEntityInfo -> relEntityType | product | 

### contexts

This object contains an array of context with strategy for each context to be used after linking the source with the target entity. Each array contains context and properties object. The following table lists the details of the context object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| context -> country | Indicates the country to which the entity is linked. | String | No |
| context -> channel | Indicates the channel to which the entity is linked. | String | No |
| properties -> includeAllAttributes | Indicates that all the attributes in the specified context must evaluated as per the strategy| No |
| properties -> strategy | Indicates the strategy to be used for copying the context attribute from the source to the target. | String | No |

The following lists the supported strategies:

| Strategy | Description | 
|----------|---------------|
| CopyWhenEmpty | Copies the attribute value from source to target if the target attribute value is empty. | 
| Min | Compares the attribute value of source and target and copies the minimum attribute value to the target. |
| Max | Compares the attribute value of source and target and copies the maximum attribute value to the target. |

Data for sample [Scenario](#scenario): Set the following properties for **contexts** object:

| Property | Value | 
|----------|-------|
| context -> country | Germany |
| properties -> includeAllAttributes | true | 