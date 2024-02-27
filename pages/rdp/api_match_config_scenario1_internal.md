---
title: Create Match Configuration to Match Vendor Details (Deterministic and ML)
sidebar: rdp_sidebar
permalink: api_match_config_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to create a match configuration to match the Vendor details. 

## Scenario

To create a deterministic match configuration to match vendoruniqueid attribute and ML based match for attributes - vendordisplayname, given_name, shippingaddress, date_of_inception, and phonenumber.

## Request (Match Config)

In the request below, you are creating a deterministic match configuration and probabilistic thresholds to decide whether to create or merge entities:
See [Match Configuration Object Structure](api_match_object_structure.html#matchrules-ml) for information on match thresholds (mergeThreshold and createThreshold).

Note that to perform a ML based match for attributes - vendordisplayname, given_name, shippingaddress, date_of_inception, and phonenumber, you must also create a Machine-Learning (ML) match configuration. See [Request (ML Match Config)](#request-ml-match-config).

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "customer_matchConfig",</span>
      <span style="background-color: #FFFF00">"name": "customer",</span>
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
                    "typesCriterion": [
                      "customer"
                    ],
                    "attributesCriterion": [
                      {
                        <span style="background-color: #FFFF00">"vendoruniqueid": {</span>
                          "exact": "&#123;&#123;vendoruniqueid&#125;&#125;",
                          "type": "_STRING"
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "matchType": "probabilistic",
              "matchThresholds": {
                "mergeThreshold": 95,
                "createThreshold": 75
              }
            }
          ]
        }
      }
    }
  ]
}
</code>
</pre>

## Response (Match Config)

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
          "message": "Submitted matchConfig for create with Id customer_matchConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "matchConfig",
            "create",
            "customer_matchConfig"
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

## Request (ML Match Config)

In the request below, you are creating a ML based match for attributes - vendordisplayname, given_name, shippingaddress, date_of_inception, and phonenumber:

<pre><code>
{% raw %}
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObjects": [
    {
      "id": "customer_mlMatchConfig",
      "name": "customer",
      "type": "mlMatchConfig",
      "data": {
        "jsonData": {
          "domain": "party",
          "matchThreshold": {
            "max_result": 5,
            "probability": 0.7
          },
          "locales": [
            "en-US",
            "de-DE"
          ],
          "attributeMapping": {
            "system_entityid": [
              "id"
            ],
            "system_businessname": [
              "vendordisplayname"
            ],
            "system_alternatename": [
              "vendoruniqueid"
            ],
            "system_address": [
              "address/streetaddress",
              "address/city",
              "address/country",
              "address/zipcode"
            ],
            "system_dateofinception": [],
            "system_phonenumber": [
              "phonenumber"
            ],
            "system_universalbusinessnumber": [
              "vendoruniqueid"
            ]
          }
        }
      }
    }
  ]
}
{% endraw %}
</code></pre>


## Response (ML Match Config)

The response shows the match configuration object is created successfully:

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
          "message": "Submitted mlMatchConfig for create with Id customer_mlMatchConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "mlMatchConfig",
            "create",
            "customer_mlMatchConfig"
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