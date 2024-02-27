---
title: Update an Entity
sidebar: rdp_sidebar
permalink: api_app_update_entity.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to update an entity using Entity App Service:

* [Add New Attribute](api_app_update_entity_scenario1.html)
* [Add Attribute Value](api_app_update_entity_scenario2.html)
* [Add Attribute Value with UOM](api_app_update_entity_scenario3.html)
* [Add a Reference Attribute in a Specific Context](api_app_update_entity_scenario4.html)
* [Add Multiple Attributes in Multiple Contexts](api_app_update_entity_scenario8.html)
* [Add Single Row to a Nested Attribute](api_app_update_entity_scenario5.html)
* [Add New Relationship](api_app_update_entity_scenario6.html)
* [Add Relationship in Multiple Contexts](api_app_update_entity_scenario7.html)
* [Update an entity with Deeply Nested Attribute (DNA) values](api_updt_dna_entities.html)

## Request

POST {{site.data.rdp_glossary.appupdateentity}}

**Parameters**: The following table lists the parameters of the JSON request to Update an entity:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entity | Yes | Indicates the details of the entity object to be updated. See [Entity App Service Object Structure](api_entity_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response or not.|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |
|response|totalRecords|Indicates the list of entity objects that matched the search criteria.|

## Example

The following example demonstrates a sample request and response to add new attributes "cost" and "size" to a "SKU" entity "PeterShirts" in country "Germany".

To update the above entity, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:
  
* entity: In the [entity](api_entity_object_structure.html) object, provide the id, name and type. In the attributes, include the details about the attributes "cost" and "size" with its value:

<pre><code>
POST **{{site.data.rdp_glossary.appupdateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    "id": "PeterShirts",
    "name": "PeterShirts",
    "type": "sku",
    "data": {
      "contexts": [
        {
          "context": {
            "country": "Germany"
          },
          "attributes": {
            "cost": {
              "values": [
                {
                  "value": "15",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "value": "L",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          }
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
        "requestId": "5b847ee6-ee6f-4b79-b489-7bfd98aef6d4"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "messages": [
                {
                    "messageCode": "I0013",
                    "message": "Entity has been submitted for update with entity Id : PeterShirts. Please check back after 1 min",
                    "messageType": "success"
                }
            ]
        },
        "totalRecords": 0
    }
}
</code></pre>

Verify the updated entity:<br>
If you know the details of your elastic server and the indices, then you can verify the created entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.