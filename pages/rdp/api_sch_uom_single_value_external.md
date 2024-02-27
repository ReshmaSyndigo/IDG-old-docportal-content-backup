---
title: Get Entities based on Single Valued UOM
sidebar: rdp_sidebar
permalink: api_sch_uom_single_value.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can search UOM based on single value by using the **{{site.data.rdp_glossary.appgetentity}}** REST API.

{% include callout.html content="**Note**: The **isUom** parameter must be set to **true**.
" type="primary" %} 

## Scenario

Consider that you wish to search UOM attribute "bagwidth" that has '30cm' as value. Note that the "uomBaseValue" is 'm'. The search results SKU matching "uomBaseValue" that has '0.3'm.

{% include snippets/header.html %}

## Request

To search UOM based on single value, use the REST API **{{site.data.rdp_glossary.appgetentity}}**. In the request send the following details:
* isUom: Set this parameter to "true" to search UOM value.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ],
        "attributesCriterion": [
          {
            "bagwidth": {
              "eq": "30",
              "isUom": true,
              "type": "_DECIMAL"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "bagwidth"
      ],
      "relationships": []
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
    "requestId": "ec635a93-6143-44c5-8ace-d600ae6226fd",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Pierrian HandBag",
        "name": "_EMPTY",
        "type": "sku",
        },
        "data": {
          "attributes": {
            "bagwidth": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "56d8c226-bdfd-4f22-9501-555c9f592cac",
                  "value": 0.3,
                  "uom": "m",
                  "properties": {
                    "uomData": "uomLength/bbf6d493-3826-44f1-8344-49f738875699",
                    "uomIdentifier": "m"
                  }
                }
              ]
            }
          }
        }
      },
      {
        "id": "Dolce HandBag",
        "name": "_EMPTY",
        "type": "sku",
        },
        "data": {
          "attributes": {
            "bagwidth": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b7ed4034-7228-45ef-aaa4-1990305f8ca4",
                  "value": 0.3,
                  "uom": "m",
                  "properties": {
                    "uomData": "uomLength/bbf6d493-3826-44f1-8344-49f738875699",
                    "uomIdentifier": "m"
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}
</code>
</pre>

Verify search based on single value
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the multiple UOMs. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.