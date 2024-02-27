---
title: Get Workflow Status of an Entity
sidebar: rdp_sidebar
permalink: api_govern_get_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getgoverndata}}** to get workflow status of an entity, using a scenario.

## Scenario

To get the workflow activity and its status for "sku" entity "skuentity1" in "newSKUIntroduction" workflow. 

{% include snippets/header.html %}

## Request

To get the above entity govern data, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request send the following details:

* query -> contexts: Specify the "workflow" as "newSKUIntroduction".
* query -> Id: Specify the entity identifier as "skuentity1".
* query -> filters -> typesCriterion: Specify "sku" entity type.
* fields -> attributes: Specify attributes as "activities".

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"workflow": "newSKUIntroduction"</span>
        }
      ],
      <span style="background-color: #FFFF00">"id": "skuentity1",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        <span style="background-color: #FFFF00">"activities"</span>
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the workflow activity and its status for "sku" entity "j03V6giLQv-j7osTKR4bKw" in "newSKUIntroduction" workflow. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "7795c57c-a1cf-402b-9012-5b2c323dd3db",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "skuentity1",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-07-12T09:36:02.553-0500"
        },
        "data": {
          "attributes": {},
          "contexts": [
            {
              "context": {
                "self": "self",
                "workflow": "NewSKUIntroduction"
              },
              "attributes": {
                "activities": {
                  "group": [
                    {
                      "workflowInstanceId": {
                        "values": [
                          {
                            "id": "08d02246-372c-4d9d-b75a-df88a96dff1e",
                            "value": "62f9162f-1361-46b4-b290-8cd87c902b8a"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "cd473303-12df-4dca-9458-3ce401cd3f8d",
                            "value": "ef11d50d-7cc1-4b38-a5ff-38139d7145d0"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "63b43566-2aa5-4e24-bf66-f35fed641618",
                            "value": "skuSubmission"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "4d80c4bf-7b7b-47ee-80b2-d17bc2d54b4a",
                            "value": "dev1vendor@riversand.com"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "2c4af174-b9e2-4ed6-b778-dc1cb116f237",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "069b58dc-937c-429e-ad99-ed14e5cf323d",
                            "value": "2018-07-12T14:36:17.911+0000"
                          }
                        ]
                      },
                      "id": "4cc72213-7740-4bfe-863e-3c4e5abbed4e"
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