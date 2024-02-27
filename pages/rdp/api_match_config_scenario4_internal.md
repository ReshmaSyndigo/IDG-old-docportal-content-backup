---
title: Create Deterministic Match Configuration to Match mdmid and mdmname
sidebar: rdp_sidebar
permalink: api_match_config_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to create a match configuration to match the attributes 'mdmid' and 'mdmname'.

## Scenario

To create a deterministic match configuration to match mdmid and mdmname for "sku" entity type.

## Request

In the request below, you are creating a deterministic match configuration to match the attributes "mdmid" and "mdmname" for a sku entity.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "sku_matchConfig",</span>
      <span style="background-color: #FFFF00">"name": "sku",</span>
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
                        "sku"
                      ],
                      <span style="background-color: #FFFF00">"attributesCriterion": [</span>
                        {
                          "mdmid": {
                            "eq": "&#123;&#123;mdmid&#125;&#125;"
                          }
                        }
                      ]
                    }
                  }
                }
              },
              {
                <span style="background-color: #FFFF00">"matchType": "deterministic",</span>
                "matchSequence": 2,
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
                        "sku"
                      ],
                      <span style="background-color: #FFFF00">"attributesCriterion": [</span>
                        {
                          "mdmname": {
                            "eq": "&#123;&#123;mdmname&#125;&#125;"
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
    "requestId": "1d0e9b78-c995-4006-9cd8-c9c2c2b26e7a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted matchConfig for create with Id sku_matchConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "matchConfig",
            "create",
            "sku_matchConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created configuration:
- You can use {{site.data.rdp_glossary.getmatch}} API to verify the match results. See [Search Entities](api_get_match_results.html).