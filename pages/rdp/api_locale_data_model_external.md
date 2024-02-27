---
title: Locales Model
sidebar: rdp_sidebar
permalink: api_locale_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the information related to the Localization of a particular region. You can use this model to define the locale information as per your business requirements under various [Manage models](api_manage_model.html). 

The following table lists the examples of locales which can be defined in Riversand Platform:

| Name of the Locale models | Description |
|--------------------|-------------|
| en-US | Indicates the Locale models related to "English-US" dialect. |
| en-GB | Indicates the Locale models related to "English - Great Britan" dialect. |
| fr-FR | Indicates the Locale models related to "French - France" dialect. |
| de-DE | Indicates the Locale models related to "German - Germany" dialect. |
| fr-BE | Indicates the Locale models related to "French - Belgium" dialect. |
| es-US | Indicates the Locale models related to "Spanish - United States" dialect. |
| en-AU | Indicates the Locale models related to "English - Australia" dialect. |
| es-ES | Indicates the Locale models related to "Spanish - Spain" dialect. |

{% if site.build == "internal" %}
We can define [Entity Manage Model](api_manage_model.html), [Entity Validation Model](api_validation_model.html), [Entity Display Model](api_display_model.html), [Entity Default Values Model](api_default_model.html) for a locale. Each locale is associated to the [allowed locales](api_app_create_entity_scenario19.html) of a country. Also each locale has a [fallback locale](api_app_create_entity_scenario20.html) sequence. This topic describes locale validation model object structure, using a sample scenario.
{% endif %}

{% if site.build != "internal" %}
We can define [Entity Manage Model](api_manage_model.html), [Entity Validation Model](api_validation_model.html), [Entity Display Model](api_display_model.html), [Entity Default Values Model](api_default_model.html) for a locale. Each locale is associated to the allowed locales of a country. Also each locale has a fallback locale sequence. This topic describes locale validation model object structure, using a sample scenario.
{% endif %}


## Scenario

<pre><code>
{
  "entityModel": {
    "id": "locale_entityValidationModel",
    "name": "locale",
    "type": "entityValidationModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "externalname": {
          "properties": {
            "required": false
          }
        },
        "description": {
          "properties": {
            "required": false
          }
        },
        "code": {
          "properties": {
            "required": true
          }
        },
        "language": {
          "properties": {
            "required": false
          }
        },
        "region": {
          "properties": {
            "required": false
          }
        }
      },
      "relationships": {
        "fallbacklocale": [
          {
            "properties": {
              "externalName": "Fallback Locale",
              "relationshipType": "Association",
              "relationshipOwnership": "owned",
              "relatedEntityInfo": [
                {
                  "relEntityType": "locale"
                }
              ]
            },
            "attributes": {
              "fallbacklocalesequence": {
                "properties": {
                  "required": false
                }
              }
            }
          },
          {
            "properties": {
              "externalName": "Fallback Locale",
              "relationshipType": "Association",
              "relationshipOwnership": "whereused",
              "relatedEntityInfo": [
                {
                  "relEntityType": "locale"
                }
              ]
            },
            "attributes": {
              "fallbacklocalesequence": {
                "properties": {
                  "required": false
                }
              }
            }
          }
        ],
        "allowedlocales": [
          {
            "properties": {
              "externalName": "Allowed Locales",
              "relationshipType": "Association",
              "relationshipOwnership": "whereused",
              "relatedEntityInfo": [
                {
                  "relEntityType": "country"
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

{% picture localesmodel.png alt="Locale Model" %}

## entityModel

This object is the parent container that holds all the required information about the model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this locale model. | String |
| name | Indicates the name of this locale model.| String |
| type | Indicates the type of this array. | String |
| domain | Indicates the root in Riversand Platform environment. | String | 
| properties | Indicates an array of group of [properties](#properties).| [properties](#properties) | 
| data | Indicates an object that contains details about the [attributes](#attributes) and [relationships](#relationships) this model has. | [data](#data) | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | locale_entityValidationModel |
| name | locale |
| type | entityValidationModel |
| domain | generic |

## data

This object contains all the data about the attributes and relationships for this model. The following table lists the details of the data object:

| Property | Description | Type |
|----------|-------------|-------|
| attributes | Indicates an array of attributes this model has with the particular domain. | [attributes](#attributes) |
| relationships | Indicates the array of the relationships this model has with the particular domain. | [relationships](#relationships) |

## attributes

This object contains the details of the simple, nested, UOM and relationship attributes of an entity. The following table lists the details of the attributes object:

| Property | Description | Type |
|----------|-------------|-------|
| <<AttrName>> | Indicates an object that contains all the details about an attribute such as value, locale, source. | [attribute](#attribute) |

## relationships

This object contains all the relationships in the form of an array. The following table lists the details of the relationships object:

| Property | Description | Type |
|----------|-------------|-------|
| <<RelName>> | Indicates an object that contains all the details about a relationship such as id, direction. | [relationship](#relationship) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| Property | Description | Type |
|----------|-------------|-------|
| <<AttrName>> -> properties | Indicates the various [properties](#properties) of the attribute. | [properties](#properties) |

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
| required | Indicates whether the attribute is necessary or not. | Boolean | 
| externalName | Indicates the external name of an attribute. | String |
| relationshipType | Indicates the type of relationship. | String |
| relationshipOwnership | Indicates whether the relationship is owned or not. | String |
| relatedEntityInfo |  Indicates details of the entity type in a relationship. | [relatedEntityInfo](#relatedEntityInfo) |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| required | false |
| externalName | Fallback Locale |
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