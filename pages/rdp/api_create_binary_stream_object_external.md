---
title: Create Binary Stream Object
sidebar: rdp_sidebar
permalink: api_create_binary_stream_object.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create a binary stream object after uploading the image to external storage:

* [Create Binary Stream Object after Uploading Image](api_create_binary_stream_scenario1.html)
* [Create Binary Stream Object after Uploading Video](api_create_binary_stream_scenario2.html)

<br>

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.createbinarystream}}

**Parameters**: The following table lists the parameters of the JSON request to create a binary stream object:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | binaryStreamObject | Yes | Indicates the details of the binary stream object to be created. See [Binary Stream Object Structure](api_create_binary_stream_object.html), for more information. |

{% include callout.html content="**Notes**:<br/>
* It is optional to specify the 'Id' in the binary stream object. System automatically generates a unique identifier if you do not specify 'Id'. However, if you specify 'Id', it is recommended to provide a Globally Unique Identifier (GUID) and to ensure that it is unique. System verifies if the 'Id' already exists and returns appropriate response back.
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates the sample JSON format to create a binary stream object for an image entity:

<pre><code>
POST **{{site.data.rdp_glossary.createbinarystream}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    "id": "guid",
    "type": "binarystreamobject",
    "properties": {
      "objectKey": "rdp/binarystreamobject/assets/abc@_@guid.jpg",
      "originalFileName": "abc.jpg",
      "user": "dev1admin@riversand.com",
      "role": "admin",
      "ownershipData": "Nike"
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
    "requestId": "2adb0e8f-eaa5-483b-be28-9311b076203c"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : guid. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created binary stream object:
* You can use {{site.data.rdp_glossary.getbinarystream}} API to verify the created binary stream object. See [Get Binary Stream Object](api_get_binary_stream_object.html)
* If you know the details of your elastic server and the indices, then you can verify the created binary stream object using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.