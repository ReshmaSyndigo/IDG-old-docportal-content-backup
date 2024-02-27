---
title: "Create Entity with Relationship and Matching Relationship Attribute"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario11_1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with relationship and matching relationship attribute, using a scenario. Note that in the following scenario, mdmid of existing SKU's in the system acts as a match to relate to the newly created entity.

**Example:** Consider an entity that exists in the system with mdmid "SKU001". When you create a new entity "SKU002" and define the matching relationship attribute as "SKU001", then SKU001 entity is automatically related to SKU002 entity.

## Scenario

To create a "SKU" entity with "ischildof" relationship and "mdmid" as matching relationship attribute.

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type.
* data : Provide the attribute details of the entity. 
* contexts : Provide the context name you wish to link the entity with.
* relationships : Provide the relationship name, relationship attributes and the matching relationship attribute.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU002",</span>
    <span style="background-color: #FFFF00">"name": "SKU002",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "SKU002",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "SKU002",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            "relTo": {
              "type": "product",
              "id": "",
              "data": {
                <span style="background-color: #FFFF00">"attributes": {</span>
                  <span style="background-color: #FFFF00">"mdmid": {</span>
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "internal",
                        "value": "SKU001"
                      }
                    ]
                  }
                }
              }
            },
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    "locale": "en-US",
                    "source": "internal",
                    "value": "SKU001 is related to SKU002"
                  }
                ]
              }
            },
            "id": ""
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
    "requestId": "5fb5cd68-f18e-40ab-8e87-0dd814b9b7d5"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id e6. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "e6"
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