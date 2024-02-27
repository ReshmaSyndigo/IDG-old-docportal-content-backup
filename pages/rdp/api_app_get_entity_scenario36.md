---
title: Get Entities using Attribute Criterion - equals Wildcard(*)
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario36.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying an attribute criterion, using a scenario.

## Scenario

To get "SKU" entities with "mdmid" attribute value starting with "LS" and ending with "Shirts" with zero or more characters in between.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> filters -> attributesCriterion: Specify the attribute name and the criterion to be matched, along with its datatype, such as get entities that contain the string "LS*Shirts" in attribute "mdmid".
* fields -> attributes: Specify the attribute you wish to get, such as "mdmid".
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
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "mdmid": {
              <span style="background-color: #FFFF00">"eq": "LS*Shirts"</span>
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "mdmid"
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

Returns a list of all the "sku" entities that match the attribute criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "741723f8-97a0-40a9-bf37-3a5942efc3c6",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "e47iqP9wVXWpE",
        "name": "Polo Shirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "dev1admin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "createdDate": "2019-01-02T23:47:32.197-0600",
          "modifiedDate": "2019-01-02T23:47:32.197-0600"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "29eed69d-6894-4b40-b13e-b60e27fc5fce",
                  "value": "LSPoloMenShirts"
                }
              ]
            }
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

