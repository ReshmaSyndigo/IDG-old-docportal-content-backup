---
title: Track Task Summary Object using Task Id and typesCriterion
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track a task summary object, using a scenario. 

## Scenario

Consider that you wish to track an Excel file entity import task.
The following steps describe how to use the RESTful API in Riversand Platform SDK to track the task summary object request of the task.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "tasksummaryobject".
* query -> filters -> attributesCriterion -> taskId: Specify "taskId1".
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
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "tasksummaryobject"
        ],
        "attributesCriterion": [
        {
          <span style="background-color: #FFFF00">"taskId": {</span>
            "exact": "taskId1"
          }
        }
      ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1000
    }
  }
}
</code>
</pre>

## Response

Returns the request tracking object entity matching the search criteria.
<pre><code>
{
  "response": {
    "requestObjects": [
      {
        "id": "taskId1",
        "name": "taskId1ExcelFile1EntityImport",
        "type": "tasksummaryobject",
        "data": {
          "attributes": {
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bdb3f41c-aa64-484f-abc3-95b18c3a15bd",
                  "value": "taskId1"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "555ab44c-7471-4a1d-9033-6ceef5db4e22",
                  "value": "taskType"
                }
              ]
            },
            "totalRecords": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "56d42af6-a22c-4754-9fbb-cd29097bec37",
                  "value": 0
                }
              ]
            },
            "fileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d62f5e48-62e7-4eeb-a9ec-14e99747e747",
                  "value": "importExcelFileName"
                }
              ]
            },
            "fileId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "18e66169-7efc-49e8-a2c9-109f2a25bb37",
                  "value": "importExcelFileName"
                }
              ]
            },
            "fileType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0593ee85-71aa-4430-893d-2f08545818d9",
                  "value": "importExcelFileName"
                }
              ]
            },
            "startTime": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a1cb6942-b08d-4d26-9d9b-f4f1cfef1f21",
                  "value": "2018-09-04T05:19:59.600-0500"
                }
              ]
            },
            "lastModifiedTime": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cddbc9e1-0b89-45f7-a745-9b4fa5705656",
                  "value": "2018-09-04T05:19:59.600-0500 (populated by internal)"
                }
              ]
            },
            "submittedBy": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "24e87d61-741a-4af6-ac2f-0282e570a40a",
                  "value": "userId"
                }
              ]
            },
            "totalRSConnectErrors": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0d0b8e82-3d7f-4cc1-a509-6e53f77d807b",
                  "value": 0
                }
              ]
            },
            "totalRecordsForProcess": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1679af7e-a19d-4b45-8acb-95811a781fe5",
                  "value": 0
                }
              ]
            },
            "totalRecordsProcessed": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f7772c56-0144-424f-b4f9-b8c179bd9b1b",
                  "value": 0
                }
              ]
            },
            "totalRecordsSuccess": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1aeaf700-f32c-4d0a-879a-cf3a1d7dd5ed",
                  "value": 0
                }
              ]
            },
            "totalRecordsError": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5a5d8aff-40ff-4ced-8afa-a23e747b3a0b",
                  "value": 0
                }
              ]
            },
            "totalRecordsCreate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "31a81d39-2efa-42f7-9fd2-d0b85a840a2e",
                  "value": 0
                }
              ]
            },
            "totalRecordsUpdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f6a29345-73df-41c2-9805-a07d4723f9fc",
                  "value": 0
                }
              ]
            },
            "totalRecordsDelete": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2062265a-baf4-4ba8-9f3f-1019cb7d6ad1",
                  "value": 0
                }
              ]
            },
            "taskStatus": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0fb818d6-7406-4e33-b9ee-2d91a763d54b",
                  "value": "inProgress"
                }
              ]
            },
            "errorMessage": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4464081f-2dbf-4467-ad08-b9eb6b6ca235",
                  "value": "errorMessage (to be populated by Riversand Integration Service if import fails)"
                }
              ]
            },
            "totalExtractError": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0310256d-5dd7-4682-8758-b313565bc240",
                  "value": 0
                }
              ]
            },
            "totalLoadError": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2e56085f-ff2e-4a94-8ddf-c5b4b673786b",
                  "value": 0
                }
              ]
            },
            "totalTransformError": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "333d3133-47b5-4cc6-9771-adcb703aa610",
                  "value": 0
                }
              ]
            },
            "totalExtractIgnore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4b2909da-66dd-4589-8a8c-f388cc1f693f",
                  "value": 0
                }
              ]
            },
            "totalLoadIgnore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "78a7f744-4c9c-4757-a545-8f950b5f0a15",
                  "value": 0
                }
              ]
            },
            "totalTransformIgnore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "517f4f14-8e9e-442f-99f2-8c3c24ea5cf8",
                  "value": 0
                }
              ]
            },
            "totalRDPErrors": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "69c76ef9-a02f-4465-9969-6501054b32d0",
                  "value": 0
                }
              ]
            },
            "totalRecordsNoChange": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1124c391-b47b-488a-95a0-426123125789",
                  "value": 0
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

