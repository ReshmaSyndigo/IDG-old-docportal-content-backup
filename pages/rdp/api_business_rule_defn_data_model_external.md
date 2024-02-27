---
title: Governance Business Rule Definition Data Model
sidebar: rdp_sidebar
permalink: api_business_rule_defn_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the validation and computation business rule details of the attributes. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [data](#data): Contains an array of [attribute](#attributes) details of Governance Business Rule Definition Data Model.

<br>
{% if site.build == "internal" %}
See [Create Business Rule to Invoke Workflow](api_create_data_model_scenario71.html) for more scenarios and examples.{% endif %} This topic describes the Governance Business Rule Entity Data Model object structure using a sample scenario.

## Scenario 

Consider that you wish to create "skuPricingAttributesValidationRule" business rule in the NewSKUIntroduction workflow. The following example demonstrates the sample JSON format to create a computation rule:

<pre><code>
{
  "entityModel": {
    "id": "skuPricingAttributesValidationRule_businessRule",
    "type": "businessRule",
    "domain": "generic",
    "data": {
      "attributes": {
        "name": {
          "values": [
            {
              "value": "Merchandising Attribute Population",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "This is the step where merchandising team populates all the marketing attributes of the SKU",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "value": "validation",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "executionMode": {
          "values": [
            {
              "value": "any",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "definition": {
          "values": [
            {
              "value": "IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"listprice\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"listprice\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"listprice\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"salesprice\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"salesprice\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"salesprice\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"msrp\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"msrp\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"msrp\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"map\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"map\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"map\"]] AND IIF[ValidateEmptyAttributes[\"_DEFAULT\",\"_DEFAULT\",\"dollarmargin\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"dollarmargin\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"dollarmargin\"]]",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "enabled": {
          "values": [
            {
              "value": "true",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "isDraft": {
          "values": [
            {
              "value": "false",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "isDeleted": {
          "values": [
            {
              "value": "false",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture governancebusinessruledefinitiondatamodel.png alt="Governance Business Rule Definition Data Model" %}

## entityModel

This object is the parent container that holds all the required information about the entity model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. This must be of the format <<businessRule_name>>_businessRule. | String |
| type | Indicates the type of entity model. | String | 
| domain | Indicates the root domain this workflow model belongs to. | String |
| data | Indicates the section for all business data. | [data](#data) | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | skuPricingAttributesValidationRule_businessRule |
| type | businessRule |
| domain | generic |

## data

This object contains the contexts and attributes of the model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group attributes. | [attributes](#attributes) | 

## attributes

This object contains an array of attributes of the business rule. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|------|
| name | Indicates the name of the business rule. | List of [values](#values) objects |
| description | Indicates a description given to the business rule. | List of [values](#values) objects |
| ruleType | Indicates the type of the rule - business rule. | String |
| executionMode | Indicates the mode of execution. | String |
| definition | Indicates the business rule defination. | List of [values](#values) objects |
| enabled | Indicates if the business rule is enabled. | List of [values](#values) objects |
| isDraft | Indicates if the business condition is a draft. | Boolean |
| isDeleted | Indicates if the business condition is deleted or not. | Boolean |
| liveTraceEnabled | Indicates if live tracing is enabled or not. | Boolean |
| liveTraceEntityStateLogType | Indicates options to specify the overall entity state logging behavior. | Possible options are: beforeOnly, beforeOnlyWithOriginalEntity, afterOnly, afterOnlyWithOriginalEntity, both, bothWithOriginalEntity, and none. |

{% include callout.html content="**Note:** 
The **Business Rule Live Tracing Framework** consists of **liveTraceEnabled** and **liveTraceEntityStateLogTyp** flags for tracing and troubleshooting. 
" type="primary" %}


## values

This object contains the details of the validation and computation business rules. You can specify the values for each of the attributes that you wish to include in the Business Rule Definition Data Model. You must include the attribute **definition** in the model with the value which defines condition to trigger the business rule. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| value | Indicates the value of the attribute specified. | String |
| source | Indicates the source of attribute value. | String | 
| locale | Indicates the locale for the attribute value. | String | 


{% include callout.html content="**Note:** During migration, you can set **ENABLED ON MIGRATION** attribute to 'Yes' for 'Business Rules' and 'Business Conditions' in the Governance App Model to indicate that these rules and conditions must be executed during migration. When you set **ENABLED ON MIGRATION** attribute to true for 'Business Rules' and 'Business Conditions' in the template, internally **enabledOnMigration** attribute in the 'Business Rules' and 'Business Conditions' JSON is set to true.
" type="primary" %}

Data for sample [Scenario](#scenario): Specify the values as follows: 

| Property | Value | 
|----------|-------------|
| value | validation |
| source | internal |
| locale | en-US |