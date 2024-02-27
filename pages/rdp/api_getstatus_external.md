---
title: Get Syndication Status
sidebar: rdp_sidebar
permalink: api_getstatus.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Getstatus endpoint of ConnectorService API is used to get and display different metrics of syndicated entities in Syndication Dashboard widget of Home App.

### Request

To get the item syndication status, you can use the POST **http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/getstatus**.

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
              "exacts": [
                "sku",
                "product",
                "each",
                "case",
                "displayshipper",
                "mixedmodule",
                "pack",
                "pallet",
                 "sku",
                "product",
                "transportload"
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

The response to the above request has item status, channel status and validation status.

<pre>
<code>
{
  "dataObjectOperationResponse": {
    "status": "success",
    "dataObjects": [
      {
        "id": "082e14c4-4e31-4f3c-b374-83ef2733ee54",
        "type": "connectorstate",
        "systemInfo": {
          "tenantId": "connectorsedev"
        },
        "data": {
          "product": {
            "rs-amazonsellerus-self": {
              "syndicationState": {
                "completed": 2,
                "uninitialized": 3
              },
              "itemState": {
                "new": 1,
                "deprecated": 1,
                "completed": 3
              },
              "channelState": {
                "inProcess": 1,
                "listedSuccess": 1,
                "listedPending": 2,
                "uninitialized": 1
              },
              "validationState": {
                "inProcess": 10,
                "completed": 4,
                "error": 1,
                "uninitialized": 3
              }
            }
          }
        }
      }
    ],
    "totalRecords": 0
  }
}
</code>
</pre>

