---
title: Get Item Status
sidebar: rdp_sidebar
permalink: api_get_itemstatus.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

This API is used to provide chart data in the syndication widget displayed on Entity Manage page.

### Request

To get the item status, you can use the POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/getitemstatus**.

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "connectorstate"
        ],
        "propertiesCriterion": [
          {
            "channelid": {
              "exacts": [
                "rs-amazonsellerus-self"
              ]
            }
          },
          {
            "entitytype": {
              "exacts": "product"
            }
          },
          {
            "entityid": {
              "exacts": "8WPt7B5YTMKW-Ax7WIssNQ"
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

The response to the above request has item syndication statuses across channel, such as published status, validation and publication error status.

<pre>
<code>
{
  "dataObjectOperationResponse": {
    "status": "success",
    "dataObjects": [
      {
        "id": "8b353855-d06b-40eb-b286-a4300b673dfc",
        "type": "connectorstate",
        "systemInfo": {
          "tenantId": "connectorsedev"
        },
        "data": {
          "rs-amazonsellerus-self": {
            "published": 1,
            "validationErrorCount": 1,
            "syndicationErrorCount": 1
          }
        }
      }
    ],
    "totalRecords": 0
  }
}
</code>
</pre>
