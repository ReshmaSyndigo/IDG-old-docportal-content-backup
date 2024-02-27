---
title: "Set OwnerEdit Permission"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario49.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set owneredit permissions, using a scenario.

## Scenario

To set ownerEdit permission for "collaborationvendorcomments" attribute for "buyer" role. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object, 
* Specify the id and name as "sku_authorizationModel_buyer", as you are creating authorization model for "buyer" role for entity type "sku".
* In the properties section
  - set entity type write permission to true.
  - set attribute write permission to true/false as per requirement.
* In the data section, explicitly specify the attributes for which you wish to provide ownershipedit permissions, such as "collaborationvendorcomments". Set "writePermission" and "ownerEditPermission" as true for this attribute. This implies that only the attribute owner can edit this attribute.

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
        <span style="background-color: #FFFF00">"collaborationvendorcomments": {</span>
          "properties": {
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": true,</span>
            "ownerPermission": false,
            <span style="background-color: #FFFF00">"ownerEditPermission": true</span>
          }
        },
        "collaborationpmcomments": {
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

## Request 2 - Create Entity using the Model

In this request, consider user mapped to "buyer" role wishes to create the "sku" entity "JPShirtsBuyer". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html). The "ownershipEditData" in header must be set to "Available".

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
    <span style="background-color: #FFFF00">"id": "JPShirtsBuyer",</span>
    <span style="background-color: #FFFF00">"name": "JPShirtsBuyer",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "JPShirtsBuyer",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "JPShirtsBuyer",
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
        "collaborationvendorcomments": {
          "values": [
            {
              "value": "Available",
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

## Response 2 

As the user who has invoked the entity create, is the owner, create entity is successful.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "788be028-2520-4753-a04e-7175de98a66b"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id JPShirtsBuyer. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "JPShirtsBuyer"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 


## Request 3 - Get Entity using the Model

* In this request, consider user mapped to "buyer" role wishes to read the "sku" entity "JPShirtsBuyer". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).
* Specify the "ownershipEditData" as "Available" in the header.

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "params": {
    "intent": "write",
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "JPShirtsBuyer"</span>
    },
    "fields": {
      "attributes": [
        "collaborationvendorcomments"
      ]
    },
    "options": {
      "maxRecords": 1
    }
  }
}
</code></pre> 

## Response 3 

As "ownerEditData" in the header matches the edited attribute value, get request is successful.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "cd54b39b-b31f-49dc-836b-2039a3166898",
    "maxRecords": 1
  },
  "response": {
    "entities": [
      {
        "id": "JPShirtsBuyer",
        "name": "JPShirtsBuyer",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "infodev1_buyer",
          "modifiedService": "entityManageService",
          "modifiedBy": "infodev1_buyer",
          "createdDate": "2018-08-23T01:23:30.130-0500",
          "modifiedDate": "2018-08-23T01:23:30.130-0500"
        },
        "data": {
          "attributes": {
            "collaborationvendorcomments": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9c608e25-c0e5-4055-9f96-aba827350c19",
                  "value": "Available"
                }
              ]
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
