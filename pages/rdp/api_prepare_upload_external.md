---
title: Prepare Upload
sidebar: rdp_sidebar
permalink: api_prepare_upload.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to prepare for uploading an asset to external storage such as Amazon S3:

* [Prepare to Upload an Image](api_prepare_upload_scenario1.html)

The following diagram illustrates a typical flow of how the APIs in **Binary Stream Object Service** are used to upload image assets to an external storage:

{% picture binary-stream-upload.png alt="Upload Assets" %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.prepareUpload}}

**Parameters**: The following table lists the parameters of the JSON request to prepare for uploading an asset:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | binaryStreamObject | Yes | Indicates the details of the binary stream object to be uploaded. See [Binary Stream Object Structure](api_create_binary_stream_object.html), for more information. |

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
| response | binaryStreamObjects | Provides the ObjectKey, fullObjectPath, and the uploadURL that must be used to actually upload the asset to the external storage. |

## Example

The following example demonstrates the sample JSON format to prepare for uploading an image "toteBag.png":

<pre><code>
POST **{{site.data.rdp_glossary.prepareUpload}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    "id": "guid",
    "type": "binarystreamobject",
    "properties": {
      "objectKey": "abc@_@guid.jpg",
      "fullObjectPath": "rdp/binarystreamobject/assets/abc@_@guid.jpg",
      "originalFileName": "abc@_@guid.jpg",
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
    "requestId": "3879ab0b-e425-43cd-8c52-f42bb7489d7b"
  },
  "response": {
    "binaryStreamObjects": [
      {
        "id": "guid",
        "type": "binarystreamobject",
        "systemInfo": {
          "tenantId": "rdw"
        },
        "properties": {
            "objectKey": "abc@_@guid.jpg",
            "uploadURL": "https://enggazqa5mediastorage.blob.core.windows.net/rdp-media-assets-engg-az-qa5-rdw/abc@_@guid.jpg?sig=Y5YhvFqE6n9yZJetOS7slAHsmSSxnmXBaj822sp72s0%3D&se=2018-09-21T09%3A43%3A20Z&sv=2017-07-29&rscd=attachment%3B%20filename%3Dabc%40_%40guid.jpg&sp=acw&sr=b",
            "headers": [
              {
                "x-ms-meta-fullObjectPath": "rdp/binarystreamobject/assets/abc@_@guid.jpg"
              },
              {
                "x-ms-meta-x_rdp_userroles": "admin"
              },
              {
                "x-ms-meta-x_rdp_tenantid": "rdw"
              },
              {
                "x-ms-meta-originalfilename": "abc@_@guid.jpg"
              },
              {
                "x-ms-meta-role": "admin"
              },
              {
                "x-ms-meta-ownershipData": "Admin1"
              },
              {
                "x-ms-blob-content-disposition": "attachment; filename=abc@_@guid.jpg"
              },
              {
                "x-ms-meta-user": "dev1admin@riversand.com"
              },
              {
                "x-ms-meta-x_rdp_clientid": "rdpclient"
              },
              {
                "x-ms-meta-x_rdp_userid": "dev1admin@riversand.com"
              },
              {
                "x-ms-meta-binarystreamobjectid": "guid"
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

You can use the "uploadURL" received in the response to actually upload the asset to the external storage.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.