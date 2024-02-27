---
title: Get Binary Stream Object
sidebar: rdp_sidebar
permalink: api_get_binary_stream_object.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get binary stream object details:

* [Get Binary Stream Object using Id](api_get_binary_stream_scenario1.html)
* [Get Metadata Details of Image Thumbnail](api_get_metadata_image_thumbnail.html)
* [Get Metadata Details of Audio Thumbnail](api_get_metadata_audio_thumbnail.html)
* [Get Metadata Details of Document Thumbnail](api_get_metadata_document_thumbnail.html)
* [Get Metadata Details of Video Thumbnail](api_get_metadata_video_thumbnail.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.getbinarystream}}

**Parameters**: The following table lists the parameters of the JSON request to get binary stream object details:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting binary stream objects. |
| query | id  | No | Indicates binary stream object unique identifier. |
| query | ids  | No | Indicates an array of binary stream object unique identifiers. |
| query | filters -> typesCriterion | No | Indicates a comma separated list of binary stream object types. |
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. |
| options | options -> maxRecords | No | Indicates the number of records to be returned in the result. The maximum limit for records in one call is 2000. If this values is not passed in the request or the value is greater than 2000, then the default value of 2000 is considered.|

{% include callout.html content="**Notes**: 
* **_ALL** keyword can be substituted for individual records. Example: In typesCriterion, you can specify ALL or specific binary stream object type. 
* **_ALL** in the attributesCriterion fields implies all attributes that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | binaryStreamObjects | List of binary stream objects that matched the search criteria. See [Binary Stream Object Structure](api_binary_stream_object_structure.html), for more information. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of binary stream objects that matched the search criteria.|

## Example

The following example demonstrates a sample request and response to get the binary stream object details using Id:

<pre><code>
POST **{{site.data.rdp_glossary.getbinarystream}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
     "id":"69ef5e1c-7fc3-47cd-8d88-4254367292cb",
      "filters": {
        "typesCriterion": [
          "binarystreamobject"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code></pre>

**Response**: 
<pre><code>
{
    "request": {
        "returnRequest": false,
        "params": {},
        "requestId": "8fd0c052-e2b9-4423-82b6-b0909afae4f8",
        "maxRecords": 2000
    },
    "response": {
        "binaryStreamObjects": [
            {
                "id": "69ef5e1c-7fc3-47cd-8d88-4254367292cb",
                "type": "binarystreamobject",
                "properties": {
                    "objectKey": "0a34a62f-bc0f-4a0b-87ae-cf8c7fce6f3a.jpg",
                    "originalFileName": "237562634231_M_VA_SV_Black.jpg",
                    "fullObjectPath": "0a34a62f-bc0f-4a0b-87ae-cf8c7fce6f3a.jpg",
                    "contentSize": 93844,
                    "user": "dev1admin@riversand.com_user",
                    "role": "admin",
                    "binarystreamobjectid": "69ef5e1c-7fc3-47cd-8d88-4254367292cb",
                    "createdService": "binaryStreamObjectService",
                    "createdBy": "dev1admin@riversand.com_user",
                    "createdDate": "2018-09-12T05:22:34.871-0500",
                    "modifiedService": "binaryStreamObjectService",
                    "modifiedBy": "dev1admin@riversand.com_user",
                    "modifiedDate": "2018-09-12T05:22:34.871-0500"
                }
            }
        ],
        "status": "success",
        "totalRecords": 1
    }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.