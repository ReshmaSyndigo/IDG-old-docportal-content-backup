---
title: "Create Entity with Relationship and Relationship Attributes linked to a Specific Context"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario11.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with relationship and relationship attributes in a specific context, using a scenario.

## Scenario

To create "SKU" entity "Polo Mens Shirt Green_Large" in "Germany" context having "ischildof" relationship with relationship attribute "linkdescription".

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type.
* data : Provide the attribute details of the entity. 
* contexts : Provide the context name you wish to link the entity with.
* relationships : Provide the relationship name and the relationship attributes.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "e6",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Green_Large",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "PP_M",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "Polo Purple",
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
                },
                <span style="background-color: #FFFF00">"attributes": {</span>
                  <span style="background-color: #FFFF00">"linkdescription": {</span>
                    "values": [
                      {
                        "value": "Polo Men's Shirt-Formals",
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