---
title: Generate Variants - Self
sidebar: rdp_sidebar
permalink: api_app_generate_variants_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.generatevariants}}** to generate entity variants using a scenario. 

## Scenario 

To generate entity variant matrix for productgroup entity in self context.

{% include snippets/header.html %}

### Pre-requisites 

1. In order to generate variants, you must have manage and validation model for all the entity types defined at all levels. 
2. You must have [entityVariantModel](api_create_entity_variant_model.html), [variantModelSettings](api_create_entity_variant_model_scenario1.html) and entityContextModel for the corresponding entity type.

## Example

This scenario explains variant generation using the following steps:
* Create a productgroup entity with self level attributes.
* Generate variants for this productgroup entity.
* The nearest best fit variant model is chosen and applied. Variants are generated based on this model.

## Request - 1 

To create an entity, you can use the REST API **{{site.data.rdp_glossary.appcreateentity}}**. In the request, send the following details:

* Specify the entity id, name and type.
* Specify the values for the mandatory dimension attributes color, size and featurespecs. 

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "ProductGroup1",
    "name": "ProductGroup1",
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
    "requestId": "89e39a04-dd94-4fe4-87ac-67e2cc596dba"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted productgroup for create with Id ProductGroup1. Check after some time",
          "messageType": "success",
          "messageParams": [
            "productgroup",
            "create",
            "ProductGroup1"
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
* entity: In the [entity](api_entity_object_structure.html) object, provide the entity id, name and type. Here, you wish to generate variants of the productgroup entity created above.

<pre><code>
POST **{{site.data.rdp_glossary.generatevariants}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "createVariants": "false"
  },
  "entity": {
    "id": "ProductGroup1",
    "name": "ProductGroup1",
    "type": "productgroup"
  }
}
</code></pre>

## Response - 2

