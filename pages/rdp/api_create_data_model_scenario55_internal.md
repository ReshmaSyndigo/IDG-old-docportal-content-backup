---
title: Create Manage Model for Additional Context Instance - Web Classification
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario55.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create manage model for additional context instance "Top Rated Products" under "Web Classification", using a scenario.

## Scenario

To create manage model for additional context "Top Rated Products" under "Web Classification".

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
In the [entity model](api_manage_model.html) object, 
* Specify the id as "topratedproducts_entityManageModel", name as "Top Rated Products", and type as "entityManageModel". 
* Specify the attributes.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "topratedproducts_entityManageModel",</span>
    <span style="background-color: #FFFF00">"name": "Top Rated Products",</span>
    <span style="background-color: #FFFF00">"type": "entityManageModel",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "reviewrank": {
          "properties": {
            "externalName": "Review Rank",
            "groupName": "Ranking",
            "dataType": "integer"
          }
        }
      }
    }
  }
}
</code>
</pre>

## Response

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3ce5b682-48ce-4dd1-97c9-5352fffffc9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted entityManageModel for create with Id topratedproducts_entityManageModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityManageModel",
            "create",
            "topratedproducts_entityManageModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* After creating the model, you can [create an entity](api_app_create_entity.html) and enhance its data by linking it to the additional context.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.