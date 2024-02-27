---
title: Transition Workflow
sidebar: rdp_sidebar
permalink: api_transition_workflow.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenario to explain the usage of RESTful APIs in the Riversand Platform SDK to transition from one workflow activity to another workflow activity of an entity:

* [Transition Workflow for an Entity](api_transition_workflow_scenario1.html)

## Example

The following example demonstrates a sample JSON request to transition from "enrichtranslation" activity of "TranslationWorkflow" workflow with "Done" action for sku entity "Polo Mens Shirt":

POST {{site.data.rdp_glossary.transitionWorkflow}}

<pre><code>
{
  "params": {
    "workflow": {
      "workflowName": "TranslationWorkflow",
      "activity": {
        "activityName": "enrichtranslation",
        "action": "Done",
        "comment": "Transition of the workflow activity with Done action"
      }
    }
  },
  "entity": {
    "id": "MDM_001",
    "name": "Polo Mens Shirt",
    "type": "sku"
  }
}
</code></pre>

**Response**:

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

### Request Object

## params

This object indicates the parameters of the JSON request to transition a workflow. The following table lists the details of params object:

| Property | Description | Type |
|-------|-------------|--------|
| workflow | Indicates the details of the workflow. | [workflow](#workflow) |

## entity

This object indicates the entity details. The following table lists the details of entity object:

| Property | Description | Type |
|-------|-------------|--------|
| id | Indicates the identifier of the entity. | String |
| name | Indicates the name of the entity. | String |
| type | Indicates the type of the entity. | String |

Data for Sample Scenario: Set the following properties for **entity** object:

| Property | Description | 
|----------|-------------|
| id | MDM_001 |
| name | Polo Mens Shirt |
| type | sku |

## workflow

This object indicates the workflow details of the entity. The following table lists the details of workflow object:

| Property | Description | Type |
|-------|-------------|--------|
| workflowName | Indicates the name of the workflow. | String |
| activity | Indicates the workflow activity details of the entity. | [activity](#activity) |

Data for Sample Scenario: Set the following properties for **workflow** object:

| Property | Description | 
|----------|-------------|
| workflowName | TranslationWorkflow |

## activity

This object indicates the workflow activity details needed for transistion from one workflow activity to another workflow activity. The following table lists the details of activity object:

| Property | Description | Type |
|-------|-------------|--------|
| activityName | Indicates the name of the workflow activity the entity has to transition from. | String |
| action | Indicates an action performed by the user for an entity to transition from one workflow activity to another activity. | String |
| comment | Indicates the comments entered by the user for an entity to transition from one workflow activity to another activity. | String |

Data for Sample Scenario: Set the following properties for **activity** object:

| Property | Description | 
|----------|-------------|
| activityName | TranslationWorkflow |
| action | Done |
| comment | Transition of the workflow activity with Done action |

### Response Object

The response returned is in a JSON format and includes the following details:

## request

This object indicates details corresponding to the request. The following table lists the details of request object:

| Property | Description | Type |
|-------|-------------|--------|
| returnRequest | Indicates if request sent which is included in the response received or not. | Boolean |
| requestId | Indicates a system generated unique request identifier. This can be used to track requests. | String |

Data for Sample Scenario: Set the following properties for **request** object:

| Property | Description | 
|----------|-------------|
| returnRequest | false |
| requestId | 257feb2d-946e-4889-8893-f641e00b091d |

## response

This object indicates the response details. The following table lists the details of response object:

| Property | Description | Type |
|-------|-------------|--------|
| status | Indicates if the request is submitted successfully or not. | String |
| statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. | String |
| totalRecords | Indicates the total number of records received in the response. | Integer |

Data for Sample Scenario: Set the following properties for **response** object:

| Property | Description |
|----------|-------------|
| status | success |
| statusDetail -> message | transition request successful |
| totalRecords | 0 |