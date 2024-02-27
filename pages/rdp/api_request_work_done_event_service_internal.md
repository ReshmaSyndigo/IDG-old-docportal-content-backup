---
title: Get the Details of Work done in Event Service App
sidebar: rdp_sidebar
permalink: api_request_work_done_event_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

You can get the details of the work done in the **Event Service** app using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the work done in the **Event Service** app.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "eventManageService" to get the details of the work done in the **Event Service** app.
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
              "exact": "eventManageService"
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
    "requestId": "58c1f23f-3945-4523-a190-bca4861f40c5",
    "maxRecords": 1,
    "taskId": "58c1f23f-3945-4523-a190-bca4861f40c5"
  },
  "response": {
    "requestObjects": [
      {
        "id": "e97320ff-33a5-48c1-999f-ed28527c1e47",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2021-10-29T00:23:49.556-0500",
          "modifiedDate": "2021-10-29T00:23:49.556-0500"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "f6615fac-1867-4789-b6b1-831a916f10dd",
                  "value": "create",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "b321bd2a-9f1d-49eb-bc00-4aa3cbf080b1",
                  "value": "sampleskuentity019",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "3f5daa9f-011b-45f3-a1a2-10cef790ed15",
                  "value": "entitymanageevent",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "id": "c9b59038-2ca3-4665-9cb5-f28e3258934d",
                  "value": "eventManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "97bdf708-9a71-4a2c-bfe4-dd3d657bfb7f",
                  "value": "e97320ff-33a5-48c1-999f-ed28527c1e47",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "id": "ba6b318f-039d-4915-9646-6e45f86df489",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "c6d20733-589a-403f-9e1e-55facda843fb",
                  "value": "2c053b24-2cd4-4796-a3c7-e3e3b32a82cf",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "4edfb55d-3b86-40e4-b38d-7637d77cd8a9",
                  "value": "2c053b24-2cd4-4796-a3c7-e3e3b32a82cf",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "1e57f86c-b365-4bc2-8e20-06f6657f904a",
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "46b3ca4a-5fab-4e1c-9b30-0cbe0e081642",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "6bc6ec0a-53ca-4094-b3de-b9ed50c571c1",
                  "value": 1635485029545,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "com.riversand.dataplatform.fs.svcmanager.activities.EventSubscriberDispatcherBolt": {
              "values": [
                {
                  "id": "417d02e7-05d3-4315-a826-66e3d75bf3da",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "id": "899168e5-508d-440b-bf7a-73f4a7bd727d",
                  "value": true,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "queuedDate": {
              "values": [
                {
                  "id": "3d3cb6e6-f135-42fd-ad1d-f1460022b186",
                  "value": "2021-10-29T10:53:49.519+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingStartDate": {
              "values": [
                {
                  "id": "b2c1e64c-b031-41c3-b8f1-983ac5afb337",
                  "value": "2021-10-29T10:53:49.524+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInQueue": {
              "values": [
                {
                  "id": "9e5b9cce-0d40-4788-a1e1-2c7a0d206374",
                  "value": "5",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingEndDate": {
              "values": [
                {
                  "id": "45216f9d-f0e3-497a-b368-cc36f53ed194",
                  "value": "2021-10-29T10:53:49.544+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInProcessing": {
              "values": [
                {
                  "id": "3cfd1dc3-fb1a-4d81-9c47-007251f72cb3",
                  "value": "20",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "callerServiceName": {
              "values": [
                {
                  "id": "e572830b-fd46-4be5-842a-4f7bbb32cbae",
                  "value": "entityManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "onDemandTroubleshooting": {
              "values": [
                {
                  "id": "865311c0-60f8-4482-ac58-35f3fb84ccce",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00"> "appMetrics": { </span>
              "group": [
                {
                  "id": "50d1345f-c04a-484d-83fa-86f2308d75a7",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "17d0549b-064f-4b47-9fbe-f56baab37adc",
                        <span style="background-color: #FFFF00"> "value": "eventSubscription", </span>
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "qualifiedSubscriptionCount": {
                    "values": [
                      {
                        "id": "7c82ccae-484d-48b1-86e3-32068eecc15e",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "succeededSubscriptionCount": {
                    "values": [
                      {
                        "id": "f8b73d86-2217-4f3a-a9e5-f0157377ffbb",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "erroredSubscriptionCount": {
                    "values": [
                      {
                        "id": "e46db587-bf16-44f4-b188-93e0922278c4",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "eventId": {
              "values": [
                {
                  "id": "0ab37556-dfaa-4198-9cc2-099db134e0af",
                  "value": "7c206540-2d0f-4207-b2b9-cceabba021fd",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          "jsonData": {}
        }
      }
    ],
    "status": "success",
    "totalRecords": 205176
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
