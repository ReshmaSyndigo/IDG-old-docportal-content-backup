---
title: Get the Details of Work done in Entity Service App
sidebar: rdp_sidebar
permalink: api_request_work_done_entity_app.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

You can get the details of the work done in the **Entity Service App** using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the work done in the **Entity Service App** app based on the **Data Resolution** count.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityAppService" to get the details of the work done in the **Entity Service App**.
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
              "exact": "entityAppService"
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

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "a0f20b2f-770b-4517-aef8-4cbcb9ff5b9a",
    "maxRecords": 1,
    "taskId": "a0f20b2f-770b-4517-aef8-4cbcb9ff5b9a"
  },
  "response": {
    "requestObjects": [
      {
        "id": "2621068d-9663-445a-8187-e1bac0d9d6c3",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2021-10-20T01:57:40.059-0500",
          "modifiedDate": "2021-10-20T01:57:40.059-0500"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "017b9687-ca01-426c-9025-0057e6775eaf",
                  "value": "create",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "bc7418d9-95d5-40f7-a535-fe15b5c843c9",
                  "value": "sampleskuentity016",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "a55188c6-2de9-4f78-a957-ca6d305f6d70",
                  "value": "sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": { 
              "values": [
                {
                  "id": "f9d6cb1d-9da5-4fcd-b6b3-1dcab7045c8b",
                  "value": "entityAppService", 
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "b75316c0-5b0b-4f2a-9e78-b44c1cfc0778",
                  "value": "2621068d-9663-445a-8187-e1bac0d9d6c3",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "id": "5291a121-348d-48d5-99e7-d706b358fb98",
                  "value": "error",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "0fe6c1cf-2db5-4334-81c0-940d172cde2c",
                  "value": "2621068d-9663-445a-8187-e1bac0d9d6c3",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "775c7a98-efb6-4954-bc69-e087e3a3d555",
                  "value": "2621068d-9663-445a-8187-e1bac0d9d6c3",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "891cad2c-9309-40a6-acc7-95313f330167",
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "b23315d8-35d4-48c4-8ed3-582780c643e9",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "420002c2-1786-4a7c-bff0-b4095a4d4954",
                  "value": 1634713058811,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "id": "3aab0ac2-98a7-4202-b3f8-fa112f931eda",
                  "value": "error",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "id": "61f35c96-d3b9-4878-a6a3-b25d371b6b05",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingStartDate": {
              "values": [
                {
                  "id": "5a1e57d6-e4fb-432d-b583-51116504ae7e",
                  "value": "2021-10-20T12:27:36.682+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInQueue": {
              "values": [
                {
                  "id": "1c8579a4-bda3-400a-bbd4-d1328dc5203f",
                  "value": "1634713056682",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingEndDate": {
              "values": [
                {
                  "id": "4c45bfe4-216d-4441-8846-91ac46777820",
                  "value": "2021-10-20T12:27:38.805+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInProcessing": {
              "values": [
                {
                  "id": "d202cece-8fc8-4c2e-9b48-df581b52bab8",
                  "value": "2123",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "callerServiceName": {
              "values": [
                {
                  "id": "9d21e2d0-79f2-4616-9550-ec503864ef89",
                  "value": "apiHostService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "onDemandTroubleshooting": {
              "values": [
                {
                  "id": "aebf3d95-6b88-4cc7-911e-2aaba336b55a",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00"> "appMetrics": { </span>
              "group": [
                {
                  "id": "ee87bc11-acfc-422e-b3bd-01d4d87db9d5",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "d6600514-692b-430e-bd36-eec0ccd0512a",
                        <span style="background-color: #FFFF00"> "value": "dataResolution", </span>
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "refValRes": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "refValCop": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "uomValRes": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "pathValRes": {
                    "values": [
                      {
                        "id": "ca08706c-0581-4b66-aa70-5df44ceece78",
                        "value": "487",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "pathValCop": {
                    "values": [
                      {
                        "id": "d007624d-75c8-4d1d-a2c2-a907538f6e65",
                        "value": "5",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "invalidVal": {
                    "values": [
                      {
                        "id": "ab9028d7-d25c-4c87-84c0-09457d14b9db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "unmodAttrs": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "unmodRelAttrs": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
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
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.