---
title: "Set Read Permission for Specific Role in Locale"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario65.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to set read permissions for specific role in a locale , using a scenario.

## Scenario

To set read only permissions for "buyer" role in "de-DE" locale. 

{% include snippets/header.html %}

## Request - 1

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the entityModel object,
* Specify the Id and name as "de-DE_authorizationModel_buyer", as you are creating authorization model for "de-DE" locale for "buyer" role.
* In the properties section, 
    * Set read permission to true.
    * Set write permission as false.

{% include callout.html content="**Note**: You must set the flag **isLocaleAuthEnabled** to true in the tenant configuration to enable locale authorization.
" type="primary" %}

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
    <span style="background-color: #FFFF00">"id": "de-DE_authorizationModel_buyer",</span>
    <span style="background-color: #FFFF00">"name": "de-DE_authorizationModel_buyer",</span>
    <span style="background-color: #FFFF00">"type": "authorizationModel",</span>
    "properties": {
      <span style="background-color: #FFFF00">"readPermission": true,</span>
      <span style="background-color: #FFFF00">"writePermission": false</span>
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
          "message": "Submitted authorizationModel for create with Id de-DE_authorizationModel_buyer. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "authorizationModel",
            "create",
            "de-DE_authorizationModel_buyer"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

## Request 2 - Create Entity using the Model

In this request, consider a user with "buyer" role wishes to create an entity in "de-DE" locale. Note that you must specify the userid and role appropriately in the request header. See [User Role Mapping](api_create_data_model_scenario38.html).

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
    "id": "JPShirtsVendor1",
    "name": "JPShirtsVendor1",
    "type": "sku",
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "JPShirtsVendor1",
              "source": "internal",
              "locale": "de-DE"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response - 2

Entity creation in "de-DE" locale is not allowed for "buyer" role, as the "buyer" role has read-only permission for "de-DE" locale.

<pre>
<code>
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
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.