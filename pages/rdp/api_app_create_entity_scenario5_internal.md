---
title: "Create Entity with Reference Attribute"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario5.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with a reference attribute, using a scenario. 

## Scenario

Create "Product" entity "Polo Ties" with reference attribute "color". 

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id,name and type. Include the details of the reference attribute "color" inside the data object.

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
    <span style="background-color: #FFFF00">"id": "PoloTies",</span>
    <span style="background-color: #FFFF00">"name": "Polo Ties",</span>
    <span style="background-color: #FFFF00">"type": "product",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "PT",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"color": {</span>
          "values": [
            {
              "value": "red",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "black",
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
    "requestId": "d5f04bf3-5dc6-4057-9938-b5183118fa2f"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted product for create with Id PoloTies. Check after some time",
          "messageType": "success",
          "messageParams": [
            "product",
            "create",
            "PoloTies"
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