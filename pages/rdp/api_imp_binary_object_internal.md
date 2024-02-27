---
title: Upload Binary Object
sidebar: rdp_sidebar
permalink: api_imp_binary_object.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides **Process** API that uploads the binary object from different sources to Riversand Platform. The data collected from the external source has to be mapped to Riversand Platform. This service is executed asynchronously. It returns the intermediary binary object which it submits as a job for further processing of the data and returns the **WorkAutomationID**. You can track the status of the job using this Id. It returns an error message in case of invalid requests. 

{% include callout.html content="**Notes**: 
* If data is collected from external sources such as 'S3' or 'Kinesis', then [Collect API](api_imp_collect_data.html) internally calls Process API. It is not required to invoke Process API explicitly.
* If data to be uploaded is present locally in the system, you must invoke the Process API to upload the data.
" type="primary" %}

This topic describes how to use the **{{site.data.rdp_glossary.process}}** to upload the data file using a scenario. Use the WorkAutomationId you receive in the response for further tracking of the submitted job.

## Scenario

Load binary object from EventHub to Riversand Platform.

## Request

To upload the binary object , you can use the REST API {{site.data.rdp_glossary.process}}. In the request send the following details:

In the dataobject specify the following details:

* In properties section, specify the channel and service from which you wish to import the data. Note that the channel and service must be specified as per the profile. See [Import Profiles](api_create_imp_profile_config.html). As you wish to upload binary object from EventHub, you can specify channel as "EventHub", format as "RSBOJSON" and service as "ENTITY_IMPORT", in this scenario.
* The binary object to be uploaded can be specified in one of the two ways:
  * Base64 encoded format: You can convert binary object to Base64 format using any of the conversion tools available. The value obtained after conversion must be entered in data -> "blob": "<<Enter the base 64 encoded value>>".
  * fileId: indicates the unique Id that is used for holding the imported file binaryObjectId and can be obtained from [Create Binary Stream Object](api_create_binary_stream_object.html). By default, the value of fileId is empty. You can reuse the fileId to reimport the same file. Note that if the system is not able to find the fileId, it returns an error. 

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/process 
Headers: Content-Type: application/json
Body:
{
  "dataObject": {
    "id": "9b155bf0-0f2e-11e7-be23-5bce07cdca43",
    "dataObjectInfo": {
      "dataObjectType": "entityjson"
    },
    "properties": {
      "createdByService": "RDP",
      "createdBy": "rdpuser",
      "createdDate": "2017-04-16T18:33:52.412-07:00",
      <span style="background-color: #FFFF00">"service": "ENTITY_IMPORT",</span>
      <span style="background-color: #FFFF00">"channel": "Eventhub",</span>
      <span style="background-color: #FFFF00">"format": "RSBOJSON",</span>
      "source": "internal",
      "encoding": "Base64",
      <span style="background-color: #FFFF00">"fileId": "",</span>
      <span style="background-color: #FFFF00">"filename": ""</span>
    },
    "data": {
      <span style="background-color: #FFFF00">"blob": "valid blob-data"</span>
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
      "message": "Binary object has been submitted for create with work automation id : ea72b324-47fe-4486-a94d-4247beecfe27. Please check back after 10 mins.",
      "messageType": "Info"
    },
    "totalRecords": 0
  }
}
</code></pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **workAutomationId**. 