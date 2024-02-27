---
title: "Create Entity"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity without any attributes, relationships or links to context, using a scenario. 

## Scenario

Create "SKU" entity "Polo Mens Shirt Blue". 

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide the name and type. 
{% include callout.html content="**Note**: It is optional to specify the 'Id' in the entity object. System automatically generates a unique identifier if you do not specify 'Id'. 
" type="primary" %}

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
    <span style="background-color: #FFFF00">"id": "",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Blue",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>
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
    "requestId": "dba18ae9-c4e6-4d10-90ac-b9b339622384"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id Y7zBI6ZkQxSvvj6ydhtUFQ. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "Y7zBI6ZkQxSvvj6ydhtUFQ"
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