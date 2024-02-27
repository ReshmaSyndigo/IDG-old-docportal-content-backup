---
title: Get Entities based on UOM Range
sidebar: rdp_sidebar
permalink: api_sch_uom_range.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can search range based on base UOM value by using the **{{site.data.rdp_glossary.appgetentity}}** REST API.

{% include callout.html content="**Note**: The **isUom** parameter must be set to **true**.
" type="primary" %} 

## Scenario

Consider that you wish to search UOM attribute "badwidth" where the defined range value is greater than "50" cm and lesser than "75" cm. The "uomBaseValue" is "m". The search results entities based on "uomBaseValue".

{% include snippets/header.html %}

## Request

To search range based on base UOM value, use the REST API **{{site.data.rdp_glossary.appgetentity}}**. In the request send the following details:
* isuom: Set this parameter to 'true' to search UOM value.

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
              "gte": "50",
              "lte": "75",
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
    "requestId": "85c8605c-1277-4255-8f72-8ed23653eae3",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Pierrian Winter Suitcase",
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
                  "value": 0.65,
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
        "id": "HighFi Suitcase",
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
                  "id": "c654112c-4a45-40e0-b070-586d0e7283a2",
                  "value": 127,
                  "uom": "inch",
                  "properties": {
                    "uomData": "uomLength/bbf6d493-3826-44f1-8344-49f738875699",
                    "uomIdentifier": "km"
                  }
                }
              ]
            }
          }
        }
      },
      {
        "id": "Lenovo_L480_18",
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
                  "id": "71edf787-97c4-479d-bbdf-9701386d415b",
                  "value": 190.5,
                  "uom": "inch",
                  "properties": {
                    "uomData": "uomLength/bbf6d493-3826-44f1-8344-49f738875699",
                    "uomIdentifier": "inch"
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 10
  }
}
</code>
</pre>

Verify search based on multiple values
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the multiple vallues. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.