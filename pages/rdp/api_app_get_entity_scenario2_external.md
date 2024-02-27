---
title: Get Entities using Multiple Types
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities matching multiple entity types.

## Scenario

To get all "SKU" and "Product" entities.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
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
      }
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre> 

## Response

Returns a list of all "sku" and "product" entities.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "91933355-57fa-4fbf-b8b1-4da082b77a59",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "PeterShirts",
        "name": "PeterShirts",
        "type": "sku"
      },
      {
        "id": "PoloMensShirt",
        "name": "Polo Mens Shirt",
        "type": "product"
      },
      {
        "id": "PoloWhite_Large",
        "name": "Polo Mens Shirt White_Large",
        "type": "sku"
      },
      {
        "id": "PoloTies",
        "name": "Polo Ties",
        "type": "product"
      },
      {
        "id": "Polo Mens Shirt Red",
        "name": "Polo Mens Shirt Red",
        "type": "sku"
      },
      {
        "id": "JPShirts",
        "name": "JPShirts",
        "type": "sku"
      },
      {
        "id": "PoloWomen",
        "name": "Polo Women's Formals",
        "type": "product"
      },
      {
        "id": "PoloShirts",
        "name": "PoloShirts",
        "type": "product"
      },
      {
        "id": "Polo Mens Shirt Teal",
        "name": "Polo Mens Shirt Teal",
        "type": "sku"
      },
      {
        "id": "MensShirts",
        "name": "MensShirts",
        "type": "product"
      },
      {
        "id": "Men's Ties",
        "name": "Men's Ties",
        "type": "product"
      },
      {
        "id": "e2",
        "name": "Polo Mens Shirt Blue_Large",
        "type": "sku"
      },
      {
        "id": "DWShirts",
        "name": "DWShirts",
        "type": "sku"
      },
      {
        "id": "e3",
        "name": "Polo Mens Shirt Green_Large",
        "type": "sku"
      }
    ],
    "status": "success",
    "totalRecords": 14
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

