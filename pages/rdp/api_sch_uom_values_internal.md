---
title: Search via Single UOM Value
sidebar: rdp_sidebar
permalink: api_sch_uom_values.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can validate UOM attribute with defined range value by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API.

## Scenario

Consider that you wish to validate the imported UOM attribute with the defined range value (value between Range To and Range From). In this scenario, base UOM is "g" (grams).

{% include snippets/header.html %}

## Request

To validate UOM attribute with the defined range values, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* range: Defines the rangeTo, rangeFrom, rangeFromUOM, rangeToUOM, rangeFromBaseValue, and rangeToBaseValue details.
* uomAllowedUnitSymbols: Indicates the allowed UOM symbols. In this scenario, "kg", "g", and "mg" are the allowed UOMs.

Upon successfully importing via UI, the RSConnect sends the following query to the Riversand Platform application.

<pre>
<code>
{
        "id": "sku_entityValidationModel",
        "name": "sku",
        "type": "entityValidationModel",
        "domain": "generic",
        "source": "internal",
        "data": {
          "attributes": {
            "productweight": {
              "properties": {
                "range": [
                  {
                    "rangeTo": 29,
                    "rangeFrom": 11,
                    "rangeFromUOM": "g",
                    "rangeToUOM": "kg",
                    "rangeFromBaseValue": "11",
                    "rangeToBaseValue": "29000"
                  }
                ],
                "uomAllowedUnitSymbols": [
                  "kg",
                  "g",
                  "mg"
                ]
              }
            }
          }
        }
      }
</code>
</pre>

Verify the value in "Range To" and "Range From" columns in the model
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the multiple UOMs. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.