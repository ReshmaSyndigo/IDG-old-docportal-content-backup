---
title: Create Default Value Model
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario62.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create default model, using a scenario.

## Scenario

To create default model for "SKU" entity type.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the [entity model](api_default_model.html) object, 
* Specify the id as "sku_entityDefaultValuesModel", name as "sku", and type as "entityDefaultValuesModel". 
* Specify the default values, if any, for attributes and relationships. This is the value that gets automatically populated in the entity, if the user does not explicitly provide any value.

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
    <span style="background-color: #FFFF00">"id": "sku_entityDefaultValuesModel",</span>
    <span style="background-color: #FFFF00">"name": "sku",</span>
    <span style="background-color: #FFFF00">"type": "entityDefaultValuesModel",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "properties": {
            <span style="background-color: #FFFF00">"defaultValues": "[[currentuser.ownershipdata]]"</span>
          }
        },
        "status": {
          "properties": {
            "defaultValues": "New"
          }
        },
        "createdate": {
          "properties": {
            "defaultValues": "[[systemdatetime]]"
          }
        },
        "hypearticle": {
          "properties": {
            "defaultValues": "false"
          }
        },
        "enabled": {
          "properties": {
            "defaultValues": "false"
          }
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            "properties": {
              "externalName": "Child of",
              "relationshipType": "Composition",
              "relationshipOwnership": "owned",
              "relatedEntityInfo": [
                {
                  "relEntityType": "product"
                }
              ]
            },
            "attributes": {
              "linkdescription": {
                "properties": {}
              }
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
          "message": "Submitted entityDefaultValuesModel for create with Id sku_entityDefaultValuesModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityDefaultValuesModel",
            "create",
            "sku_entityDefaultValuesModel"
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
* After creating the model, when you [create an entity](api_app_create_entity.html) the default values are automatically populated unless they are overridden by the user.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.