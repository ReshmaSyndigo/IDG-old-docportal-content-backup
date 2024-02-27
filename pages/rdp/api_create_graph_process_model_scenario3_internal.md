---
title: Create Graph Process Model to Link Image to SKU
sidebar: rdp_sidebar
permalink: api_create_graph_process_model_scenario3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a graph process model for linking an image to SKU, using a scenario.

## Scenario

To create a graph process model for linking an image to SKU to meet the following requirement:

* Create a match configuration to match imageFileName to the names specified in primary image and alternative image for SKUs, if any. Based on the match perform the following actions:

| Result | Possible Action |
|----------|-------------|
| No image Found | Do Nothing. |
| Single match Found | Link existing SKU entity to the image entity. |
| Multiple matches Found | Error out.|

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_graph_process_model.html) object, fill the following details:
	* id: image_hasimages_sku_graphProcessModel
	* name: image_hasimages_sku
	* type: graphProcessModel
	* properties: In the properties, specify the required match actions for noMatchResult, singleMatchResult, and multiMatchResult. Note that matchRulesOperator is not specified, implying that the match continues even if a match is found for the specific attributeMaps in the sequence.
	* data: Is blank, since we do not wish to copy attributes from image to SKU.

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
    <span style="background-color: #FFFF00">"id": "image_hasimages_sku_graphProcessModel",</span>
    <span style="background-color: #FFFF00">"name": "image_hasimages_sku",</span>
    <span style="background-color: #FFFF00">"type": "graphProcessModel",</span>
    "domain": "generic",
    "properties": {
      "defaultValueSource": "internal",
      "defaultValueLocale": "en-US",
      "graphProcessPath": "image_hasimages_sku",
      "matchRules": [
        {
          "seq": 1,
          "matchType": "attributeBased",
          "attributeMaps": [
            {
              "property_originalurl": "primaryimageurl"
            }
          ],
          <span style="background-color: #FFFF00">"noMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "DoNothing"
                }
              ]
            }
          ],
          <span style="background-color: #FFFF00">"singleMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "AddTargetRelationship",
                  "setRelAttrValues": [
                    {
                      "isprimary": "true"
                    }
                  ]
                }
              ]
            }
          ],
          <span style="background-color: #FFFF00">"multiMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "AddTargetRelationship",
                  "setRelAttrValues": [
                    {
                      "isprimary": "true"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "seq": 2,
          "matchType": "attributeBased",
          "attributeMaps": [
            {
              "property_originalfilename": "primaryimage"
            }
          ],
          <span style="background-color: #FFFF00">"noMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "DoNothing"
                }
              ]
            }
          ],
          <span style="background-color: #FFFF00">"singleMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "AddTargetRelationship",
                  "setRelAttrValues": [
                    {
                      "isprimary": "true"
                    }
                  ]
                }
              ]
            }
          ],
          <span style="background-color: #FFFF00">"multiMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "AddTargetRelationship",
                  "setRelAttrValues": [
                    {
                      "isprimary": "true"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "seq": 3,
          "matchType": "attributeBased",
          "attributeMaps": [
            {
              "property_originalurl": "alternateimagesurls"
            }
          ],
          <span style="background-color: #FFFF00">"noMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "DoNothing"
                }
              ]
            }
          ],
          <span style="background-color: #FFFF00">"singleMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "AddTargetRelationship",
                  "setRelAttrValues": [
                    {
                      "isprimary": "false"
                    }
                  ]
                }
              ]
            }
          ],
          <span style="background-color: #FFFF00">"multiMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "AddTargetRelationship",
                  "setRelAttrValues": [
                    {
                      "isprimary": "false"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "seq": 4,
          "matchType": "attributeBased",
          "attributeMaps": [
            {
              "property_originalfilename": "alternateimages"
            }
          ],
          <span style="background-color: #FFFF00">"noMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "DoNothing"
                }
              ]
            }
          ],
          <span style="background-color: #FFFF00">"singleMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "AddTargetRelationship",
                  "setRelAttrValues": [
                    {
                      "isprimary": "false"
                    }
                  ]
                }
              ]
            }
          ],
          <span style="background-color: #FFFF00">"multiMatchResult": [</span>
            {
              "actions": [
                {
                  "actionName": "AddTargetRelationship",
                  "setRelAttrValues": [
                    {
                      "isprimary": "false"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    "data": {}
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
          "message": "Submitted graphProcessModel for create with Id image_hasimages_sku_graphProcessModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "graphProcessModel",
            "create",
            "image_hasimages_sku_graphProcessModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* Use the [Entity Graph Service](api_entity_graph_service.html) to link image to SKU using this model and verify the relationship details after linking. See [Link Image to a SKU](api_create_link_scenario3.html), for a sample scenario.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.