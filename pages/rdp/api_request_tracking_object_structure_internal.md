---
title: Request Tracking Object Structure
sidebar: rdp_sidebar
permalink: api_request_tracking_object_structure.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

A Request Tracking Object in Riversand Platform is a JSON structure that details about the request data such as its attributes and values. There are two types of request tracking objects - "requestobject" and "tasksummaryobject":

* requestobject: Used to track requests for operations performed on single entity.
* tasksummaryobject: Used to track requests for operations performed on bulk entities.

<br/>
This topic describes the request tracking object structure using a sample scenario. 

## Scenario 

Consider that you wish to create a "tasksummaryobject" to track the status of entities imported into the system. The following JSON demonstrates a sample JSON request to track the status of 50 entities imported into the system:

<pre>
<code>
{
  "requestObject": {
    "id": "tsk_summary_object",
    "name": "tsk_summary_object",
    "type": "tasksummaryobject",
    "data": {
      "attributes": {
        "totalRecords": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "a7afc530-5e65-4ead-a73f-a8d8b6ef0572",
              "value": 50
            }
          ]
        },
        "status": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "8c1613a7-fbdb-476b-a0d4-a7051ac1870a",
              "value": "Queued"
            }
          ]
        },
        "taskId": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "5b937027-637d-40e0-8f86-8abc79042b8e",
              "value": "testtasksummary"
            }
          ]
        },
        "taskType": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "3d6365d8-c182-47d9-86a9-73dbb56f36e3",
              "value": "ENTITY_IMPORT"
            }
          ]
        },
        "submittedBy": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "26b9f74c-d1ed-47cf-afda-683da900137a",
              "value": "test@riversand.com"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## requestObject

This object contains information regarding the request details for the request tracking object. The following table lists the details of the requestObject:

| Property | Description | Type |
|----------|-------------|------|
| id | Indicates the unique identifier of the request tracking object. | String |
| name | Indicates the name of the request tracking object. | String |
| type | Indicates the type of the request tracking object. Possible values are - requestobject, requestorequestsObject and tasksummaryobject. | String |
| data | Indicates an array of [attributes](#attributes) details for the request tracking object. | List of [data](#data) objects |

Data for Sample [Scenario](#scenario): Set the following properties for **requestObject** object:

| Property | Description | 
|----------|-------------|
| id | tsk_summary_object |
| name | tsk_summary_object |
| type | tasksummaryobject |

## data

This object contains the attribute details of the request object. The following table lists the details of the data object:

| Property | Description | Type |
|----------|-------------|------|
| attributes | Indicates the attributes that defines the request tracking object. | List of [attributes](#attributes) objects |

## attributes

This object contains the attribute details of the request tracking object. The following table lists different attributes of the request tracking object which provides you more details on the tracking of this request:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates an array of attributes. | List of [values](#values) | 

## values 

This object contains the source, locale, id, and values of specific attributes. The following table lists the details of the values object:

| Property | Description | Type | 
|----------|-------------|------|
| source | Indicates the source of attribute. | String |
| locale | Indicates the locale for the attribute. | String | 
| id | Indicates the unique identifier of the attribute. | String |
| value | Indicates the actual attribute value. | String | 

The following table lists the attribute values defined in the [sample scenario](#scenario):

| Property | Value | 
|----------|-------------|
| totalRecords | 50 |
| status | Queued |
| taskId | testtasksummary |
| taskType | ENTITY_IMPORT |
| submittedBy | test@riversand.com |