---
title: Create Match Configuration
sidebar: rdp_sidebar
permalink: api_create_config_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

A match configuration is created per entity type and defines how match progresses. This allows you to define the attributes that have to be matched to find out duplicates in the system. The match configuration file contains two sections:

* **Deterministic**: This is an exact match, where you can use predefined operators to perform match. During match, it uses the details specified in the **Deterministic** section of match configuration. Typically, used for the unique identifiers such as Vendor Identifier, Product Identifier. 

* **Machine-Learning (ML)**: This is a near perfect match performed when Deterministic match finds no match results. It contains the probability threshold to indicate when an entity must be created and when it must be merged. Typically, used for the attributes such as Vendor Name, Vendor Address. Internally, Riversand Platform uses **{{site.data.rdp_glossary.mlmatchurl}}** to perform ML based match based on the [Machine-Learning (ML) Match Configuration Object Structure](api_match_object_structure_ml.html) details. 

To create a match configuration you must use the API **{{site.data.rdp_glossary.createconfig}}** in the [configuration service](api_configuration_service.html). This section covers the scenarios to explain how to create a JSON structure for the following match configurations:

* [Create Match Configuration to Match Vendor Details (Deterministic and ML)](api_match_config_scenario1.html)
* [Create Deterministic Match Configuration to Match mdmid](api_match_config_scenario3.html)
* [Create Deterministic Match Configuration to Match mdmid or mdmname](api_match_config_scenario2.html)
* [Create Deterministic Match Configuration to Match mdmid and mdmname](api_match_config_scenario4.html)

## Example

The following example demonstrates a sample request and response to create a match configuration to match vendor details:

**Request**:

<pre><code>
{% raw %}
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObjects": [
    {
      "id": "customer_matchConfig",
      "name": "customer",
      "type": "matchConfig",
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
              "matchType": "deterministic",
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
                        "vendoruniqueid": {
                          "exact": "{{vendoruniqueid}}",
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
{% endraw %}
</code></pre>

**Response**:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "01d8231c-32ae-4536-b68e-3a9b65494022"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Entity has been submitted for create with entity Id : customer_matchConfig. Please check back after 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html)
* You can also verify match configuration by searching the entities using [match search service](api_match_service.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.