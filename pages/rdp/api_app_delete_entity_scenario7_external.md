---
title: Delete Attribute from a Context
sidebar: rdp_sidebar
permalink: api_app_delete_entity_scenario7.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to delete a specific attribute from a context in an entity, using a scenario. 

## Scenario

To delete attribute "internettax" linked to "Germany Web" context in the "SKU" entity "CVShirts_GW".

{% include snippets/header.html %}

## Request

To delete the above attribute, use the REST API {{site.data.rdp_glossary.appupdateentity}}. 

{% include callout.html content="**Note**: You must use the UPDATE API, as you are only deleting some data in the entity, and not the complete entity itself.
" type="primary" %}

In the request, send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide the id, name and type. 
* data : Specify the attribute you wish to delete. Also specify the context in which you wish to delete.

<pre>
<code>
POST **{{site.data.rdp_glossary.appupdateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "CVShirts_GW",</span>
    <span style="background-color: #FFFF00">"name": "CVShirts_GW",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "contexts": [
        {
          "context": {
            <span style="background-color: #FFFF00">"channel": "Germany Web"</span>
          },
          "attributes": {
            <span style="background-color: #FFFF00">"internettax": {</span>
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
    "requestId": "8cd97b47-f10d-414c-9915-a6133df406bf"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0015",
          "message": "Submitted sku for update with Id CVShirts_GW. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "CVShirts_GW"
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