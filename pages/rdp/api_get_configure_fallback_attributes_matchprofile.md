---
title: Configure fallback attributes in match profile 
sidebar: rdp_sidebar
permalink: api_get_configure_fallback_attributes_matchprofile.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/matchservice/search to configure fallback attributes instead of match families in the matchProfile. You must define the attributes that you wish to configure in the “fallbackAttributes” property. Based on the configurations, if the incoming record does not have any attribute value, then the attributes that are defined in the property are considered for matching. 

{% include callout.html content="**Note:** In Match Standardization process, using the matchservice/search API (called via ExecuteMatchStandardization keyword), if the incoming record does not have values in all the source attributes, then the platform considers the attribute values defined in the **fallbackAttributes** property and populates **rssysmatch_sourceAttribute** (internal attribute).
" type="primary" %}

A sample sequence of the “sourceAttributes” and “fallbackAttributes” property is as follows:
“matchRule1”: {“sourceAttributes”:[“cleansedCity”, “cleansedZipcode”], “fallbackSourceAttributes”: [“localCity”, “localZipcode”]}

## Scenario

Consider you wish to configure fallback attributes for customer match profile.

{% include snippets/header.html %}

A sample configuration of the fallback attributes defined in the customer match profile is as follows: 

<pre>
<code>
{
  "configObject": {
    "id": "customer_matchProfile",
    "name": "customer_matchProfile",
    "type": "matchProfile",
    "data": {
      "jsonData": {
        "domain": "party",
        "subdomain": "b2c",
        "matchRules": [
          {
            "matchType": "probabilistic",
            "matchSequence": 1,
            "probabilisticSettings": {
              "matchThreshold": {
                "max_result": 5,
                "probability": 0
              },
              "thresholdRange": {
                "high": 90,
                "medium": 80,
                "low": 0
              },
              "applicableLocales": [
                "fr-FR",
                "en-US"
              ],
              "familyRules": [
                {
                  "name": "system_personname",
                  "standardization": [
                    {
                      "sequence": 1,
                      "corpusids": [
                        "c9f620d7-8572-4773-a9e6-17f57868a148",
                        "b59104f5-9357-4dc6-88e6-a13d1286ed4c"
                      ],
                      "function": "PersonNameCleanser"
                    }
                  ],
                  "sourceAttributes": [
                    "lastname",
                    "firstname"
                  ],
                  <span style="background-color: #FFFF00">"fallbackAttributes": [</span>
                    <span style="background-color: #FFFF00">"locallastname",</span>
                    <span style="background-color: #FFFF00">"localfirstname"</span>
                  ]
                }
              ]
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Sample Use Cases

### Use Case 1: Entity create flow

Consider that you have defined the fallback attributes in the customer match profile:
* During post-match standardization, the entity that has “fallbackattributes” with non-standardized value is overridden by the standardized value of the “rssysmatch_sourceattributes” (internal attribute).
* If entity has “sourceattributes”, then post-match standardization, the entity that has  “sourceattributes” with non-standardized value is overridden with standardized value of the “rssysmatch_sourceattributes” (internal attribute).
* If entity has both “fallbackattributes” and “sourceattributes” properties, then post-match standardization, the entity that has non-standardized values of “sourceattributes” and “fallbackattributes” is overridden by standardized value of “rssysmatch_sourceattributes” (internal attribute).

### Use Case 2: Entity search flow

**Scenario 1**: Consider that the fallback attributes are defined for the incoming entity.

**Result**: The fallback attribute name is changed to source attribute name and generates “rssysmatch_sourceattributes” (internal attribute), then the platform performs search against the “rssysmatch_sourceattributes”.
* Based on the fallback attributes defined in the “filterstrategy” property, the following are the possibilities:
* If “attributename” is based on the “sourceattributename” property, then the platform does not perform match as the “sourceattributename” is missing in the entity. 
* If “attributename” is based on the “fallbackattributename” and attribute value is hard coded or the passing value is based on the “fallbackattributename” property, then the platform performs match.

**Scenario 2**: Consider that you have defined attributes for the “sourceattributes” property.

**Result**: The “rssysmatch_sourceattributes” (internal attribute) is generated, and the platform does not search against the “rssysmatch_sourceattributes”
* Based on the fallback attributes defined in the “filterstrategy” property, the following are the possibilities:
* If “attributename” is based on the “fallbackattributename” property, then the platform does not perform  match as the “fallbackattributename” is missing in the entity.
* If “attributename” is based on the “sourceattributename” property and the attribute value is hard coded or the passing the value is based on the sourceattributename” property, then the platform performs match.

**Scenario 3**: Consider that you have defined attributes for the “sourceattributes” and “fallbackattributes” properties. 

**Result**: The “rssysmatch_sourceattributes” (internal attribute) is generated and the platform performs search against the “rssysmatch_sourceattributes”.
* Based on the fallback attributes defined in the “filterstrategy” property, the following are the possibilities:
* If “attributename” is based on the “fallbackattributename” property, then the platform performs match.
* If “attributename” is based on the “sourceattributename” property and the attribute value is hard coded or the passing value is based on the “sourceattributename” property, then the platform performs match.

## Troubleshooting

See [Troubleshooting](api_troubleshooting_tips.html) Tips, for common troubleshooting tips, if required.

