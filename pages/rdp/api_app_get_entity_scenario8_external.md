---
title: Get Nested Attribute of an Entity
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario8.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get nested attribute of an entity using entity Id.

## Scenario

To get nested attribute "alternatevendor" of entity "Polo Mens Shirt Teal" using entity Id.

{% include snippets/header.html %}

## Request

To get the above entity with the nested attribute, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> Id: Specify the entity identifier.
* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* fields -> attributes: Specify the name of the nested attribute that you wish to get,such as "alternatevendor".
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
        ]
      },
      <span style="background-color: #FFFF00">"id": "Polo Mens Shirt Teal"</span>
    },
    "fields": {
      "attributes": [
        <span style="background-color: #FFFF00">"alternatevendor"</span>
      ]
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre> 

## Response

Returns the nested attribute "alternatevendor" of the matching entity.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "06a2fade-9cea-40c0-a7be-8956be92e7bc",
    "maxRecords": 5
  },
  "response": {
    "entities": [
      {
        "id": "Polo Mens Shirt Teal",
        "name": "Polo Mens Shirt Teal",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:54.261-0500",
          "modifiedDate": "2018-07-19T01:56:54.261-0500"
        },
        "data": {
          "attributes": {
            "alternatevendor": {
              "group": [
                {
                  "vendorpartnumber": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "5da258b6-cabe-44ef-b627-114802e1f6a5",
                        "value": "Vendor1"
                      }
                    ]
                  },
                  "vendorid": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "3ef2592a-3967-4c67-929a-b42bee6b37a3",
                        "value": "N123"
                      }
                    ]
                  },
                  "vendorcost": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "579a9a81-90c8-46a9-916f-15d129ac863c",
                        "value": 11.24
                      }
                    ]
                  },
                  "vendorname": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "d169fa0f-f2fe-4ade-a1a4-4fd3bf8604f1",
                        "value": "Smart Apparels"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4fec8f8c-817b-4970-aebd-7daa5295e691"
                },
                {
                  "vendorpartnumber": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "44cfbb93-cc10-42bc-b145-dd5942505e94",
                        "value": "Vendor2"
                      }
                    ]
                  },
                  "vendorid": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "95982fb8-3857-4c7b-b99b-5a7a1ecf53e3",
                        "value": "N456"
                      }
                    ]
                  },
                  "vendorcost": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "dee12c4a-6970-4fd4-b10f-505a3c0fa635",
                        "value": 11.24
                      }
                    ]
                  },
                  "vendorname": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "9a0ac78d-a0a1-47e0-af93-5d25a7d22e76",
                        "value": "Trendy Apparels"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2b262dcc-6b8f-4dcd-ad83-750650c265af"
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
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

