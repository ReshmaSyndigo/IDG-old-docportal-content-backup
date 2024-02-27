---
title: Upload Generic Object
sidebar: rdp_sidebar
permalink: api_exp_gen_obj_str.html
type: Description
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides **Collect** API that import generic object data from different channels or sources, such as SFTP, Azure, Kinesis, EventHub to Riversand Data Platform (RDP). This service is executed asynchronously. It returns the intermediary binary object that it submits as a job for further processing of the data, and returns the **work automation id**. **Work automation id** helps you to track the status of the job. It returns an error message in case of invalid requests.

For more information about the generic object, see <a href="/{{site.data.rdp_links_version.ADM}}/m_search_generic_objects.html" target="_blank">Search Generic Object</a>.

This topic describes how to use the **{TenantURL or ID}/api/rsConnectService/collect** to import the data model using a scenario. To track the imported generic object, use the **work automation id** from the response for further references.

## Scenario
Import the generic object data from SFTP server to RDP.

{% include snippets/header.html %}

## Request

To import the generic object data from SFTP, you can use the REST API **{TenantURL or ID}/api/rsConnectService/collect**. In the **databoject**, specify the following details:
* In the properties section, specify the service as **GENERIC_OBJECT_IMPORT** for generic object data import. You can import data in **JSON** format. As you wish to import data from SFTP in JSON format, you must specify channel as "SFTP" and format as "JSON". 
* The channel and format must be specified as per the import profile. 
* Here, the collect API also internally calls **Process API** or **ProcessModel API**. It performs transform mapping and imports the data to Riversand Platform.

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
 <span style="background-color: #FFFF00"> "service": "GENERIC_OBJECT_IMPORT", </span>
 <span style="background-color: #FFFF00"> "channel": "SFTP", </span>
 <span style="background-color: #FFFF00"> "format": "JSON", </span>
 "source": "internal",
 "role": "admin"
 },
 "data": {
 "blob": ""
 }
 }
}
</code>
</pre>

## Response

Returns the **Work Automation ID** after submitting the binary object as a job for further processing.

<pre>
<code>
{
 "dataObjectOperationResponse": {
 "status": "success",
 "statusDetail": {
 "code": "RSC1002",
 "message": "Binary object has been submitted for create with <span style="background-color: #FFFF00"> work automation id : 50750551-3601-46ca-8db0-84d9c52da338. </span> Please check back after 10 mins.",
 "messageType": "Info"
 },
 "totalRecords": 0
 }
}
</code>
</pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **work automation id**.

Similarly, users can also import generic object data in EXCEL format from external channels through UI directly or through scheduler.

The following template is a sample Generic object data (in excel format) that can be imported from SFTP to the Riversand Platform.

<a href="files/sample_genericobject_template.xlsx" download> Sample Generic Object Data </a>

<a href="files/configs/rock-context-selector_digitalAsset.json" download>rock-context-selector_digitalAsset.json</a>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
