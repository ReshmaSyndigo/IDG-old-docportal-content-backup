---
title: Create Display Model 
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario60.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create display model, using a scenario.

## Scenario

To create display model for "SKU" entity type.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:

In the [entity model](api_display_model.html) object, 
* Specify the id as "sku_entityDisplayModel", name as "sku", and type as "entityDisplayModel". 
* Specify the display type and sequence for attributes and relationships.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "sku_entityDisplayModel",</span>
    <span style="background-color: #FFFF00">"name": "sku",</span>
    <span style="background-color: #FFFF00">"type": "entityDisplayModel",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        <span style="background-color: #FFFF00">"mdmid": {</span>
          "properties": {
            <span style="background-color: #FFFF00">"displayType": "textbox",</span>
            <span style="background-color: #FFFF00">"displaySequence": "1010",</span>
            "description": ""
          }
        },
        "mdmname": {
          "properties": {
            "displayType": "textbox",
            "displaySequence": "1020",
            "description": ""
          }
        },
        "productfeatures": {
          "properties": {
            "displayType": "textarea",
            "displaySequence": "1050",
            "description": ""
          }
        },
        "headline": {
          "properties": {
            "displayType": "textbox",
            "displaySequence": "1060",
            "description": ""
          }
        },
        "featurespecs": {
          "properties": {
            "displayType": "textbox",
            "displaySequence": "1055",
            "description": ""
          }
        },
        "leadtime": {
          "properties": {
            "displayType": "numerictextbox",
            "displaySequence": "1140",
            "description": ""
          }
        },
        "buytodemand": {
          "properties": {
            "displayType": "boolean",
            "displaySequence": "1150",
            "description": ""
          }
        },
        "cost": {
          "properties": {
            "displayType": "numerictextbox",
            "displaySequence": "3010",
            "description": ""
          }
        },
        "msrp": {
          "properties": {
            "displayType": "numerictextbox",
            "displaySequence": "3050",
            "description": ""
          }
        },
        "size": {
          "properties": {
            "displayType": "referencelist",
            "displaySequence": "1090",
            "description": "",
            "referenceEntityInfo": [
              {
                "thumbnail": "none",
                "listTitle": "{entity.attributes.value}",
                "listSubTitle": ""
              }
            ]
          }
        },
        "uom": {
          "properties": {
            "displayType": "textbox",
            "displaySequence": "2340",
            "description": ""
          }
        },
        "alternatevendor": {
          "properties": {
            "displayType": "nestedgrid",
            "displaySequence": "5010",
            "description": ""
          },
          "group": [
            {
              "vendorpartnumber": {
                "properties": {
                  "displayType": "textbox",
                  "displaySequence": "5040",
                  "description": ""
                }
              },
              "vendorid": {
                "properties": {
                  "displayType": "textbox",
                  "displaySequence": "5020",
                  "description": ""
                }
              },
              "vendorcost": {
                "properties": {
                  "displayType": "numerictextbox",
                  "displaySequence": "5050",
                  "description": ""
                }
              },
              "vendorname": {
                "properties": {
                  "displayType": "textbox",
                  "displaySequence": "5030",
                  "description": ""
                }
              }
            }
          ]
        },
        "productclassification": {
          "properties": {
            "displayType": "path",
            "displaySequence": "1020",
            "description": "",
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
            "displayType": "referencelist",
            "displaySequence": "1030",
            "description": "",
            "isReferenceType": true,
            "referenceEntityInfo": [
              {
                "refRelationshipName": "hasReferenceTo",
                "refEntityType": "itemtype"
              }
            ]
          }
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            "properties": {
              "externalName": "Child of",
              "relationshipType": "Composition",
              "relationshipOwnership": "owned",
              "relatedEntityInfo": [
                {
                  "relEntityType": "product"
                }
              ]
            },
            <span style="background-color: #FFFF00">"attributes": {</span>
              <span style="background-color: #FFFF00">"linkdescription": {</span>
                "properties": {
                  <span style="background-color: #FFFF00">"displayType": "textarea",</span>
                  <span style="background-color: #FFFF00">"displaySequence": "4040",</span>
                  "description": ""
                }
              }
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Response

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre>
<code>
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
          "message": "Submitted entityDisplayModel for create with Id sku_entityDisplayModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityDisplayModel",
            "create",
            "sku_entityDisplayModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the created display model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* After creating the model, when you [create an entity](api_app_create_entity.html) the fields in the entity are displayed as defined in the display model .

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.