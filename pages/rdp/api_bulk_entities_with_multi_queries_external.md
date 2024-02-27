---
title: Update Bulk Entities using Multiple Queries 
sidebar: rdp_sidebar
permalink: api_bulk_entities_with_multi_queries.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Consider that you wish to update multiple entities having certain attributes and are at one of the validation states or at one of the step in a workflow. For such scenarios, where multiple entities that you want to update are part of services such as [Govern Services](api_manage_govern_data.html), you can use Multiple Queries through **Combined Get**.

This section covers the following scenarios to explain usage of multiple queries to update the bulk entities:

* [Bulk Transitions using Multiple Queries](api_bulk_entity_scenario10.html)
* [Bulk Change Assignments using Multiple Queries](api_bulk_entity_scenario11.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.bulkentityservices}}

**Parameters**:  The following table lists the parameters of the JSON request to Update Bulk Entities using Multiple Queries:

| Parameters | Name | Required | Description |
|-------------|--------|----------------|-------------|
| Body | params | Yes | Indicates the details about "this" request type. |
| params | taskType | Yes | Indicates the action to be carried out for this request. Possible values are: "process-multi-query","changeAssignment-multi-query", or "transitionWorkflow-multi-query".|
| params | operationType| Yes | Indicates whether the intended operation needs to be performed in the online or offline environment.|
| params | data | Yes | Indicates the section for all business data which you wish to update for the entities. Refer the **Data** in the [Entity Object Structure](api_entity_object_structure.html) for its structural details.|
| Body | entities | Yes | Indicates the **Combined Get** query details.|
| entities | id | Yes | Indicates the unique identifier for "this" Combined Get query. |
| entities | name | No | Indicates the name for "this" Combined Get query. |
| entities | type | Yes | Indicates the type of "this" Combined Get query. |
| entities | data | Yes | Indicates the details of the query data "this" Combined Get has.|
| entities | data -> jsonData -> searchQueries | Yes | Indicates an array of search queries "this" Combined Get has.|
| entities | data -> jsonData -> searchQueries -> serviceName | Yes |Indicates the name of the service on which you are performing the "Combined Get" search. |
| entities | data -> jsonData -> searchQueries -> action | Yes | Indicates the action you wish to perform on "this" search.|
| entities | data -> jsonData -> searchQueries -> searchSequence | Yes | Indicates the order at which this search needs to be performed. If you provide the value as "1" in the searchSequence, that particular search is carried out first.|
| entities | data -> jsonData -> searchQueries -> searchQuery | Yes | Indicates the search query that needs to be performed. Refer the **Query** in the [Bulk Entity Object Structure](api_bulk_entity_process_object_structure_with_query.html) for its structure details. |
| Body | clientAttributes | No | Indicates the details about client attributes.|
| clientAttributes | taskName | No | Indicates the name of the task that you wish to track for this request. |
| clientAttributes | taskType | No | Indicates the type of the task that you wish to track for this request.|

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | taskId | Indicates a system generated unique task identifier. This can be used to track tasks . |
| response | status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | Indicates the number records returned to you in the response. |

## Example

The following example demonstrates a sample request and response to update the one of the attribute of the "sku" bulk entities which are in "skuSubmission" stage of "NewSKUIntroduction" workflow :

<pre><code>
POST **{TenantURL or ID}/api/bulkentityservice/createtask**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "taskType": "process-multi-query",
    "operationType": "inboundService",
    "data": {
      "attributes": {
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
  },
  "entities": [
    {
      "id": "combinedGet",
      "name": "combinedGet",
      "type": "config",
      "data": {
        "jsonData": {
          "searchQueries": [
            {
              "serviceName": "entitygovernservice",
              "action": "get",
              "searchSequence": 1,
              "searchQuery": {
                "query": {
                  "contexts": [
                    {
                      "workflow": "NewSKUIntroduction"
                    }
                  ],
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ],
                    "attributesCriterion": [
                      {
                        "activities": {
                          "attributes": [
                            {
                              "activityName": {
                                "eq": "skuSubmission"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "serviceName": "entityservice",
              "action": "get",
              "searchSequence": 2,
              "searchQuery": {
                "query": {
                  "valueContexts": [
                    {
                      "source": "internal",
                      "locale": "en-US"
                    }
                  ],
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ],
                    "attributesCriterion": [
                      {
                        "cost": {
                          "value": "76.55"
                        }
                      }
                    ]
                  }
                }
              }
            }
          ]
        }
      }
    }
  ]
}
</code></pre>

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "77f9bf7b-c77a-4a28-8cde-e867a45abeea",
    "taskId": "77f9bf7b-c77a-4a28-8cde-e867a45abeea"
  },
  "response": {
    "status": "success",
    "totalRecords": 0
  }
}
</code></pre>

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).
* If you know the details of your elastic server and the indices, then you can verify the updated bulk entities using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.