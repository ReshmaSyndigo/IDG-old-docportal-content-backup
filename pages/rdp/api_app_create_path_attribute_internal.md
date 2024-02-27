---
title: Create Entity with Root Node Mismatch Error for Path Attribute
sidebar: rdp_sidebar
permalink: api_app_create_path_attribute.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with root node mismatch error for "Product Classification" attribute. To view invalid classification for path attributes, see [View and Delete Invalid Classification Path Attributes](/{{site.data.rdp_links_version.APPU}}/dda_viu_n_del_inv_clasi_pth_attr.html){:target="_blank"} for more information.

## Scenario

Consider you wish to create a "sku" entity "Levis Women Top" with the path attribute "Product Classification". In entity manage model "productclassificationroot" is defined as a "rootNode", see [Entity Manage Model](api_manage_model.html) for more information. Note that path value of the "Product Classification" attribute is "Web Classifications>>Apparel & Footwear>>Clothing>>Web Tops". Wherein the specified path value is valid, but it encounters a root node mismatch error as the "Web Classifications" is not a root node.

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request, send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id and type. 
* data : Specify the attributes along with its values to be created, in the entity.  Include the path value of the "productclassification" path attribute "Web Classifications>>Apparel & Footwear>>Clothing>>Web Tops" inside the data object.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "LWT01",
    "type": "sku",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"productclassification": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Web Classifications>>Apparel & Footwear>>Clothing>>Web Tops",</span>
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

If the entity create request is submitted successfully, then the following response is received from create entity API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "80ab7c80-c55f-4bba-bd49-7091c148b6b2"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id LWT01. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "LWT01"
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

You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Root Node Mismatch Value for Path Attribute](api_val_root_node_path_attr.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.