---
title: ML based Match (Match Score < Create Threshold)
sidebar: rdp_sidebar
permalink: api_get_ml_create_match.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmatch}}** to search and match vendor details. Refer to vendor details at [Search Entities based on Vendor Details](api_get_match_results_scenario3.html).

## Scenario 

To search if a "customer" entity with vendoruniqueid "RSDW02" or vendordisplayname "SandWorks" exists in the system.

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
    "type": "customer",
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
              <span style="background-color: #FFFF00">"value": "SandWorks"</span>
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

As deterministic match returns no results, ML based match is performed. No entities are matched (match score < create threshold). In the UI, this entity gets created. See [Match Scenarios](/{{site.data.rdp_links_version.APPU}}/dda_match_usecases.html){:target="_blank"}.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "efa40c74-11ee-4f3b-9deb-fb342b39805d"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "probabilisticMatch": true,
      "mergeThreshold": 95,
      "createThreshold": 75,
      "message": "No objects found"
    },
    "totalRecords": 0
  }
}
</code></pre>

In the UI, this entity gets created:

{% picture ml-entity-create-less.png alt=" Match Score < Create Threshold" %}

See [Match Scenarios](/{{site.data.rdp_links_version.APPU}}/dda_match_usecases.html){:target="_blank"}, , for more information on the way match is displayed in the User Interface and the match review process in-case where multiple results are found.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.