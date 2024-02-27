---
title: "Set Delete Permission"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario43.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set delete permissions for an entity type, using a scenario.

## Scenario

To restrict user with role "belgiumuser" from deleting a "sku" entity. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object,
* Specify the id and name as "sku_authorizationModel_belgiumuser", as you are creating authorization model for "belgiumuser" role for entity type "sku".
* In the properties section, 
  - Set entity type deletepermission to false . Note that currently delete permissions are effective only at entity level.

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "sku_authorizationModel_belgiumuser",</span>
    <span style="background-color: #FFFF00">"name": "sku_authorizationModel_belgiumuser",</span>
    <span style="background-color: #FFFF00">"type": "authorizationModel",</span>
    "properties": {
      "readPermission": true,
      "writePermission": true,
      <span style="background-color: #FFFF00">"deletePermission": false,</span>
      "contextAuthorizationPath": "country>>taxonomy>>classification",
      "attributesPermission": [
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      "relationshipsPermission": [
        {
          "readPermission": true,
          "writePermission": true,
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
      ]
    },
    "data": {
      "contexts": [
        {
          "context": {
            "country": "Belgium"
          },
          "properties": {
            "attributesPermission": [
              {
                "writePermission": true,
                "readPermission": true,
                "deletePermission": false
              }
            ],
            "relationshipsPermission": [
              {
                "readPermission": true,
                "writePermission": true,
                "deletePermission": false
              }
            ],
            "readPermission": true,
            "writePermission": true
          }
        },
        {
          "context": {
            "country": "Belgium",
            "taxonomy": "_ALL",
            "classification": "_ALL"
          },
          "properties": {
            "attributesPermission": [
              {
                "writePermission": true,
                "readPermission": true,
                "deletePermission": false
              }
            ],
            "relationshipsPermission": [
              {
                "readPermission": true,
                "writePermission": true,
                "deletePermission": false
              }
            ],
            "readPermission": true,
            "writePermission": true
          }
        }
      ]
    }
  }
}
</code></pre> 

## Response - 1

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre><code>
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
          "message": "Submitted authorizationModel for create with Id sku_authorizationModel_belgiumuser. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "authorizationModel",
            "create",
            "sku_authorizationModel_belgiumuser"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

## Request 2 - Delete Entity using the Model (Scenario 1)

In this request, user with role "belgiumuser" wishes to delete a "sku" entity. Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

<pre><code>
POST **{{site.data.rdp_glossary.entityappdelete}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "JPShirtsBelUser",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>
  }
}
</code></pre> 

## Response 2 

The delete request fails as "belgiumuser" does not have deletepermissions.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "ef1a22be-b6bc-4e50-a55b-1efb6e5f5c02"
  },
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Permission Denied",
          "messageCode": "PD001",
          "messageType": "error"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

## Request 3 - Delete Entity using the Model (Scenario 2)

In this request, user with role "admin" is trying to delete a "sku" entity. Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

<pre><code>
POST **{{site.data.rdp_glossary.entityappdelete}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "JPShirtsBelUser",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>
  }
}
</code></pre> 

## Response 3

The delete request is successful as "admin" role has deletepermissions.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "a2627325-3865-4f4a-863c-ee40599916ae"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0015",
          "message": "Entity has been submitted for delete with entity Id : JPShirtsBelUser. Please check back after 1min",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 


## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

{% include see-also.html content="
* [Set Domain Permissions](api_create_data_model_scenario36.html)
* [Set Entity Type Permissions](api_create_data_model_scenario46.html)
* [Set User Role Mapping](api_create_data_model_scenario38.html)
* [Set Read Permission for Specific Attribute](api_create_data_model_scenario47.html)
* [Set Context Level Permissions](api_create_data_model_scenario39.html)
* [Set Authorization type - Accommodate/Reject](api_create_data_model_scenario40.html)
* [Set Write Permission for Specific Attribute](api_create_data_model_scenario41.html)
* [Set Owner Permission](api_create_data_model_scenario42.html)
* [Set OwnerEdit Permission](api_create_data_model_scenario49.html)
* [Get Nearest Matching Context from Authorization Model](api_create_data_model_scenario44.html)
* [Merge Permissions - Single User Multiple Roles](api_create_data_model_scenario45.html)
" %}