---
title: Merge at Collection Attribute Level using Override
sidebar: rdp_sidebar
permalink: api_feature_trust_matrix_scenario8.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entityappservice/process to create an entity with user provided values. The entity is then processed where the attribute values are updated from external source "CRM" with merge sequence defined as SAP»CRM»IC. CRM source wins and takes precedence and the attribute value from CRM is updated. The resultant attribute data uses the "override" property and overrides the existing value with the incoming value from "CRM" source.

You can verify if the values are updated using a GET operation which is explained in the verify section. See [Verify the entity configuration with Merge Matrix](#verify-the-entity-configuration-with-merge-matrix).

The following table depicts the Merge Matrix defined at attribute type level:

| Current Value | Current Source | New Value | New Source | Updated Value | Source Considered |
|--------|--------|--------------|----------|-------------|-----------------|
| 0 | User | Large | CRM | Large | CRM |

## Scenario

1. To create an entity with User provided attribute value.
2. To update the entity with "override" property where it overrides the existing value with new incoming value. 

{% include snippets/header.html %}

## Request - 1

To create the above entity, use the REST API {TenantURL or ID}/api/entityappservice/process. In the request send the following details:

entity : In the entity object, provide id, name and type. 
data : Specify the user provided attribute values to be created, in the entity.

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU105",</span>
    <span style="background-color: #FFFF00">"name": "SKU105",</span>
    <span style="background-color: #FFFF00">"type": "item",</span>
    <span style="background-color: #FFFF00">"data": {</span>
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "SKU105",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "SKU105",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "apiscochbrandsize": {
          "values": [
            {
              "source": "internal",
              "locale": "es-US",
              "id": "ce934713-c751-459d-8089-31032aab4fe5",
              <span style="background-color: #FFFF00">"value": "0"</span>
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

<pre><code>
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
          "message": "Submitted item for create with Id SKU105. Check after some time",
          "messageType": "success",
          "messageParams": [
            "item",
            "create",
            "SKU105"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Verify the entity configuration

You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity.

## Request - 2

To get the above entity with all its attributes, you can use the REST API {TenantURL or ID}/api/entityappservice/get. 

In the request send the following details:

* query -> Ids: Specify the entity identifier. 
* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product". 
* fields -> attributes: Specify "_ALL" to get all the attributes of the entity. 
* fields -> relationships: Specify "_ALL" to get all the relationships of the entity.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"filters": {</span>
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          <span style="background-color: #FFFF00">"item"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "SKU105"</span>
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        <span style="background-color: #FFFF00">"_ALL"</span>
      ],
      <span style="background-color: #FFFF00">"relationships": [</span>
        <span style="background-color: #FFFF00">"_ALL"</span>
      ]
    }
  }
}
</code>
</pre>

## Response - 2

The following response shows the updated collection attribute values.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "6d9b8142-a20c-40f7-9a4e-166d67297a7c",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU105",
        "name": "_EMPTY",
        "type": "item",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "createdDate": "2019-04-27T22:38:34.274-0500",
          "modifiedDate": "2019-04-27T22:38:34.274-0500"
        },
        "data": {
          "attributes": {
            "apiscochbrandsize": {
              "values": [
                {
                  "source": "internal",
                  "locale": "es-US",
                  "id": "faba1046-152b-411e-b359-9cb61d115624",
                  <span style="background-color: #FFFF00">"value": 0</span>
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

## Apply Merge Matrix where CRM wins

## Request - 3

To update the entity with "override" property where it overrides the existing value with new incoming value.

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "src": "CRM"
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU105",</span>
    <span style="background-color: #FFFF00">"name": "SKU105",</span>
    <span style="background-color: #FFFF00">"type": "item",</span>
    <span style="background-color: #FFFF00">"data": {</span>
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "SKU105",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "SKU105",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "apiscochbrandsize": {
          "values": [
            {
              "source": "internal",
              "locale": "es-US",
              "id": "ce934713-c751-459d-8089-31032aab4fe5",
              "value": "1 Seat"
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

<pre><code>
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
          "message": "Submitted item for create with Id SKU105. Check after some time",
          "messageType": "success",
          "messageParams": [
            "item",
            "create",
            "SKU105"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Verify the entity configuration with Merge Matrix

You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity.

## Request - 4

To get the above entity with all its attributes, you can use the REST API {TenantURL or ID}/api/entityappservice/get. 

In the request send the following details:

* query -> Ids: Specify the entity identifier. 
* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product". 
* fields -> attributes: Specify "_ALL" to get all the attributes of the entity. 
* fields -> relationships: Specify "_ALL" to get all the relationships of the entity.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"filters": {</span>
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          <span style="background-color: #FFFF00">"item"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "SKU105"</span>
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        <span style="background-color: #FFFF00">"_ALL"</span>
      ],
      <span style="background-color: #FFFF00">"relationships": [</span>
        <span style="background-color: #FFFF00">"_ALL"</span>
      ]
    }
  }
}
</code>
</pre>

## Response - 4

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5e69a6e8-0e6d-43ac-91d7-2e0b6ea6f57e",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU105",
        "name": "_EMPTY",
        "type": "item",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "createdDate": "2019-04-27T22:42:43.389-0500",
          "modifiedDate": "2019-04-27T22:42:43.389-0500"
        },
        "data": {
          "attributes": {
            "apiscochbrandsize": {
              "values": [
                {
                  "source": "internal",
                  "locale": "es-US",
                  "src": "CRM",
                  "id": "225eb658-683d-4bf5-aeec-6d8469a0b26c",
                  <span style="background-color: #FFFF00">"value": "Large"</span>
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