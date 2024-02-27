---
title: "Add New Attribute"
sidebar: rdp_sidebar
permalink: api_app_update_entity_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to add a new attribute to an entity, using a scenario.

## Scenario

To add value to attribute "cost" for "SKU" entity "Polo Mens Shirt Blue_Large".

{% include snippets/header.html %}

## Request

To update the above entity, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:

* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. In the data object, add value to attribute "cost".

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
              "value": "15",
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
    "requestId": "2e569801-81de-413a-af20-683a25b65e14"
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