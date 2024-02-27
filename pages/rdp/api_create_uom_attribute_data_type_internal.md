---
title: Create UOM Attribute with different Data Types
sidebar: rdp_sidebar
permalink: api_create_uom_attribute_data_type.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can create UOM attributes with different Data Type by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API.

## Scenario

Consider that you wish to create **Pierrian Handbag** with a combination of data types such as **Integer** and **Decimal**.

{% include snippets/header.html %}

## Request

To create UOM attribute with different data types, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* attributes: Includes the attributes for the entity type.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
    "entity": {
        "id": "Pierrian HandBag",
        "name": "Pierrian HandBag",
        "type": "sku",
        "data": {
            "attributes": {
                "mdmid": {
                    "values": [
                        {
                            "source": "internal",
                            "locale": "en-US",
                            "value": "Pierrian HandBag"
                        }
                    ]
                },
                "productid": {
                    "values": [
                        {
                            "source": "internal",
                            "locale": "en-US",
                            "value": "Pierrian HandBag"
                        }
                    ]
                },
                "mdmname": {
                    "values": [
                        {
                            "source": "internal",
                            "locale": "en-US",
                            "value": "Pierrian HandBag"
                        }
                    ]
                },
                "baglength": {
                    "values": [
                        {
                            "source": "internal",
                            "locale": "en-US",
                            "value": 300,
                            "uom": "ft"
                        }
                    ]
                },
                "bagwidth": {
                    "values": [
                        {
                            "source": "internal",
                            "locale": "en-US",
                            "value": 500.123,
                            "uom": "ft"
                        }
                    ]
                },
                "deliverytime": {
                    "values": [
                        {
                            "source": "internal",
                            "locale": "en-US",
                            "value": 6,
                            "uom": "months"
                        }
                    ]
                }
            },
            "contexts": [
                {
                    "context": {
                        "country": "Germany"
                    }
                },
                {
                    "context": {
                        "country": "France"
                    }
                },
                {
                    "context": {
                        "channel": "Germany Web"
                    }
                },
                {
                    "context": {
                        "channel": "France Retail"
                    }
                }
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
    "requestId": "9d0f9cae-193f-46a3-8236-da308f6f0943",
    "maxRecords": 3
  },
  "response": {
    "entities": [
      {
        "id": "1ae0370f-b5d9-4ae8-a918-bcf69eb8b93f",
        "name": "Kilograms",
        "type": "weight",
        "domain": "referenceData",
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6cbc4bdd-ec12-42c4-9c4c-daccd2ada325",
                  "value": "Kilograms"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2b1554c6-f89a-4fc4-a30e-c5b86070b150",
                  "value": "kg"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "28107146-72ff-49fa-bef3-669af345f05d",
                  "value": "{0}*1000"
                }
              ]
            },
            "baseunitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "96f1e7c0-76cb-43d8-b6aa-2ea4fc08ab71",
                  "value": "gram"
                }
              ]
            }
          }
        }
      },
      {
        "id": "89517cba-5546-4718-931e-ce3e44392287",
        "name": "Grams",
        "type": "weight",
        "domain": "referenceData",
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "658474b9-a1df-4f16-b58c-0a36b321bc78",
                  "value": "Grams"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8c09621a-b561-4888-8397-94bac9d549ed",
                  "value": "gram"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "430c785f-82e9-4cf2-89f8-0ffb6a68f3e4",
                  "value": "{0}"
                }
              ]
            },
            "baseunitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9e51c722-0df7-47a7-96b4-45273badb8ac",
                  "value": "gram"
                }
              ]
            }
          }
        }
      },
      {
        "id": "069407bc-471d-4cb5-ae4b-7259c8146d95",
        "name": "Pounds",
        "type": "weight",
        "domain": "referenceData",
        "data": {
          "attributes": {
            "unitname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "85015d66-5253-48cb-a12b-6a50c24b9397",
                  "value": "Pounds"
                }
              ]
            },
            "unitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6530f961-3296-45a0-bad5-8659fcb768bd",
                  "value": "lb"
                }
              ]
            },
            "formula": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "54783d8c-4af1-47dd-b845-ca1106f17034",
                  "value": "{0}*453.59"
                }
              ]
            },
            "baseunitsymbol": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4479af00-6b9b-4e28-a5da-45e4eefc97b6",
                  "value": "gram"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 4
  }
}
</code>
</pre>

Verify the newly created UOM Attribute with different Data Types
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.