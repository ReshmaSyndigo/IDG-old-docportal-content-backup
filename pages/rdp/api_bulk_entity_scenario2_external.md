---
title: Update Bulk Entities with a Self Attribute
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to update the bulk entities using AttributeCriterion in Query to Update a Self Attribute.

## Scenario

To update the self attribute "size" for all "SKU" entities having color "red".

{% include snippets/header.html %}

## Request

To update above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "process-query".
* params -> operationType: Specify as "inboundService".
* In the query, specify the required typesCriterion and attributesCriterion. 
* In the data, specify the attribute value to be updated.

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "taskType": "process-query",
    "operationType": "inboundService",
     "query": {
      "filters": {
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "color": {
              "value": "red"
            }
          }
        ],
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "data": {
      <span style="background-color: #FFFF00">"size": {</span>
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "value": "M"
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Response

If the bulk entities are updated successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5e5f94b8-a4b2-454a-a682-731f2ad725cd",
    "taskId": "5e5f94b8-a4b2-454a-a682-731f2ad725cd"
  },
  "response": {
    "status": "success",
    "totalRecords": 0
  }
}
</code></pre> 

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.