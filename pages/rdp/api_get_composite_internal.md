---
title: Get Composite
sidebar: rdp_sidebar
permalink: api_get_composite.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getcomposite}}** to get the coalesced models of all the specified types, using a scenario.

## Scenario

To get the coalesced manage, display and validation models at "Germany" context.
{% include snippets/header.html %}

## Request

To get the above model, you can use the REST API {{site.data.rdp_glossary.getcomposite}}. In the request send the following details:
* query -> contexts : Contexts in which you wish to perform the coalesce
* query -> typesCriterion : The types of the models that needs to be coalesced
* query -> id : Entity identifier
In this scenario, you wish to get composite of SKU entity "CVShirts_Germany" in "Germany" context.

<pre><code>
POST **{{site.data.rdp_glossary.getcomposite}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "country": "Germany"
        }
      ],
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "entityDisplayModel",
          "entityManageModel",
          "entityValidationModel"
        ]
      },
      <span style="background-color: #FFFF00">"id": "CVShirts_Germany"</span>
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

The response of get composite is as shown below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "bd8090d3-3d4e-4e05-a8df-b1e624b4033b"
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
                "dataType": "string",
                "required": true,
                "displayType": "textbox",
                "displaySequence": 1010,
                "description": ""
              }
            },
            "mdmname": {
              "properties": {
                "externalName": "SKU Name",
                "groupName": "Basic",
                "isExternalName": true,
                "dataType": "string",
                "required": true,
                "displayType": "textbox",
                "displaySequence": 1020,
                "description": ""
              }
            },
            "productfeatures": {
              "properties": {
                "externalName": "Product Features",
                "groupName": "Basic",
                "dataType": "string",
                "isLocalizable": true,
                "required": false,
                "displayType": "textarea",
                "displaySequence": 1050,
                "description": ""
              }
            },
            "headline": {
              "properties": {
                "externalName": "Headline",
                "groupName": "Basic",
                "dataType": "string",
                "isLocalizable": true,
                "minLength": 5,
                "maxLength": 100,
                "required": false,
                "displayType": "textbox",
                "displaySequence": 1060,
                "description": ""
              }
            },
            "featurespecs": {
              "properties": {
                "externalName": "Feature Specs",
                "groupName": "Basic",
                "dataType": "string",
                "isLocalizable": true,
                "isCollection": true,
                "required": false,
                "displayType": "textbox",
                "displaySequence": 1055,
                "description": ""
              }
            },
            "leadtime": {
              "properties": {
                "externalName": "Lead Time",
                "groupName": "Basic",
                "dataType": "integer",
                "uomEntityInfo": [
                  {
                    "uomRelationshipName": "hasUnits",
                    "uomEntityType": "Time"
                  }
                ],
                "range": [
                  {
                    "rangeTo": 365,
                    "rangeFrom": 2,
                    "isRangeToInclusive": false,
                    "isRangeFromInclusive": false
                  }
                ],
                "rangeTo": 365,
                "rangeFrom": 2,
                "isRangeToInclusive": false,
                "isRangeFromInclusive": false,
                "required": false,
                "uomAllowedUnitSymbols": [
                  {
                    "unitSymbol": "days"
                  }
                ],
                "displayType": "numerictextbox",
                "displaySequence": 1140,
                "description": ""
              }
            },
            "buytodemand": {
              "properties": {
                "externalName": "Buy to Demand",
                "groupName": "Basic",
                "dataType": "boolean",
                "displayType": "boolean",
                "displaySequence": 1150,
                "description": ""
              }
            },
            "cost": {
              "properties": {
                "externalName": "Vendor Cost",
                "groupName": "Pricing",
                "dataType": "decimal",
                "precision": 2,
                "required": false,
                "displayType": "numerictextbox",
                "displaySequence": 3010,
                "description": ""
              }
            },
            "msrp": {
              "properties": {
                "externalName": "MSRP",
                "groupName": "Pricing",
                "dataType": "decimal",
                "precision": 2,
                "required": false,
                "displayType": "numerictextbox",
                "displaySequence": 3050,
                "description": ""
              }
            },
            "size": {
              "properties": {
                "externalName": "Size",
                "groupName": "Basic",
                "dataType": "string",
                "isReferenceType": true,
                "referenceEntityInfo": [
                  {
                    "refRelationshipName": "hasReferenceTo",
                    "refEntityType": "sizes",
                    "thumbnail": "none",
                    "listTitle": "{entity.attributes.value}",
                    "listSubTitle": ""
                  }
                ],
                "valueMappingContext": [
                  "[Role]",
                  "[User Id]"
                ],
                "supportsValueMapping": true,
                "valueMappingTypeName": "sizevaluemapping",
                "displayType": "referencelist",
                "displaySequence": 1090,
                "description": ""
              }
            },
            "uom": {
              "properties": {
                "externalName": "Unit of Measure",
                "groupName": "Item Details",
                "dataType": "string",
                "displayType": "textbox",
                "displaySequence": 2340,
                "description": ""
              }
            },
            "alternatevendor": {
              "group": [
                {
                  "vendorpartnumber": {
                    "properties": {
                      "externalName": "Part Number",
                      "groupName": "alternatevendor",
                      "dataType": "string",
                      "displayType": "textbox",
                      "displaySequence": 5040,
                      "description": ""
                    }
                  },
                  "vendorid": {
                    "properties": {
                      "externalName": "Vendor ID",
                      "groupName": "alternatevendor",
                      "isAttributeIdentifier": true,
                      "dataType": "string",
                      "displayType": "textbox",
                      "displaySequence": 5020,
                      "description": ""
                    }
                  },
                  "vendorcost": {
                    "properties": {
                      "externalName": "Vendor Price",
                      "groupName": "alternatevendor",
                      "dataType": "decimal",
                      "displayType": "numerictextbox",
                      "displaySequence": 5050,
                      "description": ""
                    }
                  },
                  "vendorname": {
                    "properties": {
                      "externalName": "Vendor Name",
                      "groupName": "alternatevendor",
                      "dataType": "string",
                      "displayType": "textbox",
                      "displaySequence": 5030,
                      "description": ""
                    }
                  },
                  "id": "5e624167-afc7-482e-af77-69ddadf584b5"
                }
              ],
              "properties": {
                "externalName": "Alternate Vendors",
                "groupName": "Internal Information",
                "dataType": "nested",
                "displayType": "nestedgrid",
                "displaySequence": 5010,
                "description": ""
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
                "displaySequence": 1020,
                "description": ""
              }
            },
            "categorymanager": {
              "properties": {
                "externalName": "Category Manager",
                "groupName": "Item Details",
                "dataType": "string",
                "displayType": "textbox"
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
                "displaySequence": 1030,
                "description": ""
              }
            },
            "test": {
              "properties": {
                "externalName": "test in sku model",
                "groupName": "Apparel & Footwear",
                "dataType": "string"
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
                      "isLocalizable": true,
                      "displayType": "textarea",
                      "displaySequence": 4040,
                      "description": ""
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
                  "cardinality": [
                    {
                      "minimum": 1
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
                    ],
                    "required": true,
                    "displayType": "textbox",
                    "displaySequence": 1010,
                    "description": ""
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
                    ],
                    "required": true,
                    "displayType": "textbox",
                    "displaySequence": 1020,
                    "description": ""
                  }
                },
                "productfeatures": {
                  "properties": {
                    "externalName": "Product Features",
                    "groupName": "Basic",
                    "dataType": "string",
                    "isLocalizable": true,
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "required": false,
                    "displayType": "textarea",
                    "displaySequence": 1050,
                    "description": ""
                  }
                },
                "headline": {
                  "properties": {
                    "externalName": "Headline",
                    "groupName": "Basic",
                    "dataType": "string",
                    "isLocalizable": true,
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "minLength": 5,
                    "maxLength": 100,
                    "required": false,
                    "displayType": "textbox",
                    "displaySequence": 1060,
                    "description": ""
                  }
                },
                "featurespecs": {
                  "properties": {
                    "externalName": "Feature Specs",
                    "groupName": "Basic",
                    "dataType": "string",
                    "isLocalizable": true,
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "isCollection": true,
                    "required": false,
                    "displayType": "textbox",
                    "displaySequence": 1055,
                    "description": ""
                  }
                },
                "leadtime": {
                  "properties": {
                    "externalName": "Lead Time",
                    "groupName": "Basic",
                    "dataType": "integer",
                    "uomEntityInfo": [
                      {
                        "uomRelationshipName": "hasUnits",
                        "uomEntityType": "Time"
                      }
                    ],
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "range": [
                      {
                        "rangeTo": 365,
                        "rangeFrom": 2,
                        "isRangeToInclusive": false,
                        "isRangeFromInclusive": false
                      }
                    ],
                    "rangeTo": 365,
                    "rangeFrom": 2,
                    "isRangeToInclusive": false,
                    "isRangeFromInclusive": false,
                    "required": false,
                    "uomAllowedUnitSymbols": [
                      {
                        "unitSymbol": "days"
                      }
                    ],
                    "displayType": "numerictextbox",
                    "displaySequence": 1140,
                    "description": ""
                  }
                },
                "buytodemand": {
                  "properties": {
                    "externalName": "Buy to Demand",
                    "groupName": "Basic",
                    "dataType": "boolean",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "displayType": "boolean",
                    "displaySequence": 1150,
                    "description": ""
                  }
                },
                "msrp": {
                  "properties": {
                    "externalName": "MSRP",
                    "groupName": "Pricing",
                    "dataType": "decimal",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "precision": 2,
                    "required": false,
                    "displayType": "numerictextbox",
                    "displaySequence": 3050,
                    "description": ""
                  }
                },
                "size": {
                  "properties": {
                    "externalName": "Size",
                    "groupName": "Basic",
                    "dataType": "string",
                    "isReferenceType": true,
                    "referenceEntityInfo": [
                      {
                        "refRelationshipName": "hasReferenceTo",
                        "refEntityType": "sizes",
                        "thumbnail": "none",
                        "listTitle": "{entity.attributes.value}",
                        "listSubTitle": ""
                      }
                    ],
                    "valueMappingContext": [
                      "[Role]",
                      "[User Id]"
                    ],
                    "supportsValueMapping": true,
                    "valueMappingTypeName": "sizevaluemapping",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "displayType": "referencelist",
                    "displaySequence": 1090,
                    "description": ""
                  }
                },
                "uom": {
                  "properties": {
                    "externalName": "Unit of Measure",
                    "groupName": "Item Details",
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "displayType": "textbox",
                    "displaySequence": 2340,
                    "description": ""
                  }
                },
                "alternatevendor": {
                  "group": [
                    {
                      "vendorpartnumber": {
                        "properties": {
                          "externalName": "Part Number",
                          "groupName": "alternatevendor",
                          "dataType": "string",
                          "displayType": "textbox",
                          "displaySequence": 5040,
                          "description": ""
                        }
                      },
                      "vendorid": {
                        "properties": {
                          "externalName": "Vendor ID",
                          "groupName": "alternatevendor",
                          "isAttributeIdentifier": true,
                          "dataType": "string",
                          "displayType": "textbox",
                          "displaySequence": 5020,
                          "description": ""
                        }
                      },
                      "vendorcost": {
                        "properties": {
                          "externalName": "Vendor Price",
                          "groupName": "alternatevendor",
                          "dataType": "decimal",
                          "displayType": "numerictextbox",
                          "displaySequence": 5050,
                          "description": ""
                        }
                      },
                      "vendorname": {
                        "properties": {
                          "externalName": "Vendor Name",
                          "groupName": "alternatevendor",
                          "dataType": "string",
                          "displayType": "textbox",
                          "displaySequence": 5030,
                          "description": ""
                        }
                      },
                      "id": "5e624167-afc7-482e-af77-69ddadf584b5"
                    }
                  ],
                  "properties": {
                    "externalName": "Alternate Vendors",
                    "groupName": "Internal Information",
                    "dataType": "nested",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "displayType": "nestedgrid",
                    "displaySequence": 5010,
                    "description": ""
                  }
                },
                "categorymanager": {
                  "properties": {
                    "externalName": "Category Manager",
                    "groupName": "Item Details",
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "displayType": "textbox"
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
                    ],
                    "displaySequence": 1030,
                    "description": ""
                  }
                },
                "test": {
                  "properties": {
                    "externalName": "test in sku model",
                    "groupName": "Apparel & Footwear",
                    "dataType": "string",
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ]
                  }
                },
                "description": {
                  "properties": {
                    "externalName": "Description",
                    "groupName": "Basic",
                    "dataType": "string",
                    "isLocalizable": true,
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityDisplayModel",
                        "coalesceSourceName": "Germany",
                        "coalesceSourceType": "entityDisplayModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ],
                    "required": true,
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "displayType": "textarea"
                  }
                },
                "packaginginfo": {
                  "group": [
                    {
                      "packagingtype": {
                        "properties": {
                          "externalName": "Packaging Type",
                          "groupName": "packaginginfo",
                          "isAttributeIdentifier": true,
                          "dataType": "string",
                          "isReferenceType": true,
                          "referenceEntityInfo": [
                            {
                              "refRelationshipName": "hasReferenceTo",
                              "refEntityType": "packagingtype"
                            }
                          ]
                        }
                      },
                      "packagingwidth": {
                        "properties": {
                          "externalName": "Width",
                          "groupName": "packaginginfo",
                          "dataType": "decimal"
                        }
                      },
                      "packagingheight": {
                        "properties": {
                          "externalName": "Height",
                          "groupName": "packaginginfo",
                          "dataType": "decimal"
                        }
                      },
                      "packaginglength": {
                        "properties": {
                          "externalName": "Length",
                          "groupName": "packaginginfo",
                          "dataType": "decimal"
                        }
                      },
                      "packagingweight": {
                        "properties": {
                          "externalName": "Weight",
                          "groupName": "packaginginfo",
                          "dataType": "decimal"
                        }
                      },
                      "id": "b6891370-c659-4a88-9f4c-16d2969ce31d"
                    }
                  ],
                  "properties": {
                    "externalName": "Packaging Information",
                    "groupName": "Internal Information",
                    "dataType": "nested",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityDisplayModel",
                        "coalesceSourceName": "Germany",
                        "coalesceSourceType": "entityDisplayModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ],
                    "displayType": "nestedgrid"
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
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityDisplayModel",
                        "coalesceSourceName": "Germany",
                        "coalesceSourceType": "entityDisplayModel",
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
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityDisplayModel",
                        "coalesceSourceName": "Germany",
                        "coalesceSourceType": "entityDisplayModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ],
                    "precision": 2,
                    "range": [
                      {
                        "rangeTo": 100,
                        "rangeFrom": 0,
                        "isRangeToInclusive": false,
                        "isRangeFromInclusive": false
                      }
                    ],
                    "rangeTo": 100,
                    "rangeFrom": 0,
                    "isRangeToInclusive": false,
                    "isRangeFromInclusive": false,
                    "required": false,
                    "displayType": "textbox"
                  }
                },
                "reviewrank": {
                  "properties": {
                    "externalName": "Review Rank",
                    "groupName": "Ranking",
                    "dataType": "integer",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityManageModel",
                        "coalesceSourceName": "germany",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ]
                  }
                },
                "cost": {
                  "properties": {
                    "externalName": "Cost in Germany",
                    "groupName": "Pricing",
                    "dataType": "decimal",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityManageModel",
                        "coalesceSourceName": "germany",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ],
                    "precision": 2,
                    "required": false,
                    "contextCoalesce": [
                      {
                        "self": "self"
                      }
                    ],
                    "displayType": "numerictextbox",
                    "displaySequence": 3010,
                    "description": ""
                  }
                },
                "Germcost": {
                  "properties": {
                    "externalName": "GermCost Germany",
                    "groupName": "Pricing",
                    "dataType": "decimal",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityManageModel",
                        "coalesceSourceName": "germany",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ]
                  }
                },
                "accessoriesincluded": {
                  "properties": {
                    "externalName": "Accessories Included in Germany",
                    "groupName": "Apparel & Footwear",
                    "dataType": "string",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityManageModel",
                        "coalesceSourceName": "germany",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ]
                  }
                },
                "sleevetype": {
                  "properties": {
                    "externalName": "Sleeve Type Germany",
                    "groupName": "Item Details",
                    "dataType": "string",
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityManageModel",
                        "coalesceSourceName": "germany",
                        "coalesceSourceType": "entityManageModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ]
                  }
                },
                "countryoforigin": {
                  "properties": {
                    "externalName": "Country of Origin",
                    "groupName": "Item Details",
                    "dataType": "string",
                    "isReferenceType": true,
                    "referenceEntityInfo": [
                      {
                        "refRelationshipName": "hasReferenceTo",
                        "refEntityType": "country",
                        "thumbnail": "none",
                        "listTitle": "{entity.attributes.value}"
                      }
                    ],
                    "instanceCoalesce": [
                      {
                        "coalesceSourceId": "CNbjy8zWSH2GSDEdsVkPdQ_entityDisplayModel",
                        "coalesceSourceName": "Germany",
                        "coalesceSourceType": "entityDisplayModel",
                        "coalesceSourcePath": "country@@Germany"
                      }
                    ],
                    "displayType": "referencelist"
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
                          "isLocalizable": true,
                          "displayType": "textarea",
                          "displaySequence": 4040,
                          "description": ""
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
                      ],
                      "cardinality": [
                        {
                          "minimum": 1
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