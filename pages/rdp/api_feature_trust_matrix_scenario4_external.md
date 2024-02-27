---
title: Merge at Single Attribute Level
sidebar: rdp_sidebar
permalink: api_feature_trust_matrix_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entityappservice/process to create an entity with value "BB Val1" from an external source "BB". The entity is then processed where the attribute value "User Value" is updated from user provided values with merge sequence defined as CRM>>BB. User wins and takes precedence and the attribute value from user is updated. Note that if external source is not defined during merge update, then the User outperforms and wins.

You can verify if the values are updated using a GET operation which is explained in the verify section. See [Verify the entity configuration with Merge Matrix](#verify-the-entity-configuration-with-merge-matrix).

The following table depicts the Merge Matrix defined at attribute level:

| Current Value | Current Source | New Value | New Source | Updated Value | Source Considered |
|--------|--------|--------------|----------|-------------|-----------------|
| BB Val1 | BB | User Value | User | User Value | User |

## Scenario

1. To create an entity with BB provided values.
2. To update the created entity with User values.

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
    <span style="background-color: #FFFF00">"src": "BB"</span>
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU102",</span>
    <span style="background-color: #FFFF00">"name": "SKU102",</span>
    <span style="background-color: #FFFF00">"type": "item",</span>
    <span style="background-color: #FFFF00">"data": {</span>
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "SKU102",
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
        },
        "cofurnishboolean": {
          "values": [
            {
              "value": "True",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishdate": {
          "values": [
            {
              "value": "2018-09-25",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishdatetime": {
          "values": [
            {
              "value": "2018-09-25T05:48:10.321-0500",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishcost": {
          "values": [
            {
              "value": 123.33,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishquantity": {
          "values": [
            {
              "value": 24,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofactoryaddress": {
          "values": [
            {
              "value": "BB Val1",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customeraction": {
          "values": [
            {
              "value": "BB Val1",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cowarrantylinks": {
          "values": [
            {
              "value": "BB Val1",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "furnmeasurement": {
          "values": [
            {
              "value": "BB Val1",
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
              "value": "BB Val1 001",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "BB Val1 002",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishref": {
          "values": [
            {
              "value": "White",
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
          "message": "Submitted item for create with Id SKU102. Check after some time",
          "messageType": "success",
          "messageParams": [
            "item",
            "create",
            "SKU102"
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
      <span style="background-color: #FFFF00">"id": "SKU102"</span>
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
    "requestId": "e4d2795c-e2ce-4c53-9ed5-03fcae6f239f",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU102",
        "name": "_EMPTY",
        "type": "item",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "createdDate": "2019-04-27T21:13:35.877-0500",
          "modifiedDate": "2019-04-27T21:13:35.877-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "1fbf4748-7328-4a8e-9b52-4d58a837dcf4",
                  "value": "SKU102"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "feae12a9-f435-47d4-a26b-f4670c9a37b6",
                  "value": "SKU102"
                }
              ]
            },
            "cofurnishboolean": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "4f41a25d-c724-46be-94b3-c722bdda1039",
                  "value": true
                }
              ]
            },
            "cofurnishdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "8544e120-68e7-4915-82e3-49e6c0fd1cfc",
                  "value": "2018-09-25"
                }
              ]
            },
            "cofurnishdatetime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "ceb5ad0c-d29b-4890-a435-fd64879d4b2d",
                  "value": "2018-09-25T05:48:10.321-0500"
                }
              ]
            },
            "cofurnishcost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "45bd4867-8780-4c2b-84e1-9c6635009694",
                  "value": 123.33
                }
              ]
            },
            "cofurnishquantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "f48031aa-9efb-4e8f-a1c8-21a9a5c439a7",
                  "value": 24
                }
              ]
            },
            "cofactoryaddress": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "911aafb3-c573-4855-a2e5-f7faaa78f0c4",
                  "value": "BB Val1"
                }
              ]
            },
            "customeraction": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "4afa03f7-8e8e-4c46-9717-ced18fe7936f",
                  "value": "BB Val1"
                }
              ]
            },
            "cowarrantylinks": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "ad5806d0-0b6c-4bb8-9ebc-24b1dcaf42e9",
                  "value": "BB Val1"
                }
              ]
            },
            "furnmeasurement": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "6abe499f-a640-4632-be88-ee5054725a83",
                  "value": "BB Val1"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "f7888032-5aa5-4146-9e8f-62041e47dad8",
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
                  "id": "64bc4649-b07a-492b-9909-e0691e1f0581",
                  "value": "BB Val1 001"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "19ca76cb-0e0e-4540-86e1-c4de52ebb4d8",
                  "value": "BB Val1 002"
                }
              ]
            },
            "cofurnishref": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "src": "BB",
                  "id": "97c4cfb2-fa86-4fd4-8d2b-cfd1b371ce49",
                  "value": "White"
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
    <span style="background-color: #FFFF00">"id": "SKU102",</span>
    <span style="background-color: #FFFF00">"name": "SKU102",</span>
    <span style="background-color: #FFFF00">"type": "item",</span>
    <span style="background-color: #FFFF00">"data": {</span>
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "SKU102",
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
        },
        "cofurnishboolean": {
          "values": [
            {
              "value": "True",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishdate": {
          "values": [
            {
              "value": "2018-09-25",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishdatetime": {
          "values": [
            {
              "value": "2018-09-25T05:48:10.321-0500",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishcost": {
          "values": [
            {
              "value": 123.33,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishquantity": {
          "values": [
            {
              "value": 24,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofactoryaddress": {
          "values": [
            {
              <span style="background-color: #FFFF00">"value": "User Val",</span>
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "customeraction": {
          "values": [
            {
              "value": "User Val",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cowarrantylinks": {
          "values": [
            {
              "value": "User Val",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "furnmeasurement": {
          "values": [
            {
              "value": "User Val",
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
              "value": "User Val 001",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "User Val 002",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "cofurnishref": {
          "values": [
            {
              "value": "White",
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
          "message": "Submitted item for create with Id SKU102. Check after some time",
          "messageType": "success",
          "messageParams": [
            "item",
            "create",
            "SKU102"
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
      <span style="background-color: #FFFF00">"id": "SKU102"</span>
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
    "requestId": "1d1ea1ed-ff9b-49fa-841a-2a3f0b7624ec",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU102",
        "name": "_EMPTY",
        "type": "item",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "createdDate": "2019-04-27T21:19:20.370-0500",
          "modifiedDate": "2019-04-27T21:19:20.370-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e68578e0-3095-466a-a81b-5bb6b47b3ce6",
                  "value": "SKU102"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "54ea0ed0-7cd6-47f9-9416-b5a78f1014a9",
                  "value": "SKU102"
                }
              ]
            },
            "cofurnishboolean": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "01b7e8e3-ee4e-49eb-9b18-7c4ee872a117",
                  "value": true
                }
              ]
            },
            "cofurnishdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2ac38cf0-7f64-4dc8-a7f5-7acceebd30f7",
                  "value": "2018-09-25"
                }
              ]
            },
            "cofurnishdatetime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3d240eb6-1eea-454d-8cc4-0740a392bbc1",
                  "value": "2018-09-25T05:48:10.321-0500"
                }
              ]
            },
            "cofurnishcost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f188d1bf-b557-4331-8810-9595ad926343",
                  "value": 123.33
                }
              ]
            },
            "cofurnishquantity": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0b8da0a3-49f4-4756-b289-8b96963e2610",
                  "value": 24
                }
              ]
            },
            "cofactoryaddress": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "84e506d5-0bb6-4488-842f-aaa4a175b032",
                  <span style="background-color: #FFFF00">"value": "User Val"</span>
                }
              ]
            },
            "customeraction": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "69594cd0-d2e4-48da-a8c9-aca38505bba3",
                  <span style="background-color: #FFFF00">"value": "User Val"</span>
                }
              ]
            },
            "cowarrantylinks": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "58fe20b4-57fd-4200-80f1-5cb060113390",
                  <span style="background-color: #FFFF00">"value": "User Val"</span>
                }
              ]
            },
            "furnmeasurement": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "597b6eb3-ba7a-4954-93e2-5cdda99a127e",
                  <span style="background-color: #FFFF00">"value": "User Val"</span>
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1ffcfd17-a777-4ec8-a8c2-94a9b7bde827",
                  "value": "Furniture Measurement 002"
                }
              ]
            },
            "notes": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f2e8ea53-460e-4873-b799-57b47e2d1a59",
                  <span style="background-color: #FFFF00">"value": "User Val 001"</span>
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6a7610e7-d679-40d0-ae74-bba00e17335e",
                  <span style="background-color: #FFFF00">"value": "User Val 002"</span>
                }
              ]
            },
            "cofurnishref": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2d9f236e-254d-4345-a2b0-a128d590aa0a",
                  "value": "White"
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