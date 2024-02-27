---
title: "Set MultiValued Ownership Permission"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario76.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set multivalued ownership permission, using a scenario. In Riversand Platform, a single user can be mapped to multiple ownership values. This enables single user to access multiple owned entities as per CRUD permissions. For example, consider a user is mapped to two ownership values "TrendSetters" and "HipHop". The user can access all entities that have ownership attribute as "TrendSetters" or "HipHop".
* The ownership header of [entity app service requests](api_app_service.html) can contain an array of ownership values. 
  - If any of the values in the ownership header matches any of the values in the ownership attribute, ownership authorization is successful.
  - If none of the values in the ownership header matches any of the values in the ownership attribute, ownership authorization is unsuccessful.
  - NO_OWNER in the ownership header indicates that the user can access all unowned entities based on the CRUD permissions. Consider the following scenario: You have performed an import of entities without ownership attribute value but the entities require ownership attribute value. In such cases, you can execute a business rule to set the ownership value of these entities to "NO_OWNER". Now, consider a user is mapped to two ownership values "TrendSetters" and "NO_OWNER". The user can access all entities that have ownership attribute as "NO_OWNER" and update the ownership attribute as required.
* DDG keyword is used to populate the default value in ownership attribute :
  1.	Use GetUserOwnershipDataCollection keyword to get the collection of user ownership data.
  2.	Write a business rule to set the values of ownership attribute to the value/values returned from the keyword based on the business requirement.
*  Similarly you can also set multivalued [ownerEdit authorization permissions](api_create_data_model_scenario49.html).

## Scenario

To set multivalued ownership permission for "suppliername" attribute for "buyer" role. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object, 
* Specify the id and name as "sku_authorizationModel_buyer", as you wish to create authorization model for "buyer" role for entity type "sku".
* In the properties section
  - set entity type read permission to true.
  - set attribute read permission to true/false as per requirement.
* In the data section, explicitly specify the attribute for which you wish to provide ownership permissions, such as suppliername. To do this, set "readPermission" and "ownerPermission" as true for the attribute. This implies that only the owners can access the entities based on CRUD permissions.

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
    <span style="background-color: #FFFF00">"id": "sku_authorizationModel_buyer",</span>
    <span style="background-color: #FFFF00">"name": "sku_authorizationModel_buyer",</span>
    <span style="background-color: #FFFF00">"type": "authorizationModel",</span>
    <span style="background-color: #FFFF00">"properties": {</span>
      "readPermission": true,
      "writePermission": true,
      "deletePermission": false,
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
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "properties": {
            <span style="background-color: #FFFF00">"readPermission": true,</span>
            "writePermission": false,
            <span style="background-color: #FFFF00">"ownerPermission": true</span>
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
</code>
</pre>

## Response - 1

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
          "message": "Submitted authorizationModel for create with Id sku_authorizationModel_buyer. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "authorizationModel",
            "create",
            "sku_authorizationModel_buyer"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Request 2 - Get Entity using the Model (Scenario 1)

In this request, consider user mapped to "buyer" role wishes to read the "sku" entity "JPShirtsVendor1". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html). The ownership header is ["FashionFolks","WowStyles"].

<pre>
<code>
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
      <span style="background-color: #FFFF00">"id": "JPShirtsVendor1"</span>
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1
    }
  }
}
</code>
</pre>

## Response 2 

As the user who has invoked the entity get is not the owner, that is the ownership data in the header does not match the value of the ownership attribute "suppliername", get request fails.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "cad66515-1ffc-4aca-ae38-1b18b0bb9902"
  },
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Authentication Failure",
          "messageType": "error",
          "messageCode": "GE001"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Request 3 - Get Entity using the Model (Scenario 2)

* In this request, consider user mapped to "buyer" role wishes to read the "sku" entity "JPShirtsVendor1". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).
* Specify the "ownershipData" as ["FashionFolks","TrendSetters","NO_OWNER"] in the header. As one of the values of the ownership data in the header matches the value of the ownership attribute "suppliername", entity get is successful.

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
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "JPShirtsVendor1"</span>
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1
    }
  }
}
</code>
</pre>

## Response 3 

As the user who has invoked entity get, is the owner, get request is successful.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "68e031a1-12e3-4dbd-ab36-50aa617d0929",
    "maxRecords": 1
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
          "modifiedService": "entityManageService",
          "modifiedBy": "infodev1_vendor",
          "createdDate": "2018-08-18T13:25:38.039-0500",
          "modifiedDate": "2018-08-18T13:25:38.039-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "141a0acf-f9ed-41d4-be20-8bdff2cc8310",
                  "value": "JPShirtsVendor1"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f2857e37-83a6-4e64-a5a6-e23d619b2a71",
                  "value": "JPShirtsVendor1"
                }
              ]
            },
            "description": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "10bd03d7-1de7-4053-acf7-286d3be50ee2",
                  "value": "Crisp Cotton Shirt"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4bb030ee-c882-442c-ad9d-8b05e8f2646d",
                  "value": "Peach"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "55b5e16d-d722-480d-8552-1efe0366fa4c",
                  "value": "L"
                }
              ]
            },
            "suppliername": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "96de7961-8fbe-46b5-8b11-d606a4c36d7e",
                  "value": "TrendSetters"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3fa5c516-480a-4862-a024-4f8cbbc9fb81",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "fb3861b6-d7d3-4bc2-b5e7-f2c7c8bffadb",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2018-08-18T13:25:38.268-0500"
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d7b32dcc-8899-4009-a756-8324d8ffbffe",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d22f1ad9-62af-49ff-b892-b0bc2f80e4be",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ]
            },
            "productName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1367d958-e2f6-4009-b4f0-1db8a8a6f797",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "poloShirt",
                  "value": "poloShirt"
                }
              ]
            },
            "productDescription": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0e11f951-9a6c-4ebb-9770-024ac9dae4ad",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "Excellent Cotton Crisp Shirt",
                  "value": "Excellent Cotton Crisp Shirt"
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
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.