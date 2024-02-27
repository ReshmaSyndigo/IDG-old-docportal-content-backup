---
title: Add Multiple Unit Entities as UOM Type
sidebar: rdp_sidebar
permalink: api_add_multiple_unit_entities_uom_type.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can add multiple unit entities as UOM Type by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API.

## Scenario

Consider that you wish to add multiple unit entities such as **Pounds, Tonne (metric ton), Deci gram, Milli gram, troy ounce or apothecaries' ounce, Kilo gram, Centi gram, Deca gram, Micro gram, Ounce, Hecto gram, Hundred pounds, Deci tonne, kilogram per cubic metre, Kilo tonne, Mega gram, grain** as UOM Type.

{% include snippets/header.html %}

## Request

To add multiple unit entities as UOM Type, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* unitname – Indicates the name of the UOM. This is a mandatory parameter. The "isExternalName" param must be set to "true" to avoid any duplicate UOM values. 
* unitsymbol: Defines the standard symbol used for UOM. 
* formula – Indicates the formula used to convert the UOM value into the base UOM. The computation is based on the BODMAS rule.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "uomWeight"
        ]
      }
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

Upon successfully submitting the request, the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "0a0acfdc-5dbf-40d2-86ab-34e0f5584181",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "319359af-a128-4bd5-b904-2f9ad5212023",
        "name": "Pounds",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "16a69324-3677-46eb-bcf7-4daeb6412e40",
                  "value": "Pounds"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "39a80e7b-b757-49e0-90c1-5f78af04f621",
                  "value": "lbs"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "29da7321-1316-449c-b644-42db04154b8b",
                  "value": "{0}*453.592"
                }
              ]
            }
          }
        }
      },
      {
        "id": "72a0e13a-1efb-42f8-97a8-9724ac4695c0",
        "name": "Tonne (metric ton)",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4284bd14-1c9b-44fb-a8b2-9b1d67471f37",
                  "value": "Tonne (metric ton)"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c766d87c-c07e-4a0a-8361-29a866660cb5",
                  "value": "t"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "aa824157-013e-45ea-8cc6-6c7d4e76e19d",
                  "value": "{0}*1000000"
                }
              ]
            }
          }
        }
      },
      {
        "id": "ba9e7b6d-abb9-4254-80db-6a3baa753346",
        "name": "Deci gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d303c830-941b-4a8b-ba4a-ec1d04df7945",
                  "value": "Deci gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "74b03f0a-4b17-42b7-822b-19cb96e1729b",
                  "value": "dg"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "01be81e3-e764-4df9-b3cc-0587a35e9ce5",
                  "value": "{0}*0.1"
                }
              ]
            }
          }
        }
      },
      {
        "id": "4a2ea891-d9c2-414d-a916-e92b0f7de364",
        "name": "Milli gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e59554f9-0b9b-4c2d-a7fd-eceff828e2e5",
                  "value": "Milli gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d882a6c5-397d-411d-b0e7-a89a82920a95",
                  "value": "mg"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1fec1a57-1ac1-4dcf-be4a-da0bf196706f",
                  "value": "{0}*0.001"
                }
              ]
            }
          }
        }
      },
      {
        "id": "b64ae999-d680-4558-b514-4779b2e31e20",
        "name": "troy ounce or apothecaries' ounce",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "782884a8-fdf6-4322-8246-32c3b189ae11",
                  "value": "troy ounce or apothecaries' ounce"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b7a1fe37-2f56-4dcb-9632-cd56a076a8a8",
                  "value": "tr oz"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ef99129b-a577-40c4-9b11-e425f5240eb5",
                  "value": "{0}*31.1035"
                }
              ]
            }
          }
        }
      },
      {
        "id": "ab6d6f4a-609b-4a88-b437-839be390f19f",
        "name": "Kilo gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3654d93f-a6f0-4547-910e-485c32cd22cd",
                  "value": "Kilo gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "24ddbfab-9afa-4fad-a593-b21d2abd7757",
                  "value": "Kg"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4eaecaff-5740-487a-97f5-6784671eace2",
                  "value": "{0}*1000"
                }
              ]
            }
          }
        }
      },
      {
        "id": "f485b94a-ec26-42a5-a245-3f803aef7486",
        "name": "Centi gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4c09f2ae-8a84-4d85-a1f3-8933a137714f",
                  "value": "Centi gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "003c493c-f197-4644-a39a-252c3a209bb5",
                  "value": "cg"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "07811e01-bbe5-45ec-abd2-74ed1da07505",
                  "value": "{0}*0.01"
                }
              ]
            }
          }
        }
      },
      {
        "id": "0be9cf47-d1d3-46f9-b874-28550354ac61",
        "name": "Deca gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "fcee9210-daf7-484e-a20a-465b60d7a809",
                  "value": "Deca gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "971bd147-a6dd-4443-961e-93c7e2663a12",
                  "value": "dag"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e819927f-27dd-40f6-9c81-1f5a3427cea4",
                  "value": "{0}*10"
                }
              ]
            }
          }
        }
      },
      {
        "id": "0b99abee-7f22-4cc7-8f64-f412c17704cb",
        "name": "Micro gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ebe93538-f02d-4104-91cd-a843f5283959",
                  "value": "Micro gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bf091afb-202b-4b65-bb04-94cccb5625b2",
                  "value": "µg"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cfa78fff-5b56-49ac-badf-5bc8b75123d3",
                  "value": "{0}*0.000001"
                }
              ]
            }
          }
        }
      },
      {
        "id": "f7e136ea-13ad-484b-b38b-d07e61456ebf",
        "name": "Ounce",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4c9f0045-4506-465b-acb1-9fa444ab1031",
                  "value": "Ounce"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b2c59b6b-f288-4d36-9081-1e5cbeadf9e7",
                  "value": "oz"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1ec57e62-38e2-4311-8fbd-86da744d4664",
                  "value": "{0}*28.3495"
                }
              ]
            }
          }
        }
      },
      {
        "id": "c0054d3a-6b42-423b-bd35-320c0ff9790c",
        "name": "Hecto gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d7f74aaf-e851-4e35-88a0-31c61fc99a1b",
                  "value": "Hecto gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4c556733-89e2-4488-a78f-fe72290ef489",
                  "value": "hg"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7e5320b7-69be-45ee-ae05-834e70d46f04",
                  "value": "{0}*100"
                }
              ]
            }
          }
        }
      },
      {
        "id": "7e5e6c13-593d-4e18-a575-42296f4d4669",
        "name": "Hundred pounds",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e72648d9-0761-4437-b937-145ede520c0a",
                  "value": "Hundred pounds"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "03bddf0a-0694-4a92-bd3f-1cd3434e3b50",
                  "value": "cwt"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cbb162f3-cdc1-4d2c-ab8d-c31d5d96616a",
                  "value": "{0}*45359.2"
                }
              ]
            }
          }
        }
      },
      {
        "id": "c5472b38-975a-4900-bc77-a98b42b4d705",
        "name": "Gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "78f7ec32-d837-4b86-b7cd-940073f952ba",
                  "value": "Gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7141bfff-74f4-4979-8041-097114e25dc1",
                  "value": "g"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "fb0a72b6-cfde-450a-9c78-346486e7b0b5",
                  "value": "{0}"
                }
              ]
            }
          }
        }
      },
      {
        "id": "02f8218f-9d32-420a-a3ee-c9833e667aff",
        "name": "Deci tonne",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ef4e496b-e7ad-4bbf-a031-ce785189eaf5",
                  "value": "Deci tonne"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "78693d90-c368-4a47-a767-7672b7124425",
                  "value": "dt"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c5d0a109-c7e6-4b59-8a14-3c7fc7e5d36f",
                  "value": "{0}*100000"
                }
              ]
            }
          }
        }
      },
      {
        "id": "45b72bbf-f57b-4376-afae-0a506bd846bb",
        "name": "kilogram per cubic metre",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0a6283ef-71ae-4708-bf7a-d4365c938ab8",
                  "value": "kilogram per cubic metre"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "30fcb798-f0a0-4df5-b561-33c258a2439d",
                  "value": "kg/m³"
                }
              ]
            }
          }
        }
      },
      {
        "id": "519d0f48-0ef9-4176-9df1-ee7da1d17545",
        "name": "Kilo tonne",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1d833998-cef5-4c7e-a24d-1be6ca3cc6c7",
                  "value": "Kilo tonne"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3915cf1f-0933-4b85-85b3-c3858765d862",
                  "value": "kt"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "caa90a29-39e3-4ff5-b80a-e1221a302c83",
                  "value": "{0}*1000000000"
                }
              ]
            }
          }
        }
      },
      {
        "id": "cc0c6922-4326-4ae8-804b-9550b83ec12b",
        "name": "Mega gram",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1b0e7925-77e2-4d67-9a61-5945db36ca40",
                  "value": "Mega gram"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "901d3fe9-041b-4cbf-a298-3d52b2b9cf75",
                  "value": "megagram"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d0b304cc-bd65-48c5-98fd-ba6422b74133",
                  "value": "{0}*1000000"
                }
              ]
            }
          }
        }
      },
      {
        "id": "732f3784-52e6-4740-82c8-9cd0a70efbf1",
        "name": "grain",
        "type": "uomWeight",
        },
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "84c84c4e-c4e4-4c75-95ed-c86d9476aae2",
                  "value": "grain"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b6948596-db05-450d-a850-638d31e74c1c",
                  "value": "gr"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3855ce4a-e829-4392-972f-727aa5e73679",
                  "value": "{0}*0.0647989"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 18
  }
}
</code>
</pre>

Verify the newly added Unit Entities as UOM Type
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.