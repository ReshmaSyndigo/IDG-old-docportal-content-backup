---
title: "Delete Entity"
sidebar: rdp_sidebar
permalink: api_app_delete_entity_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appdeleteentity}}** to delete an entity using entity Id, using a scenario.

## Scenario

To delete "SKU" entity with entity Id "e2".

{% include snippets/header.html %}

## Request

To delete the above entity, use the REST API {{site.data.rdp_glossary.appdeleteentity}}. 
In the request, send the following details:

* entity: In the [entity](api_entity_object_structure.html) object, provide the Id and type. Here to delete the above entity, specify the "id" as "e2" and "type" as "sku".

{% include callout.html content="**Note**: To delete more than one entity at a time, you must use bulk delete entity services. See [Bulk Delete Entity Services](api_bulk_delete_entities.html).
" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.appdeleteentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "e2",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>
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
    "requestId": "7fa22663-ce8e-4b7c-874a-e62747727bf3"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0015",
          "message": "Submitted sku for delete with Id e2. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "delete",
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