---
title: Track the Status of Export Entity Data with No Records
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object_scenario6.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can track the status of export entity data with no records using the **{TenantURL or ID}/api/requesttrackingservice/get** RESTful API.

## Scenario

Consider that you have exported 100 records that has no data. The application exports the data successfully but displays **Completed with no records** task status. You can track the status of this task using "requesttrackingservice/get".

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* typesCriterion: Specify the entity type as tasksummaryobject.
* taskId: Specify "taskId1".
* attributes: Specify "_ALL" to get all attributes of the request.

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00"> "tasksummaryobject" </span>
        ],
        "attributesCriterion": [
          {
            "taskId": {
              <span style="background-color: #FFFF00"> "exact": " taskId1" </span>
            }
          }
        ]
      }
    },
    "fields": {
      "properties": [
        "_ALL"
      ],
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

The following response is returned if the request is submitted successfully:

<pre><code>
{
  "response": {
    "requestObjects": [
      {
        "id": "TASKID",
        "type": "tasksummaryobject",
        "properties": {
          "createdService": "eventReportService",
          "createdBy": "system_user",
          "createdDate": "2021-03-03T01:13:12.094-0600",
          "modifiedService": "eventReportService",
          "modifiedBy": "system_user",
          "modifiedDate": "2021-03-03T01:13:12.135-0600"
        },
        "data": {
          "attributes": {
            "profileName": {
              "values": [
                {
                  <span style="background-color: #FFFF00"> "value": "sys_export_data_excel_ui_task_base", </span>
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "status": {
              "values": [
                {
                  <span style="background-color: #FFFF00"> "value": "Completed with no records", </span>
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "profileType": {
              "values": [
                {
                  "value": "ENTITY_EXPORT",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "value": "copClient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "originatingClientId": {
              "values": [
                {
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecords": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "errorMessage": {
              "values": [
                {
                  "value": "No file available to process",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "isCollect": {
              "values": [
                {
                  "value": true,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "value": "6b1ffbae-bba0-4f25-b92d-fa69116aeffb",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "hasChildTasks": {
              "values": [
                {
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "isExtractComplete": {
              "values": [
                {
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "value": "ENTITY_EXPORT",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "connectIntegrationType": {
              "values": [
                {
                  "value": "ENTITY_EXPORT",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "integrationType": {
              "values": [
                {
                  "value": "User",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "fileType": {
              "values": [
                {
                  "value": "SMARTEXCEL",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "fileExtension": {
              "values": [
                {
                  "value": "xlsm",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "submittedBy": {
              "values": [
                {
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalTransformError": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "taskAttemptCount": {
              "values": [
                {
                  "value": 1,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalExtractError": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalLoadError": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalExtractIgnore": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalLoadIgnore": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalTransformIgnore": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRDPErrors": {
              "values": [
                {
                 "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsSuccess": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsProcessed": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsCreate": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsUpdate": {
              "values": [
                {
                 "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsDelete": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsNoChange": {
              "values": [
                {
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
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
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.