---
title: Delete Entity from Workflow
sidebar: rdp_sidebar
permalink: api_govern_delete_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deletegoverndata}}** to delete an entity from a workflow, using a scenario.

## Scenario

To delete "sku" entity "skuentity1" from "NewSKUIntroduction" workflow.

{% include snippets/header.html %}

## Request

To delete the above entity govern data, you can use the REST API {{site.data.rdp_glossary.deletegoverndata}}. In the request send the following details:

### params

This object indicates the parameters of the JSON request to delete a workflow. The following table lists the details of params object:

| Property | Description | Type |
|-------|-------------|--------|
| workflow | Indicates the details of the workflow. | [workflow](#workflow) |

### entity

This object indicates the entity details. The following table lists the details of entity object:

| Property | Description | Type |
|-------|-------------|--------|
| id | Indicates the identifier of the entity. | String |
| name | Indicates the name of the entity. | String |
| type | Indicates the type of the entity. | String |

Data for Sample Scenario: Set the following properties for **entity** object:

| Property | Description | 
|----------|-------------|
| id | skuentity1 |
| name | Polo Mens Shirt Blue_Large |
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
POST **{{site.data.rdp_glossary.deletegoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"workflowName": "NewSKUIntroduction"</span>
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "skuentity1",
    "type": "sku"
  }
}
</code>
</pre>

## Response

If the delete request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "d1b18e82-d8d6-4a29-843c-362b076056eb"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "deleteEntityFromWorkflow request successful"
    },
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.