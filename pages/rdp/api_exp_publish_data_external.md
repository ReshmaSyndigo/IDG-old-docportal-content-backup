---
title: Publish Data - Excel
sidebar: rdp_sidebar
permalink: api_exp_publish_data.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides **Publish Data** API that publishes the data in Riversand Platform to the cloud-based data repository that you have configured in Excel format. As this is an asynchronous service, it returns the intermediary binary object that it submits as a job for further processing of the data and returns the WorkAutomationID. You can track the status of the job using this Id. It returns an error message in case of invalid requests.

This topic describes how to use the **{{site.data.rdp_glossary.publishdata}}** to publish the data using a scenario. You can use WorkAutomationId you receive in the response for further tracking of the submitted job.

## Scenario

To export all "sku" entities in Excel format to cloud repository S3.

## Request

To publish the "sku" entities, you can use the REST API {{site.data.rdp_glossary.publishdata}}. In the request send the following details:

* Specify the query with typecriterion as "SKU" and attributes as "_ALL" to export all attributes in all the SKUs.
* Specify the service and channel to which you want to export. Note that the channel and service must be specified as per the profile.
* Specify the format you wish to export. In this scenario, the format is **Excel**. {% if site.build == "internal" %} See [Create Export Profile for Excel Export](api_create_exp_profile_config_excel.html).{% endif %}

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/publish
Headers: Content-Type: application/json
Body:
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
          "channel": "S3_XLSM",
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

Returns the Work Automation ID after submitting the binary object as a job for further processing.

<pre><code>
{
  "dataObjectOperationResponse": {
    "status": "success",
    "statusDetail": {
      "code": "RSC1002",
      "message": "Binary object has been submitted for create with work automation id : 2e93c7a4-c282-4917-8650-8cef3e088c9d. Please check back after 10 mins.",
      "messageType": "Info",
      "childTaskIds": [
        "27126276-cb0a-4a4b-9127-6f0cadeca55a"
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **workAutomationId**. Once you get your data exported, you can use it for your further requirements.