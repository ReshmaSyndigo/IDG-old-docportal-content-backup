---
title: Create Deterministic Match Configuration for an Asset
sidebar: rdp_sidebar
permalink: api_match_merge_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to create a match configuration to match an 'asset'. 

## Scenario

To create deterministic match configuration to match 'original file name' of an image. 

## Request

In the request below, you are creating a deterministic match configuration to match the 'original file name' of an image.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "image_matchconfig",</span>
      <span style="background-color: #FFFF00">"name": "image",</span>
      <span style="background-color: #FFFF00">"type": "matchConfig",</span>
      "properties": {
        "createdService": "configurationManageService",
        "createdBy": "mary.jane@riversand.com",
        "createdDate": "2019-03-11T23:09:16.614-0500",
        "modifiedService": "configurationManageService",
        "modifiedBy": "mary.jane@riversand.com",
        "modifiedDate": "2019-03-11T23:09:16.614-0500"
      },
      "data": {
        "data": {
          "jsonData": {
            "type": "config",
            "matchRules": [
              {
                <span style="background-color: #FFFF00">"matchType": "deterministic",</span>
                "matchSequence": 1,
                "searchQuery": {
                  "query": {
                    "valueContexts": [
                      {
                        "source": "internal",
                        "locale": "en-US"
                      }
                    ],
                    "filters": {
                      <span style="background-color: #FFFF00">"typesCriterion": [</span>
                        "image"
                      ],
                      <span style="background-color: #FFFF00">"attributesCriterion": [</span>
                        {
                          "property_originalfilename": {
                            "exact": "&#123;&#123;property_originalfilename&#125;&#125;",
                            "type": "_STRING"
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
}
</code>
</pre>

## Response

The response shows the match configuration object is created successfully.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "01d8231c-32ae-4536-b68e-3a9b65494052"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : image_matchconfig. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created configuration:
- You can use {{site.data.rdp_glossary.getmatch}} API to verify the match results. See [Search Entities](api_get_match_results.html).