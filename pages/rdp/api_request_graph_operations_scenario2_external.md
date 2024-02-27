---
title: Track Graph Operations with Queued Status
sidebar: rdp_sidebar
permalink: api_request_graph_operations_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can track the "Send Image for Delete Graph Processing" request with "Queued" status using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API. 

## Scenario

Consider that a SKU is linked to an image and you wish to delete the SKU. Upon deleting the SKU, send the related image relationship for graph processing. When [Send Image for Delete Graph Processing](/{{site.data.app_links_version.APP}}/ddg_riversand_business_language_scenarios_compost3.html){:target="_blank"} business rule is triggered. A request object is generated for this graph operation with the "requestStatus" value as **Queued**.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityGraphManageService" to get the request status of the graph operation.
* query -> fields -> attributes: Specify "_ALL" to get all attributes of the request.

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">  "typesCriterion": [ </span>
          "requestobject"
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00"> "requestGroupId": { </span>
              "exact": "31c63e39-6d57-4594-a6dd-5b11fe451e55"
            },
           <span style="background-color: #FFFF00"> "serviceName": { </span>
              "exact": "entityGraphManageService"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre>

## Response

The following response is received if the requested graph operation is in **Queued** state:

<pre><code>
{
  "id": "714d3a82-53ef-43ef-8ca3-258af6fe70d1",
  "type": "requestobject",
  "properties": {
    "createdService": "requestManageService",
    "createdBy": "system_user",
    "modifiedService": "requestManageService",
    "modifiedBy": "system_user",
    "createdDate": "2021-03-03T00:18:03.521-0600",
    "modifiedDate": "2021-03-03T00:18:03.521-0600"
  },
  "data": {
    "attributes": {
      "entityAction": {
        "values": [
          {
            "id": "0e221481-d2e3-453c-af54-bfbd538a80d3",
            "value": "create",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityId": {
        "values": [
          {
            "id": "ae4df7a6-0113-4912-b6dc-ebdea08676ff",
            "value": "e002",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityType": {
        "values": [
          {
            "id": "940ad4aa-c09f-4a4f-97c4-11649763ae9e",
            "value": "sku",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "serviceName": {
        "values": [
          {
            "id": "c2fea83b-a406-46ee-8f95-3d83eddc58b8",
            "value": "entityGraphManageService",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestId": {
        "values": [
          {
            "id": "51b01b1e-f6e1-4da8-8bf7-c51a0299c1ea",
            "value": "714d3a82-53ef-43ef-8ca3-258af6fe70d1",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      <span style="background-color: #FFFF00"> "requestStatus": { </span>
        "values": [
          {
            "id": "fd0d1543-d712-47c6-866e-c81bcb9a44a3",
            <span style="background-color: #FFFF00"> "value": "queued", </span>
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "relatedRequestId": {
        "values": [
          {
            "id": "5fbd5fed-082b-4ef8-8544-4dccfa8bcd6a",
            "value": "714d3a82-53ef-43ef-8ca3-258af6fe70d1",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestGroupId": {
        "values": [
          {
            "id": "31c63e39-6d57-4594-a6dd-5b11fe451e55",
            "value": "714d3a82-53ef-43ef-8ca3-258af6fe70d1",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "clientId": {
        "values": [
          {
            "id": "fa22b0c3-3814-4133-acb3-4ba729974f5d",
            "value": "rdpclient",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "userId": {
        "values": [
          {
            "id": "253f85a1-7dcd-4ffb-940c-3ca7c3b2dea7",
            "value": "system_user",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestTimestamp": {
        "values": [
          {
            "id": "c992a2b4-cba8-455a-86c5-53d794aebee7",
            "value": "1614752282619",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "ApiService": {
        "values": [
          {
            "id": "858a9b21-c195-49f2-aead-c39ce17d2a5e",
            "value": "queued",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "offset": {
        "values": [
          {
            "id": "37d88c10-9123-4c36-ba13-4bdf03ba7c78",
            "value": 1299,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "partition": {
        "values": [
          {
            "id": "dd5bf8b9-296d-49bb-ac2c-d638d944f377",
            "value": 0,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "topic": {
        "values": [
          {
            "id": "b2a38587-6202-49a4-afd7-ce44a3b35fb4",
            "value": "rdpentitygraphinbound-t1",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      }
    }
  }
}
</code></pre>

{% include callout.html content="**Note**: Once the graph processing is completed for the queued request, the above request object is replaced by the success or error request object.
" type="primary" %}

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.