---
title: "Get Nearest Matching Context from Authorization Model"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario44.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to get maximum matching context from authorization model, using a scenario. The nearest matching context is found based on the hierarchy specified in the contextauthorizationpath in the authorization model. A weightage is given to each context type and the context score is calculated. Consider the contextauthorization path is "country>>channel>>taxonomy>>classification". Classification has the highest weightage and country the lowest. The authorization model is applied based on the context which gets the maximum score.

## Scenario

To create an entity in a context which is not exactly present in the authorization model. The permissions are applied based on nearest matching context in the authorization model. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object
* Specify the id and name as "sku_authorizationModel_belgiumadmin", as you are creating authorization model for "belgiumadmin" role for entity type "sku".
* In the properties section, 
  - set entity type write permission to true.
  - set context write permission to false.
* In the data section, specify the write permission for specific context paths, such as
  * Belgium
  * Belgium>>Web
  * Belgium>>Retail
  * Belgium>>_ALL>>_ALL
  * Belgium>>Web>>_ALL>>_ALL
  * Belgium>>Master Taxonomy
  
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
    <span style="background-color: #FFFF00">"id": "sku_authorizationModel_belgiumadmin",</span>
    <span style="background-color: #FFFF00">"name": "sku_authorizationModel_belgiumadmin",</span>
    <span style="background-color: #FFFF00">"type": "authorizationModel",</span>
    "properties": {
      "readPermission": true,
      <span style="background-color: #FFFF00">"writePermission": true,</span>
      "deletePermission": false,
      "contextAuthorizationPath": "country>>channel>>taxonomy>>classification",
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
          <span style="background-color: #FFFF00">"writePermission": false,</span>
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
            <span style="background-color: #FFFF00">"country": "Belgium"</span>
          },
          "properties": {
            "attributesPermission": [
              {
                "writePermission": true,
                "readPermission": true,
                "deletePermission": true
              }
            ],
            "relationshipsPermission": [
              {
                "readPermission": true,
                "writePermission": true,
                "deletePermission": true
              }
            ],
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": true</span>
          }
        },
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Belgium",</span>
            <span style="background-color: #FFFF00">"channel": "Web"</span>
          },
          "properties": {
            "attributesPermission": [
              {
                "writePermission": true,
                "readPermission": true,
                "deletePermission": true
              }
            ],
            "relationshipsPermission": [
              {
                "readPermission": true,
                "writePermission": true,
                "deletePermission": true
              }
            ],
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": true</span>
          }
        },
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Belgium",</span>
            <span style="background-color: #FFFF00">"channel": "Retail"</span>
          },
          "properties": {
            "attributesPermission": [
              {
                "writePermission": true,
                "readPermission": true
              }
            ],
            "relationshipsPermission": [
              {
                "readPermission": true,
                "writePermission": true,
                "deletePermission": true
              }
            ],
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": true</span>
          }
        },
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Belgium",</span>
            <span style="background-color: #FFFF00">"taxonomy": "_ALL",</span>
            <span style="background-color: #FFFF00">"classification": "_ALL"</span>
          },
          "properties": {
            "attributesPermission": [
              {
                "writePermission": true,
                "readPermission": true,
                "deletePermission": true
              }
            ],
            "relationshipsPermission": [
              {
                "readPermission": true,
                "writePermission": true,
                "deletePermission": true
              }
            ],
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": true</span>
          }
        },
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Belgium",</span>
            <span style="background-color: #FFFF00">"channel": "Web",</span>
            <span style="background-color: #FFFF00">"taxonomy": "_ALL",</span>
            <span style="background-color: #FFFF00">"classification": "_ALL"</span>
          },
          "properties": {
            "attributesPermission": [
              {
                "writePermission": true,
                "readPermission": true,
                "deletePermission": true
              }
            ],
            "relationshipsPermission": [
              {
                "readPermission": true,
                "writePermission": true,
                "deletePermission": true
              }
            ],
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": true</span>
          }
        },
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Belgium",</span>
            <span style="background-color: #FFFF00">"taxonomy": "Master Taxonomy"</span>
          },
          "properties": {
            "attributesPermission": [
              {
                "writePermission": true,
                "readPermission": true,
                "deletePermission": true
              }
            ],
            "relationshipsPermission": [
              {
                "readPermission": true,
                "writePermission": false,
                "deletePermission": true
              }
            ],
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": true</span>
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
          "message": "Submitted authorizationModel for create with Id sku_authorizationModel_belgiumadmin. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "authorizationModel",
            "create",
            "sku_authorizationModel_belgiumadmin"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

## Request 2 - Create Entity using the Model

In this request, user with "belgiumadmin" role wishes to create an entity with context "Belgium>>Web>>Master Taxonomy". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

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
    <span style="background-color: #FFFF00">"id": "JPShirtsBelAdmin",</span>
    <span style="background-color: #FFFF00">"name": "JPShirtsBelAdmin",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "JPShirtsBelAdmin",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "JPShirtsBelAdmin",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Dry clean only",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "color": {
          "values": [
            {
              "value": "Green",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "size": {
          "values": [
            {
              "value": "XL",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            <span style="background-color: #FFFF00">"country": "Belgium",</span>
            <span style="background-color: #FFFF00">"channel": "Web",</span>
            <span style="background-color: #FFFF00">"taxonomy": "Master Taxonomy"</span>
          },
          "relationships": {
            "ischildof": [
              {
                "id": "JPShirtsRel1",
                "relationshipType": "Composition",
                "relTo": {
                  "id": "MensShirts",
                  "type": "product"
                }
              }
            ]
          }
        }
      ]
    }
  }
}
</code></pre> 

## Response - 2

The nearest matching context is "Belgium>>Master Taxonomy". Since, relationship write permission is set to false in this context, entity creation fails.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "a3620398-9bbd-4035-8632-27fdb8b42f2c"
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
* [Set Delete Permission](api_create_data_model_scenario43.html)
* [Merge Permissions - Single User Multiple Roles](api_create_data_model_scenario45.html)
" %}