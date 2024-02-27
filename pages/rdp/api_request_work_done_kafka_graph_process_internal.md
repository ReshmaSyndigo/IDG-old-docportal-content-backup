---
title: Get the Details of Work done by the Elasticsearch and Kafka in Graph Process App
sidebar: rdp_sidebar
permalink: api_request_work_done_kafka_graph_process.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

You can get the details of the work done by the **Elasticsearch** and **Kafka** in **Graph Process** app using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the Work done by the **Elasticsearch** and **Kafka** in **Graph Process** app.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityGovernService" to get the details of the Work done by the **Elasticsearch** and **Kafka** in **Graph Process** app
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
              "exact": "entityGraphManageService"
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
        "id": "ec62224b-00b1-451f-b4e5-cde6084f0c45",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2021-11-08T22:34:58.917-0600",
          "modifiedDate": "2021-11-08T22:34:58.917-0600"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "c8b6f638-4963-44e9-bbac-9e67ee7bfcee",
                  "value": "create",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "f2c63ca8-ca91-4721-8014-045d75790747",
                  "value": "issue009",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "b957d330-9829-4f39-88cf-1b7843c5d82f",
                  "value": "sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "id": "45b66f5f-45f4-49b7-81dd-b6c56d4b497f",
                  "value": "entityGraphManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "3901a9dc-cef9-4e74-bb99-d28aa65502a9",
                  "value": "ec62224b-00b1-451f-b4e5-cde6084f0c45",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "id": "023560bf-21a2-4b86-9d9c-f869ebadb66b",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "62a31928-211b-4cdc-986e-cff86887a176",
                  "value": "ec62224b-00b1-451f-b4e5-cde6084f0c45",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "458ce6ab-92bc-4429-8b0b-cd81d424b6f2",
                  "value": "ec62224b-00b1-451f-b4e5-cde6084f0c45",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "d45138ad-843a-4581-a1cf-74d7316aed8c",
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "38f27326-8859-40f8-a50a-c81876deac70",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "dff483d6-9c6d-4345-8faa-197bfb583fbb",
                  "value": 1636432498908,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "id": "2aa4724a-3f6d-45b9-aa99-7f212b0f14b8",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "id": "0c3586c9-1fb5-4a6f-b177-402a83b9a0b4",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "queuedDate": {
              "values": [
                {
                  "id": "2512cc4f-2c90-4aa7-ae57-abf266bee361",
                  "value": "2021-11-09T10:04:58.858+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingStartDate": {
              "values": [
                {
                  "id": "2202d241-612c-43cd-a0cf-26e6773d3012",
                  "value": "2021-11-09T10:04:58.864+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInQueue": {
              "values": [
                {
                  "id": "78808d3b-94c0-4f94-8c05-24d01daf8c40",
                  "value": "6",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingEndDate": {
              "values": [
                {
                  "id": "f1debfae-727a-47d8-95f4-bdfed3622d7a",
                  "value": "2021-11-09T10:04:58.908+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInProcessing": {
              "values": [
                {
                  "id": "e1c93a5e-6626-41d1-bdce-90f554d2fe55",
                  "value": "44",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "callerServiceName": {
              "values": [
                {
                  "id": "d6d918a5-5d13-424b-a481-2442fcd9d8d9",
                  "value": "apiHostService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "onDemandTroubleshooting": {
              "values": [
                {
                  "id": "6dc7ae95-4c7e-4fff-ba49-9c7b3b70db5b",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "appMetrics": {
              "group": [
                {
                  "id": "f7397fb5-a9ee-40ad-bef2-32cc8c676da3",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "8c3e6cac-1a1f-417b-bd21-b09bfded380b",
                        "value": "elasticSearch",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "getByIdCount": {
                    "values": [
                      {
                        "id": "82691d63-bd8d-4d40-91d9-aea87ac83415",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "24e41a2e-9cf2-4eb4-a859-d27b50bc94d1",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "5b688f8d-4ffd-4e1c-b365-65016d86d62a",
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
                },
                {
                  "id": "edb84520-92c8-47b2-ad3e-07bf6e8a4186",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "6ddf013b-c1bf-403f-a668-c5a57deb2654",
                        "value": "graphProcessing",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impAttr": {
                    "values": [
                      {
                        "id": "77b9e932-7ab2-422d-b6a7-af1157e0a233",
                        "value": "11",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impCtx": {
                    "values": [
                      {
                        "id": "2d7b372d-b37a-4bc8-b92b-0dc5cbaa7822",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impRel": {
                    "values": [
                      {
                        "id": "fb4efe99-0b87-4ca0-96ba-5304226fa756",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "graphIdsSuccessful": {
                    "values": [
                      {
                        "id": "a33b4d41-c6e1-45ea-901c-b3b134a6f094",
                        "value": "sku_ischildof_product",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impEnt": {
                    "values": [
                      {
                        "id": "cbe8bd7f-b346-4f3b-b3f3-b0a49c3decd0",
                        "value": "1",
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