---
title: Upload Continuous
sidebar: rdp_sidebar
permalink: api_upload_continuous.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform offers capability to upload multiple assets to the storage container by generating upload URL only once using Azure SAS key. Note that Shared Access Signature (SAS) key is used to perform multiple operations related to objects in a particular Azure blob container.

When the user imports assets through excel, DSV, or JSON, the file extensions are part of the URLs for Riversand Platform to recognize the path and download assets. Similarly, to bring in consistency during exports, the file extensions must be included when you perform **Upload Continuous** (multiple asset upload). In this process, a unique "asset Id" is created for each asset. The **replacementObjectKey** property is replaced with these unique asset Id’s for each asset, and the file formats are embedded as part of the **uploadContinuousURL** property. You can validate the uploaded assets by using these file extensions.

This section covers the following scenar  io to explain the usage of RESTful APIs in the Riversand Platform to generate upload URL, which helps to upload multiple files. The upload URL is generated only once using **uploadContinuous** API.

{% include snippets/header.html %}

## Request

**Parameters**: The following table lists the parameters of the JSON request to prepare for uploading an asset:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | binaryStreamObject | Yes | Indicates the details of the binary stream object to be uploaded. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |
| response | binaryStreamObjects | Provides the uploadURL that must be used to actually upload the asset to the external storage. The replacementObjectKey is a placeholder value, which UI replaces with a unique-id for every asset upload. |

{% include callout.html content="**Note**: The maximum file size that you can upload via uploadURL or User Interface (UI) is 4 GB.
" type="primary" %}

## Example

The following example demonstrates the sample JSON request format to obtain the upload URL.

<pre><code>
POST **{TenantURL or ID}/api/binarystreamobjectservice/uploadContinuous**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    "id": "guid",
    "type": "binarystreamobject"
  }
}
</code></pre>

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "d96c5ee2-22d3-4e5b-b736-23000fc353f4"
  },
  "response": {
    "binaryStreamObjects": [
      {
        "id": "52edc525-3484-41a5-9c7c-6c77c8247a81",
        "type": "binaryStreamObject",
        "systemInfo": {
          "tenantId": "rwtest"
        },
        "properties": {
            "replacementObjectKey": "replacementObjectKey",
            "replacementFileName": "replacementFileName",
            "uploadContinuousURL": "https://enggazdev2mediastorage.blob.core.windows.net/rdp-media-assets-engg-az-dev2-rwtest/replacementObjectKey?sig=3VcfTT%2FryC8F9XMs2ZL%2BPUIfCfjyKhkxLq7OTnuLsxU%3D&se=2019-07-10T09%3A52%3A33Z&sv=2017-07-29&sp=acw&sr=c",
            "headers": [
              {
                "x-ms-meta-x_rdp_userroles": "[\"admin\"]"
              },
              {
                "x-ms-meta-x_rdp_tenantid": "rwtest"
              },
              {
                "x-ms-meta-x_rdp_ownershipdata": "[\"Nike\"]"
              },
              {
                "x-ms-blob-content-disposition": "attachment; filename=replacementFileName"
              },
              {
                "x-ms-meta-x_rdp_clientid": "rdpclient"
              },
              {
                "x-ms-meta-x_rdp_userid": "testadmin@riversand.com"
              },
              {
                "x-ms-meta-binarystreamobjectid": "52edc525-3484-41a5-9c7c-6c77c8247a81"
              },
              {
                "x-ms-blob-type": "BlockBlob"
              }
            ]
          }      
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>