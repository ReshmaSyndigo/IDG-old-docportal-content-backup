---
title: Link UOM Attribute to SKU
sidebar: rdp_sidebar
permalink: api_link_uom_type_sku.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can link a UOM attribute to a SKU by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API.

## Scenario

Consider that you wish to link **Bag Weight** UOM attribute to SKU.

{% include snippets/header.html %}

## Request

To link UOM attribute to SKU, use REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* uomEntityInfo: Indicates the relationship name and the UOM Entity Type. 

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
    "params": {
        "query": {
        	"id":"sku_entityManageModel",
            "filters": {
                "typesCriterion": [
                    "entityManageModel"
                ]
            }
        },
        "options": {},
        "fields": {
            "attributes": [
                "bagweight"
            ],
            "relationships": [
            ]
        }
    }
}
</code>
</pre>

## Response

Upon submitting the request successfully, the following response is received from get entity API:

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "params": {},
        "requestId": "7c5fac4d-67f6-442e-9196-10ce87f1d9ca"
    },
    "response": {
        "entityModels": [
            {
                "id": "sku_entityManageModel",
                "name": "sku",
                "type": "entityManageModel",
                "domain": "generic",
                "source": "internal",
                },
                "data": {
                    "attributes": {
                        "bagweight": {
                            "properties": {
                                "dataType": "decimal",
                                "uomEntityInfo": [
                                    {
                                        "uomRelationshipName": "hasUnits",
                                        "uomEntityType": "uomWeight"
                                    }
                                ]
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

Verify the linked UOM Type to SKU
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.