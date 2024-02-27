---
title: "Create Entity with UOM Attributes"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with UOM attributes, using a scenario. 

## Scenario

Create "SKU" entity "Polo Mens Shirt Green_Large" with attributes "width" and "length" with UOM "centimeters". 

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide the id, name and type. Include the details of the UOM attributes "width" and "length" inside the data object.

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
    <span style="background-color: #FFFF00">"id": "e3",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Green_Large",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "PG_L",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"width": {</span>
          "values": [
            {
              "value": "20.33",
              "uom": "cm",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"length": {</span>
          "values": [
            {
              "value": "34.33",
              "uom": "cm",
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
    "requestId": "c8950837-d163-4cd4-81af-bba289d7e996"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id e3. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "e3"
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