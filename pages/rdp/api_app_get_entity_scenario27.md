---
title: Get Entities with NULL Attribute
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario27.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities with empty/null attributes, using a scenario.

## Scenario

To get all attributes of a "SKU" entity.

{% include snippets/header.html %}

## Request

To get the above entities with the specified attributes, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> Id: Specify the entity identifier.
* query -> filters -> typesCriterion: Specify the entity type as "sku".
* fields -> attributes: _ALL is used to get all the attributes of the entity.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "Polo Mens Shirt Red",</span>
      "filters": {
        "allContextual": true,
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns all attributes of the SKU entity. Note that the empty attributes are shown as "_NULL".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "64178d58-eddd-4bca-89a5-b916bd2b0236",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Polo Mens Shirt Red",
        "name": "Polo Mens Shirt Red",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "system_user",
          "createdDate": "2018-11-19T02:10:22.846-0600",
          "modifiedService": "entityManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-11-19T02:11:43.034-0600"
        },
        "data": {
          "attributes": {
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "68bc94f1-7076-4142-aaae-9f7354da98fa",
                  "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bb1e3dce-cb53-4f96-ab79-f5a850f32a80",
                  "value": "_NULL"
                }
              ]
            },
            "uiscochvendorshippingaddress": {
              "group": [
                {
                  "uiscochvendorshippingaddressinteger": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "66402755-4958-47ad-a330-2cee92a63b71",
                        "value": 999999
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0c579135-a637-4add-8c55-524329615f19"
                },
                {
                  "uiscochvendorshippingaddressstring": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "9aadec11-66ca-49cc-9764-4d9d6093feb3",
                        "value": "address"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3181ce9a-468e-4fca-b72b-a5d9b7005b5b"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "875a1103-e3dc-4327-b208-6e7a0cf9eebb",
                  "value": "_NULL"
                }
              ]
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "17bcf470-216c-4ed8-891c-e0d5a227dd72",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2018-11-19T02:10:23.564-0600"
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5bdcd4cb-8df8-4b0c-a531-f65d4c68b681",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9d8f5ec6-e226-4849-8603-e4c01bddadb0",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ]
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e3cb5a91-e908-428e-b5a7-6c471b694e97",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "L X W X H"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "53464226-7ab3-4b1d-8bad-87713e48a82a",
                  "os": "businessRule",
                  "osid": "concatSizeColorAttributeValueToSkunameAttribute_businessRule",
                  "ostype": "businessRule",
                  "value": "false"
                }
              ]
            },
            "alternatevendor": {
              "group": [
                {
                  "value": "_NULL",
                  "locale": "en-US",
                  "source": "internal",
                  "id": "127fc9ff-1731-4743-b44e-ac0692255b55"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2bd8dda9-b568-40fd-8ccf-3684fcb06e4b",
                  "os": "businessRule",
                  "osid": "reftestrule_businessRule",
                  "ostype": "businessRule",
                  "value": "24 in",
                  "properties": {
                    "referenceData": "sizes/ac70b7ab-025a-4e5b-b537-03072094f0bf",
                    "referenceDataIdentifier": "24 in"
                  }
                }
              ]
            },
            "description": {
              "values": [
                {
                  "value": "100% Cotton",
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c5744b1a-ca3c-4f8a-aeaf-c6bfac23f237"
                },
                {
                  "value": "_NULL",
                  "locale": "de-DE",
                  "source": "internal",
                  "id": "59bb259e-8eb2-4b4b-84a4-c9be25a19a3d"
                }
              ]
            }
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {
                "uiscochvendorshippingaddress": {
                  "group": [
                    {
                      "value": "_NULL",
                      "locale": "en-US",
                      "source": "internal",
                      "id": "a63d3cd0-abf8-4e83-b23b-147590706310"
                    }
                  ]
                },
                "apiscochfourwallstextbox": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "af3a36a3-6f3f-452c-a31b-fb8572f144fc",
                      "os": "defaults",
                      "osid": "germany_entityDefaultValuesModel",
                      "ostype": "entityDefaultValuesModel",
                      "value": "Germany Country default Value"
                    }
                  ]
                },
                "designername": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "52f77d6b-56c3-4d96-91b2-9824872c2f7e",
                      "os": "defaults",
                      "osid": "germany_entityDefaultValuesModel",
                      "ostype": "entityDefaultValuesModel",
                      "value": "Germany deafult designer value"
                    }
                  ]
                }
              }
            },
            {
              "context": {
                "channel": "Germany Web"
              },
              "attributes": {}
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

