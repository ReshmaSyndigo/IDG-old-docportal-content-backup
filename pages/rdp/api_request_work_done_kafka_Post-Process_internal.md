---
title: Get the Details of Work done by the Elasticsearch and Kafka in Post-Process App 
sidebar: rdp_sidebar
permalink: api_request_work_done_kafka_Post-Process.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

You can get the details of the work done by the **Elasticsearch** and **Kafka** in **Post-Process** app using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the work done by the **Elasticsearch** and **Kafka** in **Post-Process** app. 

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityPostProcessService" to get the details of the work done by the **Elasticsearch** and **Kafka** in **Post-Process** app.
* query -> fields -> attributes: Specify "_ALL" to get all attributes of the request.

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "requestobject"
        ],
        "attributesCriterion": [
          {
            "requestGroupId": {
              "exacts": "fc005fce-7150-470c-89cf-3c43683d5c04"
            }
          },
          {
            <span style="background-color: #FFFF00"> "serviceName": { </span>
              "exact": "entityPostProcessService"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 100
    },
    "sort": {
      "properties": [
        {
          "createdDate": "_DESC",
          "sortType": "_DATETIME"
        }
      ]
    }
  }
}
</code>
</pre>

## Response

The following response is received if the request is submitted successfully:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "676219f6-0676-4ef8-80fe-8067f31d9069",
    "maxRecords": 1,
    "taskId": "676219f6-0676-4ef8-80fe-8067f31d9069"
  },
  "response": {
    "requestObjects": [
      {
        "id": "420892d2-eb35-4587-95e4-eef6d49e1f57",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2021-11-04T00:05:34.169-0500",
          "modifiedDate": "2021-11-04T00:05:34.169-0500"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "ed5b00ee-f5ae-48fb-aa40-b4fc88ae0a62",
                  "value": "systemupdate",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "1e112ebd-fd8d-49c2-af93-b8ff55c73e43",
                  "value": "issue004",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "d21a0b7b-e945-4635-8a91-58c37756debd",
                  "value": "sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "id": "4b3768ad-97bd-4cb0-be27-d623b16ca8f6",
                  "value": "entityPostProcessService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "bbf5681a-2158-40fc-932a-8e4f8881ce6f",
                  "value": "420892d2-eb35-4587-95e4-eef6d49e1f57",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "id": "7531697b-12ae-425a-b9ab-928eb71cf430",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "8993a9b6-b87a-4a97-ace0-8a343ed52ebc",
                  "value": "445c6749-c4b5-49d3-b9e9-2412a93243b6",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "780b0197-7144-4c26-9f63-a630a87c0651",
                  "value": "e74c6829-8d95-4e28-8a56-1947c7120677",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "d162f6bc-0af0-4f24-93f2-ed9283649642",
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "335403df-3e65-493b-95cc-724d205515ab",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "3420ff6e-1a21-4a79-aa63-0d8e2a2d4758",
                  "value": 1636002334164,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "PostProcessRuleRun": {
              "values": [
                {
                  "id": "8c07e381-6851-4f5b-bd8e-5b86a66357ca",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "id": "38c7aa66-b28f-46f6-bb8b-b3777830c0f6",
                  "value": true,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impactedGovern": {
              "values": [
                {
                  "id": "61998d0b-2b1a-4e11-a17c-447956b27a05",
                  "value": true,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "queuedDate": {
              "values": [
                {
                  "id": "082ee2b0-fc8c-46b8-a9fc-790cb19e5803",
                  "value": "2021-11-04T10:35:34.129+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingStartDate": {
              "values": [
                {
                  "id": "3c7844b5-5cdd-4450-8336-925ec85338a9",
                  "value": "2021-11-04T10:35:34.138+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInQueue": {
              "values": [
                {
                  "id": "81c69812-b0bd-4baa-b134-2f9f61fd6472",
                  "value": "9",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingEndDate": {
              "values": [
                {
                  "id": "4f51879b-64b3-47c8-8546-99a49c29bdeb",
                  "value": "2021-11-04T10:35:34.163+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInProcessing": {
              "values": [
                {
                  "id": "eff2b7eb-73bc-4126-a3d3-6376d768b5a8",
                  "value": "25",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "callerServiceName": {
              "values": [
                {
                  "id": "2ca2603c-8eea-4ee2-94b3-c71e3872bc13",
                  "value": "entityGovernService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "onDemandTroubleshooting": {
              "values": [
                {
                  "id": "576b7961-87e3-4c1f-aa80-027f4d7d817d",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "manageARCCount": {
              "group": [
                {
                  "id": "e4c548c9-ec3b-4a09-88b5-40a5b7f00ebf",
                  "locale": "en-US",
                  "source": "internal",
                  "incCtx": {
                    "values": [
                      {
                        "id": "0776e3b9-c470-475f-a43b-2086e7b522c9",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incRel": {
                    "values": [
                      {
                        "id": "06202a21-fa8b-4e62-9085-a6cc04fb1444",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incRelAttr": {
                    "values": [
                      {
                        "id": "52899fa9-ecbf-4ec4-a44d-44cff77daa9c",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incAttr": {
                    "values": [
                      {
                        "id": "c8d6125c-f1f8-4f06-a30e-53ece51f3287",
                        "value": "35",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "governARCCount": {
              "group": [
                {
                  "id": "1eef185c-97a8-4703-b2ea-de57991694bd",
                  "locale": "en-US",
                  "source": "internal",
                  "incCtx": {
                    "values": [
                      {
                        "id": "b937d3e1-7650-47c0-8d28-a2e088b6918a",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incRel": {
                    "values": [
                      {
                        "id": "c4f4464d-ac94-4a39-86c7-854c54d7cea5",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "appMetrics": {
              "group": [
                {
                  "id": "a0bfd2fe-70fe-4c53-8ed0-f2b75533a731",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "1c0a9a45-6754-41b2-82b9-e5347253b754",
                        "value": "elasticSearch",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "b972c419-03cb-49aa-806e-dfad11601ae2",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "ecbecd3e-6a40-4884-bc6c-b0fb7e0182b6",
                        "value": "dataResolution",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "314fcbd8-2a4b-4c9d-b810-842e0936f779",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "03b44786-3e07-4f48-aaa2-962fded4b9e1",
                        "value": "ruleEvaluation",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "qualifiedBRs": {
                    "values": [
                      {
                        "id": "bcec67b6-cfba-4ab2-81e4-14dd5dec77e4",
                        "value": "5",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "f7397fb5-a9ee-40ad-bef2-32cc8c676da3",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "f91e6cac-1a1f-417b-bd21-b09bfded250a",
                        "value": "elasticSearch",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "getByIdCount": {
                    "values": [
                      {
                        "id": "92281d63-bd8d-4d40-91d9-aea87ac83078",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "24e41a2e-9cf2-4eb4-a859-d27b50bc49b0",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "5b693f8d-4ffd-4e1c-b365-65016d86d26a",
                        "value": "kafka",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "messagesQueued": {
                    "values": [
                      {
                        "id": "67d22496-18c7-49e7-a848-e8045f5cf57e",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            }
          },
          "jsonData": {}
        }
      }
    ],
    "status": "success",
    "totalRecords": 175436
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.