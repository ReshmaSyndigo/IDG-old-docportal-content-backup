---
title: "Delete Data Model using Id"
sidebar: rdp_sidebar
permalink: api_delete_data_model_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deletedatamodel}}** to delete a data model using Id, using a scenario. 

## Scenario

Delete manage model of a "SKU" entity.

{% include snippets/header.html %}

## Request

To delete the above model, use the REST API {{site.data.rdp_glossary.deletedatamodel}}. In the request send the following details:

{% include snippets/clientState.html %}
* entityModel: In the [entityModel](api_manage_model.html) object, provide the Id as "sku_entityManageModel" and type as "entityManageModel"

{% include callout.html content="**Note**: <br/>
* Similarly, you can delete entity validation model, entity display model, entity default values model, contextual manage model, contextual validation model, contextual display model, authorization model, business rule, business condition, business rule mapping, workflow definition, and workflow definition mapping by specifying the Id and type of the model.
" type="primary" %}

<pre><code>
POST **{{site.data.rdp_glossary.deletedatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "sku_entityManageModel",</span>
    <span style="background-color: #FFFF00">"type": "entityManageModel"</span>
  }
}
</code></pre>

## Response

If the delete request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "62a6cc38-1163-4387-a9fa-4d6d89f69860"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted entityManageModel for delete with Id sku_entityManageModel. Check after some time",
          "messageCode": "I0015",
          "messageType": "success",
          "messageParams": [
            "entityManageModel",
            "delete",
            "sku_entityManageModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the deleted data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the deleted deleted data model object. See [Get Data Model](api_get_data_model.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.