---
title: Data Coalesce - Set as Do Not Inherit
sidebar: rdp_sidebar
permalink: api_get_data_coalesce_scenario5.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatacoalesce}}** to show the inheritance and merging of attribute values along different hierarchical paths associated with the entity, using a scenario.

## Scenario

To show data coalesce of an enhancer given attribute "uiscochvendorshippingaddress" that is non-empty at self context and is set to Do Not Inherit at country context.

{% include snippets/header.html %}

## Request

To get the above data, you can use the REST API {{site.data.rdp_glossary.getdatacoalesce}}. In the request send the following details:
* query -> allContextual : Set as true to get value at all contexts.
* query -> typesCriterion : The type of the entity that needs to be coalesced
* query -> id : Entity identifier <br>
In this scenario, you wish to get the data coalesce of SKU entity "Polo Mens Shirt Red" in all contexts associated with the entity.

<pre>
<code>
POST **{{site.data.rdp_glossary.getdatacoalesce}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "Polo Mens Shirt Red",</span>
      "filters": {
        <span style="background-color: #FFFF00">"allContextual": true,</span>
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "relationships": [
        "_ALL"
      ],
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

The data coalesce is performed as follows:

| Context | Attribute | Value |
|---------|---------------|------------|
| Self | uiscochvendorshippingaddress | 999999, address |
| Country | uiscochvendorshippingaddress | _NULL |
| Channel | uiscochvendorshippingaddress | _NULL |

This is shown in the response below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5782f60e-87f0-4a3d-aac2-746997a3d074",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Polo Mens Shirt Red",
        "name": "Polo Mens Shirt Red",
        "type": "sku",
        "systemInfo": {},
        "data": {
          "attributes": {
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1aebe0ca-635c-42ff-be3a-6617a0fb92f5",
                  "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "88c3e35d-324d-42be-840d-d96be2006b16",
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
                        "id": "d6545fe9-0d2f-49bb-bc78-46fddec69d2f",
                        "value": 999999
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e8b2b331-b4ab-4b8d-9c2d-e5a369163fac"
                },
                {
                  "uiscochvendorshippingaddressstring": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "8f78297b-d698-4be9-b71d-80c260e56a83",
                        "value": "address"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d449b275-2f8f-49e7-90a5-f76852cd679a"
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
                      "id": "493fe478-ba5b-4900-b24d-9a746da56d5d"
                    }
                  ]
                },
                "productclassification": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1aebe0ca-635c-42ff-be3a-6617a0fb92f5",
                      "os": "contextCoalesce",
                      "osid": "Polo Mens Shirt Red",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw"
                    }
                  ]
                },
                "color": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "88c3e35d-324d-42be-840d-d96be2006b16",
                      "os": "contextCoalesce",
                      "osid": "Polo Mens Shirt Red",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "_NULL"
                    }
                  ]
                },
                "identifier": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "cd8414d2-c2e3-4cd1-bbc9-451a56ab2cba",
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
                      "id": "8ae4573b-53c0-41fe-a0be-506a279c1147",
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
                      "id": "fa6d9616-0022-4995-b7a0-63130a5e28f4",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "productclassificationroot"
                    }
                  ]
                },
                "rootexternalname": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "6b74e895-5457-4a56-b22c-4df6e85d3b86",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "Product Classifications"
                    }
                  ]
                },
                "externalnamepath": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "1623ae59-8546-4853-9288-c23461cd5ad4",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw"
                    }
                  ]
                }
              },
              "relationships": {
                "allowedlocales": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "germany",
                    "ostype": "country",
                    "osctxpath": "country@@Germany",
                    "relTo": {
                      "id": "5c2089c1-ba7f-47af-bb0f-fa7ccf35ce7e",
                      "type": "locale"
                    },
                    "attributes": {
                      "isDefault": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "1b5880e4-183a-428d-9337-593823535316",
                            "value": true
                          }
                        ]
                      }
                    },
                    "id": "5c2089c1-ba7f-47af-bb0f-fa7ccf35ce7e",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "germany",
                    "ostype": "country",
                    "osctxpath": "country@@Germany",
                    "relTo": {
                      "id": "1bc496d0-e977-4f23-a31d-72a39119aa53",
                      "type": "locale"
                    },
                    "attributes": {},
                    "id": "1bc496d0-e977-4f23-a31d-72a39119aa53",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  }
                ],
                "belongsto": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "straw",
                    "ostype": "classification",
                    "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                    "relTo": {
                      "id": "apparelnfootwearhats",
                      "type": "classification"
                    },
                    "attributes": {},
                    "id": "belongsto_apparelnfootwearhats"
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "apparelnfootwearhats",
                    "ostype": "classification",
                    "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear>>Hats",
                    "relTo": {
                      "id": "apparelnfootwear",
                      "type": "classification"
                    },
                    "attributes": {},
                    "id": "belongsto_apparelnfootwear"
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "apparelnfootwear",
                    "ostype": "classification",
                    "osctxpath": "self@@self##classification@@Product Classifications>>Apparel & Footwear",
                    "relTo": {
                      "id": "productclassificationroot",
                      "type": "classification"
                    },
                    "attributes": {},
                    "id": "belongsto_productclassificationroot"
                  }
                ],
                "belongstotaxonomy": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "productclassificationroot",
                    "ostype": "classification",
                    "osctxpath": "self@@self##classification@@Product Classifications",
                    "relTo": {
                      "id": "ceacc0fd-6d4b-42d1-9098-498ec268b236",
                      "type": "taxonomy"
                    },
                    "attributes": {},
                    "id": "belongstotaxonomy_ceacc0fd-6d4b-42d1-9098-498ec268b236"
                  }
                ]
              }
            },
            {
              "context": {
                "channel": "Germany Web"
              },
              "attributes": {
                "uiscochvendorshippingaddress": {
                  "group": [
                    {
                      "os": "contextCoalesce",
                      "osid": "Polo Mens Shirt Red",
                      "ostype": "sku",
                      "osctxpath": "country@@Germany",
                      "value": "_NULL",
                      "locale": "en-US",
                      "source": "internal",
                      "id": "493fe478-ba5b-4900-b24d-9a746da56d5d"
                    }
                  ]
                },
                "productclassification": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "1aebe0ca-635c-42ff-be3a-6617a0fb92f5",
                      "os": "contextCoalesce",
                      "osid": "Polo Mens Shirt Red",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw"
                    }
                  ]
                },
                "color": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "88c3e35d-324d-42be-840d-d96be2006b16",
                      "os": "contextCoalesce",
                      "osid": "Polo Mens Shirt Red",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "_NULL"
                    }
                  ]
                },
                "code": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "08138139-0fac-4c05-95fb-774734803925",
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
                      "id": "21f973f1-2e4f-4b86-b903-0c5df8bd2ceb",
                      "os": "instanceCoalesce",
                      "osid": "germanyweb",
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
                      "id": "cd8414d2-c2e3-4cd1-bbc9-451a56ab2cba",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "straw"
                    }
                  ]
                },
                "externalName": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "8ae4573b-53c0-41fe-a0be-506a279c1147",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "Straw"
                    }
                  ]
                },
                "path": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "fa6d9616-0022-4995-b7a0-63130a5e28f4",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "productclassificationroot"
                    }
                  ]
                },
                "rootexternalname": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "6b74e895-5457-4a56-b22c-4df6e85d3b86",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "Product Classifications"
                    }
                  ]
                },
                "externalnamepath": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "1623ae59-8546-4853-9288-c23461cd5ad4",
                      "os": "instanceCoalesce",
                      "osid": "straw",
                      "ostype": "classification",
                      "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                      "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw"
                    }
                  ]
                }
              },
              "relationships": {
                "allowedlocales": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "germanyweb",
                    "ostype": "channel",
                    "osctxpath": "channel@@Germany Web",
                    "relTo": {
                      "id": "5c2089c1-ba7f-47af-bb0f-fa7ccf35ce7e",
                      "type": "locale"
                    },
                    "attributes": {},
                    "id": "5c2089c1-ba7f-47af-bb0f-fa7ccf35ce7e",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "germanyweb",
                    "ostype": "channel",
                    "osctxpath": "channel@@Germany Web",
                    "relTo": {
                      "id": "1bc496d0-e977-4f23-a31d-72a39119aa53",
                      "type": "locale"
                    },
                    "attributes": {},
                    "id": "1bc496d0-e977-4f23-a31d-72a39119aa53",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  }
                ],
                "belongstocountry": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "germanyweb",
                    "ostype": "channel",
                    "osctxpath": "channel@@Germany Web",
                    "relTo": {
                      "id": "germany",
                      "type": "country"
                    },
                    "id": "germany",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  }
                ],
                "belongsto": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "straw",
                    "ostype": "classification",
                    "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear>>Hats>>Straw",
                    "relTo": {
                      "id": "apparelnfootwearhats",
                      "type": "classification"
                    },
                    "attributes": {},
                    "id": "belongsto_apparelnfootwearhats"
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "apparelnfootwearhats",
                    "ostype": "classification",
                    "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear>>Hats",
                    "relTo": {
                      "id": "apparelnfootwear",
                      "type": "classification"
                    },
                    "attributes": {},
                    "id": "belongsto_apparelnfootwear"
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "apparelnfootwear",
                    "ostype": "classification",
                    "osctxpath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear",
                    "relTo": {
                      "id": "productclassificationroot",
                      "type": "classification"
                    },
                    "attributes": {},
                    "id": "belongsto_productclassificationroot"
                  }
                ],
                "belongstotaxonomy": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "productclassificationroot",
                    "ostype": "classification",
                    "osctxpath": "country@@Germany##classification@@Product Classifications",
                    "relTo": {
                      "id": "ceacc0fd-6d4b-42d1-9098-498ec268b236",
                      "type": "taxonomy"
                    },
                    "attributes": {},
                    "id": "belongstotaxonomy_ceacc0fd-6d4b-42d1-9098-498ec268b236"
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