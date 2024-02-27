---
title: "Set Write Permission for Specific Attribute"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario41.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set write permissions for specific attributes, using a scenario.

## Scenario

To restrict user mapped to "vendor" role from editing "suppliername" attribute.

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object, 
* Specify the id and name as "sku_authorizationModel_vendor", as you are creating authorization model for "vendor" role for entity type "sku".
* In the properties section, 
- set entity type write permission to true.
- set attribute write permission to true.

* In the data section, specify the attributes for which you want to explicitly restrict write permission. In this scenario, you wish to restrict user with "vendor" role from editing an attribute, say "suppliername". Hence set "writePermission" to false for this attribute.
  
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
      "readPermission": true,
      <span style="background-color: #FFFF00">"writePermission": true,</span>
      "deletePermission": false,
      "attributesPermission": [
        {
          "readPermission": true,
          <span style="background-color: #FFFF00">"writePermission": true,</span>
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
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "properties": {
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": false,</span>
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
</code></pre> 

### Create Entity using the Model

In this request, consider user mapped to "vendor" role wishes to create an entity with "suppliername" as "TrendSetters". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

## Request - 2

<pre><code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "JPShirtsVendor1",</span>
    <span style="background-color: #FFFF00">"name": "JPShirtsVendor1",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "JPShirtsVendor1",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "JPShirtsVendor1",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Crisp Cotton Shirt",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "color": {
          "values": [
            {
              "value": "Peach",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "size": {
          "values": [
            {
              "value": "L",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "suppliername": {
          "values": [
            {
              "value": "TrendSetters",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code></pre> 

## Response - 2

Entity creation is not allowed as "vendor" role does not have permissions to edit "suppliername" attribute.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "8f3b6802-ae21-42d6-8877-9ce8c53f8958"
  },
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Permission Denied",
          "messageCode": "PD001",
          "messageType": "error"
        },
        {
          "messageCode": "E0029",
          "message": "Request could not be completed successfully.",
          "messageType": "error"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 


## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
