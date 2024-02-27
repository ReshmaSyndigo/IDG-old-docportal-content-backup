---
title: Get SAS URL to access Original Media Asset while Export through Downstream System
sidebar: rdp_sidebar
permalink: api_get_sas_url_exprt_dwnstrm_sys.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform enables you to provide SAS URL for various media assets (such as image, audio, video, document, and so on) along with export process. After the successful creation/updation of a profile, the SAS URL can be exported for the various media assets based on it. The SAS URL enables you to access original media assets stored in Blob Store while performing entity export for any asset. Using the SAS URL, the downstream system can export the original assets from the Blob Store.

This topic describes how to use the **{TENANT_ID}/api/configurationservice/create** to to create or update a profile for various media assets and get the SAS URL to access the original media assets while Export through a downstream system using a scenario.

## Scenario

To create a profile for various media assets and get the SAS URL to access original media assets (image, audio, video, document, and so on) stored in Blob Store while performing the export. While sending the API request you have the option to provide the URL validation time in minutes.

{% include callout.html content="**Notes**: 
* You can set the URL validity time maximum up to 7 days or 10080 minutes. 
* If you provide URL validity time more than the allowed duration, it will override and maximum URL validity will be for 7 days or 10080 minutes.
* If you wish to change the maximum SAS URL validity time, you must request to Riversand Ops team to configure it.
* If you do not provide the SAS URL validity time, then SAS URL will pick the default validity time set in the tenant service configuration, which is currently set for one day or 1440 minutes.
* If you are able to access the SAS URL after the expiry, it’s due to browser caching. You will be receiving the response from the browser cache, not the Blob Store. It is recommended to clear the browser cache to get the latest response from Blob Store.
" type="primary" %}

{% include snippets/header.html %}

## Request

To create a profile for various media assets and get the SAS URL, you can use the REST API **{TENANT_ID}/api/configurationservice/create**. Also, you can set up the SAS URL validity duration. 

In the **collect** JSON section, specify the following details to create or update the profile and its validity:
* **downloadURLAssetTypes** – the type of assets you wish to use to export through SAS URL.
* **validityDurationInMins** – SAS URL validity in minutes.

<pre>
<code>
POST **{WEBURL}:{WEBPORT}/{TENANT_ID}/api/configurationservice/create**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "sys_export_data_json_any_task_base",
    "name": "sys_export_data_json_any_task_base",
    "type": "integrationprofile",
    "properties": {
      "createdService": "configurationManageService",
      "createdBy": "system_user",
      "modifiedService": "configurationManageService",
      "modifiedBy": "system_user",
      "createdDate": "2020-12-14T23:33:06.022-0600",
      "modifiedDate": "2020-12-14T23:33:06.022-0600"
    },
    "data": {
      "contexts": [
        {
          "context": {
            "app": "RSConnect",
            "channel": "ALL",
            "format": "JSON",
            "order": "10",
            "role": "admin",
            "service": "ENTITY_EXPORT",
            "source": "internal",
            "subtype": "System",
            "user": "system"
          },
          "jsonData": {
            "integrationType": "System",
            "isEnabled": "true",
            "isMergeableWithCustom": true,
            "statusEventEnabled": false,
            "collect": {
              "isBinaryStreamPersistent": "true",
              "channel": [
                {
                  "type": "rdpConnector",
                  "settings": {
                    "type": "RSJSON",
                    "version": "1.1"
                  }
                }
              ],
              "format": {
                "type": "RSJSON",
                "version": "1.1",
                "batchSize": 30,
                "settings": {
                  "additionalSettings": {
                    "encoding": "utf8",
                    <span style="background-color: #FFFF00"> "validityDurationInMins": 1080, </span>
                    <span style="background-color: #FFFF00"> "downloadURLAssetTypes": "image, audio, video, document" </span>
                  }
                }
              },
              "filter": {
                "include": {},
                "exclude": {}
              }
            },
            "publish": {
              "isBinaryStreamPersistent": "true",
              "channel": [
                {
                  "type": "eventHubConnector",
                  "settings": {}
                }
              ],
              "format": {
                "type": "RSJSON",
                "version": "1.1",
                "batchSize": 1,
                "settings": {
                  "additionalSettings": {
                    "encoding": "utf8"
                  }
                }
              },
              "filter": {
                "include": {},
                "exclude": {}
              }
            },
            "transform": {
              "settings": {
                "nullRecordTransformer": "true"
              }
            }
          }
        }
      ]
    }
  }
}
</code>
</pre> 

## Response

If the above request is submitted successfully, then the following response with status is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "962f626c-add5-497d-ab3a-9013413ce6cc"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted integrationprofile for create with Id sys_export_data_json_any_task_base. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "sys_export_data_json_any_task_base"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

After successful configuration of SAS URL for the media assets, you can export the entities. In the configuration file (JSON or Excel), search for the SAS URL, with the attribute name **"assetDownloadUrl"** in your JSON or Excel file. The **"assetDownloadUrl"** attributes contains the SAS URL.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.