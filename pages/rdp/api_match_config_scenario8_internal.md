---
title: Filter entities based on specific attributes
sidebar: rdp_sidebar
permalink: api_match_config_scenario8.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The platform allows you to configure filter strategy for Match Profile and ML train config using the Restful API {TenantURL or ID}/api/configurationservice/create. The filter strategy allows you to filter the match results based on the attributes configured in the match profile. Upon configuring, the match service considers the configured operators while performing search and displays more relevant match results.

{% include callout.html content="**Notes:** 
* Supported filter strategy operators are “eq”, “exact“, “exacts“, and “Not” (optional).
* By default, all “Not” attributes will be ‘false’.
* You can configure more than one attribute in match profile.
* The “typesCriterion” and “valueContexts” are not part of the search query, but are inherited from match search query.
" type="primary" %}

## Limitation
•	Currently the platform does not support Relationship, property, sources and keyword criterions.

## Scenario

Consider the following “Customer” entity type ML train configuration where the “firstname” and “gender” attributes are defined in the match profile, and you are filtering entities based on “First name: John” and “Gender: Male”. 



A sample JSON to configure filter strategy is displayed below.

<pre>
<code>
{
  "id": "customer_mlTrainConfig",
  "name": "customer",
  "type": "mlTrainConfig",
  "data": {
    "jsonData": {
      "imputingFactor": {
        "system_personname_OLV": 0.5,
        "system_email_OLV": 0.882,
        "system_address_OLV": 0.105,
        "system_address_SOR": 0,
        "system_country_OLV": 1,
        "system_country_SOR": 1,
        "system_zipcode_OLV": 0.667,
        "system_zipcode_RAT": 0.73,
        "system_phone_OLV": 0.889,
        "system_phone_RAT": 0.94,
        "system_uniqueid_OLV": 0.889
      },
      "searchCriteria": [
        {
          "blockingStrategy": [
            {
              "strategy": [
                "system_personname",
                "system_email"
              ]
            }
          ],
          "filterStrategy": {
            "attributesCriterion": [
              {
                "firstname": {
                  "exact": "John",
                  "not": true
                }
              },
              {
                "gender": {
                  "eq": "male"
                }
              },
              {
                "city": {
                  "exacts": [
                    "New",
                    "Jersey"
                  ],
                  "not": true
                }
              }
            ]
          }
        }
      ],
      "layers": [
        11,
        8,
        10,
        2
      ],
      "weights": [
        0.3561372852200059,
        0.5391730041420902,
        -0.49039179167003516,
        0.7251610526126986,
        1.0782050079188505
      ]
    }
  }
}
</code>
</pre>

Upon configuring, when the platform performs search, the match results are displayed based on the “firstname” and “gender” attribute values.

{% include callout.html content="**Note:** The **filterstrategy** and **blockingstrategy** are not interdependent, and can work individually.
" type="primary" %}

## Troubleshooting

See [Troubleshooting](api_troubleshooting_tips.html) Tips, for common troubleshooting tips, if required.

