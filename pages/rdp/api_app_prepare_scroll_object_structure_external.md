---
title: Prepare Scroll for Entity App Services Object Structure
sidebar: rdp_sidebar
permalink: api_app_prepare_scroll_object_structure.html
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
| query | filters -> typesCriterion | Indicates the type of entity. | Yes | 

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This is used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | entities | List of entities that match the search criteria. |
| response | status | Indicates if the request is successfully submitted or not. |
| response | totalRecords | Total number of entities that match the search criteria. |
| response | scrollId | Indicates the Id to be used while fetching subsequent result sets for the above query. | 

The following example demonstrates the usage of "prepareScroll" flag in a simple "get" request for sku entities and response for the same:

**Request**:

<pre>
<code>
POST **{{site.data.rdp_glossary.appgetentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "prepareScroll": true,
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      }
    }
  }
}
</code>
</pre>

**Response**: Returns the first set of sku entites with id, name, type and the scrollId. 

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "a6405c8f-2929-4fb6-95d9-ddeb637ccc42",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "ersrfevUEI7CvDU",
        "name": "9B26F0F-9561214",
        "type": "sku"
      },
      {
        "id": "ersZ3eO4LUvUp1X",
        "name": "2CTZ5KV-9561251",
        "type": "sku"
      },
      {
        "id": "03XwfijOS_uLrjJbxRH7XA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "PozSF_I0SWGO4ZFeWUabNg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "ersxWTEl6DpszUx",
        "name": "Issue385487",
        "type": "sku"
      }
    ],
    "status": "success",
    "totalRecords": 9211,
    "scrollId": "valid-scroll-id"
  }
}
</code>
</pre>

The following example demonstrates a sample scenario where a scroll Id is deleted:

**Request**:

<pre>
<code>
POST **{{site.data.rdp_glossary.entityclearscroll}}**
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