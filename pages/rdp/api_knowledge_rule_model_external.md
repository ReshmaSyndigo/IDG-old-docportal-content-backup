---
title: Knowledge Rule Model
sidebar: rdp_sidebar
permalink: api_knowledge_rule_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the validation and computation knowledge rule details of the attributes. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [data](#data): Contains an array of [attribute](#attributes) details of Knowledge Rule Definition Data Model.

<br>
This topic describes the Knowledge Rule Entity Data Model object structure using a sample scenario.

## Scenario 

Consider that you wish to validate a different set of attributes based on the status attribute values by creating the validation knowledge rule. The following example demonstrates the sample JSON format to create a validation knowledge rule:

<pre><code>
{
  "entityModel": {
    "id": "ValidateRequiredAttribute_knowledgeRule",
    "name": "ValidateRequiredAttribute",
    "type": "knowledgeRule",
    "domain": "generic",
    "properties": {
      "createdService": "entityManageModelService",
      "createdBy": "rdwadmin@riversand.com_user",
      "createdDate": "2022-03-28T05:48:55.817-0500",
      "modifiedService": "entityManageModelService",
      "modifiedBy": "rdwadmin@riversand.com_user",
      "modifiedDate": "2022-03-28T08:18:24.415-0500"
    },
    "data": {
      "attributes": {
        "targetAction": {
          "values": [
            {
              "id": "3_0",
              "value": "validateRequiredAttributes",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "entityType": {
          "values": [
            {
              "id": "3_0",
              "value": "sku",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "id": "3_0",
              "value": "validation",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "targetAttribute": {
          "values": [
            {
              "id": "3_0",
              "value": "lookup[\"buyerstatus\","\buyerstatustocheck:&#123;&#123; attribute[\"status\"]&#125;&#125;\",\"buyerrequiredattributes\"]",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "context": {
          "values": [
            {
              "id": "3_0",
              "value": "self_self",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "targetActionValue": {
          "values": [
            {
              "id": "3_0",
              "value": "Req001",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "enabled": {
          "values": [
            {
              "id": "3_0",
              "value": true,
              "locale": "en-US",
              "source": "internal"
            }
          ]
        }
      }
    }
  }
}
</code></pre>

## entityModel

This object is the parent container that holds all the required information about the entity model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. This must be of the format <<knowledgeRule_name>>_knowledgeRule. | String |
| type | Indicates the type of entity model. | String | 
| domain | Indicates the root domain to which domain of this attribute model belongs to. | String |
| data | Indicates the section for all business data. | [data](#data) | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | ValidateRequiredAttribute_knowledgeRule |
| type | knowledgeRule |
| domain | generic |

## data

This object contains the contexts and attributes of the model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group attributes. | [attributes](#attributes) | 

## attributes

This object contains an array of attributes of the knowledge rule. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|------|
| conditionAttribute | Indicates the name of the attribute, which is specified in the reference data. | String |
| conditionOperator | Indicates the name of the operators | Possible operators are: exact, notExact, and hasChanged | List of [values](#values) objects | 
| conditionValue | Indicates the value of the specified condition attribute. | String |
| targetAction | Indicates the target actions such as setError, setValue, setInfo, validateRequired, and setMultiAttributeAndValue. | List of [values](#values) objects |
| entityType | Indicates the name of the entity to be mapped with the knowledge rule such as sku and product. | List of [values](#values) objects |
| ruleType | Indicates the type of the knowledge rule. | List of [values](#values) objects |
| targetAttribute | Indicates the name of the target attribute for which the knowledge rule has to be performed. | String |
| context | Indicates the context type such as country, channel, and workflow along with the name of the Context delimited by pipe separator. | String |
| targetActionValue | Indicates the target action values such as Req001 and Info001. | String |
| enabled | Indicates if the knowledge rule is enabled. | List of [values](#values) objects |

## values

This object contains the details of the validation and computation Knowledge rules. You can specify the values for each of the attributes that you wish to include in the Knowledge Rule Data Model. You must include the attribute **definition** in the model with the value which defines condition to trigger the knowledge rule. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| value | Indicates the value of the attribute specified. | String |
| source | Indicates the source of attribute value. | String | 
| locale | Indicates the locale for the attribute value. | String | 

Data for sample [Scenario](#scenario): Specify the values as follows: 

| Property | Value | 
|----------|-------------|
| value | validation |
| source | internal |
| locale | en-US |