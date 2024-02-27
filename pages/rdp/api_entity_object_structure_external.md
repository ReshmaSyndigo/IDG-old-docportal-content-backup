---
title: Entity Object Structure
sidebar: rdp_sidebar
permalink: api_entity_object_structure.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}
 
An entity object in Riversand Platform is a JSON structure that details about the entity data and the business data such as attributes and relationships. Broadly, an entity object contains the following sub-objects:

* [Request Level Attributes](#request-level-attributes): Contains attributes required for processing the request.
* [params](#params): Contains any additional parameters required for processing data in the request.
* [entity](#entity): Contains all the required information of an entity.
* [properties](#properties): Contains the audit information of an entity such as createdBy and modifiedBy.
* [data](#data): Contains an array of [contexts](#contexts), [attributes](#attributes), and [relationships](#relationships) details of an entity. Defining context is optional. If an entity is not linked to any context, then the entity is in "Self" context.

<br/>
{% if site.build != "ascend" %}
You must create corresponding data models as required for primary and additional context. See [Prepare Base Data Model - Thing](/{{site.data.rdp_links_version.APP}}/dm_prep.html){:target="_blank"}, for more information. Consider that as per the data model created, you have configured the attributes as follows:
{% endif %}

{% if site.build == "ascend" %}
You must create corresponding data models as required for primary and additional context. See [Thing Domain Data Model]({{ site.main_url }}/data_admin_overview.html){:target="_blank"}, for more information. Consider that as per the data model created, you have configured the attributes as follows:
{% endif %}

| Context | Attributes | 
|----------|-------------|
| Self attributes | mdmid, mdmname |
| Enhancer attributes | productclassification, itemtype |
| Germany context attributes | vat |
| Enhancer given attributes | accessoriesincluded, reviewrank |
| Germany Web context attributes | internettax |

{% if site.build == "internal" %}
The attribute values must be specified according to the rules defined in the [Validation Model](api_validation_model.html#attributes).
{% endif %}

The attributes are specified You can refer to [Data Type Summary](api_data_type_summary.html) for the **value ranges**. 

This topic describes the entity object structure using a sample scenario. 

## Scenario

To create "SKU" entity "CVShirts":
* Linked in self context with few attributes
* Linked to two primary contexts: country "Germany" and channel "Germany Web" with few context-specific attributes and enhancer given attributes.
* Linked to additional context: "Product Classification" and "Item Type"

The following example demonstrates the sample JSON format to create a "SKU" entity "CVShirts": 

<pre><code>
{
  "entity": {
    "id": "MDM001",
    "name": "CVShirts",
    "type": "sku",
    "properties": {
      "createdService": "entityManageService",
      "createdBy": "dev1admin@riversand.com_user",
      "createdDate": "2018-10-29T08:42:12.706-0500"
    },
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "CVShirts",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "CVShirts",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Formal Cotton Shirt",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "Formal Cotton Shirt - Germany",
              "source": "internal",
              "locale": "de-DE"
            }
          ]
        },
        "productclassification": {
          "values": [
            {
              "value": "Product Classifications>>Apparel & Footwear>>DressShirts",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "itemtype": {
          "values": [
            {
              "value": "Refurbished",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      "contexts": [
        {
          "context": {
            "country": "Germany"
          },
          "attributes": {
            "accessoriesincluded": {
              "values": [
                {
                  "value": "Accessories in Germany",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "vat": {
              "values": [
                {
                  "value": "10",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          }
        },
        {
          "context": {
            "channel": "Germany Web"
          },
          "attributes": {
            "reviewrank": {
              "values": [
                {
                  "value": "20",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "internettax": {
              "values": [
                {
                  "value": "15",
                  "source": "internal",
                  "locale": "en-US"
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

The following section describes the properties of the entity object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set data for the [sample scenario](#scenario).

{% include snippets/params.md %}

## entity 

This object is the parent container that holds all the required information about an entity. The following table lists the details of the entity object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| id | Indicates the unique identifier of the entity. Id is alpha-numeric with a maximum length of 128 characters. Platform generates the one, if it is not provided by you.| String | No |
| name | Indicates the name of the entity. Name can contain underscore(_), spaces, and alpha-numeric with a maximum length of 256 characters. Name can be duplicate. Specifying name is optional. This is overwritten by the attribute value with "isExternalName" as "true". | String | No |
| type | Indicates the type of the entity. | String | Yes |
| properties | Indicates the properties of the object. Properties must be used to store simple name-value pairs, where the values are **Absolute** and **do not change with context**. Attributes must be used in scenarios where the value can have additional properties or context specificity. | [properties](#properties) | No |
| data | Indicates the section for all business data. | [data](#data) | No |

Data for sample [Scenario](#scenario): Set the following properties for **entity** object:

| Property | Value | 
|----------|-------------|
| id | CVShirts |
| name | CVShirts |
| type | sku |

The following sections describe how to set the values for [properties](#properties) and [data](#data) objects.

## properties  

This object stores the audit information of an entity such as createdBy and modifiedBy. The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| createdService | Indicates the name of the service that created this object. | String | No |
| createdDate | Indicates the date and time when the object was created. | String | No |
| source | Indicates the source of the data. This source can be external data providers or internal systems of the data origin. This property serves as the default source for all the data elements, unless explicitly specified at the element level. | String | No | 
| createdByService | Indicates the name of the service that created this object. | String | No |
| createdBy | Indicates the user who created this object. | String | No |
| modifiedService | Indicates the name of the service that was used to last update this object. | String | No |
| modifiedBy | Indicates the user who last updated the object. | String | No |
| modifiedDate | Indicates the date and time when the object was last updated. | String | No |

Data for sample [Scenario](#scenario): Set the following properties for the **properties** object:

| Property | Value | 
|----------|-------|
| createdService | entityManageService |
| createdDate | 2018-10-29T08:42:12.706-0500 | 
| createdBy | dev1admin@riversand.com_user | 

## data  

This object contains the business data of the entity. It includes contexts, attributes and relationship details. The following table lists the details of the data object:

| Property | Description | Type | Required |
|----------|-------------|------|---------- |
| attributes | Indicates an array of [attributes](#attributes) defined in self context.| [attributes](#attributes) | No |
| relationships | Indicates an array of [relationships](#relationships) defined in self context.| [relationships](#relationships) | No |
| contexts | Indicates an array of [contexts](#contexts), [attributes](#attributes) and [relationships](#relationships) objects in specific context.| [contexts](#contexts) | No |

### contexts 

This object contains the context information of the entity. The following table lists the details of the contexts object:

| Property | Description | Type | Required | 
|----------|-------------|------|-----------|
| context | Indicates the primary contexts such as country or channel to which the entity is linked to. | [context](#context) | Yes |
| attributes | Indicates the attributes of the entity in the context. This can be simple or nested attributes. An attribute object can have multiple values based on a combination of contexts such as locale, list, brand, channel, region, and season.| List of [attributes](#attributes) objects | No |
| relationships | Indicates the relationships between this entity and other entities in the context. Each relationship object contains type, related entity information, and [attributes](#attributes). | List of [relationships](#relationships) objects | No |

### context  

This object contains the primary context information of the entity. The following table lists the details of the context object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| <<primaryContextName>> | Indicates the primary context this entity belongs to. | String | No |

Data for sample [Scenario](#scenario): In this scenario, there are two primary contexts the entity is linked to - Country and Channel. Set the following properties for **context** object:

| Property | Value | 
|----------|-------|
| country | Germany |
| channel | Germany Web |

### attributes  

This object contains the details of the simple, nested, UOM and relationship attributes of an entity. The following table lists the details of the attributes object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<AttrName>> | Indicates an object that contains all the details about an attribute such as value, locale, source. | [attribute](#attribute)| No |

Attributes and Relationships can be defined in the self-context and also at each context as required.

### attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| <<AttrName>> -> values | Indicates a collection of [values](#values) objects that contains the attribute value and additional contextual information about the value. This is typically referred to as Simple Attributes. | List of [values](#values) objects | Yes |
| <<AttrName>> -> group -> <<AttrName>> -> values | Indicates a set of attributes grouped together with any number of levels as required. This is the typical structure for Nested Attributes. Nested parent attribute also has a child attribute within it. | List of [attribute](#attribute) objects | No |

### values 

This object contains the values of the simple, nested, and relationship attributes of an entity. Each attribute in contexts can have mutiple locales. The following table lists the details of the values object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| value | Indicates the actual attribute value. | String  | Yes |
| source | Indicates the source of attribute value. | String  | Yes |
| locale | Indicates the locale for the attribute value. | String | Yes |
| uom | Indicates the Unit of Measure for this attribute value. | String | No | 
| timestamp | Indicates date and time when this value was last updated. | Number | No |
| action | Indicates the action for this attribute value. Example: action:"delete" | String | No |

Data for sample [Scenario](#scenario): In this scenario, the attributes are defined at self context level, enhancer attributes are used to link additional context such as "productclassification" and "itemtype", context specific attributes and enhancer given attributes are defined at each context level.

**Self-Context Attributes**: 

| Property | Value |  
|----------|-------------|
| mdmid | MDM001 |
| mdmname | CVShirts |
| description | Formal Cotton Shirt, Formal Cotton Shirt - Germany. Note that in this scenario, the description values are defined in "en-US" and "de-DE" locale. |

**Enhancer Attributes (Additional Context)**:

| Property | Value | 
|----------|-------------|
| productclassification | Product Classifications>>Apparel & Footwear>>DressShirts |
| itemtype | Refurbished |

**Germany Context Attributes**: In this you can also define values for enhancer given attributes in the specific context. In this scenario, "accessoriesincluded" is enhancer given attribute.

| Property | Value | 
|----------|-------------|
| accessoriesincluded | Accessories in Germany |
| vat | 10 |

**Germany Web Context Attributes**: In this you can also define values for enhancer given attributes in the specific context. In this scenario, "reviewrank" is enhancer given attribute.

| Property | Value | 
|----------|-------------|
| reviewrank | 20 |
| internettax | 15 |

### relationships

This object contains the information about the relationship. The following table lists the details of the relationships object:

| Property | Description | Type | Required |
|----------|-------------|------|------------| 
| <<relationshipType>> | Indicates an object containing all the details about the relationship.| [relationship](#relationship)| No |


### relationship  

This object contains the relationship details such as the relationship type, related entity information, and [attributes](#attributes). The following table lists the details of the relationship object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------| 
| relName | Indicates the Relationship Type Name. | String | Yes |
| <<relName>> -> id | Indicates the unique identifier of the relationship generated by the Platform. | String | Yes |
| <<relName>> -> source | Indicates the source of this relationship. | String | Yes |
| <<relName>> -> timestamp | Indicates  date and time when this relationship was last updated | Number | Yes |
| <<relName>> -> relationshipType | Indicates the relationship type. | String | Yes |
|<<relName>> -> attributes | Indicates the attributes of the relationship. | List of [attributes](#attributes) objects | No | 
| <<relName>> -> relationships | Indicates any additional or nested relationship between this relationship and other entities. | List of [relationships](#relationships) objects| No |
| <<relName>> -> relTo | Indicates the related to entity in the relationship | [relTo](#relto) | Yes |
| <<relName>> -> src | Indicates the external source name. | String | No |

### relto

This object contains the details about the related entity object. The following table lists the details of the relTo object:

{% if site.build == "internal" %}
| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| id | Indicates unique identifier of the related entity. | String | Yes |
| type | Indicates entity type of the related entity. | String | Yes |
| data -> attributes | Indicates the matching relationship attributes.<br/>You can define any attribute of existing entity in the system such as mdmid, mdmname that acts as a match to relate to the newly created entity. See [Create Entity with Relationship and Matching Relationship Attribute](api_app_create_entity_scenario11_1.html) for a sample scenario. | String | No |
{% endif %}

{% if site.build != "internal" %}
| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| id | Indicates unique identifier of the related entity. | String | Yes |
| type | Indicates entity type of the related entity. | String | Yes |
| data -> attributes | Indicates the matching relationship attributes.<br/>You can define any attribute of existing entity in the system such as mdmid, mdmname that acts as a match to relate to the newly created entity. | String | No |
{% endif %}