---
title: Attribute Model
sidebar: rdp_sidebar
permalink: api_attribute_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the base attribute models for a particular [domain](api_domain_data_model.html). You can then create various attribute models of this base attribute model type as per your business requirements. With these attribute models created, you can create the corresponding related attributes and use it for various [Manage Models](api_manage_model.html).

Certain attribute models comes out-of-the-box (OOTB) when you deploy Riversand Platform. The following table lists OOTB attribute models:

| Name of the attribute models | Description |
|--------------------|-------------|
| thingdomainattributemodels | Indicates the attribute models related to "Thing" domain. |
| partydomainattributemodels | Indicates the attribute models related to "Party" domain. |
| locationdomainattributemodels | Indicates the attribute models related to "Location" domain. |
| referencedatadomainattributemodels | Indicates the attribute models related to "Reference Data" domain. |
| genericdomainattributemodels | Indicates the attribute models related to "Generic" domain. |

{% if site.build == "internal" %}
This topic describes the attribute model object structure using a sample scenario. See [Create Attribute Model](api_create_data_model_scenario63.html) for more scenarios and examples.
{% endif %}

{% if site.build == "external" %}
This topic describes the attribute model object structure using a sample scenario. 
{% endif %}

## Scenario

The following example demonstrates the sample JSON format to create "Currency" attribute model.

<pre><code>
{
  "entityModel": {
    "id": "currency_attributeModel",
    "name": "currency",
    "type": "attributeModel",
    "domain": "thing",
    "properties": {
      "externalName": "Currency",
      "description": "",
      "dataType": "String",
      "groupName": "Pricing",
      "displayType": "TextBox",
      "displaySequence": "3005"
    },
    "data": {
      "attributes": {
        "currency": {
          "properties": {
            "externalName": "Currency",
            "description": "",
            "dataType": "String",
            "groupName": "Pricing",
            "displayType": "TextBox",
            "displaySequence": "3005"
          }
        }
      },
      "relationships": {
        "listedUnder": [
          {
            "id": "",
            "direction": "both",
            "relationshipType": "aggregation",
            "relTo": {
              "id": "thingdomainattributemodels",
              "type": "list"
            }
          }
        ]
      }
    }
  }
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture attributemodel.png alt="Attribute Model" %}

## entityModel

This object contains an array of various attribute models for a particular domain. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this attribute model. | String | 
| name | Indicates the name of this attribute model. | String |
| type | Indicates the type of this array. | String | 
| domain | Indicates the root domain to which domain of this attribute model belongs to. | String | 
| properties | Indicates the properties of the object. Properties must be used to store simple name-value pairs, where the values are Absolute and do not change with context. Attributes must be used in scenarios where the value can have additional properties or context specificity. | [properties](#properties) | 
| data | Indicates an object that contains details about the [attributes](#attributes) and [relationships](#relationships) this model has. | [data](#data) | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | currency_attributeModel |
| name | currency |
| type | attributeModel |
| domain | thing |

## properties

This object stores the audit information of an entity such as externalName and description. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| externalName | Indicates the external name of an attribute. | String | 
| description | Provides the details of a particular attribute. | String | 
| dataType | Indicates the dataType used for the property. | String, boolean | 
| mergeMatrix | Indicates an array of merge precedence related properties. | |
| mergeSequence | Indicates the highest precedence order defined at first for an external source with the lesser precedence level defined next and so on. The various external sources are separated by the symbol "»". | String |
| ignoreMergeMatrix | Indicates whether or not to ignore values from different data sources merged into one single record. | Boolean |
| aggregate | Indicates whether the incoming value of the entity has to be appended with the existing value of the entity. "aggregate" works only for simple and collection attributes. "aggregate" is not applicable for relationships and nested attributes. | Boolean |
| groupName | Indicates the name of the attribute group it belongs to. | String | 
| displayType | Indicates the widget type for displaying in UI. | String |
| displaySequence | Indicates the sequence in which the attributes are displayed. | Integer |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| externalName | Currency |
| description | "" |
| dataType | String |
| groupName | Pricing |
| displayType | TextBox |
| displaySequence | 3005 |

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

This object contains the information of relationship details in the form of an array. The following table lists the details of the relationships object:

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
|----------|-------------|-------|
| listedUnder | Indicates the kind of the relationship. | String |
| listedUnder -> id | Indicates the identifier of the relationship this model has. | String |
| listedUnder -> direction | Indicates the association of the relationship this model has. | String |
| listedUnder -> relationshipType | Indicates the type of the relationship this model has. | String |
| listedUnder -> relTo | Indicates the details about the related domain in the relationship. | [relto](#relto) |

Data for Sample [Scenario](#scenario): Set the following properties for **relationship** object:

| Property | Description | 
|----------|-------------|
| listedUnder -> id | "" |
| listedUnder -> direction | currency |
| listedUnder -> relationshipType | aggregation |

## relTo

This object contains the details about the related domain object. The following table lists the details of the relTo object:

| Property | Description | Type | 
|----------|-------------|-------|
| id | Indicates the identifier of the related domain. | String |
| type | Indicates the type of the domain. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **relTo** object:

| Property | Description | 
|----------|-------------|
| id | thingdomainattributemodels |
| type | list |
