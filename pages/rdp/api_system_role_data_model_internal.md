---
title: System Roles Model
sidebar: rdp_sidebar
permalink: api_system_role_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the information related to the System Roles. You can use this model to define different Roles as per your business requirements under various [Manage models](api_manage_model.html). For example, roles such as vendor, buyer, copywriter, and assetEnrichment can be defined. 

The following roles are available in the out-of-the-box(OOTB) instance of Riversand Platform:

| Name of the Role Models | Description | 
|-------------------|-------------|
| Admin | Indicates the system administrator role with complete authorization of the system. |
| DataReader | Indicates the system defined user role with read only permissions on the data. |

This topic describes how to create a role using a sample scenario. 

## Scenario 

To create a role, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. 
  
<pre><code>
{
  "entityModel": {
    "id": "vendor",
    "name": "vendor",
    "type": "role",
    "properties": {
      "description": ""
    }
  }
}
</code></pre> 

The following diagram depicts the structure of the above Data Model:

{% picture systemrolesmodel.png alt="System Role Model" %}

## entityModel

This object contains an array of various System Role model. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this System Role model. | String |
| name | Indicates the name of this System Role model. | String |
| type | Indicates the type of this array. | String |
| properties | Indicates an array of group of [properties](#properties). | [properties](#properties) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | vendor |
| name | vendor |
| type | role |

## properties

This object contains the description about this System Role Model. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|-------|
| description | Provides more information about this System Role model. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| description | "" |