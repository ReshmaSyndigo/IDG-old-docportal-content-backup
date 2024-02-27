---
title: Data Coalesce - Reference Localization
sidebar: rdp_sidebar
permalink: api_get_data_coalesce_scenario6.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatacoalesce}}** to show how reference data is filtered based on allowed locales in country context. 

## Scenario

{% if site.build == "internal" %}
To show data coalesce of reference attributes "selfcolor", "countrycolor", "channelcolor" and relationship reference attribute "relcolor" in self, country and channel context. The reference data is filtered based on [allowed locales](api_app_create_entity_scenario19.html). Also, note that if value is not specified in the allowed locales, it falls back to value specified in its fallback locales. If value is not specified in the fallback locales also, it falls back to value specified in System Default Locale in the tenant config. For more information, see [Fallback Locales](api_app_create_entity_scenario20.html).
{% endif %}

{% if site.build != "internal" %}
To show data coalesce of reference attributes "selfcolor", "countrycolor", "channelcolor" and relationship reference attribute "relcolor" in self, country and channel context. The reference data is filtered based on allowed locales. Also, note that if value is not specified in the allowed locales, it falls back to value specified in its fallback locales. If value is not specified in the fallback locales also, it falls back to value specified in System Default Locale in the tenant config.
{% endif %}

{% include snippets/header.html %}

## Request

To get the above data, you can use the REST API {{site.data.rdp_glossary.getdatacoalesce}}. In the request send the following details:
* query -> allContextual : Set as true to get value at all contexts.
* query -> typesCriterion : The type of the entity that needs to be coalesced.
* query -> id : Entity identifier.
* fields -> attributes : Specify the attribute you wish to get. Here, you wish to get "productfeatures".
* fields -> relationships : Specify _ALL to get all the relationships. <br>

In this scenario, you wish to get the data coalesce of SKU entity "Polo Mens Shirt Red" in all contexts associated with the entity.

