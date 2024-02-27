---
title: Delete Bulk Entities using Keyword and Attribute Criterion
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario12.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to delete bulk entities using Keyword and Attribute Criterion.

## Scenario

Delete bulk "sku" entities that are having the keywords as "B-001" with one of its attribute as "startdate".

{% include snippets/header.html %}

## Request

To delete the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType : Specify as "delete-query".
* params -> operationType : Specify as "inboundService".
* In the query, specify the required attributesCriterion and keywordsCriterion.

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"taskType": "delete-query",</span>
    "operationType": "inboundService",
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "createddate": {
              "hasvalue": true
            }
          }
        ],
        <span style="background-color: #FFFF00">"keywordsCriterion": {</span>
          "value": "*B-001",
          "operator": "_AND"
        }
      }
    },
    "fields": {
      "attributes": [
        <span style="background-color: #FFFF00">"startdate"</span>
      ]
    }
  }
}
</code>
</pre>

## Response

If the bulk entities are deleted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "599b20b6-4821-4ce1-a48c-094a02bfa964",
    "taskId": "599b20b6-4821-4ce1-a48c-094a02bfa964"
  },
  "response": {
    "status": "success",
    "totalRecords": 3
  }
}
</code></pre>

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

