---
title: "Merge Permissions - Single User Multiple Roles"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario45.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to merge permissions when a user is mapped to multiple roles, using a scenario. The following table lists out merge permissions for specific attributes, at the entity or self-context level, for a user mapped to three roles:

{% picture scenario1_attribute_relationship_permissions.png alt="Merge Specific Attribute Permissions" %}

## Scenario

To merge permissions for user mapped to multiple roles. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object,
* Specify the id and name. Specify type as "user".
* Map the user to two roles "belgiumuser" and "vendor".

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
    <span style="background-color: #FFFF00">"id": "infodev1_beluservend",</span>
    <span style="background-color: #FFFF00">"name": "infodev1_beluservend",</span>
    <span style="background-color: #FFFF00">"type": "user",</span>
    "properties": {
      "firstName": "infodev1_beluservend",
      "lastName": "infodev1_beluservend",
      "login": "infodev1_beluservend",
      "email": "infodev1_beluservend@riversand.com",
      <span style="background-color: #FFFF00">"roles": [</span>
        "belgiumuser",
        "vendor"
      ]
    }
  }
}
</code></pre> 

## Response - 1

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
          "message": "Submitted authorizationModel for create with Id infodev1_beluservend. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "authorizationModel",
            "create",
            "infodev1_beluservend"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

### Create Entity using the Model

In this request, the user "infodev1_beluservend" wishes to create an entity with "suppliername" attribute and "France" context. Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

## Request - 2

<pre><code>
POST **{{site.data.rdp_glossary.entityappcreate}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "JPShirtsBelUserVendor",</span>
    <span style="background-color: #FFFF00">"name": "JPShirtsBelUserVendor",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "JPShirtsBelUserVendor",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "JPShirtsBelUserVendor",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Hand wash only",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "color": {
          "values": [
            {
              "value": "plum",
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
        <span style="background-color: #FFFF00">"suppliername": {</span>
          "values": [
            {
              "value": "TrendSetters",
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
            "channel": "Web",
            "taxonomy": "Master Taxonomy"
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

Although "vendor" role does not have permissions to edit "suppliername" and "belgiumuser" role does not have permissions to create "France" context, entity creation is successful. This is because the authorization model for the user "infodev1_beluservend" has been derived internally by merging the permissions of "belgiumuser" role and "vendor" role. 


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
          "message": "Submitted sku for create with Id JPShirtsBelUserVendor. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "JPShirtsBelUserVendor"
          ]
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
* [Get Nearest Matching Context from Authorization Model](api_create_data_model_scenario44.html)
" %}