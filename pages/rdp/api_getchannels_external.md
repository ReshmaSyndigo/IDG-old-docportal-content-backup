---
title: Get Channels
sidebar: rdp_sidebar
permalink: api_getchannels.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Getchannels endpoint of ConnectorService API is used to get all the integration channels available for that tenant.

### Request

To get all the channels for a tenant, use POST request type for the following:
**http://{WEBURL}:9095/{TENANT_ID}/api/connectorService/getchannels**.

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "podsyndicationserviceconfig"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "properties": [
        "_ALL"
      ]
    },
    "options": {
      "totalRecords": 100
    }
  }
}
</code>
</pre>

### Response

In response to the above request, you get list of channels available for the tenant.

<pre>
<code>
{
    "response": {
        "entities": [
            {
                "id": "1900ef8d-4cd1-4a9c-b8fb-9fdef42d5ccc",
                "name": "Amazon Seller Central US",
                "type": "syndicationchannel",
                "properties": {
                    "createdService": "entityManageService",
                    "createdBy": "system_user",
                    "createdDate": "2019-12-18T09:33:49.874-0600",
                    "modifiedService": "entityManageService",
                    "modifiedBy": "connectoradmin@riversand.com_user",
                    "modifiedDate": "2019-12-26T15:13:31.714-0600",
                    "isEnabled": true
                },
                "data": {
                    "attributes": {
                        "referencecode": {
                            "values": [
                                {
                                    "source": "internal",
                                    "locale": "en-US",
                                    "id": "084ed126-2228-4c9c-8c19-0841aace1456",
                                    "value": "rs-amazonsellerus-self"
                                }
                            ]
                        },
                        "referencevalue": {
                            "values": [
                                {
                                    "source": "internal",
                                    "locale": "en-US",
                                    "id": "19389447-6c74-425f-815d-46188dca7497",
                                    "value": "Amazon Seller Central US"
                                }
                            ]
                        }
                    }
                }
            }
        ],
        "status": "success",
        "totalRecords": 1
    }
}
</code>
</pre>

{% include callout.html content="**Note**: This API returns all enabled and disabled channels that are defined for that tenant. The client application has to use the channels from the response according to the requirement.
" type="primary" %}