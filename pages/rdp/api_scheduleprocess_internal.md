---
title: Schedule Publish
sidebar: rdp_sidebar
permalink: api_scheduleprocess.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

Scheduleprocess API is used to invoke generic objects publish in which the request is passed to extensions via Connector topology. That is, one schedule object per tenant will get invoked at a scheduled interval via this API, through it receives the request and gets the system scheduled profile.This profile in turns collects the generic object(s), gets the message and puts it in appropriate queue.

### Request

To download the connector state information, you can use POST 
**http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/scheduleprocess**.

The following is the sample API request to invoke generic object(s) for schedule publish:

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "attributesCriterion": [
          {
            "taskType": {
              "exact": "connectorService-system_schedule_30_mins"
            }
          },
          {
            "status": {
              "exact": "QUEUED"
            }
          }
        ],
        "typesCriterion": [
          "scheduledrequestobject"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    },
    "rsconnect": {
      "profiles": [
        "sys_connectorService_schedule_30_mins_job"
      ]
    }
  }
}
</code>
</pre>

### Response

The API response for the above request is as follows:

<pre>
<code>
{
    "dataObjectOperationResponse": {
        "status": "success",
        "statusDetail": {
            "code": "RSC1002",
            "message": "Binary object has been submitted for create with work automation id : 0a084a36-6c5e-4c95-b8eb-94a8c12bdc90. Please check back after 10 mins.",
            "messageType": "Info",
            "childTaskIds": [
                "20ea0613-c72c-4792-93c5-8d8cdcc1a6e2"
            ]
        },
        "totalRecords": 0
    }
}
</code>
</pre>