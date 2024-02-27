---
title: Track the status of Bulk Transitions
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario17.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to track the status of Bulk Transitions using Client Attributes.

## Scenario

Track the status of the "SKU" entities that are submitted for workflow transitions.

{% include snippets/header.html %}

## Request

To track the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "transitionWorkflow-query"
* params -> operationType: Specify as "inboundService". 
* params -> workflow : Specify required workflow details to be updated.
* In the query, specify the required typesCriterion and attributeCriterion.
* In the clientAtrributes, provide the required task details which you wish to track.

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"clientAttributes": {</span>
    "taskName": {
      "values": [
        {
          "source": "internal",
          "locale": "en-US",
          "value": "bulk workflow transitions"
        }
      ]
    }
  },
  "params": {
    <span style="background-color: #FFFF00">"taskType": "transitionWorkflow-query",</span>
    "operationType": "inboundService",
    "workflow": {
      "workflowName": "NewSKUIntroduction",
      "activity": {
        "activityName": "skuSubmission",
        "action": "Done",
        "comment": "Requesting the additional information"
      }
    },
    "query": {
      "filters": {
        "attributesCriterion": [
          {
            "color": {
              "value": "blue"
            }
          }
        ],
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    }
  }
}
</code>
</pre> 

## Response

If the request is sent successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "c70d8677-c9c1-47ea-be36-45c34a4731f8",
    "taskId": "c70d8677-c9c1-47ea-be36-45c34a4731f8"
  },
  "response": {
    "status": "success",
    "totalRecords": 3
  }
}
</code></pre>

Verify the status of the request:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the created track request. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.