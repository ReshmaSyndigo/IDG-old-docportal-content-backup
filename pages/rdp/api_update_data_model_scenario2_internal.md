---
title: Delete Properties from an Existing Manage Model
sidebar: rdp_sidebar
permalink: api_update_data_model_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.updatedatamodel}}** to delete properties to an existing manage model, using a scenario. 

## Scenario

To delete properties such as "externalName" and "groupName" of productid attribute in an existing "sku_entityManageModel".

{% include snippets/header.html %}

## Request

To update the above model, you can use the REST API {{site.data.rdp_glossary.updatedatamodel}}. In the request, send the following details:

* entityModel: In the [entity model](api_manage_model.html) object, specify the id, name, and type of the model you wish to update. 
* To delete a property in the model, use the keyword **_DELETE**. In this scenario, specify "_DELETE" for "externalName" and "groupName" properties.

{% include callout.html content="**Notes**: 
* Similarly, you can delete properties of various other models such as Taxonomy model, Context model, Authorization model, and so on. 
* You can delete properties only at the parent level, but not at the child level.
" type="primary" %}

<pre>
<code>
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
    "domain": "generic",
    "source": "internal",
    "data": {
      "attributes": {
        "productid": {
          <span style="background-color: #FFFF00">"properties": {</span>
            "lastMigrationTimestamp": "2019-06-25T04:32:42.950+0000",
            <span style="background-color: #FFFF00">"externalName": "_DELETE",</span>
            <span style="background-color: #FFFF00">"groupName": "_DELETE",</span>
            "dataType": "string"
          }
        }
      }
    }
  }
}
</code>
</pre> 

## Response

If the entity model update request is submitted successfully, then the following response is received from update entity API:

<pre>
<code>
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
</code>
</pre> 

Verify the updated data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the updated model. See [Get Data Model](api_get_data_model.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.