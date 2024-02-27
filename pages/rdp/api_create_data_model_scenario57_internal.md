---
title: Create Context Model for Thing Domain
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario57.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create context model for thing domain, using a scenario.

## Scenario

To create context model for "thing" domain by specifying the primary contexts and their associated enhancer attributes with sequence numbers indicating the priority.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModels: In the [entity model](api_context_data_model.html) object, specify the id as "thing_entityContextModel", name as "thing" and type as "entityContextModel". Specify the contexts and the enhancer attributes along with the sequence. 

| Context | Enhancers | 
|----|---------------|
| Self | Product Classification, Item Type|
| Country | Product Classification | 
| Channel | Web Classification | 


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
    <span style="background-color: #FFFF00">"id": "thing_entityContextModel",</span>
    <span style="background-color: #FFFF00">"name": "thing",</span>
    <span style="background-color: #FFFF00">"type": "entityContextModel",</span>
    <span style="background-color: #FFFF00">"domain": "generic",</span>
    "properties": {
      <span style="background-color: #FFFF00">"enhancerAttributes": [</span>
        {
          "enhancerEntityType": "itemtype",
          "enhancerAttributeName": "itemtype",
          "priority": 2
        },
        {
          "pathRelationship": "belongsto",
          "enhancerEntityType": "classification",
          "enhancerAttributeName": "productclassification",
          "priority": 1
        }
      ],
      <span style="background-color: #FFFF00">"coalesceInfo": [</span>
        {
          "level": 1,
          "contextKey": "country",
          "contextRelationship": "belongstoroot",
          "enhancerAttributes": [
            {
              "pathRelationship": "belongsto",
              "enhancerEntityType": "classification",
              "enhancerAttributeName": "productclassification",
              "priority": 1
            }
          ],
          "mappedValueContexts": [
            {
              "valueContext": "locale",
              "valueContextRelationship": "allowedlocales"
            }
          ]
        },
        {
          "level": 2,
          "contextKey": "channel",
          "contextRelationship": "belongstocountry",
          "parentContextKey": "country",
          "enhancerAttributes": [
            {
              "pathRelationship": "belongsto",
              "enhancerEntityType": "classification",
              "enhancerAttributeName": "webclassification",
              "priority": 1
            }
          ],
          "mappedValueContexts": [
            {
              "valueContext": "locale",
              "valueContextRelationship": "allowedlocales"
            }
          ]
        }
      ]
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
          "message": "Submitted entityContextModel for create with Id thing_entityContextModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityContextModel",
            "create",
            "thing_entityContextModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the created contextual model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.