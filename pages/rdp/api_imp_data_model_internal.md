---
title: Upload Data Model
sidebar: rdp_sidebar
permalink: api_imp_data_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform provides **Process** API that uploads the [collected entity data](api_imp_collect_data.html) from different sources to Riversand Platform. The data collected from the external source has to be mapped to Riversand Platform. This service is executed asynchronously. It returns the intermediary binary object which it submits as a job for further processing of the data and returns the **WorkAutomationID**. You can track the status of the job using this Id. It returns an error message in case of invalid requests. 

{% include callout.html content="**Notes**: 
* If data model is collected from external sources such as 'S3' or 'Kinesis', then [Collect API](api_imp_collect_data.html) internally calls ProcessModel API. It is not required to invoke ProcessModel API explicitly.
* If data model to be uploaded is present locally in the system, you must invoke the ProcessModel API.
" type="primary" %}

This topic describes how to use the **{{site.data.rdp_glossary.processmodel}}** to upload the data model using a scenario. Use the WorkAutomationId you receive in the response for further tracking of the submitted job.

## Scenario

Load data model present locally in the system to Riversand Platform.

## Request

To upload the entity model from your offline data present in excel format from your local system, you can use the REST API {{site.data.rdp_glossary.processmodel}}. In the request send the following details:

In the dataobject specify the following details:

* In properties section, specify channel and service from which you want to import the data model. Note that the channel and service must be specified as per the profile. See [Import Profiles](api_create_imp_profile_config.html). As you want to upload a local file, you can specify channel as "UI" and service as "ENTITY_IMPORT", in this scenario.
* The model to be uploaded can be specified in one of the two ways:
  * In base64 encoded format in "data->blob" section 
  * As a "fileId", where the "fileId" can be obtained using [Create Binary Stream Object](api_create_binary_stream_object.html). 

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/processmodel
Headers: Content-Type: application/json
Body:
{
  "dataObject": {
    "id": "9b155bf0-0f2e-11e7-be23-5bce07cdca43",
    "dataObjectInfo": {
      "dataObjectType": "excelfile"
    },
    "properties": {
      "createdByService": "RDP",
      "createdBy": "rdpuser",
      "createdDate": "2017-04-16T18:33:52.412-07:00",
      <span style="background-color: #FFFF00">"service": "MODEL_IMPORT",</span>
      <span style="background-color: #FFFF00">"channel": "AdminService_ModelImport",</span>
      <span style="background-color: #FFFF00">"format": "Excel",</span>
      "source": "internal",
      "encoding": "Base64",
      <span style="background-color: #FFFF00">"fileId": "",</span>
      <span style="background-color: #FFFF00">"filename": "ui_uploadedfile.xlsx"</span>
    },
    "data": {
      <span style="background-color: #FFFF00">"blob": ""</span>
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
      "message": "Binary object has been submitted for create with work automation id : ade3077d-6b4e-4d76-b651-09ee3598c44a. Please check back after 10 mins.",
      "messageType": "Info"
    },
    "totalRecords": 0
  }
}
</code></pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **workAutomationId**. Once you get the entity model on-boarded, you can use it for your further requirements using [Entity Model Services](api_manage_data_model.html).