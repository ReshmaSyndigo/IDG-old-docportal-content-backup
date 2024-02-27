---
title: Withdraw Entity
sidebar: rdp_sidebar
permalink: api_withdraw.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

Withdraw end-point of Connector Service API is used to invoke connector withdraw, that is, withdraw the published entity from the intended channel.

### Request

To withdraw the published entity to the channel(s), you can use POST 
**http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/withdraw**.

The following is the sample API request to withdraw the published entity from Amazon channel using Acenda withdraw Connector:

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ]
        "syndicationAction":"withdraw"
      },
      query:
      "valueContexts": [
        {
          "source": "internal",
          "locale": "en-US"
        }
      ],
      "ids": [
        "WbBhDv-_ToCshs_QZPwFug"
      ]
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
      "profilecontexts": [
        {
          "app": "Connector",
          "service": "ENTITY_EXPORT",
          "channel": "ACENDAWITHDRAWCONNECTOR",
          "format": "JSON",
          "source": "internal",
          "role": "admin",
          "user": "system",
          "subtype": "System",
          "order": "10"
        }
      ],
      "syndicationChannelSettings": {
        "name": "Amazon Seller Central US",
        "id": "rs-amazonsellerus-self"
      }
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
      "message": "Binary object has been submitted for create with work automation id : cc922407-fce8-4cf6-9970-79b8fce27ff5. Please check back after 10 mins.",
      "messageType": "Info",
      "childTaskIds": [
        "a5458842-c1dc-4792-be42-7db69356b009"
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Note that, the Request type is IEntityOperationRequest and Response type is IDataOperation.