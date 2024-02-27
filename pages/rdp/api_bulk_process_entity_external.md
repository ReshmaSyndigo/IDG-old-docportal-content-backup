---
title: Process Bulk Entities
sidebar: rdp_sidebar
permalink: api_bulk_process_entity.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Consider that you wish to Create or Update Bulk Entities. For such requirements, in the "request", send "process" or "process-query" as "taskType". This section covers the following scenarios to explain the usage of these taskTypes to update the bulk entities:

* [Update Bulk Entities to add a Relationship Attribute](api_bulk_entity_scenario1.html)
* [Update Bulk Entities with a Self Attribute](api_bulk_entity_scenario2.html)
* [Update Bulk Entities without using Query](api_bulk_entity_scenario3.html)

{% include callout.html content="**Note**:<br/> Refer [Bulk Entity Object Structure for Process without using Query](api_bulk_entity_process_object_structure_wout_query.html) for **Creation of bulk entities**.
" type="primary" %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.bulkentityservices}}

**Parameters**: You can send the requests either using a query or without using a query. Depending on this, the parameters that you send in the request gets changed.

* The following table lists the parameters of the JSON request **using** a query:

| Parameters | Name | Required | Description |
|-------------|--------|----------------|-------------|
| Body | params | Yes | Indicates the details about "this" request type. |
| params | taskType | Yes | Indicates the action to be carried out for this request. Set the value as "process" for "this" request.|
| params | operationType| Yes | Indicates whether the intended operation needs to be performed in the online or offline environment.|
| params | query | Yes | Indicates the array of group of query parameters that you are sending in the request for which the update or delete is carried out. | 
| query | filters -> typesCriterion | No | Indicates a comma separated list of entity types. |
| query | keywordsCriterion -> keywords | No | Indicates the keywords to be used to filter the results.|
| query | keywordsCriterion -> operator | No | Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND". | 
| query | attributeCriterion | No | Indicates an array of attribute names and values that are used to filter the results.|
| query | attributesCriterion -> «AttrName» | No | Indicates the name of the attribute.|
| query | attributesCriterion -> «AttrName» -> operator | Yes | Indicates the operator to perform the type of the search on the given attributes. Possible values: eq, exact, exacts, not, _AND, and _OR. |
| params | data | Yes | Indicates the section for all business data which you wish to update for the entities. You can refer the **Data** in the [Entity Object Structure](api_entity_object_structure.html) for its structural details.|

{% include callout.html content="**Notes**:
The following list details the various operator used for attributeCriterions:
* eq: Performs the 'Equals' search on the Integer Types attributes values.
* exact : Performs the 'Exact' search on the given attributes values
* exacts : Performs the 'OR' search on given array of attributes values. It returns any one of the attribute value from the given which is matched.
* not : Performs the 'Not' operation on the search.
* _AND : Performs the 'AND' operation on the search.
* _OR : Performs the 'OR' operation on the search.
" type="primary" %}

* The following table lists the parameters of the JSON request **without using** a query:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | params | Yes | Indicates the details about "this" request type. |
| params | taskType | Yes | Indicates the action to be carried out for this request.|
| params | operationType| Yes | Indicates whether the intended operation needs to be performed in the online or offline environment.|
| Body | entities | Yes | Indicates the information about the entities that you wish to create or update. You can refer [Entity Object Structure](api_entity_object_structure.html) for its structural details.| 

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track the requests. |
| request | taskId | Indicates a system generated unique task identifier. This can be used to track the tasks. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | Indicates the number records returned to you in the response. |

{% include callout.html content="**Note**:<br/>
The response object is same for both the type of the requests.
" type="primary" %}

## Example

The following example demonstrates a sample request and response to update one of the attribute of the "sku" bulk entities having the Keyword criterion as "PBM-001", "PBM-002", and "PBM-003" to color attribute:

<pre><code>
POST **{TenantURL or ID}/api/bulkentityservice/createtask**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "taskType": "process-query",
    "operationType": "inboundService",
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ],
        "keywordsCriterion": {
          "keywords": "PBM*",
          "operator": "_AND"
        }
      }
    },
    "data": {
      "attributes": {
        "color": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "Blue"
            }
          ]
        }
      }
    }
  }
}
</code></pre>

**Response**:
<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "0259b006-73dd-438d-944b-3de1b4cecc79",
        "taskId": "0259b006-73dd-438d-944b-3de1b4cecc79"
    },
    "response": {
        "status": "success",
        "totalRecords": 0
    }
}
</code></pre>


Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).
* If you know the details of your elastic server and the indices, then you can verify the created entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.