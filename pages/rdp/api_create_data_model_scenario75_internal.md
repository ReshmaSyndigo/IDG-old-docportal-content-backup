---
title: Create Entity Govern Model for Entity Type
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario75.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create entity govern model, using a scenario.

## Scenario

To create "product_entityGovernModel".

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_governance_data_model.html) object, fill the details about the model id, name, and type. 
* attributes: Specify the properties of businessConditionName and businessConditionStatus.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "product_entityGovernModel",</span>
    <span style="background-color: #FFFF00">"name": "product",</span>
    <span style="background-color: #FFFF00">"type": "entityGovernModel",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "businessConditions": {
          "group": [
            {
              <span style="background-color: #FFFF00">"businessConditionName": {</span>
                "properties": {
                  "dataType": "string",
                  "externalName": "Business Condition Name",
                  "isAttributeIdentifier": "true"
                }
              },
              <span style="background-color: #FFFF00">"businessConditionStatus": {</span>
                "properties": {
                  "attributeType": "boolean",
                  "externalName": "Business Condition Status"
                }
              }
            }
          ],
          "properties": {
            "attributeType": "group",
            "externalName": "Business Conditions",
            "isCollection": "true"
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
          "message": "Submitted entityGovernModel for create with Id product_entityGovernModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityGovernModel",
            "create",
            "product_entityGovernModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Verify the created default model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.