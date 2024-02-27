---
title: Create Graph Process Models to Link Nodes
sidebar: rdp_sidebar
permalink: api_create_graph_process_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create a model to link nodes using [Graph Process Model](api_graph_process_model.html):

* [Create Graph Process Model to Rollup SKU to Product](api_create_graph_process_model_scenario1.html)
* [Create Graph Process Model to Link SKU to Image](api_create_graph_process_model_scenario2.html)
* [Create Graph Process Model to Link Image to SKU](api_create_graph_process_model_scenario3.html)

## Request

POST {{site.data.rdp_glossary.createdatamodel}}

**Parameters**: The following table lists the parameters of the JSON request to create a data model:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entityModel | Yes | Indicates the details of the entity model to be created. See [Data Model Object Structure](api_graph_process_model.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to create a graph process model "sku_ischildof_product" to rollup SKU to Product. 

{% include callout.html content="**Note**: You must specify the **Taxonomy** with its external name as defined in your data model. See [Get Data Model](api_get_data_model.html)
" type="primary" %}


<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    "id": "sku_ischildof_product_graphProcessModel",
    "name": "sku_ischildof_product",
    "type": "graphProcessModel",
    "domain": "generic",
    "properties": {
      "defaultValueSource": "internal",
      "defaultValueLocale": "en-US",
      "graphProcessPath": "sku_ischildof_product",
      "matchRulesOperator": "or",
      "matchRules": [
        {
          "seq": 1,
          "matchType": "attributeBased",
          "attributeMaps": [
            {
              "productid": "productid"
            }
          ],
          "noMatchResult": [
            {
              "actions": [
                {
                  "actionName": "Create"
                },
                {
                  "actionName": "AddSourceRelationship"
                },
                {
                  "actionName": "CopyData"
                }
              ]
            }
          ],
          "singleMatchResult": [
            {
              "actions": [
                {
                  "actionName": "AddSourceRelationship"
                },
                {
                  "actionName": "CopyData"
                }
              ]
            }
          ],
          "multiMatchResult": [
            {
              "actions": [
                {
                  "actionName": "Error"
                }
              ]
            }
          ]
        }
      ],
      "relExists": [
        {
          "actions": [
            {
              "actionName": "CopyData"
            }
          ]
        }
      ]
    },
    "data": {
      "attributes": {
        "productid": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "assemblyrequired": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "availableunits": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "startdate": {
          "properties": {
            "strategy": "min"
          }
        },
        "enddate": {
          "properties": {
            "strategy": "max"
          }
        },
        "backordereligible": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "brand": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "cost": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "buytodemand": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "condition": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "currency": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "daystoreturn": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "discount": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "dollarmargin": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "dropshipindicator": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "featurespecs": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "headline": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "subhead": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "description": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "color": {
          "properties": {
            "strategy": "aggregate"
          }
        },
        "size": {
          "properties": {
            "strategy": "aggregate"
          }
        },
        "upc": {
          "properties": {
            "strategy": "aggregate"
          }
        },
        "alternatevendor": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "internalavailabilitydate": {
          "properties": {
            "strategy": "min"
          }
        },
        "registered": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "trademark": {
          "properties": {
            "strategy": "copyWhenEmpty"
          }
        },
        "setupgoaldate": {
          "properties": {
            "strategy": "min"
          }
        },
        "setuppriority": {
          "properties": {
            "strategy": "min"
          }
        }
      },
      "relationships": {
        "hasimages": [
          {
            "properties": {
              "externalName": "Images",
              "strategy": "checkHistoryAndCopy",
              "relationshipType": "association",
              "relatedEntityInfo": [
                {
                  "relEntityType": "image"
                }
              ]
            }
          }
        ],
        "hasvideos": [
          {
            "properties": {
              "externalName": "videos",
              "strategy": "checkHistoryAndCopy",
              "relationshipType": "association",
              "relatedEntityInfo": [
                {
                  "relEntityType": "video"
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
          "properties": {
            "includeAllAttributes": true
          }
        }
      ]
    }
  }
}
</code></pre> 

**Response**:
<pre><code>
{
    "request": {
        "returnRequest": false,
        "params": {},
        "requestId": "4d0a056e-3568-48ce-a685-40c586ea010e"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "message": "Entity has been submitted for create with entity Id : sku_ischildof_product_graphProcessModel. Please check back after 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre> 

Verify the created data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* Create a link between SKU and Product to verify the details. See [Rollup SKU to Product](api_create_link_scenario1.html), for a sample scenario.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.