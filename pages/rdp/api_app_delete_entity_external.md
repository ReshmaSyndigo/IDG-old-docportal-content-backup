---
title: Delete an Entity
sidebar: rdp_sidebar
permalink: api_app_delete_entity.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete an entity:

* [Delete Entity](api_app_delete_entity_scenario1.html)
* [Delete Attribute](api_app_delete_entity_scenario2.html)
* [Delete UOM Attribute](api_app_delete_entity_scenario3.html)
* [Delete Nested Attribute](api_app_delete_entity_scenario4.html)
* [Delete Relationship Attribute](api_app_delete_entity_scenario5.html)
* [Delete Relationship](api_app_delete_entity_scenario6.html)
* [Delete Attribute from a Context](api_app_delete_entity_scenario7.html)
* [Delete Enhancer Attribute from a Context](api_app_delete_entity_scenario8.html)
* [Delete Deeply Nested Attribute (DNA) from an Entity](api_del_dna_entities.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.appdeleteentity}}

**Parameters**: The following table lists the parameters of the JSON request to delete an entity:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entity | Yes | Indicates the details of the entity object to be deleted. See [Entity Object Structure](api_entity_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to delete a "Product" entity "Men's Ties".

<pre>
<code>
POST **{{site.data.rdp_glossary.appdeleteentity}}**
Headers: Content-Type: application/json
Body:
{  
   "clientId": "someguid",
   "clientState": {
      "someJson": {}
    },
    "entity": {
    	<span style="background-color: #FFFF00">"id":"Men's Ties",</span>
        <span style="background-color: #FFFF00">"type": "product"</span>
    }
}
</code>
</pre>

**Response**:
<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "9f56f3a9-b51f-4ff4-8e1e-2e5cffb369d2"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "messages": [
                {
                    "messageCode": "I0015",
                    "message": "Entity has been submitted for delete with entity Id : Men's Ties. Please check back after 1min",
                    "messageType": "success"
                }
            ]
        },
        "totalRecords": 0
    }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.