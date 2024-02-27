---
title: Merge using External Source Value
sidebar: rdp_sidebar
permalink: api_feature_trust_matrix_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entityappservice/process to create an entity with user provided values. The entity is then processed where the attribute values are updated from external source "CRM" with merge sequence defined as BB»IC»CRM. CRM source wins and takes precedence and the attribute value from CRM is updated. You can verify if the values are updated using a GET operation which is explained in the verify section. See [Verify the entity configuration with Merge Matrix](#verify-the-entity-configuration-with-merge-matrix).

The following table depicts the Merge Matrix defined at Entity type level:

| Current Value | Current Source | New Value | New Source | Updated Value | Source Considered |
|--------|--------|--------------|----------|-------------|-----------------|
| User Provided Value | User | CRM Value | CRM | CRM Value | CRM |

## Scenario

1. To create an entity with user provided values.
2. To update the created entity with CRM values.

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
    <span style="background-color: #FFFF00">"id": "SKU001",</span>
    <span style="background-color: #FFFF00">"name": "SKU001",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>,
    <span style="background-color: #FFFF00">"data": {</span>
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "SKU001",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "SKU001",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "warrantyincluded": {
          "values": [
            {
              "value": "True",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "effectivefromdate": {
          "values": [
            {
              "value": "2018-09-25",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "submitteddatetime": {
          "values": [
            {
              "value": "2018-09-25T05:48:10.321-0500",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "masterpackheight": {
          "values": [
            {
              "value": 123.33,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "masterpackqty": {
          "values": [
            {
              "value": 24,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "sitemperpackquantity": {
          "values": [
            {
              "value": "twentythree",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "brandexception": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "User Given Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customeraction": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "User Given Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customerexplanation": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "User Given Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "furnmeasurement": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "User Given Val",</span>
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "Furniture Measurement 002",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "notes": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "User Given Val 001",</span>
              "source": "internal",
              "locale": "en-US"
            },
            {
              <span style="background-color: #FFFF00">"value": "User Given Val 002",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "warrantylinks": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "User Given Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "factoryaddress": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "User Given Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "fit": {
          "values": [
            {
              "value": "White",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "brandsize": {
          "values": [
            {
              "value": "10",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "3 Seats",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "1 Seat",
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
          "message": "Submitted sku for create with Id SKU101. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "SKU101"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

## Verify the created entity configuration

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
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "SKU101"</span>
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
    "requestId": "f19f430c-d5af-42d8-9ef6-847aed6799d8",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU101",
        "name": "SKU101",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "createdDate": "2019-04-26T04:05:57.884-0500",
          "modifiedDate": "2019-04-26T04:05:57.884-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "19ca425c-23b0-4ca5-9c0f-58afae86fbf8",
                  "value": "SKU101"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "584c191b-d2c0-48ce-b739-7046b8360f1e",
                  "value": "SKU101"
                }
              ]
            },
            "warrantyincluded": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "74fb702c-3a53-4aff-847e-1206f0b4db6e",
                  "value": true
                }
              ]
            },
            "effectivefromdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "87a78783-1614-4098-8d54-060a61ea5321",
                  "value": "2018-09-25"
                }
              ]
            },
            "submitteddatetime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3bffa942-9abc-4424-a7db-05ea3cebf133",
                  "value": "2018-09-25T05:48:10.321-0500"
                }
              ]
            },
            "masterpackheight": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b8adeae7-7078-4864-8443-9bc0bc4cc8d8",
                  "value": 123.33
                }
              ]
            },
            "masterpackqty": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e84523a5-ab35-4d45-8cd0-182fcccbb482",
                  "value": 24
                }
              ]
            },
            "sitemperpackquantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f0c4c577-7cd6-4baa-bbbe-c1a876bb5a47",
                  "value": "twentythree"
                }
              ]
            },
            "brandexception": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f5a98b43-0908-4f74-8919-c0ee98903d7e",
                  "value": "User Given Val"
                }
              ]
            },
            "customeraction": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "276f2bab-8554-486c-9028-7fc4dfb238a3",
                  "value": "User Given Val"
                }
              ]
            },
            "customerexplanation": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e66e316e-375b-4a08-b9b2-14ca1fcb13e2",
                  "value": "User Given Val"
                }
              ]
            },
            "furnmeasurement": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b36738c5-20f1-4b96-bc6a-689db84f99a1",
                  "value": "User Given Val"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ff299344-6170-48d8-ab24-c6dadebbae29",
                  "value": "Furniture Measurement 002"
                }
              ]
            },
            "notes": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bc206ec7-1116-4697-94a1-928809cbcc59",
                  "value": "User Given Val 001"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cb0ebb9a-4dad-432f-9418-5e012ebb9828",
                  "value": "User Given Val 002"
                }
              ]
            },
            "warrantylinks": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cee644bd-a693-4a2a-af6b-dd08e98175ef",
                  "value": "User Given Val"
                }
              ]
            },
            "factoryaddress": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a3e00d87-9fd0-4282-9233-28bc9e88a133",
                  "value": "User Given Val"
                }
              ]
            },
            "fit": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a348aab5-ce2c-482a-b5fc-4f391a3fd852",
                  "value": "White"
                }
              ]
            },
            "brandsize": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ce343bb9-9576-41f8-9ead-8107bbdeb15c",
                  "value": 10
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bb9da864-4672-4797-8609-81f52a2070e7",
                  "value": "3 Seats"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "59a904bf-adab-4eb3-8084-5141a09b512d",
                  "value": "1 Seat"
                }
              ]
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7d0e6f82-a162-4e04-8784-20f8ce0e5cab",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2019-04-26T04:05:58.824-0500"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d324001b-6efe-42fd-8e0a-b072810a6a4f",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "invalidValue": "New",
                  "value": "New"
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7ab5f56d-6c09-4cd5-8ac3-7381c816cebb",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c9734cd1-d86d-4e3d-ab93-bb460ee3f440",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ]
            },
            "creationdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ef23fa3e-82be-4b45-af3e-f7245932081b",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2019-04-26T04:05:58.831-0500"
                }
              ]
            },
            "discount": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a5305cd8-c2e6-4793-a4bd-d9be89b2a815",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 0
                }
              ]
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7322168a-7fe6-4642-b7a0-fd13428c6d99",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "L X W X H"
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

