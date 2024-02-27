---
title: Add Single Row to a Nested Attribute
permalink: api_app_update_entity_scenario5.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to add single row to a nested attribute using Entity App Service. 

## Scenario

Add a row under the "group" nested attribute "alternate vendor" for "SKU" entity "Polo Mens Shirt Red".

{% include snippets/header.html %}

## Request

To update the above entity, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:
  
* entity: In the [entity](api_entity_object_structure.html) object, provide the id, name and type. In the data object, add a row to the group nested attribute "alternate vendor". 

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
    <span style="background-color: #FFFF00">"id": "Polo Mens Shirt Red",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Red",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "Polo Mens Shirt Red",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"alternatevendor": {</span>
          <span style="background-color: #FFFF00">"group": [</span>
            {
              "vendorpartnumber": {
                "values": [
                  {
                    "value": "123",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "vendorid": {
                "values": [
                  {
                    "value": "VendorNo1",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "vendorcost": {
                "values": [
                  {
                    "value": "11.24",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "vendorname": {
                "values": [
                  {
                    "value": "Smart Apparels",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
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

If the entity update request is submitted successfully, then the following response is received from create entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "b45d35d0-2ebc-4ac0-9b0f-853bf3b6e636"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id Polo Mens Shirt Red. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "Polo Mens Shirt Red"
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