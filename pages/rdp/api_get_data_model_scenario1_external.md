---
title: "Get Model using Model Type and Id"
sidebar: rdp_sidebar
permalink: api_get_data_model_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatamodel}}** to get a model based on the model type and Id, using a scenario. 

## Scenario

To get all attributes and relationships of manage model for "sku" entity type. You can use a similar JSON structure to get other models such as Validation model. To get validation model, specify the type as "entityValidationModel".

{% include snippets/header.html %}

## Request

To get the above model, you can use the REST API {{site.data.rdp_glossary.getdatamodel}}. In the request send the following details:

* query -> Id: Specify the model Id based on the entity type - "sku_entityManageModel".
* query -> filters -> typesCriterion: Specify the entity model type as "entityManageModel"
* query -> fields -> attributes: Specify "_ALL" attributes
* query -> fields -> relationships: Specify "_ALL" relationships

{% include callout.html content="**Notes**: <br/>
* If you do not specify **Id** and only specify **typesCriterion** as **entityManageModel**, then the response returns all the entity manage models.
* To get the entity validation model, specify the validation model Id based on the entity type as **sku_entityValidationModel** and the typesCriterion as  **entityValidationModel**. Similarly, you can get the **sku_entityDisplayModel** and **sku_entityDefaultValuesModel** by specifying the model Id and typesCriterion.
" type="primary" %}

<pre><code>
POST **{{site.data.rdp_glossary.getdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "sku_entityManageModel",</span>
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "entityManageModel"
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
</code></pre>

## Response

Returns all the attributes and relationships of the manage model for the "sku" entity type. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "dcf845fc-7b6a-48c6-ba05-7026d98d86a2"
  },
  "response": {
    "entityModels": [
      {
        "id": "sku_entityManageModel",
        "name": "sku",
        "type": "entityManageModel",
        "domain": "generic",
        "source": "internal",
        "properties": {
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com",
          "createdDate": "2020-02-12T05:01:15.588-0600",
          "modifiedDate": "2020-02-12T05:01:15.588-0600"
        },
        "data": {
          "attributes": {
            "productid": {
              "properties": {
                "dataType": "string"
              }
            },
            "channeldescription": {
              "properties": {
                "dataType": "string"
              }
            },
            "createdate": {
              "properties": {
                "dataType": "datetime"
              }
            },
            "discount": {
              "properties": {
                "dataType": "decimal"
              }
            },
            "categorymanager": {
              "properties": {
                "dataType": "string"
              }
            },
            "startdate": {
              "properties": {
                "dataType": "date"
              }
            },
            "internalavailabilitydate": {
              "properties": {
                "dataType": "date"
              }
            },
            "uom": {
              "properties": {
                "dataType": "string"
              }
            },
            "skustatus": {
              "properties": {
                "dataType": "string",
                "isReferenceType": true,
                "referenceEntityInfo": [
                  {
                    "refEntityType": "skustatus",
                    "isReferenceType": true,
                    "refRelationshipName": "hasReferenceTo"
                  }
                ]
              }
            }
          },
          "relationships": {
            "hasimages": [
              {
                "attributes": {
                  "isprimary": {
                    "properties": {
                      "dataType": "boolean"
                    }
                  },
                  "whereusedexternalname": {
                    "properties": {
                      "externalName": "External Name",
                      "dataType": "string"
                    }
                  }
                },
                "id": "hasimagesowned",
                "properties": {
                  "externalName": "Images",
                  "relationshipType": "association",
                  "relationshipOwnership": "owned",
                  "relatedEntityInfo": [
                    {
                      "relEntityType": "image"
                    }
                  ]
                }
              },
              {
                "attributes": {
                  "isprimary": {
                    "properties": {}
                  },
                  "externalName": {
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "internal",
                        "id": "87488fbf-b430-4df9-9290-81c844ba2eae",
                        "value": "Images"
                      }
                    ],
                    "properties": {}
                  },
                  "whereUsedExternalName": {
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "internal",
                        "id": "28b5b2ac-cf98-4734-adb3-2766ae21060c",
                        "value": "Child Image"
                      }
                    ],
                    "properties": {}
                  }
                },
                "id": "hasimages",
                "properties": {
                  "externalName": "Images",
                  "whereUsedExternalName": "Child Image"
                }
              }
            ],
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
            ],
            "crosssell": [
              {
                "attributes": {},
                "id": "crosssellwhereused",
                "properties": {
                  "externalName": "Crosssell Reference",
                  "relationshipType": "Association",
                  "relationshipOwnership": "whereused",
                  "relatedEntityInfo": [
                    {
                      "relEntityType": "bundle"
                    }
                  ]
                }
              },
              {
                "attributes": {},
                "id": "crosssellwhereused",
                "properties": {
                  "externalName": "Crosssell Reference",
                  "relationshipType": "Association",
                  "relationshipOwnership": "whereused",
                  "relatedEntityInfo": [
                    {
                      "relEntityType": "sku"
                    }
                  ]
                }
              },
              {
                "attributes": {
                  "linkdescription": {
                    "properties": {
                      "isLocalizable": true,
                      "dataType": "string"
                    }
                  },
                  "priority": {
                    "properties": {
                      "dataType": "integer"
                    }
                  },
                  "efffrom": {
                    "properties": {
                      "dataType": "date"
                    }
                  },
                  "effto": {
                    "properties": {
                      "dataType": "date"
                    }
                  }
                },
                "id": "crosssellowned",
                "properties": {
                  "externalName": "CrossSell",
                  "relationshipType": "Association",
                  "relationshipOwnership": "owned",
                  "relatedEntityInfo": [
                    {
                      "relEntityType": "bundle"
                    }
                  ]
                }
              },
              {
                "attributes": {
                  "linkdescription": {
                    "properties": {
                      "isLocalizable": true,
                      "dataType": "string"
                    }
                  },
                  "priority": {
                    "properties": {
                      "dataType": "integer"
                    }
                  },
                  "efffrom": {
                    "properties": {
                      "dataType": "date"
                    }
                  },
                  "effto": {
                    "properties": {
                      "dataType": "date"
                    }
                  }
                },
                "id": "crosssellowned",
                "properties": {
                  "externalName": "CrossSell",
                  "relationshipType": "Association",
                  "relationshipOwnership": "owned",
                  "relatedEntityInfo": [
                    {
                      "relEntityType": "sku"
                    }
                  ]
                }
              }
            ]
          }
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