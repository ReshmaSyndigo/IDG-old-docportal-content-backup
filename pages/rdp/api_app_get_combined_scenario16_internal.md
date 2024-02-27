---
title: Get Workflow Entities using 10k Keywords
sidebar: rdp_sidebar
permalink: api_app_get_combined_scenario16.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

In the application, you can search for multiple entities (which participates in various workflows) using **Ten Thousand keywords or attributes** in the search query. For more information, see [Search in Work Items](/{{site.data.rdp_links_version.APPU}}/srch_work_item.html).

Following are few limitations that must be followed while sending the request:

| Limitations | Example |
|-------------|---------|
| No **Wildcard** characters are allowed. | N*vy Blue | 
| No quoted phrases are allowed | "Navy Blue" |
| No special characters such as are allowed. | eq, contains |
| Only 'OR' operator is supported. | "_OR" |
| No query syntax are allowed. | this / that |
| Use space separated string between keywords. | "Sh Sh1 Sh2 Sh3" |
| Only attributes, relationships, properties, and keyword search are supported. | - |

## Scenario

To get entities using 10k keywords or attributes.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {TenantURL or ID}/api/entityappservice/get. In the request send the following details:

* params -> isCombinedQuerySearch: Set the criterion to "true".
* entity: Specify the required values for id, name, and type.
* query -> contexts -> workflow: Specify the workflow name.
* searchQuery -> query -> filters -> typesCriterion: specify the entity type as 'sku'.
* keywordsCriterion -> operator: Specify '_OR' operator.

<br/>

POST **{TenantURL or ID}/api/entityappservice/getcombined**
Headers: Content-Type: application/json
Body:
<pre>
<code>
{
  "params": {
    "isCombinedQuerySearch": true
  },
  "entity": {
    "id": "combinedGet",
    "name": "combinedGet",
    "type": "config",
    "data": {
      "jsonData": {
        "searchQueries": [
          {
            "serviceName": "entitygovernservice",
            "action": "get",
            "searchSequence": 1,
            "searchQuery": {
              "query": {
                "contexts": [
                  {
                    "self": "self"
                  },
                  {
                    "self": "self",
                    "workflow": "NewSKUIntroduction"
                  }
                ],
                "filters": {
                  "attributesCriterion": [
                    {
                      "activities": {
                        "attributes": [
                          {
                            "status": {
                              "exacts": [
                                "Executing",
                                "AssignmentChange"
                              ],
                              "operator": "_OR"
                            }
                          },
                          {
                            "activityName": {
                              "eq": "skuSubmission"
                            }
                          }
                        ],
                        "contexts": [
                          {
                            "self": "self",
                            "workflow": "NewSKUIntroduction"
                          }
                        ],
                        "nonContextual": false
                      }
                    },
                    {
                      "status": {
                        "eq": "Executing",
                        "contexts": [
                          {
                            "self": "self",
                            "workflow": "NewSKUIntroduction"
                          }
                        ],
                        "nonContextual": false
                      }
                    }
                  ],
                  "typesCriterion": [
                    "sku"
                  ],
                  "nonContextual": false
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
                "filters": {
                  "typesCriterion": [
                    "sku"
                  ],
                  "keywordsCriterion": {
                    "keywords": "Black1 Black2 Black3.... Black10000",
                    "operator": "_OR"
                  }
                },
                "valueContexts": [
                  {
                    "locale": "en-US"
                  }
                ]
              },
              "options": {
                "maxRecords": 200
              }
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Response

Returns all the 'SKU' entities that match **Keywords** or **Attributes** provided in the query.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "44072d6f-ba1b-4882-9efe-7304e4a37791",
    "taskId": "44072d6f-ba1b-4882-9efe-7304e4a37791"
  },
  "response": {
    "entities": [
      {
        "id": "ersJO264LFNkGwB",
        "name": "924659",
        "type": "sku"
      },
      {
        "id": "ersIkAD9Ff5OkW8",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "skucontains003",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "rflHV9u_SWqFn8-rBqu6IA",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "ic0s_DwQSu6l5Vtp3D5ung",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "D_AW2QQUQLadKUdVw3gxZQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "hgjYS9ysQES8eVmcmT4fHQ",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "oPjq5xQ9Syy87KD8KX_1Xg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "pOt-HontT6y8mk3O1wevrg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "yIDYA4tgQ9qItIm657qlZg",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "FlsOh5WHSjucyjwP--I00Q",
        "name": "_EMPTY",
        "type": "sku"
      },
      {
        "id": "lyvyjrZDTPqFAJEL78gjMA",
        "name": "_EMPTY",
        "type": "sku"
      }
    ],
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0034",
          "message": "Total Hits in First Query: '162543'",
          "messageType": "info",
          "messageParams": [
            "162543"
          ]
        },
        {
          "messageCode": "I0035",
          "message": "Total number of passes: '15'",
          "messageType": "info",
          "messageParams": [
            "15"
          ]
        }
      ]
    },
    "totalRecords": 34
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.