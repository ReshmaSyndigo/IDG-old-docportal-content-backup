---
title: Prepare Scroll for Event Services Object Structure
sidebar: rdp_sidebar
permalink: api_event_scroll_object_structure.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

A "get" request returns a maximum of 2000 results at a time. If there are more than 2000 results that match the "get" request criteria, then the "prepareScroll" flag must be used to retrieve the remaining results.

The following table indicates the properties of the request and response object for the scenarios used to delete the scrollId:

## Request

The request is a JSON format and includes the following details:

| Parameters | Name | Description | Required |
|-------|--------|----------------|-------------|
| params | prepareScroll | Indicates the parameter to enable scrolling for the "get" query. It is a Boolean parameter and must be set to true. | Yes |
| params | scrollId | Indicates the unique identifier of scroll to be deleted. | Yes | 
| query | filters -> typesCriterion | Indicates the type of event. | Yes | 

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This is used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | events | List of events that match the search criteria. |
| response | status | Indicates if the request is successfully submitted or not. |
| response | totalRecords | Total number of events that match the search criteria. |
| response | scrollId | Indicates the Id to be used while fetching subsequent result sets for the above query. | 

The following example demonstrates the usage of "prepareScroll" flag in a simple "get" request for external events and response for the same:

**Request**:

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "prepareScroll":true,
    "query": {
      "filters": {
        "typesCriterion": [
          "externalevent"
        ]
      }
    }
  }
}
</code>
</pre>

**Response**: Returns the first set of external events with id, name, type and the scrollId. 

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "cfe18468-53d7-4b64-bca0-8331da938bc6",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "8eda6b03-1208-49f7-a9f2-4d79141124ed",
        "name": "ea7516ff-1148-4f2b-afdc-64bae6a6cee9_null",
        "type": "externalevent"
      },
      {
        "id": "63ff99fd-e379-48af-8366-19f96e21935e",
        "name": "ea7516ff-1148-4f2b-afdc-64bae6a6cee9_null",
        "type": "externalevent"
      },
      {
        "id": "2b34dbdf-5dba-4882-958d-f24e1684e51a",
        "name": "ea7516ff-1148-4f2b-afdc-64bae6a6cee9_null",
        "type": "externalevent"
      },
      {
        "id": "203b3f6b-47ce-41bb-b75f-0052d0e818bd",
        "name": "372f0cbd-c10f-49e2-8978-7a6900accb26_null",
        "type": "externalevent"
      },
      {
        "id": "d09f57dc-5163-4999-a1ec-810c2a14ff52",
        "name": "372f0cbd-c10f-49e2-8978-7a6900accb26_null",
        "type": "externalevent"
      }
    ],
    "status": "success",
    "totalRecords": 2073,
    "scrollId": "valid-scroll-id"
  }
}
</code>
</pre>

The following example demonstrates a sample scenario where a scroll Id is deleted:

**Request**:

<pre>
<code>
POST **{{site.data.rdp_glossary.eventclearscroll}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "scrollId": "valid-scroll-id"
  }
}
</code>
</pre>

**Response**: Returns a message saying the scrollId has been deleted.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "9a0a22d7-625b-40d2-8e87-8a63bce36af4"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Successfully cleared scrollId: DnF1ZXJ5VGhlbkZldGNoBwAAAAAAGxlIFm5jamF5TElmUVpXcGNZbDFHUzdZTEEAAAAAABsZRxZuY2pheUxJZlFaV3BjWWwxR1M3WUxBAAAAAAAY4YcWNTNPYlB1cFRSUEdFT0NwZVIwNDB5UQAAAAAAJtGsFk90LXNjUUFWVFRPRlUwbV9GSERyOEEAAAAAABVvZRZST1piU2JJVVRzV2FlVzJtb2hQNFB3AAAAAAAbGUkWbmNqYXlMSWZRWldwY1lsMUdTN1lMQQAAAAAAGOGIFjUzT2JQdXBUUlBHRU9DcGVSMDQweVE=",
          "messageCode": "I0071",
          "messageType": "info"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>



