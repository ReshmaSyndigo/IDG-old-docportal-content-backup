---
title: Get Entities using Attribute Criterion - contains Integer
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario20.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying an attribute criterion, using a scenario.

## Scenario

To get "SKU" and "Product" entities with value in "cost" attribute.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* query -> filters -> attributesCriterion: Specify the attribute name and the criterion to be matched, along with its datatype, such as get entities which contain a value for attribute "cost". Similarly, you can get entities that do not contain a value for the attribute by changing the criterion to "hasvalue : false".
* fields -> attributes: Specify the attribute you wish to get, such as "cost".
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
          "product",
          "sku"
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "cost": {
              <span style="background-color: #FFFF00">"hasvalue": true,</span>
              "type": "_DECIMAL"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "cost"
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

Returns a list of all the "sku" and "product" entities which match the attribute criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "4ad24245-6506-40a6-8824-9565d0d8e222",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "VanShirts",
        "name": "VanShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-20T00:44:50.096-0500",
          "modifiedDate": "2018-07-20T00:44:50.096-0500"
        },
        "data": {
          "attributes": {
            "cost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d85e57bc-6b50-421a-91c9-f91bd9d6c3d0",
                  "value": 12.22
                },
                {
                  "source": "internal",
                  "locale": "de-DE",
                  "id": "2f303745-10af-4c7c-8abe-f3f23dd39259",
                  "value": 54.44
                }
              ]
            }
          }
        }
      },
      {
        "id": "MensShirts",
        "name": "MensShirts",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:55:31.214-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-07-20T00:52:18.270-0500"
        },
        "data": {
          "attributes": {
            "cost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3fe22fc6-4943-41c0-b564-e747534057f9",
                  "os": "graph",
                  "osid": "JohnyShirts",
                  "ostype": "sku",
                  "value": 12.22
                },
                {
                  "source": "internal",
                  "locale": "de-DE",
                  "id": "7f23bd17-e584-43d9-97be-a55f0e84d211",
                  "os": "graph",
                  "osid": "JohnyShirts",
                  "ostype": "sku",
                  "value": 54.44
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
          "createdDate": "2018-07-20T03:40:06.521-0500",
          "modifiedDate": "2018-07-20T03:40:06.521-0500"
        },
        "data": {
          "attributes": {
            "cost": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2fa3dbff-0fb1-4bd8-87d8-1f5a148f3b79",
                  "value": 12.22
                },
                {
                  "source": "internal",
                  "locale": "de-DE",
                  "id": "283710dc-81bd-43d9-b837-558699da99c1",
                  "value": 54.44
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