## Response Object

This object contains information regarding the response details for this request tracking object. The following table lists the details of the response object:

The request tracking object contains type as "tasksummaryobject". The following table lists the details of the requestObjectInfo:

| Property | Description | Type |
|----------|-------------|------|
| id | Indicates the id of the request object. | String |
| name | Indicates the name of the request object. | String |
| type | Indicates the type of the request object. | String |

For the sample [Scenario](#scenario), requestObjectInfo is returned as follows:

| Property | Description | 
|----------|-------------|
| id | taskId1 |
| name | taskId1ExcelFile1EntityImport |
| type | tasksummaryobject |

## data

This object contains the attributes of request tracking object. The following table lists the details of the data object:

| Property | Description | Type |
|----------|-------------|------|
| attributes | Indicates the attributes that defines the request tracking object. | List of [attributes](#attributes) objects |

### attributes

This object contains the attribute details of the request tracking object.

| Property | Description | Type |
|----------|-------------|------|
| <<AttrName>> -> values -> value | Indicates the value of the attributes. | List of [values](#values)objects |

### values

This object contains the value details corresponding to this request at various service layers which it passes through. The following table lists the details of the values object:

| Property | Description | Type |
|----------|-------------|------|
| source | Indicates the source of this attribute of the entity. | String |
| locale | Indicates the locale set for this entity. | String |
| value | Indicates the output values for this request. | String |

Data for sample [Scenario](#scenario): 

| Property | Description | Value | 
|----------|-------------|-----------|
| taskId | Indicates the unique task identifier that can be used to track the task. | taskId1 |
| taskType | Indicates the type of the task such as import, export, bulk edit or assignment. | taskType |
| totalRecords | Indicates the total number of records(entities) intended to be processed by the task. | 0 |
| fileName | Indicates the name of the file used for the task. | importExcelFileName |
| fileId | Indicates the Id of the file used for the task. | importExcelFileName |
| fileType | Indicates the type of the file used for the task. importExcelFileName |
| startTime | Indicates the date and time the task started. | 2018-09-04T05:19:59.600-0500 |
| lastModifiedTime | Indicates the last modified date and time of the task. | 2018-09-04T05:19:59.600-0500 (populated by internal) |
| submittedBy | Indicates the user who submitted the task. | userId |
| totalRSConnectErrors | Indicates the total errors that occurred in Riversand Integration Service while performing the task. | 0 |
| totalRecordsProcessed | Indicates the total number of records processed by the task. | 0 |
| totalRecordsSuccess | Indicates the total number of records that are successfully processed. | 0 |
| totalRecordsError | Indicates the total number of records that resulted in an error while processing the task. | 0 |
| totalRecordsCreate | Indicates the total number of entities that are created by the task. | 0 |
| totalRecordsUpdate | Indicates the total number of entities that are updated by the task. | 0 |
| totalRecordsDelete| Indicates the total number of entities that are deleted by the task. | 0 |
| taskStatus | Indicates the status of the task. The status can be any one of the following: <br/>**Queued** <br/>**inProgress**<br/>**Errorred**<br/>**Completed**<br/>**Completed With errors** | inProgress |
| errorMessage | Indicates the error message to be populated in the event of a task error. | errorMessage (to be populated by Riversand Integration Service if the import fails) |
| totalExtractError | Indicates the total number of errors that occurred while extracting the entities from Riversand Integration Service. | 0 |
| totalLoadError | Indicates the total number of errors that occurred while sending the entities to Riversand Platform. | 0 |
| totalTransformError | Indicates the total number of errors that occurred while converting the task to JSON format. | 0 |
| totalExtractIgnore | Indicates the total number of task extract errors to be ignored. | 0 |
| totalLoadIgnore | Indicates the total number of task load errors to be ignored. | 0 |
totalTransformIgnore | Indicates the total number of task transform errors to be ignored. | 0 |
| totalRDPErrors | Indicates the total number of errors that occurred in Riversand Platform while processing the task. | 0 |
| totalRecordsNoChange | Indicates the total number of records that are not affected by the task. |

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.