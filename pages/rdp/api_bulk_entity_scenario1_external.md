---
title: Update Bulk Entities to add a Relationship Attribute 
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to update the bulk entities using relationshipCriterion in query to add a linkdescription attribute .

## Scenario

Update the linkdescription of a relationship from "Link description of self relationship ischildof" to "PoloShirt Relationships".

{% include snippets/header.html %}

## Request

To update above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "process-query".
* params -> operationType: Specify as "inboundService".
* In the query, specify the required typesCriterion and relationshipCriterion. 
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
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        "relationshipsCriterion": [
          {
            "ischildof": {
              "attributes": [
                {
                  "linkdescription": {
                    <span style="background-color: #FFFF00">"exact": "Link description of self relationship ischildof"</span>
                  }
                }
              ]
            }
          }
        ]
      }
    },
    "data": {
      "attributes": {
        "linkdescription": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "PoloShirt Relationships"</span>
            }
          ]
        }
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
    "requestId": "bde7b024-fc03-4e43-bee4-8e75a6faa3b1",
    "taskId": "bde7b024-fc03-4e43-bee4-8e75a6faa3b1"
  },
  "response": {
    "status": "success",
    "totalRecords": 0
  }
}
</code></pre> 

Verify the updated entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.