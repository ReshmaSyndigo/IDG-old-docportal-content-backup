---
title: ML based Match (Match Score > Merge Threshold)
sidebar: rdp_sidebar
permalink: api_get_ml_merge_match.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmatch}}** to search and match vendor details. Refer to vendor details at [Search Entities based on Vendor Details](api_get_match_results_scenario3.html).

## Scenario

To search if a "customer" entity with vendoruniqueid "RSDW02" or vendordisplayname "RiversandData009" exists in the system.

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
              "value": "RSDW02"
            }
          ]
        },
        <span style="background-color: #FFFF00">"vendordisplayname": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "RiversandData009"</span>
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

As deterministic match returns no results, ML based match is performed. Though a list of match entities are returned in the API response, a message is displayed in the UI, as the Match Score of the entity with vendoruniqueid - RSDW09 and vendordisplayname - RiversandData009 is greater than Merge Threshold:

Note that when a user can submit or merge an entity is according to permission defined in authorization mode. {% if site.build == "internal" %} See [Configure Authorization for Match](/{{site.data.rdp_links_version.APP}}/rdp_feature_match_auth.html), for more information.{% endif %}

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "83cbb3f4-6f91-4fd1-b2a7-61e1f2f9e571"
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
                  "id": "9e850186-84b8-4519-ad62-f1f0855382d8",
                  "value": "99.979"
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
                  "id": "00a954c3-58dd-42b0-b172-3b73154c5a83",
                  "value": "98.684"
                }
              ]
            }
          }
        }
      },
      {
        "id": "ersCBj2z3KgaObw",
        "type": "customer",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "da555aed-6b44-4668-a6f7-cd910955bec3",
                  "value": "98.684"
                }
              ]
            }
          }
        }
      },
      {
        "id": "ersm3l6b5QFBw5O",
        "type": "customer",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ed2a21e5-9dff-4afd-8815-3ac59df0fb49",
                  "value": "98.684"
                }
              ]
            }
          }
        }
      },
      {
        "id": "ersb8izfaj85DSP",
        "type": "customer",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "1604dc9e-c62e-493b-9c06-5a8f82a866b9",
                  "value": "98.684"
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

In the UI, the following message is displayed:

{% picture ml-entity-merge-greater.png alt="Match Score < Merge Threshold" %}

See [Match Scenarios](/{{site.data.rdp_links_version.APPU}}/dda_match_usecases.html){:target="_blank"}, , for more information on the way match is displayed in the User Interface and the match review process in-case where multiple results are found.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.