---
title: "Add Attribute Value"
sidebar: rdp_sidebar
permalink: api_app_update_entity_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to update attribute value, using a scenario. In this scenario, we are updating the "cost" attribute of the "SKU" entity "Polo Mens Shirt Blue_Large".

## Scenario

To update "cost" attribute value from "15" to "12" in "SKU" entity "Polo Mens Shirt Blue_Large".

{% include snippets/header.html %}

## Request

To update the entity, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:

* entity: In the [entity](api_entity_object_structure.html) object, provide the id, name and type. In the data object, update the value of "cost" attribute.

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
    <span style="background-color: #FFFF00">"id": "e2",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Blue_Large",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"cost": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "12",</span>
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
    "requestId": "c5eaff9b-a39c-4ff5-a11e-baf4bd9a0c1d"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id e2. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "e2"
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