If the generate variants request is submitted successfully, the [appropriate variant model](api_create_entity_variant_model_scenario2.html) is applied and the following response is received from the API.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "a8ab9aec-b19e-4cf6-a8c9-2a58c55cc2be"
  },
  "response": {
    "entities": [
      {
        "id": "qVM6TPqbT1eJSO-PYWoPtg",
        "type": "product",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "905934bf-f32f-4298-b02c-38b552a14f2e",
                  "value": "128 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "dd19f5f9-8f7d-4eb1-8a81-b8ecc7ef9237",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2aca7bd3-de4c-458b-9557-beab51e09be9",
                  "value": "green",
                  "properties": {
                    "referenceData": "colors/eb38ef3c-9ba5-4a54-aa6d-872c10c3a491",
                    "referenceDataIdentifier": "WGN"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "22ed6038-a36b-41cc-8055-9aeb5f5ad0f2",
                  "value": "small"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b6353962-cd2f-4418-8002-5f02e8e53ff4",
                  "value": "medium"
                }
              ]
            }
          },
          "relationships": {
            "productischildof": [
              {
                "id": "78c728e7-8a91-44b8-8077-d24b3634c962",
                "relTo": {
                  "id": "ProductGroupTest1",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "tJzoyQ07RcKecYWcHoWFYw",
        "type": "product",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "47895d0e-a409-4212-b14b-3ef910778a3e",
                  "value": "64 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f347a0c7-126f-4b4d-a998-f5367443f1d7",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "99ac83a4-290d-48ff-9a5a-e091a91be6ce",
                  "value": "green",
                  "properties": {
                    "referenceData": "colors/eb38ef3c-9ba5-4a54-aa6d-872c10c3a491",
                    "referenceDataIdentifier": "WGN"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0740310e-e263-4c73-a49e-f108605ab5dd",
                  "value": "small"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7e53a6b8-3de5-45d6-9009-d6a22da880d4",
                  "value": "medium"
                }
              ]
            }
          },
          "relationships": {
            "productischildof": [
              {
                "id": "b4356733-7034-470e-ae0f-f4ef98dc6726",
                "relTo": {
                  "id": "ProductGroupTest1",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "Lv3_R0TQQ7qpKjSZ5GXw6w",
        "type": "sku",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5b8ef05d-adc0-4b25-af1c-4770138815c5",
                  "value": "128 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "96f19ba4-f905-4f1f-af0a-8522d825cca0",
                  "value": "green",
                  "properties": {
                    "referenceData": "colors/eb38ef3c-9ba5-4a54-aa6d-872c10c3a491",
                    "referenceDataIdentifier": "WGN"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2172d87e-1f87-41bf-908f-759ab5cbbd72",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "f6350bbc-2487-46a8-9a75-9e76458f6a1b",
                "relTo": {
                  "id": "qVM6TPqbT1eJSO-PYWoPtg",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "EnxkkQQNRaSC0eC1Mg316g",
        "type": "sku",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "215ed642-443f-4bd9-a824-fe9f0347420c",
                  "value": "128 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0447dfde-f3cf-4186-bb5e-ec32c28f1bdf",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c690aabe-7471-44ae-94f2-f2ced2097e27",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "2c653331-db66-4b27-98e7-cc34e4043864",
                "relTo": {
                  "id": "qVM6TPqbT1eJSO-PYWoPtg",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "7T47BqO-SoSClQeCZzhXEA",
        "type": "sku",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "45c8391c-d63b-409b-aa67-820329adc8f4",
                  "value": "128 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c2bb246c-d7fc-47db-a185-8e9e86e3e92d",
                  "value": "green",
                  "properties": {
                    "referenceData": "colors/eb38ef3c-9ba5-4a54-aa6d-872c10c3a491",
                    "referenceDataIdentifier": "WGN"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3f596cf0-460d-49ba-bf58-f360117c3246",
                  "value": "medium"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "6c134e34-a497-480f-8e6c-2d46e72c20b9",
                "relTo": {
                  "id": "qVM6TPqbT1eJSO-PYWoPtg",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "5ZOpkNwURzCoQR-7J3RwzA",
        "type": "sku",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "dfe841de-ba4f-4e39-9f5a-e32c57a33b8c",
                  "value": "128 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "24a52c4b-c621-473d-abad-9ecb9ed33673",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6773b4d0-4a69-4bde-96d1-8ccf0522187b",
                  "value": "medium"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "b34033e4-1475-40e6-b87c-216881d715fa",
                "relTo": {
                  "id": "qVM6TPqbT1eJSO-PYWoPtg",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "mtO8rojLRo2yBT9Jb6fl6g",
        "type": "sku",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "883ec102-6a03-4db7-9d5a-a97b895b901a",
                  "value": "64 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7180fba5-6237-48c5-8a19-8a30e47e4e58",
                  "value": "green",
                  "properties": {
                    "referenceData": "colors/eb38ef3c-9ba5-4a54-aa6d-872c10c3a491",
                    "referenceDataIdentifier": "WGN"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f87132b5-9b60-4fff-a16f-d8b69467bd21",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "d09c2e28-286c-4aa8-99df-9299aa225192",
                "relTo": {
                  "id": "tJzoyQ07RcKecYWcHoWFYw",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "5fZM8UJxRd-4lomdely68w",
        "type": "sku",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "539826f1-e6d0-4200-9396-daf650a20f5c",
                  "value": "64 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8416ed6f-3fe3-4c08-a3ee-a081215a66e5",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "bbfc80b0-5b62-422f-87d0-f1242c64d2fa",
                  "value": "medium"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "edf4812c-d7b3-41fb-97f0-eceb663fe2fb",
                "relTo": {
                  "id": "tJzoyQ07RcKecYWcHoWFYw",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "uCQogsldQ3Ctj5foeHfAYA",
        "type": "sku",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cedf4d16-15b8-4419-86b9-a1eebd644c20",
                  "value": "64 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "bcc42a54-29e9-44db-a6c6-ef435e509f51",
                  "value": "green",
                  "properties": {
                    "referenceData": "colors/eb38ef3c-9ba5-4a54-aa6d-872c10c3a491",
                    "referenceDataIdentifier": "WGN"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "22a7c998-f4ce-47eb-96b5-20a4c20e4ee9",
                  "value": "medium"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "ec48a8ed-9f6b-445d-9063-43db10311c2f",
                "relTo": {
                  "id": "tJzoyQ07RcKecYWcHoWFYw",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "qMbxlwK0Sk-QS4i6id1DTQ",
        "type": "sku",
        "systemInfo": {},
        "properties": {
          "variantStatus": "new"
        },
        "data": {
          "attributes": {
            "featurespecs": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6f7006a8-546d-4733-ba61-0b8062698201",
                  "value": "64 gb"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c0001a86-c4af-472e-b9df-5d64641679ee",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "92812e5d-f3b3-4d1c-bc0d-23069954f395",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "1854ddc3-8485-4604-b86e-ba18e8eea59d",
                "relTo": {
                  "id": "tJzoyQ07RcKecYWcHoWFYw",
                  "type": "product"
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 10
  }
}
</code></pre>

The variants generated for productGroup are as follows:

| id | type | featurespec | color | size | Related To |
|-------|------|-----------|----------|-------------|---------|
| Product1 | product | 128 gb | red,green | small,medium | ProductGroup ProductGroup1 |
| Product2 | product | 64 gb | red,green | small,medium | ProductGroup ProductGroup1 |
| Sku1 | sku | 128 gb | green | small | Product1 | 
| Sku2 | sku | 128 gb | red | small | Product1 |
| Sku3 | sku | 128 gb | green | medium | Product1 |
| Sku4 | sku | 128 gb | red | medium | Product1 |
| Sku5 | sku | 64 gb | green | small | Product2 |
| Sku6 | sku | 64 gb | red | small | Product2 |
| Sku7 | sku | 64 gb | green | medium | Product2 |
| Sku8 | sku | 64 gb | red | medium | Product2 |

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.