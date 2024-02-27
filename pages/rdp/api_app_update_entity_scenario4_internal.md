---
title: "Add a Reference Attribute in a Specific Context"
sidebar: rdp_sidebar
permalink: api_app_update_entity_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to add a reference attribute in a specific context.

## Scenario

To add value to reference attribute "color" for "sku" entity "MensShirt" in "Germany" context.

{% include snippets/header.html %}

## Request

To update the above entity, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type. 
* data : Provide the attribute details of the entity.
* contexts : Provide the primary context in which you wish to add the reference attribute. Here, reference attribute "color" with value "red" is added in "Germany" context.

<pre>
<code>
POST **{{site.data.rdp_glossary.appupdateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "MensShirt",</span>
    <span style="background-color: #FFFF00">"name": "MensShirt",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "PG_XL",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "Polo Red",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Germany"</span>
          },
          <span style="background-color: #FFFF00">"attributes": {</span>
            <span style="background-color: #FFFF00">"color": {</span>
              "values": [
                {
                  <span style="background-color: #FFFF00">"value": "red",</span>
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
</code>
</pre>

## Response

If the entity update request is submitted successfully, then the following response is received from update entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "60b9b918-3bf4-4568-ba70-59ae83ff6c93"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id MensShirt. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "MensShirt"
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