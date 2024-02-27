---
title: Get Entities based on Exact Single Value UOM Match
sidebar: rdp_sidebar
permalink: api_sch_uom_single_value_exact_match.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can search UOM based on exact single value match by using the **{{site.data.rdp_glossary.appgetentity}}** REST API.

{% include callout.html content="**Note**: The **isUom** parameter must be set to **true**.
" type="primary" %} 

## Scenario

Consider that you wish to perform an exact value match where the UOM attribute "bagwidth" is "50cm". Note that the value and UOM unit is defined with "##" separator. The search results entities that has "50cm" as the "bagwidth" attribute value.

{% include snippets/header.html %}

## Request

To search UOM based on multiple value, use the REST API **{{site.data.rdp_glossary.appgetentity}}**. In the request send the following details:
* isUom: Set this parameter to 'true' to search UOM value.

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
              "exact": "50##cm",
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
    "requestId": "97632375-8ceb-4aec-8bc6-70724d581cb0",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Castro Sling Bag",
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
                  "value": 50,
                  "uom": "cm",
                  "properties": {
                    "uomData": "uomLength/fd6ae53c-4113-4f48-b5e2-3eb6912ed5f4",
                    "uomIdentifier": "cm"
                  }
                }
              ]
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

Verify search based on multiple values
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the multiple vallues. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.