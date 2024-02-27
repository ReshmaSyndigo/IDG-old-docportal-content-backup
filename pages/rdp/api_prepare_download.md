---
title: Prepare Download
sidebar: rdp_sidebar
permalink: api_prepare_download.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to prepare for downloading an asset from external storage such as Amazon S3:

* [Prepare to Download an Image](api_prepare_download_scenario1.html)
* [Download Asset Based on an Entity Id](api_prepare_download_scenario2.html)

The following diagram illustrates a typical flow of how the APIs in **Binary Stream Object Service** are used to download image assets from an external storage:

{% picture binary-stream-download.png alt="Download Assets" %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.prepareDownload}}

**Parameters**: The following table lists the parameters of the JSON request to prepare for downloading an asset:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | binaryStreamObject | Yes | Indicates the details of the binary stream object to be downloaded. See [Binary Stream Object Structure](api_create_binary_stream_object.html), for more information. |

{% include callout.html content="**Note**: The API allows you to upload and download only one asset at a time with a maximum file size of 5GB.
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |
| response | binaryStreamObjects | Provides the ObjectKey, fullObjectPath, and the downloadURL that must be used to actually download the asset from the external storage. |

## Example

The following example demonstrates the sample JSON format to prepare for downloading an image "toteBag.png":

<pre><code>
POST **{{site.data.rdp_glossary.prepareDownload}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    "id": "guid",
    "type": "binarystreamobject",
    "properties": {
      "objectKey": "9705deb1-c2b8-474f-ab55-0f3f2eb20edd.jpg",
      "originalFileName": "531259Q_M_VA_SV_Black.jpg",
      "user": "dev1admin@riversand.com",
      "role": "admin",
      "ownershipData": "Admin1"
    }
  }
}
</code></pre>

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "4d3f5ef6-f354-4e1d-a29b-0dc1be873538"
  },
  "response": {
    "binaryStreamObjects": [
      {
        "id": "guid",
        "type": "binarystreamobject",
        "systemInfo": {
          "tenantId": "rwtest"
        },
          "properties": {
            "objectKey": "9705deb1-c2b8-474f-ab55-0f3f2eb20edd.jpg",
            "downloadURL": "https://enggazdev2mediastorage.blob.core.windows.net/rdp-media-assets-engg-az-dev2-rwtest/9705deb1-c2b8-474f-ab55-0f3f2eb20edd.jpg?sig=EF6CwUgqZnOfhFJ7qNqMxGEvrxlAkJHmSO9u0lnSYqg%3D&se=2018-09-21T09%3A52%3A18Z&sv=2017-07-29&sp=rl&sr=b"
          }        
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

You can use the "downloadURL" received in the response to actually download the asset from the external storage.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.