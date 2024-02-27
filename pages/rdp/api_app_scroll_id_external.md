---
title: Get Scroll ID and Delete Scroll ID using Clear Scroll for Entity App Service
sidebar: rdp_sidebar
permalink: api_app_scroll_id.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can view a maximum of 2000 results at a time when a "get" request is performed. Consider a scenario where there are 4000 entities in Riversand Platform. When a "get" request for entities is performed, you can view only 2000 entities, which are displayed in a random order. To view the remaining set of entites, you must use **prepareScroll** flag in the "get" request for entities. When "get" request for entities is performed with **prepareScroll** flag, the first 2000 entities are displayed in the response along with the **scrollId**. Using the obtained scrollId in the "get" request for entities, you can view the next set of 2000 entities which were not displayed in the previous response. Once all sets of entities are displayed, you will get a message showing "No objects found".

Similarly, if there are 5000 entities, you must use the scrollId in the "get" request for entities twice. Hence, by using prepareScroll flag and scrollId parameter, you can view enormous number of entities. 

Scroll Support for [Entity App Services](api_app_service.html) is performed in three steps:

1. [Use Prepare Scroll in Get Entities Request](#use-prepare-scroll-in-get-entities-request)
2. [Use Scroll Id in Get Request](#use-scroll-id-in-get-request)
3. [Delete Scroll Id using Clear Scroll](#delete-scroll-id-using-clear-scroll)

## Use Prepare Scroll in Get Entities Request 

Scenario - To get sku entities present in the system, using the prepareScroll flag.

* params -> prepareScroll: Specify as true.
* filters -> typesCriterion: Specify as sku.

{% include snippets/header.html %}

**Request:** 

<pre>
<code>
POST **{{site.data.rdp_glossary.appgetentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"prepareScroll": true,</span>
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku"
        ]
      }
    }
  }
}
</code>
</pre>

**Response:**

If the request is submitted successfully, then the following response is received from the API:

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
      .
      .
      .
      .
    ],
    "status": "success",
    "totalRecords": 9216,
    "scrollId": "valid-scroll-id"
  }
}
</code>
</pre> 

## Use Scroll Id in Get Request

Scenario - To get the remaining sku entities using the scroll Id obtained in the previous response.

* params -> scrollId: Specify the scroll Id obtained in the previous response.
* filters -> typesCriterion: Specify as sku.

<br/>
**Request:** 

<pre>
<code>
POST **{{site.data.rdp_glossary.appgetentity}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"scrollId": "valid-scroll-id",</span>
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku"
        ]
      }
    }
  }
}
</code>
</pre>

**Response:**

If the request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "195f4e6e-dd14-4f9a-a7ae-4a9f1f6442c2",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "Kb8TXr9vTRyvMcHJ_8pZCQ",
        "name": "June13run5Kperf1339",
        "type": "sku"
      },
      {
        "id": "tkq5o6uiT3u2JRo8msmI3Q",
        "name": "June13run5Kperf1478",
        "type": "sku"
      },
      {
        "id": "M-XzrRxRSPWyqeuePFSOHA",
        "name": "June13run5Kperf1362",
        "type": "sku"
      },
      {
        "id": "yIrNMuY4QtiFzA8wkKburQ",
        "name": "June13run5Kperf1471",
        "type": "sku"
      },
      {
        "id": "enQprtucQH-2OXKKOOc-xg",
        "name": "June13run5Kperf1588",
        "type": "sku"
      }
      .
      .
      .
      .
    ],
    "status": "success",
    "totalRecords": 9216,
    "scrollId": "valid-scroll-id"
  }
}
</code>
</pre>

## Delete Scroll Id using Clear Scroll 

Each scrollId remains valid for five minutes which is pre configured in Riversand Platform. The scrollId is automatically deleted after five minutes. You can explicitly delete the scrollId before five minutes of its creation, using the clearScroll API.

Scenario - To delete the [obtained](#use-prepare-scroll-in-get-entities-request) scroll Id.

* params -> scrollId: Specify the scroll Id obtained in the previous response.

<br/>
**Request:** 

<pre>
<code>
POST **{{site.data.rdp_glossary.entityclearscroll}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"scrollId": "valid-scroll-id"</span>
  }
}
</code>
</pre>

**Response:**

If the request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "c55f4e59-8fd6-4daa-bb39-921ed9723f18"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Cleared scrollId DnF1ZXJ5VGhlbkZldGNoBwAAAAAAkU4GFkZ2SDhOVHRQVGN5Y3JMT1BjYnY4akEAAAAAAItEBRZiZUlzYUlrSVFGMnUya01admtTRXhRAAAAAABjaBgWZWF6X2h1bzhUZ21lemFlZUdXeW4wQQAAAAAAhA2GFjQ0UURyM0J1U0Z5UHZFTkNEQWExZWcAAAAAAI6QMhY4cEtVY21HWVNTLUVmdGxtQlJiZGFnAAAAAACRTgcWRnZIOE5UdFBUY3ljckxPUGNidjhqQQAAAAAAjpAzFjhwS1VjbUdZU1MtRWZ0bG1CUmJkYWc= successfully ",
          "messageCode": "I0071",
          "messageType": "info"
        },
        {
          "message": "Released 7 search contexts after clearScroll.",
          "messageCode": "I0072",
          "messageType": "info"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

{% include callout.html content="**Notes**:<br/> 
* Only the first **get** request must have **prepareScroll** flag set to true. Subsequent requests must contain a valid scrollId parameter.
* For entities having large volume of data, it is recommended to use the maxRecord parameter and retrieve the results.
" type="primary" %}