---
title: "Set Read Permission for Specific Attribute"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario47.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set read permissions for specific attributes, using a scenario.

## Scenario

To disable read permissions for "collaborationpmcomments" attribute for "buyer" role. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object,
* Specify the id and name as "sku_authorizationModel_buyer", as you are creating authorization model for "sku" entity for "buyer" role.
* In the properties section, 
  - set entity type read permission to true.
  - set attribute read permission to true.
* In the data section, you can override the permissions for specific attributes. In this scenario, we are disabling read permission for attribute "collaborationpmcomments" for users mapped to "buyer" role.
  
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
    <span style="background-color: #FFFF00">"id": "sku_authorizationModel_buyer",</span>
    <span style="background-color: #FFFF00">"name": "sku_authorizationModel_buyer",</span>
    <span style="background-color: #FFFF00">"type": "authorizationModel",</span>
    "properties": {
      <span style="background-color: #FFFF00">"readPermission": true,</span>
      "writePermission": true,
      "deletePermission": false,
      "attributesPermission": [
        {
          <span style="background-color: #FFFF00">"readPermission": true,</span>
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
          "writePermission": true,
          "deletePermission": false
        }
      ],
      "contextsAttributesPermission": [
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      "contextsRelationshipsPermission": [
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ]
    },
    "data": {
      "attributes": {
        "suppliername": {
          "properties": {
            "readPermission": true,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "internalavailabilitydate": {
          "properties": {
            "readPermission": false,
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
        },
        <span style="background-color: #FFFF00">"collaborationpmcomments": {</span>
          "properties": {
            "readPermission": false,
            "writePermission": false,
            "ownerPermission": false
          }
        }
      }
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
    "requestId": "288d8f5b-98bf-451b-aded-b56a5ace4bee"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : sku_authorizationModel_buyer. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre> 

### Get Entity using the Model

In this request, consider a user with "buyer" role wants to get the attribute "collaborationpmcomments" in the "sku" entity. Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

## Request - 2

<pre><code>
POST **{{site.data.rdp_glossary.appgetentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      "ids": [
        <span style="background-color: #FFFF00">"JPShirtsVendor1"</span>
      ]
    },
    "fields": {
      "attributes": [
        <span style="background-color: #FFFF00">"colloborationpmcomments"</span>
      ]
    },
    "options": {
      "maxRecords": 20
    }
  }
}
</code></pre> 

## Response - 2

As the "buyer" role does not have read permissions for "colloborationpmcomments" attribute, the attribute is not fetched in the response.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "fb12e0d0-418b-48ea-b2ec-cb56fa04b4e3",
    "maxRecords": 20
  },
  "response": {
    "entities": [
      {
        "id": "JPShirtsVendor1",
        "name": "JPShirtsVendor1",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "infodev1_vendor",
          "createdDate": "2018-08-21T01:22:36.164-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "admin.infodev@riversand.com",
          "modifiedDate": "2018-08-21T01:26:11.447-0500"
        },
        "data": {
          "attributes": {}
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