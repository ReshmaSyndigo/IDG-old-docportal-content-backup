---
title: Create Relationship Model
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario64.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create relationship model, using a scenario.

## Scenario

To create "productischildof" relationship model.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the [entity model](api_relationship_data_model.html) object, 
* Specify the id as "productischildof_relationshipModel", name as "productischildof", and type as "relationshipModel".
* Specify the properties and relationships.
* Specify the Trust Matrix definition at relationship type level where Ice Cat and Brand Bank are the external sources.

<pre>
<code>
{
  "mergeMatrix": [
    {
      "mergeSequence": "Ice Cat>>Brand Bank",
      "ignoreMergeMatrix": false
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
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "productischildof_relationshipModel",</span>
    <span style="background-color: #FFFF00">"name": "productischildof",</span>
    <span style="background-color: #FFFF00">"type": "relationshipModel",</span>
    "domain": "thing",
    "source": "internal",
    "properties": {
      "externalName": "Child Products",
      "whereUsedExternalName": "Child Products"
    },
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"externalName": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "Child Products"
            }
          ],
          "properties": {
            "groupName": "Metadata Attributes"
          },
          <span style="background-color: #FFFF00">"mergeMatrix": [</span>
            {
              "mergeSequence": "Ice Cat>>Brand Bank",
              "ignoreMergeMatrix": false
            }
          ]
        },
        <span style="background-color: #FFFF00">"whereUsedExternalName": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "value": "Child Products"
            }
          ],
          "properties": {
            "groupName": "Metadata Attributes"
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
          "message": "Submitted relationshipModel for create with Id productischildof_relationshipModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "relationshipModel",
            "create",
            "productischildof_relationshipModel"
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

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.