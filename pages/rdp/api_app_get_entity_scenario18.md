---
title: Get Entities using Attribute Criterion - contains String
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario18.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying an attribute criterion, using a scenario.

## Scenario

To get "SKU" entities containing string "polo" in attribute "mdmname".

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> filters -> attributesCriterion: Specify the attribute name and the criterion to be matched, along with its datatype, such as get entities which contain the string "polo" in attribute "mdmname".
* fields -> attributes: Specify the attribute you wish to get, such as "mdmname".
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
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "mdmname": {
              <span style="background-color: #FFFF00">"contains": "polo",</span>
              "type": "_STRING"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "mdmname"
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

Returns a list of all the "sku" entities that match the attribute criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "7b38d25f-fdb0-43c3-9e83-cff78f51cb97",
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
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "55ec2c9e-2fc2-4e82-b5dd-ee673fcc308a",
                  "value": "Polo Shirts"
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

