---
title: Start Workflow
sidebar: rdp_sidebar
permalink: api_start_workflow.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to start a workflow:

* [Start Workflow for an Entity](api_start_workflow_scenario1.html)

{% include snippets/header.html %}

## Request Objects

POST {{site.data.rdp_glossary.startworkflow}}

### params

This object indicates the parameters of the JSON request to start a workflow. The following table lists the details of params object:

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

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to start a workflow "NewSKUIntroduction" for a "sku" entity "Polo Mens Shirt Blue_Large":

<pre><code>
POST **{{site.data.rdp_glossary.startworkflow}}**
Headers: Content-Type: application/json
Body:
{    
  "params": {
    "workflow": {
      "workflowName": "NewSKUIntroduction"
    }
  },
  "entity": {
    "id": "skuentity1",
    "name": "Polo Mens Shirt Blue_Large",
    "type": "sku"
  }
}
</code></pre>

**Response**:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "d7a13039-14e5-4052-b917-12ca73c3d588"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "start request successful"
    }
  }
}
</code></pre>

Verify the started workflow:
* You can use {{site.data.rdp_glossary.getgoverndata}} API to verify the started workflow details for the requested entity. See [Get Entity Govern Data](api_get_govern_data.html)
* If you know the details of your elastic server and the indices, then you can verify the started workflow details for the  entity using - http://<<ESSERVER>>:9200/<<tenant_govern_write_index>>/_search?q=<<WorkflowName>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.