---
title: Get Entities based on Multiple Valued UOM
sidebar: rdp_sidebar
permalink: api_sch_uom_multiple_value.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can search UOM based on multiple value by using the **{{site.data.rdp_glossary.appgetentity}}** REST API.

{% include callout.html content="**Note**: The **isUom** parameter must be set to **true**.
" type="primary" %} 

## Scenario

Consider that you wish to search UOM attribute "bagwidth" that has multiple values. The multiple values are defined with single pipe separator. For example, "30|20" cm. The "uomBaseValue" is "m". The search results entities based on "uomBaseValue".

{% include snippets/header.html %}

## Request

To search UOM based on multiple value, use the REST API **{{site.data.rdp_glossary.appgetentity}}**. In the request send the following details:
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
              "eq": "30|20",
              "isUom": true
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
    "requestId": "cd870342-a601-4fe6-b52f-d888fb2ea5a7",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Lenu Laptop Bag",
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
                  "id": "5d0b2ab3-1b5a-4065-9dd9-0923a1ed35fc",
                  "value": 0.3,
                  "uom": "m",
                  "properties": {
                    "uomData": "uomLength/fd6ae53c-4113-4f48-b5e2-3eb6912ed5f4",
                    "uomIdentifier": "m"
                  }
                }
              ]
            }
          }
        }
      },
      {
        "id": "Pierrian Laptop Bag",
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
                  "id": "12e75f0c-e48b-4ed6-bb34-fca301292122",
                  "value": o.2,
                  "uom": "m",
                  "properties": {
                    "uomData": "uomLength/fd6ae53c-4113-4f48-b5e2-3eb6912ed5f4",
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
    "totalRecords": 5
  }
}
</code>
</pre>

Verify search based on multiple values
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the multiple vallues. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.