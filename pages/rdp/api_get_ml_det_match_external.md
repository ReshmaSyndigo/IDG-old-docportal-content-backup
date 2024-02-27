---
title: Deterministic Match (vendoruniqueId)
sidebar: rdp_sidebar
permalink: api_get_ml_det_match.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmatch}}** to search and match vendor details. Refer to vendor details at [Search Entities based on Vendor Details](api_get_match_results_scenario3.html).

## Scenario  

To search if a "customer" entity with vendoruniqueid "RSDW01" or vendordisplayname "RiversandDataWorks" exists in the system.

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
              <span style="background-color: #FFFF00">"value": "RSDW01"</span>
            }
          ]
        },
        <span style="background-color: #FFFF00">"vendordisplayname": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": "RiversandDataWorks"</span>
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

Deterministic match return results, hence no ML based match is performed:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e499f9c2-b68b-4bcb-b69d-29492152529e"
  },
  "response": {
    "entities": [
      {
        "id": "ersbZFzaH7SynGL",
        "name": "RiversandDataWorks",
        "type": "customer"
      }
    ],
    "status": "success",
    "statusDetail": {
      "probabilisticMatch": false
    },
    "totalRecords": 1
  }
}
</code></pre>

In the UI, the following page is displayed during entity create:

{% picture det-entity-create.png alt="Deterministic Match" %}

See [Match Scenarios](/{{site.data.rdp_links_version.APPU}}/dda_match_usecases.html){:target="_blank"}, , for more information on the way match is displayed in the User Interface and the match review process in-case where multiple results are found.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.