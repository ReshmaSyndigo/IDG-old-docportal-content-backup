---
title: EntityType Model
sidebar: rdp_sidebar
permalink: api_entityType_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Each domain in Riversand Platform consists various entity types. The following table lists the models associated with "sku" entity type of thing domain.

| Entity Type | Models |
|-----------|-------------|
| sku | Entity Manage Model |
|     | Entity Validation Model |
|     | Entity Display Model |
|     | Entity Default Values Model |

We can also define manage model for reference data domain. See [Entity Manage Model for Reference Data Domain](api_reference_manage_model.html). 

This topic describes the entityType model object structure in detail using a sample scenario. 

## Scenario 

Consider that you wish to create "sku" entityType under the "thing" domain. The following example demonstrates the sample JSON format to create a sku entityType:

<pre><code>
{
  "entityModel": {
    "id": "sku_entityType",
    "name": "sku",
    "type": "entityType",
    "domain": "thing",
    "properties": {
      "externalName": "SKU",
      "description": ""
    }
  }
}
</code></pre>
 
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
| id | sku_entityType |
| name | sku |
| type | entityType |
| domain | thing |

## properties

This object contains the externalName and description about this entityType. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|-------|
| externalName | Indicates the external name of the particular entity type. | String |
| description | Provides the description about a particular entity type. | String | 

Data for sample [scenario](#scenario): Set the following values for the properties object:

| Property | Value | 
|----------|-------|
| externalName | SKU |
| description | "" |

This section covers the following topics to explain the object structure of the models associated with entityType:
* [Entity Manage Model](api_manage_model.html)
* [Entity Manage Model for Reference Data Domain](api_reference_manage_model.html)
* [Entity Validation Model](api_validation_model.html)
* [Entity Display Model](api_display_model.html)
* [Entity Default Values Model](api_default_model.html)