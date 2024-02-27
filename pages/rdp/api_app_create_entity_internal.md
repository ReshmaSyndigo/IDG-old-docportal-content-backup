---
title: Create an Entity
sidebar: rdp_sidebar
permalink: api_app_create_entity.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create an entity:

* [Create Entity](api_app_create_entity_scenario1.html)
* [Create Entity with Attributes](api_app_create_entity_scenario2.html)
* [Create Entity with UOM Attributes](api_app_create_entity_scenario3.html)
* [Create Entity with Nested Attributes](api_app_create_entity_scenario4.html)
* [Create Entity with Reference Attribute](api_app_create_entity_scenario5.html)
* [Create Entity with Relationship](api_app_create_entity_scenario6.html)
* [Create Entity with Multiple Relationships](api_app_create_entity_scenario7.html)
* [Create Entity with Relationship and Relationship Attributes](api_app_create_entity_scenario8.html)
* [Create Entity linked to a Single Context](api_app_create_entity_scenario9.html)
* [Create Entity with Relationship in a Specific Context](api_app_create_entity_scenario10.html)
* [Create Entity with Relationship and Relationship Attributes linked to a Specific Context](api_app_create_entity_scenario11.html)
* [Create Entity with Relationship and Matching Relationship Attribute](api_app_create_entity_scenario11_1.html)
* [Create Entity with Nested Attributes having Multiple Rows](api_app_create_entity_scenario12.html)
* [Create Entity linked to Multiple Contexts](api_app_create_entity_scenario14.html)
* [Create Country with Allowed Locales](api_app_create_entity_scenario19.html)
* [Create Locale with Fallback Locales](api_app_create_entity_scenario20.html)
* [Set Attribute(s) Value as Null](api_app_create_entity_attr_null.html)
* [Create an Entity with Deeply Nested Attribute (DNA)](api_crt_dna_entities.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.appcreateentity}}

**Parameters**: The following table lists the parameters of the JSON request to create an entity:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entity | Yes | Indicates the details of the entity object to be created. See [Entity Object Structure](api_entity_object_structure.html), for more information. |

{% include callout.html content="**Note**: It is optional to specify the 'Id' in the entity object. System automatically generates a unique identifier if you do not specify 'Id'. 
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to create a "SKU" entity "Polo Mens Shirt Blue".

<pre><code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    "id": "",
    "name": "Polo Mens Shirt Blue",
    "type": "sku"
  }
}
</code></pre> 

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "ed5ea98b-6117-403a-9213-e2bb5279bfb0"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Entity has been submitted for create with entity Id : XjpN2mp_Q4WwuYdoSssHxw. Please check back after 1 min",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Entities](api_app_get_entity.html).
* If you know the details of your elastic server and the indices, then you can verify the created entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.