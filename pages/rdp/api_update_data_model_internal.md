---
title: Update Data Model
sidebar: rdp_sidebar
permalink: api_update_data_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to update a data model:

* [Add New Attributes to Existing Manage Model](api_update_data_model_scenario1.html)
* [Add New Relationship to Existing Manage Model](api_update_data_model_scenario3.html)
* [Add New Relationship Attributes to Existing Manage Model](api_update_data_model_scenario4.html)
* [Delete Properties from an Existing Manage Model](api_update_data_model_scenario2.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.updatedatamodel}}

**Parameters**: The following table lists the parameters of the JSON request to update a data model:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entityModel | Yes | Indicates the details of the entity model details to be created. See [Data Model Object Structure](api_data_model_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to add a new attribute "productLongDescription" and delete the "groupName" property of "channeldescription" attribute from an existing "sku_entityManageModel":

<pre>
<code>
POST **{{site.data.rdp_glossary.updatedatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    "id": "sku_entityManageModel",
    "name": "sku_entityManageModel",
    "type": "entityManageModel",
    "data": {
      "contexts": [
        {
          "context": {
            "country": "Germany"
          },
          "attributes": {
            "productLongDescription": {
              "properties": {
                "externalName": "Product Long Description",
                "groupName": "Basic",
                "dataType": "string"
              }
            },
            "channeldescription": {
              "properties": {
                "externalName": "Channel Description",
                "groupName": "_DELETE",
                "dataType": "string"
              }
            }
          }
        }
      ]
    }
  }
}
</code>
</pre> 

**Response**:
<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "b8b9f268-30f5-49e3-ac20-5534d4d0bd5f"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for update with entity Id : sku_entityManageModel. Please check back after 1 min"
    }
  }
}
</code>
</pre>

Verify the updated data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the updated model. See [Get Data Model](api_get_data_model.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.