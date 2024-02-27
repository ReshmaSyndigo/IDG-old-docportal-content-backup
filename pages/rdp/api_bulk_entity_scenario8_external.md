---
title: Bulk Transitions using Entity IDs in Query
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario8.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to transition the bulk entities from one stage to another using the Entity IDs in the Query.

## Scenario

Update the "SKU" entities that are having the entity IDs as "PMB-001" and "PMB-002" which are in the "Provide Additional Info" stage of "NewSKUIntroduction" Workflow with the "Done" action using Entity IDs in the Query.

{% include snippets/header.html %}

## Request

To update the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "transitionWorkflow-query".
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
    <span style="background-color: #FFFF00">"taskType": "transitionWorkflow-query",</span>
    "operationType": "inboundService",
    <span style="background-color: #FFFF00">"workflow": {</span>
      "workflowName": "NewSKUIntroduction",
      "activity": {
        "activityName": "skuSubmission",
        "action": "Done",
        "comment": "Provide the additional info for the SKUs reviewed"
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
      "size": {
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
    "requestId": "fc6fb605-ac93-4303-a484-c2befd61f129",
    "taskId": "fc6fb605-ac93-4303-a484-c2befd61f129"
  },
  "response": {
    "status": "success",
    "totalRecords": 5
  }
}
</code></pre> 

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.