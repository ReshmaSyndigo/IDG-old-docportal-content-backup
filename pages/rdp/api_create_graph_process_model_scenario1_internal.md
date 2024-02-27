---
title: Create Graph Process Model to Rollup SKU to Product
sidebar: rdp_sidebar
permalink: api_create_graph_process_model_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a graph process model for rolling up SKU to Product, using a scenario.

## Scenario

To create a graph process model for rolling up SKU to Product to meet following requirement:

* Create a match configuration to match either ProductGroup or a set of attributes in Product. Based on the match perform the following actions:

| Result | Possible Action |
|----------|-------------|
| No Product Found | Create a Product entity and link to the SKU entity, merge the required attributes. |
| Single Product Found | Link existing Product entity to the SKU entity, merge the required attributes. |
| Multiple Targets Found | Error out.|

* Copy certain attributes from SKU to Product when the value of that attribute in Product is empty

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

* entityModel: In the [entity model](api_graph_process_model.html) object, fill the following details:
	* id: sku_ischildof_product_graphProcessModel
	* name: sku_ischildof_product
	* type: graphProcessModel
	* properties: In the properties, specify matchRulesOperator as "or" indicating that the match must search for the set of attributes only when match for productgroup is not found. Specify the required match actions for noMatchResult, singleMatchResult, and multiMatchResult.
	* data: Specify the attributes to be copied from SKU to product with the strategy as "copyWhenEmpty". Similarly, specify the attributes to be copied with the minimum value and maximum value, and specify the attributes that have to be aggregated. 
  * context: You must specify the "Taxonomy" with its external name as defined in your data model. See [Get Data Model](api_get_data_model.html).

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
    <span style="background-color: #FFFF00">"id": "sku_ischildof_product_graphProcessModel",</span>
    <span style="background-color: #FFFF00">"name": "sku_ischildof_product",</span>
    <span style="background-color: #FFFF00">"type": "graphProcessModel",</span>
    "domain": "generic",
    "properties": {
      "defaultValueSource": "internal",
      "defaultValueLocale": "en-US",
      "graphProcessPath": "sku_ischildof_product",
      <span style="background-color: #FFFF00">"matchRulesOperator": "or",</span>
      "matchRules": [
        {
          "seq": 1,
          "matchType": "attributeBased",
          "attributeMaps": [
            {
              "productid": "productid"
            }
          ],
          <span style="background-color: #FFFF00">"noMatchResult": [</span>
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
          <span style="background-color: #FFFF00">"singleMatchResult": [</span>
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
          <span style="background-color: #FFFF00">"multiMatchResult": [</span>
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
      <span style="background-color: #FFFF00">"attributes": {</span>
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
            <span style="background-color: #FFFF00">"taxonomy": "Master Taxonomy",</span>
            "classification": "_ALL"
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

## Response

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3ce5b682-48ce-4dd1-97c9-5352fffffc9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted graphProcessModel for create with Id sku_ischildof_product_graphProcessModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "graphProcessModel",
            "create",
            "sku_ischildof_product_graphProcessModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).
<!-- * You can check if the attributes with "copyWhenEmpty" strategy defined in the graph process model are copied from SKU to product, in the UI. -->
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* Use the [Entity Graph Service](api_entity_graph_service.html) to link SKU to Product using this model and verify the relationship details after linking. See [Rollup SKU to Product](api_create_link_scenario1.html), for a sample scenario.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.