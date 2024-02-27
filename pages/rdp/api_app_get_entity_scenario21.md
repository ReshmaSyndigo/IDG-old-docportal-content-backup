---
title: Get Entities using Single Relationship Criterion
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario21.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying a relationship criterion, using a scenario.

## Scenario

To get "SKU" and "Product" entities containing "ischildof" relationship.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* query -> filters -> relationshipsCriterion: Specify the relationship criterion to be matched, such as get entities which contain the relationship "ischildof".
* fields -> relationships: Specify the relationship you wish to get, such as "ischildof".
* options -> maxRecords: Specify the number of records to retrieve.

<pre>
<code>
POST **{TenantURL or ID}/api/entityservice/get**
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
        <span style="background-color: #FFFF00">"relationshipsCriterion": [</span>
          {
            "ischildof": {}
          }
        ]
      }
    },
    "fields": {
      "relationships": [
        "ischildof"
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

Returns a list of all the "sku" and "product" entities that match the relationship criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "c68ad890-00c9-41d6-875b-f5e5f23b86b0",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "PoloWhite_Large",
        "name": "Polo Mens Shirt White_Large",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:41.179-0500",
          "modifiedDate": "2018-07-19T01:56:41.179-0500"
        },
        "data": {
          "relationships": {
            "ischildof": [
              {
                "id": "PoloWhite_Large",
                "relTo": {
                  "id": "PoloMensShirt",
                  "type": "product"
                },
                "properties": {
                  "relationshipType": "composition"
                },
                "attributes": {}
              }
            ]
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
          "relationships": {
            "ischildof": [
              {
                "id": "SKUIsChildOf1",
                "relTo": {
                  "id": "PoloMensShirts",
                  "type": "product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "5b502081-4b44-4b71-8d0d-9fc4dd54cd38",
                        "value": "Link description - US"
                      },
                      {
                        "source": "internal",
                        "locale": "de-DE",
                        "id": "d8f12375-ff0b-4655-84ad-a119b9bf6171",
                        "value": "Link description - DE"
                      }
                    ]
                  }
                },
                "properties": {
                  "relationshipType": "composition"
                }
              }
            ]
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

