---
title: Create Entity with Nested Attributes
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario4.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with a nested attribute, using a scenario. 

## Scenario

Create "SKU" entity "Polo Mens Shirt Red" with nested attribute "alternatevendor". This nested attribute consists of "vendorpartnumber","vendorid","vendorcost" and "vendorname" simple attributes.

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the nested attribute "alternatevendor" inside the data object.

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
    <span style="background-color: #FFFF00">"id": "e4",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Red",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"alternatevendor": {</span>
          "group": [
            {
              <span style="background-color: #FFFF00">"vendorpartnumber": {</span>
                "values": [
                  {
                    "value": "Vendor1",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"vendorid": {</span>
                "values": [
                  {
                    "value": "N123",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"vendorcost": {</span>
                "values": [
                  {
                    "value": "11.24",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"vendorname": {</span>
                "values": [
                  {
                    "value": "Smart Apparels",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              }
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
    "requestId": "a32397e4-d641-4143-a3c5-db21e44b7c05"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id e4. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "e4"
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