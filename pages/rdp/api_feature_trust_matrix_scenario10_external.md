---
title: Merge at Relationship Level 
sidebar: rdp_sidebar
permalink: api_feature_trust_matrix_scenario10.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entityappservice/process to create an entity with relationship, where Trust Matrix is defined at Entity Manage Model.

You can verify if the values are updated using a GET operation which is explained in the verify section. See [Verify the entity configuration with Merge Matrix](#verify-the-entity-configuration-with-merge-matrix).

The following table depicts the Merge Matrix defined at attribute type level:

| Current Value | Current Source | New Value | New Source | Resultant Value | Source Considered |
|--------|--------|--------------|----------|-------------|-----------------|
| From source IC | IC | From source BB | BB | From source BB | BB |

**How the resultant value is obtained?**

* Merge Sequence defined at Entity Manage Model is BB>>IC.
* Existing source value is "From source IC" and existing source is IC.
* New source value is "From source BB" and new source is BB.
* Resultant value "From source BB" from source BB as BB takes precedence and wins over IC.

## Scenario

1. To create an entity with relationship and relationship attributes from source IC.
2. To update the entity where it replaces the existing value with new incoming value, based on merge precedence defined. 

{% include snippets/header.html %}

## Request - 1

To create the above entity, use the REST API {TenantURL or ID}/api/entityappservice/process. In the request send the following details:

* **entity** : In the entity object, provide id, name and type. 
* **data** : Specify the relationship with relationship type as "isChildOf" from SKU to Product.

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "SKU02",</span>
    <span style="background-color: #FFFF00">"name": "SKU02",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "relationships": {
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            <span style="background-color: #FFFF00">"src": "IC",</span>
            "relTo": {
              "id": "1",
              "type": "product"
            },
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    <span style="background-color: #FFFF00">"value": "From source IC",</span>
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
}
</code>
</pre> 

## Response - 1

The following JSON shows the response received:

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
          "message": "Submitted sku for create with Id SKU02. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "SKU02"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Get Entity with Relationship and Relationship Attributes

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
          "sku"
        ]
      },
      <span style="background-color: #FFFF00">"id": "SKU02"</span>
    },
    "fields": {
     "attributes": ["_ALL"],
      "relationships": ["_ALL"]
    }
  }
}
</code>
</pre>

## Response - 2

The following response shows the created entity SKU02:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5d7ed959-6a25-451e-8c6a-0b79771df220",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU02",
        "name": "_EMPTY",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "createdDate": "2019-05-28T06:06:48.913-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "modifiedDate": "2019-05-28T06:06:49.981-0500"
        },
        "data": {
          "attributes": {
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b7b2d583-8e3b-4afb-9c58-d392037a6225",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2019-05-28T06:06:49.022-0500"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a2af84ad-0fd4-44c6-8fff-9e7153418ffc",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "228ae98d-2364-4769-b338-e97fe5977c5f",
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
                  "id": "51a44e35-f56e-47a9-9a7f-181d507e512e",
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
                  "id": "2fc473c3-00c2-4a42-9c64-27d714172de5",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2019-05-28T06:06:49.030-0500"
                }
              ]
            },
            "discount": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "601b4783-9b31-410b-896b-7a5e83a73aa8",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 0
                }
              ]
            },
            "apiscochfourwallsdecimal": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7b87d67b-e9ac-437b-b1e5-855c5c6ab1ef",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 0
                }
              ]
            },
            "scochfourwallsrichtext": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e35126df-ff4f-4013-8a24-66796d075d01",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Self Default value scochfourwallsrichtext"
                }
              ]
            },
            "apiscochfourwallstextbox": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "51795c83-5d13-4694-84f5-3921fa3b8be0",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Self Default value"
                }
              ]
            },
            "scochfourwallstextbox": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3028fb40-bc51-44f9-989e-538fad51e822",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Self Default value scochfourwallstextbox"
                }
              ]
            },
            "apismasterpackheight": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0bbcc717-1250-4679-be3a-d8ba306d2844",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 1
                }
              ]
            },
            "apischwallartcost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1ba73041-5345-4974-ac3b-981b168833ac",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 10.1
                }
              ]
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0a2b11a0-e747-4fed-a32b-e0997b114bc6",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "L X W X H"
                }
              ]
            },
            "testbrhaveattrch": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0191d517-c4a7-48c1-a2a9-b098c4e3e946",
                  "os": "businessRule",
                  "osid": "initiateexportdentitytoeventHub_businessRule",
                  "ostype": "businessRule",
                  "value": "fail"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                 <span style="background-color: #FFFF00">"src": "IC",</span>
                "relTo": {
                  "id": "1",
                  "type": "product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "53bf7e28-21bc-4ae2-b063-79a25b74205e",
                        <span style="background-color: #FFFF00">"value": "From source IC"</span>
                      }
                    ]
                  }
                },
                "id": "ischildof_1"
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Apply Merge Matrix where BB wins over IC

