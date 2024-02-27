---
title: Entity Validation Model
sidebar: rdp_sidebar
permalink: api_validation_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the structural model and validations that must be performed on the data. Based on this, entity and its data is evaluated for correctness and completeness, and finally the values or relationships are tagged as valid or invalid. Examples: Basic rules like min/max length, precision, lookups, cardinality for values, relationships, and context links. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of an entity model.
* [properties](#properties): Contains the audit information of the validation model such as createdDate and modifiedDate.
* [data](#data): Contains an array of [attributes](#attributes), [relationships](#relationships) and [contexts](#contexts) details of an entity.

<br>
{% if site.build == "internal" %}
See [Create Validation Model](api_create_data_model_scenario58.html), for more scenarios and examples.
{% endif %}

## Scenario 

Consider that you wish to create a validation model for "sku" entity type having attributes and relationships. The following example demonstrates the sample JSON format to create a validation model:

<pre><code>
{
  "entityModel": {
    "id": "sku_entityValidationModel",
    "name": "sku",
    "type": "entityValidationModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "mdmid": {
          "properties": {
            "required": true
          }
        },
        "mdmname": {
          "properties": {
            "required": true
          }
        },
        "productfeatures": {
          "properties": {
            "required": false,
            "isLocalizable": true
          }
        },
        "headline": {
          "properties": {
            "minLength": "5",
            "maxLength": "100",
            "required": false,
            "isLocalizable": true
          }
        },
        "featurespecs": {
          "properties": {
            "isCollection": true,
            "required": false,
            "isLocalizable": true
          }
        },
        "productclassification": {
          "properties": {
            "isLocalizable": false,
            "isCollection": true,
            "isLeafNodeOnly": true
          }
        },
        "leadtime": {
          "properties": {
            "range": [
              {
                "rangeTo": 365,
                "rangeFrom": 2,
                "isRangeToInclusive": false,
                "isRangeFromInclusive": false
              }
            ],
            "rangeTo": 365,
            "rangeFrom": 2,
            "isRangeToInclusive": false,
            "isRangeFromInclusive": false,
            "required": false,
            "uomEntityInfo": [
              {
                "uomRelationshipName": "hasUnits",
                "uomEntityType": "Time"
              }
            ],
            "uomAllowedUnitSymbols": [
              {
                "unitSymbol": "days"
              }
            ]
          }
        },
        "cost": {
          "properties": {
            "precision": 2,
            "required": false
          }
        },
        "email": {
          "properties": {
            "isLocalizable": false,
            "pattern": "[\\w\\._%-]+@[\\w]+(\\.[A-Za-z]+)*(\\.[A-Za-z]{2,6})",
            "allowedInput": "valid email addresses"
          }
        },
        "length": {
          "properties": {
            "precision": 2,
            "required": true,
            "uomEntityInfo": [
              {
                "uomRelationshipName": "hasUnits",
                "uomEntityType": "Length"
              }
            ],
            "uomAllowedUnitSymbols": [
              {
                "unitSymbol": "cm"
              },
              {
                "unitSymbol": "in"
              }
            ]
          }
        },
        "enddate": {
          "properties": {
            "range": [
              {
                "rangeTo": "12/31/30",
                "rangeFrom": "1/1/18",
                "isRangeToInclusive": false,
                "isRangeFromInclusive": false
              }
            ],
            "rangeTo": "12/31/30",
            "rangeFrom": "1/1/18",
            "isRangeToInclusive": false,
            "isRangeFromInclusive": false,
            "required": false
          }
        }
      },
      "relationships": {
        "ischildof": [
          {
            "properties": {
              "cardinality": [
                {
                  "minimum": "1"
                },
                {
                  "maximum": "1"
                }
              ]
            },
            "attributes": {
              "linkdescription": {
                "properties": {
                  "required": false,
                  "isLocalizable": true
                }
              }
            }
          }
        ]
      },
      "contexts": [
        {
          "context": {
            "country": "_ALL",
            "channel": "_ALL"
          },
          "attributes": {
            "channelavailability": {
              "properties": {
                "required": false
              }
            },
            "channeldescription": {
              "properties": {
                "required": false,
                "isLocalizable": true
              }
            },
            "channelready": {
              "properties": {
                "required": false
              }
            },
            "channelprice": {
              "properties": {
                "required": false
              }
            },
            "description": {
              "properties": {
                "required": false,
                "isLocalizable": true
              }
            }
          }
        },
        {
          "context": {
            "country": "_ALL"
          },
          "attributes": {
            "countryoforigin": {
              "properties": {
                "required": false
              }
            },
            "description": {
              "properties": {
                "required": false,
                "isLocalizable": true
              }
            }
          }
        },
        {
          "context": {
            "country": "Germany"
          },
          "attributes": {
            "vat": {
              "properties": {
                "precision": 2,
                "range": [
                  {
                    "rangeTo": 100,
                    "rangeFrom": 0,
                    "isRangeToInclusive": false,
                    "isRangeFromInclusive": false
                  }
                ],
                "rangeTo": 100,
                "rangeFrom": 0,
                "isRangeToInclusive": false,
                "isRangeFromInclusive": false,
                "required": false
              }
            }
          }
        },
        {
          "context": {
            "country": "Germany",
            "channel": "_ALL"
          },
          "attributes": {
            "germanychannelavailabilitydate": {
              "properties": {
                "required": false
              }
            }
          }
        },
        {
          "context": {
            "country": "Germany",
            "channel": "Web"
          },
          "attributes": {
            "internettax": {
              "properties": {
                "precision": 2,
                "range": [
                  {
                    "rangeTo": 100,
                    "rangeFrom": 0,
                    "isRangeToInclusive": false,
                    "isRangeFromInclusive": false
                  }
                ],
                "rangeTo": 100,
                "rangeFrom": 0,
                "isRangeToInclusive": false,
                "isRangeFromInclusive": false,
                "required": false
              }
            }
          }
        }
      ]
    }
  }
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture entityvalidationmodel.png alt="Entity Validation Model" %}

