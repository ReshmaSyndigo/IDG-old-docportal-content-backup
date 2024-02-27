---
title: Merge using User Provided Value
sidebar: rdp_sidebar
permalink: api_feature_trust_matrix_scenario3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entityappservice/process to create an entity with value "BB Val2" from an external source "BB". The entity is then processed where the attribute value "Final Value" is updated from user provided values with merge sequence defined as BB»IC»CRM. User wins and takes precedence and the attribute value from user is updated. You can verify if the values are updated using a GET operation which is explained in the verify section. See [Verify the entity configuration with Merge Matrix](#verify-the-entity-configuration-with-merge-matrix).

The following table depicts the Merge Matrix defined at Entity type level:

| Current Value | Current Source | New Value | New Source | Updated Value | Source Considered |
|--------|--------|--------------|----------|-------------|-----------------|
| BB Val 2 | BB | Final Value | User | Final Value | User |

## Scenario

1. To create an entity with BB provided values.
2. To update the created entity with User values.

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
              "value": "BB Val2",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customeraction": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "BB Val2",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customerexplanation": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "BB Val2",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "furnmeasurement": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "BB Val2",</span>
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
              <span style="background-color: #FFFF00">"value": "BB Val2 001",</span>
              "source": "internal",
              "locale": "en-US"
            },
            {
              <span style="background-color: #FFFF00">"value": "BB Val2 002",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "warrantylinks": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "BB Val2",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "factoryaddress": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "BB Val2",</span>
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

## Response - 2

The following response shows the updated attribute values from external source BB:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "b222375a-daec-4a99-8882-eab3628cc3b7",
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
          "createdDate": "2019-04-27T10:30:23.064-0500",
          "modifiedDate": "2019-04-27T10:30:23.064-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "17ef624d-4a53-4f8b-abd3-b920cd757b2d",
                  "value": "SKU101"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "ae62dbf4-80e4-4897-8891-c2dbb499f851",
                  "value": "SKU101"
                }
              ]
            },
            "warrantyincluded": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "4e8d504d-9898-471b-9fff-bd2674f1af25",
                  "value": false
                }
              ]
            },
            "effectivefromdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "9fa8d145-568f-49b6-ad41-1d69f12a347b",
                  "value": "2018-09-24"
                }
              ]
            },
            "submitteddatetime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "76276947-27be-4823-a0f4-7eb7e50d7c09",
                  "value": "2018-09-24T05:48:10.321-0500"
                }
              ]
            },
            "masterpackheight": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "5dc8e4d4-dda1-4187-b60f-4fabdbf820ae",
                  "value": 1123.33
                }
              ]
            },
            "masterpackqty": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "c6d85551-903c-4dfb-8bb9-4cfc20b0d954",
                  "value": 1124
                }
              ]
            },
            "itemperpackquantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "f527a8b7-0198-472f-b35c-682775211f3a",
                  "value": "twentythree"
                }
              ]
            },
            "brandexception": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "dd7b9e67-0f0d-4ad0-9b07-ad596a963180",
                  "value": "BB Val2"
                }
              ]
            },
            "customeraction": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "bb94204a-3c8e-41c3-abe2-2d0bdf5f9e2e",
                  "value": "BB Val2"
                }
              ]
            },
            "customerexplanation": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "f098be3e-7b26-4eda-b243-0b696e66da85",
                  "value": "BB Val2"
                }
              ]
            },
            "furnmeasurement": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "fef1871e-cee5-476c-b8cb-a9146711c7e4",
                  "value": "BB Val2"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "af84d20d-ab77-4367-a7f1-5065e594fde2",
                  "value": "Furniture Measurement 002"
                }
              ]
            },
            "notes": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "89dc3ae1-f0ba-40ff-a40b-a7786858de3c",
                  "value": "BB Val2 001"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "65bf9bd6-2d6a-4099-8a21-2555a483e435",
                  "value": "BB Val2 002"
                }
              ]
            },
            "warrantylinks": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "06ce2b99-3c57-4e1d-afe7-dd90114fe896",
                  "value": "BB Val2"
                }
              ]
            },
            "factoryaddress": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "691f0c37-d18d-4192-89c6-13e4f4d9bbce",
                  "value": "BB Val2"
                }
              ]
            },
            "fit": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "4aa51ee6-6b94-4ebf-a8fd-b9a79b95b8d0",
                  "value": "White"
                }
              ]
            },
            "brandsize": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "242c18f6-d65a-427a-9100-3fe560551727",
                  "value": 10
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "7bca7364-8ccf-4d00-9127-54caaed6e444",
                  "value": "3 Seats"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "31564008-2471-44e3-9248-443d79637ccc",
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

