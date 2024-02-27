---
title: Get Task Details
sidebar: rdp_sidebar
permalink: api_bulk_entity_get_task_details.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get task details which helps you get the status of bulk entities:

* [Get Task Details using Task ID](api_bulk_entity_scenario18.html)
* [Get Task Details using Event Type](api_bulk_entity_scenario19.html)
* [Get Task Details using Task ID, Task Status, and User ID](api_bulk_entity_scenario20.html)
* [Get Task Details using Event Type and Event SubType and Task ID](api_bulk_entity_scenario21.html)
* [Get Task Details where Task Status is "not Queued"](api_bulk_entity_scenario22.html)
* [Get Task Details using Task ID and Entity ID](api_bulk_entity_scenario23.html)
* [Get Task Details of Events whose Event Type Contains an Input String](api_bulk_entity_scenario26.html)
* [Get Task Details Errors using ID](api_event_get_scenario12.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.getevent}}

**Parameters**: The following table lists the parameters of the JSON request to get task details:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | query | Yes | Indicates the search criteria for getting the task details.|
| query | filters -> typesCriterion| Yes | Indicates a comma separated list of events. Possible types are - entitymanageevent, <br/>entitygovernevent, <br/>externalevent.|
| query | filters -> attributeCriterion | Yes | Indicates an array of attribute names and values that are used to filter the results.|
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. |
| options| options -> maxRecords | No| Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 2000.|

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request |	returnRequest|Indicates if the request sent is included in the response or not.|
|request|	requestId	|Indicates a system generated unique request identifier. This can be used to track requests.|
| request	|maxRecords|	Indicates the maximum records returned in the response.|
|response	| events|	List of event objects that matched the search criteria. |
|response|status| Indicates if the request is submitted successfully or not.|
|response|totalRecords|Indicates the list of events that matched the search criteria.|

## Example

The following example demonstrates a sample request and response to get the "Event Sub Type" and "Record Count" using  taskId and Event Type:

**Request**:

<pre><code>
POST **{TenantURL or ID}/api/eventservice/getevent**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "externalevent"
        ],
        "attributesCriterion": [
          {
            "taskId": {
              "exact": "4625edaa-615e-432c-8349-2673e96e2079"
            }
          },
          {
            "eventType": {
              "exact": "BATCH_EXTRACT"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": ["eventSubType","recordCount"]
    },
    "options":{
      "maxRecords":2000
    
    }
  }
}
</code>
</pre>

**Response**:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "47dbc14d-72fb-4e39-8fe9-21148bba921e",
    "maxRecords": 2
  },
  "response": {
    "events": [
      {
        "id": "e105a58f-9358-40b5-b322-b654941b5e87",
        "type": "externalevent",
        "properties": {
          "createdService": "eventManageService",
          "createdBy": "business1@riversand.com_user",
          "createdDate": "2017-09-06T00:39:03.254-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "business1@riversand.com_user",
          "modifiedDate": "2017-09-06T00:39:03.254-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9cd06f1e-5e72-471a-b4e1-ef743f9e0f2f",
                  "value": "PROCESSING_COMPLETED"
                }
              ]
            },
            "recordCount": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b492a82b-b898-4d9d-98ba-90e0c18368d2",
                  "value": 1
                }
              ]
            }
          }
        }
      },
      {
        "id": "36f79444-dbda-4935-865e-e8c21b2f5dd3",
        "type": "externalevent",
        "properties": {
          "createdService": "eventManageService",
          "createdBy": "business1@riversand.com_user",
          "createdDate": "2017-09-06T00:39:02.126-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "business1@riversand.com_user",
          "modifiedDate": "2017-09-06T00:39:02.126-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e48d5db4-20e8-4d90-9b86-4963821904d8",
                  "value": "PROCESSING_STARTED"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 3
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.