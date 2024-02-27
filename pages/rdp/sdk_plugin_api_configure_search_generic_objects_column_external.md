---
title: Configure Search Generic Objects Column
sidebar: rdp_sidebar
permalink: sdk_plugin_api_configure_search_generic_objects_column.html
type: Description
folder: rdp
---

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to view configuration for Search Generic Objects and customize the columns based on your requirements.

{% include callout.html content="**Note**:
To configure additional columns, you need to provide relevant datapath or JSON data.
" type="primary" %}

{% include snippets/header.html %}

## Request Objects

POST {{site.data.rdp_glossary.deletegoverndata}}

<pre><code>
POST **{{WEBURL}}:7075/{{TENANT_ID}}/api/genericobjectmanageservice/get**
Headers: Content-Type: application/json
Body: 
"params": {
                    "query": {
                        "filters": {
                            "typesCriterion": this.typesCriterion

                        }
                    },
                    "fields": {
                        "attributes": [
                            "_ALL"
                        ],
                        "jsonData": true
                    }
                }
</code></pre>

## Response

The configured Search Gerneric Objects displayed as:

<pre><code>
{
    "genericObjects": [
        {
            "data": {
                "contexts": [],
                "jsonData": {
                    "scheduleTaskPayload": {
                        "params": {
                            "taskType": "delete",
                            "query": {
                                "filters": {
                                    "propertiesCriterion": [
                                        {
                                            "createdDate": {
                                                "lt": "now-2d/d",
                                                "type": "_DATETIME",
                                                "gt": "2018-07-01T00:00:01.000+0000"
                                            }
                                        }
                                    ],
                                    "typesCriterion": [
                                        "diagnosticobject"
                                    ]
                                }
                            },
                            "operationType": "inboundService"
                        }
                    },
                    "scheduleConfiguration": {
                        "authContext": {
                            "x-rdp-userRoles": "admin",
                            "x-rdp-clientId": "rdpclient",
                            "x-rdp-userid": "system_user",
                            "x-rdp-useremail": "system",
                            "x-rdp-ownershipdata": "",
                            "x-rdp-username": "system",
                            "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE=",
                            "x-rdp-tenantId": "{{TENANT}}"
                        },
                        "intervalInMins": 1440
                    }
                }
            },
            "id": "test12134234",
            "name": {},
            "version": {},
            "type": "ReviewRating",
            "properties": {
                "createdService": "genericObjectManageService",
                "createdBy": "_UNASSIGNED",
                "modifiedService": "genericObjectManageService",
                "modifiedBy": "_UNASSIGNED",
                "createdDate": "2020-03-27T04:45:21.299-0500",
                "modifiedDate": "2020-03-27T04:45:21.299-0500"
            },
            "domain": {}
        }
    ]
}
</code></pre>

## Example
You can configure **TaskType** column from the response. To configure TaskType column and datapath for the column should be “data.jsondata.scheduletaskPayload.params.taskType”.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.