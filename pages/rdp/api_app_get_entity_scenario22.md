---
title: Get Entities using Multiple Relationship Criteria
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario22.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying multiple relationship criteria, using a scenario.

## Scenario

To get "Product" entities containing "productischildof" and "crosssell" relationship.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "product".
* query -> filters -> relationshipsCriterion: Specify the relationship criterion to be matched, such as get entities which contain the relationship "productischildof" and "crosssell".
* query -> fields -> relationships: Specify the relationships you wish to get, such as "_ALL".
* query -> options -> maxRecords: Specify the number of records to retrieve.

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
          "product"
        ],
        <span style="background-color: #FFFF00">"relationshipsCriterion": [</span>
          {
            <span style="background-color: #FFFF00">"productischildof": {}</span>
          },
          {
            <span style="background-color: #FFFF00">"crosssell": {}</span>
          }
        ]
      }
    },
    "fields": {
      "relationships": [
        "_ALL"
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

Returns a list of all the "product" entities which match the relationship criteria.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "63506f53-b13f-4584-9377-fde1a91b4cb0",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "PoloMensShirt",
        "name": "Polo Mens Shirt",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:58.360-0500",
          "modifiedDate": "2018-07-19T01:56:58.360-0500"
        },
        "data": {
          "relationships": {
            "productischildof": [
              {
                "id": "PoloMensShirt",
                "relTo": {
                  "id": "Men's Formals",
                  "type": "productgroup"
                },
                "properties": {
                  "relationshipType": "Composition"
                }
              }
            ],
            "crosssell": [
              {
                "id": "PoloMensShirt",
                "relTo": {
                  "id": "PoloTies",
                  "type": "product"
                },
                "properties": {
                  "relationshipType": "association"
                },
                "attributes": {}
              }
            ]
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
