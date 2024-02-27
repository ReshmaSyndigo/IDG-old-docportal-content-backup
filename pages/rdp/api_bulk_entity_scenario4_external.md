---
title: Bulk Change Assignments using KeyWord Criterion in Query
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario4.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to change the workflow assignments for the bulk entities using KeyWord Criterion in Query.

## Scenario

Update the "SKU" entities that are having the keyword as "Red" to take the "task" for the "skuSubmission" activity in the "NewSKUIntroduction" workflow using the KeyWord Criterion in Query.

{% include snippets/header.html %}

## Request

To update the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "changeAssignment-query".
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
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku"
        ],
         <span style="background-color: #FFFF00">"keywordsCriterion": {</span>
          "keywords": "*ed",
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
    "requestId": "8f71f638-4cbf-4d70-b278-a6f06cd4426e",
    "taskId": "8f71f638-4cbf-4d70-b278-a6f06cd4426e"
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