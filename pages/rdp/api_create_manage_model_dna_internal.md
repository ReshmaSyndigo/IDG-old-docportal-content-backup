---
title: Create Manage Model for Deeply Nested Attribute (DNA)
sidebar: rdp_sidebar
permalink: api_create_manage_model_dna.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can create manage model for Deeply Nested Attribute (DNA) using the **{{site.data.rdp_glossary.createdatamodel}}** RESTful API. The **entityManageModel** manages properties such as dataType, UOM type, reference type related details. 

## Scenario

To create 'sku' entity type manage model with 'nutritionalinformation' DNA.

{% include snippets/header.html %}

## Request

To create manage model for DNA, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* Specify the id as "sku_entityManageModel", "name" as "sku", and "type" as "entityManageModel".

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "id": "sku_entityManageModel",
  "name": "sku",
  "type": "entityManageModel",
  "domain": "generic",
  "source": "internal",
  "data": {
    "attributes": {
      "nutritionalinformation": {
        "group": [
          {
            "id": "8e4dff1a-a8d2-489f-81e8-44c4ed2c5ab7",
            "contains": {
              "properties": {
                "sortSequence": 2,
                "dataType": "string"
              }
            },
            "ingredientlist": {
              "properties": {
                "sortSequence": 1,
                "dataType": "string"
              }
            },
            "nutrientdetails": {
              "group": [
                {
                  "id": "dfc76997-bd3a-45f9-86c3-178343cb66ec",
                  "servingsizedescription": {
                    "properties": {
                      "dataType": "string"
                    }
                  },
                  "servingsize": {
                    "properties": {
                      "dataType": "string"
                    }
                  },
                  "nutrientbasisquantity": {
                    "properties": {
                      "dataType": "string"
                    }
                  },
                  "dailyvalueintakedescription": {
                    "properties": {
                      "dataType": "string"
                    }
                  },
                  "nutrientbasisquantitytypecode": {
                    "properties": {
                      "dataType": "string"
                    }
                  }
                }
              ],
              "properties": {
                <span style="background-color: #FFFF00">"dataType": "deeplynested"</span>
              }
            },
            "nutritionfacts": {
              "group": [
                {
                  "id": "eb182491-88b5-458f-89b3-d2b10f88a650",
                  "servingpercontainer": {
                    "properties": {
                      "dataType": "string"
                    }
                  },
                  "amountperservingcalories": {
                    "properties": {
                      "dataType": "string"
                    }
                  }
                }
              ],
              "properties": {
                <span style="background-color: #FFFF00">"dataType": "deeplynested"</span>
              }
            },
            "nutrients": {
              "group": [
                {
                  "id": "d130a330-3029-4c96-bac3-82f697fac6de",
                  "cholestrol": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  },
                  "sodium": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  },
                  "totalfat": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  },
                  "totalcarbohydrates": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  },
                  "calcium": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  },
                  "potassium": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  },
                  "protein": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  },
                  "vitamind": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  },
                  "iron": {
                    "properties": {
                      "uomEntityInfo": [
                        {
                          "uomEntityType": "uomWeight",
                          "uomRelationshipName": "hasUnits"
                        }
                      ],
                      "dataType": "decimal"
                    }
                  }
                }
              ],
              "properties": {
                <span style="background-color: #FFFF00">"dataType": "deeplynested"</span>
              }
            }
          }
        ],
        "properties": {
          <span style="background-color: #FFFF00">"dataType": "deeplynested"</span>
        }
      }
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
    "params": {},
    "requestId": "3ce5b682-48ce-4dd1-97c9-5352fffffc9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted entityManageModel for create with Id sku_entityManageModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityManageModel",
            "create",
            "sku_entityManageModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Verify the created manage model for the DNA:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).
* After creating the model, you can [Create Entity with Deeply Nested Attribute](api_crt_dna_entities.html) using this model for the specific entity type.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

## Related Links

* [Create Display Model for Deeply Nested Attribute (DNA)](api_create_display_model_dna.html)
* [Create an Entity with Deeply Nested Attribute (DNA)](api_crt_dna_entities.html)
* [Update an entity with Deeply Nested Attribute (DNA) values](api_updt_dna_entities.html)
* [Delete Deeply Nested Attribute (DNA) from an Entity](api_del_dna_entities.html)
* [Validate Deeply Nested Attribute (DNA) errors](api_get_data_model_for_dna_scenario4.html)