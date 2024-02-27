---
title: Merge at Collection Attribute Level using Aggregate
sidebar: rdp_sidebar
permalink: api_feature_trust_matrix_scenario5.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entityappservice/process to create an entity with user provided attribute. Merge Sequence is IC>>BB. The entity is then processed where the attribute value is updated from external source IC with merge sequence defined as IC>>BB. The "aggregate" function appends the existing values with the incoming values.

See [Verify the entity configuration with Merge Matrix](#verify-the-entity-configuration-with-merge-matrix).

The following table depicts the Merge Matrix defined at attribute type level:

| Current Value | Current Source | New Value | New Source | Updated Value | Source Considered |
|--------|--------|--------------|----------|-------------|-----------------|
| Azure Blue, Aqua Green | BB | Dark Red | User | Azure Blue, Aqua Green, Dark Red | BB, User |

## Scenario

1. To create an entity with BB provided attribute.
2. To update the entity with "aggregate" property where it appends the existing values with new incoming value.

{% include snippets/header.html %}

## Request - 1

To create the above entity, use the REST API {TenantURL or ID}/api/entityappservice/process. In the request send the following details:

entity : In the entity object, provide id, name and type. 
data : Specify the user provided attribute values to be created, in the entity.
src: Specify the external source.

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"src": "BB"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU103",</span>
    <span style="background-color: #FFFF00">"name": "SKU103",</span>
    <span style="background-color: #FFFF00">"type": "item",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "SKU103",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "SKU103",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "apiscofurnishrefcol": {
          "values": [
            {
              "source": "internal",
              "locale": "es-US",
              "id": "ce934713-c751-459d-8089-31032aab4fe5",
              <span style="background-color: #FFFF00">"value": "Azure Blue"</span>
            },
            {
              "source": "internal",
              "locale": "es-US",
              "id": "ce934713-c751-459d-8089-31032aab4fe5",
              <span style="background-color: #FFFF00">"value": "Aqua Green"</span>
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
          "message": "Submitted item for create with Id SKU103. Check after some time",
          "messageType": "success",
          "messageParams": [
            "item",
            "create",
            "SKU103"
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
      "filters": {
        "typesCriterion": [
          "item"
        ]
      },
      <span style="background-color: #FFFF00">"id": "SKU103"</span>
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

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "690168c9-1590-4806-a8bd-99977f644bf3",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Matrix3AutoMergeapiTC001",
        "name": "_EMPTY",
        "type": "item",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "createdDate": "2019-04-27T21:58:23.828-0500",
          "modifiedDate": "2019-04-27T21:58:23.828-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "900ac489-db61-4780-97bf-4d1cbd072e0e",
                  "value": "Matrix3AutoMergeapiTC001"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "34069d1a-28ba-4f1a-9d83-728c3f2f1987",
                  "value": "Matrix3AutoMergeapiTC001"
                }
              ]
            },
            "apiscofurnishrefcol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "es-US",
                  "src": "BB",
                  "id": "317e6c04-baa8-4b81-98e8-aec07102c64c",
                  "value": "Azure Blue"
                },
                {
                  "source": "internal",
                  "locale": "es-US",
                  "src": "BB",
                  "id": "d947842e-7881-44bc-921a-c392aad7087e",
                  "value": "Aqua Green"
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

## Apply Merge Matrix where BB and User wins

## Request - 3

To update the entity with "aggregate" property where it appends the existing values with new incoming value.

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "SKU103",
    "name": "SKU103",
    "type": "item",
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "SKU103",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "SKU103",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "apiscofurnishrefcol": {
          "values": [
            {
              "source": "internal",
              "locale": "es-US",
              "id": "ce934713-c751-459d-8089-31032aab4fe5",
              <span style="background-color: #FFFF00">"value": "Dark Red"</span>
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
          "message": "Submitted item for create with Id SKU103. Check after some time",
          "messageType": "success",
          "messageParams": [
            "item",
            "create",
            "SKU103"
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
      "filters": {
        "typesCriterion": [
          "item"
        ]
      },
      "id": "SKU103"
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
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
    "requestId": "690168c9-1590-4806-a8bd-99977f644bf3",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Matrix3AutoMergeapiTC001",
        "name": "_EMPTY",
        "type": "item",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "createdDate": "2019-04-27T21:58:23.828-0500",
          "modifiedDate": "2019-04-27T21:58:23.828-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "900ac489-db61-4780-97bf-4d1cbd072e0e",
                  "value": "Matrix3AutoMergeapiTC001"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "34069d1a-28ba-4f1a-9d83-728c3f2f1987",
                  "value": "Matrix3AutoMergeapiTC001"
                }
              ]
            },
            "apiscofurnishrefcol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "es-US",
                  "src": "BB",
                  "id": "317e6c04-baa8-4b81-98e8-aec07102c64c",
                  <span style="background-color: #FFFF00">"value": "Azure Blue"</span>
                },
                {
                  "source": "internal",
                  "locale": "es-US",
                  "src": "BB",
                  "id": "d947842e-7881-44bc-921a-c392aad7087e",
                  <span style="background-color: #FFFF00">"value": "Aqua Green"</span>
                },
                {
                  "source": "internal",
                  "locale": "es-US",
                  "id": "38bfa467-1cff-49d0-9b53-aefa3b4fc09c",
                  <span style="background-color: #FFFF00">"value": "Dark Red"</span>
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