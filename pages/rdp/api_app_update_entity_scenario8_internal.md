---
title: "Add Multiple Attributes in Multiple Contexts"
sidebar: rdp_sidebar
permalink: api_app_update_entity_scenario8.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to add multiple attributes in multiple contexts.

## Scenario

To update the values of "sku" entity "CVShirts" as follows:
Enhancer given attributes - "featurespecs" and "extendedwarrantyinmonths" in "self" context.
Enhancer given attributes - "featurespecs" and "extendedwarrantyinmonths" in "Germany" context.
Enhancer attribute - "webclassification" ; Channel context attribute - "reviewrank"; and enhancer given attributes - "featurespecs" and "extendedwarrantyinmonths" in "Germany Web" context.

{% include snippets/header.html %}

## Request

To update the above entity, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type. 
* data : Provide the attribute details of the entity to be updated.
* contexts : Provide the context names and values of context-specific attributes.

<pre>
<code>
POST **{{site.data.rdp_glossary.appupdateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "CVShirts",</span>
    <span style="background-color: #FFFF00">"name": "CVShirts",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"featurespecs": {</span>
          "values": [
            {
              "value": "CVShirts in Self",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"extendedwarrantyinmonths": {</span>
          "values": [
            {
              "value": "3",
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
            <span style="background-color: #FFFF00">"featurespecs": {</span>
              "values": [
                {
                  "value": "CVShirts in Germany",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            <span style="background-color: #FFFF00">"extendedwarrantyinmonths": {</span>
              "values": [
                {
                  "value": "4",
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
          <span style="background-color: #FFFF00">"attributes": {</span>
            <span style="background-color: #FFFF00">"webclassification": {</span>
              "values": [
                {
                  "value": "Web Classifications>>Top Rated Products",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            <span style="background-color: #FFFF00">"reviewrank": {</span>
              "values": [
                {
                  "value": "20",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            <span style="background-color: #FFFF00">"featurespecs": {</span>
              "values": [
                {
                  "value": "CVShirts in Germany Web",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            <span style="background-color: #FFFF00">"extendedwarrantyinmonths": {</span>
              "values": [
                {
                  "value": "6",
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
    "requestId": "2ff9f3a5-884b-4820-b3b2-36dd2a580456"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id CVShirts. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "CVShirts"
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