---
title: Process an Entity
sidebar: rdp_sidebar
permalink: api_app_process_entity.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create or update an entity using Entity App Service:

* [Create Entity with Unique mdmid](api_app_process_entity_scenario1.html)
* [Create Entity with Duplicate mdmid](api_app_process_entity_scenario2.html)

{% if site.build == "internal" %}
{% include callout.html content="**Note**: 
* Unlike 'Create' and 'Update' API, 'Process' API invokes [Match Services](api_match_service.html). It performs the match on the entities you submitted for creation. If it 'finds' a match, it updates that entity with submitted data and does not create the entity. Hence, if you use this API to create an entity, entities are created only once. 
* The 'match' it performs is based on the 'match configuration'. Refer [Create Match Configurations](api_create_configuration.html) for defining the match sequences.
" type="primary" %}
{% endif %}

{% if site.build == "external" %}
{% include callout.html content="**Note**: 
* Unlike 'Create' and 'Update' API, 'Process' API invokes [Match Services](api_match_service.html). It performs the match on the entities you submitted for creation. If it 'finds' a match, it updates that entity with submitted data and does not create the entity. Hence, if you use this API to create an entity, entities are created only once. 
* The 'match' it performs is based on the 'match configuration'.
" type="primary" %}
{% endif %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.appprocessentity}}

**Parameters**: The following table lists the parameters of the JSON request to create an entity:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
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
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "E01",
    "name": "E01",
    "type": "sku",
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "E01"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "Entity"
            }
          ]
        },
        "height": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "144"
            }
          ]
        }
      }
    }
  }
}
</code></pre> 

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "54e773d4-d353-4628-bc75-9d636a2089ad"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Entity has been submitted for create with entity Id : E01. Please check back after 1 min",
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

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.