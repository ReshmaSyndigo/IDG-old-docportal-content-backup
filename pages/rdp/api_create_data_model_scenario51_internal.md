---
title: Create Manage Model for EntityType
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario51.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {{site.data.rdp_glossary.createdatamodel}} to create a **manage model** for sku entity type where trust matrix is configured, using a scenario.

## Scenario

To create **sku** entity type manage model with few attributes and relationships, where trust matrix is defined. 

{% include snippets/header.html %}

## Request

To create the above data model, use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
In the [entityModel](api_manage_model.html) object, 
* Specify the id, name, type and domain. 
* Specify the required attributes and relationships.
* Specify the enhancer attributes, productclassification and itemtype.
* Specify the Trust Matrix definition at Primary Context level and Attribute level where Ice Cat and Brand Bank are the external sources. User is the external source for user-provided values.

<pre>
<code>
{
  "mergeMatrix": [
    {
      "mergeSequence": "Ice Cat>>User>>Brand Bank",
      "ignoreMergeMatrix": false,
      "aggregate" : true
    }
  ]
}
</code>
</pre>

See [Trust Matrix](/{{site.data.rdp_links_version.APP}}/rdp_feature_trust_matrix.html) for more information.

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
    <span style="background-color: #FFFF00">"id": "sku_entityManageModel",</span>
    <span style="background-color: #FFFF00">"name": "sku",</span>
    <span style="background-color: #FFFF00">"type": "entityManageModel",</span>
    "domain": "generic",
    "properties": {
      "mergeMatrix": [
        {
          "mergeSequence": "Brand Bank>>Ice Cat"
        }
      ]
    },
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "description": {
          "properties": {
            "externalName": "Description",
            "groupName": "Basic",
            "dataType": "string",
            "isLocalizable": true,
            <span style="background-color: #FFFF00">"mergeMatrix": [</span>
              {
                "mergeSequence": "Brand Bank>>Ice Cat",
                "ignoreMergeMatrix": false
              }
            ]
          }
        },
        "availableunits": {
          "properties": {
            "externalName": "Available Units",
            "groupName": "Item Details",
            "dataType": "string",
            "mergeMatrix": [
              {
                "mergeSequence": "Brand Bank>>Ice Cat",
                "ignoreMergeMatrix": false
              }
            ]
          }
        },
        "brand": {
          "properties": {
            "externalName": "Brand",
            "groupName": "Item Details",
            "dataType": "string",
            "mergeMatrix": [
              {
                "ignoreMergeMatrix": false
              }
            ]
          }
        },
        "productfeatures": {
          "properties": {
            "externalName": "Product Features",
            "groupName": "Basic",
            "dataType": "string",
            "isLocalizable": true,
            "mergeMatrix": [
              {
                "mergeSequence": "Brand Bank>>Ice Cat",
                "ignoreMergeMatrix": false
              }
            ]
          }
        },
        "suppliername": {
          "properties": {
            "externalName": "Supplier Name",
            "groupName": "Basic",
            "dataType": "string",
            "mergeMatrix": [
              {
                "mergeSequence": "Brand Bank>>Ice Cat"
              }
            ]
          }
        },
        "alternatevendor": {
          "group": [
            {
              "vendorcost": {
                "properties": {
                  "externalName": "Vendor Price",
                  "groupName": "alternatevendor",
                  "isLocalizable": false,
                  "dataType": "decimal"
                }
              },
              "vendorid": {
                "properties": {
                  "externalName": "Vendor ID",
                  "groupName": "alternatevendor",
                  "isAttributeIdentifier": true,
                  "isLocalizable": false,
                  "dataType": "string"
                }
              },
              "vendorpartnumber": {
                "properties": {
                  "externalName": "Part Number",
                  "groupName": "alternatevendor",
                  "isLocalizable": false,
                  "dataType": "string"
                }
              }
            }
          ],
          "properties": {
            "externalName": "Alternate Vendors",
            "groupName": "Internal Information",
            "isLocalizable": false,
            "dataType": "nested",
            "mergeMatrix": [
              {
                "mergeSequence": "Brand Bank>>Ice Cat",
                "ignoreMergeMatrix": false
              }
            ]
          }
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        "ischildof": [
          {
            "properties": {
              "externalName": "Child of",
              "relationshipType": "Composition",
              "relationshipOwnership": "owned",
              "relatedEntityInfo": [
                {
                  "relEntityType": "product"
                }
              ],
              <span style="background-color: #FFFF00">"mergeMatrix": [</span>
                {
                  "mergeSequence": "Brand Bank>>Ice Cat",
                  "ignoreMergeMatrix": false
                }
              ]
            },
            "attributes": {
              "linkdescription": {
                "properties": {
                  "externalName": "Link Description",
                  "groupName": "Relationship Attributes",
                  "dataType": "string",
                  "isLocalizable": true,
                  "mergeMatrix": [
                    {
                      "mergeSequence": "Brand Bank>>Ice Cat",
                      "ignoreMergeMatrix": false
                    }
                  ]
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
          "message": "Submitted entityManageModel for create with Id sku_entityManageModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityManageModel",
            "create",
            "sku_entityManageModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the created manage model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).
* After creating the model, you can [create an entity](api_app_create_entity.html) using this model for the specific entity type.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.