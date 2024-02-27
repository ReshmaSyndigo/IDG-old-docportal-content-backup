---
title: Populate Default UOM Value for UOM Attribute 
sidebar: rdp_sidebar
permalink: api_populate_default_uom_value_attribute.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can populate default UOM values for UOM attribute by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API.

## Scenario

Consider that you wish to set "kg" as a default UOM for "Bag Weight" attribute.

{% include snippets/header.html %}

## Request

To populate default UOM value for UOM attribute, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* defaultuom: Displays the default UOM. In this scenario, "kg" is the default UOM for "Bag Weight" attribute.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
    "params": {
        "query": {
        	"id":"sku_entityDefaultValuesModel",
            "filters": {
                "typesCriterion": [
                    "entityDefaultValuesModel"
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

Upon successfully submitting the request, the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "2b2963a3-6248-458b-822b-6d3242519119"
  },
  "response": {
    "entityModels": [
      {
        "id": "sku_entityDefaultValuesModel",
        "name": "sku",
        "type": "entityDefaultValuesModel",
        "domain": "generic",
        "source": "internal",
        },
        "data": {
          "attributes": {
            "bagweight": {
              "properties": {
                "defaultUom": "kg"
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
</code></pre> 

Verify the default UOM value:

* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created UOM Type. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.