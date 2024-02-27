---
title: Ignore processing assets used in Add-on apps
sidebar: rdp_sidebar
permalink: api_ignore_processing_assets.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can ignore processing of assets that are used in Add-on apps. Set the “ignoreassetprocessing” property to ‘true’ to ignore processing of Thumbnail, Renditions, and Asset Entity. When the asset entity is not processed, they are not displayed in the UI but stored in the Blob store (media asset container).

{% include callout.html content="**Notes:** 
*	By default, this property is set to ‘false’. 
* To complete the task successfully, you must provide the exact batch size. In case there are 5 images, and if you wish to process only 1 image, set the batch size to 1. 
" type="primary" %}

## Request

In the request send the following details:
* **objectKey**: defines the image name and the format.
* **replacementFileName**: enter the replacement asset details.
* **ignoreAssetProcessing**: set this property to ‘true’ to ignore processing assets that have 360-degree view.

<pre><code>
{
  "binaryStreamObject": {
    "type": "binaryStreamObject",
    "properties": {
      "objectKey": "sample1.jpg",
      "replacementFileName": "sample1.jpg",
      <span style="background-color: #FFFF00">"ignoreAssetProcessing": true</span>
    }
  }
}
</code></pre>

## Response

If the request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "28dc2025-279a-4139-964f-66fc9e2e31d2"
  },
  "response": {
    "binaryStreamObjects": [
      {
        "id": "2dfabac1-3be3-4674-83e4-2157d1a6abeb",
        "type": "binaryStreamObject",
        "systemInfo": {
          "tenantId": "rdwengg-az-qa8"
        },
        "data": {
          "properties": {
            "replacementObjectKey": "replacementObjectKey",
            "replacementFileName": "sample1.jpg",
            "uploadContinuousURL": "https://rdwenggazqa8rssa.blob.core.windows.net/rdwengg-az-qa8-rdp-media-assets/replacementObjectKey?sig=0jdJvKHnpygpbCiPkylh6VVyN5fyxFAnjkhI5%2FPZtbg%3D&se=2020-11-13T10%3A37%3A06Z&sv=2017-07-29&sp=acw&sr=c",
            "headers": [
              {
                "x-ms-meta-x_rdp_userroles": "[\"admin\"]"
              },
              {
                "x-ms-meta-x_rdp_tenantid": "t1"
              },
              {
                "x-ms-meta-x_rdp_ownershipdata": "[\"Nike\"]"
              },
              {
                "x-ms-meta-replacementFileName": "sample1.jpg"
              },
              {
                "x-ms-blob-content-disposition": "attachment; filename=sample1.jpg"
              },
              {
                "x-ms-meta-type": "binaryStreamObject"
              },
              {
                "x-ms-meta-x_rdp_clientid": "rdpclient"
              },
              {
                "x-ms-meta-x_rdp_userid": "abc@riversand.com"
              },
              {
                "x-ms-meta-binarystreamobjectid": "2dfabac1-3be3-4674-83e4-2157d1a6abeb"
              },
              {
                "x-ms-meta-ignoreAssetProcessing": "true"
              },
              {
                "x-ms-blob-type": "BlockBlob"
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>