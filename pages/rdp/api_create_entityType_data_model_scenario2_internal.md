---
title: Create EntityType Data Model for Digital Asset Domain
sidebar: rdp_sidebar
permalink: api_create_entityType_data_model_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API to create a data model for an **image** entity type, using a scenario.

## Scenario

To create **image** entity type data model belonging to **digital asset** domain.

{% include snippets/header.html %}

## Request

To create the above data model, use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: Specify details such as id, name, type and domain. Since we are creating an entity type data model, specify "entityType" in the type parameter. Since the image entity type belongs to digital asset domain, specify "digitalAsset" in the domain parameter.

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
    <span style="background-color: #FFFF00">"id": "image_entityType",</span>
    <span style="background-color: #FFFF00">"name": "image",</span>
    <span style="background-color: #FFFF00">"type": "entityType",</span>
    <span style="background-color: #FFFF00">"domain": "digitalAsset",</span>
    "properties": {
      "externalName": "Image",
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
    "requestId": "27878c20-3ca0-4ce5-ae61-9cb088f55a89"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted entityType for create with Id image_entityType. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityType",
            "create",
            "image_entityType"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the above created EntityType data model by [creating an entity](api_app_create_entity.html) of type image.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
