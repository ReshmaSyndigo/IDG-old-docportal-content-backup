---
title: Define Attribute for UOM via Manage Model
sidebar: rdp_sidebar
permalink: api_define_attribute_uom_manage_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can define attributes for UOM via Manage Model by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API. 

## Scenario

Consider that you wish to define attribute for **Weight** UOM via Entity Manage model.

{% include snippets/header.html %}

## Request

To define attributes for UOM via Manage Model, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* unitname – Indicates the name of the UOM. This is a mandatory parameter. The "isExternalName" parameter must be set to "true" to avoid any duplicate UOM values. 
*	unitsymbol: Defines the standard symbol used for UOM.
* formula – Indicates the formula used to convert the UOM value into the base UOM. The computation is based on the BODMAS rule.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "id": "uomWeight_entityManageModel",
  "name": "uomweight",
  "type": "entityManageModel",
  "domain": "generic",
  "data": {
    "attributes": {
      "unitname": {
        "properties": {
          "externalName": "Unit Name",
          "description": "This determines the name of the UOM",
          "groupName": "Basic",
          "isExternalName": true,
          "dataType": "string"
        }
      },
      "unitsymbol": {
        "properties": {
          "externalName": "Unit Symbol",
          "description": "This is the industry standard symbol used for the UOM",
          "groupName": "Basic",
          "isEntityIdentifier": true,
          "dataType": "string"
        }
      },
      "formula": {
        "properties": {
          "isUomFormula": true,
          "externalName": "Formula",
          "description": "This is the formula used to convert the UOM value into the base UOM. The argument of base unit is used in the formula as {0}*500",
          "groupName": "Basic",
          "dataType": "string"
        }
      }
    }
  }
}
</code>
</pre>

## Response

Upon successfully submitting the request, the following response is received from the API:

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "params": {},
        "requestId": "c53df3ca-4b4c-453a-93a6-8425dbfa3df2"
    },
    "response": {
        "entityModels": [
            {
                "id": "uomweight_entityManageModel",
                "name": "uomweight",
                "type": "entityManageModel",
                "domain": "generic",
                "data": {
                    "attributes": {
                        "unitname": {
                            "properties": {
                                "externalName": "Unit Name",
                                "groupName": "Basic",
                                "isExternalName": true,
                                "dataType": "string"
                            }
                        },
                        "unitsymbol": {
                            "properties": {
                                "externalName": "Unit Symbol",
                                "groupName": "Basic",
                                "isEntityIdentifier": true,
                                "dataType": "string"
                            }
                        },
                        "formula": {
                            "properties": {
                                "externalName": "Formula",
                                "groupName": "Basic",
                                "isUomFormula": true,
                                "dataType": "string"
                            }
                        },
                        "baseunitsymbol": {
                            "properties": {
                                "externalName": "Base Unit Symbol",
                                "groupName": "Basic",
                                "isBaseUomSymbol": true,
                                "dataType": "string"
                            }
                        }
                    }
                }
            }
        ],
        "status": "success",
        "totalRecords": 1
    }
}
</code>
</pre>

Verify the Define Atribute for UOM via Manage Model
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.