---
title: Verify Entity with UOM Attribute
sidebar: rdp_sidebar
permalink: api_verify_entity_uom_attribute.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can verify entity with UOM attribute by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API.

## Scenario

Consider that you wish to verify "Bag Weight" attribute with Entity "Pierrian HandBag".

{% include snippets/header.html %}

## Request

To verify entity with UOM attribute, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* fields: Indicates the attribute name.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
    "params": {
        "query": {
            "filters": {
                "typesCriterion": [
                    "sku"
                ]
            },
            "id": "Pierrian HandBag"
        },
        "fields": {
            "attributes": [
                "bagweight"
            ]
        },
        "options": {
            "maxRecords": 1
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
  "id": " Pierrian HandBag ",
  "name": Pierrian HandBag ",
  "type": "sku",
  "data": {
    "attributes": {
      "bagweight": {
        "values": [
          {
            "uom": "gm",
            "source": "internal",
            "locale": "en-US",
            "value": 500,
            "properties": {
              "uomData": "weight/grams",
              "uomIdentifier": "gm"
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

Verify the created UOM Entity Type
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created UOM Type. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.