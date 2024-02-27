---
title: Get connector History
sidebar: rdp_sidebar
permalink: api_gethistory.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

This API is used to provide history of entities being syndicated to different channels.

### Request

To get the history of entities, you can use:
POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/gethistory**.

The following is the sample API request to get the history of entities with timestamp:

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "integrationmessageactivity"
        ],
        "propertiesCriterion": [
          {
            "channelid": {
              "exacts": [
                "f9a2930c919744eb8d293e52b7bdfe53"
              ]
            }
          },
          {
            "reqid": {
              "exacts": [
                "yrwer8-qwey84-cwer344-d3434d"
              ]
            }
          },
          {
            "entityid": {
              "exacts": [
                "entity001","entity002"
              ]
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

### Response

The API response for gethistory API request provides information, such as, entity state & status, timestamp and so on. The API response for the above request is as follows:

<pre>
<code>
{
  "dataObjects": [
    {
      "Channelid": {
        "entity001": [
          {
            "state": "error",
            "status": "Product Active",
            "Timestamp": "2019-07-18T12:13:54.907+0000",
            "requestid": "request001",
            "messageId": "message001"
          },
          {
            "state": "error",
            "status": "Product Active",
            "Timestamp": "2019-07-18T12:13:54.907+0000",
            "requestid": "request001",
            "messageId": "message001"
          },
          {
            "state": "sent",
            "status": "inprogress",
            "Timestamp": "2019-08-18T12:13:54.907+0000",
            "requestid": "request001",
            "messageId": "message002"
          },
          {
            "state": "published",
            "status": "Product Active",
            "Timestamp": "2019-08-18T12:13:54.907+0000",
             "requestid": "request002",
            "messageId": "message004"
             
          }
        ],
        "entity002": [
          {
            "state": "error",
            "status": "Product Active",
            "Timestamp": "2019-07-18T12:13:54.907+0000",
            "requestid": "request001",
            "messageId": "message006"
          },
          {
            "state": "error",
            "status": "Product Active",
            "Timestamp": "2019-07-18T12:13:54.907+0000",
            "requestid": "request001",
            "messageId": "message007"
          },
          {
            "state": "sent",
            "status": "inprogress",
            "Timestamp": "2019-08-18T12:13:54.907+0000",
            "requestid": "request001",
            "messageId": "message008"
          },
          {
            "state": "published",
            "status": "Product Active",
            "Timestamp": "2019-08-18T12:13:54.907+0000",
             "requestid": "request002",
            "messageId": "message009"
             
          }
        ]
      }
    }
  ]
}
</code>
</pre>

