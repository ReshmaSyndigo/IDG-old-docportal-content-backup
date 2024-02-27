---
title: Preview Trust-based Merge with User Provided Value 
sidebar: rdp_sidebar
permalink: api_feature_trust_matrix_scenario11.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entityservice/mergepreview to preview the outcome of Trust-based operation.

The following table depicts the Merge Matrix defined at attribute type level:

| Current Value | Current Source | New Value | New Source | Resultant Value | Source Considered |
|--------|--------|--------------|----------|-------------|-----------------|
| From Source CRM | CRM | User Value  | User | User Value | User |

**How the resultant value is obtained?**

* Merge Sequence defined at Entity Manage Model is CRM>>BB>>IC.
* Existing source value is "From source CRM" and existing source is CRM.
* New source value is "User Value" and new source is User.
* Resultant value is "User Value" from source User as user takes precedence over the sources. Note that if the user is updating the value for an attribute, then it has the highest precedence for merge action.

## Scenario

1. To create an entity from source "CRM".
2. To preview the Trust-based Merge operation without specifying the source in the request. In such a case, the source is considered as user.

{% include snippets/header.html %}

## Request - 1

To create the above entity, use the REST API {TenantURL or ID}/api/entityappservice/process. In the request send the following details:

* **entity** : In the entity object, provide id, name and type. 

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"src": "CRM"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU102",</span>
    <span style="background-color: #FFFF00">"name": "SKU102",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"mdmid": {</span>
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "From Source CRM",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "SKU102",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre> 

## Response - 1

The following JSON shows the response received:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5b34d651-a39f-4c57-96dd-8b41ffdadb41"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id SKU102. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "SKU102"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Get Entity

You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity.

## Request - 2

To get the above entity with all its attributes, you can use the REST API {TenantURL or ID}/api/entityappservice/get. 

In the request send the following details:

* query -> Ids: Specify the entity identifier. 
* query -> filters -> typesCriterion: Specify the entity type as "sku". 
* fields -> attributes: Specify "_ALL" to get all the attributes of the entity. 

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "SKU102"</span>
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        <span style="background-color: #FFFF00">"_ALL"</span>
      ]
    }
  }
}
</code>
</pre>

## Response - 2

The following response shows the created entity SKU102:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "d4ccf262-e830-4729-9ca9-1f8aa7d74a77",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU102",
        "name": "SKU102",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "infodev-rwtest-business-admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "infodev-rwtest-business-admin@riversand.com",
          "createdDate": "2019-07-09T22:35:19.868-0500",
          "modifiedDate": "2019-07-09T22:35:19.868-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "e2f944b5-8f26-4151-ad88-625088782e61",
                  "value": "From Source CRM"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "343d1ba0-9712-4df7-a5a8-ec9ccaf8795e",
                  "value": "SKU102"
                }
              ]
            },
            "apiscochfourwallstextbox": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0562a679-aef4-46f2-9ecc-a579cfbad12c",
                  "os": "defaults",
                  "osid": "item_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Self Default value"
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

## Preview of Trust-based Merge where User wins

The following JSON is a sample request for the preview of Trust-based Merge operation. The response shows the result where existing value would be replaced with new incoming value as user wins and takes precedence over sources. In this scenario, mdmid would be updated with the User Value. Based on the result, you can decide and proceed with the Trust-based operation.

## Request - 3

<pre>
<code>
POST **{TenantURL or ID}/api/entityservice/mergepreview**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "authorizationType": "accommodate"
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU102",</span>
    <span style="background-color: #FFFF00">"name": "SKU102",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"mdmid": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "c10cde85-a3c3-4cf4-aaf7-1f5b15f4203a",
              <span style="background-color: #FFFF00">"value": "User Value"</span>
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response - 3

The following response shows the preview of Trust-based Merge operation:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "f7cc989c-442c-4407-89ea-74b1e5b460df"
  },
  "response": {
    "entities": [
      {
        "id": "SKU102",
        "name": "SKU102",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "infodev-rwtest-business-admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "infodev-rwtest-business-admin@riversand.com",
          "createdDate": "2019-07-09T22:35:19.868-0500",
          "modifiedDate": "2019-07-09T22:35:19.868-0500"
        },
        "data": {
          "attributes": {
            <span style="background-color: #FFFF00">"mdmid": {</span>
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b2a5b825-582d-4d33-b3fb-9407be2ee8de",
                  <span style="background-color: #FFFF00">"value": "User Value"</span>
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "343d1ba0-9712-4df7-a5a8-ec9ccaf8795e",
                  "value": "SKU102"
                }
              ]
            },
            "apiscochfourwallstextbox": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0562a679-aef4-46f2-9ecc-a579cfbad12c",
                  "os": "defaults",
                  "osid": "item_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Self Default value"
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

