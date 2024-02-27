---
title: Create Manage Model for Primary Context Instance - Channel
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario53.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create manage model for primary context(channel) instance, "Germany Web", using a scenario.

## Scenario

To create manage model for channel "Germany Web".

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
In the [entity model](api_manage_model.html) object, 
* Specify the id as "germanyweb_entityManageModel", name as "Germany Web", and type as "entityManageModel". 
* Specify the attributes.
* Specify the enhancer attribute for channel, webclassification.

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
    <span style="background-color: #FFFF00">"id": "GermanyWeb_entityManageModel",</span>
    <span style="background-color: #FFFF00">"name": "Germany Web",</span>
    <span style="background-color: #FFFF00">"type": "entityManageModel",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "webclassification": {
          "properties": {
            "externalName": "Web classification",
            "dataType": "string",
            "groupName": "Enhancer Attributes",
            "displayType": "path",
            "isCollection": true,
            "pathEntityInfo": [
              {
                "pathRelationshipName": "belongsTo",
                "pathEntityType": "classification",
                "rootNode": "webclassificationroot",
                "pathSeperator": ">>"
              }
            ]
          }
        },
        "internettax": {
          "properties": {
            "externalName": "Internet Tax",
            "groupName": "Item Details",
            "dataType": "decimal"
          }
        },
        "webdiscount": {
          "properties": {
            "externalName": "Web Discount",
            "groupName": "Item Details",
            "dataType": "decimal"
          }
        },
        "channelavailability": {
          "properties": {
            "externalName": "Channel Availability",
            "groupName": "Item Details",
            "dataType": "boolean"
          }
        },
        "channeldescription": {
          "properties": {
            "externalName": "Channel Description",
            "groupName": "Item Details",
            "dataType": "string",
            "isLocalizable": true
          }
        },
        "channelready": {
          "properties": {
            "externalName": "Channel Ready",
            "groupName": "Item Details",
            "dataType": "boolean"
          }
        },
        "channelprice": {
          "properties": {
            "externalName": "Channel Price",
            "groupName": "Pricing",
            "dataType": "decimal"
          }
        },
        "description": {
          "properties": {
            "externalName": "Description",
            "groupName": "Basic",
            "dataType": "string",
            "isLocalizable": true
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
          "message": "Submitted entityManageModel for create with Id GermanyWeb_entityManageModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityManageModel",
            "create",
            "GermanyWeb_entityManageModel"
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
* After creating the model, you can [create an entity](api_app_create_entity.html) using this model for the specific entity type.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.