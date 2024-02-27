---
title: Get Snapshots of an Entity
sidebar: rdp_sidebar
permalink: api_app_get_snapshot_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetsnapshot}}** to get entity snapshots, using a scenario. 

## Scenario 

To get all snapshots for **sku** entity in self context.

{% include snippets/header.html %}

## Request

To get a snapshot, you can use the REST API {{site.data.rdp_glossary.appgetsnapshot}}. In the request, send the following details:

* params -> query -> id: Specify the identifier of the entity. 
* params -> query -> filters -> typesCriterion: Specify the entity type for which you wish to get the snapshots
* params -> fields -> attributes: Specify the list of attributes whose details you wish to see.
* params -> fields -> relationships: Specify the list of relationships whose details you wish to see.
* params -> fields -> properties: Specify the list of properties.
* params -> options -> snapshotLabel: Specify the label of the snapshot whose details you wish to see.

<pre>
<code>
POST **{{site.data.rdp_glossary.appgetsnapshot}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "id": "ebnLVIVBSmiyk",
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
       "_ALL"
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
      "snapshotGetMode": "all",
      "snapshotLabel": "snapshotLabel1"
    }
  }
}
</code>
</pre>

## Response

Returns all the snapshots for **sku** entity with Id **ebnLVIVBSmiyk** and snapshotLabel as **snapshotLabel1**.

<pre>
<code>
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
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.