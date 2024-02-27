---
title: Generate Entity Variants
sidebar: rdp_sidebar
permalink: api_app_generate_entity_variants.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Variant generation is the concept of generating a matrix of related entities based on the different combinations of dimension attributes specified at multiple levels.

The request to generate entity variants must be sent with the entity ID and entity type. The attributes of the entity are then validated against the corresponding [entity variant model](api_create_entity_variant_model.html) for the entity type and the entity variant matrix is generated. 

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to generate entity variants:

* [Generate Variants - Self](api_app_generate_variants_scenario2.html)
* [Generate Variants - Self and Enhancer ](api_app_generate_variants_scenario3.html)
* [Generate Variants in Primary Context](api_app_generate_variants_scenario4.html)
* [Generate Variants - Get Nearest](api_app_generate_variants_scenario5.html)

{% include snippets/header.html %}

### Pre-requisites 

1. In order to generate variants, you must have manage and validation model for all the entity types defined at all levels. 
2. You must have [entityVariantModel](api_create_entity_variant_model_scenario2.html), [variantModelSettings](api_create_entity_variant_model_scenario1.html) and entityContextModel for the corresponding entity type.

## Request

**Parameters**: The following table lists the parameters of the JSON request to generate entity variants:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | createVariants | Yes | Indicates if the entity variants must be created and persisted in the data store and is of boolean type. <br/> If **true**, then the entity variants are generated and the entities are persisted in the data store. <br/> If **false**, then the entity variants are generated and displayed in the response. |
| entity | id | Yes | Indicates the ID of the entity for which variants must be generated. |
| entity | name | No | Indicates name of the entity. |
| entity | type | Yes | Indicates type of the entity. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| response | entities | List of entity objects with the generated variants and the relationship with the parent entity. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of entity objects that match the generate variants criteria. |

## Example

## Request

The following scenario shows the variant generation for a "productgroup" entity. Variants of its first level child "product" are generated based on the dimension attribute "featurespecs". The variants of the second level child "sku" are generated based on the dimension attributes "color" and "size". Thus, a variant matrix is generated with all permutations of the dimension attributes at both levels.

{% picture VariantGeneration.png alt="Variant Generation" %}

To create an entity, you can use the REST API **{{site.data.rdp_glossary.appcreateentity}}**. In the request, send the following details:

* Specify the entity id, name and type.
* Specify the values for the mandatory dimension attributes color, size and featurespecs. 

<pre><code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "ProductGroupA",
    "name": "ProductGroupA",
    "type": "productgroup",
    "data": {
      "attributes": {
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
            }
          ]
        },
        "featurespecs": {
          "values": [
            {
              "value": "5 inch",
              "source": "internal",
              "locale": "en-US"
            },
            {
              "value": "6 inch",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code></pre>

## Response

If the create entity request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "64e08d20-b073-4a56-b5f5-93fd4336afd4"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted productgroup for create with Id ProductGroupA. Check after some time",
          "messageType": "success",
          "messageParams": [
            "productgroup",
            "create",
            "ProductGroupA"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Request

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
    "id": "ProductGroupA",
    "name": "ProductGroupA",
    "type": "productgroup"
  }
}
</code></pre>

## Response

If the generate variants request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "23a4f519-9e90-4c5a-a5c0-11d391ae0e33"
  },
  "response": {
    "entities": [
      {
        "id": "7U8dAL2BQD2zB7g2rzAZjQ",
        "type": "product",
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
                  "id": "f52df3c2-1e3b-407c-b158-0d6a9dbcaab3",
                  "value": "5 inch"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "bae575f5-1b4d-46b2-aa44-ca321266a28f",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a087eef6-6141-441e-9578-62dec20bd53c",
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
                  "id": "378c479e-605a-4308-91bc-4e42ab15a4c3",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "productischildof": [
              {
                "id": "e3876f3b-68ab-445b-a4a5-b13a27b1fdbe",
                "relTo": {
                  "id": "ProductGroupA",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "tIabI6l2SrqBoWaSpQdNXQ",
        "type": "product",
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
                  "id": "c3383327-0b4a-4391-abd2-f3a81c947656",
                  "value": "6 inch"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6348d4f2-26d0-48b1-9dec-97ee1854784a",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ebd438dc-cac9-4bb4-9250-ddca4f584e29",
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
                  "id": "4239bcf1-0cbd-4e42-8127-f3654cb9c33c",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "productischildof": [
              {
                "id": "51e30a36-91df-4122-b6f0-486d7b40830b",
                "relTo": {
                  "id": "ProductGroupA",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "svRfXXUPS5q4NHxMuyZZLg",
        "type": "sku",
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
                  "id": "0bc33533-6aff-46e2-9e9b-15cfbacc0419",
                  "value": "5 inch"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9c0baa1b-a3b8-4f21-aad5-df3609a6bcde",
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
                  "id": "00700df5-ed95-4dc7-acee-e3c3b43d4bbb",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "38b11250-3c26-43d7-8220-eb8288e1c36b",
                "relTo": {
                  "id": "7U8dAL2BQD2zB7g2rzAZjQ",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "_xylXexwQYuJAs4riHnVXQ",
        "type": "sku",
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
                  "id": "9b995139-0030-4a21-ada3-c26951ab5f34",
                  "value": "5 inch"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b272049d-5f7e-45b6-ac16-c57cb7ea355e",
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
                  "id": "f7f6d6f2-bc87-4e52-b981-d910670f81a9",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "faf685a4-92a1-44d1-8d52-53e8a6f64809",
                "relTo": {
                  "id": "7U8dAL2BQD2zB7g2rzAZjQ",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "5fWcEMfsTR65M0CillB6Kg",
        "type": "sku",
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
                  "id": "752678c7-39ec-46f0-95ba-d22e78a4bb22",
                  "value": "6 inch"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9d2d51dd-7f3b-4b51-9aea-d2de69bcc31f",
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
                  "id": "0748d1b0-ce69-4ee9-9503-7724ab495772",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "882cafd6-5589-44ba-8f11-3363bd481f00",
                "relTo": {
                  "id": "tIabI6l2SrqBoWaSpQdNXQ",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "PP6UsTmwSs6u-UwPPXKUHQ",
        "type": "sku",
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
                  "id": "e31fd342-e73b-4830-a4a6-2f0937748e23",
                  "value": "6 inch"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a7fd19ae-a043-486a-a498-e3cb9e1aca4c",
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
                  "id": "96033aa0-bfc0-40f7-83df-0147fa3a4c0a",
                  "value": "small"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "e74946db-4ab9-45fc-a04d-b0fecc1b5e41",
                "relTo": {
                  "id": "tIabI6l2SrqBoWaSpQdNXQ",
                  "type": "product"
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 6
  }
}
</code></pre>

The variants generated for productGroup are as follows:

| id | type | featurespec | color | size | Related To |
|-------|------|-----------|----------|-------------|---------|
| Product1 | product | 5 inch | red, green | small | ProductGroup ProductGroupA |
| Product2 | product | 6 inch | red, green | small | ProductGroup ProductGroupA |
| Sku1 | sku | 5 inch | red | small | Product1 | 
| Sku2 | sku | 5 inch | green | small | Product1 | 
| Sku3 | sku | 6 inch | red | small | Product2 |
| Sku4 | sku | 6 inch | green | small | Product2 |


See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.