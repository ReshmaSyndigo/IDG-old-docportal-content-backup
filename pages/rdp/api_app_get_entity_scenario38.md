---
title: Get Entities using Keyword Criterion - contains Wildcard(*)
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario38.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying a keyword criterion, using a scenario.

## Scenario

To get "SKU" entities whose entity data contains "polo*" where * represents zero or more characters.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> filters -> keywordsCriterion: Specify the keyword criterion, such as "polo*".
* fields -> attributes: Specify the attributes you wish to get, such as "mdmid", "mdmname", "brand" and "headline".
* options -> maxRecords: Specify the number of records you wish to retrieve.

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
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        "keywordsCriterion": {
          <span style="background-color: #FFFF00">"keywords": "polo*"</span>
        }
      }
    },
    "fields": {
      "attributes": [
        "headline",
        "mdmname",
        "mdmid",
        "brand"
      ]
    },
    "options": {
      "from": 0,
      "maxRecords": 100
    }
  }
}
</code>
</pre> 

## Response

Returns a list of all "sku" entities satisfying the keyword criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "2805e4f9-79ad-420c-ad7e-c3d42d936a1e",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "xpQ5bnZ4Qa29PVj43KcXQA",
        "name": "28Decselfcountrychannel972",
        "type": "sku",
        "properties": {
          "recordId": "322d4e64-e2ab-4718-ae7f-0aac6d779ba8",
          "rowNo": 973,
          "createdService": "entityManageService",
          "createdBy": "qaadmin@riversand.com_user",
          "createdDate": "2018-12-28T00:53:15.715-0600",
          "modifiedService": "entityManageService",
          "modifiedBy": "system",
          "modifiedDate": "2019-01-06T23:15:45.794-0600"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4366d54d-9f84-434b-b0d5-63e738c0f456",
                  "value": "28Decselfcountrychannel972"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0c5383cc-f5cf-46a2-8c0e-4ec9b089bd03",
                  "value": "28Decselfcountrychannel972"
                }
              ]
            },
            "brand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "925ec6d2-ded6-4f99-bcb5-9d9164c39caf",
                  "value": "polo"
                }
              ]
            }
          }
        }
      },
      {
        "id": "eaKrJ4aXAaoXy",
        "name": "Polo for Women",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "createdDate": "2018-12-26T09:47:02.720-0600",
          "modifiedService": "entityManageService",
          "modifiedBy": "system",
          "modifiedDate": "2019-01-01T23:44:20.809-0600"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "aec96bcd-c08f-48f3-8bf9-8767e8e33ae4",
                  "value": "PM001"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "51f80f32-53d4-4edf-b411-8ef68113fbc0",
                  "value": "Greenply"
                }
              ]
            },
            "brand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d5b5c256-ccae-48cd-98d6-a546a33cdc65",
                  "os": "graph",
                  "osid": "1afdeaa8-f369-4c68-9c6b-b50049a4c7d6",
                  "ostype": "product",
                  "value": "Polo"
                }
              ]
            },
            "headline": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "64c69517-2fb5-416f-95f1-24f67cc37f8c",
                  "os": "graph",
                  "osid": "1afdeaa8-f369-4c68-9c6b-b50049a4c7d6",
                  "ostype": "product",
                  "value": "S - Polo Shirt"
                }
              ]
            }
          }
        }
      },
      {
        "id": "e47iqP9wVXWpE",
        "name": "PoloShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2019-01-02T23:47:32.197-0600",
          "modifiedDate": "2019-01-02T23:47:32.197-0600"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "29eed69d-6894-4b40-b13e-b60e27fc5fce",
                  "value": "LSPoloMenShirts"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "55ec2c9e-2fc2-4e82-b5dd-ee673fcc308a",
                  "value": "PoloShirts"
                }
              ]
            }
          }
        }
      },
      {
        "id": "eXNHaCgI2dQY8",
        "name": "Ree Men Shirt",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "createdDate": "2019-01-01T23:27:06.270-0600",
          "thumbnailid": "d2aac29e-9f2b-4c3f-9193-2d15ec5f877d",
          "modifiedService": "entityManageService",
          "modifiedBy": "system",
          "modifiedDate": "2019-01-03T00:10:37.441-0600"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "86676970-7314-4430-ba0d-264795e667d8",
                  "value": "RM001"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "77b3ffce-606c-43f3-8b7f-306b33c2d606",
                  "value": "Ree Men Shirt"
                }
              ]
            },
            "brand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d5b5c256-ccae-48cd-98d6-a546a33cdc65",
                  "os": "graph",
                  "osid": "1afdeaa8-f369-4c68-9c6b-b50049a4c7d6",
                  "ostype": "product",
                  "value": "Polo"
                }
              ]
            },
            "headline": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "64c69517-2fb5-416f-95f1-24f67cc37f8c",
                  "os": "graph",
                  "osid": "1afdeaa8-f369-4c68-9c6b-b50049a4c7d6",
                  "ostype": "product",
                  "value": "S - Polo Shirt"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 4
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

