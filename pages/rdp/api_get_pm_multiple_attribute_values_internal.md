---
title: Match Entities based on Multiple Attribute Values
sidebar: rdp_sidebar
permalink: api_get_pm_multiple_attribute_values.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmatch}}** to to consider multiple attribute values, defined for an attribute in the same locale while performing a probabilistic match.

## Scenario 

Consider a scenario where you wish to search for entity(s) that has ‘nonmembership’ as one of the attribute values for ‘Alternate name’ attribute.

**Result**: The application considers all the multiple values while performing a probabilistic match and displays match results with high match scores. The entities that have same value in same locale are displayed in the match results. For example, the following matching results are displayed based on the scenario.

| Matched Entity | Attribute | Multiple Values | Locale | Match Score |
| ------------- | -------------- | ----------- | --------- | ------------ |
| Schneitersgolf001 | Alternate name | Golf club, nonmembership, golf, golf courses, golf retail | en-US | High |

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
    "type": "organization",
    "properties": {
      "createdService": "entityManageService",
      "createdBy": "system_user",
      "modifiedService": "entityManageService",
      "modifiedBy": "system_user",
      "createdDate": "2020-09-22T08:25:32.353-0500",
      "modifiedDate": "2020-09-22T08:25:32.353-0500"
    },
    "data": {
      "attributes": {
        "alternatename": {
          "values": [
            {
              "id": "c5eab546-be2e-49d0-96e1-aa56bad6c041",
              "value": "nonmembership",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "orgname": {
          "values": [
            {
              "id": "5c3c988f-d705-4c17-9436-93bf74a57bf0",
              "value": "Schneiters Riverside",
              "locale": "en-US",
              "source": "internal"
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

Returns the matching entity(s) that have high matching scores.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "d3aaeb3f-e0b9-416b-a3ee-7f03814e557c"
  },
  "response": {
    "entities": [
      {
        "id": "Schneitersgolf001",
        "type": "organization",
        "domain": "dataObject",
        "data": {
          "attributes": {
            "score": {
              "values": [
                {
                  "id": "033d1754-4c0e-427f-941d-e0768d53fa3a",
                  "value": "96.5741217136383",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "feature_alternatename": {
              "values": [
                {
                  "id": "f38795e3-9e9b-40d7-ad6f-09268eafba36",
                  "value": "high",
                  "locale": "en-US",
                  "source": "internal"
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
      "createThreshold": 0
    },
    "totalRecords": 1
  }
}
</code></pre>

{% include callout.html content="**Note:** The API only fetches the Ids that match the search criteria and the UI displays the matching entity(s) with its attribute values.
" type="primary" %}

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.