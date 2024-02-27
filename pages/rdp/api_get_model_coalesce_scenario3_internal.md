---
title: Model Coalesce - Precedence
sidebar: rdp_sidebar
permalink: api_get_model_coalesce_scenario3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmodelcoalesce}}** to show the inheritance and merging of models in different hierarchical paths associated with the entity, and the precedence order used when multiple models have the same attribute defined, using a scenario.

## Scenario

To show context and instance coalesce of manage models for the path Self->Country->Channel. Similarly model coalesce can be done for display model, validation model, defaultvalue model etc. This scenario also shows the order of precedence applied when performing a coalesce when the same attribute is available in multiple models associated with the entity. 

Note: 
* Instance coalesce - Available at the current level
* Context coalesce - Inherited from parent 

## Precedence for model coalesce 

Consider the same attribute, is defined in the following models - 
Web Classification Path, Channel, Product Classification Path, Country, Item Type, Self. 
The order of precedence and the coalesce is done as illustrated below. The order of precedence among the enhancer attributes is determined by the sequence number in domain context model. See [Context Model for Thing Domain](api_create_data_model_scenario57.html).<br>

The model defined at the most specific(detailed) level of the hierarchy wins.<br>

P1 - Highest Priority
P3 - Lowest Priority

#### Case 1  

Attribute is present in the models Product Classification path (Self)/ Item Type (Self)/ Self. <br> The coalesce order is as follows:

| Context | Coalesce | Priority |
|---------|---------------|--------|
| Self | Instance Coalesce from Item Type (Self) | P1 |
| Self | Instance Coalesce from Product Classification (Self) | P2 |
| Self | Instance Coalesce from self | P3 |
| Country/Channel | Instance Coalesce from Item Type (Self) | P1 |
| Country/Channel | Instance Coalesce from Product Classification (Self) | P2 |
| Country/Channel | Context Coalesce from self | P3 |

#### Case 2  

* Attribute is present in the models Product Classification path (Self)/ Item Type (Self)/ Self. 
* Attribute is also present in Product Classification path (Country)/ Country. <br>
The coalesce order is as follows:

| Context | Coalesce | Priority |
|---------|---------------|---------|
| Self | Instance Coalesce from Item Type (Self) | P1 |
| Self | Instance Coalesce from Product Classification (Self) | P2 |
| Self | Instance Coalesce from self| P3 |
| Country | Instance Coalesce from Product Classification (Country) | P1 |
| Country | Instance Coalesce from Country | P2 |
| Channel | Instance Coalesce from Product Classification (Country) | P1 |
| Channel | Context Coalesce from Country | P2 |

#### Case 3 

* Attribute is present in the models Product Classification path (Self)/ Item Type (Self)/ Self. 
* Attribute is also present in Product Classification path (Country)/ Country.
* Attribute is also present in Web Classification path (Channel)/ Channel. <br>
The coalesce order is as follows:

| Context | Coalesce | Priority |
|---------|---------------|--------|
| Self | Instance Coalesce from Item Type (Self) | P1 |
| Self | Instance Coalesce from Product Classification (Self) | P2 |
| Self | Instance Coalesce from self | P3 |
| Country | Instance Coalesce from Product Classification (Country) | P1 |
| Country | Instance Coalesce from Country | P2 |
| Channel | Instance Coalesce from Web Classification (Channel) | P1 |
| Channel | Instance Coalesce from Channel | P2 |

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

The attribute "test" is defined in the manage models of sku(self), refurbished(item type), apparelnfootwear(product classification), germany web(channel) and top rated products(web classification).

| Context | Coalesce | 
|---------|---------------|
| Self | Instance Coalesce from Item Type (Self) |
| Country | Instance Coalesce from Item Type (Self) |
| Channel | Instance Coalesce from Web Classification (Channel)| 

