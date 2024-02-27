---
title: Get Nearest Entity Variant Model
sidebar: rdp_sidebar
permalink: api_get_nearest_data_model_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/entitymodelservice/**getnearest** to get the nearest variant model for entity with type as productgroup, using a scenario. You can define multiple variant models for an entity type. The variant model that is applied while generating variants depends on the attributes of the entity and the context in which the variants are generated. In certain cases, there can be multiple variant models that can be applied to the entity. In order to find the nearest variant model that must be applied, you must use the **getnearest** API. This API returns the nearest model based on the best match of context key and enhancer attributes, taking into consideration the priority order specified in "getnearestPath". 

## Scenario

To get the nearest entity variant model based on the specified attributes and context.

{% include snippets/header.html %}

## Request

To get the nearest entity variant model, you can use the REST API {TenantURL or ID}/api/entitymodelservice/getnearest. In the request, send the following details:

In query object,

* contexts - Specify the context keys and values for which you wish to fetch the variant model. You must populate all the context keys in the context section of the entitymodel object. In case of any missing keys, _DEFAULT must be passed.
* filters->typesCriterion - Specify as entityVariantModel.
* options->getnearestPath - Specify the context keys in the order of priority - low to high. 
* options->getnearestReturnAll - true: Returns all the matching models.<br>
false: Returns only the best matching model.

The following example demonstrates a sample JSON request to get the nearest variant model.

<pre><code>
POST **{{site.data.rdp_glossary.getnearest}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "entityType": "productgroup",
          "country": "_DEFAULT",
          "channel": "_DEFAULT",
          "itemType": "Refurbished",
          "productclassification": "Product classification>>Apparel & Footwear>>Clothing>>Blazers",
          "webclassification": "_DEFAULT",
          "gdsnclassification": "_DEFAULT"
        }
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"entityVariantModel"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      <span style="background-color: #FFFF00">"getnearestPath": "country>>channel>>itemType>>$path(productclassification)>>$path(gdsnclassification)>>$path(webclassification)",</span>
      <span style="background-color: #FFFF00">"getnearestReturnAll": false</span>
    }
  }
}
</code></pre>

## Response

If the API is successfully executed, the following response is received :

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "55f0dd0d-09d3-49b2-af14-07ba05f85cda"
  },
  "response": {
    "entityModels": [
      {
        "id": "productgroupC_entityVariantModel",
        "name": "style",
        "type": "entityVariantModel",
        "domain": "generic",
        "data": {
          "contexts": [
            {
              "context": {
                "entityType": "productgroup",
                "country": "_DEFAULT",
                "channel": "_DEFAULT",
                "itemType": "Refurbished",
                "productclassification": "Product classification>>Apparel & Footwear>>Clothing>>Blazers",
                "webclassification": "_DEFAULT",
                "gdsnclassification": "_DEFAULT"
              },
              "properties": {
                "levels": [
                  {
                    "levelNumber": 1,
                    "targetEntityType": "product",
                    "targetRelationship": "ischildof",
                    "targetRelationshipOwnership": "whereused",
                    "dimensionAttributes": [
                      {
                        "name": "color",
                        "mandatory": true
                      },
                      {
                        "name": "size",
                        "mandatory": true
                      }
                    ]
                  },
                  {
                    "levelNumber": 2,
                    "targetEntityType": "sku",
                    "targetRelationship": "ischildof",
                    "targetRelationshipOwnership": "whereused",
                    "dimensionAttributes": [
                      {
                        "name": "soldcount",
                        "mandatory": true
                      },
                      {
                        "name": "sleevetype",
                        "mandatory": true
                      }
                    ]
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

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.