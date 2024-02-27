---
title: Create EntityType Data Model for Thing Domain
sidebar: rdp_sidebar
permalink: api_create_entityType_data_model_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API to create a data model for a **sku** entity type, using a scenario.

## Scenario

To create **sku** entity type data model belonging to **thing** domain.

{% include snippets/header.html %}

## Request

To create the above data model, use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: Specify details such as id, name, type and domain. Since we are creating an entity type data model, specify "entityType" in the type parameter. Since the sku entity type belongs to thing domain, specify "thing" in the domain parameter.

* properties: Specify the required externalName and description if needed.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "metaInfo": {
    "dataIndex": "entityModel",
    "collectionName": "entityModels",
    "responseObjectName": "response"
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "sku_entityType",</span>
    <span style="background-color: #FFFF00">"name": "sku",</span>
    <span style="background-color: #FFFF00">"type": "entityType",</span>
    <span style="background-color: #FFFF00">"domain": "thing",</span>
    "properties": {
      "externalName": "SKU",
      "description": ""
    }
  }
}
</code>
</pre>

## Response

If the above request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "be5abe02-fa6a-4359-aba8-3875a86feb87"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted entityType for create with Id sku_entityType. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityType",
            "create",
            "sku_entityType"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the above created EntityType data model by [creating an entity](api_app_create_entity.html) of type sku.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
