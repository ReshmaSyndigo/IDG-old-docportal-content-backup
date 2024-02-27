---
title: Delete Enhancer Attribute from a Context
sidebar: rdp_sidebar
permalink: api_app_delete_entity_scenario8.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to delete enhancer attribute from a context in an entity, using a scenario. 

## Scenario

To delete enhancer given attribute "extendedwarrantyinmonths" linked to "Germany" context in the "SKU" entity "CVShirts".

{% include snippets/header.html %}

## Request

To delete the above enhancer attribute, use the REST API {{site.data.rdp_glossary.appupdateentity}}. 

{% include callout.html content="**Note**: You must use the UPDATE API, as you are only deleting some data in the entity, and not the complete entity itself.
" type="primary" %}

In the request, send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide the id, name and type. 
* data : Specify the enhancer given attribute you wish to delete. Also specify the context in which you wish to delete.

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
      "contexts": [
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Germany"</span>
          },
          "attributes": {
            <span style="background-color: #FFFF00">"extendedwarrantyinmonths": {</span>
              <span style="background-color: #FFFF00">"action": "delete"</span>
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

If the request is submitted successfully, the following response is received:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "23c54521-d579-40f7-82f8-55f6ad77c80c"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0015",
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

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.