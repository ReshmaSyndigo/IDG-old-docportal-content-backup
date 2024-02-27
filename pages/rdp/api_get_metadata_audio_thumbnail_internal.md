---
title: Get Metadata Details of Audio Thumbnail
sidebar: rdp_sidebar
permalink: api_get_metadata_audio_thumbnail.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getbinarystream}}** to get the metadata details of the Audio Thumbnail. To know more about the supported Digital File formats, see [Search Your Digital Assets](/{{site.data.rdp_links_version.APPU}}/srch_assets.html){:target="_blank"}.

## Scenario

Consider that you wish to get the metadata details of the audio thumbnail.

{% include snippets/header.html %}

## Request

To get the above binary stream object, you can use the REST API {{site.data.rdp_glossary.getbinarystream}}. In the request send the following details:
* query -> Id: Specify the objectkey used to upload the asset.
* query -> filters -> typesCriterion: Specify the type as "audiorendition"

<pre>
<code>
POST **{{site.data.rdp_glossary.getbinarystream}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "id": "62202ee6-7808-4baa-978d-c6011089efea",
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [
          "audiorendition"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "totalRecords": 1
    }
  }
}
</code>
</pre>

## Response

Returns the binary stream object details of the specified Id.

<pre><code>
{
  "id": "a10d1401-ff5c-476d-a30a-ed2b3e64f954",
  "type": "audiorendition",
  "properties": {
    "type": "thumbnail",
    "extension": "wav",
    "uom": "pixels",
    "width": 128,
    "height": 128,
    "assetId": "a10d1401-ff5c-476d-a30a-ed2b3e64f954",
    "fileSize": 1285,
    "createdByService": "rsAssetService",
    "filename": "a156o101-ff5c-476d-a30a-ed2b3e64f954",
    "originalFileName": "skuaudio.wav",
    "batchid": "cf2aba32-0c7d-46e9-9716-023da48fc0e6",
    "createdService": "binaryStreamObjectService",
    "createdBy": "system_user",
    "modifiedService": "binaryStreamObjectService",
    "modifiedBy": "system_user",
    "createdDate": "2020-06-02T01:28:31.141-0600",
    "modifiedDate": "2020-06-02T01:28:31.141-0600"
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.