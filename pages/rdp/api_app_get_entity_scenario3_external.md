---
title: Get Entities using Multiple Ids
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get  entities using multiple entity Ids, using a scenario. 

## Scenario

To get "SKU" and "Product" entities using multiple entity Ids "e2" and "e3".

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> Ids: Specify a comma separated list of entity identifiers.
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
      },
      <span style="background-color: #FFFF00">"ids": [</span>
        "e2",
        "e3"
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

Returns a list of all the "sku"  and "product" entities matching the Ids in the "ids" list.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "54488656-c641-4a78-8e5e-75a670f98d28",
    "maxRecords": 3
  },
  "response": {
    "entities": [
      {
        "id": "e2",
        "name": "Polo Mens Shirt Blue_Large",
        "type": "sku"
      },
      {
        "id": "e3",
        "name": "Polo Mens Shirt Green_Large",
        "type": "sku"
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