The following JSON is a sample request to update the entity where it replaces the existing value with new incoming value:

## Request - 3

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/update**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "SKU02",
    "name": "SKU02",
    "type": "sku",
    "data": {
      "relationships": {
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            <span style="background-color: #FFFF00">"src": "BB",</span>
            "relTo": {
              "id": "1",
              "type": "product"
            },
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    <span style="background-color: #FFFF00">"value": "From source BB",</span>
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
}
</code>
</pre>

## Response - 3

The following response shows the submitted update request:

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
          "message": "Submitted sku for update with Id SKU02. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "SKU02"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Get entity after relationship auto-merge

You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity.

## Request - 4

To get the above entity with relationship and its attributes, you can use the REST API {TenantURL or ID}/api/entityappservice/get. 

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
              "sku"
        ]
      },
      <span style="background-color: #FFFF00">"id": "SKU02"</span>
    },
    "fields": {
      "attributes": ["_ALL"],
      "relationships": ["_ALL"]
    }
  }
}
</code>
</pre>

## Response - 4

The following JSON shows how the merge precedence is applied at the relationship level:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "46d424f6-18a2-4960-ab68-ddd64584cf18",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU02",
        "name": "SKU02",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rw.admin@riversand.com",
          "createdDate": "2019-05-29T02:48:41.591-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "rw.admin@riversand.com",
          "modifiedDate": "2019-05-29T02:49:54.111-0500"
        },
        "data": {
          "attributes": {
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "471feec9-f2e2-4b2c-bf86-e0fd4caba822",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2019-05-29T02:48:41.708-0500"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a0804540-fb37-459c-aa27-114095dbf309",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "31b6ef86-3170-4bcb-aabc-aae16bd1e8ca",
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
                  "id": "ea254da3-7638-4155-a64b-8f7102e0016c",
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
                  "id": "19b03a9b-b15b-4e3a-a361-6b3545c1a7a3",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2019-05-29T02:48:41.719-0500"
                }
              ]
            },
            "discount": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b2e126d5-00da-46ba-a32e-7383e0d682cd",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 0
                }
              ]
            },
            "apiscochfourwallsdecimal": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0aead07b-47bf-4150-8243-2dd4205aa28d",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 0
                }
              ]
            },
            "scochfourwallsrichtext": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "04c74b9e-7912-433b-be1a-63b9483e5362",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Self Default value scochfourwallsrichtext"
                }
              ]
            },
            "apiscochfourwallstextbox": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b9771db7-68ab-4999-b233-8de0dc54fe1c",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Self Default value"
                }
              ]
            },
            "scochfourwallstextbox": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "63718327-41c9-400f-a546-184e3718eb84",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Self Default value scochfourwallstextbox"
                }
              ]
            },
            "apismasterpackheight": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "15015288-87d8-4321-81b9-160dc851ade4",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 1
                }
              ]
            },
            "apischwallartcost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1e99bf74-f3ac-4401-9afc-380b3f559cc6",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": 10.1
                }
              ]
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4ce42f60-0ee9-4dbf-a4e6-ac8fef6cd7f1",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "L X W X H"
                }
              ]
            },
            "testbrhaveattrch": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "070294ad-bf90-408e-99b1-d403fb54d798",
                  "os": "businessRule",
                  "osid": "initiateexportdentitytoeventHub_businessRule",
                  "ostype": "businessRule",
                  "value": "fail"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                <span style="background-color: #FFFF00">"src": "BB",</span>
                "relTo": {
                  "id": "1",
                  "type": "product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "87895f3d-7aa8-4b00-9311-b5203aaf6975",
                        <span style="background-color: #FFFF00">"value": "From source BB"</span>
                      }
                    ]
                  }
                },
                "id": "ischildof_1",
                "src": "BB"
              }
            ]
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