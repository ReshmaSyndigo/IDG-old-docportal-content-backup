---
title: Create Deterministic Match Configuration to match any UOM attribute
sidebar: rdp_sidebar
permalink: api_match_config_scenario6.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to create a match configuration to match any UOM attribute and its value. To consider the UOM attribute for match, add the "uomMatchType" property and specify the **exactUomBased** flag to perform an exact match based on the value and UOM attribute.

#### Example for exactUomBased match

Consider a scenario, where an incoming entity ‘Tapsy HandBag’ has ‘200mm’ value for an UOM attribute ‘baglength’ and there is an existing entity “Tapsy HandBags” with the same value.

**Result**: The existing entity is updated as the ‘baglength’ attribute and its value ‘200mm’ is an exact value and UOM match.

{% include callout.html content="**Note:** 
* If any entity that has ‘20cm’ for ‘baglength’ attribute is not considered for match though ‘200mm’ is equivalent to ‘20cm’ mathematically. They are not an exact value and UOM match.
* If the UOM is an invalid UOM, then the application does not perform any match.
" type="primary" %}

## Scenario

To create a deterministic match that supports UOM attribute.

## Request

In the request below, you are creating a deterministic match configuration to support the UOM attributes and its value.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "id": "sku_matchConfig",
  "name": "sku",
  "type": "matchConfig",
  "properties": {
    "createdService": "configurationManageService",
    "createdBy": "system_user",
    "modifiedService": "configurationManageService",
    "modifiedBy": "system_user",
    "createdDate": "2020-11-09T22:23:41.280-0600",
    "modifiedDate": "2020-11-09T22:23:41.280-0600"
  },
  "data": {
    "jsonData": {
      "matchRules": [
        {
          <span style="background-color: #FFFF00">"matchType": "deterministic",
          "uomMatchType": "exactUomBased", //convertedUomBased not supported</span>
          "searchQuery": {
            "query": {
              "filters": {
                "attributesCriterion": [
                  {
                    <span style="background-color: #FFFF00">"baglength": {
                      "exact": "{{baglength}}",
                      "type": "_STRING"</span>
                    }
                  }
                ],
                "typesCriterion": [
                  "sku"
                ]
              },
              "valueContexts": [
                {
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          },
          "matchSequence": 1
        },
        {
          "matchType": "deterministic",
          "searchQuery": {
            "query": {
              "filters": {
                "attributesCriterion": [
                  {
                    "mdmname": {
                      "exact": "{{mdmname}}",
                      "type": "_STRING"
                    }
                  }
                ],
                "typesCriterion": [
                  "sku"
                ]
              },
              "valueContexts": [
                {
                  "source": "internal",
                  "locale": "en-US"
                }
              ]
            }
          },
          "matchSequence": 2
        }
      ],
      "type": "config"
    }
  }
}
</code>
</pre>

## Response

The response shows the match configuration object is created successfully.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "f1b2c62c-3753-4140-8b18-1f8b536a2a78"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted matchConfig for update with Id sku_matchConfig. Check after some time",
          "messageCode": "I0013",
          "messageType": "success",
          "messageParams": [
            "matchConfig",
            "update",
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