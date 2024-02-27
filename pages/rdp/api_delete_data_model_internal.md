---
title: Delete Data Model
sidebar: rdp_sidebar
permalink: api_delete_data_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete a data model:

* [Delete Data Model using Id](api_delete_data_model_scenario1.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.deletedatamodel}}

**Parameters**: The following table lists the parameters of the JSON request to delete a data model:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entityModel | Yes | Indicates the details of the data to be deleted. See [Data Model Object Structure](api_data_model_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates the sample JSON format to delete a manage model of a "SKU" entity:

<pre><code>
POST **{{site.data.rdp_glossary.deletedatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    "id": "sku_entityManageModel",
    "type": "entityManageModel"
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
            "message": "Entity has been submitted for delete with entity Id : sku_entityManageModel. Please check back after 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre>

Verify the deleted data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the deleted deleted data model object. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the deleted data model object using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.