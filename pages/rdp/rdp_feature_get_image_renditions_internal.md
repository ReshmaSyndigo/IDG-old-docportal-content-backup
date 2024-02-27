---
title: Get Image Renditions using ID
sidebar: rdp_sidebar
permalink: rdp_feature_get_image_renditions.html
folder: rdp
type: HowTo
---

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/get** to get image renditions using Id.

## Scenario

To get image renditions using 'Id'.

{% include snippets/header.html %}

## Request

To get image renditions using Id, you can use the REST API {{site.data.rdp_glossary.getconfig}}. In the request send the following details:

<pre>
<code>
POST **{{site.data.rdp_glossary.getconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "imageRendition_renditionConfig",
    "name": "imageRendition",
    "type": "renditionConfig",
    "properties": {
      "createdByService": "configurationManageService",
      "createdBy": "user"
    },
    "data": {
      "contexts": [
        {
          "context": {
            "app": "RSDAM",
            "service": "assetRenditionService",
            "enabled": "true",
            "assetType": "image"
          },
          "jsonData": {
            "renditions": [
              {
                "uom": "pixels",
                "extension": "jpg",
                "transform": {
                  "mode": "pad",
                  "paddingColor": "#000000"
                },
                "renditionId": "abc",
                "largestDimension": 120,
                "type": "thumbnail"
              },
              {
                "uom": "pixels",
                "extension": "png",
                "transform": {
                  "mode": "pad",
                  "paddingColor": "#006633"
                },
                "renditionId": "abc1",
                "largestDimension": 399,
                "type": "image"
              },
              {
                "uom": "pixels",
                "extension": "png",
                "transform": {
                  "mode": "pad",
                  "paddingColor": "#006633"
                },
                "renditionId": "abc2",
                "width": 980,
                "type": "image",
                "height": 480
              }
            ]
          }
        }
      ]
    }
  }
}
</code>
</pre>

## Response

The following sample JSON returns the image rendition Id.

<pre>
<code>
POST **{{site.data.rdp_glossary.getconfig}}**
Headers: Content-Type: application/json
Body:
{
  "request": {
    "returnRequest": false,
    "requestId": "065a47e3-ed1f-410f-8a95-98cfbab34abc"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted renditionConfig for create with Id imageRendition_renditionConfig. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "renditionConfig",
            "create",
            "imageRendition_renditionConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>