---
title: "Add Attribute Value with UOM"
sidebar: rdp_sidebar
permalink: api_app_update_entity_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to update attribute value with UOM, using a scenario.

## Scenario

To update attribute "length" with UOM "centimeters", from "34.33" to "31.45" in "SKU" entity "Polo Mens Shirt Green_Large".

{% include snippets/header.html %}

## Request

To update the above entity, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:
 
* entity: In the [entity](api_entity_object_structure.html) object, provide the id, name and type. In the data object, include the details about the UOM attribute "length" with its udpated value: 

<pre>
<code>
POST **{{site.data.rdp_glossary.appupdateentity}}**
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
        <span style="background-color: #FFFF00">"length": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "31.45",</span>
              <span style="background-color: #FFFF00">"uom": "in",</span>
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

If the entity update request is submitted successfully, then the following response is received from update entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "dcf46190-88e9-4840-94c7-bc9f23eb555c"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id e3. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "e3"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the updated entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the updated entity. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.