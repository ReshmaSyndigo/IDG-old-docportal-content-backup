---
title: Party Domain
sidebar: rdp_sidebar
permalink: api_party_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

**Party domain** manages the data related to parties such as customers, vendors and maintains a consistent version of this data. There are two entity types mapped to party domain which are shown below:

| Domain | Entity Types | 
|----------|----------------|
| party | vendor |
|       | customer |

This topic describes the "vendor" entity type object structure of Party domain using a sample scenario.

## Scenario

<pre><code>
{
  "entityModel": {
    "id": "vendor_entityType",
    "name": "vendor",
    "type": "entityType",
    "domain": "party",
    "properties": {
      "externalName": "Vendor",
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
| id | vendor_entityType |
| name | vendor |
| type | entityType |
| domain | party |

## properties

This object contains the externalName and description about this entityType. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|-------|
| externalName | Indicates the external name of the particular domain. | String |
| description | Provides the description about a particular domain. | String | 

Data for sample [scenario](#scenario): Set the following values for the **properties** object:

| Property | Value | 
|----------|-------|
| externalName | Vendor |
| description | "" |