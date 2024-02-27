---
title: "Add New Attributes to Existing Manage Model"
sidebar: rdp_sidebar
permalink: api_update_data_model_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.updatedatamodel}}** to add new attributes to an existing manage model, using a scenario. 

## Scenario

To add a new attribute "cost" to an existing manage model "sku_entityManageModel".

{% include snippets/header.html %}

## Request

To update the above model, you can use the REST API {{site.data.rdp_glossary.updatedatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_manage_model.html) object, fill the details about Id, name, and type. In the attributes, include the details about the new attribute "cost" that you wish to include in the manage model.

<pre><code>
POST **{{site.data.rdp_glossary.updatedatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "sku_entityManageModel",</span>
    <span style="background-color: #FFFF00">"name": "sku",</span>
    <span style="background-color: #FFFF00">"type": "entityManageModel",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"cost": {</span>
          "properties": {
            "precision": 2,
            "required": false
          }
        }
      }
    }
  }
}
</code></pre> 

## Response

If the entity model update request is submitted successfully, then the following response is received from update entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "c184c19c-bbbe-4fe3-9377-5e7640dcc217"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted entityManageModel for update with Id sku_entityManageModel. Check after some time",
          "messageCode": "I0013",
          "messageType": "success",
          "messageParams": [
            "entityManageModel",
            "update",
            "sku_entityManageModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the updated data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the updated data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* After updating the model, you can create an entity using the updated model for the specific entity type.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.