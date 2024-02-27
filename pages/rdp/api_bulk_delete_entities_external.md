---
title: Delete Bulk Entities
sidebar: rdp_sidebar
permalink: api_bulk_delete_entities.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete bulk entities:

* [Delete Bulk Entities using Keyword and Attribute Criterion](api_bulk_entity_scenario12.html)
* [Delete Bulk Entities using Properties, Keyword, and Attribute Criterion](api_bulk_entity_scenario13.html)
* [Delete Bulk Entities using Entity IDs](api_bulk_entity_scenario14.html)

## Request

POST {{site.data.rdp_glossary.bulkentityservices}}

**Parameters**: The following table lists the parameters of the JSON request to delete bulk entities:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | params | Yes | Indicates the details about "this" request type. |
| params | taskType | Yes | Indicates the action to be carried out for this request. Set the value as "delete-query" for "this" request.|
| params | operationType| Yes | Indicates whether the intended operation needs to be performed in the online or offline environment.|
| params | query | Yes | Indicates the array of group of query parameters that you are sending in the request for bulk entities deletion.| 
| query | filters -> typesCriterion | No | Indicates a comma separated list of entity types. |
| query | filters-> keywordsCriterion -> keywords | No | Indicates the keywords to search for required bulk entities that you wish to delete.|
| query | filters -> keywordsCriterion -> operator | No | Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND". | 
| query | ids | No | Indicates an array of entity unique identifiers.|
| query | attributeCriterion | No | Indicates an array of attribute names and values that are used to filter the results.|
| query | attributesCriterion -> «AttrName» | No | Indicates the name of the attribute.|
| query | attributesCriterion -> «AttrName» -> «Operator» : «AttrValue» | No | Indicates the type of operator to be used for comparing the AttrValue. Possible values - "eq" (equal to), "gte" (greater than or equal to), and "lte" (less than or equal to).|
| query | filters -> relationshipsCriterion | No | Indicates an array of relationships names and attribute values that are used to filter the results. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> | No | Indicates the name of the relationship. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> -> attributes| No | Indicates an array of relationship attributes. You can use the same filter criteria as applicable for attributes.|


## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request |	returnRequest | Indicates if the request sent is included in the response received or not. |
| request |	requestId	| Indicates a system generated unique request identifier. This can be used to track requests. |
| request	| maxRecords | Indicates the maximum records returned in the response. |
| response | events | List of event objects that matched the search criteria. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of entity objects that matched the search criteria. |

## Example

The following example demonstrates a sample request and response to delete all bulk entities which have "blue" as the value for the "color" attribute:

<pre><code>
POST **{TenantURL or ID}/api/bulkentityservice/createtask**
Headers: Content-Type: application/json
Body:
{
{
  "params": {
    "taskType": "delete-query",
    "operationType": "inboundService",
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ],
        "attributesCriterion": [
          {
            "color": {
              "value": "blue"
            }
          }
        ]
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
        "requestId": "497b6f4b-4989-4a81-b223-1a8686e052f6",
        "taskId": "497b6f4b-4989-4a81-b223-1a8686e052f6"
    },
    "response": {
        "status": "success",
        "totalRecords": 2
    }
}
</code></pre>

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).
* If you know the details of your elastic server and the indices, then you can verify the updated entities using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.