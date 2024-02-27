---
title: Download Connector State
sidebar: rdp_sidebar
permalink: api_download_connstate.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

The download connector state API is used to download connector state objects in the format of excel. When user selects the entities and connector objects, and clicks the download option in the UI, the download connector state API is called and the connector state objects will get downloaded in the format of excel.

### Request

To download the connector state information, you can use POST 
**http://{WEBURL}:9095/{TENANT_ID}/api/rsConnectService/downloadDataJob**.

The following is the sample API request to download the connector state information:

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
                                "product",
                                "sku"
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
        },
        "options": {
            "maxRecords": 10000
        },
        "rsconnect": {
            "includeValidationData": false,
            "profilecontexts": [
                {
                    "app": "RSConnect",
                    "service": "CONNECTOR_STATE_EXPORT",
                    "channel": "JOB",
                    "format": "Excel",
                    "source": "internal",
                    "role": "admin",
                    "user": "system",
                    "subtype": "User",
                    "order": "10"
                }
            ]
        }
    },
    "clientState": {
        "notificationInfo": {
            "userId": "username@riversand.com_user"
        }
    },
    "fileName": "EntityData"
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
        "dataObjects": [
            {
                "properties": {
                    "workAutomationId": "c05f2cd2-f733-4485-a06b-7cd126a89148"
                }
            }
        ],
        "statusDetail": {
            "code": "RSC2162",
            "message": "Download data job has been initiated with work automation id : c05f2cd2-f733-4485-a06b-7cd126a89148.",
            "messageType": "Info"
        },
        "totalRecords": 0
    }
}
</code>
</pre>
