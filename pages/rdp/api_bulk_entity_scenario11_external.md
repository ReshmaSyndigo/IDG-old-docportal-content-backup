---
title: Bulk Change Assignments using Multiple Queries
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario11.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to change the workflow assignments for the bulk entities using the Mutiple Queries.

## Scenario

Update the "SKU" entities that are in the "newSkusToSubmit" stage of the "newProductSetup" workflow having the "Polo" as the "brand" attribute value to take the "task" for the "reviewAssortment" activity in the "newProductSetup" workflow.

{% include snippets/header.html %}

## Request

To update the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "changeAssignment-multi-query".
* params -> operationType: Specify as "inboundService".
* params -> workflow: Specify the required workflow details to be updated.
* In the entities, provide the required search criteria for both entity govern & entity services.

{% include callout.html content="**Note**:<br/>
* In the following JSON, note the usage of **Client Attribute**, which you can use to track 'this' particular task.
" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  "clientAttributes": {
    "taskName": {
      "values": [
        {
          "source": "internal",
          "locale": "en-US",
          "value": "bulkprocessforworkflowtransition"
        }
      ]
    },
    "details": {
      "values": [
        {
          "source": "internal",
          "locale": "en-US",
          "value": "WFtransition Details"
        }
      ]
    }
  },
  "params": {
    <span style="background-color: #FFFF00">"taskType": "changeAssignment-multi-query",</span>
    "operationType": "inboundService",
    <span style="background-color: #FFFF00">"workflow": {</span>
      "workflowName": "NewSKUIntroduction",
      "activity": {
        "activityName": "skuSubmission",
        "newlyAssignedUserName": "dev1admin@riversand.com"
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
                    "attributesCriterion": [
                      {
                        "color": {
                          "exact": "blue"
                        }
                      }
                    ]
                  }
                }
              }
            },
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
                        "activities/activityName": {
                          "eq": "skuSubmission"
                        }
                      }
                    ]
                  }
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
    "requestId": "c17f5617-30d6-452b-9184-3bbcfb89ee5c",
    "taskId": "c17f5617-30d6-452b-9184-3bbcfb89ee5c"
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