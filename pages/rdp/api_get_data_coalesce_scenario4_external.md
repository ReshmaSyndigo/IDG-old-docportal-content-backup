---
title: Data Coalesce - Relationship
sidebar: rdp_sidebar
permalink: api_get_data_coalesce_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatacoalesce}}** to show the inheritance and merging of relationships and relationship attributes along different hierarchical paths associated with the entity, using a scenario. All relationship types are at the self level and are available at all context levels for relationship data maintenance. Relationship can be added at any context level in which case such relationships are specific to the context. Relationship coalesce is done from parent to the child context.

## Scenario

To show relationship inheritance and management along the hierarchical path Self->Germany->GermanyWeb.

{% include snippets/header.html %}

## Request

To get the above data, you can use the REST API {{site.data.rdp_glossary.getdatacoalesce}}. In the request send the following details:
* query -> contexts : Contexts in which you wish to perform the coalesce
* query -> typesCriterion : The type of the entity that needs to be coalesced
* query -> id : Entity identifier
In this scenario, you wish to get the relationship coalesce of SKU entity "CVShirts" in "Germany" and "Germany Web" contexts.

<pre>
<code>
POST **{{site.data.rdp_glossary.getdatacoalesce}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "country": "Germany"
        },
        {
          "channel": "Germany Web"
        }
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "CVShirts"</span>
    },
    "fields": {
      "relationships": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

The data coalesce is performed as follows:

| Context | Relationship | Writeable | Readable |
|---------|---------------|------------|-------|
| Self | All Self Relationship | Yes | Yes |
| Self | All Self Relationship Attributes | Yes | Yes |
| Country | All Self Context Relationships | No | Yes |
| Country | All Self Context Relationship Attributes| Yes | Yes |
| Country | All Country Context Relationship | Yes | Yes |
| Country | All Country Context Relationship Attributes| Yes | Yes |
| Channel | All Self and Country Context Relationships | No | Yes |
| Channel | All Self and Country Context Relationship Attributes | Yes | Yes |
| Channel | All Channel Context Relationships | Yes | Yes |
| Channel | All Channel Context Relationship Attributes | Yes | Yes |

This is shown in the response below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "9d94e385-f736-4865-9277-72c43861d481",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "CVShirts",
        "name": "CVShirts",
        "type": "sku",
        "data": {
          "relationships": {
            "ischildof": [
              {
                "relTo": {
                  "id": "eGRZ0BhyWdamA",
                  "type": "Product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "6011520b-a6e0-46de-909e-e1b7e7191f91",
                        "value": "Relation"
                      }
                    ]
                  }
                },
                "id": "Rel000",
                "properties": {
                  "relationshipType": "Composition"
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "relationships": {
                "allowedlocales": [
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
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "germany",
                    "ostype": "country",
                    "osctxpath": "country@@Germany",
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
                  }
                ],
                "ischildof": [
                  {
                    "relTo": {
                      "id": "Prod002",
                      "type": "Product"
                    },
                    "attributes": {
                      "linkdescription": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "dc23ef45-936c-4aa9-9cfe-5327b75e032f",
                            "value": "Relation 1"
                          }
                        ]
                      }
                    },
                    "id": "Rel001",
                    "properties": {
                      "relationshipType": "Composition"
                    }
                  },
                  {
                    "relTo": {
                      "id": "eGRZ0BhyWdamA",
                      "type": "Product"
                    },
                    "attributes": {
                      "linkdescription": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "7966b6e4-a259-4098-aa7d-22721db57238",
                            "value": "Relation in Germany"
                          }
                        ]
                      }
                    },
                    "id": "Rel000",
                    "properties": {
                      "relationshipType": "Composition"
                    }
                  }
                ]
              }
            },
            {
              "context": {
                "channel": "Germany Web"
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
                "ischildof": [
                  {
                    "relTo": {
                      "id": "Prod003",
                      "type": "Product"
                    },
                    "attributes": {
                      "linkdescription": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "430fea18-2f53-42a7-a11a-796bea0f1ae5",
                            "value": "Relation 2"
                          }
                        ]
                      }
                    },
                    "id": "Rel002",
                    "properties": {
                      "relationshipType": "Composition"
                    }
                  },
                  {
                    "relTo": {
                      "id": "eGRZ0BhyWdamA",
                      "type": "Product"
                    },
                    "attributes": {
                      "linkdescription": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "92a73d85-42ee-4ebb-81f8-f1c884a2e310",
                            "value": "Relation in Germany"
                          }
                        ]
                      }
                    },
                    "id": "Rel000",
                    "properties": {
                      "relationshipType": "Composition"
                    }
                  },
                  {
                    "os": "contextCoalesce",
                    "osid": "CVShirts",
                    "ostype": "sku",
                    "osctxpath": "country@@Germany",
                    "relTo": {
                      "id": "Prod002",
                      "type": "Product"
                    },
                    "attributes": {
                      "linkdescription": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "dc23ef45-936c-4aa9-9cfe-5327b75e032f",
                            "value": "Relation 1"
                          }
                        ]
                      }
                    },
                    "id": "Rel001",
                    "properties": {
                      "relationshipType": "Composition"
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