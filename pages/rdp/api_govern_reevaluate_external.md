---
title: Reevaluate Govern Data 
sidebar: rdp_sidebar
permalink: api_govern_reevaluate.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

An entity consists of large volumes of govern data. Consider a scenario, where a user has deleted the govern data of an entity. Now the user wishes to restore the deleted govern data of the entity. This API allows a user to restore the deleted govern data.

This section covers the following scenario to explain the usage of RESTful APIs in the Riversand Platform SDK to restore the deleted govern data of an entity:

* [Reevaluate Deleted Govern Data of an Entity](api_govern_reevaluate_scenario1.html)

{% include callout.html content="**Note**: This API is used mainly used by Riversand Platform for **internal purposes**.
" type="primary" %}

## Example

The following example demonstrates a sample JSON request to restore the deleted govern data for "product" entity having id "MDM_001":

POST {{site.data.rdp_glossary.revaluategoverndata}}

<pre><code>
{
  "entity": {
    "id": "MDM_001",
    "type": "product"
  }
}
</code></pre>

**Response**:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "rrf6e19c-44c5-3b99-b58f-f3cc5c08cf9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Request sent to Kafka successfully"
    },
    "totalRecords": 0
  }
}
</code></pre>

### Request Object

## entity

This object indicates the entity details. The following table lists the details of entity object:

| Property | Description | Type |
|-------|-------------|--------|
| id | Indicates the identifier of the entity. | String |
| type | Indicates the type of the entity. | String |

Data for Sample Scenario: Set the following properties for **entity** object:

| Property | Description | 
|----------|-------------|
| id | MDM_001 |
| type | product |

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
| requestId | rrf6e19c-44c5-3b99-b58f-f3cc5c08cf9e |

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
| statusDetail -> message | Request sent to Kafka successfully |
| totalRecords | 0 |