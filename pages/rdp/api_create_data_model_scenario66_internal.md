---
title: Create Manage Model for Locale 
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario66.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a manage model for a locale, using a scenario.

## Scenario

To create manage model for "locale".

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the [entity model](api_manage_model.html) object, 
* Specify the id as "locale_entityManageModel", name as "locale", and type as "entityManageModel".
* Specify the properties, code, language, region and relationships.

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
    <span style="background-color: #FFFF00">"id": "locale_entityManageModel",</span>
    <span style="background-color: #FFFF00">"name": "locale",</span>
    <span style="background-color: #FFFF00">"type": "entityManageModel",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "externalname": {
          "properties": {
            "externalName": "Name",
            "groupName": "Reference Data",
            "dataType": "string",
            "isExternalName": true
          }
        },
        "description": {
          "properties": {
            "externalName": "Description",
            "groupName": "Reference Data",
            "dataType": "string"
          }
        },
        "code": {
          "properties": {
            "externalName": "Code",
            "groupName": "Reference Data",
            "isEntityIdentifier": true,
            "dataType": "string"
          }
        },
        "language": {
          "properties": {
            "externalName": "Language",
            "groupName": "Reference Data",
            "dataType": "string"
          }
        },
        "region": {
          "properties": {
            "externalName": "Region",
            "groupName": "Reference Data",
            "dataType": "string"
          }
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        "fallbacklocale": [
          {
            "properties": {
              "externalName": "Fallback Locale",
              "relationshipType": "Association",
              "relationshipOwnership": "owned",
              "relatedEntityInfo": [
                {
                  "relEntityType": "locale"
                }
              ]
            },
            "attributes": {
              "fallbacklocalesequence": {
                "properties": {
                  "externalName": "Fallback Sequence",
                  "groupName": "Reference Relationship Data",
                  "dataType": "integer"
                }
              }
            }
          },
          {
            "properties": {
              "externalName": "Fallback Locale",
              "relationshipType": "Association",
              "relationshipOwnership": "whereused",
              "relatedEntityInfo": [
                {
                  "relEntityType": "locale"
                }
              ]
            },
            "attributes": {
              "fallbacklocalesequence": {
                "properties": {
                  "externalName": "Fallback Sequence",
                  "groupName": "Reference Relationship Data",
                  "dataType": "integer"
                }
              }
            }
          }
        ],
        "allowedlocales": [
          {
            "properties": {
              "externalName": "Allowed Locales",
              "relationshipType": "Association",
              "relationshipOwnership": "whereused",
              "relatedEntityInfo": [
                {
                  "relEntityType": "country"
                }
              ]
            },
            "attributes": {}
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
          "message": "Submitted entityManageModel for create with Id locale_entityManageModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityManageModel",
            "create",
            "locale_entityManageModel"
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