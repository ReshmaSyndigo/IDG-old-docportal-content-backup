---
title: Get the Details of Work done by the Elasticsearch and Kafka in Govern App
sidebar: rdp_sidebar
permalink: api_request_work_done_kafka_govern.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

You can get the details of the work done by the **Elasticsearch** and **Kafka** in **Govern** app using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the work done by the **Elasticsearch** and **Kafka** in **Govern** app.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityGovernService" to get the details of the work done by the **Elasticsearch** and **Kafka** in **Govern** app.
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
              "exact": "entityGovernService"
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
    "requestId": "c42558a8-eebf-402a-88fc-3d9d3859317a",
    "maxRecords": 1,
    "taskId": "c42558a8-eebf-402a-88fc-3d9d3859317a"
  },
  "response": {
    "requestObjects": [
      {
        "id": "713c589e-aad0-45c1-973e-6abe6a8fdafe",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2021-11-09T02:14:26.459-0600",
          "modifiedDate": "2021-11-09T02:14:26.459-0600"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "262ed515-8ee4-4245-bf7d-0dec3ce13c6c",
                  "value": "update",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "2e4a2a8f-9322-4900-87e4-2da534e9a991",
                  "value": "issue009",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "50a9c880-3479-44c8-a0dd-a6c819254f02",
                  "value": "sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "id": "6078d969-a77e-4aa2-b453-40351b9da982",
                  "value": "entityGovernService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "b0a7a9a1-db98-4be2-bd2a-4e805c86c4e1",
                  "value": "713c589e-aad0-45c1-973e-6abe6a8fdafe",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "id": "83c64811-74a5-4ede-af89-2dc83411f44b",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "48f0edc4-ce61-4e22-a7e0-cf504e9f4f88",
                  "value": "a071f6bf-0140-40ae-937d-5e0cfead1c1d",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "aa943455-94c8-4fa7-a7dc-f6c37b07d9e0",
                  "value": "a071f6bf-0140-40ae-937d-5e0cfead1c1d",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "6714df01-ecac-4222-bd12-860e2808df91",
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "33d5fa35-917f-43b3-8637-f48c24884ef3",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "ee9a91ff-c24b-422f-aed6-b480df8a2d84",
                  "value": 1636445666452,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "id": "e5cb38ea-27d8-4d58-9653-f5cf38a09d72",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "id": "63c158c9-d111-4274-98a7-0868e82b328a",
                  "value": true,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impactedGovern": {
              "values": [
                {
                  "id": "3a1ddd58-fbd6-4657-a7ab-2a2cebcc05f2",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "queuedDate": {
              "values": [
                {
                  "id": "79fc895e-4c0a-4624-ae08-395083cbe9f3",
                  "value": "2021-11-09T10:57:18.557+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingStartDate": {
              "values": [
                {
                  "id": "48aba500-643d-449b-b5f7-b19f1fba8129",
                  "value": "2021-11-09T13:44:21.024+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInQueue": {
              "values": [
                {
                  "id": "e88a7823-41dd-4021-947b-89d7c047b13d",
                  "value": "10022467",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingEndDate": {
              "values": [
                {
                  "id": "b291b1c6-1f13-4b95-b366-5fd2c01b67ac",
                  "value": "2021-11-09T13:44:26.449+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInProcessing": {
              "values": [
                {
                  "id": "327a0887-2aa5-4f5d-8173-222df3fb3305",
                  "value": "5425",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "callerServiceName": {
              "values": [
                {
                  "id": "07b42cec-c6c8-4fb1-8bce-9347bf3ac980",
                  "value": "entityManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "onDemandTroubleshooting": {
              "values": [
                {
                  "id": "cf0f870f-8329-4179-997b-98b65137c23f",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ARCCount": {
              "group": [
                {
                  "id": "a7c6833b-dd5f-4e45-ab2d-8b401f1646fe",
                  "locale": "en-US",
                  "source": "internal",
                  "incCtx": {
                    "values": [
                      {
                        "id": "8cc2d186-f0cb-47d8-9212-80eb15cee599",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incRel": {
                    "values": [
                      {
                        "id": "1b4163cd-3bda-47a2-bd10-1d18656667b0",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incRelAttr": {
                    "values": [
                      {
                        "id": "22be853f-74a0-4e3f-97e7-251d21ddeb2a",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incAttr": {
                    "values": [
                      {
                        "id": "4caec70b-f14f-43f7-8268-6ef58649956a",
                        "value": "35",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impCtx": {
                    "values": [
                      {
                        "id": "869b3c3c-a488-4780-b258-19e3da4ce065",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impRel": {
                    "values": [
                      {
                        "id": "0b97c34c-be92-4257-9a69-899558b0412b",
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
                  "id": "20e4f85a-da62-435c-95e9-690d7515a0d2",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "9de78113-1a08-40dc-bf18-c106d760cde5",
                        "value": "invalidDataValidation",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procAttr": {
                    "values": [
                      {
                        "id": "5b7a505f-dcef-4c4a-a95d-ebcc81e224be",
                        "value": "35",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "timeSpent": {
                    "values": [
                      {
                        "id": "13b57734-41f4-4a2d-9754-dca67aa90df1",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procRelAttr": {
                    "values": [
                      {
                        "id": "62b39cb0-1bf5-4ab6-883d-4cf099b31911",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procCtx": {
                    "values": [
                      {
                        "id": "e6bcc65d-2499-45d9-af34-182c9c7c04d5",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "dc63ee94-dfc5-4a82-921e-0d3877ab0456",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "5c090fb9-2c3c-4dda-b20e-53dbfafdd362",
                        "value": "ruleEvaluation",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "qualifiedBRs": {
                    "values": [
                      {
                        "id": "e07f37ce-6ff6-46fc-a76a-b3dab637cc70",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "timeSpent": {
                    "values": [
                      {
                        "id": "5d1a5c88-1dec-40fc-9dc6-d85398bbf7e8",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "rulesRun": {
                    "values": [
                      {
                        "id": "d8a2c01f-fda6-4a5f-878b-14f5ed9a396f",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "dfadc7fc-7f3a-433e-ab7e-2581cf6b14b5",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "205bbb32-a624-47a4-a40f-b495fef8147f",
                        "value": "modelRuleValidation",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "timeSpent": {
                    "values": [
                      {
                        "id": "262489fc-de54-4307-bcc4-5c954356594d",
                        "value": "6",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "reqAttr": {
                    "values": [
                      {
                        "id": "4958e165-f8a8-47b1-97b1-64bf25d8e7de",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procCtx": {
                    "values": [
                      {
                        "id": "2ff8cc3d-5822-451f-ac75-ce87baf50524",
                        "value": "1",
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
    "totalRecords": 163697
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.