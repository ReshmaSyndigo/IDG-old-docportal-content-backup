---
title: Get Reference Domain Data Model
sidebar: rdp_sidebar
permalink: api_get_entityType_data_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatamodel}}** to get "reference" data model using a scenario.

## Scenario

To get "colors" entity type model for "Reference" data domain.

{% include snippets/header.html %}

## Request

To get the above model, you can use the REST API {{site.data.rdp_glossary.getdatamodel}}. In the request send the following details:

* query -> id: Specify the Entity type model Id - "colors_entityManageModel".
* query -> filters -> typesCriterion: Specify the entity type as "entityManageModel".
* query -> fields -> attributes: Specify "_ALL" attributes.
* query -> fields -> relationships: Specify "_ALL" relationships.

<pre><code>
POST **{{site.data.rdp_glossary.getdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "colors_entityManageModel",</span>
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "entityManageModel"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    }
  }
}
</code></pre> 

## Response

If the Entity Type data model get request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "51eca7eb-6ec2-4aec-8687-5b1315ff4c07"
  },
  "response": {
    "entityModels": [
      {
        "id": "colors_entityManageModel",
        "name": "colors",
        "type": "entityManageModel",
        "domain": "generic",
        "source": "internal",
        "properties": {
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-02-10T23:48:51.077-0600",
          "modifiedDate": "2020-02-10T23:48:51.077-0600"
        },
        "data": {
          "attributes": {
            "code": {
              "properties": {
                "isEntityIdentifier": true,
                "dataType": "string"
              }
            },
            "colortype": {
              "properties": {
                "isLocalizable": true,
                "dataType": "string"
              }
            },
            "value": {
              "properties": {
                "isExternalName": true,
                "isLocalizable": true,
                "dataType": "string"
              }
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.



