---
title: RSHub Service
sidebar: rdp_sidebar
permalink: api_rshubservice.html
folder: rdp
type: HowToAPI
# layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform provides the ability to import and export data to and from various external (syndication) channels through RSHub service. 

## Collect

This API is used to collect data from the defined external channels via RSHub. Currently, SFTP connector is using 'collect API' to read data from SFTP channel.

### Request

To collect the data from syndication channels, you can use:
POST **http://{WEBURL}:9095/{TENANT_ID}/api/rsHubService/collect**.

The following is a sample API request:

<pre>
<code>
{
    "dataObject": {
        "id": "9b155bf0-0f2e-11e7-be23-5bce07cdca32",
        "dataObjectInfo": {
            "dataObjectType": "entityjson"
        },
        "properties": {
            "createdByService": "RDP",
            "createdBy": "rdpuser",
            "createdDate": "2017-04-16T18:33:52.412-07:00",
            "service": "ENTITY_IMPORT",
            "channel": "RSHUB_SFTP",
            "format": "JSON",
            "source": "internal",
            "role": "admin"
        },
        "data": {
            "blob": ""
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
            "message": "Binary object has been submitted for create with work automation id : 676427f5-f065-46bd-948d-bcc58547bbf4. Please check back after 10 mins.",
            "messageType": "Info"
        },
        "totalRecords": 0
    }
}
</code>
</pre>

Note that, technically, user cannot utilize 'collect API' directly, as this will be part of schedule object.

### Sample Schedule Object

The following JSON configuration is a sample schedule object, through which 'collect API' is called.

<pre>
<code>
{
    "scheduleObject": {
        "id": "sftp-import-json-schedule",
        "name": "schedule for SFTP import Json type",
        "type": "scheduleobject",
        "properties": {
            "enabled": true
        },
        "data": {
            "attributes": {
                "scheduleType": {
                    "values": [
                        {
                            "locale": "en-US",
                            "source": "internal",
                            "value": "fixedRate"
                        }
                    ]
                },
                "scheduleTaskName": {
                    "values": [
                        {
                            "locale": "en-US",
                            "source": "internal",
                            "value": "SFTP-Import"
                        }
                    ]
                },
                "scheduleTaskUrl": {
                    "values": [
                        {
                            "locale": "en-US",
                            "source": "internal",
                            <span style="background-color: #FFFF00">"value": "http://localhost:8085/t1/api/rsHubService/collect"</span>
                        }
                    ]
                }
            },
            "jsonData": {
                "scheduleConfiguration": {
                    "intervalInMins": 1,
                    "authContext": {
                        "x-rdp-userId": "rdp",
                        "x-rdp-clientId": "rdpClient",
                        "x-rdp-userRoles": "admin"
                    }
                },
                "scheduleTaskPayload": {
                    "dataObject": {
                        "id": "9b155bf0-0f2e-11e7-be23-5bce07cdca32",
                        "dataObjectInfo": {
                            "dataObjectType": "entityjson"
                        },
                        "properties": {
                            "createdByService": "RDP",
                            "createdBy": "rdpuser",
                            "createdDate": "2017-04-16T18:33:52.412-07:00",
                            "service": "ENTITY_IMPORT",
                            "channel": "SFTP",
                            "format": "JSON",
                            "source": "internal",
                            "role": "admin"
                        },
                        "data": {
                            "blob": ""
                        }
                    }
                }
            }
        }
    }
}
</code>
</pre>