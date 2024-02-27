---
title: Get Entities using Properties Criterion - contains Wildcard(*)
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario37.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying a specified property criterion, using a scenario.

## Scenario

To get "SKU" entities with "createdBy" property value starting with "dev1admin" and followed by zero or more trailing characters.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> filters -> propertiesCriterion: Specify the property name and the criterion to be matched, such as get entities that contain string "dev1admin*" in property "createdBy".
* fields -> attributes: Specify the property you wish to get, such as "createdBy".
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
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        <span style="background-color: #FFFF00">"propertiesCriterion": [</span>
          {
            "createdBy": {
              <span style="background-color: #FFFF00">"contains": "dev1admin*"</span>
            }
          }
        ]
      }
    },
    "fields": {
      "properties": [
        "createdBy"
      ]
    },
    "options": {
      "from": 0,
      "maxRecords": 100
    }
  }
}
</code>
</pre> 

## Response

Returns a list of all "sku" entities that match the properties criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "98ae5631-fbe0-43b3-95eb-0cbc394f778c",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "eDpOZqY5I6LNs",
        "name": "PH28DecTest001",
        "type": "sku",
        "properties": {
          "createdBy": "dev1admin@riversand.com_user"
        }
      },
      {
        "id": "gZo7M5zbTra6NZ6Pca6JyQ",
        "name": "TestImpNKReg29oct1001",
        "type": "sku",
        "properties": {
          "createdBy": "dev1admin@riversand.com_user"
        }
      },
      {
        "id": "T-rM1mivQXeNVQRi-1ZZxA",
        "name": "TestImpNKReg29oct1001",
        "type": "sku",
        "properties": {
          "createdBy": "dev1admin@riversand.com_user"
        }
      },
      {
        "id": "efVy92CA47SPL",
        "name": "sku 001",
        "type": "sku",
        "properties": {
          "createdBy": "dev1admin@riversand.com_user"
        }
      }
    ],
    "status": "success",
    "totalRecords": 4
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

