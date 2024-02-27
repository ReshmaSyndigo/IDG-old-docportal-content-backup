---
title: Model Coalesce - Additional Context Given Data
sidebar: rdp_sidebar
permalink: api_get_model_coalesce_scenario2.html
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

To get the above model, you can use the REST API {{site.data.rdp_glossary.getmodelcoalesce}}. In the request send the following details:
  
* query -> contexts : Contexts in which you wish to perform the coalesce
* query -> typesCriterion : The model type that needs to be coalesced
* query -> id : Model identifier
* options -> coalesceOptions -> enhancerAttributes : Specify the enhancer paths and the contexts in which you want to perform the coalesce.

In this scenario, we are requesting for model coalesce at self, Germany and Germany Web for all attributes, relationships and enhancer given data.

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
    },
    "options": {
      "coalesceOptions": {
        <span style="background-color: #FFFF00">"enhancerAttributes": [</span>
          {
            "productclassification": "Product Classifications>>Apparel & Footwear",
            "contexts": [
              {
                "channel": "Germany Web"
              },
              {
                "country": "Germany"
              },
              {
                "self": "self"
              }
            ]
          },
          {
            "webclassification": "Web Classifications>>Top Rated Products",
            "contexts": [
              {
                "channel": "Germany Web"
              }
            ]
          },
          {
            "itemtype": "Refurbished",
            "contexts": [
              {
                "channel": "Germany Web"
              },
              {
                "country": "Germany"
              },
              {
                "self": "self"
              }
            ]
          }
        ]
      }
    }
  }
}
</code></pre> 

## Response

The model coalesce is performed as follows:

| Context | Attributes | Coalesce | 
|---------|---------------|------------|
| Self | Enhancer Attributes - Product Classification Path, Item Type | Instance Coalesce |
| Self | All Self level Attributes and relationships| Instance Coalesce |
| Self | All Enhancer given attributes | Instance Coalesce |
| Country | Enhancer Attribute - Product Classification Path | Instance Coalesce |
| Country | Enhancer Attribute - Item Type | Context Coalesce from Self |
| Country | All Country level attributes | Instance Coalesce |
| Country | All Self level attributes and relationships | Context Coalesce from Self|
| Country | All Enhancer given attributes | Instance Coalesce|
| Channel | Enhancer Attribute - Web Classification Path | Instance Coalesce |
| Channel | Enhancer Attribute - Product Classification Path | Context Coalesce from Country |
| Channel | Enhancer Attribute - Item Type | Context Coalesce from Self |
| Channel | All Channel level attributes | Instance Coalesce |
| Channel | All Country level attributes | Context Coalesce from Country |
| Channel | All Self level attributes and relationships | Context Coalesce from Self |
| Channel | All Enhancer given attributes | Instance Coalesce|

This is shown in the response below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "9dd30fd9-dfe7-49eb-9c2b-cd706f6dfa1e"
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
            "mdmid": {
              "properties": {
                "isEntityIdentifier": true,
                "dataType": "string"
              }
            },
            "mdmname": {
              "properties": {
                "externalName": "SKU Name",
                "isExternalName": true,
                "dataType": "string"
              }
            },
            "itemtype": {
              "properties": {
                "dataType": "string",
                "isReferenceType": true,
                "referenceEntityInfo": [
                  {
                    "refEntityType": "itemtype",
                    "isReferenceType": true,
                    "refRelationshipName": "hasReferenceTo"
                  }
                ]
              }
            },
            "productclassification": {
              "properties": {
                "dataType": "string",
                "pathEntityInfo": [
                  {
                    "pathRelationshipName": "belongsTo",
                    "pathEntityType": "classification",
                    "rootNode": "productclassificationroot",
                    "pathSeperator": ">>"
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
                "mdmname": {
                  "properties": {
                    "externalName": "SKU Name",
                    "isExternalName": true,
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "itemtype": {
                  "properties": {
                    "dataType": "string",
                    "isReferenceType": true,
                    "referenceEntityInfo": [
                      {
                        "refEntityType": "itemtype",
                        "isReferenceType": true,
                        "refRelationshipName": "hasReferenceTo"
                      }
                    ],
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "productclassification": {
                  "properties": {
                    "dataType": "string",
                    "pathEntityInfo": [
                      {
                        "pathRelationshipName": "belongsTo",
                        "pathEntityType": "classification",
                        "rootNode": "productclassificationroot",
                        "pathSeperator": ">>"
                      }
                    ],
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
                "mdmname": {
                  "properties": {
                    "externalName": "SKU Name",
                    "isExternalName": true,
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "itemtype": {
                  "properties": {
                    "dataType": "string",
                    "isReferenceType": true,
                    "referenceEntityInfo": [
                      {
                        "refEntityType": "itemtype",
                        "isReferenceType": true,
                        "refRelationshipName": "hasReferenceTo"
                      }
                    ],
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "productclassification": {
                  "properties": {
                    "dataType": "string",
                    "pathEntityInfo": [
                      {
                        "pathRelationshipName": "belongsTo",
                        "pathEntityType": "classification",
                        "rootNode": "productclassificationroot",
                        "pathSeperator": ">>"
                      }
                    ],
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