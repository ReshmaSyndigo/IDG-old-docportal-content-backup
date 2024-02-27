---
title: "Create Entity with Attributes"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with some attributes, using a scenario. 

## Scenario

Create "SKU" entity "Polo Mens Shirt Blue_Large" with few attributes. 

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API **{{site.data.rdp_glossary.appcreateentity}}**. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide the id, name and type. Include the details of the attributes inside the data object.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "e2",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Blue_Large",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"mdmid": {</span>
          "values": [
            {
              "value": "PB_L",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"mdmname": {</span>
          "values": [
            {
              "value": "Polo Blue",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"description": {</span>
          "values": [
            {
              "value": "100% Cotton",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"color": {</span>
          "values": [
            {
              "value": "Blue",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"size": {</span>
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
  }
}
</code>
</pre> 

## Response

If the entity create request is submitted successfully, then the following response is received from create entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "072efbdc-d232-4195-8b41-e40538e5c3da"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id e2. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "e2"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.