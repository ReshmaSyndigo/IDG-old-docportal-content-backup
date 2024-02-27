---
title: Get Originating Source Information of Entity
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario35.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get originating source information of all attributes of an entity, using a scenario.

## Scenario

To get originating source information of all attributes of a SKU entity.

{% include snippets/header.html %}

## Request

To get the above, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> contexts : Specify the contexts, if any.
* options -> maxRecords: Specify the number of records to retrieve.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "contexts": [
        {
          "country": "Germany"
        },
        {
          "channel": "Germany Web"
        }
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "CVShirts"</span>
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre> 

## Response

Returns the originating source information of all attributes of the entity.

| Attribute | Originating Source | Description |
|---------|----------------------|-------------|
| mdmid in self | No originating source | Value entered by user |
| status in self | defaults | Default value model |
| dimensionslabel in self | businessRule | Calculated using business rule |
| path in self | instanceCoalesce | Value available at current level |
| mdmname in Germany Context | contextCoalesce | Value coalesced from parent |

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "9af24225-4394-4f7e-b1ce-a7dd6107f7f0",
    "maxRecords": 10
  },
  "response": {
    "entities": [
      {
        "id": "CVShirts",
        "name": "CVShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com",
          "createdDate": "2018-11-08T11:36:26.359-0600",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com",
          "modifiedDate": "2018-11-11T22:50:17.613-0600"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "291a9716-342e-4dd3-9069-de16febfe456",
                  "value": "CVShirts"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a83c8ad1-2916-49a6-808d-9dbc897b4a27",
                  "value": "CVShirts"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0d98ab8b-3a9f-49d6-ac7d-1533c7e6b74c",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0aacb851-ea62-4e90-afd2-9ed29a9d707f",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "L X W X H"
                }
              ]
            },
            "path": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "58ac3348-0951-48f6-a583-a8ca8df7feca",
                  "os": "instanceCoalesce",
                  "osid": "straw",
                  "ostype": "classification",
                  "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                  "value": "productclassificationroot"
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
                "accessoriesincluded": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "4c024c31-6cd9-40c3-94f2-19431678a39f",
                      "value": "Accessories in Germany"
                    }
                  ]
                },
                "vat": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "e98da92b-b347-4535-837d-27492ebfcd71",
                      "value": 10
                    }
                  ]
                },
                "mdmid": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "83149d8d-8526-46c3-8d8e-291c6728e1fd",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "CVShirts"
                    }
                  ]
                },
                "mdmname": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "57ea77d4-b8dd-445a-b16b-587e2fa8ea55",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "CVShirts"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "2397d729-e988-430b-88e3-b41e1e86d49d",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "New"
                    }
                  ]
                },

                "dimensionslabel": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "a18b2af4-afb3-470a-b9ae-1fabf3c32ccb",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "L X W X H"
                    }
                  ]
                },
                "value": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "b008c6b2-ecfa-41df-8177-efe8bf74eeea",
                      "os": "instanceCoalesce",
                      "osid": "germany",
                      "ostype": "country",
                      "osctxpath": "country@@Germany",
                      "value": "Germany"
                    }
                  ]
                },
                "identifier": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "0299c839-d497-444c-9b07-2d28036e6176",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "straw"
                    }
                  ]
                },
                "externalName": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "ac6036f2-219b-4b9b-b240-62762add1c16",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "Straw"
                    }
                  ]
                },
                "path": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "d94bd144-190c-4d61-b89b-48c0c961adb7",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "productclassificationroot"
                    }
                  ]
                },
                "featurespecs": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "52514e4c-cee1-475b-9035-d4fda710bf5a",
                      "value": "CVShirts in Germany"
                    }
                  ]
                },
                "extendedwarrantyinmonths": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "d0f3f8f5-1ae4-4fee-92cb-11e9b9ae05ea",
                      "value": 4
                    }
                  ]
                }
              }
            },
            {
              "context": {
                "channel": "Germany Web"
              },
              "attributes": {
                "reviewrank": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "5047986e-1f66-4e93-ad9d-aa67b2d6975a",
                      "value": 20
                    }
                  ]
                },
                "internettax": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "2610a355-787d-4d0b-8059-adfe9e72f0db",
                      "value": 15
                    }
                  ]
                },
                "accessoriesincluded": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "a51f6366-1df3-45cc-8ccc-90d88d3514dc",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "country@@Germany",
                      "value": "Accessories in Germany"
                    }
                  ]
                },
                "vat": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "40a40435-50c3-49ac-b80d-7b778e992de8",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "country@@Germany",
                      "value": 10
                    }
                  ]
                },
                "designername": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "a4beff7d-7462-456f-801c-4a1c437bd70c",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "country@@Germany",
                      "value": "Germany deafult designer value"
                    }
                  ]
                },
                "mdmid": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1b46a203-c9f3-4fa9-9246-07c4aa2e72a7",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "CVShirts"
                    }
                  ]
                },
                "mdmname": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "c8b77a7b-1b28-40b0-b3ba-2e95b6bc021d",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "CVShirts"
                    }
                  ]
                },
                "productclassification": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "103077c9-e863-4c19-ad5a-f016187f75d2",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw"
                    }
                  ]
                },
                "itemtype": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "bf18d340-e3cf-40e1-98e6-db1d9308de9d",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "Refurbished",
                      "properties": {
                        "referenceData": "itemtype/refurbished",
                        "referenceDataIdentifier": "refurbished"
                      }
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "c245234c-7c9b-4eed-9c46-c1fa8281c756",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "New"
                    }
                  ]
                },
                "dimensionslabel": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "082e8187-538d-4bc9-aafd-69979f398028",
                      "os": "contextCoalesce",
                      "osid": "CVShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "L X W X H"
                    }
                  ]
                },
                "code": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "e99588c8-e492-4922-97c4-f60c698b0c85",
                      "os": "instanceCoalesce",
                      "osid": "germanyweb",
                      "ostype": "channel",
                      "osctxpath": "channel@@Germany Web",
                      "value": "germanyweb"
                    }
                  ]
                },
                "value": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "373c3b09-5e7d-43a0-9b4f-fd76ef94c2ba",
                      "os": "instanceCoalesce",
                      "osid": "germanyweb",
                      "ostype": "channel",
                      "osctxpath": "channel@@Germany Web",
                      "value": "Germany Web"
                    }
                  ]
                },
                "extendedwarrantyinmonths": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "de69affd-0920-432d-be75-3b7b75dc2523",
                      "value": 6
                    }
                  ]
                },
                "path": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "3600b217-76c8-49aa-9164-3b70d236bd13",
                      "os": "instanceCoalesce",
                      "osid": "topratedproducts",
                      "ostype": "classification",
                      "osctxpath": "channel@@Germany Web##classification@@Web Classifications>>Top Rated Products",
                      "value": "webclassificationroot"
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

