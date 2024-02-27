---
title: Slowness in REST API calls
sidebar: rdp_sidebar
permalink: api_troubleshooting_rest_api_calls_being_slow.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand API provides troubleshooting event that allows you to view issues for slowness in RESTful API call. When you make a REST API call using keyword **GetRestAPIResponse**, and if it exceeds the threshold value (1 second or 1000 millisecond), then an event with eventSubType (REST_API_RESPONSE_DURATION_LIMIT) will get generated.

You can view attributes such as URL, eventSubType, restAPIResponseDuration, responseSize so on, and also the corresponding responses.

## Scenario

To display the request and response for slown REST API call. 

{% include snippets/header.html %}

## Request

This is the request to view the troubleshooting events for slow REST API Calls.

<pre>
<code>
POST **{{WEBURL}}:{{WEBPORT}}/{{TENANT_ID}}/api/eventservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"troubleshootingevent"</span>
        ],
        "attributesCriterion": [
          {
            "eventSubType": {
              <span style="background-color: #FFFF00">"exact": "REST_API_RESPONSE_DURATION_LIMIT"</span>
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>


## Response

Returns the response for REST API when exceeds threshold value and causes slow REST API call.

<pre><code>
{
  <span style="background-color: #FFFF00">"id": "7f9e5e67-cb53-4d5f-9e30-87308db9aac1",</span>
  <span style="background-color: #FFFF00">"type": "troubleshootingevent",</span>
  <span style="background-color: #FFFF00">"domain": "eventDataObject",</span>
  "properties": {
    "createdService": "externalEventManageService",
    "createdBy": "qavendor@riversand.com_user",
    "modifiedService": "externalEventManageService",
    "modifiedBy": "qavendor@riversand.com_user",
    "createdDate": "2020-06-24T03:26:46.321-0500",
    "modifiedDate": "2020-06-24T03:26:46.321-0500"
  },
  "data": {
    "attributes": {
      <span style="background-color: #FFFF00">"url"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "d921472d-b8b1-4143-b0d2-0eb16ed630d9",
            <span style="background-color: #FFFF00">"value": "https://www.youtube.com"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"eventSubType"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "0b127062-8233-457b-9967-172fd6c5a226",
            <span style="background-color: #FFFF00">"value": "REST_API_RESPONSE_DURATION_LIMIT"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"restAPIResponseDuration"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "94bb8620-8a8c-4b8a-9017-154ccc7ebad2",
            <span style="background-color: #FFFF00">"value": 1087</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"responseSize"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "8cad5f70-ec8b-44df-9ad5-ddd54336a660",
            <span style="background-color: #FFFF00">"value": 355018</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"createdOn"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "8a3dbc50-5031-4753-966c-fcd702b91628",
            <span style="background-color: #FFFF00">"value": "2020-06-24T03:26:46.321-0500"</span>
          }
        ]
      },
      "engine": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "10353a8b-d806-45e0-bb43-1061b52303c7",
            "value": "RDP"
          }
        ]
      },
      "module": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "b4779145-14b3-4c94-80a2-bf12f79c5504",
            "value": "entityManageService"
          }
        ]
      },
      <span style="background-color: #FFFF00">"taskId"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            <span style="background-color: #FFFF00">"id": "0cdeea04-9123-4187-b599-c3de0c4c2506"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"userId"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "39791e16-7bd7-4344-8749-d29987e611f3",
            <span style="background-color: #FFFF00">"value": "qavendor@riversand.com_user"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"clientId"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "241c9b7b-df56-488a-9110-feaf99f9e78e",
            <span style="background-color: #FFFF00">"value": "rdpclient"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"requestId"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "fc68a04e-ecc2-4441-8d12-3f75b42b115c",
            <span style="background-color: #FFFF00">"value": "39509ebe-0eb7-49f3-a7f0-9a92a68be4df"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"entityType"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "9a9eccac-d193-45a3-94c2-b6bca482342a",
            <span style="background-color: #FFFF00">"value": "sku"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"entityId"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "c0b74f1d-bb75-440a-8ea9-74a9eedf9fce",
            <span style="background-color: #FFFF00">"value": "entity0"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"eventType"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "a6fa4edd-f235-4cb0-bb7f-d7710a8d8b51",
            <span style="background-color: #FFFF00">"value": "GOVERNANCE_ERROR"</span>
          }
        ]
      },
      <span style="background-color: #FFFF00">"entityAction"</span>: {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "acfd0800-cde6-424b-9588-ab40c253c0a7",
            <span style="background-color: #FFFF00">"value": "create"</span>
          }
        ]
      }
    }
  }
}
</code></pre>
