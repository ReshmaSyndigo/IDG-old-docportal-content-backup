---
title: Download Generic Object
sidebar: rdp_sidebar
permalink: api_imp_gen_obj_str.html
type: Description
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides **Publish** API, that export generic object data (in JSON structure) from Riversand Data Platform (RDP) to different channels such as Azure Blob, Kinesis, EventHub and so on. Upon successful data export, you can verify in the target channel.

For more information about the generic object, see <a href="/{{site.data.rdp_links_version.ADM}}/m_search_generic_objects.html" target="_blank">Search Generic Object</a>.

This topic describes how to use the **{TenantURL or ID}/api/rsConnectService/publish** to export the generic object data model using a scenario. To track the exported generic object, use **work automation id** from the response for further references.

## Scenario
Export the data related to generic object from RDP to cloud repository, such as AZURE_BLOB.

{% include snippets/header.html %}

## Request

To Export the data related to a generic object from RDP to Azure Blob, you can use the REST API **{TenantURL or ID}/api/rsConnectService/publish**. In the **profilecontexts** section, specify the following details:
* The app must be specified from which framework generic object data is exported.
* Specify the service as **GENERIC_OBJECT_PUBLISH** for generic object data export.
* Specify the **typesCriterion** depending on the application.
* The channel must be specified as per the export profile.
* Currently, the generic object supports only **JSON** format.

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/publish
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "userInteractionLocale": "en-US",
      "filters": {
        <span style="background-color: #FFFF00"> "typesCriterion": [  </span>
          <span style="background-color: #FFFF00"> "connectorstate"  </span>
        ],
        "propertiesCriterion": [
          {
            "channelid": {
              "exacts": [
                "rs-shopify"
              ]
            }
          }
        ],
        "attributesCriterion": [
          {
            "itemState": {
              "exacts": [
                "new"
              ]
            }
          }
        ]
      }
    },
    "options": {
      "maxRecords": 10
    },
    "fields": {
      "relationshipAttributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ],
      "attributes": [
        "_ALL"
      ]
    },
    "rsconnect": {
      "profilecontexts": [
        {
          <span style="background-color: #FFFF00"> "app": "RSConnect", </span>
          <span style="background-color: #FFFF00"> "service": "GENERIC_OBJECT_PUBLISH", </span>
          <span style="background-color: #FFFF00"> "channel": "AZURE_BLOB", </span>
          <span style="background-color: #FFFF00"> "format": "JSON" </span>
        }
      ]
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
      "message": "Binary object has been submitted for create with <span style="background-color: #FFFF00"> work automation id : 0a49a380-afd7-462c-8919-943ebe6b47ce.  </span> Please check back after 10 mins.",
      "messageType": "Info",
      "childTaskIds": [
        "77dfe7d2-b41d-45af-9705-5bc5a5640e48"
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

For the above request, the job is submitted successfully as detailed in the **statusDetail** object and you can track the submitted job using **work automation id**.
After the successful export, verify in the **Azure Blob** target channel. If you wish to view the exported generic object data, open the file; or download and then open the file.

Similarly, users can also download or export the generic object data in EXCEL format from Riversand Platform to external repositories, such as SFTP or Azure Blob.

The following template is a sample Generic object data (in excel format) that are downloaded/exported from Riversand Platform to SFTP.

<a href="files/sample_genericobject_template.xlsx" download> Sample Generic Object Data </a>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.