This is shown in the response below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "adaeacbb-2caa-4d6e-babf-45f42c25ba57"
  },
  "response": {
    "entityModels": [
      {
        "id": "sku_entityManageModel",
        "name": "sku",
        "type": "entityManageModel",
        "domain": "generic",
        "data": {
          "attributes": {
            "mdmid": {
              "properties": {
                "externalName": "MDM ID",
                "groupName": "Basic",
                "isEntityIdentifier": true,
                "dataType": "string"
              }
            },
            "mdmname": {
              "properties": {
                "externalName": "SKU Name",
                "groupName": "Basic",
                "isExternalName": true,
                "dataType": "string"
              }
            },
            "productclassification": {
              "properties": {
                "externalName": "Product classification",
                "dataType": "string",
                "groupName": "Enhancer Attributes",
                "displayType": "path",
                "isCollection": true,
                "pathEntityInfo": [
                  {
                    "pathRelationshipName": "belongsTo",
                    "pathEntityType": "classification",
                    "rootNode": "productclassificationroot",
                    "pathSeperator": ">>"
                  }
                ]
              }
            },
            "itemtype": {
              "properties": {
                "externalName": "Item Type",
                "dataType": "string",
                "groupName": "Enhancer Attributes",
                "isReferenceType": true,
                "displayType": "referencelist",
                "referenceEntityInfo": [
                  {
                    "refRelationshipName": "hasReferenceTo",
                    "refEntityType": "itemtype"
                  }
                ]
              }
            },
            "originalpurchasedate": {
              "properties": {
                "externalName": "Original Purchase Date",
                "groupName": "Refurbished",
                "dataType": "date",
                "instanceCoalesce": [
                  {
                    "coalesceSourceId": "61M00oAoRY-_oxmOESfTxQ_entityManageModel",
                    "coalesceSourceName": "Refurbished",
                    "coalesceSourceType": "entityManageModel",
                    "coalesceSourcePath": "self@@self##itemtype@@Refurbished"
                  }
                ]
              }
            },
            "test": {
              "properties": {
                "externalName": "Test in item type",
                "groupName": "Apparel & Footwear",
                "dataType": "string",
                "instanceCoalesce": [
                  {
                    "coalesceSourceId": "61M00oAoRY-_oxmOESfTxQ_entityManageModel",
                    "coalesceSourceName": "Refurbished",
                    "coalesceSourceType": "entityManageModel",
                    "coalesceSourcePath": "self@@self##itemtype@@Refurbished"
                  }
                ]
              }
            },
            "accessoriesincluded": {
              "properties": {
                "externalName": "Accessories Included",
                "groupName": "Apparel & Footwear",
                "dataType": "string",
                "instanceCoalesce": [
                  {
                    "coalesceSourceId": "apparelnfootwear_entityManageModel",
                    "coalesceSourceName": "Apparel & Footwear",
                    "coalesceSourceType": "entityManageModel",
                    "coalesceSourcePath": "self@@self##classification@@Product Classifications>>Apparel & Footwear"
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
                      "externalName": "Link Description",
                      "groupName": "Relationship Attributes",
                      "dataType": "string",
                      "isLocalizable": true
                    }
                  }
                },
                "id": "ischildof",
                "properties": {
                  "externalName": "Child of",
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
                "mdmid": {
                  "properties": {
                    "externalName": "MDM ID",
                    "groupName": "Basic",
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
                    "groupName": "Basic",
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
                    "externalName": "Item Type",
                    "dataType": "string",
                    "groupName": "Enhancer Attributes",
                    "isReferenceType": true,
                    "displayType": "referencelist",
                    "referenceEntityInfo": [
                      {
                        "refRelationshipName": "hasReferenceTo",
                        "refEntityType": "itemtype"
                      }
                    ],
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "accessoriesincluded": {
                  "properties": {
                    "externalName": "Accessories Included",
                    "groupName": "Apparel & Footwear",
                    "dataType": "string",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "apparelnfootwear_entityManageModel",
                        "coalesceSourceName": "Apparel & Footwear",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear"
                      }
                    ]
                  }
                },
                "productclassification": {
                  "properties": {
                    "externalName": "Product classification",
                    "dataType": "string",
                    "groupName": "Enhancer Attributes",
                    "displayType": "path",
                    "isCollection": true,
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
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityManageModel",
                        "coalesceSourceName": "Germany",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ]
                  }
                },
                "vat": {
                  "properties": {
                    "externalName": "VAT in %",
                    "groupName": "Item Details",
                    "dataType": "decimal",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityManageModel",
                        "coalesceSourceName": "Germany",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ]
                  }
                },
                "originalpurchasedate": {
                  "properties": {
                    "externalName": "Original Purchase Date",
                    "groupName": "Refurbished",
                    "dataType": "date",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "61M00oAoRY-_oxmOESfTxQ_entityManageModel",
                        "coalesceSourceName": "Refurbished",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "self@@self##itemtype@@Refurbished"
                      }
                    ]
                  }
                },
                "test": {
                  "properties": {
                    "externalName": "Test in item type",
                    "groupName": "Apparel & Footwear",
                    "dataType": "string",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "61M00oAoRY-_oxmOESfTxQ_entityManageModel",
                        "coalesceSourceName": "Refurbished",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "self@@self##itemtype@@Refurbished"
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
                          "externalName": "Link Description",
                          "groupName": "Relationship Attributes",
                          "dataType": "string",
                          "isLocalizable": true
                        }
                      }
                    },
                    "id": "ischildof",
                    "properties": {
                      "externalName": "Child of",
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
                "mdmid": {
                  "properties": {
                    "externalName": "MDM ID",
                    "groupName": "Basic",
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
                    "groupName": "Basic",
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
                    "externalName": "Item Type",
                    "dataType": "string",
                    "groupName": "Enhancer Attributes",
                    "isReferenceType": true,
                    "displayType": "referencelist",
                    "referenceEntityInfo": [
                      {
                        "refRelationshipName": "hasReferenceTo",
                        "refEntityType": "itemtype"
                      }
                    ],
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "reviewrank": {
                  "properties": {
                    "externalName": "Review Rank",
                    "groupName": "Ranking",
                    "dataType": "integer",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "topratedproducts_entityManageModel",
                        "coalesceSourceName": "Top Rated Products",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "channel@@Germany Web##classification@@Web Classifications>>Top Rated Products"
                      }
                    ]
                  }
                },
                "test": {
                  "properties": {
                    "externalName": "Test Germany Web Classification",
                    "groupName": "Apparel & Footwear",
                    "dataType": "string",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "topratedproducts_entityManageModel",
                        "coalesceSourceName": "Top Rated Products",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "channel@@Germany Web##classification@@Web Classifications>>Top Rated Products"
                      }
                    ]
                  }
                },
                "webclassification": {
                  "properties": {
                    "externalName": "Web classification",
                    "dataType": "string",
                    "groupName": "Enhancer Attributes",
                    "displayType": "path",
                    "isCollection": true,
                    "pathEntityInfo": [
                      {
                        "pathRelationshipName": "belongsTo",
                        "pathEntityType": "classification",
                        "rootNode": "webclassificationroot",
                        "pathSeperator": ">>"
                      }
                    ],
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "dQ3bllHdTqap4T1IudIY2Q_entityManageModel",
                        "coalesceSourceName": "Germany Web",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "channel@@Germany Web"
                      }
                    ]
                  }
                },
                "internettax": {
                  "properties": {
                    "externalName": "Internet Tax",
                    "groupName": "Item Details",
                    "dataType": "decimal",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "dQ3bllHdTqap4T1IudIY2Q_entityManageModel",
                        "coalesceSourceName": "Germany Web",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "channel@@Germany Web"
                      }
                    ]
                  }
                },
                "accessoriesincluded": {
                  "properties": {
                    "externalName": "Accessories Included",
                    "groupName": "Apparel & Footwear",
                    "dataType": "string",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "apparelnfootwear_entityManageModel",
                        "coalesceSourceName": "Apparel & Footwear",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany##classification@@Product Classifications>>Apparel & Footwear"
                      }
                    ]
                  }
                },
                "productclassification": {
                  "properties": {
                    "externalName": "Product classification",
                    "dataType": "string",
                    "groupName": "Enhancer Attributes",
                    "displayType": "path",
                    "isCollection": true,
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
                },
                "originalpurchasedate": {
                  "properties": {
                    "externalName": "Original Purchase Date",
                    "groupName": "Refurbished",
                    "dataType": "date",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "61M00oAoRY-_oxmOESfTxQ_entityManageModel",
                        "coalesceSourceName": "Refurbished",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "self@@self##itemtype@@Refurbished"
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
                          "externalName": "Link Description",
                          "groupName": "Relationship Attributes",
                          "dataType": "string",
                          "isLocalizable": true
                        }
                      }
                    },
                    "id": "ischildof",
                    "properties": {
                      "externalName": "Child of",
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