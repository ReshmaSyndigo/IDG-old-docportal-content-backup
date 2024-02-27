---
title: "Set Authorization type - Accommodate/Reject"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario40.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes the authorization types that can be used during entity Create/Update/Delete. There are two types of authorization : "reject" and "accommodate". This is decided based on a flag in request params: "authorizationType": "accommodate" / "reject". If this flag is missing in the request, then fall back to retrieve flag value in tenant config. If the tenant config service does not have the flag, then default is "reject". 

Reject is the pessimistic approach to authorization. Even a single element denial of access stops the request from passing through. For example, even if one attribute in the create entity request does not have write permission, the entity is not created and a "Permission Denied" response is returned. 

Accommodate on the other side is more optimistic. If an element does not have permission, just the particular element is ignored and rest of the entity is processed.

## Scenario

To create an entity with default authorization type("reject") and authorization type as "accomodate".

{% include snippets/header.html %}

### Create Entity with Authorization Type "reject"

To set the authorization type, you can use the REST API {{site.data.rdp_glossary.appcreateentity}}. 
* In this request, consider user mapped to ["belgiumuser" role](api_create_data_model_scenario39.html) wishes to create an entity with context "France". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html). 
* As you have not specified the authorization type, "reject" is taken as the default type.

## Request - 1

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

## Response - 1

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
</code></pre> 

 ### Create Entity with Authorization Type "accomodate"

## Request - 2

* In this request, consider user mapped to ["belgiumuser" role](api_create_data_model_scenario39.html) wishes to create an entity with context "France". Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).
* Specify the authorization type as "accomodate".

<pre><code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "params": {
    <span style="background-color: #FFFF00">"authorizationType": "accommodate"</span>
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

Entity creation is allowed and "France" context data is ignored.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "832f2193-fc43-4477-8e86-ec83c18714b5"
  },
  "response": {
    "entities": [
      {
        "id": "unsavedEntityData",
        "name": "unsavedEntityData",
        "type": "sku",
        "systemInfo": {
          "tenantId": "qa8infodev"
        },
        "data": {
          "attributes": {},
          "contexts": []
        }
      }
    ],
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
    "totalRecords": 1
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.