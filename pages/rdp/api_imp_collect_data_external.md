---
title: Collect Data
sidebar: rdp_sidebar
permalink: api_imp_collect_data.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides **Collect** API that collects entity data from different channels or sources such as Azure, Kinesis, EventHub. {% if site.build == "internal" %} On collecting the data, it uses other import service APIs such as [upload data](api_imp_data_file.html) to upload the data to Riversand Platform. This service is executed asynchronously.{% endif %} It returns the intermediary binary object that it submits as a job for further processing of the data and returns the **WorkAutomationID**. You can track the status of the job using this ID. This ID also returns an error message in case of invalid requests. 

{% include callout.html content="**Notes:**
* For any Blob Import, it is highly recommended not to use the Collect Data API (through schedular) to Import from Blob Store and Blob Container.
* The Collect Data API is only recommended for Auto App PIES import process.
" type="primary" %}

This topic describes how to use the **{{site.data.rdp_glossary.collectdata}}** to collect the data model using a scenario. Use **WorkAutomationId** you receive in the response for further tracking of the submitted job.

## Scenario

Collect and import the data related to an entity from cloud repository, EventHub to Riversand Platform.

## Request

To collect the data related to an entity from EventHub, you can use the REST API {{site.data.rdp_glossary.collectdata}}. In the request send the following details:

In the databoject, specify the following details:
* In the properties section, specify the service as "ENTITY_IMPORT" for entity data import and "MODEL_IMPORT" for data model import. You can import data in "excel" or "json" format. As you wish to import data from eventhub in json format, you must specify channel as "EventHub" and format as "JSON". 
* The channel and format must be specified as per the import profile. {% if site.build == "internal" %} See [Import Profiles](api_create_imp_profile_config.html).
* Here, the collect API also internally calls [Process API](api_imp_data_file.html) or [ProcessModel API](api_imp_data_model.html). It performs transform mapping and imports the data to Riversand Platform.
{% endif %}

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/collect
Headers: Content-Type: application/json
Body:
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
      <span style="background-color: #FFFF00">"service": "ENTITY_IMPORT",</span>
      <span style="background-color: #FFFF00">"channel": "EventHub",</span>
      <span style="background-color: #FFFF00">"format": "JSON",</span>
      "source": "internal"
    },
    "data": {
      "blob": "valid-blob-data"
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
      "message": "Binary object has been submitted for create with work automation id : 6f6bff5a-20bd-4f13-b1aa-31d34e52e70c. Please check back after 10 mins.",
      "messageType": "Info"
    },
    "totalRecords": 0
  }
}
</code></pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **workAutomationId**. 