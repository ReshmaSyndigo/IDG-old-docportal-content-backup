---
title: Get Context Of Entity 
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario25.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetcontext}}** to get the context of an entity, using a scenario.

## Scenario

To get the context of sku entity "Kookaburra Ghost Cricket Bat SH".

{% include snippets/header.html %}

## Request

To get the context, you can use the REST API {{site.data.rdp_glossary.appgetcontext}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> id -> Specify the entity Id.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/getcontext**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "erseNG9Z6VWyd0T"</span>
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre> 

## Response

Returns all the contexts of the specified entity.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "28769d3a-daec-49c1-b2ea-dc591d340cff",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "erseNG9Z6VWyd0T",
        "name": "Kookaburra Ghost Cricket Bat SH",
        "type": "sku",
        "data": {
          "contexts": [
            {
              "context": {
                "country": "United Kingdom"
              }
            },
            {
              "context": {
                "channel": "United Kingdom Mobile"
              }
            },
            {
              "context": {
                "channel": "United Kingdom Retail"
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code>
</pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.