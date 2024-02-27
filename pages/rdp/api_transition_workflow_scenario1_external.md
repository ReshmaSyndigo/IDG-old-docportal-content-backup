---
title: Transition Workflow for an Entity
sidebar: rdp_sidebar
permalink: api_transition_workflow_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.transitionWorkflow}}** for an entity to transition from one workflow activity to another workflow activity, using a scenario.

## Scenario

To transition from "skuSubmission" activity of "newSKUIntroduction" workflow for sku entity "Polo Mens Shirt Blue_Large".

{% include snippets/header.html %}

## Request

To execute the above scenario, you can use the REST API {{site.data.rdp_glossary.transitionWorkflow}}. In the request send the following details:

* workflowName : Specify the appropriate workflow name. In this scenario we have mentioned the workflowName as "newSKUIntroduction".
* activityName: Specify the name of the workflow step the entity has to transition from. In this scenario we have mentioned the activityName as "skuSubmission".
* action: Specify as "Done".
* comment: Specify an appropriate comment.
* entity: Specify the appropriate id, name and type of the entity for which workflow transitions has to occur.

<pre>
<code>
POST **{{site.data.rdp_glossary.transitionWorkflow}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "workflow": {
      <span style="background-color: #FFFF00">"workflowName": "newSKUIntroduction",</span>
      <span style="background-color: #FFFF00">"activity": {</span>
        "activityName": "skuSubmission",
        "action": "Done",
        "comment": "resuming given workflow with Done action"
      }
    }
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "e7NVTT64IKIdd",
    "name": "Polo Mens Shirt Blue_Large",
    "type": "sku"
  }
}
</code>
</pre>

## Response

If the transition workflow request is submitted successfully, then the following response is received from transition workflow API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "257feb2d-946e-4889-8893-f641e00b091d"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "transition request successful"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the transition workflow:
* You can use {{site.data.rdp_glossary.getgoverndata}} API to verify the transition workflow details for the requested entity. See [Get Entity Govern Data](api_get_govern_data.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.