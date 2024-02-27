---
title: Get Snapshots
sidebar: rdp_sidebar
permalink: api_app_get_snapshot.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Snapshots for an entity can be returned in all entity contexts or specific context.

The entity object along with the get request parameters must be passed to the get snapshot request in order to fetch the snapshots.

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get entity snapshots:

* [Get Snapshots of an Entity](api_app_get_snapshot_scenario1.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.appgetsnapshot}}

**Parameters**: The following table lists the parameters of the JSON request to get snapshots for an entity:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting an entity snapshot or collection of entity snapshots. |
| query | id  | Yes | Indicates entity unique identifier. |
| query | filters -> typesCriterion | Yes | Indicates the entity type. |
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. "_ALL" keyword can be substituted for individual records. To return the Id and type of the original entity (entity used for creating the snapshot), specify "originalObjectId", "originalObjectType". |
| fields | fields -> relationships | No | Indicates the relationships to be returned in the result. |
| fields | fields -> properties | No | Indicates the properties to be returned in the result. |
| sort | sort -> properties | No | Indicates the fields and the type of sort operation to be performed. |
| options | options -> maxRecords | No | Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 100.|
| options | options -> snapshotGetMode | No | Indicates the mode of the snapshots that are returned. <br/>**latest**: Indicates the recent snapshot to return.<br/>**oldest**: Indicates the oldest snapshot to return.<br/>**all**: Indicates all the snapshots to return.<br/> If not specified, then default behavior returns the latest snapshot.|
| options | options -> snapshotLabel | No | Indicates the label provided at the time of creating the snapshot. |
| options | options -> version | No | Indicates version of the entity for which the snapshots are returned. | 

{% include callout.html content="**Notes**:<br/>
* If you specify **snapshotGetMode** as **latest** or **oldest**, then sort option is not considered and only the latest or oldest snapshot is returned.
* Type of the snapshot is always **type of the entity_snapshot**. For example, type of the snapshot for entity type **sku** is **sku_snapshot**.

" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | entities | List of entity snapshot objects that match the search criteria. See [Entity Object Structure](api_entity_object_structure.html), for more information. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of entity snapshot objects that match the search criteria. |

## Example

The following example demonstrates a sample request and response to get snapshots for **sku** entity.

<pre><code>
POST **{TenantURL or ID}/api/entityappservice/getsnapshot**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
    
      "id": "ebnLVIVBSmiyk",
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      }
    },
    "fields": {
      "attributes": [
       "_ALL",
      ],
      "relationships": [
        "_ALL"
      ],
      "properties": [
        "modifiedDate"
      ]
    },
    "sort": {
      "properties": [
        {
          "modifiedDate": "_ASC",
          "sortType": "_DATETIME"
        }
      ]
    },
    "options": {
      
      "maxRecords": 100,
      "snapshotGetMode": "all"
    }
  }
}
</code></pre>

## Response

Returns all the snapshots for the specified entity Id and type.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "3b4ccc21-abf1-4f17-acc9-7944a113263b"
  },
  "response": {
    "entities": [
      {
        "id": "5eda2646-9506-45af-9b61-aef09e834dc7",
        "type": "sku_snapshot",
        "properties": {
          "modifiedDate": "2018-08-08T00:29:32.544-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8329e8f1-10b4-4d81-9219-0cc7596a28c3",
                  "value": "Nike002"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ce0723da-4001-4c5b-a1c0-aaf018ebf6c8",
                  "value": "Nike series 002"
                }
              ]
            },
            "description": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7373043d-7095-4281-9a7c-ebbc4a2e0d8d",
                  "value": "Nike series 002"
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3abdeca1-df0e-4a7f-b507-e12032c0a4a2",
                  "value": true
                }
              ]
            },
            "color": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a98604d0-ef3c-4867-8ead-b226dce8114f",
                  "value": "Dark Green"
                }
              ]
            },
            "startdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "95684b99-077e-495e-8ee7-f8db7e5ecc93",
                  "value": "2018-05-21"
                }
              ]
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1c2cfb8d-3433-4f3c-adf8-a282600c0625",
                  "value": "2018-05-22T05:48:10.321-0500"
                }
              ]
            },
            "minimumbuy": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2e7825ff-adfd-4111-b48e-7c55b6fba5ad",
                  "invalidValue": "12",
                  "value": "12"
                }
              ]
            },
            "cost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "64f694a4-498f-4866-a91b-6383167bb515",
                  "value": 12.23
                }
              ]
            },
            "height": {
              "values": [
                {
                  "uom": "in",
                  "source": "internal",
                  "locale": "en-US",
                  "id": "78bbeff4-98ac-4411-8a93-90ec1aa3cae0",
                  "value": 23
                }
              ]
            },
            "length": {
              "values": [
                {
                  "uom": "cm",
                  "source": "internal",
                  "locale": "en-US",
                  "id": "969e1313-a08d-42c6-8247-5a765b787f55",
                  "value": 34.33
                }
              ]
            },
            "channeldescription": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "025d8ca5-d1bf-4f79-91e5-1bd5c005fbc7",
                  "invalidValue": "New series",
                  "value": "New series"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e431734a-508c-45fd-87d6-7fffea839285",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f0f38536-9b0c-41b3-a935-6d395b528505",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "false"
                }
              ]
            },
            "productName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4b173a71-25be-470b-947e-131076dff84b",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "poloShirt"
                }
              ]
            },
            "productDescription": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "78f36bce-3b06-44df-9dca-3c2e668beb21",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "Excellent Cotton Crisp Shirt"
                }
              ]
            }
          },
          "contexts": [
            {
              "context": {
                "snapshot": "snapshot",
                "self": "self"
              },
              "attributes": {
                "originalObjectType": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "37a84ee6-66b9-4031-8023-4b7c7068788a",
                      "value": "sku"
                    }
                  ]
                },
                "snapshotLabel": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "11e60074-f3a1-4254-a02f-7e9d85cd08cb",
                      "value": "SnapshotLabel1"
                    }
                  ]
                },
                "originalObjectId": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "12d7f198-aa67-42a3-b49c-0bbac90f6ad3",
                      "value": "ebnLVIVBSmiyk"
                    }
                  ]
                },
                "version": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "9cc5d2cf-2b31-4659-86d2-c19d262e3fb1",
                      "value": "1"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
