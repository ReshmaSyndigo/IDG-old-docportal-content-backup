---
title: Bulk Transitions using Multiple Queries
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario10.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to transition the bulk entities from one stage to another using Multiple Queries.

## Scenario

Update the "sku" entities that are in the "skuSubmission" stage of the "NewSKUIntroduction" workflow context having the "blue" value for the "color" attribute with "Submit" action.

{% include snippets/header.html %}

## Request

To update the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "transitionWorkflow-multi-query".
* params -> operationType: Specify as "inboundService".
* params -> workflow: Specify the required workflow details to be updated.
* In the entities, provide the required search criteria for both entity govern & entity services.

{% include callout.html content="**Note**:<br/>
* In the following JSON, note the usage of **Nested Attribute** in the search query carried out for  the Entity Govern Service.
" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"taskType": "transitionWorkflow-multi-query",</span>
    "operationType": "inboundService",
    <span style="background-color: #FFFF00">"workflow": {</span>
      "workflowName": "NewSKUIntroduction",
      "activity": {
        "activityName": "skuSubmission",
        "action": "Submit",
        "comment": "Submit action"
      }
    }
  },
  "entities": [
    {
      <span style="background-color: #FFFF00">"id": "combinedGet",</span>
      <span style="background-color: #FFFF00">"name": "combinedGet",</span>
      <span style="background-color: #FFFF00">"type": "config",</span>
      "data": {
        "jsonData": {
          <span style="background-color: #FFFF00">"searchQueries": [</span>
            {
              "serviceName": "entitygovernservice",
              "action": "get",
              "searchSequence": 1,
              "searchQuery": {
                "query": {
                  "contexts": [
                    {
                      "workflow": "NewSKUIntroduction"
                    }
                  ],
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ],
                    "attributesCriterion": [
                      {
                        "activities": {
                          "attributes": [
                            {
                              "activityName": {
                                "eq": "skuSubmission"
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              }
            },
            {
              "serviceName": "entityservice",
              "action": "get",
              "searchSequence": 2,
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
                      "sku"
                    ],
                    <span style="background-color: #FFFF00">"attributesCriterion": [</span>
                      {
                        "color": {
                          "value": "blue"
                        }
                      }
                    ]
                  }
                },
                "options": {
                  "maxRecords": 500
                }
              }
            }
          ]
        }
      }
    }
  ]
}
</code>
</pre> 

## Response

If the bulk entities are updated successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5f562d0e-9d05-4bc0-b549-6ff1a44f9677",
    "taskId": "5f562d0e-9d05-4bc0-b549-6ff1a44f9677"
  },
  "response": {
    "status": "success",
    "totalRecords": 0
  }
}
</code></pre>

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.