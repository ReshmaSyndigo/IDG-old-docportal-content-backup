---
title: Get Entities based on UOM Nested Attribute
sidebar: rdp_sidebar
permalink: api_sch_uom_nested_attribute.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can search based on UOM nested attribute by using the **{{site.data.rdp_glossary.appgetentity}}** REST API.

{% include callout.html content="**Note**: The **isUom** parameter must be set to **true**.
" type="primary" %} 

## Scenario

Consider that "packagingweight" is a nested attribute of "Packaging Infomation". You wish to search entities based on UOM nested attribute where the bag weight attribute value is "70.555" cm. The "uomBaseValue" is 'm'. The search results entities based on "uomBaseValue".

{% include snippets/header.html %}

## Request

To search based on UOM nested attribute, use the REST API **{{site.data.rdp_glossary.appgetentity}}**. In the request send the following details:
* isUom: Set this parameter to "true" to search UOM nested attribute.

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
            "packaginginfo": {
              "attributes": [
                {
                  "packagingweight": {
                    "eq": "70.555",
                    "isUom": true,
                    "type": "_DECIMAL"
                  }
                }
              ]
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
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
    "requestId": "64536e78-f246-460b-8f28-77aa601c074c",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Pierrian Packaging Bag",
        "name": "_EMPTY",
        "type": "sku",
        },
        "data": {
          "attributes": {
            "packaginginfo": {
              "group": [
                {
                  "packagingweight": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "6cb1d734-faed-4f5a-a4b9-d6188036febf",
                        "os": "businessRule",
                        "osid": "SetAttributeValue_businessRule",
                        "ostype": "businessRule",
                        "value": 0.70555,
                        "properties": {
                          "uomData": "uomWeight/c5472b38-975a-4900-bc77-a98b42b4d705",
                          "uomIdentifier": "m"
                        }
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b4732d9e-979c-4c14-982d-e766d668177e"
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

Verify search based on UOM Nested attribute
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the multiple UOMs. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.