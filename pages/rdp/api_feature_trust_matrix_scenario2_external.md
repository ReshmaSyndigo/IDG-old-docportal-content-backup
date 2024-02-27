---
title: Merge using Same External Source Value
sidebar: rdp_sidebar
permalink: api_feature_trust_matrix_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entityappservice/process to create an entity with value "IC Val1" from an external source "IC". The entity is then processed where the attribute value "IC Val2" are updated from external source "IC" with merge sequence defined as BB»IC»CRM. IC source wins and takes precedence and the attribute value from IC is updated. You can verify if the values are updated using a GET operation which is explained in the verify section. See [Verify the entity configuration with Merge Matrix](#verify-the-entity-configuration-with-merge-matrix).

The following table depicts the Merge Matrix defined at Entity type level:

| Current Value | Current Source | New Value | New Source | Updated Value | Source Considered |
|--------|--------|--------------|----------|-------------|-----------------|
| IC Val1 | IC | IC Val2 | IC | IC Val2 | IC |

## Scenario

1. To create an entity with IC provided values.
2. To update the created entity with IC new values.

{% include snippets/header.html %}

## Request - 1

To create the above entity, use the REST API {TenantURL or ID}/api/entityappservice/process. In the request send the following details:

entity : In the entity object, provide id, name and type. 
data : Specify the user provided attribute values to be created, in the entity.
src: Specify the external source name.

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"src": "IC"</span>
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
              "value": "False",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "effectivefromdate": {
          "values": [
            {
              "value": "2018-09-24",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "submitteddatetime": {
          "values": [
            {
              "value": "2018-09-24T05:48:10.321-0500",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "masterpackheight": {
          "values": [
            {
              "value": 1123.33,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "masterpackqty": {
          "values": [
            {
              "value": 1124,
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
              "value": "IC Val1",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customeraction": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val1",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customerexplanation": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val1",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "furnmeasurement": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val1",</span>
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
              <span style="background-color: #FFFF00">"value": "IC Val1 001",</span>
              "source": "internal",
              "locale": "en-US"
            },
            {
              <span style="background-color: #FFFF00">"value": "IC Val1 002",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "warrantylinks": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val1",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "factoryaddress": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val1",</span>
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
        "typesCriterion": [
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
  {
  "request": {
    "returnRequest": false,
    "requestId": "f0c77081-d121-4edf-8fd4-68801a32cd38",
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
          "createdDate": "2019-04-27T10:00:26.373-0500",
          "modifiedDate": "2019-04-27T10:00:26.373-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "7353837c-1231-4c99-bf2d-737d2d1e1e19",
                  "value": "SKU101"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "c24a3db0-39c8-4ec3-8517-8b76579a7c03",
                  "value": "SKU101"
                }
              ]
            },
            "warrantyincluded": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "4581d644-6f25-431f-b5ea-02bab56dc6d5",
                  "value": false
                }
              ]
            },
            "effectivefromdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "b7c07874-c875-48ef-8551-0f4172048432",
                  "value": "2018-09-24"
                }
              ]
            },
            "submitteddatetime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "33fae753-1064-4229-be3e-8ab3edee07b2",
                  "value": "2018-09-24T05:48:10.321-0500"
                }
              ]
            },
            "masterpackheight": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "29028f9a-982f-4f0e-954b-9e8b2cac0daf",
                  "value": 1123.33
                }
              ]
            },
            "masterpackqty": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "b6f0e25b-dd49-4934-9f43-ddb0b3f81c45",
                  "value": 1124
                }
              ]
            },
            "itemperpackquantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "d7e077f3-ccf8-43bc-b67e-e5dce92c85d6",
                  "value": "twentythree"
                }
              ]
            },
            "brandexception": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "57391db8-1f34-44e6-a34f-25434cc4e03d",
                  "value": "IC Val1"
                }
              ]
            },
            "customeraction": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "ebeca376-7291-4ca5-89e3-a334ce03e1b4",
                  "value": "IC Val1"
                }
              ]
            },
            "customerexplanation": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "0c0912e6-53c0-4cc5-aa2a-710395b6957d",
                  "value": "IC Val1"
                }
              ]
            },
            "furnmeasurement": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "a0e464f0-ee03-4ca7-819b-a9eba99547c1",
                  "value": "IC Val1"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "65f42318-2a48-4781-8a93-d793edf553f5",
                  "value": "Furniture Measurement 002"
                }
              ]
            },
            "notes": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "1e829b15-e4e9-4372-b1da-002181c241c9",
                  "value": "IC Val1 001"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "fcee1c0c-21b1-4e95-94f5-fcc6dab91cf0",
                  "value": "IC Val1 002"
                }
              ]
            },
            "warrantylinks": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "d5ce2538-b7cd-40c5-93cc-521fdabdb97d",
                  "value": "IC Val1"
                }
              ]
            },
            "factoryaddress": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "c08e6c79-7a97-4fad-8ac0-deecfcf8583e",
                  "value": "IC Val1"
                }
              ]
            },
            "fit": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "192f62e3-e2c1-4eca-a9ab-1bb268800f91",
                  "value": "White"
                }
              ]
            },
            "brandsize": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "847c20fb-e0d3-4e40-9ef3-689f1655d2ed",
                  "value": 10
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "73c5a83e-a48e-4a83-accd-d942a58ce444",
                  "value": "3 Seats"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "7c9fdb84-1557-4584-945a-88c5c998bd4d",
                  "value": "1 Seat"
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

