---
title: Get Entities Related to Images in Specific Value Context 
sidebar: rdp_sidebar
permalink: api_app_get_related_uiquery.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

When an entity is related to images, the pre-requisites to fetch all the entities are:
* In the [entityType]entityManageModel, the "relationshipOwnership" property in "hasimages" must be set to "owned".
* In the entity, the "isPrimary" attribute of the "hasimages" property must be set to true. 

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityappservice/getrelated** to get all entities related to images, using a scenario. 

## Scenario

To get all "sku" entities in "en-US" locale that are related to images.

{% include snippets/header.html %}

## Request

To get all the "sku" entities in "en-US" locale that contain "hasimages" relationship wherein the image is the "primary" image of the "sku", and is of jpg format, use the REST API {TenantURL or ID}/api/entityappservice/getrelated. In the request send the following details: 

To get entity details:

* query -> filters -> typesCriterion: Specify the type as "sku"
* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages: Specify "relTo" and type as "image" 
* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages -> attributes: Specify "isPrimary" as "true".
* query -> valueContexts -> locale: Specify as "en-US".
<br/>
To get images:

* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages-> query -> filters -> typesCriterion: Specify as "image".
* query -> filters -> typesCriterion -> relationshipsCriterion -> hasimages -> query -> filters -> attributesCriterion -> filenameextension: Specify as "jpg".
  
<pre>
<code>
POST **{{site.data.rdp_glossary.apprelatedget}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        <span style="background-color: #FFFF00">"relationshipsCriterion": [</span>
          {
            "hasimages": {
              "relTo": {
                "type": "image"
              },
              "attributes": [
                {
                  "isPrimary": {
                    "exact": "true"
                  }
                }
              ],
              "query": {
                "filters": {
                  "typesCriterion": [
                    "image"
                  ],
                  "attributesCriterion": [
                    {
                      "filenameextension": {
                        "exact": "jpg"
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      },
      <span style="background-color: #FFFF00">"valueContexts": [</span>
        {
          "source": "internal",
          "locale": "en-US"
        }
      ]
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre>

## Response

Returns all "sku" entities in "en-US" locale that are related to images.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "50a75cbd-4a82-45df-894e-533feb5e8d4e",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "4EYTcxYKS6mjfFD9mp5FBg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "u1n2uWGQTZe-xlMpbTfIPA",
        "name": "SKIPNEW8",
        "type": "sku"
      },
      {
        "id": "ewHo598MmQ3w7",
        "name": "shirt",
        "type": "sku"
      },
      {
        "id": "XIb9EQmwQ-2treibR2jtlA",
        "name": "SKIPNEW4",
        "type": "sku"
      },
      {
        "id": "NaMU7FWWT3Ww0ABJ4_Ln1Q",
        "name": "SKIPNEW7",
        "type": "sku"
      },
      {
        "id": "eXvQ4ACZrx73R",
        "name": "managenested002",
        "type": "sku"
      },
      {
        "id": "zWPGAbkXQYeuL-7i6JdYFA",
        "name": "SKIPNEW5",
        "type": "sku"
      },
      {
        "id": "20hV8vclR8O3WlhSXq1JUA",
        "name": "SKIPNEW1",
        "type": "sku"
      },
      {
        "id": "9LHRIyuMRviABdwQxM0A8Q",
        "name": "40VendorNewTesting489",
        "type": "sku"
      },
      {
        "id": "XaEohacHSyeC7s8dzUwOfg",
        "name": "SKIPNEW3",
        "type": "sku"
      }
    ],
    "status": "success",
    "totalRecords": 10
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.