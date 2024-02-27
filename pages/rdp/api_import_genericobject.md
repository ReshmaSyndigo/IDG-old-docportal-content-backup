---
title: Import Generic Objects
sidebar: rdp_sidebar
permalink: api_import_genericobject.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, connector service provides **Process** API that imports generic object data in excel format through Connector Hub status import option from UI directly or through the scheduler.

As part of initial load, generic object data can be imported from external sources (such as SFTP, Azure, Kinesis, EventHub) to Riversand Data Platform (RDP) through RSConnect service. For more information on how to upload generic object data using **rsConnectService/collect** API, refer [Upload Generic Object](api_exp_gen_obj_str.html) article.

This topic describes how to use the **{TenantURL or ID}/api/connectorService/process** to import the data model (in excel format) using a scenario.

## Scenario

Consider that you want to import the following sample Generic object data (in excel template) through UI to the Riversand Platform.

<a href="files/sample_genericobject_template.xlsx" download> Sample Generic Object Data </a>

### Header

The header of the request contains parameters to authenticate and authorize the request. The request is authenticated only if the API authentication is enabled in the tenant configuration. See [Authentication Services](api_auth_service.html), for more information.

To authenticate the request, you must:
•	Use https and append the request with the current time-stamp in ISO_8601 format (&timeStamp="current timestamp in ISO_8601 format").
•	Generate authToken by hashing the request using the clientAuthKey with HmacSHA256 algorithm.
•	Pass the clientId, userId, and authToken in the header.

You can also pass additional parameter such as ownershipData and userRoles in the request header to authorize the request. See [Understanding the Request Headers](api_understand_req_header.html), for more information.

### Sample Request

To import the generic object data through UI directly from Riversand application, you can use the REST API **{TenantURL or ID}/api/connectorService/Process**. In the **databoject**, specify the following details:

•	In the properties section, specify the service as **ENTITY_IMPORT** for generic object data import. If you wish to import data from UI in EXCEL format, you must specify channel as "UI" and format as "GENERIC_OBJECT".
•	The channel and format must be specified as per the import profile.
•	The API endpoint performs transform mapping and imports the data to Riversand Platform.

The following JSON demonstrates the sample request:

<pre>
<code>
Headers: Content-Type: application/json
Body:
{
    "dataObject": {
        "id": "4e28edaa-32e5-11eb-adc1-0242ac120002",
        "name": "4e28edaa-32e5-11eb-adc1-0242ac120002s",
        "properties": {
            "app": "Connector",
            "service": "ENTITY_IMPORT",
            "channel": "UI",
            "format": "GENERIC_OBJECT_EXCEL",
            "source": "internal",
            "userId": "postmanuser",
            "encoding": "Base64",
            "fileId": "",
            "user": "system",
            "subtype": "User"
        },
        "data": {
            "blob": "UEsDBBQABgAIAAAAIQDuxtfAywEAAJwIAAATAAgCW0Nvbn"
        }
    }
}
</code>
</pre>

The above request makes use of the import profile for importing generic object data. The profile configuration details how the import must happen for this generic object data, such as:
* Context information such as, app, service, channel, format and so on. 
* Collect section, that is, channel details and data format details.
  *	Channel type: folderConnector
  * Format type: GENERIC_OBJECT_EXCEL
  * Format settings: 
<pre>
<code>
"sheets": [
            {
             "dataInfo": "help",
             "name": "Help",
             "headerRowNumber": 4
            },
            {
             "headerRow": "@rowHeader(Id,Type)",
             "dataInfo": "entity",
             "name": "Connector State",
             "headerRowNumber": 2
            },
            {
             "headerRow": "@rowHeader(Id,Type)",
             "dataInfo": "entity",
             "name": "Scheduled Request Object",
             "headerRowNumber": 2
            }
          ],
</code>
</pre>

* Transform settings information.
* Publish section, that is, channel details and data format details.
  *	Channel type: genericObjectConnector
  * Format type: GENERIC_OBJECT_JSON

Here is a sample import profile for generic object data:

<a href="files/import_profile_genericobject.json" download> Sample Import Profile</a>

The import profile processes the API request and sends the below response.

### Response

For the above request, the job is submitted successfully as detailed in the statusDetail object. Returns the **Work Automation ID** after submitting the binary object as a job for further processing.

<pre>
<code>
{
    "dataObjectOperationResponse": {
        "status": "success",
        "statusDetail": {
            "code": "RSC1002",
            "message": "Binary object has been submitted for create with work automation id: cf05c0fd-0f80-453f-a0a4-da52c667c274. Please check back after 10 mins.",
            "messageType": "Info"
        },
        "totalRecords": 0
    }
}
</code>
</pre>

To avoid duplicate generic object data in the application, a match configuration is created. Whenever the generic object data is imported, the config will verify whether the generic object data is created or not. If created already, then the API request will be processed for updating the data, instead of creating new entry of same data. 

This configuration matches the property value and attribute value of the generic objects between the existing data (from previous import) and newly imported data. Based on the resulting matches, the data will be created or updated in the application. 

Here is a sample matching configuration for generic object import:

<a href="files/sample_match_config.json" download> Sample Match Configuration</a>