## Apply Merge Matrix where external source IC wins

## Request - 3

To update the created entity with IC new values.

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"src": "IC"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU101",</span>
    <span style="background-color: #FFFF00">"name": "SKU101",</span>
    <span style="background-color: #FFFF00">"type": "item",</span>
    "data": {
      "attributes": {
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
              "value": "False",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "effectivefromdate": {
          "values": [
            {
              "value": "2018-09-24",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "submitteddatetime": {
          "values": [
            {
              "value": "2018-09-24T05:48:10.321-0500",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "masterpackheight": {
          "values": [
            {
              "value": 1123.33,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "masterpackqty": {
          "values": [
            {
              "value": 1124,
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
              <span style="background-color: #FFFF00">"value": "IC Val2",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customeraction": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val2",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customerexplanation": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val2",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "furnmeasurement": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val2",</span>
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
              <span style="background-color: #FFFF00">"value": "IC Val2 001",</span>
              "source": "internal",
              "locale": "en-US"
            },
            {
              <span style="background-color: #FFFF00">"value": "IC Val2 002",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "warrantylinks": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val2",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "factoryaddress": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "IC Val2",</span>
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
          <span style="background-color: #FFFF00">"item"</span>
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
    "requestId": "37a094f6-9733-40ef-8818-b12dfd1f651f",
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
          "createdDate": "2019-04-27T10:07:41.230-0500",
          "modifiedDate": "2019-04-27T10:07:41.230-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "98aa37c6-54ca-48a1-ab2e-f76146b582d8",
                  "value": "SKU101"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "6354ce22-e165-47a7-ab21-f7e677e23dff",
                  "value": "SKU101"
                }
              ]
            },
            "warrantyincluded": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "131e6148-41be-4618-8377-d07d9ece2cd1",
                  "value": false
                }
              ]
            },
            "effectivefromdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "bb079306-4042-4f0a-99f2-3cc7ddc0d123",
                  "value": "2018-09-24"
                }
              ]
            },
            "submitteddatetime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "2217cecc-f04b-43a9-80a3-fb13097dd1d6",
                  "value": "2018-09-24T05:48:10.321-0500"
                }
              ]
            },
            "masterpackheight": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "26e6c9d6-d69c-49e8-9978-fbea8728a67b",
                  "value": 1123.33
                }
              ]
            },
            "masterpackqty": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "a89faf05-86ae-44f9-a070-7364c067020f",
                  "value": 1124
                }
              ]
            },
            "itemperpackquantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "9672571d-3248-49fc-bff3-7470e34b3152",
                  "value": "twentythree"
                }
              ]
            },
            "brandexception": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "1f82bb4a-6ec2-41f5-87c4-1cb463721f6c",
                  <span style="background-color: #FFFF00">"value": "IC Val2"</span>
                }
              ]
            },
            "customeraction": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "ae7382ee-4651-4221-bf65-d676bbd73844",
                  <span style="background-color: #FFFF00">"value": "IC Val2"</span>
                }
              ]
            },
            "customerexplanation": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "cf32b18e-fd68-4b7b-9e2a-bf37bf3ea8dd",
                  <span style="background-color: #FFFF00">"value": "IC Val2"</span>
                }
              ]
            },
            "furnmeasurement": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "e247bbae-23c8-4336-a8ef-a8c1fc13f569",
                  <span style="background-color: #FFFF00">"value": "IC Val2"</span>
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "72014f03-aeaa-4948-bfae-aa3245891741",
                  "value": "Furniture Measurement 002"
                }
              ]
            },
            "notes": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "f13a9ad2-c259-4845-889c-ee5088f1961b",
                  <span style="background-color: #FFFF00">"value": "IC Val2 001"</span>
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "338f7dcf-4422-4c32-9031-32886eb1ac63",
                  <span style="background-color: #FFFF00">"value": "IC Val2 002"</span>
                }
              ]
            },
            "warrantylinks": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "e1310e48-8826-4d57-8519-61b9be12744d",
                  <span style="background-color: #FFFF00">"value": "IC Val2"</span>
                }
              ]
            },
            "factoryaddress": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "c4d30f3d-c710-4294-808e-d5a2e2f8e9a1",
                  <span style="background-color: #FFFF00">"value": "IC Val2"</span>
                }
              ]
            },
            "fit": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "14d553e1-b078-4819-b072-5d0042c18cc5",
                  "value": "White"
                }
              ]
            },
            "brandsize": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "922c64fa-0257-442e-b4b8-48474aee3f83",
                  "value": 10
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "251b5fa1-89a7-4109-af0e-0f0c61865310",
                  "value": "3 Seats"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "IC",
                  "id": "086e37a8-0949-49c5-b65a-fb0958f229f3",
                  "value": "1 Seat"
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