## Apply Merge Matrix where User wins

## Request - 3

To update the created entity with User values.

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
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
              "value": "Final Value",
              "source": "internal",
              "locale": "en-US",
              "src": "BB"
            }
          ]
        },
        "customeraction": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Final Value",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customerexplanation": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Final Value",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "furnmeasurement": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Final Value",</span>
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
              <span style="background-color: #FFFF00">"value": "Final Value 001",</span>
              "source": "internal",
              "locale": "en-US"
            },
            {
              <span style="background-color: #FFFF00">"value": "Final Value 002",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "warrantylinks": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Final Value",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "factoryaddress": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "Final Value",</span>
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
      "filters": {
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
    "requestId": "bd4003e8-7d4d-4572-943b-11c9c9937538",
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
          "createdDate": "2019-04-27T10:37:01.843-0500",
          "modifiedDate": "2019-04-27T10:37:01.843-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3f48e82e-3a9f-4128-ba61-dd868dd1bb49",
                  "value": "SKU101"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a926ffc7-9318-4e1a-9390-2ce004ac178d",
                  "value": "SKU101"
                }
              ]
            },
            "warrantyincluded": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f1df2d70-9caa-456f-a692-6518c8cb80ae",
                  "value": false
                }
              ]
            },
            "effectivefromdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "351ccaa3-8869-46f9-a230-3392c9d0a14f",
                  "value": "2018-09-24"
                }
              ]
            },
            "submitteddatetime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f1a38163-04e0-4370-a37d-d8d19fa94b74",
                  "value": "2018-09-24T05:48:10.321-0500"
                }
              ]
            },
            "masterpackheight": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "fab23d32-b894-42a4-8ccc-d3b3983d2953",
                  "value": 1123.33
                }
              ]
            },
            "masterpackqty": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8685310a-70e0-43df-b870-9490cb7bc10e",
                  "value": 1124
                }
              ]
            },
            "itemperpackquantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "351aa2b5-c14d-4d20-8967-f9931162cc73",
                  "value": "twentythree"
                }
              ]
            },
            "brandexception": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "a3a76bf4-b16a-4164-a205-71fdc4d7570c",
                  <span style="background-color: #FFFF00">"value": "Final Value"</span>
                }
              ]
            },
            "customeraction": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d0fd0f0d-204e-41d3-9729-10045025f957",
                  <span style="background-color: #FFFF00">"value": "Final Value"</span>
                }
              ]
            },
            "customerexplanation": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e7018908-ccf9-4db6-a631-91225dee6747",
                  <span style="background-color: #FFFF00">"value": "Final Value"</span>
                }
              ]
            },
            "furnmeasurement": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7d9d6e37-73c5-4f13-9e5c-419fed4c9b8a",
                  <span style="background-color: #FFFF00">"value": "Final Value"</span>
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "544f4e0f-674a-4e3f-bed9-52062e3e74d6",
                  "value": "Furniture Measurement 002"
                }
              ]
            },
            "notes": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "651d9e86-998b-426b-8aa9-376eec102e7c",
                  <span style="background-color: #FFFF00">"value": "Final Value 001"</span>
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5161978e-512f-4537-958c-0074facc00ec",
                  <span style="background-color: #FFFF00">"value": "Final Value 002"</span>
                }
              ]
            },
            "warrantylinks": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4398d406-8234-4dfa-bce6-b91c1f74bc7f",
                  <span style="background-color: #FFFF00">"value": "Final Value"</span>
                }
              ]
            },
            "factoryaddress": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b0730315-eed5-4a02-a961-4bd8e42abc10",
                  <span style="background-color: #FFFF00">"value": "Final Value"</span>
                }
              ]
            },
            "fit": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8305a9ad-7777-48d4-b0e3-8e496a2342b6",
                  "value": "White"
                }
              ]
            },
            "brandsize": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "76dbe0cd-faa6-4822-8a92-9eff004c7385",
                  "value": 10
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "03e28f1f-3b73-4ce5-a65a-99805b7e9976",
                  "value": "3 Seats"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "aa8cb41c-7457-4512-97ac-b813f7b258fe",
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