---
title: Get Entities using Name
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities using entity name, using a scenario. 

## Scenario

To get "Product" and "SKU" entities with name "PeterShirts".

{% include snippets/header.html %}

## Request

To get the above entity, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> name: Specify the entity name "PeterShirts".
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
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku",</span>
          <span style="background-color: #FFFF00">"product"</span>
        ]
      },
      <span style="background-color: #FFFF00">"name": "PeterShirts"</span>
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre> 

## Response

Returns the entities matching the entity name "PeterShirts".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "0c433b36-071b-44a4-b972-6c11a8f050b7",
    "maxRecords": 1
  },
  "response": {
    "entities": [
      {
        "id": "PeterShirts",
        "name": "PeterShirts",
        "type": "sku"
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