<pre>
<code>
POST **{{site.data.rdp_glossary.getdatacoalesce}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"allContextual": true,</span>
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "JohnShirts"</span>
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        "selfcolor",
        "channelcolor",
        "countrycolor"
      ],
      <span style="background-color: #FFFF00">"relationships": [</span>
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre> 

## Response

The data coalesce is performed as follows:

| Context | Attribute | Locale |
|---------|---------------|------------|
| Self | selfcolor | Values stored in en-US, fr-FR, de-DE, ar-MA and tr-TR locales |
| Germany | selfcolor | Values stored in en-US, de-DE locales |
| Germany Retail | selfcolor | Values stored in en-US, de-DE locales |
| France Retail| selfcolor | Values stored in en-US, fr-FR locales |
| Germany | countrycolor | Values stored in en-US, de-DE locales |
| Germany Retail | countrycolor | Values stored in en-US, de-DE locales |
| France Retail | countrycolor | Values stored in en-US, fr-FR locales |
| Germany Retail | channelcolor | Values stored in en-US, de-DE locales |
| France Retail | channelcolor | Values stored in en-US, fr-FR locales |

| Context | Relationship Attribute | Locale |
|---------|---------------|------------|
| Self | relcolor | Values stored in en-US, fr-FR, de-DE, ar-MA and tr-TR locales |
| Germany | relcolor | Values stored in en-US, de-DE locales |
| Germany Retail | relcolor | Values stored in en-US, de-DE locales |
| France Retail | relcolor | Values stored in en-US, fr-FR locales |

This is shown in the response below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "932658c5-f7d4-4179-a6be-03554c0d7038",
    "maxRecords": 10
  },
  "response": {
    "entities": [
      {
        "id": "JohnShirts",
        "name": "JohnShirts",
        "type": "sku",
        "data": {
          "attributes": {
            "selfcolor": {
              "values": [
                {
                  "source": "internal",
                  "locale": "ar-MA",
                  "id": "f2b10649-856f-4ef9-ac30-dcc4e3e69f9d",
                  "value": "أحمر",
                  "properties": {
                    "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                    "referenceDataIdentifier": "red"
                  }
                },
                {
                  "source": "internal",
                  "locale": "tr-TR",
                  "id": "bb662bfc-3ee3-4d3a-af27-09c846ba7e4c",
                  "value": "Kırmızı",
                  "properties": {
                    "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                    "referenceDataIdentifier": "red"
                  }
                },
                {
                  "source": "internal",
                  "locale": "fr-FR",
                  "id": "565ed533-34b3-4659-9aaf-968a73a482d8",
                  "value": "rouge",
                  "properties": {
                    "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                    "referenceDataIdentifier": "red"
                  }
                },
                {
                  "source": "internal",
                  "locale": "de-DE",
                  "id": "4af79ebb-0e68-4225-bd5d-5089a2918934",
                  "value": "rot",
                  "properties": {
                    "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                    "referenceDataIdentifier": "red"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cf1ba111-1d34-4c5e-8ed6-0c0a2aa50d5d",
                  "value": "red",
                  "properties": {
                    "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                    "referenceDataIdentifier": "red"
                  }
                },
                {
                  "source": "internal",
                  "locale": "nl-NL",
                  "id": "3e467445-b9c5-4c71-a2d1-8dfea7c24d6d",
                  "value": "rood",
                  "properties": {
                    "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                    "referenceDataIdentifier": "red"
                  }
                }
              ]
            }
          },
          "relationships": {
            "ischildof": [
              {
                "relTo": {
                  "id": "3fb8a6bc-a92d-4943-8d20-c854765af28d",
                  "type": "product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "73b7ae78-265c-4d29-a1bd-5c913ae2234f",
                        "value": "LD001"
                      }
                    ]
                  },
                  "relcolor": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "ar-MA",
                        "id": "5b24ecaa-7123-4c5f-a8e3-df34b2995e83",
                        "value": "أحمر",
                        "properties": {
                          "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                          "referenceDataIdentifier": "red"
                        }
                      },
                      {
                        "source": "internal",
                        "locale": "tr-TR",
                        "id": "1542bf74-0963-4614-b0f6-953ae00ace18",
                        "value": "Kırmızı",
                        "properties": {
                          "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                          "referenceDataIdentifier": "red"
                        }
                      },
                      {
                        "source": "internal",
                        "locale": "fr-FR",
                        "id": "72ea282a-f454-4e05-9ba7-9deb900e8724",
                        "value": "rouge",
                        "properties": {
                          "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                          "referenceDataIdentifier": "red"
                        }
                      },
                      {
                        "source": "internal",
                        "locale": "de-DE",
                        "id": "9f7297e0-0088-445b-95d5-8f413dd8932f",
                        "value": "rot",
                        "properties": {
                          "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                          "referenceDataIdentifier": "red"
                        }
                      },
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "37562c68-723d-4cd8-a683-5a87ff355abb",
                        "value": "red",
                        "properties": {
                          "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                          "referenceDataIdentifier": "red"
                        }
                      }
                    ]
                  }
                },
                "id": "ischildof_3fb8a6bc-a92d-4943-8d20-c854765af28d"
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {
                "countrycolor": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "de-DE",
                      "id": "7314ed96-088a-4a9a-8d63-9e6e0db0a075",
                      "value": "grau",
                      "properties": {
                        "referenceData": "colors/v_pxcp0pTKW7kpw6G-jNFQ",
                        "referenceDataIdentifier": "grey"
                      }
                    },
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "ba482d2b-07b0-41c3-8ece-287af8fe1f54",
                      "value": "grey",
                      "properties": {
                        "referenceData": "colors/v_pxcp0pTKW7kpw6G-jNFQ",
                        "referenceDataIdentifier": "grey"
                      }
                    }
                  ]
                },
                "selfcolor": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "de-DE",
                      "id": "4af79ebb-0e68-4225-bd5d-5089a2918934",
                      "os": "contextCoalesce",
                      "osid": "JohnShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "rot",
                      "properties": {
                        "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                        "referenceDataIdentifier": "red"
                      }
                    },
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "cf1ba111-1d34-4c5e-8ed6-0c0a2aa50d5d",
                      "os": "contextCoalesce",
                      "osid": "JohnShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "red",
                      "properties": {
                        "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                        "referenceDataIdentifier": "red"
                      }
                    }
                  ]
                }
              },
              "relationships": {
                "allowedlocales": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "pQvY77QvTqecQe6OFnp_6g",
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
                    "osid": "pQvY77QvTqecQe6OFnp_6g",
                    "ostype": "country",
                    "osctxpath": "country@@Germany",
                    "relTo": {
                      "id": "vFexwFTdRI2ENaGBabjJFw",
                      "type": "locale"
                    },
                    "attributes": {},
                    "id": "vFexwFTdRI2ENaGBabjJFw",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "pQvY77QvTqecQe6OFnp_6g",
                    "ostype": "country",
                    "osctxpath": "country@@Germany",
                    "relTo": {
                      "id": "rel01",
                      "type": "locale"
                    },
                    "attributes": {},
                    "id": "rel01",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  }
                ],
                "ischildof": [
                  {
                    "os": "contextCoalesce",
                    "osid": "JohnShirts",
                    "ostype": "sku",
                    "osctxpath": "self@@self",
                    "relTo": {
                      "id": "3fb8a6bc-a92d-4943-8d20-c854765af28d",
                      "type": "product"
                    },
                    "attributes": {
                      "linkdescription": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "73b7ae78-265c-4d29-a1bd-5c913ae2234f",
                            "value": "LD001"
                          }
                        ]
                      },
                      "relcolor": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "de-DE",
                            "id": "9f7297e0-0088-445b-95d5-8f413dd8932f",
                            "value": "rot",
                            "properties": {
                              "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                              "referenceDataIdentifier": "red"
                            }
                          },
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "37562c68-723d-4cd8-a683-5a87ff355abb",
                            "value": "red",
                            "properties": {
                              "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                              "referenceDataIdentifier": "red"
                            }
                          }
                        ]
                      }
                    },
                    "id": "ischildof_3fb8a6bc-a92d-4943-8d20-c854765af28d"
                  }
                ]
              }
            },
            {
              "context": {
                "channel": "Germany Retail"
              },
              "attributes": {
                "channelcolor": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "de-DE",
                      "id": "826fb7a8-b55b-4188-a8cc-83fae5be9c5a",
                      "value": "mehrfarbig",
                      "properties": {
                        "referenceData": "colors/1R9WPpX4SLmoCZt4PscnmQ",
                        "referenceDataIdentifier": "multicoloured"
                      }
                    },
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "cdfdadb3-9554-4045-a10a-82a6f2978bcf",
                      "value": "multicoloured",
                      "properties": {
                        "referenceData": "colors/1R9WPpX4SLmoCZt4PscnmQ",
                        "referenceDataIdentifier": "multicoloured"
                      }
                    }
                  ]
                },
                "countrycolor": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "de-DE",
                      "id": "7314ed96-088a-4a9a-8d63-9e6e0db0a075",
                      "os": "contextCoalesce",
                      "osid": "JohnShirts",
                      "ostype": "sku",
                      "osctxpath": "country@@Germany",
                      "value": "grau",
                      "properties": {
                        "referenceData": "colors/v_pxcp0pTKW7kpw6G-jNFQ",
                        "referenceDataIdentifier": "grey"
                      }
                    },
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "ba482d2b-07b0-41c3-8ece-287af8fe1f54",
                      "os": "contextCoalesce",
                      "osid": "JohnShirts",
                      "ostype": "sku",
                      "osctxpath": "country@@Germany",
                      "value": "grey",
                      "properties": {
                        "referenceData": "colors/v_pxcp0pTKW7kpw6G-jNFQ",
                        "referenceDataIdentifier": "grey"
                      }
                    }
                  ]
                },
                "selfcolor": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "de-DE",
                      "id": "4af79ebb-0e68-4225-bd5d-5089a2918934",
                      "os": "contextCoalesce",
                      "osid": "JohnShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "rot",
                      "properties": {
                        "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                        "referenceDataIdentifier": "red"
                      }
                    },
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "cf1ba111-1d34-4c5e-8ed6-0c0a2aa50d5d",
                      "os": "contextCoalesce",
                      "osid": "JohnShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "red",
                      "properties": {
                        "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                        "referenceDataIdentifier": "red"
                      }
                    }
                  ]
                }
              },
              "relationships": {
                "allowedlocales": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "eTV1ZsVeTeixWmpcNB6EOA",
                    "ostype": "channel",
                    "osctxpath": "channel@@Germany Retail",
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
                    "osid": "eTV1ZsVeTeixWmpcNB6EOA",
                    "ostype": "channel",
                    "osctxpath": "channel@@Germany Retail",
                    "relTo": {
                      "id": "vFexwFTdRI2ENaGBabjJFw",
                      "type": "locale"
                    },
                    "attributes": {},
                    "id": "vFexwFTdRI2ENaGBabjJFw",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "pQvY77QvTqecQe6OFnp_6g",
                    "ostype": "country",
                    "osctxpath": "country@@Germany",
                    "relTo": {
                      "id": "rel01",
                      "type": "locale"
                    },
                    "attributes": {},
                    "id": "rel01",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  }
                ],
                "ischildof": [
                  {
                    "os": "contextCoalesce",
                    "osid": "JohnShirts",
                    "ostype": "sku",
                    "osctxpath": "self@@self",
                    "relTo": {
                      "id": "3fb8a6bc-a92d-4943-8d20-c854765af28d",
                      "type": "product"
                    },
                    "attributes": {
                      "linkdescription": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "73b7ae78-265c-4d29-a1bd-5c913ae2234f",
                            "value": "LD001"
                          }
                        ]
                      },
                      "relcolor": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "de-DE",
                            "id": "9f7297e0-0088-445b-95d5-8f413dd8932f",
                            "value": "rot",
                            "properties": {
                              "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                              "referenceDataIdentifier": "red"
                            }
                          },
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "37562c68-723d-4cd8-a683-5a87ff355abb",
                            "value": "red",
                            "properties": {
                              "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                              "referenceDataIdentifier": "red"
                            }
                          }
                        ]
                      }
                    },
                    "id": "ischildof_3fb8a6bc-a92d-4943-8d20-c854765af28d"
                  }
                ],
                "belongstocountry": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "eTV1ZsVeTeixWmpcNB6EOA",
                    "ostype": "channel",
                    "osctxpath": "channel@@Germany Retail",
                    "relTo": {
                      "id": "pQvY77QvTqecQe6OFnp_6g",
                      "type": "country"
                    },
                    "attributes": {},
                    "id": "pQvY77QvTqecQe6OFnp_6g",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  }
                ]
              }
            },
            {
              "context": {
                "channel": "France Retail"
              },
              "attributes": {
                "channelcolor": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "fr-FR",
                      "id": "4ffc2c17-d6cd-4ae8-b285-4da1d494d460",
                      "value": "multicolore",
                      "properties": {
                        "referenceData": "colors/1R9WPpX4SLmoCZt4PscnmQ",
                        "referenceDataIdentifier": "multicoloured"
                      }
                    },
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "7841b0f3-6a34-4616-851c-66741ec85375",
                      "value": "multicoloured",
                      "properties": {
                        "referenceData": "colors/1R9WPpX4SLmoCZt4PscnmQ",
                        "referenceDataIdentifier": "multicoloured"
                      }
                    }
                  ]
                },
                "selfcolor": {
                  "values": [
                    {
                      "source": "internal",
                      "locale": "fr-FR",
                      "id": "565ed533-34b3-4659-9aaf-968a73a482d8",
                      "os": "contextCoalesce",
                      "osid": "JohnShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "rouge",
                      "properties": {
                        "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                        "referenceDataIdentifier": "red"
                      }
                    },
                    {
                      "source": "internal",
                      "locale": "en-US",
                      "id": "cf1ba111-1d34-4c5e-8ed6-0c0a2aa50d5d",
                      "os": "contextCoalesce",
                      "osid": "JohnShirts",
                      "ostype": "sku",
                      "osctxpath": "self@@self",
                      "value": "red",
                      "properties": {
                        "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                        "referenceDataIdentifier": "red"
                      }
                    }
                  ]
                }
              },
              "relationships": {
                "allowedlocales": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "gzBnkX9WR1mj6jU-D4HwSw",
                    "ostype": "channel",
                    "osctxpath": "channel@@France Retail",
                    "relTo": {
                      "id": "F6bg43kiSWGl1EM2HMMxOQ",
                      "type": "locale"
                    },
                    "attributes": {},
                    "id": "F6bg43kiSWGl1EM2HMMxOQ",
                    "properties": {
                      "direction": "both",
                      "operation": "association"
                    }
                  },
                  {
                    "os": "instanceCoalesce",
                    "osid": "gzBnkX9WR1mj6jU-D4HwSw",
                    "ostype": "channel",
                    "osctxpath": "channel@@France Retail",
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
                    "os": "contextCoalesce",
                    "osid": "JohnShirts",
                    "ostype": "sku",
                    "osctxpath": "self@@self",
                    "relTo": {
                      "id": "3fb8a6bc-a92d-4943-8d20-c854765af28d",
                      "type": "product"
                    },
                    "attributes": {
                      "linkdescription": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "73b7ae78-265c-4d29-a1bd-5c913ae2234f",
                            "value": "LD001"
                          }
                        ]
                      },
                      "relcolor": {
                        "values": [
                          {
                            "source": "internal",
                            "locale": "fr-FR",
                            "id": "72ea282a-f454-4e05-9ba7-9deb900e8724",
                            "value": "rouge",
                            "properties": {
                              "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                              "referenceDataIdentifier": "red"
                            }
                          },
                          {
                            "source": "internal",
                            "locale": "en-US",
                            "id": "37562c68-723d-4cd8-a683-5a87ff355abb",
                            "value": "red",
                            "properties": {
                              "referenceData": "colors/xQwXmEclRVqF02_qHfhawQ",
                              "referenceDataIdentifier": "red"
                            }
                          }
                        ]
                      }
                    },
                    "id": "ischildof_3fb8a6bc-a92d-4943-8d20-c854765af28d"
                  }
                ],
                "belongstocountry": [
                  {
                    "os": "instanceCoalesce",
                    "osid": "gzBnkX9WR1mj6jU-D4HwSw",
                    "ostype": "channel",
                    "osctxpath": "channel@@France Retail",
                    "relTo": {
                      "id": "tFSJIxCKTGKGmNOs4Dzi7A",
                      "type": "country"
                    },
                    "attributes": {},
                    "id": "tFSJIxCKTGKGmNOs4Dzi7A",
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