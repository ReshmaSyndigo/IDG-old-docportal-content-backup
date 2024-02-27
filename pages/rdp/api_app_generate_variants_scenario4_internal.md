---
title: Generate Variants in Primary Context
sidebar: rdp_sidebar
permalink: api_app_generate_variants_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.generatevariants}}** to generate entity variants in a context, using a scenario. 

## Scenario 

To generate entity variant matrix for productgroup entity in country primary context, "Germany".

{% include snippets/header.html %}

### Pre-requisites 

1. In order to generate variants, you must have manage and validation model for all the entity types defined at all levels. 
2. You must have [entityVariantModel](api_create_entity_variant_model.html), [variantModelSettings](api_create_entity_variant_model_scenario1.html) and entityContextModel for the corresponding entity type.

## Example

This scenario explains variant generation using the following steps:
* Create a productgroup entity with attributes in "Germany" context.
* Generate variants for this productgroup entity.
* The nearest best fit variant model is chosen and applied. Variants are generated based on this model.

## Request - 1

To create an entity, you can use the REST API **{{site.data.rdp_glossary.appcreateentity}}**. In the request, send the following details:

* Specify the entity id, name and type.
* Specify the values for the mandatory country context dimension attributes. 

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "ProductGroupGermany",
    "name": "ProductGroupGermany",
    "type": "productgroup",
    "data": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "country": "Germany"
          },
          <span style="background-color: #FFFF00">"attributes": {</span>
            "apicoavailablesizes": {
              "values": [
                {
                  "value": "red-ctx1",
                  "source": "internal",
                  "locale": "en-US"
                },
                {
                  "value": "green-ctx1",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "value": "small-ctx1",
                  "source": "internal",
                  "locale": "en-US"
                },
                {
                  "value": "medium-ctx1",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "value": "cotton-ctx1",
                  "source": "internal",
                  "locale": "en-US"
                },
                {
                  "value": "silk-ctx1",
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "value": "12-ctx1",
                  "source": "internal",
                  "locale": "en-US"
                },
                {
                  "value": "14-ctx1",
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
</code>
</pre>

## Response - 1

If the create entity request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "cc801378-f9bd-4913-9c1b-2e9369218442"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted productgroup for create with Id ProductGroupGermany. Check after some time",
          "messageType": "success",
          "messageParams": [
            "productgroup",
            "create",
            "ProductGroupGermany"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Request - 2

To generate entity variants, you can use the REST API **{{site.data.rdp_glossary.generatevariants}}**. In the request, send the following details:

* params-> createVariants: false.
* entity: In the [entity](api_entity_object_structure.html) object, provide the entity id, name and type. Here, you wish to generate variants of the productgroup entity created above in Germany context.

<pre><code>
POST **{{site.data.rdp_glossary.generatevariants}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "createVariants": "false"
  },
  "entity": {
    "id": "ProductGroupGermany",
    "name": "ProductGroupGermany",
    "type": "productgroup",
    "data": {
      "contexts": [
        {
          "context": {
            "country": "Germany"
          }
        }
      ]
    }
  }
}
</code></pre>

## Response - 2

If the generate variants request is submitted successfully, the [appropriate variant model](api_create_entity_variant_model_scenario4.html) is applied and the following response is received from the API. The context "Germany" is added to the generated variant entities. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "99245671-d40c-4f42-959b-8c8d042d66b6"
  },
  "response": {
    "entities": [
      {
        "id": "FUN9AgsNT3ChynJDcptIDw",
        "type": "product",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fd4068f2-389c-4d18-95c0-fc7374a0e269",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "82985f47-a2f0-4467-8949-6fb03269721c",
                  "value": "small-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "d99cb237-a227-40f9-9e54-de9db7254bfb",
                "relTo": {
                  "id": "ProductGroupGermany",
                  "type": "productgroup"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {
                "apimccoavailablesizes": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "1148f77c-711e-4d0b-8fd6-c6a3158ab953",
                      "value": "14-ctx1"
                    },
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "a275595c-cda1-4305-a6ac-185ad1fe0e61",
                      "value": "12-ctx1"
                    }
                  ]
                },
                "apicomanufacturerpartnumber": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "f6356263-fc0f-42d2-acc9-a093b1c24f28",
                      "value": "cotton-ctx1"
                    },
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "47e86bf8-af19-4e90-abbb-02fd80cbd3d6",
                      "value": "silk-ctx1"
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        "id": "0FJm6WfvSt-u_MUTZ0JjRQ",
        "type": "product",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d397c0c3-34f1-40e0-9c8f-c0c1d309c297",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2403347e-645e-4e3f-b8e4-f409e560830b",
                  "value": "small-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "1c2777c6-fa16-454d-8c88-30ce08a5d19c",
                "relTo": {
                  "id": "ProductGroupGermany",
                  "type": "productgroup"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {
                "apimccoavailablesizes": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "bd38747e-afac-4ad0-8e7f-49b76e0c306b",
                      "value": "14-ctx1"
                    },
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "c250f40a-29bd-436e-82fe-3d07c96db7cf",
                      "value": "12-ctx1"
                    }
                  ]
                },
                "apicomanufacturerpartnumber": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "00a39a31-d1e6-4fb4-b446-4d61bd2af01d",
                      "value": "cotton-ctx1"
                    },
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "758767b0-43d4-4cfd-a600-3aa3d27d2f2e",
                      "value": "silk-ctx1"
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        "id": "M9Hc9AXqSQWX6rlNKHtv4w",
        "type": "product",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "195836f1-c84f-4733-8dfc-89279327b270",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "835fb083-2c2b-4402-b6e0-61670b233fcb",
                  "value": "medium-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "96d1b969-5820-44d7-8f89-7260561782af",
                "relTo": {
                  "id": "ProductGroupGermany",
                  "type": "productgroup"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {
                "apimccoavailablesizes": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "a98593fc-cbb0-4def-9d7b-3555c8adbdd3",
                      "value": "14-ctx1"
                    },
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "0127b19a-ccf1-4ff9-971a-922a71f3954f",
                      "value": "12-ctx1"
                    }
                  ]
                },
                "apicomanufacturerpartnumber": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "760a59c7-d49a-4680-acc5-7e6e6ed30a88",
                      "value": "cotton-ctx1"
                    },
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "8fad696a-27b3-482e-9060-9fe8e9c2b86d",
                      "value": "silk-ctx1"
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        "id": "Giu6KgNsQLWHOB-sWOOYYg",
        "type": "product",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8cb26b59-e096-4a41-b5be-e62b11572800",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "27b677b8-6ecd-4aaf-b233-5ed91692801b",
                  "value": "medium-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "4f4561b5-0682-4c33-95e9-b30c5367a474",
                "relTo": {
                  "id": "ProductGroupGermany",
                  "type": "productgroup"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {
                "apimccoavailablesizes": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "ab4ee07b-4145-44d7-9fba-81cdbc0004a0",
                      "value": "14-ctx1"
                    },
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "9d49a914-09f1-4e00-83de-736d0fb51231",
                      "value": "12-ctx1"
                    }
                  ]
                },
                "apicomanufacturerpartnumber": {
                  "values": [
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "8008846f-3c12-48f3-83c3-f81a4846cb78",
                      "value": "cotton-ctx1"
                    },
                    {
                      "locale": "en-US",
                      "source": "internal",
                      "id": "a1eeeeec-8aa2-4e25-98cb-c888ed6204d7",
                      "value": "silk-ctx1"
                    }
                  ]
                }
              }
            }
          ]
        }
      },
      {
        "id": "532NuIJPSgSr78YrvdgODA",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "456225ac-d0e2-49b7-9965-034a34c079ea",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "66dd0d81-5ea7-4b81-be38-c661485c614f",
                  "value": "small-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "77e9291e-b3bb-4d60-86c8-f10aa9ffc649",
                  "value": "cotton-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "54cef006-4025-4802-859f-b2639489c01b",
                  "value": "12-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "a79b2843-004d-4120-ae0a-c66bcf6481f2",
                "relTo": {
                  "id": "FUN9AgsNT3ChynJDcptIDw",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "yWjRAQ42TBGnl0Vz5ZcXng",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "83f11511-1789-464e-b375-20ad3aa8aa9b",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d6968e98-8886-47da-9d0f-668ca9ce3d62",
                  "value": "small-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "49729351-2d3e-4319-b140-73cac61db076",
                  "value": "silk-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "35b40bd8-21a3-4c0e-a452-17f751e3e991",
                  "value": "12-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "093449ba-c283-4686-886f-d4ae586c29cd",
                "relTo": {
                  "id": "FUN9AgsNT3ChynJDcptIDw",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "L9FNPVjoQTO_tnl9VS-xcA",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0694e5b6-7fbc-4e13-842a-cae0eb1339ad",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "05b2688c-91d4-46f8-8159-62f2e7206a43",
                  "value": "small-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7d0f336e-50ab-4a2a-9789-667dd22f4483",
                  "value": "silk-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f14fe6f2-c8fe-4f3b-a198-1dff8ccda131",
                  "value": "14-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "d3336f13-d820-4ad5-aab8-a74930a9114e",
                "relTo": {
                  "id": "FUN9AgsNT3ChynJDcptIDw",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "ACviFzthRF-MupaHZgEtIg",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3c8d01a4-d0f3-4eda-8c0c-a8e6146d32d5",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "af73d9b6-6075-4eb1-ae46-28f8447b9dcd",
                  "value": "small-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1938abb7-ead5-4f0c-8555-c826a98392a9",
                  "value": "cotton-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7dae9ffe-4376-40b8-b7a8-b550ab82f7ca",
                  "value": "14-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "ebadd46c-5367-4632-9bc3-a98ae8c56aa6",
                "relTo": {
                  "id": "FUN9AgsNT3ChynJDcptIDw",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "VZjfgcWFSOC_wAhgPkukrg",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6aee6cda-a292-43f4-8025-c070fd475079",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6bc3bf6f-3f2f-4ccb-8ea1-c90371568ca0",
                  "value": "small-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "85dd0218-69d4-4ccc-875e-2ad1ac72b575",
                  "value": "cotton-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2f3d1a5f-837a-41c2-9612-54cb865fb4c1",
                  "value": "12-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "1b74d794-5767-4c26-937a-6a9c768e3a81",
                "relTo": {
                  "id": "0FJm6WfvSt-u_MUTZ0JjRQ",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "wpwq5BvRSoqb-Z_lGS8jrQ",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "61ddad2d-8fa8-4eb8-994c-3471e69822a7",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6c009c0f-f686-4a4a-a4b2-617b222117dd",
                  "value": "small-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "03639cce-f05b-42ec-b521-11f2584b3c08",
                  "value": "silk-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e2a69e0e-641a-4d19-867c-6db6479edfb6",
                  "value": "12-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "3efad2e1-63b7-48e0-9b8f-06564de02ef9",
                "relTo": {
                  "id": "0FJm6WfvSt-u_MUTZ0JjRQ",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "3--bf5cUQZq58voa7u3wMQ",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ca0d0e49-e2e6-4875-8fc6-472f3b6796a3",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2d12dfff-d0c2-4dd0-a79e-a188cfe3f73a",
                  "value": "small-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f8c31b72-7c67-48db-b1bf-0e5451be64fc",
                  "value": "cotton-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "002b1e44-48a8-4a53-875c-bc06a39fb571",
                  "value": "14-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "3e800b6f-c525-4595-b67e-e6c07a8a7054",
                "relTo": {
                  "id": "0FJm6WfvSt-u_MUTZ0JjRQ",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "Php8iO39RXSk3d1AxK17Fg",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d31fe4a1-8994-4725-864f-87ad22df6c27",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "23d8b3b3-c01f-4b9a-9a8b-92f6ec74822d",
                  "value": "small-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e583644d-35e3-4952-aacc-7d046ffb5067",
                  "value": "silk-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6b7f622a-3c30-4ec2-bb41-a2578aa084e6",
                  "value": "14-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "5eb06541-a0ce-4918-82fb-11c26ebc8d85",
                "relTo": {
                  "id": "0FJm6WfvSt-u_MUTZ0JjRQ",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "mnmbQEIDTVWtFuuBIRIUEQ",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "275a9629-d4c8-4f2b-a80d-8bddb4c6aa9b",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fdd8b53d-1e61-4bbf-a8fc-ba728cd4ac88",
                  "value": "medium-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "308dabd3-1409-4662-858e-d1c5fd3b52f6",
                  "value": "silk-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4700f34a-2546-4580-8aa6-373e89d6bf54",
                  "value": "14-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "2505278d-d303-4fde-8c0c-75346b7d5e01",
                "relTo": {
                  "id": "M9Hc9AXqSQWX6rlNKHtv4w",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "y2VU5wgXSUad5h0hfOsiEQ",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b484a631-526e-4cb0-9aba-aacab45f19a3",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d4ab7c5b-c1fd-46a1-b30d-f31596a8b513",
                  "value": "medium-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5bb40544-52eb-45d6-a14a-b8a16e0886c6",
                  "value": "silk-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1198bc89-a6bc-4ea8-bdc6-93ff462110c3",
                  "value": "12-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "c7645972-69d8-4d38-95cf-2cb840262c29",
                "relTo": {
                  "id": "M9Hc9AXqSQWX6rlNKHtv4w",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "hB0b-BrkSFWmncxz8GXASA",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2091ff77-bf46-4196-833d-b6b56c4384a1",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b266a80b-457a-40e8-86c4-3861677b790d",
                  "value": "medium-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6a01bb22-8287-4e27-ab84-2f1b612851ef",
                  "value": "cotton-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5f1cc145-d3dd-4c0b-8df8-57eaa8e21f85",
                  "value": "12-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "84619591-fbf3-4458-9aa7-31044c35b720",
                "relTo": {
                  "id": "M9Hc9AXqSQWX6rlNKHtv4w",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "GKiRwoRcQhKXtdUUJXZZmg",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2bd5e584-d478-42f5-9867-0a6f87ac2b04",
                  "value": "red-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2b97d1b5-77df-43df-9545-a674296d015a",
                  "value": "medium-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "862ae26f-0809-47f6-976d-b2e83e84dc1d",
                  "value": "cotton-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "aa7d2f8c-7acd-49e2-bff4-96f3f7f01bbf",
                  "value": "14-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "49fc85a4-87f5-4372-9d11-5f446117a270",
                "relTo": {
                  "id": "M9Hc9AXqSQWX6rlNKHtv4w",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "uG2kkCsCQN2Ic-QDoKKcJg",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "83f64a71-ea5c-4caf-8234-a62554ab1bb3",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d9e90cf1-ddcc-4d37-b5bf-490dcc22ab35",
                  "value": "medium-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cf3e0545-a2f7-4291-83fa-d1e948481081",
                  "value": "silk-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e7c360f5-e05d-4e2a-ac35-2600a42d3cd9",
                  "value": "12-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "f4c3d7a1-799e-4282-a2ca-bd25561f62a0",
                "relTo": {
                  "id": "Giu6KgNsQLWHOB-sWOOYYg",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "ZE6HOYdtQLiM0YjAxFc87A",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "76e1b6b4-b1d2-49ce-b4ec-e059298cd9e4",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fabf3f2a-aff6-4e91-820f-8f18012371ea",
                  "value": "medium-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0f6e782c-a9d3-466f-bcc6-e2fa41750320",
                  "value": "cotton-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "412eb9b7-904e-4167-8e0f-b514f041eea2",
                  "value": "14-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "066cee42-b2b4-4989-ba2b-cd628f60ee71",
                "relTo": {
                  "id": "Giu6KgNsQLWHOB-sWOOYYg",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "a-pVTmjIRFCio-VrX4xqig",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3f78d2b9-93d1-456f-8834-d92fc562d952",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "58393e3b-4276-4eb0-9076-2293a4d75f9b",
                  "value": "medium-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9a072141-e4a0-46a0-ac54-24974f04c4ea",
                  "value": "cotton-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "45b5fb93-0c2e-4f34-aa50-97743e407442",
                  "value": "12-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "93e236be-8413-42d1-8f84-45e4415680b3",
                "relTo": {
                  "id": "Giu6KgNsQLWHOB-sWOOYYg",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      },
      {
        "id": "2Eu3nBfzTAyxPsaGVw1XSg",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "apicoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d177ec17-271a-4032-b9a8-ba175451cde0",
                  "value": "green-ctx1"
                }
              ]
            },
            "apicofurnituresize": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "92a6239d-5243-4716-8025-e466c3bd1820",
                  "value": "medium-ctx1"
                }
              ]
            },
            "apicomanufacturerpartnumber": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d6e500bb-f05d-41af-b1d0-49c7d8e183c2",
                  "value": "silk-ctx1"
                }
              ]
            },
            "apimccoavailablesizes": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "31f0f369-3261-4c05-adf1-18ae4636d843",
                  "value": "14-ctx1"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "a144d387-7379-4599-adac-72802b36fc8f",
                "relTo": {
                  "id": "Giu6KgNsQLWHOB-sWOOYYg",
                  "type": "product"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {}
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 20
  }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.