---
title: Add UOM Validation via Model 
sidebar: rdp_sidebar
permalink: api_add_uom_validation_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can add UOM validation via Validation Model by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API. 

## Scenario

Consider that you wish to add UOM validation for the allowed unit symbols (""m", "dm", "cm", "µm", "mm", "hm", and "km") via Validation Model.

{% include snippets/header.html %}

## Request

To add UOM validation via Validation Model, use the REST API ***{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details. 
* uomAllowedUnitSymbols: Indicates the user preferred allowed UOMs.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "id": "sku_entityValidationModel",
      "filters": {
        "typesCriterion": [
          "entityValidationModel"
        ]
      }
    },
    "options": {},
    "fields": {
      "attributes": [
        "bagweight"
      ],
      "relationships": []
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
    "requestId": "e2cf4301-d050-4aff-bb08-8132c2521b9f"
  },
  "response": {
    "entityModels": [
      {
        "id": "sku_entityValidationModel",
        "name": "sku",
        "type": "entityValidationModel",
        "domain": "generic",
        "source": "internal",
        },
        "data": {
          "attributes": {
            "bagweight": {
              "properties": {
                "precision": 3,
                "uomAllowedUnitSymbols": [
                  "m",
                  "dm",
                  "cm",
                  "µm",
                  "mm",
                  "hm",
                  "km"
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

Verify the Allowed UOMs for an attribute
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.