## entityModel

This object is the parent container that holds all the required information about validation model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String | 
| name | Indicates the name of the model. Generally, this is the entity type for which the model is defined. | String |  
| type | Indicates the type of entity model. | String | 
| domain | Indicates the domain for which the model belongs to. | String |  
| data | Indicates the section for all business data. | [data](#data) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | sku_entityValidationModel |
| name | sku |
| type | entityValidationModel |
| domain | generic |

## data

This object contains the attributes and relationships of the validation model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of attributes objects. | [attributes](#attributes) |
| relationships | Indicates an array of group of relationships objects. | [relationships](#relationships) |
| contexts | Indicates an array of group of contexts. | [contexts](#contexts) |

## attributes

This object contains an array of attributes of validation model. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## relationships

This object contains an array of relationships of validation model. The following table lists the details of the relationships object:

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
| <Primarycontext> | Indicates the name of primary context to which the object is linked to. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **context** object:

| Property | Description | 
|----------|-------------|
| country | _ALL |
| channel | _ALL |

## properties

This object contains the properties of the attributes, relationships and contexts object. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------| 
| isLocalizable | Indicates if this attribute is localizable or not. | Boolean |
| isCollection | Indicates if this attribute is a collection attribute or not. | Boolean |
| isLeafNodeOnly | Indicates if the product classification attribute consists of leaf node or not. | Boolean |
| required | Indicates whether the attribute is a required attribute. | Boolean | 
| precision | Indicates the number of allowed digits to the right of the decimal point for a decimal data type attribute. | Number |
| minLength | Indicates the minimum of characters that must be entered for an attribute value. | Number |
| maxLength | Indicates the maximum of characters that can be entered for an attribute value. | Number |
| uomEntityInfo | Indicates UOM attributes information. | [uomEntityInfo](#uomentityinfo) |
| uomAllowedUnitSymbols | Indicates the symbol used for UOM attributes. | [uomAllowedUnitSymbols](#uomallowedunitsymbols) |
| range | Indicates the allowed range of values. | [range](#range) |
| cardinality | Indicates number of entities in a relationship. | [cardinality](#cardinality) |
| pattern | Indicates regular expression used to validate attribute pattern. | [pattern](#pattern) |
| allowedinput | Indicates the allowed input pattern. | [allowedinput](#allowedinput) |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| isLocalizable | true |
| isCollection | true |
| required | true |
| precision | string |
| minLength | 5 |
| maxLength | 100 |

## uomEntityInfo

This object provides UOM attributes information. The following table lists the details of the uomEntityInfo object:

| Property | Description | Type | 
|----------|-------------|------|
| uomRelationshipName | Indicates the name of the relationship. | String |
| uomEntityType | Indicates the type of UOM attribute. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **uomEntityInfo** object:

| Property | Description | 
|----------|-------------|
| uomRelationshipName | hasUnits |
| uomEntityType | Time |

## uomAllowedUnitSymbols

This object indicates the symbol used for UOM attributes. The following table lists the details of the uomAllowedUnitSymbols object:

| Property | Description | Type | 
|----------|-------------|------|
| unitSymbol | Indicates the unit symbol used for UOM attributes | String |

Data for Sample [Scenario](#scenario): Set the following properties for **uomAllowedUnitSymbols** object:

| Property | Description | 
|----------|-------------|
| unitSymbol | cm |

## range

This object indicates the allowed range of values. The following table lists the details of the range object:

| Property | Description | Type | 
|----------|-------------|------|
| rangeTo | Maximum allowed value. | String |
| rangeFrom | Minimum allowed value. | String |
| isRangeToInclusive | Indicates if the range includes the maximum value specified in rangeTo. | Boolean |
| isRangeFromInclusive |  Indicates if the range includes the minimum value specified in rangeFrom. | Boolean |

Data for Sample [Scenario](#scenario): Set the following properties for **range** object:

| Property | Description | 
|----------|-------------|
| rangeTo | 2030-12-31T18:00:00.000 |
| rangeFrom | 2000-01-01T06:00:00.000 |
| isRangeToInclusive | false |
| isRangeFromInclusive | false |

## cardinality

This object indicates number of entities in a relationship. The following table lists the details of the cardinality object:

| Property | Description | Type | 
|----------|-------------|------|
| minimum | Indicates the minimum number of entities that can be added in a relationship. | Integer |
| maximum | Indicates the maximum number of entities that can be added in a relationship. | Integer |

Data for Sample [Scenario](#scenario): Set the following properties for **cardinality** object:

| Property | Description | 
|----------|-------------|
| minimum | 1 |
| maximum | 1 |

## pattern

This object indicates the regular expression used to check if the attribute pattern is valid. The following table lists the details of the pattern object:

| Property | Description | Type | 
|----------|-------------|------|
| pattern | Indicates regular expression used to validate attribute pattern. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **pattern** object:

| Property | Description | 
|----------|-------------|
| email | [\\w\\._%-]+@[\\w]+(\\.[A-Za-z]+)*(\\.[A-Za-z]{2,6}) |

## allowedinput

This object indicates the allowed input pattern. The following table lists the details of the allowedinput object:

| Property | Description | Type | 
|----------|-------------|------|
| allowedinput | Indicates the allowed input pattern. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **allowedinput** object:

| Property | Description | 
|----------|-------------|
| allowedinput | valid email address |