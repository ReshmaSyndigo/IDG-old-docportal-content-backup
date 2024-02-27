---
title: Workflow Transitions for Bulk Entities
sidebar: rdp_sidebar
permalink: api_bulk_transitions.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Consider that you wish to transition the Bulk Entities from one workflow stage to another. For such requirements, in the "request", send "transitionWorkflow" or "transitionWorkflow-query" as "taskType". This section covers the following scenarios to explain the usage of these taskTypes to perform "Workflow Transitions" for the bulk entities:

* [Bulk Transitions using KeyWord Criterion in Query](api_bulk_entity_scenario7.html)
* [Bulk Transitions using Entity IDs in Query](api_bulk_entity_scenario8.html)
* [Bulk Transitions using Attribute Criterion in Query](api_bulk_entity_scenario9.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.bulkentityservices}}

**Parameters**:  You can send the requests either using a query or without using a query. Depending on this, the parameters that you send in the request gets changed.

* The following table lists the parameters of the JSON request **using** a query:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | params | Yes | Indicates the details about "this" request type. |
| params | taskType | Yes | Indicates the action to be carried out for this request. Set the value as "transitionWorkflow-query" for "this" request.|
| params | operationType| Yes | Indicates whether the intended operation needs to be performed in the online or offline environment.|
| params | workflow | Yes | Indicates the details about the workflow for which you wish to change the assignment action.|
| workflow | workflowName | Yes | Indicates the name of the workflow.|
| workflow | activity | Yes | Indicates the details about the workflow activity. |
| workflow | activity -> activityName | Yes | Indicates the name of the workflow activity.|
| workflow | activity -> action | Yes | Indicates the action to be carried out for "this" activity. Possible values are : Submit, Approve Assortment, Request Info, Reject, Resubmit, Approve, and Done. |
| workflow | activity -> comment | No | Indicates the comment to be provided for "this" action. |
| params | query | Yes | Indicates the array of group of query parameters that you are sending in the request for bulk entities creation, updation or deletion.| 
| query| filters -> typesCriterion | No | Indicates a comma separated list of entity types. |
| query | keywordsCriterion -> keywords | No | Indicates the keywords to be used to filter the results.|
| query | keywordsCriterion -> operator | No | Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND". | 
| query | ids | No | Indicates an array of entity unique identifiers.|
| query | attributeCriterion | No | Indicates an array of attribute names and values that are used to filter the results.|
| query | attributesCriterion -> «AttrName» | No | Indicates the name of the attribute.|
| query | attributesCriterion -> «AttrName» -> «Operator» : «AttrValue» | No | Indicates the type of operator to be used for comparing the AttrValue. Possible values - "eq" (equal to), "gte" (greater than or equal to), and "lte" (less than or equal to).|

* The following table lists the parameters of the JSON request **without using** a query:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | params | Yes | Indicates the details about "this" request type. |
| params | taskType | Yes | Indicates the action to be carried out for this request. Set the value as "transitionWorkflow" for "this" request.|
| params | operationType| Yes | Indicates whether the intended operation needs to be performed in the online or offline environment.|
| params | workflow | Yes | Indicates the details about the workflow for which you wish to change the assignment action.|
| workflow | workflowName | Yes | Indicates the name of the workflow.|
| workflow | activity | Yes | Indicates the details about the workflow activity. |
| workflow | activity -> activityName | Yes | Indicates the name of the workflow activity.|
| workflow | activity -> action | Yes | Indicates the action to be carried out for "this" activity. Possible values are : Submit, Approve Assortment, Request Info, Reject, Resubmit, Approve, and Done. |
| workflow | activity -> comment | No | Indicates the comment to be provided for "this" action. |
| Body | entities | Yes | Indicates the information about the entities that you wish to update. |
| entities | id | Yes |  Indicates entity unique identifier. |
| entities | type | Yes | Indicates entity Type.|
| entities | name | No | Indicates the name of the entities.|

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | taskId | Indicates a system generated unique task identifier. This can be used to track tasks . |
| response | status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | Indicates the number records returned to you in the response. |

{% include callout.html content="**Note**:<br/>
The response object is same for both the type of the requests.
" type="primary" %}

## Example

The following example demonstrates a sample request and response to transition the bulk entities of type "sku" - "PoloMens Blue Shirt Large" and "PoloMens Blue Shirt Medium" which are in the "skuSubmission" step of the "NewSKUIntroduction" workflow with the "Done" action **without using the query**:

<pre><code>
POST **{TenantURL or ID}/api/bulkentityservice/createtask**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "taskType": "transitionWorkflow",
    "operationType": "inboundService",
    "workflow": {
      "workflowName": "NewSKUIntroduction",
      "activity": {
        "activityName": "skuSubmission",
        "action": "Done",
        "comment": "Approving entity"
      }
    }
  },
  "entities": [
    {
      "id": "PMB-001",
      "name": "PoloMens Blue Shirt Large",
      "type": "sku"
    },
    {
      "id": "PMB-002",
      "name": "PoloMens Blue Shirt Medium",
      "type": "sku"
    }
  ]
}
</code></pre>

**Response**:
<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "6b346b58-7bf4-4675-93d3-3fd330018935",
        "taskId": "6b346b58-7bf4-4675-93d3-3fd330018935"
    },
    "response": {
        "status": "success",
        "totalRecords": 2
    }
}
</code></pre>


Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).
* If you know the details of your elastic server and the indices, then you can verify the created entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.