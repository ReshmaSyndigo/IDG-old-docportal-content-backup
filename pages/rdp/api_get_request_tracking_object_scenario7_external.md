---
title: Track Govern Errors and Status in Task Summary Object
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object_scenario7.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track govern errors and status, in task summary object using a scenario.

## Scenario

Consider that you are importing 20 new entities to the application. The following steps describe how to use the RESTful API in Riversand Platform SDK to track the govern errors and status in task summary object request of a task.

{% include callout.html content="**Note**: The governance error and status details are displayed only during entity import task.
" type="primary" %}

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> id: Specify "taskId".
* query -> filters -> typesCriterion: Specify the entity type as "tasksummaryobject".
* query -> fields -> attributes: Specify "_ALL" to get all attributes of the request.

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      "id": "56167263-80d1-402b-bbc4-fa83609f8b6d",
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [
          "tasksummaryobject"</span>
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

## Response

Returns the request tracking object entity matching the search criteria.
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "149bd6c0-a7b3-4e9d-bf4d-d1b4a58f7fc1",
    "maxRecords": 2000,
    "taskId": "149bd6c0-a7b3-4e9d-bf4d-d1b4a58f7fc1"
  },
  "response": {
    "requestObjects": [
      {
        "id": "56167263-80d1-402b-bbc4-fa83609f8b6d",
        "type": "tasksummaryobject",
        "properties": {
          "createdService": "eventReportService",
          "createdBy": "rdwadmin@riversand.com_user",
          "createdDate": "2021-10-11T07:01:55.147+0200",
          "modifiedService": "eventReportService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2021-10-11T07:02:00.797+0200"
        },
        "data": {
          "attributes": {
            "profileId": {
              "values": [
                {
                  "id": "ad13648d-dfd6-4a58-81cb-05bb781e5bd0",
                  "value": "sys_import_data_excel_ui_task_base",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "profileName": {
              "values": [
                {
                  "id": "cae6f126-a3bf-4ff5-84e6-d93d6f8269b9",
                  "value": "Base import Excel data",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "ade86fad-6a6e-4826-b1ee-6e94c6283e76",
                  "value": "copClient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "originatingClientId": {
              "values": [
                {
                  "id": "45faeef6-634b-43db-bbdc-fd2224b0ba8b",
                  "value": "rufClient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "74dd3a20-46df-4da3-b9f5-e1c1e6a46391",
                  "value": "rdwadmin@riversand.com_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecords": {
              "values": [
                {
                  "id": "e290a10e-f790-47cc-bf34-9d7c28262148",
                  "value": 20,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "isExtractComplete": {
              "values": [
                {
                  "id": "fdf2a0e7-d8e2-4244-92ec-bfe2cf6ec28c",
                  "value": true,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "id": "9a005d14-e743-4f9b-bf2b-bdfb965bd2c7",
                  "value": "Completed",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "profileType": {
              "values": [
                {
                  "id": "a1a5120c-3623-4a8a-bb08-c0e6f249a0d7",
                  "value": "ENTITY_IMPORT",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalExcelCellCount": {
              "values": [
                {
                  "id": "7342a991-e64e-4932-9a8f-5faafb4650fa",
                  "value": 140,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "taskAttemptCount": {
              "values": [
                {
                  "id": "5865ac2a-4da0-44cb-875f-bf9e2b4ec938",
                  "value": 1,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "id": "f3206d6f-91b0-45b5-8532-074022482aec",
                  "value": "56167263-80d1-402b-bbc4-fa83609f8b6d",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "hasChildTasks": {
              "values": [
                {
                  "id": "b731a421-fbc5-46a7-9f12-79eec06c28e8",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "id": "c16ac1fd-6983-4e38-bb6f-82417ae5b7a5",
                  "value": "ENTITY_IMPORT",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "connectIntegrationType": {
              "values": [
                {
                  "id": "44e783c2-8956-4445-94e3-5f31019e88e6",
                  "value": "ENTITY_IMPORT",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "integrationType": {
              "values": [
                {
                  "id": "3ba806f2-5b08-4bc6-a56b-1d254e338677",
                  "value": "User",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "fileName": {
              "values": [
                {
                  "id": "bb4653ac-bcfb-486e-899b-37877aa0bb6f",
                  "value": "d6db6473-9b67-4a3d-b59d-f54fadcf9ee2_out.xlsm",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "fileId": {
              "values": [
                {
                  "id": "47b6e684-f3e1-40a2-abed-d4471007fcb0",
                  "value": "2efe71bd-2165-486c-a324-a60ddc8e4a26.xlsm",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "fileType": {
              "values": [
                {
                  "id": "07777a89-caa1-401f-9be2-2c5157dba05e",
                  "value": "EXCEL",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "fileExtension": {
              "values": [
                {
                  "id": "b0a467ce-9c2d-4941-ac08-df4bb9014c97",
                  "value": "xlsm",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "submittedBy": {
              "values": [
                {
                  "id": "3721b3ca-e1c0-4204-be4f-554cb0894c9b",
                  "value": "rdwadmin@riversand.com_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalTransformError": {
              "values": [
                {
                  "id": "41a28762-388b-4ae8-bc71-a63554370504",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalExtractError": {
              "values": [
                {
                  "id": "1eeb031f-8657-40de-8ccb-866cc6b93f9a",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalLoadError": {
              "values": [
                {
                  "id": "03bd7293-9dbb-4a81-9f0d-4f77b40140e6",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalExtractIgnore": {
              "values": [
                {
                  "id": "089b9682-153c-4b3e-a9d8-58fd5604c1bd",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalLoadIgnore": {
              "values": [
                {
                  "id": "bae420d2-0ef0-4138-8f3f-5a434ed09d35",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalTransformIgnore": {
              "values": [
                {
                  "id": "83333a2f-46f5-4537-b26c-be900388bd16",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRDPErrors": {
              "values": [
                {
                  "id": "64394439-8b9c-4c73-a9a8-db7bc7ba4b53",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsSuccess": {
              "values": [
                {
                  "id": "f906396a-8302-46ed-9e3c-c45bc2e64179",
                  "value": 20,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsProcessed": {
              "values": [
                {
                  "id": "d025299c-9c54-4ba1-a9c2-a0a7fa3ecbb5",
                  "value": 20,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsCreate": {
              "values": [
                {
                  "id": "71a8a429-da44-4f4c-9e81-0cb0829b2280",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsUpdate": {
              "values": [
                {
                  "id": "87f1b4db-e04d-405b-89cd-20e843fb1d26",
                  "value": 20,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsDelete": {
              "values": [
                {
                  "id": "5453f230-b439-4347-9049-3a8db6c0aeab",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "totalRecordsNoChange": {
              "values": [
                {
                  "id": "6473cc9c-237b-4c3e-aa38-46011d2d0cbf",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"totalGovernRecordsProcessed": {</span>
              "values": [
                {
                  "id": "ecee0383-356c-44c2-9330-8aefd940a460",
                  "value": 20,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"totalGovernRecordsSuccess": {</span>
              "values": [
                {
                  "id": "36c7a1af-d6f8-4bff-8639-3819403a32da",
                  "value": 20,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"totalGovernRDPErrors": {</span>
              "values": [
                {
                  "id": "ae4f326f-9244-4be2-b7f6-5aa72aa6ccb8",
                  "value": 0,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"governStatus": {</span>
              "values": [
                {
                  "id": "6ba30448-d4ee-47d8-885f-f8674b800350",
                  "value": "Completed",
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

## Response Object

This object contains information regarding the response details for this request tracking object. The following table lists the details of the response object:

| Property | Description | Type |
|----------|-------------|------|
| id | Indicates the id of the request object. | String |
| type | Indicates the type of the request object. | String |
| createdService | Indicates the name of the service that created this object. | String |
| createdBy | Indicates the user who created this object. | String |
| createdDate | Indicates the date and time when the object was created. | String |
| modifiedService | Indicates the name of the service that was used to last update this object. | String |
| modifiedBy | Indicates the user who last updated the object. | String |
| modifiedDate | Indicates the date and time when the object was last updated. | String |

For the sample [Scenario](#scenario), requestObjectInfo is returned as follows:

| Property | Description | 
|----------|-------------|
| id | taskId1 |
| type | tasksummaryobject |
| createdService | eventReportService |
| createdBy | rdwadmin@riversand.com_user |
| createdDate | 2021-10-11T07:01:55.147+0200 |
| modifiedService | eventReportService |
| modifiedBy | rdwadmin@riversand.com_user |
| modifiedDate | 2021-10-11T07:02:00.797+0200 |

## data

This object contains the attributes of request tracking object. The following table lists the details of the data object:

| Property | Description | Type |
|----------|-------------|------|
| attributes | Indicates the attributes that defines the request tracking object. | List of [attributes](#attributes) objects |

### attributes

This object contains the attribute details of the request tracking object.

| Property | Description | Type |
|----------|-------------|------|
| <<AttrName>> -> values -> value | Indicates the value of the attributes. | List of [values](#values) objects |

### values

This object contains the value details corresponding to this request at various service layers which it passes through. The following table lists the details of the values object:

| Property | Description | Type |
|----------|-------------|------|
| id | Indicates the unique identifier of the entity. | String |
| source | Indicates the source of this attribute of the entity. | String |
| locale | Indicates the locale set for this entity. | String |
| value | Indicates the output values for this request. | String |

Data for sample [Scenario](#scenario): 

| Property | Description | Value | 
|----------|-------------|-----------|
| userId | Indicates the user email id who has performed the task. | rdwadmin@riversand.com_user |
| totalRecords | Indicates the total number of records(entities) intended to be processed by the task. | 20 |
| status | Indicates the status of the task such as <br/>**Queued** <br/>**inProgress**<br/>**Errorred**<br/>**Started**<br/>**Completed**<br/>**Completed With Errors** | Completed |
| taskId | Indicates the unique task identifier that can be used to track the task. | taskId1 |
| taskType | Indicates the type of the task such as import, export, bulk edit or assignment. | ENTITY_IMPORT |
| fileName | Indicates the name of the file used for the task. | d6db6473-9b67-4a3d-b59d-f54fadcf9ee2_out.xlsm |
| fileId | Indicates the Id of the file used for the task. | 2efe71bd-2165-486c-a324-a60ddc8e4a26.xlsm |
| fileType | Indicates the type of the file used for the task | EXCEL |
| fileExtension | Indicates the extension of the imported excel file. | xlsm |
| submittedBy | Indicates the user who submitted the task. | rdwadmin@riversand.com_user |
| totalTransformError | Indicates the total number of errors that occurred while converting the task to JSON format. | 0 |
| totalExtractError | Indicates the total number of errors that occurred while extracting the entities from Riversand Integration Service. | 0 |
| totalTransformIgnore | Indicates the total number of task transform errors to be ignored. | 0 |
| totalLoadError | Indicates the total number of errors that occurred in Riversand Platform while processing the task. | 0 |
| totalExtractIgnore | Indicates the total number of records that are not affected by the task. |
| totalLoadIgnore | Indicates the total number of task load errors to be ignored. | 0 |
| totalRDPErrors | Indicates the total number of errors that occurred in Riversand Platform while processing the task. | 0 |
| totalRecordsSuccess | Indicates the total number of records that are successfully processed. | 20 |
| totalRecordsProcessed | Indicates the total number of records processed by the task. | 20 |
| totalRecordsCreate | Indicates the total number of entities that are created by the task. | 20 |
| totalRecordsUpdate | Indicates the total number of entities that are updated by the task. | 0 |
| totalRecordsDelete | Indicates the total number of entities that are deleted by the task. | 0 |
| totalRecordsNoChange | Indicates the total number of records that are not affected by the task. | 0 |
| totalGovernRecordsProcessed | Indicates the total number records processed which included create, update, and no change. | 20 |
| totalGovernRecordsSuccess | Indicates the total number of records processed successfully. | 20 |
| totalGovernRDPErrors | Indicates the total number of govern persistance errors occurred during the import. | 0 |
| governStatus | Indicates the status of the entities. The status can be any one of the following: <br/>**Queued** <br/>**inProgress**<br/>**Errorred**<br/>**Completed**<br/>**Completed With Errors** | Completed |

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.