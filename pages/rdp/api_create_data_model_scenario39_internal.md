---
title: "Set Context Level Permissions"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario39.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set context level permissions for an entity type, using a scenario.

## Scenario

To provide context permissions for "belgiumuser", only for country context "Belgium" for a "sku" entity. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object,
* Specify the id and name of the model. As you are creating authorization model for "belgiumuser" role for "sku" entity type, specify it as sku_authorizationModel_belgiumuser. Specify the type as "authorizationModel".
* In the properties section, 
  - set entity type write permission to true.
  - set context write permission to false.
* In the data section, only for "Belgium" country context, enable context write permissions.

  
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
      <span style="background-color: #FFFF00">"writePermission": true,</span>
      "deletePermission": false,
      "contextAuthorizationPath": "country>>channel",
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
          <span style="background-color: #FFFF00">"context": {</span>
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
                "deletePermission": true
              }
            ],
            "readPermission": true,
            <span style="background-color: #FFFF00">"writePermission": true</span>
          }
        },
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "country": "Belgium",
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
</code>
</pre> 


### Create Entity using the Model - Scenario 1

In this request, consider user mapped to "belgiumuser" role wishes to create an entity with country context "France". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

## Request - 2

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "JPShirtsBelUser",</span>
    <span style="background-color: #FFFF00">"name": "JPShirtsBelUser",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "JPShirtsBelUser",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "JPShirtsBelUser",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "100% Cotton",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "color": {
          "values": [
            {
              "value": "Blue",
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
        }
      },
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "country": "France",
            "channel": "France Web"
          },
          "attributes": {
            "vat": {
              "values": [
                {
                  "value": "10",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          }
        }
      ]
    }
  }
}
</code></pre> 

## Response - 2

Entity creation is not allowed as "belgiumuser" does not have permissions to create in "France" context.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "6895f0ea-974b-448e-a15c-c5864f78911f"
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
</code>
</pre> 

### Create Entity using the Model - Scenario 2

In this request, consider user mapped to "belgiumuser" role wishes to create an entity with country context "Belgium". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

## Request - 3

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "JPShirtsBelUser",</span>
    <span style="background-color: #FFFF00">"name": "JPShirtsBelUser",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "JPShirtsBelUser",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "JPShirtsBelUser",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "100% Cotton",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "color": {
          "values": [
            {
              "value": "Blue",
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
        }
      },
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "country": "Belgium",
            "channel": "Belgium Web"
          },
          "attributes": {
            "vat": {
              "values": [
                {
                  "value": "10",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          }
        }
      ]
    }
  }
}
</code>
</pre> 

## Response - 3

Entity creation is allowed as "belgiumuser" has permissions to create in "Belgium" context.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "78705735-48f4-4de4-8f5a-7981ee4a7e3f"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id JPShirtsBelUser. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "JPShirtsBelUser"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.