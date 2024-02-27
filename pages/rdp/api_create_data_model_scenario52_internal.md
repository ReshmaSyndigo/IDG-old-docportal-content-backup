---
title: Create Manage Model for Primary Context Instance - Country
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario52.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create manage model for primary context (country) instance, "Germany", using a scenario where Trust Matrix is defined. 

## Scenario

To create manage model for country "Germany" where Trust Matrix is defined.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
In the [entity model](api_manage_model.html) object, 
* Specify the id as "germany_entityManageModel", name as "Germany", and type as "entityManageModel". 
* Specify the attributes.
* Specify the enhancer attribute for country, productclassification.
* Specify the Trust Matrix definition at Primary Context level and Attribute level where Ice Cat and Brand Bank are the external sources. User is the external source token for user-provided values -

<pre>
<code>
{
  "mergeMatrix": [
    {
      "mergeSequence": "Ice Cat>>User>>Brand Bank",
      "ignoreMergeMatrix": false,
      "aggregate": true
    }
  ]
}
</code>
</pre>

See [Trust Matrix](/{{site.data.rdp_links_version.APP}}/rdp_feature_trust_matrix.html) for more information.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "germany_entityManageModel",</span>
    <span style="background-color: #FFFF00">"name": "germany",</span>
    <span style="background-color: #FFFF00">"type": "entityManageModel",</span>
    "domain": "generic",
    "properties": {
      "mergeMatrix": [
        {
          "mergeSequence": "Ice Cat>>Brand Bank"
        }
      ]
    },
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "description": {
          "properties": {
            "externalName": "Description",
            "groupName": "Basic",
            "dataType": "string",
            "isLocalizable": true,
            "mergeMatrix": [
              {
                "mergeSequence": "Ice Cat>>Brand Bank",
                "ignoreMergeMatrix": false
              }
            ]
          }
        },
        "suppliername": {
          "properties": {
            "externalName": "Supplier Name",
            "groupName": "Basic",
            "dataType": "string",
            "mergeMatrix": [
              {
                "mergeSequence": "Ice Cat>>User",
                "ignoreMergeMatrix": false
              }
            ]
          }
        },
        <span style="background-color: #FFFF00">"productclassification": {</span>
          "properties": {
            "displayType": "path",
            "isCollection": true,
            "externalName": "Product classification",
            "groupName": "Enhancer Attributes",
            "dataType": "string",
            "pathEntityInfo": [
              {
                "pathRelationshipName": "belongsTo",
                "pathEntityType": "classification",
                "rootNode": "productclassificationroot",
                "pathSeperator": ">>"
              }
            ],
            <span style="background-color: #FFFF00">"mergeMatrix": [</span>
              {
                "mergeSequence": "Ice Cat>>Brand Bank",
                "ignoreMergeMatrix": false
              }
            ]
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
          "message": "Submitted entityManageModel for create with Id germany_entityManageModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityManageModel",
            "create",
            "germany_entityManageModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

{% include callout.html content="**Notes**: If the mergeMatrix is not defined at the attribute level, the system will fallback to the definition at primary context level. If there is no mergeMatrix defined at both primary context and attribute levels, then the system will consider the configuration at Self level.
" type="primary" %}

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* After creating the model, you can [create an entity](api_app_create_entity.html) using this model for the specific entity type.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.