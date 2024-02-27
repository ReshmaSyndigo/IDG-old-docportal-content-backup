---
title: Create rendition for large file size
sidebar: rdp_sidebar
permalink: api_create_image_renditions_thumnail_asset_filesize.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/create** to create image renditions based on the asset file size defined in the tenant level.

{% include callout.html content="**Note:** If you wish to create customer specific config then, use 'rsserviceconfig' to modify the configurations.
" type="primary" %}

## Scenario

Consider that you wish to configure 40MB limit to generate renditions and thumbnail at the tenant level.

## Request

To configure image rendition based on asset file size, use the REST API **{TenantURL or ID}/api/configurationservice/create**. In the request send the following details:
* **maxAssetFileSizeToCopyFromStorage**: Specify the limit to support thumbnail and rendition.
* **maxAssetFileSizeToCopyForMetadataOnly**: Specify the asset file size to extract metadata details.

<pre>
<code>
{
  "configObject": {
    "id": "rsAssetService_rsserviceconfig",
    "type": "rsserviceconfig",
    "data": {
      "jsonData": {
        "maxAssetFileSizeToCopyFromStorage": 41943040,
        "maxAssetFileSizeToCopyForMetadataOnly": 1048576
      }
    }
  }
}
</code></pre>

## Response

If the configuration create request is submitted successfully, then the following response is received from create configuration API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "6e1be6e2-0463-4aa0-beb5-64a0499602b2"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted rsserviceconfig for create with Id rsAssetService_rsserviceconfig. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "rsserviceconfig",
            "create",
            "rsAssetService_rsserviceconfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Based on the above configuration, the tenant configuration is updated with the specified limit. For example, tenantserviceconfig is updated with the following details:
* maxAssetFileSizeToCopyFromStorage: 41943040
* maxAssetFileSizeToCopyForMetadataOnly: 1048576