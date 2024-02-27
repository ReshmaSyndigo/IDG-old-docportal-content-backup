---
title: Get Entities using Business Condition, Status, and Attributes Criterion
sidebar: rdp_sidebar
permalink: api_app_get_combinedget_scenario15.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcombinedget}}** to get Entities using Business Condition details and Attributes Criterion.

## Scenario

Get all "sku" entities with "mdmname" as "Polo Mens Shirt Blue_Large", in the "skuSubmission" stage of "newSKUIntroduction" workflow with "skuBasicAttributesPopulated_businessCondition" as "false".

{% include snippets/header.html %}

## Request

To get above entities, use the REST API <b>{{site.data.rdp_glossary.appcombinedget}}</b>. In the request send the following details:

* params -> pageSize: Specify the pageSize as "30000".
* entity -> Specify the required values for id, name, and type.
* entity -> Specify the required search criteria for both entity govern & entity services.

<pre>
<code>
POST {TenantURL or ID}/api/entityappservice/getcombined
Headers: Content-Type: application/json
Body:
{
  "params": {
    "pageSize": 30000
  },
  "entity": {
    "id": "combinedGet",
    "name": "combinedGet",
    "type": "config",
    "data": {
      "jsonData": {
        "searchQueries": [
          {
            "serviceName": "entitygovernservice",
            "action": "get",
            "searchSequence": 1,
            "searchQuery": {
              "query": {
                "contexts": [
                  {
                    <span style="background-color: #FFFF00">"workflow": "NewSKUIntroduction"</span>
                  }
                ],
                "filters": {
                  "typesCriterion": [
                    "sku"
                  ],
                  "attributesCriterion": [
                    {
                      "activities/activityName": {
                        <span style="background-color: #FFFF00">"eq": "skuSubmission"</span>
                      }
                    },
                    {
                      "businessConditions": {
                        "attributes": [
                          {
                            "businessConditionName": {
                              <span style="background-color: #FFFF00">"eq": "skuBasicAttributesPopulated_businessCondition"</span>
                            }
                          },
                          {
                            "businessConditionStatus": {
                              <span style="background-color: #FFFF00">"eq": false</span>
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "serviceName": "entityservice",
            "action": "get",
            "searchSequence": 2,
            "searchQuery": {
              "query": {
                "valueContexts": [
                  {
                    "source": "internal",
                    "locale": "en-US"
                  }
                ],
                "filters": {
                  "typesCriterion": [
                    <span style="background-color: #FFFF00">"sku"</span>
                  ],
                  "attributesCriterion": [
                    {
                      "mdmname": {
                        <span style="background-color: #FFFF00">"exact": "Polo Mens Shirt Blue_Large"</span>
                      }
                    }
                  ]
                }
              },
              "fields": {
                "attributes": [
                  "_ALL"
                ]
              },
              "sort": {
                "properties": [
                  {
                    "modifiedDate": "_DESC",
                    "sortType": "_DATETIME"
                  }
                ]
              },
              "options": {
                "maxRecords": 200
              }
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Response

If the above request is submitted successfully, then the following response is received from "getcombined" API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "3a54f327-d107-4921-9bf8-85b8e8ee1b37",
    "maxRecords": 200
  },
  "response": {
    "entities": [
      {
        "id": "RDWSanityTest01",
        "name": "RDW Sanity Test 01",
        "type": "sku",
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a4fee2ce-f1f8-4193-abf6-1f9520a5c120",
                  "value": "RDWSanityTestBulk01"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d2d7de68-a2c1-49a0-ae0f-a0b105b58427",
                  "value": "Polo Mens Shirt Blue_Large"
                }
              ]
            },
            "productid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b70cb083-9b5a-45f2-8436-dddd23e6247b",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "RDWTestingProductID"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bbc1a75b-e987-46e2-bad6-9e11a7a52adc",
                  "value": "Adobe"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "aed5df73-f7f6-440f-b20d-0a20e6bfd534",
                  "value": "1 Seat"
                }
              ]
            },
            "upc": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7063ffd0-0bb3-4015-b08c-9f6dac4a5c56",
                  "value": "UPCRDW Testing"
                }
              ]
            },
            "cost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "524ed8f1-c616-4f24-8eb3-b6a6e9612c8f",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": 12.22
                }
              ]
            },
            "description": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6e180075-6c3b-42a0-9493-e5719be1c656",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "Riversand RDW Sanity Testing"
                }
              ]
            },
            "erpid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a2bb68a3-e76b-46e3-97ea-44c31dc94e5c",
                  "value": 32323
                }
              ]
            },
            "salesprice": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4249ecc6-ea43-472d-b733-231f373b6e0c",
                  "value": 232.22
                }
              ]
            },
            "availableincountries": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "98be5945-ae30-4949-b812-ef4d0bbdb7ba",
                  "value": "Australia"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7d235e46-ce19-4565-98f8-79da921eb144",
                  "value": "Belgium"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5781a83a-a097-4329-ab4a-aefbb25b74a0",
                  "value": "France"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "68b64f20-fbf1-4738-a0d8-8a4d2a75967a",
                  "value": "Germany"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e2c2dbe9-69cc-4579-8dd7-de16fa4fa66f",
                  "value": "Spain"
                }
              ]
            },
            "featurespecs": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1d194f69-f55d-4a62-872c-245d3f318a65",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "RDW1"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "74c9a414-5574-48f7-a6c7-d37210bff3b0",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "RDW2"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77a6d7ef-24d4-4ddc-848b-4234221ccc62",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "RDW3"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8828be53-4dc1-4b96-841c-3b99e9337989",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "RDW4"
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "228af02e-5a08-4085-92ab-ec42bed4fc42",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "RDW5"
                }
              ]
            },
            "leadtime": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "uom": "",
                  "id": "1bca988d-5400-48bd-9c18-9342d21a1bff",
                  "value": 32
                }
              ]
            },
            "buytodemand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "78d2296b-5c64-4a8a-b243-16ef2885f755",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": true
                }
              ]
            },
            "collaborationdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "86e174a5-4328-4cd7-a18f-67163441097b",
                  "value": "2018-07-03T06:21:00.000-0500"
                }
              ]
            },
            "retailintroductiondate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7e6db411-536b-470c-b2f8-738da0d6c58d",
                  "value": "2018-07-03"
                }
              ]
            },
            "height": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "uom": "cm",
                  "id": "bf125c36-b722-4759-8456-e5178a4c8156",
                  "value": 323.33
                }
              ]
            },
            "alternatevendor": {
              "group": [
                {
                  "vendorpartnumber": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "f8e762ec-fd5c-40db-8a37-671f527e07cd",
                        "value": "RDW 001"
                      }
                    ]
                  },
                  "vendorid": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "ac7f5ee1-4dd5-491f-8002-83d26beaf7b3",
                        "value": "AS12"
                      }
                    ]
                  },
                  "vendorcost": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "d6b96cdd-d857-4b93-b592-97a64cc4a5fb",
                        "value": 3223232.22
                      }
                    ]
                  },
                  "vendorname": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "01a51a83-5ff4-4455-9b7e-b1d15015e0d9",
                        "value": "RDW"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fd158e8e-49d7-45df-a6eb-95c3097105ed"
                },
                {
                  "vendorpartnumber": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "01a3d061-2116-4904-aa15-9b3178ce8b06",
                        "value": "RDW 002"
                      }
                    ]
                  },
                  "vendorid": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "7684f769-0640-4613-ab01-3c7adf817582",
                        "value": "AS13"
                      }
                    ]
                  },
                  "vendorcost": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "599a769f-98d5-45b3-8a00-701a04f002d5",
                        "value": 233.22
                      }
                    ]
                  },
                  "vendorname": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "37499456-324d-438f-8f62-fc42fd64d386",
                        "value": "RDW US"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1fa203f9-7bae-46ac-805f-0b1623f2fe5a"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "08a9748a-d34e-454c-a39b-73f05e2fd175",
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
                  "id": "166d0388-443e-45cd-9854-7e9b3976542f",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2018-08-31T04:13:17.953-0500"
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3d84c6a5-9343-4e09-b3e5-b2cccf3d45ee",
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
                  "id": "22da879d-6177-4217-a217-842c4f360197",
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
                  "id": "c20cabb2-495d-430f-b4c3-2807ec9030de",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "L X W X 323.33"
                }
              ]
            },
            "startdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1634a835-2a97-4c10-bba4-aecc0b5b2b10",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "2018-07-19"
                }
              ]
            },
            "brand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d8866080-671e-474a-87f8-6faf0c8ac70e",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "Toppins"
                }
              ]
            },
            "currency": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "38a51934-ef68-4a84-8262-f39ae1dce80a",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": "12"
                }
              ]
            },
            "dollarmargin": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bdac183d-d25a-4e37-b2e0-337ed6bd6c46",
                  "os": "graph",
                  "osid": "RDWSanityTestRel01",
                  "ostype": "product",
                  "value": 60
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0034",
          "message": "Total Hits in First Query: '34515'",
          "messageType": "info"
        },
        {
          "messageCode": "I0035",
          "message": "Total number of passes: '1'",
          "messageType": "info"
        }
      ]
    },
    "totalRecords": 1
  }
}
</code></pre> 


## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.