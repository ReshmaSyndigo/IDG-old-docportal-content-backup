---
title: Delete Bulk Entities using Properties, Keyword, and Attribute Criterion
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario13.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to delete bulk entities using Properties, Keyword, and Attribute Criterion.

## Scenario

Delete bulk "sku" entities that are having the keywords "MWRT" with one of its attribute "colordesc" as "RoyalPurple", which is created by the user "dev1admin".

{% include snippets/header.html %}

## Request

To delete the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType : Specify as "delete-query".
* params -> operationType : Specify as "inboundService".
* In the query, specify the required typesCriterion, propertiesCriterion, and keywordsCriterion.

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
        <span style="background-color: #FFFF00">"propertiesCriterion": [</span>
          {
            "createdby": {
              "exact": "dev1admin@riversand.com"
            }
          }
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "colordesc": {
              "exact": "RoyalPurple"
            }
          }
        ],
        <span style="background-color: #FFFF00">"keywordsCriterion": {</span>
          "keywords": "MWRT*",
          "operator": "_AND"
        }
      }
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
    "requestId": "bf5a7dff-8ca6-4449-be5a-f5f91b39c602",
    "taskId": "bf5a7dff-8ca6-4449-be5a-f5f91b39c602"
  },
  "response": {
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.