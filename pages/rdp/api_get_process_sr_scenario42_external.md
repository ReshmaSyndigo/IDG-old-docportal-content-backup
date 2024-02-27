---
title: Process Source Record and Golden Record
sidebar: rdp_sidebar
permalink: api_get_process_sr_scenario42.html
folder: rdp
type: HowTo
---

{% include snippets/disclaimer_internal.md %} 

This topic describes how to use the RESTful API **{TenantURL or ID}/apimatchservice/processsr** to process any of the following:
* matching Source Record (SR) to create a new Golden Record (GR) 
* merge the SR into existing matching GR

<br>

The following are the sample scenarios to process SR and GR:

* **Scenario 1**: Consider that there are no matching GR or matching GR has < 60% match score.

  **Result**: The Riversand Platform creates a new GR with the incoming SR and creates a “issourceof“ relationship with the GR ID in the SR entity.

* **Scenario 2**: Consider that the application updates the SR entity as the matching GR that has > 90% match score.

  **Result**: The SR creates a “issourceof“ of relationship with the GR and merges the incoming entity. For more information, see [Merge Source Entity with Golden Record based on Survivorship Rules](api_get_merge_preview_v2_scenario40.html).

* **Scenario 3**: Consider that the Matching GR(s) found has > 60% match score < 90%. 

  **Result**: The SR creates the “potentialMatches“ relationship with the matching GR(s). In this scenario, you can Manually Save, Link & Auto Merge, or Link & Manual Merge.

<br>
#### Assumptions

The following are the assumptions:
* One SR can be related to one GR only
* One GR can have multiple SRs as source
* One SR can have multiple matches (GRs)

## Scenario

Consider the 'organization' entity type as GR and 'draftorganization' entity type as SR. The configured SR attribute values are processed against the attribute values of the GR.

{% include snippets/header.html %}

## Request

To process SR, you can use the RESTful API **{TenantURL or ID}/api/matchservice/processsr**. In the request, send the following details:

<pre>
<code>
{
  "entity": {
    "id": "377mQP4YTdSK9bsAOPM2gg",
    "type": "organization",
    "data": {
      "attributes": {
        "orgname": {
          "values": [
            {
              "id": "82a8b776-8655-40b4-9722-e481ac182386",
              "value": "Simon_org",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "alternatename": {
          "values": [
            {
              "id": "97d2b548-a5ca-4615-966d-ecc99ead7163",
              "value": "Simon Baker",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        }
      }
    }
  }
}
</code></pre>

## Response

If the get request is successful, the following response is received.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "6ce08765-f02e-4320-9337-91619cd412a9",
    "taskId": "6ce08765-f02e-4320-9337-91619cd412a9"
  },
  "response": {
    "status": "success",
    "totalRecords": 0
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.