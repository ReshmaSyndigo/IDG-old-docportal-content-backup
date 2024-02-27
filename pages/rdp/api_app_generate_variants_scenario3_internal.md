---
title: Generate Variants - Self and Enhancer 
sidebar: rdp_sidebar
permalink: api_app_generate_variants_scenario3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.generatevariants}}** to generate entity variants using a scenario. 

## Scenario 

To generate entity variant matrix for productgroup entity in self context using self and enhancer given attributes.

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
* Specify the values for the mandatory self context dimension attributes color, size and enhancer given attributes sleevetype and soldcount. 

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "ProductGroup2",
    "name": "ProductGroup2",
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
    "requestId": "9431e977-bdac-4c37-9bd6-c402fc445976"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted productgroup for create with Id ProductGroup2. Check after some time",
          "messageType": "success",
          "messageParams": [
            "productgroup",
            "create",
            "ProductGroup2"
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
    "id": "ProductGroup2",
    "name": "ProductGroup2",
    "type": "productgroup"
  }
}
</code></pre>

## Response - 2

If the generate variants request is submitted successfully, the [appropriate variant model](api_create_entity_variant_model_scenario3.html) is applied and the following response is received from the API.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "50ffce3e-c480-40a8-b758-439514378449"
  },
  "response": {
    "entities": [
      {
        "id": "6XynjsMXTOazUSNEaf-X9Q",
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
                  "id": "11dddae1-375e-4884-bd67-4458a3ed0179",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3220622f-3639-42ee-81d7-8ce8fa746aaa",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4e0fd6e7-32c0-43a4-ba4c-dfc29b979fb2",
                  "value": "Count2"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0c0a6518-d13b-4324-95a8-d0fcb159d560",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e956ade4-374e-4834-9c0b-6f9155fe02ec",
                  "value": "half sleeves"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "592f1028-8c9a-419d-8a80-c15577ef5336",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "ea8cfa80-26a2-47b6-885b-b559c6e421ed",
                "relTo": {
                  "id": "ProductGroupTest3",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "CikhY8emRbi5czARzvpk1A",
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
                  "id": "133af339-d91b-407d-87d5-d9d1d39ff2dd",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fd734229-453d-483a-9d47-cf75110fce96",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b0ee0f8b-6c71-4055-a8ee-54b55cd68840",
                  "value": "Count2"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2db2484d-ed11-4065-a175-8d22cb1cb738",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d40876a1-6458-4d5d-97c6-58f22bf96e15",
                  "value": "half sleeves"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "469c14af-b609-4349-bc9a-4ba8125ed8c1",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "5109b88e-50af-479a-956c-1ced12d7de1d",
                "relTo": {
                  "id": "ProductGroupTest3",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "YMdBjfmBTbShPcIVxgwUVQ",
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
                  "id": "982a640c-7b0f-4458-8e49-88946d7b710d",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c8f24105-5398-4440-adac-e8d12291342d",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "548307f1-92a4-418a-95b1-c2694471bae2",
                  "value": "Count2"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5d65d757-4462-4cd1-9764-8447431eacbb",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d39fc38c-0bec-436f-ac13-9f307c7b75a4",
                  "value": "half sleeves"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9999ae43-462c-44a2-83cb-7e75a597a614",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "4018e78d-b7ea-4049-aedc-d7d8fbfea90c",
                "relTo": {
                  "id": "ProductGroupTest3",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "1yt3rZfiRYq6a4-x20xzwg",
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
                  "id": "f6f7e9b9-4146-4550-8d8c-76707033f90b",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7f99fc73-ba7b-4cf8-9a8e-94a35b8f5890",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "084d40c0-1df3-4ccf-be95-322e1f13d69c",
                  "value": "Count2"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "940fe243-9c32-48dd-8ba5-b75dc67ae7ec",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8ab943dd-3b19-412a-9d4a-ef01edddfd19",
                  "value": "half sleeves"
                },
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "93b53b43-9f32-4175-83fd-685f9ed8341a",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "d84da934-0cb8-485d-a214-6e8b35f4777d",
                "relTo": {
                  "id": "ProductGroupTest3",
                  "type": "productgroup"
                }
              }
            ]
          }
        }
      },
      {
        "id": "mns5xOaNS7eP1BcakI_GIw",
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
                  "id": "35c971ca-3f26-464e-8a8f-7dc550ce6b7d",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "96cf9f6a-4174-4f7c-861b-43c94105c23b",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "07026d80-c1f2-4c33-bd13-32806fa00450",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c38f71d2-4382-4e0e-a13e-38931b5b8725",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "1b186146-8e06-4825-9653-665b1014c158",
                "relTo": {
                  "id": "6XynjsMXTOazUSNEaf-X9Q",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "C92hiRhiRMC2LUzo4Sv4hw",
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
                  "id": "d848e794-5656-4025-9647-094eedd5c024",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "19b2e071-2512-48f6-8b02-8292b7add659",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a5e6dc06-7adb-47a7-93d1-cab5cd9ef5a1",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "49e818e8-91f2-49e4-90e5-139c0b14531f",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "123a6fa1-667d-4158-86d6-c27c2962ce2f",
                "relTo": {
                  "id": "6XynjsMXTOazUSNEaf-X9Q",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "z0TXODh8QGCcuI_OENW80g",
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
                  "id": "1c94d56a-3212-47f9-9443-7bfe6de21afb",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a7a12c2e-381a-4ddb-8deb-ac7eae471f79",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "76ef632a-f344-4ed7-8d92-bf4575dd16b2",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "90454964-f9a0-4e35-ba8c-073c24295df5",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "84c7b171-12a8-4e7c-aae4-d0e6730c3b5a",
                "relTo": {
                  "id": "6XynjsMXTOazUSNEaf-X9Q",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "rU_gt05fQEGFjZvgBGK2tQ",
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
                  "id": "ccecb47d-a9c5-42eb-b2d5-435e1f9cb483",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "848101da-7680-44d2-ae76-aeef9b75be3d",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b58d4483-4306-4a97-bf95-a5df7b5f7959",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "29fb66bf-8410-4cd5-98a4-477f464a4474",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "db9f7b2d-3271-4f51-9829-17681e97c72e",
                "relTo": {
                  "id": "6XynjsMXTOazUSNEaf-X9Q",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "LG1sbf0ITW2PRVSr1vTTeA",
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
                  "id": "df1a449a-48bf-42ae-b2a3-e15af787d8e1",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3ba2a5a7-f371-487b-b9fc-17cb4013a4e2",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6b281baf-475c-46cf-81a5-f978f084bf11",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "df3df89d-3bf2-490e-b09f-2d26179d2789",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "aab610fb-6f0e-49fc-aeb0-6506bdec0ba4",
                "relTo": {
                  "id": "CikhY8emRbi5czARzvpk1A",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "GqTv9lilQo-3DdcLlmsNXw",
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
                  "id": "cb1e0e01-5735-4b7c-9041-d531cf92cb1e",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "624c4fa8-b3cb-4a38-9902-78983ff43050",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "74fd5e9c-12e0-4b86-bab9-8a68095f186e",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "978b1abe-4fe1-4aca-b48a-978e3be73bbc",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "28735a32-da4c-4c33-9edb-36c416351df6",
                "relTo": {
                  "id": "CikhY8emRbi5czARzvpk1A",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "g9ZY23TgTZ2vNCLYOLwT_Q",
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
                  "id": "bf81d15a-e1a1-44af-88b7-04cbdf0154eb",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b1ed76fd-a2e2-4e7e-86ce-3b2daa737793",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "84aef034-7c68-4873-82c1-0b0dcd58e7c3",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "96b8ecc6-0952-4d76-bfbf-7dca7f860995",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "bebbcbb7-e70b-462a-bcc1-a9ed6c411fd3",
                "relTo": {
                  "id": "CikhY8emRbi5czARzvpk1A",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "ZrG9h4Z9RwmBFqymHGBZHw",
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
                  "id": "d8105a49-313b-478b-ba08-2615b4c043ef",
                  "value": "green"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6cebd387-04b4-4d97-a786-c712da6bee81",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "66755c2d-c8e3-426a-9312-d6d2e47983d3",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1f707abf-3b48-4bb6-8e07-835d1e66c285",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "0d1dec18-89f1-4982-b653-40e8c22cf29c",
                "relTo": {
                  "id": "CikhY8emRbi5czARzvpk1A",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "G7wQ_2ZZRU-bLopi3MIIog",
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
                  "id": "864ccf02-e998-415d-a5f8-dc4ef45fd7c0",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5db8c91f-765e-4b67-b30e-bf8ab4811e19",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7cb80aa6-4701-4ef5-8b8a-3976e069bea7",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8d1d47a0-f4a3-4ba4-9a39-648ca20540a8",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "1d6f0366-47de-4699-9d90-58b128b13dd0",
                "relTo": {
                  "id": "YMdBjfmBTbShPcIVxgwUVQ",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "CmymPl-YRpKCnx3KFNjO1g",
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
                  "id": "9829fdb7-f4b5-4d8e-8470-e8eb473e653c",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "989d6d1f-fabf-48f2-8a4e-49681fdb7d73",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5868693f-59c0-433a-8eff-24fb4a98c584",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ecadb2d7-b297-41aa-96c3-b915d3f8706d",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "e999d202-52f6-4bdc-9207-c8651c4f1fdd",
                "relTo": {
                  "id": "YMdBjfmBTbShPcIVxgwUVQ",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "sbAISFhQRR-Tuf2WvtMI8g",
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
                  "id": "cefbebd5-8659-4c02-ab24-564208df9bf2",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0560fc28-3f8e-4f8a-b223-7fcb6a81a210",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "51915a2f-0f64-4499-a676-508d46094f80",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1539ef95-5e6e-4b2c-b1b9-5045082036f1",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "fd0bf779-37fa-4a5d-a44c-f3aac36a464e",
                "relTo": {
                  "id": "YMdBjfmBTbShPcIVxgwUVQ",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "O1w9XnlNQ5aqKJDyEsMO3A",
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
                  "id": "cdee76fd-e4a6-4111-afed-dcdc693b87b8",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d5cfee38-50bf-4ea1-9744-674dc03751cc",
                  "value": "medium"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e6179722-7a89-4dcf-acd4-03cfaa69c2ef",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b1b935b0-ba09-43a3-a535-4394a5b65350",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "3f08eae4-93dd-4bb5-a35f-a0600571e4a6",
                "relTo": {
                  "id": "YMdBjfmBTbShPcIVxgwUVQ",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "D7spUS2mSfCqjoBLAUvPiQ",
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
                  "id": "ba87584d-aaaf-4149-b457-8d7c279ba3dc",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7bf09398-5539-4e99-9e7c-2e1566e82640",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2ee7aafd-70fb-4c97-b550-d1e8a86392b9",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5836fa85-4d30-4f23-89b3-c81ef74cad2c",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "093d7e00-c8d9-4ed8-8f6a-718a6d19c2ef",
                "relTo": {
                  "id": "1yt3rZfiRYq6a4-x20xzwg",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "RIzLhBYDRGS5WgfjNFcz0A",
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
                  "id": "f200c724-c9ab-40a7-8289-c09a76393b9a",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ad179251-7036-416d-bf50-ccdb050831bd",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9a3a23b6-02d9-4f79-b802-64310b2533e7",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c1cb3970-bd95-4211-98f0-9b41cf3bfaeb",
                  "value": "full sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "16bf4523-49c6-4a46-9a78-c0a784e57352",
                "relTo": {
                  "id": "1yt3rZfiRYq6a4-x20xzwg",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "_QzoWACPRR2Cx2jPx2lelw",
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
                  "id": "10c2d957-2a59-42df-aa8a-9c242de407f9",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "498a21bf-f6b7-48da-be83-41ebd534cb7b",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ee751021-593c-4b1b-8f51-62984809dcca",
                  "value": "Count1"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "29691c0e-b626-486c-bc24-45c32493a8dc",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "f918674f-612d-4831-bfd2-2e6a5f8005f1",
                "relTo": {
                  "id": "1yt3rZfiRYq6a4-x20xzwg",
                  "type": "product"
                }
              }
            ]
          }
        }
      },
      {
        "id": "4gvXps8VSPK0I6ZuqY2ZCg",
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
                  "id": "3d3d836d-2fb4-48e2-9fd9-8a7e5890112a",
                  "value": "red"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0da8d7e0-6ecd-4ec0-ac17-98e714e2328c",
                  "value": "small"
                }
              ]
            },
            "soldcount": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f6e88452-7ed1-4ab7-9cb2-c5ad2a06374b",
                  "value": "Count2"
                }
              ]
            },
            "sleevetype": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "be963200-8102-4d27-846b-71f39a9c86bd",
                  "value": "half sleeves"
                }
              ]
            },
            "itemtype": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c46612d8-4951-464b-bb6d-282c6450250b",
                  "value": "Refurbished"
                }
              ]
            },
            "productclassification": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "987ac90a-e8c1-4dfb-9187-b0a810a015e9",
                  "value": "Product classification>>Apparel & Footwear>>Clothing>>Blazers"
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "id": "5d15834f-d957-4203-aba9-48fb0605010b",
                "relTo": {
                  "id": "1yt3rZfiRYq6a4-x20xzwg",
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