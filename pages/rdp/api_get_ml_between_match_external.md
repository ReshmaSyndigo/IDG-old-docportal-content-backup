---
title: ML based Match (Create Threshold < Match Score < Merge Threshold)
sidebar: rdp_sidebar
permalink: api_get_ml_between_match.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmatch}}** to search and match vendor details. Refer to vendor details at [Search Entities based on Vendor Details](api_get_match_results_scenario3.html).

## Scenario

To search if a "customer" entity with vendoruniqueid "RSDW02" or vendordisplayname "Riverworks" exists in the system.

{% include snippets/header.html %}

## Request

To search the above entity, use the REST API {{site.data.rdp_glossary.getmatch}}. In the request send the following details:

* entity : Specify the entity id and entity type.
* attributes : Specify the values of vendoruniqueid and vendordisplayname you wish to search. 

<pre>
<code>
POST **{{site.data.rdp_glossary.getmatch}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"type": "customer",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"vendoruniqueid": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "RSDW02"</span>
            }
          ]
        },
        <span style="background-color: #FFFF00">"vendordisplayname": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "Riverworks"</span>
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response

As deterministic match returns no results, ML based match is performed, a list of match entities where Create Threshold (75) < Match Score < Merge Threshold (95):

| vendoruniqueid |vendordisplayname| Match Score |
|-----------------|-----------------| ------------|
| RSDW09 | RiversandData009 | 92.0363 |
| RSDW152 | RiversandDataWorks152 | 90.3064 |
| RSDW071 | RiversandDataWorks071 | 90.3064 |
| RSDW093 |RiversandDataWorks093 | 90.3064 |
| RSDW077 |RiversandDataWorks077 |	90.3064 |

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "00d4a998-142a-4afa-a4e6-4279d5b70ddc"
  },
  "response": {
    "entities": [
      {
        "id": "ersQgx5Bi0HMGjO",
        "type": "customer",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f79bfc52-6862-44ef-bfda-12ecb3f75ff5",
                  "value": "92.0363"
                }
              ]
            }
          }
        }
      },
      {
        "id": "jm1p1FnfSgWxfL9jk1M60A",
        "type": "customer",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b157bbb4-c556-46f1-a532-dffa33dcdf9c",
                  "value": "90.3064"
                }
              ]
            }
          }
        }
      },
      {
        "id": "ersqUwBSM1wqC1P",
        "type": "customer",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4ec0850d-919a-411e-9b31-2c672d095525",
                  "value": "90.3064"
                }
              ]
            }
          }
        }
      },
      {
        "id": "ersbwY81Ll31C8v",
        "type": "customer",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b468225f-26e9-434a-b204-c1c7a71c2302",
                  "value": "90.3064"
                }
              ]
            }
          }
        }
      },
      {
        "id": "ersmQyVZqb5fOx7",
        "type": "customer",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "44a9cb9b-2e47-4366-b336-8124b5497e11",
                  "value": "90.3064"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "statusDetail": {
      "probabilisticMatch": true,
      "mergeThreshold": 95,
      "createThreshold": 75
    },
    "totalRecords": 5
  }
}
</code></pre>

In the UI, you can compare and merge entities:

{% picture ml-entity-create-between.png alt="Create Threshold < Match Score < Merge Threshold" %}

See [Match Scenarios](/{{site.data.rdp_links_version.APPU}}/dda_match_usecases.html){:target="_blank"}, for more information on the way match is displayed in the User Interface and the match review process in-case where multiple results are found.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.