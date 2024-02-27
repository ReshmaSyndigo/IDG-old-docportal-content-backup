---
title: Export or Download Generic Objects
sidebar: rdp_sidebar
permalink: api_export_genericobject.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, Integration Service provides **downloadDataJob** API to export or download the generic object data in excel format from UI directly or through the scheduler. This feature allows the user to select and download their custom data based on Generic Object type, such as connector state, schedule request object, connector message activity type and so on. 

Also, Generic object data can be exported to the external sources (such as SFTP, Azure, Kinesis, EventHub) from Riversand Data Platform (RDP) through RSConnect service. For more information on how to export generic object data using **rsConnectService/publish** API, refer [Download Generic Object](api_exp_gen_obj_str.html) article.

This topic describes how to use the **{TenantURL or ID}/api/rsConnectService/downloadDataJob** to download the data model (in excel format) using a scenario.

## Scenario

Consider that you want to download the Generic object data (in excel template) through UI to the Riversand Platform.



### Header

The header of the request contains parameters to authenticate and authorize the request. The request is authenticated only if the API authentication is enabled in the tenant configuration. See [Authentication Services](api_auth_service.html), for more information.

To authenticate the request, you must:
•	Use https and append the request with the current time-stamp in ISO_8601 format (&timeStamp="current timestamp in ISO_8601 format").
•	Generate authToken by hashing the request using the clientAuthKey with HmacSHA256 algorithm.
•	Pass the clientId, userId, and authToken in the header.

You can also pass additional parameter such as ownershipData and userRoles in the request header to authorize the request. See [Understanding the Request Headers](api_understand_req_header.html), for more information.

### Sample Request

To download the generic object data from Riversand application, you can use the REST API **{TenantURL or ID}/api/rsConnectService/downloadDataJob**. In the **databoject**, specify the following details:

•	In the properties section, specify the service as **ENTITY_EXPORT** for generic object data export. If you wish to export data from UI in EXCEL format, you must specify channel as "UI" and format as "GENERIC_OBJECT".
•	The channel and format must be specified as per the export profile.
•	The API endpoint performs transform mapping and downloads the data from Riversand Platform.

The following JSON demonstrates the sample request:

<pre>
<code>
Headers: Content-Type: application/json
Body:
{
    "params": {
        "query": {
            "ids": [
                "d3011661-c68d-42cb-97a3-f257f0036b4f"
            ],
            "filters": {
                "typesCriterion": [
                    "scheduledrequestobject",
                    "connectorstate",
                    "connectormessageactivity"
                ],
                "nonContextual": false
            }
        },
        "fields": {
            "attributes": [
                "_ALL"
            ]
        },
        "options": {
            "maxRecords": 30
        },
        "rsconnect": {
            "includeValidationData": false,
            "profilecontexts": [
                {
                    "app": "RSConnect",
                    "service": "ENTITY_EXPORT",
                    "channel": "JOB",
                    "format": "GENERIC_OBJECT_EXCEL",
                    "source": "internal",
                    "role": "admin",
                    "user": "system",
                    "subtype": "User",
                    "order": "10"
                }
            ]
        }
    },
  "fileName": "EntityData"
}
</code>
</pre>

The above request makes use of the export profile for downloading the generic object data. The profile configuration details how the export must happen for this generic object data, such as:
* Context information such as, app, service, channel, format and so on. 
* Collect section, that is, channel details and data format details.
  *	Channel type: genericObjectConnector
  * Format type: GENERIC_OBJECT_JSON
  * Format settings
* Transform settings information.
* Publish section, that is, channel details and data format details.
  *	Channel type: presentation Connector
  * Format type: GENERIC_OBJECT_EXCEL
  * Format settings: By default, the following sheet is configured:

<pre>
<code>
"format": 
{
  "settings": 
    {
        "additionalSettings": {
        "tenantIdCellAddress": "B7",
        "metaInfoSheet": "Help"
        },
        "encoding": "utf8"
    },
}
</code>
</pre>

Here is a sample export profile for generic object data:

<a href="files/export_profile_genericobject.json" download> Sample Export Profile</a>

The export profile processes the API request and sends the below response.

### Response

For the above request, the job is submitted successfully as detailed in the statusDetail object. Returns the **Work Automation ID** after submitting the binary object as a job for further processing.

<pre>
<code>
{
    "dataObjectOperationResponse": {
        "status": "success",
        "dataObjects": [
            {
                "properties": {
                    "workAutomationId": "d4ba286d-4813-4570-ae64-5242fe9dea87"
                }
            }
        ],
        "statusDetail": {
            "code": "RSC2162",
            "message": "Download data job has been initiated with work automation id : d4ba286d-4813-4570-ae64-5242fe9dea87.",
            "messageType": "Info"
        },
        "totalRecords": 0
    }
}
</code>
</pre>

The following template is a sample generic object excel file that is downloaded to the local system:

<a href="files/sample_genericobject_template.xlsx" download> Sample Generic Object Data </a>