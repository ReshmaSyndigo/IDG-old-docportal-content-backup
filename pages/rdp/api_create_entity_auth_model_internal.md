---
title: Set Permissions using Authorization Model
sidebar: rdp_sidebar
permalink: api_create_entity_auth_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to set read, write,delete and owner permissions values using [Authorization Model](api_security_model.html):

* [Set Domain Permissions](api_create_data_model_scenario36.html)
* [Set Entity Type Permissions](api_create_data_model_scenario46.html)
* [Set User Role Mapping](api_create_data_model_scenario38.html)
* [Set Read Permission for Specific Attribute](api_create_data_model_scenario47.html)
* [Set Context Level Permissions](api_create_data_model_scenario39.html)
* [Set Authorization type - Accommodate/Reject](api_create_data_model_scenario40.html)
* [Set Write Permission for Specific Attribute](api_create_data_model_scenario41.html)
* [Set Owner Permission](api_create_data_model_scenario42.html)
* [Set OwnerEdit Permission](api_create_data_model_scenario49.html)
* [Set MultiValued Ownership Permission](api_create_data_model_scenario76.html)
* [Set Delete Permission](api_create_data_model_scenario43.html)
* [Get Nearest Matching Context from Authorization Model](api_create_data_model_scenario44.html)
* [Merge Permissions - Single User Multiple Roles](api_create_data_model_scenario45.html)
* [Set Read Permission for Specific Role in Locale](api_create_data_model_scenario65.html)
* [Set Read and Write Permissions for multiple Roles in different locales](api_create_data_model_scenario65_1.html)

## Request

POST {{site.data.rdp_glossary.createdatamodel}}

**Parameters**: The following table lists the parameters of the JSON request to create a data model:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entityModel | Yes | Indicates the details of the entity model to be created. See [Data Model Object Structure](api_security_model.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to set permissions to create new attributes for "SKU" entity type and "buyer" role at entity level only:

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    "id": "sku_entityAuthorizationModel_buyer",
    "name": "sku_entityAuthorizationModel_buyer",
    "type": "authorizationModel",
    "properties": {
      "writePermission": true,
      "readPermission": true,
      "deletePermission": true,
      "attributesPermission": [
        {
          "writePermission": true,
          "readPermission": true,
          "deletePermission": true
        }
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
        "requestId": "b7ceaa86-f68f-4808-8da3-f4a966faff77"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "message": "Entity has been submitted for create with entity Id : sku_entityAuthorizationModel_buyer. Please check back after 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre> 

Verify the created data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* After creating the model, the users with "buyer" role can create new attributes at entity level.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.