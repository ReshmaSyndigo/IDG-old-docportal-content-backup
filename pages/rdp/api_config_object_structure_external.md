---
title: Configuration Object Structure
sidebar: rdp_sidebar
permalink: api_config_object_structure.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

A configuration object in Riversand Platform is a JSON structure that details about the configuration data and the context for which the configuration is applicable. Broadly, an configuration object contains the following sub-objects:

* [Request Level Attributes](#request-level-attributes): Contains attributes required for processing the request.
* [params](#params): Contains any additional parameters required for processing data in the request.
* [configObject](#configobject): Contains all the required information of the configuration.
* [properties](#properties): Contains the audit information such as createdBy and modifiedBy.
* [data](#data): Contains an array of [contexts](#contexts) and corresponding [jsonData](#jsondata).

{% include callout.html content="**Notes**:<br/>
* The configuration information provided by the client using the RESTful APIs is stored as-is and hence must be a valid JSON object.
* The configuration information is a flush and fill process. This implies that if you wish to update a configuration, then you still use the create API to flush and fill the configuration data.
" type="primary" %}

This topic describes the configuration object structure using a sample scenario. 

## Scenario

Consider that you wish to create a configuration for a "search grid" in "entitysearch" App. The following example demonstrates the sample JSON format to create a configuration for search grid.

<pre><code>
{
  "configObject": {
    "id": "configGuid15",
    "name": "Search-Grid-Columns",
    "version": "2",
    "type": "uiConfig",
    "properties": {
      "createdByService": "entityservice",
      "createdBy": "user"
    },
    "data": {
      "contexts": [
        {
          "context": {
            "app": "entitysearch",
            "service": "searchdiscovery",
            "component": "searchresults",
            "subComponent": "datagrid",
            "entityType": "product",
            "relationshipType": "crossSell",
            "role": "_ALL",
            "user": "_ALL"
          },
          "jsonData": {
            "type": "",
            "config": "Valid JSON Config"
          }
        }
      ]
    }
  }
}
</code></pre>

The following section describes the properties of the configuration object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set data for the [sample scenario](#scenario).

{% include snippets/paramsOthers.md %}

## configObject 

This object is the parent container that holds all the required information about the configuration object. The following table lists the details of the configuration object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| id | Indicates the unique identifier of the configuration. Id is alpha-numeric with a maximum length of 128 characters. If it is not provided, then an Id is generated by the Platform.| String | No |
| name | Indicates the name of the configuration. Name can contain underscore(_), spaces, and alpha-numeric with a maximum length of 256 characters. Name can be duplicate. | String | Yes |
| version | Indicates the configuration version. | String | Yes |
| type | Indicates the configuration type. Currently, the supported types are matchConfig, uiConfig, and tenantserviceconfig. | String | Yes |
| properties | Indicates the properties of the object. Properties must be used to store simple name-value pairs, where the values are **Absolute** and **do not change with context**. Attributes must be used in scenarios where the value can have additional properties or context specificity. | [properties](#properties) | No |
| data | Indicates the section for all configuration data. | [data](#data) | Yes |

Data for sample [Scenario](#scenario): Set the following properties for **config** object:

| Property | Description | 
|----------|-------------|
| id | configGuid15 |
| name | Search-Grid-Columns |
| version | 2 |
| type | uiConfig |

The following sections describe how to set the values for [properties](#properties) and [data](#data) objects.

## properties  

This object stores the audit information of an configuration object such as createdBy and modifiedBy. The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| source | Indicates the source of the data. This source can be external data providers or internal systems of the data origin. This property serves as the default source for all the data elements, unless explicitly specified at the element level. | String | No | 
| createdByService | Indicates the name of the service that created this object. | String | No |
| createdBy | Indicates the user who created this object. | String | No |
| createdDate | Indicates the date and time when the object was created. | String | No |
| modifiedByService | Indicates the name of the service that was used to last update this object. | String | No |
| modifiedBy | Indicates the user who last updated the object. | String | No |
| modifiedDate | Indicates the date and time when the object was last updated. | String | No |

Data for sample [Scenario](#scenario): Set the following properties for the **properties** object:

| Property | Value | 
|----------|-------|
| createdByService | entityService |
| createdBy | Jim |

## data  

This object contains the configuration data. It includes contexts and the corresponding JSON data. The following table lists the details of the data object:

| Property | Description | Type | Required |
|----------|-------------|------|---------- |
| contexts | Indicates an array of group of [contexts](#contexts) and [jsonData](#jsondata) objects.| [contexts](#contexts) | Yes |

### contexts 

This object contains the context information for which the configuration is applicable. The following table lists the details of the contexts object:

| Property | Description | Type | Required | 
|----------|-------------|------|-----------|
| context | Indicates a list of app and component this config object is linked to.| [context](#context) | Yes |
| jsonData | Indicates the configuration in a valid JSON format.| List of [jsonData](#jsondata) objects | Yes |

### context  

This object contains the contexts information of the configuration. 

The following table lists the details of the context object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| app | Indicates the app such as entitysearch.| String  | Yes |
| service | Indicates the service in the app . | String | Yes |
| component | Indicates the component of the service. | String | Yes |
| subComponent | Indicates the subComponent of the component. | String | No |
| entityType | Indicates the entity type. | String | No |
| list | Indicates the list the configuration is linked to. | String | No |
| relationshipType | Indicates the relationship type. | String | No |
| role | Indicates the role the configuration is linked to. | String | No |
| user | Indicates the user the configuration is linked to. | String | No |

Data for sample [Scenario](#scenario): Set the following properties for the **context** object:

| Property | Value | 
|----------|-------------|
| app | entitysearch |
| service | searchdiscovery |
| component | searchresults |
| subComponent | datagrid |
| entityType | product |
| relationshipType | crossSell |
| role | _ALL |
| user | _ALL |

### jsonData

This object contains the details of configuration in a valid JSON format. Typically, the JSON data contains the following details:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| jsonData -> type | Indicates the type of json data. Possible value is "config". | String | Yes |
| jsonData -> config | Indicates the configuration data in a valid JSON format. | String | Yes |
| jsonData -> matchRules | Indicates an array of [Match Object Structure](api_match_object_structure.html). This is used only to specify the matching configuration. | [Match Object Structure](api_match_object_structure.html) | No |

This section also covers topics of the following object structures:

* [Profile Configuration Object Structure](api_profile_object_structure.html)
* [Match Configuration Object Structure](api_match_object_structure.html)
* [Machine-Learning (ML) based Match Object Structure](api_match_object_structure_ml.html)