---
title: Get Metadata Details of Image Thumbnail
sidebar: rdp_sidebar
permalink: api_get_metadata_image_thumbnail.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getbinarystream}}** to get the metadata details of the Image Thumbnail. To know more about the supported Digital File formats, see [Search Your Digital Assets](/{{site.data.rdp_links_version.APPU}}/srch_assets.html){:target="_blank"}.

## Scenario

Consider that you wish to get the metadata details of the image thumbnail.

{% include snippets/header.html %}

## Request

To get the above binary stream object, you can use the REST API {{site.data.rdp_glossary.getbinarystream}}. In the request send the following details:
* query -> Id: Specify the objectkey used to upload the asset.
* query -> filters -> typesCriterion: Specify the type as "imagerendition"

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
          "imagerendition"</span>
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
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "ba3df45d-ea7f-4bad-9756-a1aa4f79b39a",
    "maxRecords": 100
  },
  "response": {
    "binaryStreamObjects": [
      {
        "id": "62202ee6-7808-4baa-978d-c6011089efea",
        "type": "imagerendition",
        "properties": {
          "type": "thumbnail",
          "extension": "jpg",
          "uom": "pixels",
          "width": 120,
          "height": 120,
          "largestDimension": 120,
          "transform_mode": "pad",
          "transform_paddingColor": "#000000",
          "assetId": "62202ee6-7808-4baa-978d-c6011089efea",
          "fileSize": 2705,
          "createdByService": "rsAssetService",
          "filename": "62202ee6-7808-4baa-978d-c6011089efea",
          "originalFileName": "9c5bbd4c-2e0a-11ea-a33e-83a5f914b165",
          "batchid": "f58c9951-51c0-4f54-854b-9d64357a5ed4",
          "createdService": "binaryStreamObjectService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "binaryStreamObjectService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2020-06-02T08:39:03.213-0600",
          "modifiedDate": "2020-06-02T08:39:03.213-0600"
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.