---
title: Get Scroll ID and Delete Scroll ID using Clear Scroll
sidebar: rdp_sidebar
permalink: api_event_scroll_support_scenario1.html 
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can view a maximum of 2000 results at a time when a "get" request is performed. Consider a scenario where there are 4000 events in Riversand Platform. When a "get" request for events is performed, you can view only 2000 events, which are displayed in a random order. To view the remaining set of events, you must use **prepareScroll** flag in the "get" request for events. When "get" request for events is performed with **prepareScroll** flag, the first 2000 events are displayed in the response along with the **scrollId**. Using the obtained scrollId in the "get" request for events, you can view the next set of 2000 events which were not displayed in the previous response. Once all sets of events are displayed, you will get a message showing "No objects found".

Similarly, if there are 5000 events, you must use the scrollId in the "get" request for events twice. Hence, by using prepareScroll flag and scrollId parameter, you can view enormous number of events. 

Scroll Support for [Event Services](api_event_service.html) is performed in three steps:

1. [Use Prepare Scroll in Get Events Request](#use-prepare-scroll-in-get-events-request)
2. [Use Scroll Id in Get Request](#use-scroll-id-in-get-request)
3. [Delete Scroll Id using Clear Scroll](#delete-scroll-id-using-clear-scroll)

## Use Prepare Scroll in Get Events Request 

Scenario - To get external events present in the system, using the prepareScroll flag.

* params -> prepareScroll: Specify as true.
* filters -> typesCriterion: Specify as externalevent.

{% include snippets/header.html %}

**Request:** 

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
  	<span style="background-color: #FFFF00">"prepareScroll":true,</span>
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "externalevent"
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
    "params": {},
    "requestId": "b075fd3c-ed1b-4dfc-bb27-15199ce1cec9",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "7260301a-92d4-4cd1-a2be-559d16794e7a",
        "type": "externalevent"
      },
      {
        "id": "5cd4af6a-1ad8-41b3-b2ca-fa5f1d129eac",
        "type": "externalevent"
      },
      {
        "id": "2da14bb1-50fe-47a3-b50d-524ae80be1d9",
        "type": "externalevent"
      },
      {
        "id": "da496f8f-cc07-4500-a825-9e85370e142f",
        "type": "externalevent"
      },
      {
        "id": "0e295e1c-278d-4eb8-9c50-7d35558644b4",
        "type": "externalevent"
      }
      .
      .
      .
      .
    ],
    "status": "success",
    "totalRecords": 2435,
    "scrollId": "DnF1ZXJ5VGhlbkZldGNoBwAAAAACM0BwFnpWRWRiOTNyUkVHNG9uNWFmNUVhUmcAAAAAAjNAbhZ6VkVkYjkzclJFRzRvbjVhZjVFYVJnAAAAAAIzQG8WelZFZGI5M3JSRUc0b241YWY1RWFSZwAAAAACM0BxFnpWRWRiOTNyUkVHNG9uNWFmNUVhUmcAAAAAAjNAbRZ6VkVkYjkzclJFRzRvbjVhZjVFYVJnAAAAAAJJrXYWQTJkYmZ5UEVSdDZnQWtfS2J3a2NJZwAAAAACSa13FkEyZGJmeVBFUnQ2Z0FrX0tid2tjSWc="
  }
}
</code>
</pre> 

## Use Scroll Id in Get Request

Scenario - To get the remaining external events using the scroll Id obtained in the previous response.

* params -> scrollId: Specify the scroll Id obtained in the previous response.
* filters -> typesCriterion: Specify as externalevent.

<br/>
**Request:** 

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"scrollId": "valid-scroll-id",</span>
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "externalevent"
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
    "params": {},
    "requestId": "b075fd3c-ed1b-4dfc-bb27-15199ce1cec9",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "7260301a-92d4-4cd1-a2be-559d16794e7a",
        "type": "externalevent"
      },
      {
        "id": "5cd4af6a-1ad8-41b3-b2ca-fa5f1d129eac",
        "type": "externalevent"
      },
      {
        "id": "2da14bb1-50fe-47a3-b50d-524ae80be1d9",
        "type": "externalevent"
      },
      {
        "id": "da496f8f-cc07-4500-a825-9e85370e142f",
        "type": "externalevent"
      },
      {
        "id": "0e295e1c-278d-4eb8-9c50-7d35558644b4",
        "type": "externalevent"
      }
    ],
    "status": "success",
    "totalRecords": 2435
  }
}
</code>
</pre>

## Delete Scroll Id using Clear Scroll 

Each scrollId remains valid for five minutes which is pre configured in Riversand Platform. The scrollId is automatically deleted after five minutes. You can explicitly delete the scrollId before five minutes of its creation, using the clearScroll API.

Scenario - To delete the [obtained](#use-prepare-scroll-in-get-events-request) scroll Id.

* params -> scrollId: Specify the scroll Id obtained in the previous response.

<br/>
**Request:** 

<pre>
<code>
POST **{{site.data.rdp_glossary.eventclearscroll}}**
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

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

{% include callout.html content="**Notes**:<br/> 
*  Only the first **get** request must have **prepareScroll** flag set to true. Subsequent requests must contain a valid scrollId parameter.
* For events having large volume of data, it is recomended to use the maxRecord parameter and retrieve the results.
" type="primary" %}