---
title: Download Data in Excel Format in Specified Locale
sidebar: rdp_sidebar
permalink: api_exp_down_data_job_1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform offers capability to download entity data asynchronously in the form of an Excel file. If you wish to submit a job for Excel export, then you can use {TenantURL or ID}/api/rsConnectService/downloadDataJob to download the data. The API request returns the task id of the batch job that runs in the background in Riversand Platform. After the job completes successfully, it provides the corresponding RS-Excel downloaded file of the entity.

This topic describes how to use the **{{site.data.rdp_glossary.downloadDataJob}}** to download the data in specified locale using a scenario. You can use the WorkAutomationId you receive in the response for further tracking of the submitted job.

## Scenario

To download a "SKU" entity in specified de-DE locale.

## Request

To download a SKU entity, you can use the REST API {{site.data.rdp_glossary.downloadDataJob}}. In the request send the following details:

* Query with typecriterion as "sku" and attributes as "_ALL" to get all attributes of the SKU.
* In valueContexts, specify source as "internal" and locale as "de-DE".
 Note that "valueContexts" is used to filter the value based on the locale and source. This attribute is mainly used when you require data, which has attribute value in specified locale. 
* In the rsconnect->profile context, specify the service as "ENTITY_EXPORT" and channel as "JOB". Note that the channel and service must be specified as per the profile. See [export profile](api_exp_entity_service.html).

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/downloadDataJob
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      },
      <span style="background-color: #FFFF00">"id": "kI-GemZIR-6JqyJ_G3JDbg",</span>
      <span style="background-color: #FFFF00">"valueContexts": [</span>
        {
          "source": "internal",
          "locale": "de-DE"
        }
      ]
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ],
      "relationshipAttributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1
    },
    "rsconnect": {
      "includeValidationData": true,
      <span style="background-color: #FFFF00">"profilecontexts": [</span>
        {
          "service": "ENTITY_EXPORT",
          "channel": "JOB",
          "format": "Excel",
          "source": "internal",
          "subtype": "User"
        }
      ]
    }
  },
  "clientState": {
    "notificationInfo": {
      "userId": "testadmin@riversand.com_user"
    }
  }
}
</code>
</pre>

## Response

Returns the Work Automation ID after downloading the entities as a job for further processing.

<pre><code>
{
  "dataObjectOperationResponse": {
    "status": "success",
    "dataObjects": [
      {
        "properties": {
          "workAutomationId": "f1ad2e08-8496-4aca-b0ca-e77273f6b83d"
        }
      }
    ],
    "statusDetail": {
      "code": "RSC2162",
      "message": "Download data job has been initiated with work automation id : f1ad2e08-8496-4aca-b0ca-e77273f6b83d.",
      "messageType": "Info"
    },
    "totalRecords": 0
  }
}
</code></pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **workAutomationId** as mentioned in the **dataObjects -> properties -> workAutomationId** . Once you get your data downloaded, you can use it for your further requirements.