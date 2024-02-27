---
title: Create Attribute Model
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario63.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create attribute model, using a scenario.

## Scenario

To create "Description" attribute model.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the [entity model](api_attribute_data_model.html) object, 
* Specify the id as "description_attributeModel", name as "description", and type as "attributeModel".
* Specify the properties as required.
* Specify the attributes and relationships.
* Specify the Trust Matrix definition at Primary Context level and Attribute level where Ice Cat and Brand Bank are the external sources. User is the external source for user-provided values.

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
    <span style="background-color: #FFFF00">"id": "description_attributeModel",</span>
    <span style="background-color: #FFFF00">"name": "description",</span>
    <span style="background-color: #FFFF00">"type": "attributeModel",</span>
    "domain": "digitalAsset",
    "properties": {
      "description": "",
      "displaySequence": "",
      "dataType": "string",
      "externalName": "Description",
      "groupName": "Basic",
      "displayType": "TextArea",
      "isLocalizable": true
    },
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "description": {
          "properties": {
            "externalName": "Description",
            "description": "",
            "dataType": "string",
            <span style="background-color: #FFFF00">"mergeMatrix": [</span>
              {
                "mergeSequence": "Ice Cat>>User>>Brand Bank",
                "ignoreMergeMatrix": true,
                "aggregate": true
              }
            ],
            "groupName": "XMP",
            "displayType": "TextArea",
            "displaySequence": ""
          }
        },
        "displayType": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "TextArea"
            }
          ]
        },
        "groupName": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "Basic"
            }
          ]
        },
        "externalName": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "Description"
            }
          ]
        },
        "dataType": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "string"
            }
          ]
        },
        "isLocalizable": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": true
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        "listedUnder": [
          {
            "id": "",
            "relTo": {
              "id": "digitalAssetdomainattributemodels",
              "type": "list"
            },
            "properties": {
              "direction": "both",
              "relationshipType": "aggregation"
            }
          }
        ]
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
          "message": "Submitted attributeModel for create with Id description_attributeModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "attributeModel",
            "create",
            "description_attributeModel"
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
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* After creating the model, when you [create an entity](api_app_create_entity.html) the attributes are populated.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.