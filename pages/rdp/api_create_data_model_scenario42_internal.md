---
title: "Set Owner Permission"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario42.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set owner permissions, using a scenario.

## Scenario

To set owner permission for "suppliername" attribute for "vendor" role. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object, 
* Specify the id and name as "sku_authorizationModel_vendor", as you are creating authorization model for "vendor" role for entity type "sku".
* In the properties section, 
- set entity type read permission to true.
- set attribute read permission to true/false as per requirement.
* In the data section, explicitly specify the attributes for which you wish to provide owner permissions, such as "suppliername". To do this, set "readPermission" and "ownerPermission" as true for this attribute. This implies that only the attribute owner can read this attribute.

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
      <span style="background-color: #FFFF00">"attributes": {</span>
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
 
### Get Entity using the Model - Scenario 1

In this request, consider user mapped to "vendor" role wishes to read the "sku" entity "JPShirtsVendor1". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

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
</code></pre> 

## Response - 2

As the user who has invoked the entity get, is not the owner, get request fails.

<pre><code>
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
</code></pre> 
 
### Get Entity using the Model - Scenario 2

## Request - 3

* In this request, consider user mapped to "vendor" role wishes to read the "sku" entity "JPShirtsVendor1". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).
* Specify the "ownershipData" as "TrendSetters" in the header.


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
</code></pre> 

## Response - 3 

As the user who has invoked the entity get, is the owner, get request is successful.

<pre><code>
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
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.