## Apply Merge Matrix where external source CRM wins

## Request - 3

To update the created entity with CRM values.

In the request, "src" specifies the external source.

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
    <span style="background-color: #FFFF00">"id": "SKU101",</span>
    <span style="background-color: #FFFF00">"name": "SKU101",</span>
    <span style="background-color: #FFFF00">"type": "item",</span>
    <span style="background-color: #FFFF00">"data": {</span>
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "SKU101",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "SKU101",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "warrantyincluded": {
          "values": [
            {
              "value": "True",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "effectivefromdate": {
          "values": [
            {
              "value": "2018-09-25",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "submitteddatetime": {
          "values": [
            {
              "value": "2018-09-25T05:48:10.321-0500",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "masterpackheight": {
          "values": [
            {
              "value": 123.33,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "masterpackqty": {
          "values": [
            {
              "value": 24,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "itemperpackquantity": {
          "values": [
            {
              "value": "twentythree",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "brandexception": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "CRM Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customeraction": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "CRM Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customerexplanation": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "CRM Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "furnmeasurement": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "CRM Val",</span>
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "Furniture Measurement 002",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "notes": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "CRM Val 001",</span>
              "source": "internal",
              "locale": "en-US"
            },
            {
              <span style="background-color: #FFFF00">"value": "CRM Val 002",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "warrantylinks": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "CRM Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "factoryaddress": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "CRM Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "fit": {
          "values": [
            {
              "White",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "brandsize": {
          "values": [
            {
              "value": "10",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "3 Seats",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "1 Seat",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cochfourwallstextbox": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "758c465a-dee8-4a36-938e-8acc4861de31",
              "value": "Self Default value"
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
          "message": "Submitted item for create with Id SKU101. Check after some time",
          "messageType": "success",
          "messageParams": [
            "item",
            "create",
            "SKU101"
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
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "SKU101"</span>
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
    "requestId": "b51cd915-8961-4e9b-82bf-757fb0330b28",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU101",
        "name": "_EMPTY",
        "type": "item",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "createdDate": "2019-04-27T09:33:25.257-0500",
          "modifiedDate": "2019-04-27T09:33:25.257-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "470f82b3-fa18-4009-b3aa-b1ed51cbc526",
                  "value": "SKU101"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "b4864444-d347-49c8-84f6-33e831b8db50",
                  "value": "SKU101"
                }
              ]
            },
            "warrantyincluded": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "3ba09acb-02e6-4cf0-b998-6f3d74dcdf6c",
                  "value": true
                }
              ]
            },
            "effectivefromdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "52714fbd-21a1-468f-b738-4358c7355ef4",
                  "value": "2018-09-25"
                }
              ]
            },
            "submitteddatetime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "7ca530cd-674b-458e-b018-c1b2fe77658a",
                  "value": "2018-09-25T05:48:10.321-0500"
                }
              ]
            },
            "masterpackheight": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "22cf0c08-b96d-49e9-94e3-3a5d4086b53c",
                  "value": 123.33
                }
              ]
            },
            "masterpackqty": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "ce525065-17df-4c8e-aa41-bdd0fbeee6d9",
                  "value": 24
                }
              ]
            },
            "itemperpackquantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "0de3c646-8a3e-414d-bbd2-cec213f3d75d",
                  "value": "twentythree"
                }
              ]
            },
            "brandexception": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "7cdaef03-79fa-4637-a871-2b04a2ed795a",
                  <span style="background-color: #FFFF00">"value": "CRM Val",</span>
                }
              ]
            },
            "customeraction": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "6097389e-e64f-4bc2-b500-812a2b314a7d",
                  <span style="background-color: #FFFF00">"value": "CRM Val"</span>
                }
              ]
            },
            "customerexplanation": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "70539b89-cf4f-445a-994a-d1609212b1d3",
                  <span style="background-color: #FFFF00">"value": "CRM Val",</span>
                }
              ]
            },
            "furnmeasurement": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "502d6b2a-9bb5-4957-b5f6-85f13eb8da40",
                  <span style="background-color: #FFFF00">"value": "CRM Val"</span>
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "7d7ec081-3553-4fe1-9863-81d97ae7da02",
                  "value": "Furniture Measurement 002"
                }
              ]
            },
            "notes": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "a986808a-32e7-4827-a57e-6551e8b0d515",
                  <span style="background-color: #FFFF00">"value": "CRM Val 001"</span>
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "85ee5f63-4d31-41de-8113-0be78aeb6616",
                  <span style="background-color: #FFFF00">"value": "CRM Val 002"</span>
                }
              ]
            },
            "warrantylinks": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "43e7ee7e-5042-414d-9d50-da42a8985a5c",
                  <span style="background-color: #FFFF00">"value": "CRM Val"</span>
                }
              ]
            },
            "factoryaddress": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "e64643ec-4e59-4365-9c24-3a91bf43217f",
                  <span style="background-color: #FFFF00">"value": "CRM Val"</span>
                }
              ]
            },
            "fit": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "fe0f69f9-bd5c-4d3b-a577-5b7161aebd74",
                  "value": "White"
                }
              ]
            },
            "brandsize": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "30071a21-6792-40df-9939-fe29084be6a2",
                  "value": 10
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "f52dd767-0420-480f-a541-3a1e328cec8b",
                  "value": "3 Seats"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "e8a8904f-c339-41d8-ada9-f4dfffab292d",
                  "value": "1 Seat"
                }
              ]
            },
            "cochfourwallstextbox": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "CRM",
                  "id": "3d130b73-3303-43c7-a67b-e835a086e37a",
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
</code>
</pre>