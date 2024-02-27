---
title: Generic Object Structure
sidebar: rdp_sidebar
permalink: api_gen_object_structure.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

A Generic Object in Riversand Platform is a JSON structure that contains all the details of the generic objects. Broadly, a generic object contains the following sub-objects:

* [Request Level Attributes](#request-level-attributes): Contains attributes required for processing the request.
* [params](#params): Contains any additional parameters required for processing data in the request.
* [genericObject](#genericobject): Contains all the required information of a generic object.
* [properties](#properties): Contains the audit information of a generic object such as createdBy and modifiedBy.
* [data](#data): Contains an array of [attributes](#attributes) details of a generic object which further details about the data objects and the tasks for which the current generic object is created. <br />

This topic describes the generic object structure using a sample scenario. 

## Scenario

Consider that you have the requirement to refresh the "product" title for the "sku" entities when the match configurations - "sku_ischildof_product" and "sku_product_Rollup" are satisfied. As it involves processing of larger entities, the generic objects are created to handle this request. The following example demonstrates the sample JSON format that creates the generic object:

<pre><code>
{
  "genericObject": {
    "id": "genericObjectContentGeneration",
    "name": "Generic Objects for Content Generation",
    "type": "genericobject",
    "properties": {
      "createdService": "genericObjectManageService",
      "createdBy": "system_user",
      "modifiedService": "genericObjectManageService",
      "modifiedBy": "system_user",
      "createdDate": "2018-03-19T01:14:52.108-0500",
      "modifiedDate": "2018-03-19T01:14:52.108-0500"
    },
    "data": {
      "attributes": {
        "dataObjectId": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "2be127f2-6cf9-4dad-8ffe-6544342b15dc",
              "value": "Title_Generation_Sku"
            }
          ]
        },
        "dataObjectType": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "135f1b08-bd65-4ad3-b519-46ed593d5a5e",
              "value": "sku"
            }
          ]
        },
        "taskType": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "9c30bb7d-07bb-42ac-8204-0eabfd7eec2a",
              "value": "RefreshProductTitle"
            }
          ]
        },
        "graphprocessconfig": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "c9657a0f-05f4-49cf-a371-09c1e5548fe0",
              "value": "product_sku_contentGeneration"
            }
          ]
        },
        "status": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "58c61f20-84c3-4081-a9c9-738fd3620aae",
              "value": "QUEUED"
            }
          ]
        }
      }
    }
  }
}
</code></pre>

