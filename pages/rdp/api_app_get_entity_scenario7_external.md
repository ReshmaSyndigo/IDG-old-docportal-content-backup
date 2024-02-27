---
title: Get All Relationships of an Entity
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario7.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get all relationships of an entity using entity Id.

## Scenario

To get all relationships of entity "PoloMensShirt" using entity Id.

{% include snippets/header.html %}

## Request

To get the above entity with all its relationships, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> Id: Specify the entity identifier.
* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* fields -> relationships: Specify "_ALL" to get all the relationships of the entity.
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
        ]
      },
      <span style="background-color: #FFFF00">"id": "PoloMensShirt"</span>
    },
    "fields": {
      <span style="background-color: #FFFF00">"relationships": [</span>
        "_ALL"
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

Returns the matching entity with all its relationships.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "8635975d-ebf4-49e2-8f2f-cd28e1629575",
    "maxRecords": 5
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

