---
title: Get Entities using Attribute Criterion - exact String
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario19.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying an attribute criterion, using a scenario.

## Scenario

To get "SKU" and "Product" entities with exact string "red" in attribute "color".

{% include callout.html content="**Note**: If you wish to get the entities based on the exact search and specified attribute value string that has more than 350 characters, then the exact search will not fetch the entities based on the specified attribute value. You must use 'eq' or 'contains' search to get the entities based on the attribute value that contains more than 350 characters. For more information, see see [Get Entities using Attribute Criterion - contains String](api_app_get_entity_scenario18.html) and [Get Entities using Attribute Criterion - equals Wildcard(*)](api_app_get_entity_scenario36.html).
" type="primary" %}

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* query -> filters -> attributesCriterion: Specify the attribute name and the criterion to be matched, along with its datatype, such as get entities which have the exact string "red" in attribute "color".
* fields -> attributes: Specify the attribute you wish to get, such as "mdmname".
* options -> maxRecords: Specify the number of records to retrieve.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku",
          "product"
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "color": {
              <span style="background-color: #FFFF00">"exact": "red",</span>
              "type": "_STRING"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "mdmname",
        "color"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre>

## Response

Returns a list of all the "sku" and "product" entities that match the attribute criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "564bb37a-afe9-453d-84ef-5873f4c09df2",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "PoloTies",
        "name": "Polo Ties",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-24T22:44:40.049-0500",
          "modifiedDate": "2018-07-24T22:44:40.049-0500"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0f93d777-5c7f-40aa-b198-49ba67e4dd9d",
                  "value": "Red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d4f60c5d-5cc9-4155-a9e8-675fd2e88155",
                  "value": "Black",
                  "properties": {
                    "referenceData": "colors/1c868427-a941-4dd5-bd06-1fc08bd8b703",
                    "referenceDataIdentifier": "ABL"
                  }
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c5e2ddcb-50ad-4f0f-aa5f-3a790d0dbd67",
                  "os": "businessRule",
                  "osid": "UpdateMDMIDForProduct_businessRule",
                  "ostype": "businessRule",
                  "value": ""
                }
              ]
            }
          }
        }
      },
      {
        "id": "JohnyShirts",
        "name": "JohnyShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-24T22:44:58.095-0500",
          "modifiedDate": "2018-07-24T22:44:58.095-0500"
        },
        "data": {
          "attributes": {
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "64238cd4-afa6-47ba-b725-6ccad6f0c009",
                  "value": "JohnyShirts"
                }
              ]
            },
            "color": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2eae360f-7ee1-45e0-8e6c-a63867e06a83",
                  "value": "Red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "fe89885f-c78d-42c3-9e4d-13a04d0474d0",
                  "value": "Black",
                  "properties": {
                    "referenceData": "colors/1c868427-a941-4dd5-bd06-1fc08bd8b703",
                    "referenceDataIdentifier": "ABL"
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
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

