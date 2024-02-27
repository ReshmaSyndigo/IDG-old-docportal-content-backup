---
title: Terminate Workflow
sidebar: rdp_sidebar
permalink: api_govern_terminate_workflow_instance.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.terminateWorkflowInstance}}** to terminate an entity from a workflow, using a scenario.

## Scenario

To terminate "sku" entity "skuentity1" from "newSKUIntroduction" workflow.

{% include callout.html content="**Note**: Once an entity is terminated from the workflow, it implies that the entity is forcibly removed from the workflow and the workflow can no longer be resumed for the entity. In the govern data of the entity the corresponding workflow status and activity status are updated to 'Aborted' and 'Faulted'.
" type="primary" %}

{% include snippets/header.html %}

## Request

To terminate the above entity from the workflow, you can use the REST API {{site.data.rdp_glossary.terminateWorkflowInstance}}. In the request send the following details:

### params

This object indicates the parameters of the JSON request to terminate a workflow. The following table lists the details of params object:

| Property | Description | Type |
|-------|-------------|--------|
| workflow | Indicates the details of the workflow. | [workflow](#workflow) |

### entity

This object indicates the entity details. The following table lists the details of entity object:

| Property | Description | Type |
|-------|-------------|--------|
| id | Indicates the identifier of the entity. | String |
| type | Indicates the type of the entity. | String |

Data for Sample Scenario: Set the following properties for **entity** object:

| Property | Description | 
|----------|-------------|
| id | skuentity1 |
| type | sku |

### workflow

This object indicates the workflow details of the entity. The following table lists the details of workflow object:

| Property | Description | Type |
|-------|-------------|--------|
| workflowName | Indicates the name of the workflow. | String |

Data for Sample Scenario: Set the following properties for **workflow** object:

| Property | Description | 
|----------|-------------|
| workflowName | NewSKUIntroduction |

<pre>
<code>
POST **{{site.data.rdp_glossary.terminateWorkflowInstance}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"workflowName": "newSKUIntroduction"</span>
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "skuentity1",
    "type": "sku"
  }
}
</code>
</pre>

## Response

If the terminate request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "61bc2bfc-3a3c-4fdc-97a6-8cacc8aefbc6"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "terminateWorkflowInstance request successful"
    },
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.