---
title: Bulk Change Assignments using Attribute Criterion in Query
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario6.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to change the workflow assignments for the bulk entities using the Attribute Criterion in Query.

## Scenario

Update the "SKU" entities that are having the "mdmid" attribute as "true" to take the "task" for "skuSubmission" activity in the "NewSKUIntroduction" workflow using the Entity IDs in Query.

{% include snippets/header.html %}

## Request

To update the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "changeAssignment-query".
* params -> operationType: Specify as "inboundService".
* params -> workflow: Specify the required workflow details to be updated.
* In the query, specify the required typesCriterion and attributesCriterion.

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"taskType": "changeAssignment-query",</span>
    "operationType": "inboundService",
    <span style="background-color: #FFFF00">"workflow": {</span>
      "workflowName": "NewSKUIntroduction",
      "activity": {
        "activityName": "skuSubmission",
        "newlyAssignedUserName": "dev1admin@riversand.com"
      }
    },
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "mdmid": {
              "hasvalue": true
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
      "maxRecords": 100
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
    "requestId": "8ed42087-8fa4-4419-8f61-4cb353d4460e",
    "taskId": "8ed42087-8fa4-4419-8f61-4cb353d4460e"
  },
  "response": {
    "status": "success",
    "totalRecords": 2
  }
}
</code></pre> 

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.