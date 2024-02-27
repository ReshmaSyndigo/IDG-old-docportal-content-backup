---
title: Entity Import Object Structure
sidebar: rdp_sidebar
permalink: api_imp_entity_object_structure.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

An Entity Import Object in Riversand Platform is a JSON structure that details about offline data that is imported into Riversand Platform. An entity import object is for importing the data and contains the following sub-objects:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| id | Indicates the Identifier for this import service.| String | Yes |
| dataObjectInfo | Indicates the type format of the data that is uploaded. | List of [dataObjectInfo](#dataobjectinfo) | Yes |
| properties | Indicates audit information of the imported data such as createdDate and modifiedDate. | [properties](#properties) | Yes |
| data | Indicates the section for specifying the binary object blob.| [data](#data) | Yes |

This topic describes an Entity Import Object structure using a sample scenario. 

## Scenario 

Consider that you wish to transform the uploaded data into entity json.

<pre><code>

 {
 "dataObject": {
    "id": "9b155bf0-0f2e-11e7-be23-5bce07cdca32",
    "dataObjectInfo": {
      "dataObjectType": "excelfile"
    },
    "properties": {
      "createdByService": "user interface",
      "createdBy": "user",
      "createdDate": "2016-07-16T18:33:52.412-07:00",
      "fileId" : "p007",
      "filename": "Product Data Load.xlsx",
      "encoding": "Base64",
      "service": "MODEL_IMPORT",
      "channel": "UI",
      "format": "Excel",
      "source": "internal",
      "subtype": "system",
      "order":"10",
      "workAutomationId": ""
    },
    "data": {
      "blob": "ew0KICAgImlkIjogIjEiLA"
    }
  }
}

</code></pre>

This topic describes the properties of the entity import object using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object.
* Using the properties how you can set data for the [sample Scenario](#scenario).

### dataObjectInfo

This object contains type format of the imported data. The following table lists the details of the dataObjectInfo:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| dataObjectType | Indicates the type of the uploaded data. | String | Yes |

Data for sample [Scenario](#scenario): Set the following properties for the **id** and **dataObjectInfo** object:

| Property | Description | 
|----------|-------------|
| id | 9b155bf0-0f2e-11e7-be23-5bce07cdca32 |
| <<dataObjectInfo>> -> dataObjectType | dataObjectInfo -> excelfile |

### properties

This object stores the configuration information based on which the corresponding profile is fetched internally. The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------|-----------|
| createdByService | Indicates the name of the service that created this object. | String | No |
| createdBy | Indicates the user who created this object. | String | No |
| createdDate | Indicates the date and time when the object was created. | String | No |
| fileId | Indicates the identifier of the file. | String | No | 
| filename | Indicates the name of the file from where the data is imported. | String | Yes |
| encoding | Indicates the type of the encoding. | String | Yes |
| service | Indicates the operation "this" profile performs. The allowed values are ENTITY_IMPORT, MODEL_IMPORT, and MACRO_TEMPLATE.| String | Yes | 
| channel | Indicates the channel from where the profile reads. The allowed values are S3, Kinesis, and UI. | String | Yes |
| format | Indicates the format of the profile. The allowed values are JSON and Excel. | String | Yes |
| source | Indicates the source of the data. This source can be external data provider or internal system of the data origin. The allowed values are internal and external. | String | Yes |
| subtype | Indicates the type of task a profile performs. At present, the only allowed value is system.|String | No |
| order | Indicates the selection order based on which the corresponding profile is selected by the UI code logic. | Number | Yes |
| workAutomationId | Indicates the file ID of the file to be uploaded, saved in the form of binary object. With this ID given, there is no need to upload the file. Based on the provided work automation ID, import service gets the file to be uploaded from the binary object. | String | No |

Data for sample [Scenario](#scenario): Set the following properties for the **properties** object:

| Property | Value | 
|----------|-------|
| createdByService | user interface |
| createdBy | user |
| createdDate | 2016-07-16T18:33:52.412-07:00 |
| fileId | p007 |
| filename | Product Data Load.xlsx |
| encoding | UTF-8 |
| service | MODEL_IMPORT|
| channel|UI|
| format| Excel|
| source|internal|
| subtype | system|
| order|10|
| workAutomationId| ""|

### data

This object stores the uploaded file contents in the given encoded format. The following table lists the details of the data:

| Property | Description | Type | Required |
|----------|-------------|------|---------- |
| blob | Indicates the actual data which is in encoded in the given encoded format from the sender.| blob | Yes |

Data for sample [Scenario](#scenario): Set the following properties for the **data** object:

| Property | Value | 
|----------|-------|
| blob | ew0KICAgImlkIjogIjEiLA |