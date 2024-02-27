---
title: Bulk Change Assignments using Entity IDs in Query
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario5.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to change the workflow assignments for the bulk entities using the Entity IDs in Query.

## Scenario

Update the "SKU" entities using Entity IDs to release the "task" for "skuSubmission" activity in the "NewSKUIntroduction" workflow using the Entity IDs in Query.

{% include snippets/header.html %}

## Request

To update the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "changeAssignment-query".
* params -> operationType: Specify as "inboundService".
* params -> workflow: Specify the required workflow details to be updated.
* In the query, specify the required typesCriterion and Entity IDs. 

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
      <span style="background-color: #FFFF00">"ids": [</span>
        "PMB-001",
        "PMB-002"
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "data": {
      "attributes": {
        "cost": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": 125.88
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
    "requestId": "fc6fb605-ac93-4303-a484-c2befd61f129",
    "taskId": "fc6fb605-ac93-4303-a484-c2befd61f129"
  },
  "response": {
    "status": "success",
    "totalRecords": 6
  }
}
</code></pre> 

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.