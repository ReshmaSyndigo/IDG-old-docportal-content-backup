---
title: Create or Update Asset Renditions
sidebar: rdp_sidebar
permalink: api_create_update_image_renditions.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.generaterendition}}** to  create or update the existing asset renditions. You must update the image rendition configurations to change the image height, width, and generate new renditions. For more information, see [Get Image Renditions using ID](rdp_feature_get_image_renditions.html). For an asset, the new image rendition configurations take precedence over the existing image rendition and is displayed when they are requested.

{% include callout.html content="**Notes:** 
* You can create or update rendition for maximum of 100 assets. 
* You must enter “typesCriterion”, and “maxRecords” as they are mandatory properties.
* User Id's are mandatory property in the header.
" type="primary" %}

## Scenario

Consider that you wish to create or update image renditions.

{% include snippets/header.html %}

### Scenario 1: Valid details are provided

Consider that the user provides 'ids' and 'typecriterion' and sends the following request.

#### Request

To create or update renditions, in the request send the following details:
*	ids: Provide the entity ids for which you wish to generate rendition.
*	typesCriterion: Specify the entity type criterion
*	maxRecords: Maximum value must not exceed 100.

<pre>
<code>
POST **{{site.data.rdp_glossary.generaterendition}}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
UserId: adadmin@riversand.com
Body:
{
  "params": {
    "query": {
      "ids": [
        "AnkIVnKGS0aDR1Re203gkw",
        "FrgQoE19QDKmHfQkt8f9Yw"
      ],
      "filters": {
        "typesCriterion": [
          "image"
        ]
      }
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre> 

#### Response

The following response is displayed.

<pre><code>
{
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted request for generate renditions with Id ac12bba5-8d97-4341-ae7d-cd4773e68d1a. Check after some time",
          "messageType": "success",
          "messageCode": "I0062",
          "messageParams": [
            "request",
            "generate renditions",
            "ac12bba5-8d97-4341-ae7d-cd4773e68d1a"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

### Scenario 2: ‘typeCriterion’ property is empty

Consider that the “typeCriterios” property is empty and the user sends the following request.

#### Request

<pre>
<code>
POST **{{site.data.rdp_glossary.generaterendition}}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
UserId: adadmin@riversand.com
Body:
{
  "params": {
    "query": {
      "ids": [
        "AnkIVnKGS0aDR1Re203gkw",
        "FrgQoE19QDKmHfQkt8f9Yw"
      ],
      "filters": {
        "typesCriterion": []
      }
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre> 

#### Response

The following response is displayed.

<pre><code>
{
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Failed to process request. Exception details typesCriterion is not present or empty in params.query.filters",
          "messageType": "error",
          "messageCode": "AE001",
          "messageParams": [
            "typesCriterion is not present or empty in params.query.filters"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

### Scenario 3: “typeCriterion” property is not defined

Consider that the “typeCriterion” property is not defined and the user sends the following request.

#### Request

<pre>
<code>
POST **{{site.data.rdp_glossary.generaterendition}}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
UserId: adadmin@riversand.com
Body:
{
  "params": {
    "query": {
      "filters": {}
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre> 

#### Response

The following response is displayed.

<pre><code>
{
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Failed to process request. Exception details typesCriterion is not present or empty in params.query.filters",
          "messageType": "error",
          "messageCode": "AE001",
          "messageParams": [
            "typesCriterion is not present or empty in params.query.filters"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

### Scenario 4: “options” property is not defined

Consider that the “options” property is not defined and the user sends the following request.

#### Request

<pre>
<code>
POST **{{site.data.rdp_glossary.generaterendition}}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
UserId: adadmin@riversand.com
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "image"
        ]
      }
    }
  }
}
</code>
</pre> 

#### Response

The following response is displayed.

<pre><code>
POST **{{site.data.rdp_glossary.generaterendition}}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
UserId: adadmin@riversand.com
Body:
{
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Failed to process request. Exception details options is not present in params",
          "messageType": "error",
          "messageCode": "AE001",
          "messageParams": [
            "options is not present in params"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

### Scenario 5: “maxRecords” property is not defined

Consider that the “maxRecords” property is not defined and the user sends the following request.

#### Request

<pre><code>
POST **{{site.data.rdp_glossary.generaterendition}}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
UserId: adadmin@riversand.com
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "image"
        ]
      }
    },
    "options": {}
  }
}
</code>
</pre> 

#### Response

The following response is displayed.

<pre><code>
{
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Failed to process request. Exception details maxRecords is not present in params.options",
          "messageType": "error",
          "messageCode": "AE001",
          "messageParams": [
            "maxRecords is not present in params.options"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

### Scenario 6: Max record exceeds the limit

Consider that the user defined max record value exceeds the limit and the user sends the following request.

#### Request

<pre><code>
POST **{{site.data.rdp_glossary.generaterendition}}}**
Host: {WEBURL}:9095
Headers: Content-Type: application/json
UserId: adadmin@riversand.com
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "image"
        ]
      }
    },
    "options": {
      "maxRecords": 101
    }
  }
}
</code>
</pre> 

#### Response

The following response is displayed.

<pre><code>
{
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          "message": "Failed to process request. Exception details maxRecords is exceeding the limit 100 in params.options.",
          "messageType": "error",
          "messageCode": "AE001",
          "messageParams": [
            "maxRecords is exceeding the limit 100 in params.options."
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.