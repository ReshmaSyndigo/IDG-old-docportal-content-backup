---
title: Get Entities by Type
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities matching an entity type.

## Scenario

To get all "SKU" entities.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
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
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
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

Returns a list of all "sku" entities.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "96466bb5-7410-437f-9828-6790aff8343e",
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
        "id": "PoloWhite_Large",
        "name": "Polo Mens Shirt White_Large",
        "type": "sku"
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
        "id": "Polo Mens Shirt Teal",
        "name": "Polo Mens Shirt Teal",
        "type": "sku"
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
    "totalRecords": 8
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.