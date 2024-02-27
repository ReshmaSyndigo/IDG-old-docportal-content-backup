---
title: Publish Entity
sidebar: rdp_sidebar
permalink: api_publish.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

Publish end-point of Connector Service API is used to invoke connector publish, in which the request is sent via RSConnectTopology to ConnectorTopology. that is, it helps to publish entity to the intended channel through internal connector.

### Request

To publish the entity to the channel(s), you can use POST 
**http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/publish**.

The following is the sample API request to publish the entity:

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "product",
          "sku",
          "bundle"
        ]
      },
      "valueContexts": [
        {
          "source": "internal",
          "locale": "en-US"
        }
      ],
      "ids": [
        "TX1JXQHARymemrAHgh_MzA"
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
          "service": "ENTITY_EXPORT",
          "channel": "ALL",
          "format": "JSON",
          "source": "internal",
          "subtype": "System",
          "order": 10
        }
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