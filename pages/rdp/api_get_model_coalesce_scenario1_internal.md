---
title: Model Coalesce - Primary Context and Additional Context
sidebar: rdp_sidebar
permalink: api_get_model_coalesce_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmodelcoalesce}}** to show the inheritance and merging of models in different hierarchical paths associated with the entity, using a scenario.

## Scenario

To show context and instance coalesce of manage models for the path Self->Country->Channel. Similarly model coalesce can be done for display model, validation model, defaultvalue model etc.

Note: 
* Instance coalesce - Available at the current level
* Context coalesce - Inherited from parent

{% include snippets/header.html %}

## Request

To get the model coalesce, you can use the REST API {{site.data.rdp_glossary.getmodelcoalesce}}. In the request send the following details:
  
* query -> contexts : Contexts in which you wish to perform the coalesce
* query -> typesCriterion : The model type that needs to be coalesced
* query -> id : Model identifier

In this scenario, we are requesting for model coalesce at self, Germany and Germany Web for all attributes and relationships.

<pre><code>
POST **{{site.data.rdp_glossary.getmodelcoalesce}}**
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
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "entityManageModel"
        ]
      },
      <span style="background-color: #FFFF00">"id": "sku_entityManageModel"</span>
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ],
      "properties": [
        "_ALL"
      ]
    }
  }
}
</code></pre> 

## Response

The model coalesce is performed as follows:

| Context | Attributes | Coalesce | 
|---------|---------------|------------|
| Self | Enhancer Attributes - Product Classification Path, Item Type| Instance Coalesce |
| Self | All Self level Attributes and relationships| Instance Coalesce |
| Country | Enhancer Attribute - Product Classification Path | Instance Coalesce |
| Country | Enhancer Attribute - Item Type | Context Coalesce from Self |
| Country | All Country level attributes | Instance Coalesce |
| Country | All Self level attributes and relationships | Context Coalesce from Self|
| Channel | Enhancer Attribute - Web Classification Path | Instance Coalesce |
| Channel | Enhancer Attribute - Product Classification Path | Context Coalesce from Country |
| Channel | Enhancer Attribute - Item Type | Context Coalesce from Self |
| Channel | All Channel level attributes | Instance Coalesce |
| Channel | All Country level attributes | Context Coalesce from Country |
| Channel | All Self level attributes and relationships | Context Coalesce from Self |

This is shown in the response below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "c1113d57-9500-4f8a-8d30-5afdb11ea78e"
  },
  "response": {
    "entityModels": [
      {
        "id": "sku_entityManageModel",
        "name": "sku",
        "type": "entityManageModel",
        "domain": "generic",
        "source": "internal",
        "properties": {},
        "data": {
          "attributes": {
            "productid": {
              "properties": {
                "dataType": "string"
              }
            },
            "startdate": {
              "properties": {
                "dataType": "date"
              }
            },
            "uom": {
              "properties": {
                "dataType": "string"
              }
            },
            "mdmid": {
              "properties": {
                "isEntityIdentifier": true,
                "dataType": "string"
              }
            },
            "vat": {
              "properties": {
                "dataType": "decimal",
                "instanceCoalesce": [
                  {
                    "coalesceSourceId": "952j-ZSEQHOrvvtCXaUHzg_entityManageModel",
                    "coalesceSourceName": "Germany",
                    "coalesceSourceType": "entityManageModel",
                    "coalesceSourcePath": "country@@Germany"
                  }
                ]
              }
            }
          },
          "relationships": {
            "ischildof": [
              {
                "attributes": {
                  "linkdescription": {
                    "properties": {
                      "isLocalizable": true,
                      "dataType": "string"
                    }
                  }
                },
                "id": "ischildofowned",
                "properties": {
                  "externalName": "Parent PRODUCTs",
                  "relationshipType": "Composition",
                  "relationshipOwnership": "owned",
                  "relatedEntityInfo": [
                    {
                      "relEntityType": "product"
                    }
                  ]
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "country": "Germany"
              },
              "attributes": {
                "productid": {
                  "properties": {
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "startdate": {
                  "properties": {
                    "dataType": "date",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "uom": {
                  "properties": {
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "mdmid": {
                  "properties": {
                    "isEntityIdentifier": true,
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "vat": {
                  "properties": {
                    "dataType": "decimal",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "952j-ZSEQHOrvvtCXaUHzg_entityManageModel",
                        "coalesceSourceName": "Germany",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ]
                  }
                }
              },
              "relationships": {
                "ischildof": [
                  {
                    "attributes": {
                      "linkdescription": {
                        "properties": {
                          "isLocalizable": true,
                          "dataType": "string"
                        }
                      }
                    },
                    "id": "ischildofowned",
                    "properties": {
                      "externalName": "Parent PRODUCTs",
                      "relationshipType": "Composition",
                      "relationshipOwnership": "owned",
                      "relatedEntityInfo": [
                        {
                          "relEntityType": "product"
                        }
                      ],
                      "contextCoalesce": [
                        {
                          "self": "self"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "context": {
                "channel": "Germany Web"
              },
              "attributes": {
                "productid": {
                  "properties": {
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "startdate": {
                  "properties": {
                    "dataType": "date",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "uom": {
                  "properties": {
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "mdmid": {
                  "properties": {
                    "isEntityIdentifier": true,
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "vat": {
                  "properties": {
                    "dataType": "decimal",
                    "contextCoalesce": [
                      {
                        "country": "Germany"
                      }
                    ]
                  }
                }
              },
              "relationships": {
                "ischildof": [
                  {
                    "attributes": {
                      "linkdescription": {
                        "properties": {
                          "isLocalizable": true,
                          "dataType": "string"
                        }
                      }
                    },
                    "id": "ischildofowned",
                    "properties": {
                      "externalName": "Parent PRODUCTs",
                      "relationshipType": "Composition",
                      "relationshipOwnership": "owned",
                      "relatedEntityInfo": [
                        {
                          "relEntityType": "product"
                        }
                      ],
                      "contextCoalesce": [
                        {
                          "self": "self"
                        }
                      ]
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
