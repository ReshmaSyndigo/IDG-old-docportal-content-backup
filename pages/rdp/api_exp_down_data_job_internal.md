---
title: Download Data Job
sidebar: rdp_sidebar
permalink: api_exp_down_data_job.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides **Download Data Job** API that downloads the entity data asynchronously. It returns the intermediary binary object which it submits as a job for further processing of the data and returns the WorkAutomationID. You can track the status of the job using this Id. It returns an error message in case of invalid requests.

This topic describes how to use the **{{site.data.rdp_glossary.downloadDataJob}}** to download the data using a scenario. You can use the WorkAutomationId you receive in the response for further tracking of the submitted job.

## Scenario

To download all "SKU" entities.

## Request

To download the above entities, you can use the REST API {{site.data.rdp_glossary.downloadDataJob}}. In the request send the following details:

* Query with typecriterion as "sku" and attributes as "_ALL" to get all attributes of all the SKUs.
* In the rsconnect->profile context, specify the service as "ENTITY_EXPORT" and channel as "JOB". Note that the channel and service must be specified as per the profile. See [export profile](api_exp_entity_service.html).

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/downloadDataJob
Headers: Content-Type: application/json
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
      "_ALL"
      ]
    },
    "options": {
      "maxRecords": "10"
    },
    "rsconnect": {
      <span style="background-color: #FFFF00">"profilecontexts": [</span>
        {
          "service": "ENTITY_EXPORT",
          "channel": "JOB",
          "format": "Excel",
          "source": "internal"
        }
      ]
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
          "workAutomationId": "f764d2ba-7d41-48a3-a762-1c36a415c33b"
        }
      }
    ],
    "statusDetail": {
      "code": "RSC2162",
      "message": "Download data job has been initiated with work automation id : f764d2ba-7d41-48a3-a762-1c36a415c33b.",
      "messageType": "Info"
    },
    "totalRecords": 0
  }
}
</code></pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **workAutomationId** as mentioned in the **dataObjects -> properties -> workAutomationId** . Once you get your data downloaded, you can use it for your further requirements.