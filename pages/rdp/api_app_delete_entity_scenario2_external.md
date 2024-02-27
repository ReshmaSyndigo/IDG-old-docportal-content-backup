---
title: Delete Attribute
sidebar: rdp_sidebar
permalink: api_app_delete_entity_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to delete a specific attribute in an entity, using a scenario. 

## Scenario

To delete attribute "size" in the "SKU" entity "e2".

{% include snippets/header.html %}

## Request

To delete a specific attribute in the above entity, use the REST API {{site.data.rdp_glossary.appupdateentity}}. 

{% include callout.html content="**Note**: You must use the UPDATE API, as you are only deleting some data in the entity, and not the complete entity itself.
" type="primary" %}

In the request, send the following details:

* entity: In the [entity](api_entity_object_structure.html) object, provide the entity Id,name and type. In the data section, specify the attribute value to be deleted with the action delete. Here, you can specify the **delete** action inside the attribute "size".

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
    <span style="background-color: #FFFF00">"id": "e2",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Blue_XLarge",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    <span style="background-color: #FFFF00">"data": {</span>
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"size": {</span>
          "values": [
            {
              "value": "XL",
              "source": "internal",
              "locale": "en-US",
              "action": "delete"
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

If the request is submitted successfully, the following response is received:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "c5eaff9b-a39c-4ff5-a11e-baf4bd9a0c1d"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id e2. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "e2"
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