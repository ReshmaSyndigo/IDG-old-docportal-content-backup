---
title: "Get all Authorization Models"
sidebar: rdp_sidebar
permalink: api_get_data_model_scenario12.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatamodel}}** to get all authorization models in the system, using a scenario. 

## Scenario

To get all available authorization models in the system.

{% include snippets/header.html %}

## Request

To get the above model, you can use the REST API {{site.data.rdp_glossary.getdatamodel}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the type as "authorization models"
* query -> fields -> attributes: Specify "_ALL" attributes
* query -> fields -> relationships: Specify "_ALL" relationships

<pre><code>
POST **{{site.data.rdp_glossary.getdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {      
      "filters" : {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
        <span style="background-color: #FFFF00">"authorizationmodel"</span>
        ]
      }
    },
    "fields" : {
      "attributes" : ["_ALL"],
      "relationships": ["_ALL"]
    }
  }
}
</code></pre>

## Response

Returns all the authorization models in the system. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "00bac261-68e7-4dea-8b1e-48266a5a0077"
  },
  "response": {
    "entityModels": [
      {
        "id": "UOMData_authorizationModel_readonlyrole",
        "name": "UOMData_authorizationModel_readonlyrole",
        "type": "authorizationModel",
        "properties": {
          "readPermission": true,
          "writePermission": false,
          "deletePermission": false,
          "attributesPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "relationshipsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsAttributesPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsRelationshipsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-01-09T03:37:04.443-0600",
          "modifiedDate": "2020-01-09T03:37:04.443-0600"
        }
      },
      {
        "id": "thing_authorizationModel_readonlyrole",
        "name": "thing_authorizationModel_readonlyrole",
        "type": "authorizationModel",
        "properties": {
          "readPermission": true,
          "writePermission": false,
          "deletePermission": false,
          "attributesPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "relationshipsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsAttributesPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsRelationshipsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-01-09T03:37:04.467-0600",
          "modifiedDate": "2020-01-09T03:37:04.467-0600"
        }
      },
      {
        "id": "sysBaseModel_authorizationModel_readonlyrole",
        "name": "sysBaseModel_authorizationModel_readonlyrole",
        "type": "authorizationModel",
        "properties": {
          "readPermission": true,
          "writePermission": false,
          "deletePermission": false,
          "attributesPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "relationshipsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsAttributesPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "contextsRelationshipsPermission": [
            {
              "readPermission": true,
              "writePermission": false,
              "deletePermission": false
            }
          ],
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-01-09T03:37:04.459-0600",
          "modifiedDate": "2020-01-09T03:37:04.459-0600"
        }
      }
    ],
    "status": "success",
    "totalRecords": 13875
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
