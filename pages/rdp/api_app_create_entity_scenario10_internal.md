---
title: "Create Entity with Relationship in a Specific Context"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario10.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with relationship linked to a specific context only, using a scenario.

## Scenario

To create "SKU" entity "Polo Mens Shirt Green_Large" in "Germany" context having "ischildof" relationship.

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type.
* data : Provide the attribute details of the entity. 
* contexts : Provide the context name you wish to link the entity with.
* relationships : Provide the relationship name and its details.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "e5",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Green_Large",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "PT_M",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "Polo Teal",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Polo Mens shirt Green - Large",
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
          <span style="background-color: #FFFF00">"relationships": {</span>
            <span style="background-color: #FFFF00">"ischildof": [</span>
              {
                "id": "Rel01",
                "relationshipType": "Composition",
                "relTo": {
                  "id": "eJs5Q5HBZrXSX",
                  "type": "product"
                }
              }
            ]
          }
        }
      ]
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
    "requestId": "3b3285d6-7b63-469b-a8f6-c1e4cd126ac7"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id e5. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "e5"
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