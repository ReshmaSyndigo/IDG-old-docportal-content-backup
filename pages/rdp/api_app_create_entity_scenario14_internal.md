---
title: "Create Entity linked to Multiple Contexts"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario14.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity linked to multiple contexts with few attributes, using a scenario. 

## Scenario

To create "SKU" entity "CVShirts" linked to two contexts: country "Germany" and channel "Germany Web", with few context-specific attributes and enhancer given attributes.

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Within the data object, link the entity to the two contexts and provide details of the context-specific attributes, if any.

| Context | Attributes | 
|----------|-------------|
| Self attributes | mdmid, mdmname |
| Enhancer attributes | productclassification, itemtype |
| Germany context attributes | vat |
| Enhancer given attributes | accessoriesincluded, reviewrank |
| Germany Web context attributes | internettax |

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "CVShirts",</span>
    <span style="background-color: #FFFF00">"name": "CVShirts",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "CVShirts",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "CVShirts",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "productclassification": {
          "values": [
            {
              "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "itemtype": {
          "values": [
            {
              "value": "Refurbished",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
     <span style="background-color: #FFFF00"> "contexts": [</span>
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Germany"</span>
          },
          "attributes": {
            "accessoriesincluded": {
              "values": [
                {
                  "value": "Accessories in Germany",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "vat": {
              "values": [
                {
                  "value": "10",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          }
        },
        {
          "context": {
            <span style="background-color: #FFFF00">"channel": "Germany Web"</span>
          },
          "attributes": {
            "reviewrank": {
              "values": [
                {
                  "value": "20",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "internettax": {
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
    "requestId": "31c7d5d1-d548-42b5-b578-c5aa555c1f34"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id CVShirts. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "CVShirts"
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
