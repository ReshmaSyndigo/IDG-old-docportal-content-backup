---
title: Data Coalesce - Primary Context and Additional Context
sidebar: rdp_sidebar
permalink: api_get_data_coalesce_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatacoalesce}}** to show the inheritance and merging of attribute values along different hierarchical paths associated with the entity, using a scenario.

## Scenario

To show attributes that are editable at current context level and attributes that are inherited from parent contexts for a SKU entity. The inherited context attributes are non-editable. They have to be defined in the manage model of the current context to be editable.

{% include snippets/header.html %}

## Request

To get the above data, you can use the REST API {{site.data.rdp_glossary.getdatacoalesce}}. In the request send the following details:
* query -> contexts : Contexts in which you wish to perform the coalesce
* query -> typesCriterion : The type of the entity that needs to be coalesced
* query -> id : Entity identifier
In this scenario, you wish to get the data coalesce of SKU entity "CVShirts_Germany" in "Germany" and "Germany Web" contexts.

<pre>
<code>
POST **{{site.data.rdp_glossary.getdatacoalesce}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
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
      <span style="background-color: #FFFF00">"id": "CVShirts_Germany"</span>
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

## Response

The data coalesce is performed as follows:

| Context | Attributes | Writeable | Readable |
|---------|---------------|------------|-------|
| Self | All Self Context attributes | Yes | Yes |
| Country | All Self Context attributes | No | Yes |
| Country | All Country Context attributes | Yes | Yes |
| Country | Self attributes defined in Country model | Yes | Yes |
| Channel | All Self Context attributes | No | Yes |
| Channel | All Country Context attributes | No | Yes |
| Channel | All Channel Context attributes | Yes | Yes |
| Channel | Self and Country attributes defined in Channel model | Yes | Yes |

This is shown in the response below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "14b87dd9-b5fd-48ad-88ae-a17cfb8e8d14",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "CVShirts_Germany",
        "name": "CVShirts_Germany",
        "type": "sku",
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "27dce6a8-49de-4ef9-95fd-4086153d851b",
                  "value": "CVShirts_Germany"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c45a6224-31e0-4e76-9d17-4f0865d04fc9",
                  "value": "CVShirts_Germany"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8acc4be8-100e-435c-8fb2-1ea0f7313965",
                  "value": "Product Classifications>>Apparel & Footwear"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f5eb0982-a743-4f62-8cc9-e99058cd75a8",
                  "value": "Refurbished"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9e5a5c7a-ac84-428e-9841-a27e04588078",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "85c589ad-4ea0-43a8-b6a9-c4bc5260f64f",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2018-10-18T10:06:35.029-0500"
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e7cba304-a57a-4e7d-ac6c-e82b197a7183",
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
                  "id": "17311bea-8298-475b-a44d-60da33cccab6",
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
                  "id": "7186d789-b5ad-4e2e-9dc4-45c0c094b639",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "L X W X H"
                }
              ]
            },
            "cost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1b05aabf-8cd5-4ca9-9c63-465bb7d31215",
                  "value": 55
                }
              ]
            },
            "code": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3ac66172-002a-452e-af31-df3c58af1ff9",
                  "os": "instanceCoalesce",
                  "osid": "61M00oAoRY-_oxmOESfTxQ",
                  "ostype": "itemtype",
                  "osctxpath": "self@@self##itemtype@@Refurbished",
                  "value": "Refurbished"
                }
              ]
            },
            "value": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c803da6b-4108-442c-8fea-338dd2a9101b",
                  "os": "instanceCoalesce",
                  "osid": "61M00oAoRY-_oxmOESfTxQ",
                  "ostype": "itemtype",
                  "osctxpath": "self@@self##itemtype@@Refurbished",
                  "value": "refurbished"
                }
              ]
            },
            "identifier": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b2d5b174-2d7d-4f90-8255-55adbff5069c",
                  "os": "instanceCoalesce",
                  "osid": "apparelnfootwear",
                  "ostype": "classification",
                  "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear",
                  "value": "apparelnfootwear"
                }
              ]
            },
            "externalName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "65516313-7c44-4c6a-8ea3-55521534efd6",
                  "os": "instanceCoalesce",
                  "osid": "apparelnfootwear",
                  "ostype": "classification",
                  "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear",
                  "value": "Apparel & Footwear"
                }
              ]
            },
            "path": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e50ab926-56da-4417-9cf3-646f318a184b",
                  "os": "instanceCoalesce",
                  "osid": "apparelnfootwear",
                  "ostype": "classification",
                  "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear",
                  "value": "productclassificationroot"
                }
              ]
            }
          },
          "relationships": {
            "belongsto": [
              {
                "os": "instanceCoalesce",
                "osid": "apparelnfootwear",
                "ostype": "classification",
                "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear",
                "relTo": {
                  "id": "productclassificationroot",
                  "type": "classification"
                },
                "id": "belongsto_productclassificationroot"
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {
                "productclassification": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "e1b6a13a-3096-4b6c-8581-62d27dc0b393",
                      "value": "Product Classifications>>Apparel & Footwear"
                    }
                  ]
                },
                "vat": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "0de5578a-341f-48ec-8602-c5548c0d5f7e",
                      "value": 10
                    }
                  ]
                },
                "cost": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "a48cb36e-67b1-4a87-ae59-cde814427a1d",
                      "value": 45
                    }
                  ]
                },
                "mdmid": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "27dce6a8-49de-4ef9-95fd-4086153d851b",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "CVShirts_Germany"
                    }
                  ]
                },
                "mdmname": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "c45a6224-31e0-4e76-9d17-4f0865d04fc9",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "CVShirts_Germany"
                    }
                  ]
                },
                "itemtype": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "f5eb0982-a743-4f62-8cc9-e99058cd75a8",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "Refurbished"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "9e5a5c7a-ac84-428e-9841-a27e04588078",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "New"
                    }
                  ]
                },
                "createdate": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "85c589ad-4ea0-43a8-b6a9-c4bc5260f64f",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "2018-10-18T10:06:35.029-0500"
                    }
                  ]
                },
                "hypearticle": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "e7cba304-a57a-4e7d-ac6c-e82b197a7183",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": false
                    }
                  ]
                },
                "enabled": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "17311bea-8298-475b-a44d-60da33cccab6",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": false
                    }
                  ]
                },
                "dimensionslabel": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "7186d789-b5ad-4e2e-9dc4-45c0c094b639",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "L X W X H"
                    }
                  ]
                },
                "identifier": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "b2d5b174-2d7d-4f90-8255-55adbff5069c",
                      "os": "instanceCoalesce",
                      "osid": "apparelnfootwear",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                      "value": "apparelnfootwear"
                    }
                  ]
                },
                "externalName": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "65516313-7c44-4c6a-8ea3-55521534efd6",
                      "os": "instanceCoalesce",
                      "osid": "apparelnfootwear",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                      "value": "Apparel & Footwear"
                    }
                  ]
                },
                "path": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "e50ab926-56da-4417-9cf3-646f318a184b",
                      "os": "instanceCoalesce",
                      "osid": "apparelnfootwear",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                      "value": "productclassificationroot"
                    }
                  ]
                },
                "code": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "fe2915a7-179f-42f8-858a-2996532aa95e",
                      "os": "instanceCoalesce",
                      "osid": "CNbjy8zWSH2GSDEdsVkPdQ",
                      "ostype": "country",
                      "osctxpath": "country@@Germany",
                      "value": "germany"
                    }
                  ]
                },
                "value": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "a82cc9da-b56a-4da8-9bba-085e27e71105",
                      "os": "instanceCoalesce",
                      "osid": "CNbjy8zWSH2GSDEdsVkPdQ",
                      "ostype": "country",
                      "osctxpath": "country@@Germany",
                      "value": "Germany"
                    }
                  ]
                }
              },
              "relationships": {
                "belongsto": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "apparelnfootwear",
                    "ostype": "classification",
                    "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                    "relTo": {
                      "id": "productclassificationroot",
                      "type": "classification"
                    },
                    "id": "belongsto_productclassificationroot"
                  }
                ]
              }
            },
            {
              "context": {
                "channel": "Germany Web"
              },
              "attributes": {
                "webclassification": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "50cdf3f9-d6c1-4a79-b106-0967d3352b1e",
                      "value": "Web Classifications>>Top Rated Products"
                    }
                  ]
                },
                "internettax": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "d380a261-28a7-45d9-9c73-fe6d53074a8a",
                      "value": 15
                    }
                  ]
                },
                "productclassification": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "e1b6a13a-3096-4b6c-8581-62d27dc0b393",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "country@@Germany",
                      "value": "Product Classifications>>Apparel & Footwear"
                    }
                  ]
                },
                "vat": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "0de5578a-341f-48ec-8602-c5548c0d5f7e",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "country@@Germany",
                      "value": 10
                    }
                  ]
                },
                "mdmid": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "27dce6a8-49de-4ef9-95fd-4086153d851b",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "CVShirts_Germany"
                    }
                  ]
                },
                "mdmname": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "c45a6224-31e0-4e76-9d17-4f0865d04fc9",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "CVShirts_Germany"
                    }
                  ]
                },
                "itemtype": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "f5eb0982-a743-4f62-8cc9-e99058cd75a8",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "Refurbished"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "9e5a5c7a-ac84-428e-9841-a27e04588078",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "New"
                    }
                  ]
                },
                "createdate": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "85c589ad-4ea0-43a8-b6a9-c4bc5260f64f",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "2018-10-18T10:06:35.029-0500"
                    }
                  ]
                },
                "hypearticle": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "e7cba304-a57a-4e7d-ac6c-e82b197a7183",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": false
                    }
                  ]
                },
                "enabled": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "17311bea-8298-475b-a44d-60da33cccab6",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": false
                    }
                  ]
                },
                "dimensionslabel": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "7186d789-b5ad-4e2e-9dc4-45c0c094b639",
                      "os": "contextCoalesce",
                      "osid": "CVShirts_Germany",
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
                      "id": "8a774a35-c7b7-43f6-b259-f2c7748838f1",
                      "os": "instanceCoalesce",
                      "osid": "dQ3bllHdTqap4T1IudIY2Q",
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
                      "id": "172000f3-aa5c-4c29-a010-3b06251cc805",
                      "os": "instanceCoalesce",
                      "osid": "dQ3bllHdTqap4T1IudIY2Q",
                      "ostype": "channel",
                      "osctxpath": "channel@@Germany Web",
                      "value": "Germany Web"
                    }
                  ]
                },
                "identifier": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "b2d5b174-2d7d-4f90-8255-55adbff5069c",
                      "os": "instanceCoalesce",
                      "osid": "apparelnfootwear",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                      "value": "apparelnfootwear"
                    }
                  ]
                },
                "externalName": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "65516313-7c44-4c6a-8ea3-55521534efd6",
                      "os": "instanceCoalesce",
                      "osid": "apparelnfootwear",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                      "value": "Apparel & Footwear"
                    }
                  ]
                },
                "path": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "e50ab926-56da-4417-9cf3-646f318a184b",
                      "os": "instanceCoalesce",
                      "osid": "apparelnfootwear",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                      "value": "productclassificationroot"
                    }
                  ]
                }
              },
              "relationships": {
                "belongstocountry": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "dQ3bllHdTqap4T1IudIY2Q",
                    "ostype": "channel",
                    "osctxpath": "channel@@Germany Web",
                    "relTo": {
                      "id": "CNbjy8zWSH2GSDEdsVkPdQ",
                      "type": "country"
                    },
                    "id": "CNbjy8zWSH2GSDEdsVkPdQ"
                  }
                ],
                "belongsto": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "apparelnfootwear",
                    "ostype": "classification",
                    "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                    "relTo": {
                      "id": "productclassificationroot",
                      "type": "classification"
                    },
                    "id": "belongsto_productclassificationroot"
                  }
                ]
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