The following section describes the properties of the generic object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set the data for the [sample scenario](#scenario).

{% include snippets/paramsOthers.md %}

## genericObject

This object is the parent container that holds all the required information about a generic object. The following table lists the details of the generic object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| id | Indicates the unique identifier of the generic object. | String | Yes |
| name | Indicates the name of the generic object. Name can contain underscore(_), spaces, and alpha-numeric with a maximum length of 256 characters. Name can be duplicate. | String | Yes |
| type | Indicates the type of generic object. The "type" is based on type of the requests. For example, for scheduled bulk requests, the type of the generic object can be defined as "scheduledrequestobject". | String | Yes |
| properties | Indicates the properties of the generic object. Properties must be used to store simple name-value pairs, where the values are **Absolute** and **do not change with context**. | [properties](#properties) | No |
| data | Indicates the section for all business data. | [data](#data) | No |

Data for sample [Scenario](#scenario): The following properties are set for the generic object:

| Property | Value | 
|----------|-------------|
| id | genericObjectContentGeneration |
| name | Generic Objects for Content Generation |
| type | scheduledrequestobject |

The following sections describe how to set the values for [properties](#properties) and [data](#data) objects.

## properties  

This object stores the audit information of the generic object such as createdBy and modifiedBy. The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------|----------| 
| createdByService | Indicates the name of the service that created this object. | String | No |
| createdBy | Indicates the user who created this object. | String | No |
| createdDate | Indicates the date and time when the object was created. | String | No |
| modifiedByService | Indicates the name of the service that was used to last update this object. | String | No |
| modifiedBy | Indicates the user who last updated the object. | String | No |
| modifiedDate | Indicates the date and time when the object was last updated. | String | No |

Data for sample [Scenario](#scenario): The following properties are set for the **properties** object:

| Property | Value | 
|----------|-------|
| createdByService | genericObjectManageService |
| createdBy | system_user |
| createdDate | 2018-03-19T01:14:52.108-0500 |
| modifiedService | genericObjectManageService |
| modifiedBy | system |
| modifiedDate | 2018-03-19T01:14:52.108-0500 |

## data  

This object contains the configurable data of the generic object. The following table lists the details of the data object:

| Property | Description | Type | Required |
|----------|-------------|------|---------- |
| [attributes](#attributes) | Indicates an array of attributes of a generic object.| [attributes](#attributes) object | Yes |

### attributes  

This object contains the details of attributes of a generic object. Based on the business requirements for which the generic objects are created, it can have various attributes. For example, if the generic object object is performing any of the content generation tasks, the created generic object can have "graphprocessconfig" attribute that details about the graph configuration. This is demonstrated in the above [Scenario](#scenario). The following table lists most of the attributes a generic object will have:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| [dataObjectId](#dataobjjectid) | Indicates the unique identifier of the data object. This object contains the attributes for the "dataObjectId". | dataObjectId](#dataobjjectid) | No |
| [dataObjectType](#dataobjecttype) | Indicates the type of the data object. It can have the values as entities, models, events, or configs. This object contains the attributes for the "dataObjectType". | [dataObjectType](#dataobjecttype)| No |
| [taskType](#tasktype) | Indicates type of the task the intended service is going to perform on the current generic object. This object contains the attributes for the "taskType".| [taskType](#tasktype) | No |
| [graphprocessconfig](#graphprocessconfig) | Indicates the graph configuration used for processing current task the generic object is performing. This object contains the attributes for the "graphprocessconfig". | [graphprocessconfig](#graphprocessconfig) | No|
| [status](#status) | Indicates the status of the current generic object. This object contains the attributes for the "status". | [status](#status) | No |

### dataObjectId

This object contains the details for the "dataObjectId" that uniquely identifies the data object. The data object can be entities, models, events, or configs. The generic objects can be created for any of these data objects based on the business requirements. The following table lists the details of the dataObjectId object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<values>> -> locale | Indicates the locale for the dataObjectId. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. | String | No |
| <<values>> -> source | Indicates the source for the dataObjectId. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. |String | No |
| <<values>> -> id | Indicates the identifier for the dataObjectId.|String | No |
| <<values>> -> value | Indicates the unique identifier of data object for which the current generic object is created. |String | Yes|

Data for sample [Scenario](#scenario): Following properties are set for the **dataObjectId** object:

| Property | Value | 
|----------|-------|
| locale | en-US |
| source | internal |
| id | 2be127f2-6cf9-4dad-8ffe-6544342b15dc |
| value | Title_Generation_Sku |

### dataObjectType

This object contains the details of the type of the data object. The data object can be entities, models, events, or configs. The generic objects can be created for any of these data objects based on the business requirements. The following table lists the details of the dataObjectType object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<values>> -> locale | Indicates the locale for the dataObjectType. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. |String | No |
| <<values>> -> source | Indicates the source for the dataObjectType. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. |String | No |
| <<values>> -> id | Indicates the identifier for the dataObjectType.|String | Yes |
| <<values>> -> value | Indicates the type of the data object for which the current generic object is created. |String | Yes|

Data for sample [Scenario](#scenario): As the generic objects created for the "sku" entities in the current scenario, the following properties are set for the **dataObjectType** object:

| Property | Value | 
|----------|-------|
| locale | en-US |
| source | internal |
| id | 135f1b08-bd65-4ad3-b519-46ed593d5a5e |
| value | sku |

### taskType

This object contains the details of the task the intended service is performs on the current generic object. The following table lists the details of the taskType object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<values>> -> locale | Indicates the locale for the taskType. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. |String | No |
| <<values>> -> source | Indicates the source for the taskType. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. |String | No |
| <<values>> -> id | Indicates the identifier for the taskType.|String | No |
| <<values>> -> value | Indicates the type of the task the intended service is going to perform on the current generic object. |String | Yes|

Data for sample [Scenario](#scenario): As the generic objects are created for refreshing  the "product" title in the current scenario, the following properties are set for the **taskType** object:

| Property | Value | 
|----------|-------|
| locale | en-US |
| source | internal |
| id | 90708a57-881b-4252-b248-f9606be13483 |
| value | RefreshProductTitle |


### graphprocessconfig

This object contains the details of the graph configuration used for processing current task the generic object is performing. The following table lists the details of the graphprocessconfig object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<values>> -> locale | Indicates the locale for the graphprocessconfig. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. |String | No |
| <<values>> -> source | Indicates the source for the graphprocessconfig. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. |String | No |
| <<values>> -> id | Indicates the identifier for the graphprocessconfig.|String | No |
| <<values>> -> value | Indicates the graph configuration used for processing current task the generic object is performing. |String | Yes| 

Data for sample [Scenario](#scenario): The following properties are set for the **graphprocessconfig** object:

| Property | Value | 
|----------|-------|
| locale | en-US |
| source | internal |
| id | c9657a0f-05f4-49cf-a371-09c1e5548fe0 |
| value | product_sku_contentGeneration |

### status

This object contains the details of the current status of the the current generic object. The following table lists the details of the status object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<values>> -> locale | Indicates the locale for the status. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration. |String | No |
| <<values>> -> source | Indicates the source for the status. If the generic object is created internally by the Riversand Platform, its value is set to default values that is configured for the tenant; Otherwise, you can set its value based on the tenant configuration.|String | No |
| <<values>> -> id | Indicates the identifier for the status.|String | Yes |
| <<values>> -> value | Indicates the current status of the generic object. |String | Yes|

Data for sample [Scenario](#scenario): The following properties are set for the **status** object:

| Property | Value | 
|----------|-------|
| locale | en-US |
| source | internal |
| id | 58c61f20-84c3-4081-a9c9-738fd3620aae |
| value | QUEUED |