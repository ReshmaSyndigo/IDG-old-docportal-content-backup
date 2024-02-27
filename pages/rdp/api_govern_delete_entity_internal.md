---
title: Delete Entity Govern Data
sidebar: rdp_sidebar
permalink: api_govern_delete_entity.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete an entity from a workflow and also to delete an entity from all workflows:

* [Delete Entity From Workflow](api_govern_delete_scenario1.html)
* [Delete Entity From All Workflows](api_govern_delete_scenario2.html)

{% include callout.html content="**Note**: 
When you delete an entity from a workflow using the **entitygovernservice**, all the govern data of the entity (business conditions, business rules, and rule mappings) with respect to the specified workflow is deleted.
" type="primary" %}

{% include snippets/header.html %}

## Request Objects

POST {{site.data.rdp_glossary.deletegoverndata}}

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

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example
The following example demonstrates a sample JSON request to delete all the govern data for a "sku" entity in the workflow "NewSKUIntroduction":

<pre><code>
POST **{{site.data.rdp_glossary.deletegoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "workflowName": "NewSKUIntroduction"
  },
  "entity": {
    "id": "skuentity1",
    "type": "sku"
  }
}
</code></pre>

## Response

<pre><code>
{
    "request": {
        "returnRequest": false,
        "params": {},
        "requestId": "61bc2bfc-3a3c-4fdc-97a6-8cacc8aefbc6"
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

Verify the workflow:
* You can use {{site.data.rdp_glossary.getgoverndata}} API to verify the deleted entity govern data in the workflow for the requested entity. See [Get Entity Govern Data](api_get_govern_data.html)
* If you know the details of your elastic server and the indices, then you can verify the deleted entity govern data in the workflow for the entity using - http://<<ESSERVER>>:9200/<<tenant_govern_write_index>>/_search?q=<<WorkflowName>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.