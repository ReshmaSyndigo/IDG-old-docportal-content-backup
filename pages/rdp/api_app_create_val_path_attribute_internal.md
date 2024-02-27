---
title: Create Entity with Valid Path Attribute Value
sidebar: rdp_sidebar
permalink: api_app_create_val_path_attribute.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with valid "Product Classification" path attribute.

## Scenario

Consider you wish to create a "sku" entity "Polo Women Top" with a valid path attribute "Product Classification". In entity manage model "productclassificationroot" is defined as a "rootNode". See, [Entity Manage Model](api_manage_model.html) for more information.

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request, send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id and type. 
* data : Specify the attributes along with its values to be created, in the entity.  Include the path value of the "productclassification" path attribute "Product Classifications>>Apparel & Footwear>>Clothing>>Web Tops" inside the data object.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "PWT01",
    "type": "sku",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"productclassification": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Product Classifications>>Apparel & Footwear>>Clothing>>Tops",</span>
              "locale": "en-US",
              "source": "internal"
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

The following response is received from create entity API, if the created entity consists of the valid path value:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "810bbce7-ecf8-4037-8cea-3e54e014d7a9"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id PWT01. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "PWT01"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

## Verify the created entity

You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Valid Path Attribute Value](api_val_path_attr.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.