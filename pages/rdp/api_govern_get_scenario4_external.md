---
title: Get Workflow Activity Status
sidebar: rdp_sidebar
permalink: api_govern_get_scenario4.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getgoverndata}}** to get status of a workflow activity, using a scenario.

## Scenario

To get the status of "skuSubmission" activity in "newSKUIntroduction" workflow status for a "sku" entity "skuentity1".

{% include snippets/header.html %}

## Request

To get the above entity govern data, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request send the following details:

* query -> contexts: Specify the "workflow" as "newSKUIntroduction".
* query -> Id: Specify the entity identifier as "skuentity1".
* query -> filters -> typesCriterion: Specify "sku" entity type.
* query -> filters -> attributesCriterion -> activities/activityName: Specify "skuSubmission" activity name.
* fields -> attributes: Specify as "_ALL". 

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "skuentity1",</span>
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "workflow": "newSKUIntroduction"
        }
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "activities/activityName": {
              "eq": "skuSubmission"
            }
          }
        ],
        "excludeNonContextual": true
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the workflow status of the activity "skuSubmission" in newSKUIntroduction" workflow for a "sku" entity "skuentity1". 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "bd73bc78-788a-405b-b46b-de82914dc5cd",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "skuentity1",
        "type": "sku",
        "data": {
          "contexts": [
            {
              "context": {
                "self": "self",
                "workflow": "NewSKUIntroduction"
              },
              "attributes": {
                "workflowInstanceId": {
                  "values": [
                    {
                      "id": "b81777fd-d8dc-4ecb-96e8-f03c6976b986",
                      "value": "5f4048e4-dc50-4ba3-9295-a86e77c45575"
                    }
                  ]
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "bab6dbaa-1ba3-4c21-8aa9-037bdac6a851",
                      "value": "2018-07-12T14:54:41.072+0000"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "id": "1b439689-bb71-4d14-a975-db082b6d8594",
                      "value": "Executing"
                    }
                  ]
                },
                "activities": {
                  "group": [
                    {
                      "workflowInstanceId": {
                        "values": [
                          {
                            "id": "cb65e4e4-5149-44ae-8014-f02a273727e7",
                            "value": "5f4048e4-dc50-4ba3-9295-a86e77c45575"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "877f5236-c97e-4436-9773-307e04e370c9",
                            "value": "ef11d50d-7cc1-4b38-a5ff-38139d7145d0"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "cb63d38f-1317-4d6e-93f4-285b13fb15d7",
                            "value": "skuSubmission"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "f5138924-fd56-4055-bc89-a85bb9acc98f",
                            "value": "dev1vendor@riversand.com"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "7da677c5-768f-4b98-92d6-528611b8d045",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "1164f573-9dbf-4e91-8ccf-b809cd2eb59e",
                            "value": "2018-07-12T14:54:42.161+0000"
                          }
                        ]
                      },
                      "id": "b481a55f-ab6a-4e82-8b2c-ddef16b91d14"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.