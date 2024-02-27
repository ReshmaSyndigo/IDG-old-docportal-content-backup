---
title: Delete Binary Stream Object
sidebar: rdp_sidebar
permalink: api_delete_binary_stream_object.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete a binary stream object:

* [Delete Binary Stream Object using Id](api_delete_binary_stream_scenario1.html)

{% include snippets/header.html %}

{% include callout.html content="**Note**: Currently, this API deletes only the binary stream object details in Riversand Platform. The actual asset in the external storage is not deleted.
" type="primary" %}

## Request

POST {{site.data.rdp_glossary.deletebinarystream}}

**Parameters**: The following table lists the parameters of the JSON request to delete a binary stream object:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | binaryStreamObject | Yes | Indicates the details of the data to be deleted. See [Binary Stream Object Structure](api_binary_stream_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates the sample JSON format to delete a binary stream object of an image entity:

<pre><code>
POST **{{site.data.rdp_glossary.deletebinarystream}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    "id": "toteBag@_@guid.png",
    "type": "binarystreamobject"
  }
}
</code></pre>

**Response**:

<pre><code>
{
    "request": {
        "returnRequest": false,
        "params": {},
        "requestId": "61bc2bfc-3a3c-4fdc-97a6-8cacc8aefbc6"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "message": "Entity has been submitted for delete with entity Id : toteBag@_@guid.png. Please check back after 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre>

Verify the deleted binary stream object:
* You can use {{site.data.rdp_glossary.getbinarystream}} API to verify the deleted binary stream object. See [Get Binary Stream Object](api_get_binary_stream_object.html)
* If you know the details of your elastic server and the indices, then you can verify the deleted binary stream object using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.