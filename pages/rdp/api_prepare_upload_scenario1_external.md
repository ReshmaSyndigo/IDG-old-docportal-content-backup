---
title: Prepare to Upload an Image
sidebar: rdp_sidebar
permalink: api_prepare_upload_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.prepareUpload}}** to prepare for uploading an image in Riversand Platform, using a scenario.

## Scenario

To prepare for uploading "toteBag.png" image to an external storage such as Amazon S3. 

{% include snippets/header.html %}

## Request

To prepare for uploading the above image, use the REST API {{site.data.rdp_glossary.prepareUpload}}. In the request send the following details:

{% include snippets/clientState.html %}
* binaryStreamObject: In the [binaryStreamObject](api_binary_stream_object_structure.html) object, provide the 'id' as 'guid' and type as **binarystreamobject**.
  * objectKey: defines the image name and the format.
  * fullObjectPath: defines the complete digital asset object path.
  * originalFileName: defines the image file name.
  * role: defines the user role.
  * mediaAssetId: links the Digital Asset ID with the original entity while uploading assets through UI. Consider that you are uploading assets via UI, the application generates a "mediaAssetId" and sends this ID to RSDAM as part of the asset metadata. Then the RSDAM sets the same "mediaAssetId" as digital asset Id and directly links the entity to the media assets. 
  * ownershipData: defines the ownership of the user.

<pre>
<code>
POST **{{site.data.rdp_glossary.prepareUpload}}**
Headers: Content-Type: application/json
{
  "binaryStreamObject": {
    "id": "guid",
    <span style="background-color: #FFFF00">"type": "binarystreamobject",</span>
    <span style="background-color: #FFFF00">"properties": {</span>
      "objectKey": "abc@_@guid.jpg",
      "fullObjectPath": "rdp/binarystreamobject/assets/abc@_@guid.jpg",
      "originalFileName": "abc@_@guid.jpg",
      "user": "dev1admin@riversand.com",
      "role": "admin",
      "mediaAssetId": "hIq27aTfRaOR4olBEXe1b",
      "ownershipData": "Admin1"
    }
  }
}
</code>
</pre>

## Response

If the request is submitted successfully, then the following response is received from the API:

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
                "x-ms-meta-mediaAssetId": "hIq27aTfRaOR4olBEXe1b"
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

{% include callout.html content="**Note**: The maximum file size that you can upload via uploadURL or User Interface (UI) is 4 GB.
" type="primary" %}

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

{% include callout.html content="**Note**: Prepare to Upload a Video, a Document, and Audio is similar to Prepare Upload an Image.
" type="primary" %}