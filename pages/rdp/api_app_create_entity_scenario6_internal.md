---
title: "Create Entity with Relationship"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario6.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with relationships, using a scenario. A few examples of relationships between entities are:

| Relationship Type | From Entity |  To Entity |
|----|---------------|--------------|
| isChildOf | SKU| Product | 
| hasImages | SKU  | Images | 
| hasDocuments | SKU | Documents | 
| hasvideos | SKU | Videos | 

## Scenario

Create relationship "isChildOf"  between "SKU" entity "Polo Mens Shirt White_Large" and "Product" entity "PoloMensShirt".

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the "ischildof" relationship inside the data object.

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
    <span style="background-color: #FFFF00">"id": "PoloWhite_Large",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt White_Large",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "PW_L",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "Polo White_Large",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            "id": "PoloWhite_Large_Rel1",
            "relationshipType": "composition",
            "relTo": {
              "id": "PoloMensShirt",
              "type": "product"
            }
          }
        ]
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
    "requestId": "f3331415-c671-4f81-9992-3e0adb572ebf"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id PoloWhite_Large. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "PoloWhite_Large"
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