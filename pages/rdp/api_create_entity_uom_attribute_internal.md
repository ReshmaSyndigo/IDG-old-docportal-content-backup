---
title: Create Entity with UOM Attribute
sidebar: rdp_sidebar
permalink: api_create_entity_uom_attribute.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can create an entity with UOM Attribute by using the **{{site.data.rdp_glossary.createdatamodel}}** RESTful API. 

## Scenario

Consider you wish to create an entity "Pierrian HandBag" with "Bag Weight" attribute, "Value" of "500", and UOM "gm".

{% include snippets/header.html %}

## Request

To create an entity with UOM Attribute, use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
* value: Indicates the value of the UOM.
  
<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "Pierrian HandBag",
    "name": "Pierrian HandBag",
    "type": "sku",
    "data": {
      "attributes": {
        "bagweight": {
          "values": [
            {
              "value": 500,
              "uom": "gm",
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

Upon successfully submitting the request, the following response is received from the API:

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "requestId": "9fea8f4d-fc54-462b-8c76-d8bad6aec51e"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "messages": [
                {
                    "messageCode": "I0011",
                    "message": "Submitted sku for create with Id Pierrian HandBag. Check after some time",
                    "messageType": "success",
                    "messageParams": [
                        "sku",
                        "create",
                        "Pierrian HandBag"
                    ]
                }
            ]
        },
        "totalRecords": 0
    }
}
</code>
</pre>

Verify the created entity with UOM attribute:
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created UOM Type. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.