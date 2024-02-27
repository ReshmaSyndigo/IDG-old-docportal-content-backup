---
title: Get Entities using Attribute Criterion - "ALL" Attributes
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario39.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying an attribute criterion, using a scenario.

## Scenario

To get "SKU" entities that contain "Polo" in any of its attributes.

{% include callout.html content="**Note**:<br/>
Similarly, you can use **_ALL** in [keyword criterion](api_app_get_entity_scenario17.html) and [properties criterion](api_app_get_entity_scenario15.html).
" type="primary" %}

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> filters -> attributesCriterion: Specify the criterion to be matched. Here you wish to get entities that contain "Polo" in any of its attributes.
* fields -> attributes: Specify the attributes you wish to get.
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
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "_ALL": {
              "contains": "Polo"
            }
          }
        ],
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "mdmname",
        "subhead"
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

Returns a list of "sku" entities that match the attribute criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "3c756aad-c092-4fc4-80ae-98fc27a50b05",
    "maxRecords": 100
  },
  "response": {
    "entities": [
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
            "subhead": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7cbe84a1-7e5a-43c3-9769-53774656722d",
                  "os": "graph",
                  "osid": "1afdeaa8-f369-4c68-9c6b-b50049a4c7d6",
                  "ostype": "product",
                  "value": "Polo Shirts 2018"
                }
              ]
            }
          }
        }
      },
      {
        "id": "e47iqP9wVXWpE",
        "name": "Polo Shirts",
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
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "55ec2c9e-2fc2-4e82-b5dd-ee673fcc308a",
                  "value": "Polo Shirts"
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
            "subhead": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7cbe84a1-7e5a-43c3-9769-53774656722d",
                  "os": "graph",
                  "osid": "1afdeaa8-f369-4c68-9c6b-b50049a4c7d6",
                  "ostype": "product",
                  "value": "Polo Shirts 2018"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 3
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

