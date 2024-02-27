---
title: Bulk Transitions using KeyWord Criterion in Query
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario7.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to transition the bulk entities from one stage to another using the KeyWord Criterion in Query.

## Scenario

Update the "SKU" entities that are having the keywords as "Rosetti" and "Bags" which are in the "skuSubmission" stage of "NewSKUIntroduction" Workflow with the "Done" action using the KeyWord Criterion in Query.

{% include snippets/header.html %}

## Request

To update the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "transitionWorkflow-query".
* params -> operationType: Specify as "inboundService".
* params -> workflow: Specify the required workflow details to be updated.
* In the query, specify the required typesCriterion and keywordsCriterion.

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"taskType": "transitionWorkflow-query",</span>
    "operationType": "inboundService",
    <span style="background-color: #FFFF00">"workflow": {</span>
      "workflowName": "NewSKUIntroduction",
      "activity": {
       "activityName": "skuSubmission",
        "action": "Done",
        "comment": "Submitting the new skus"
      }
    },
    "query": {
     "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
         <span style="background-color: #FFFF00">"keywordsCriterion": {</span>
          "keywords": "*B-1001",
          "operator": "_AND"
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
    "requestId": "dbaf6a38-62cb-4f2a-8ceb-e04102cd6723",
    "taskId": "dbaf6a38-62cb-4f2a-8ceb-e04102cd6723"
  },
  "response": {
    "status": "success",
    "totalRecords": 4
  }
}
</code></pre> 

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.