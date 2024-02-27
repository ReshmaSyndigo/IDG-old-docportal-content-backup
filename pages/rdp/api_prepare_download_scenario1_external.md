---
title: Prepare to Download an Image
sidebar: rdp_sidebar
permalink: api_prepare_download_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.prepareDownload}}** to prepare for downloading an image in Riversand Platform, using a scenario.

## Scenario

To prepare for downloading "toteBag.png" image from an external storage such as Amazon S3. 

{% include snippets/header.html %}

## Request

To prepare for downloading the above image, use the REST API {{site.data.rdp_glossary.prepareDownload}}. In the request send the following details:

{% include snippets/clientState.html %}
* binaryStreamObject: In the [binaryStreamObject](api_binary_stream_object_structure.html) object, provide the Id and type as **binarystreamobject**.

<pre>
<code>
POST **{{site.data.rdp_glossary.prepareDownload}}**
Headers: Content-Type: application/json
Body:
{
  "binaryStreamObject": {
    <span style="background-color: #FFFF00">"id": "guid",</span>
    <span style="background-color: #FFFF00">"type": "binarystreamobject",</span>
    "properties": {
      "objectKey": "9705deb1-c2b8-474f-ab55-0f3f2eb20edd.jpg",
      "originalFileName": "531259Q_M_VA_SV_Black.jpg",
      "user": "dev1admin@riversand.com",
      "role": "admin",
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

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

{% include callout.html content="**Note**: Prepare to Download a Video, a Document, and Audio is similar to Prepare Download an Image.
" type="primary" %}