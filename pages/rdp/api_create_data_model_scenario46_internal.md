---
title: "Set Entity Type Permissions"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario46.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set entity type permissions, using a scenario. 

## Scenario

To map "sku" entity type to "thing" domain and set read, write and delete permissions for "sku" entity type.

{% include snippets/header.html %}

## Request 

Map "sku" entity type to "thing" domain. See [Create EntityType Data model for Thing Domain](api_create_entityType_data_model_scenario2.html).

To create authorisation model for "sku" entity for "vendor" role,
* Specify the id and name as sku_authorizationModel_vendor as you are defining the authorization model for "sku" entity for "vendor" role.
* Specify the type as "authorizationModel".
* In properties section, 
  - specify the permissions at entity level.
  - specify the permissions at attribute, relationship and context levels.
  - If read/write/delete permission is set to true at attribute, relationship or context level, the corresponding permission need to be set to true at entitytype level also.
* In data section, specify the attributes, relationships and contexts for which you want to explicitly override the permissions.

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
    <span style="background-color: #FFFF00">"id": "sku_authorizationModel_vendor",</span>
    <span style="background-color: #FFFF00">"name": "sku_authorizationModel_vendor",</span>
    <span style="background-color: #FFFF00">"type": "authorizationModel",</span>
    "properties": {
      <span style="background-color: #FFFF00">"readPermission": true,</span>
      <span style="background-color: #FFFF00">"writePermission": true,</span>
      <span style="background-color: #FFFF00">"deletePermission": false,</span>
      <span style="background-color: #FFFF00">"attributesPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      <span style="background-color: #FFFF00">"relationshipsPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      <span style="background-color: #FFFF00">"contextsPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      <span style="background-color: #FFFF00">"contextsAttributesPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      <span style="background-color: #FFFF00">"contextsRelationshipsPermission": [</span>
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ]
    },
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "suppliername": {
          "properties": {
            "readPermission": true,
            "writePermission": false,
            "ownerPermission": true
          }
        },
        "internalavailabilitydate": {
          "properties": {
            "readPermission": false,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "collaborationpmcomments": {
          "properties": {
            "readPermission": true,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "collaborationvendorcomments": {
          "properties": {
            "readPermission": true,
            "writePermission": false,
            "ownerPermission": false
          }
        }
      }
    }
  }
}
</code></pre> 

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
          "message": "Submitted authorizationModel for create with Id sku_authorizationModel_vendor. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "authorizationModel",
            "create",
            "sku_authorizationModel_vendor"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* After creating the model, the permissions set in the model apply for all CRUD operations performed on a "sku" entity by user mapped to "vendor" role.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.