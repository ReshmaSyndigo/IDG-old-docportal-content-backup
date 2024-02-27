---
title: Download Service Data
sidebar: rdp_sidebar
permalink: api_exp_down_service_data.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides **Download Data Job** API that downloads the data of any services such as Event service, Configuration service, Logger service, and so on in Excel/DSV/JSON format. It returns the intermediary binary object, which it submits as a job for further processing of the data, and returns the WorkAutomationID. You can track the status of the job using this Id. It returns an error message in case of invalid requests.

This topic describes how to use the **{{site.data.rdp_glossary.downloadDataJob}}** to download the data using a scenario. You can use the WorkAutomationId you receive in the response for further tracking of the submitted job.

## Scenario

To download the data of External event service in Excel format.

## Request

To download the service data, you can use the REST API {{site.data.rdp_glossary.downloadDataJob}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the type of the event service. In the below JSON, "typesCriterion" is specified as "externalevent"
* query -> filters -> attributesCriterion: Specify the Task ID of the respective event.
* rsconnect -> serviceName: Specify the name of the service. In the below JSON, "serviceName" is specified as "eventservice"
* In the rsconnect->profile context, specify the service as "SERVICE_DATA_EXPORT", channel as "JOB", and format as "ServiceDataExcel". Note that the channel and service must be specified as per the profile. See [export profile](api_exp_entity_service.html).

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/downloadDataJob
Headers: Content-Type: application/json
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"externalevent"</span>
        ],
        "attributesCriterion": [
          {
            "taskId": {
              <span style="background-color: #FFFF00">"exact": "44156ce2-e3c5-48a6-854a-558537e38892"</span>
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
    "rsconnect": {
      <span style="background-color: #FFFF00">"serviceName": "eventservice",</span>
      "profilecontexts": [
        {
          <span style="background-color: #FFFF00">"service": "SERVICE_DATA_EXPORT",</span>
          <span style="background-color: #FFFF00">"channel": "JOB",</span>
          <span style="background-color: #FFFF00">"format": "ServiceDataExcel",</span>
          "source": "internal",
          "order": 10
        }
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the Work Automation ID after downloading the service data as a job for further processing.

<pre><code>
{
  "dataObjectOperationRequest": {
    "returnRequest": false,
    "requestId": "0557e496-2801-4a7b-a175-cb9c6a865093",
    "taskId": "0557e496-2801-4a7b-a175-cb9c6a865093"
  },
  "dataObjectOperationResponse": {
    "status": "success",
    "dataObjects": [
      {
        "properties": {
          "workAutomationId": "0557e496-2801-4a7b-a175-cb9c6a865093"
        }
      }
    ],
    "statusDetail": {
      "code": "RSC2162",
      "message": "Download data job has been initiated with work automation id : 0557e496-2801-4a7b-a175-cb9c6a865093.",
      "messageType": "Info"
    },
    "totalRecords": 1
  }
}
</code></pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **workAutomationId** as mentioned in the **dataObjects -> properties -> workAutomationId**. <br>
In the UI, the task is created under **Service Data Exports** task type and you can download the service data by clicking on **Download File** from the respective **Task Detail** page.

### Best Practices

Riversand recommends the following:
* When you export the Entity App service data using SERVICE_DATA_EXPORT profile, then the Entity export fields such as relTo, includerelatedentities, and so on will not be exported to downstream systems.
* If you want to export model service data for the search query, then the service name must be specified as 'entityappmodelservice' as it supports Scroll API. The 'entitymodelservice' can be used only for ID query.
