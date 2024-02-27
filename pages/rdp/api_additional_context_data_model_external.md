---
title: Additional Context
sidebar: rdp_sidebar
permalink: api_additional_context_data_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

**Additional Context** is used to enhance an entity with additional details. It is also called as enhancer attributes. The following lists a few examples of additional contexts in Riversand Platform: 
* Productclassification
* Webclassification
* Itemtype

| Context | Models |
|---------|--------|
| Itemtype | Entity Manage Model |
|          | Entity Validation Model |
|          | Entity Display Model |
|          | Entity Default Values Model |

<br>
You can define [Entity Manage Model](api_manage_model.html), [Entity Validation Model](api_validation_model.html), [Entity Display Model](api_display_model.html), [Entity Default Values Model](api_default_model.html) for itemtype. Consider an "itemtype" context with new, refurbished, preowned as its reference values. This topic describes manage model for "itemtype".

## Scenario

<pre><code>
{
  "entityModel": {
    "id": "itemtype_entityManageModel",
    "name": "itemtype",
    "type": "entityManageModel",
    "domain": "generic",
    "data": {
      "attributes": {
        "code": {
          "properties": {
            "externalName": "Value",
            "groupName": "Reference Data",
            "isEntityIdentifier": true,
            "dataType": "string"
          }
        },
        "value": {
          "properties": {
            "externalName": "Code",
            "groupName": "Reference Data",
            "isExternalName": true,
            "dataType": "string"
          }
        }
      }
    }
  }
}
</code></pre> 

The following diagram depicts the structure of the above Data Model:

{% picture additionalcontextmodel.png alt="Additional Context Model" %}

## entityModel

This object contains an array of various attributes of a particular entityType. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this entityType. | String | 
| name | Indicates the name of this entityType. | String | 
| type | Indicates the type of this array. | String |
| domain | Indicates the domain to which this entityType belongs to. | String |
| properties | Indicates an array of group of [properties](#properties). | [properties](#properties) | 

Data for sample [scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Value | 
|----------|-------|
| id | itemtype_entityType |
| name | itemtype |
| type | entityType |
| domain | referenceData |

## data

This object contains the attributes of the manage model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) |

## attributes

This object contains an array of attributes of manage model. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## properties

This object contains the properties of the attributes object. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| externalName | Indicates the external name of the attribute. | String |
| groupName | Indicates the group name of the attribute. | String |
| isEntityIdentifier | Indicates if this attribute is the primary identifier for the entity. | Boolean |
| dataType | Indicates the data type of the attribute. This is a typically a structure for simple attributes. | String. Possible values are - string, date, datetime and decimal |
| isExternalName | Indicates that the value of this attribute is copied to entity name. Only one attribute must have this property set as true. | Boolean |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| externalName | Value |
| groupName | Reference Data |
| isEntityIdentifier | true |
| dataType | string |
| isExternalName | true |