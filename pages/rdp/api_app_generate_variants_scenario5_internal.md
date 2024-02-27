---
title: Generate Variants - Get Nearest
sidebar: rdp_sidebar
permalink: api_app_generate_variants_scenario5.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.generatevariants}}** to generate entity variants in a context, using a scenario. 

## Scenario 

To generate entity variant matrix for productgroup entity.

{% include snippets/header.html %}

### Pre-requisites 

1. In order to generate variants, you must have manage and validation model for all the entity types defined at all levels. 
2. You must have [entityVariantModel](api_create_entity_variant_model.html), [variantModelSettings](api_create_entity_variant_model_scenario1.html) and entityContextModel for the corresponding entity type.

## Example

This scenario explains variant generation using the following steps:
* Create a productgroup entity with self level and enhancer attributes.
* Generate variants for this productgroup entity.
* The nearest best fit variant model is chosen and applied. Variants are generated based on this model.

## Request - 1

To create an entity, you can use the REST API **{{site.data.rdp_glossary.appcreateentity}}**. In the request, send the following details:

* Specify the entity id, name and type.
* Specify the values for the mandatory dimension attributes. 

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "ProductGroup3",
    "name": "ProductGroup3",
    "type": "productgroup",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "color": {
          "values": [
            {
              "value": "red",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "green",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "productclassification": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
            }
          ]
        },
        "size": {
          "values": [
            {
              "value": "small",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "medium",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "featurespecs": {
          "values": [
            {
              "value": "64 gb",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "128 gb",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "itemtype": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "Refurbished"
            }
          ]
        },
        "soldcount": {
          "values": [
            {
              "value": "Count1",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "Count2",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "sleevetype": {
          "values": [
            {
              "value": "full sleeves",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "half sleeves",
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

If the create entity request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "872d21e3-946d-4e75-bc5d-d56d0a214134"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted productgroup for create with Id ProductGroup3. Check after some time",
          "messageType": "success",
          "messageParams": [
            "productgroup",
            "create",
            "ProductGroup3"
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
* entity: In the [entity](api_entity_object_structure.html) object, provide the entity id, name and type. Here, you wish to generate variants of the productgroup entity created above. As there are multiple matching variant models that can be applied, the [nearest best fit model](api_get_nearest_data_model_scenario1.html) is determined and applied. Here, for the above productgroup entity, although there are two matching models - [Matching Variant Model 1](api_create_entity_variant_model_scenario2.html) and [Matching Variant Model 2](api_create_entity_variant_model_scenario3.html), based on precedence, the [best fit model](api_create_entity_variant_model_scenario3.html) is applied.

<pre><code>
POST **{{site.data.rdp_glossary.generatevariants}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "createVariants": "false"
  },
  "entity": {
    "id": "ProductGroup3",
    "name": "ProductGroup3",
    "type": "productgroup"
  }
}
</code></pre>

## Response - 2

If the generate variants request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "2a0c7fa4-bf34-47fe-996f-4e7ea0cec867"
  },
  "response": {
    "entities": [
      {
        "id": "EBgllbJQQqOzgV5hbh9UNA",
        "type": "product",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9c85d117-13cb-4e61-b5c4-9650811c4561",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ddc09a8a-900e-4189-8964-060c547802a0",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1eff3f2a-8af5-4e4e-a459-e7054d99719d",
                  "value": "Count2"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7d2a20d5-7222-4037-8495-771cb6563e78",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cd4d13b2-e6e4-498d-8ee8-e6afb84aaf18",
                  "value": "half sleeves"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "10d6d222-b610-4af9-a16c-173c618828a3",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "7f16798c-67cf-45fc-ad70-7b6a67d13f0a",
                "relTo": {
                  "id": "ProductGroup3",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "5DRmLAvLTC2aRZfUSruUSA",
        "type": "product",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ffc67fa0-9329-4311-a640-b8d584a0e27a",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "eac451b4-ca1b-40de-a93e-44abb201e5f2",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8dce895f-1788-4822-aa01-c88fa981cf06",
                  "value": "Count2"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1fae3432-311f-432f-a1eb-8d3def081bb5",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c9ba0c7b-7b66-4bf1-b9a2-6ec666ca5613",
                  "value": "half sleeves"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "964608af-4932-490b-90d0-fa714f359747",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "28143b90-6eeb-455c-829f-3a5ff7173811",
                "relTo": {
                  "id": "ProductGroup3",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "5qIR-uDdQyqJc0tlReMtZA",
        "type": "product",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "45e09062-a3b6-4476-8afb-0e9116884f89",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ec08dca2-30c7-49a4-8c5f-091bc4a2d458",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a121ab6e-3860-49c4-b48f-9638b8787252",
                  "value": "Count2"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7f4f6f96-810c-4a75-ab64-aac9dabaa2ba",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "32aa2f61-2b47-4cda-976a-29949b74e860",
                  "value": "half sleeves"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1f4f436a-75e2-4a39-b40e-f79310fe48e1",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "e904d5d5-ae69-47e5-b30f-5a7e2a0bb0e7",
                "relTo": {
                  "id": "ProductGroup3",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "e6Or-ZINQUySRvFam74iRA",
        "type": "product",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2c688d54-cbc1-4152-8808-78a955ea616f",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "18a73f6f-c254-4e62-bc15-79f8b5a67417",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d9b6aa24-753e-476b-a30e-3f09f375310b",
                  "value": "Count2"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4791b19f-9da4-4577-9906-e7c05a91a0e0",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "075b43b0-cc8d-4489-b7ab-875c67747dfe",
                  "value": "half sleeves"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "23417ec2-a797-4427-afc4-8f1e6bff1fef",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "826aa6ec-fe0e-4239-9842-415aceb0848d",
                "relTo": {
                  "id": "ProductGroup3",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "7Unle-F3THujf1jLMLUKKw",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f54bcdcb-6fe4-4a48-a23c-222876a2ec5b",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ed88166c-185c-435e-abc8-15445f9e2938",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "108e2ce1-3e9e-4e2e-b7e1-145549f3528f",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fb844bf9-4975-448a-9f56-04000923d7ec",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "0f5c6de5-1d17-47fe-a44c-0f7a1b782470",
                "relTo": {
                  "id": "EBgllbJQQqOzgV5hbh9UNA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "MjgoFDgzTP2MW1xOvWCanA",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f6ea1a9d-ae4f-4b88-b5ce-43f5f3beb8c3",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "bba062e9-48a3-46d7-8dde-62f30867b5f2",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0a7d3fbd-3e71-426c-8c25-2add13ce7a02",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3951eec6-4655-4a3c-8d5d-62a7bbe10960",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "9b1256a5-7b76-48e3-9f6d-157a93f06251",
                "relTo": {
                  "id": "EBgllbJQQqOzgV5hbh9UNA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "3D_2f_YHQLevZDATzhdwwQ",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "131bd8b8-36d4-48f7-894a-1d10cb64ee6c",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9d3a717b-6995-4160-8c9a-f924a72da130",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ab208efa-c07d-4965-a154-31a694c805fd",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2f3775a4-c594-4cb4-b1aa-bda8b9ebb09a",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "61ba99a5-68cd-4c57-8a9a-ff4ffd5aadd2",
                "relTo": {
                  "id": "EBgllbJQQqOzgV5hbh9UNA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "0-IixBniSQevVcsfPMy6uA",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0f6df61e-5d66-4ffa-9b50-d63e64763d92",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "443fb3d9-7452-44af-a31b-fe7f5d73bee9",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "03d31753-d0c2-4201-96db-aa4aa55664f6",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "db370b06-d18b-4be1-8b0c-24cece177890",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "ec1e99e6-ee5d-4aa7-b1f9-e85c26c5b274",
                "relTo": {
                  "id": "EBgllbJQQqOzgV5hbh9UNA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "JrsQsNcvSDmSUgwpHfU36Q",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "390b080a-6cd8-420f-9cfe-4ff111ac400c",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a2cf5408-1a6e-4ae4-9857-4359c4f76618",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e0c58b95-0737-4c87-bcc0-a72e43a60363",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6f1435d9-6ee4-4ee4-971d-f6b1adc4d0bb",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "ffc9197b-45a8-4b0c-856e-772506441f6c",
                "relTo": {
                  "id": "5DRmLAvLTC2aRZfUSruUSA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "H7evmvrTT_iJg0QC4n683A",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1e6413ea-dcb6-42e9-ad67-ce6605a7e63e",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e463913e-917e-410e-bd0f-c8fe7c31d53d",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2c0af8b8-3435-4376-9779-2ff03c35f567",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f8c377ac-43d3-4cba-8ded-f7f062357a41",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "56fea834-bae5-4e4c-b746-ead787773b2a",
                "relTo": {
                  "id": "5DRmLAvLTC2aRZfUSruUSA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "2kiHzbW-SLGIP8zpKzyygQ",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e932b7df-bf7e-4434-9186-64e8b705954d",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ce5fc38c-58fe-4459-b717-b9d5ba34aaa1",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "15a92736-b95e-4031-8447-ecdd40b6c144",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f015426c-07e3-480f-b40c-33ead268331e",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "c201be9a-2039-4a4d-a6d8-95cdb35748ca",
                "relTo": {
                  "id": "5DRmLAvLTC2aRZfUSruUSA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "MEkFYIO_Ruip8iP3YIQ6Pg",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0ba57102-7d2f-429d-914c-ff46b6c3d897",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7a424aac-f660-4b64-959e-b76bff0517a8",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "624169ab-469a-47e3-85b2-948bf6a8b906",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0b076e76-a888-4366-9994-e6b09ec9b7bc",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "4821bd2c-4884-4b0a-80f8-b61460b6b8ec",
                "relTo": {
                  "id": "5DRmLAvLTC2aRZfUSruUSA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "0kkaFrqdQkieToiKXY5gdw",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cbdede60-ebcc-4d29-9168-06b8d8f8430d",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "35b7e5be-8eef-4155-960b-b96426ce01c5",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "32e6ca9c-ebb2-4822-92a6-bcc80bd05dac",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b84780da-8c13-4ca8-81c4-f171b3a3e9df",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "7d9c0f83-a6f3-4fce-81fb-3b46193d1ba8",
                "relTo": {
                  "id": "5qIR-uDdQyqJc0tlReMtZA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "iOEgbWWiQZeboHpAhpCoJg",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f7672d90-6378-4c63-ab68-d30805ff9ea5",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6e4619d3-7e89-4c42-bb26-c30dfc8ad9e2",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "79b72d9f-4814-47ad-978f-fff658e7982f",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e6674abf-1556-4fa7-867b-fc3f3d728998",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "62b37a73-0f2b-4ed2-94ba-0fd774dae944",
                "relTo": {
                  "id": "5qIR-uDdQyqJc0tlReMtZA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "DtlSPfnDQ621OeCC1LG8ZQ",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "85392fff-b9d9-4376-8a55-273431c77eb7",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "67fb0662-598d-4a9d-b6cd-98914881a68a",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ebb9e80e-f1ff-4a72-a9de-2f2125175ffa",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "15bd272c-3577-486e-bbd6-97676c592b26",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "f2fecdf5-1a49-45eb-9815-65d36aa0a327",
                "relTo": {
                  "id": "5qIR-uDdQyqJc0tlReMtZA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "qbzRn9l_TEeRVbeDRdoJng",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b059b280-bea3-4694-8d14-7969cd12a46e",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "865ca2db-af7d-4abf-a252-aa51d08b7ff5",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c12574dd-b8c3-439f-abce-76fc4022f085",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "49d40788-9cad-40b3-a252-ec4851796291",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "fc16b726-dc0d-43fc-93af-5c54144e63a8",
                "relTo": {
                  "id": "5qIR-uDdQyqJc0tlReMtZA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "x0Hrqs17Tuq53XVp3qrZvA",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "63c4bfa9-8f10-408f-80af-78d748a3d4bb",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0abd83f7-d0be-4db4-b1b8-0e093e1a8ae3",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fce0d5c9-47c4-4f98-ad6a-7894440be391",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "503abea0-6dd5-4db0-b3e9-934116dd1d19",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "cfcc260d-3a07-4688-a997-8584c243a0ab",
                "relTo": {
                  "id": "e6Or-ZINQUySRvFam74iRA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "A9R5CH-HQsOfNunGaJA5lQ",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2546dbe4-239a-4525-a7c7-328df8884c0b",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6f11eacf-14e2-4e08-9b09-e5a131329902",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "71268e68-3a77-4db1-86b0-cd1a6a803a3a",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f984a01d-c1aa-41a7-9a00-4d63693bb3f1",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "f1400ce7-61a9-421b-8666-535ed4cf27c0",
                "relTo": {
                  "id": "e6Or-ZINQUySRvFam74iRA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "iDAfM_yhRW2Ft168F5yMlw",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5d132411-a3b3-4773-9779-203733968c59",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6fd61ba1-e260-4a23-86c0-345de3ea7031",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ac5187d6-a96e-46db-86e8-550afccf4258",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cbee3356-225d-426d-9bc1-f75b3bfbd81c",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "0b7e46d4-8bf9-4a2c-9f61-bdf3376350f0",
                "relTo": {
                  "id": "e6Or-ZINQUySRvFam74iRA",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "yBLCWzWjScyzvu0JewvEaw",
        "type": "sku",
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8968673d-26a0-42da-86f5-7bda776c2038",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8f83adad-8c6e-4b1e-a3f0-f2e8a624d05e",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "74759c2a-f4b2-41e7-ab67-3027812412a5",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e910a36f-0b0b-4952-bd2d-d87bdedaa7c0",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f8884557-82b4-4cde-9f66-d239d845f7a8",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77ffb74f-1344-48ef-be4d-d519296b949a",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "2278e624-79a9-4766-9f6f-f01479f15136",
                "relTo": {
                  "id": "e6Or-ZINQUySRvFam74iRA",
                  "type": "product"
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 20
  }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.