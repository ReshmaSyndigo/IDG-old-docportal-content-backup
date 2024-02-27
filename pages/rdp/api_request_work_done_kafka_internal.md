---
title: Get the Details of Work done by the Elasticsearch and Kafka in Entity Manage App
sidebar: rdp_sidebar
permalink: api_request_work_done_kafka.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

You can get the details of the work done by the **Elasticsearch** and **Kafka** in **Entity Manage** app using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the work done by the **Elasticsearch** and **Kafka** in **Entity Manage** app.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityManageService" to get the details of the work done by the **Elasticsearch** and **Kafka** in **Entity Manage** app.
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
              "exact": "entityManageService"
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
  "id": "753660d1-fd5f-4174-b408-75c3cfbe975a",
  "type": "requestobject",
  "properties": {
    "createdService": "requestManageService",
    "createdBy": "system_user",
    "modifiedService": "requestManageService",
    "modifiedBy": "system_user",
    "createdDate": "2021-10-27T23:52:40.762-0500",
    "modifiedDate": "2021-10-27T23:52:40.762-0500"
  },
  "data": {
    "attributes": {
      "entityAction": {
        "values": [
          {
            "id": "20c752ab-eddc-40bd-8217-6f6577f4eefd",
            "value": "delete",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityId": {
        "values": [
          {
            "id": "933295f6-1c18-4864-8894-a44259800b97",
            "value": "NHLbPmyJR9CUZPKXVIDzlgg",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityType": {
        "values": [
          {
            "id": "7754b363-30db-42c6-86de-bfc10534a902",
            "value": "image",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "serviceName": {
        "values": [
          {
            "id": "184b1420-70b8-4f1c-9f27-3eb83ceb0871",
            "value": "entityManageService",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestId": {
        "values": [
          {
            "id": "a4b04bcb-c5c9-4a16-8066-c6883119b9e4",
            "value": "753660d1-fd5f-4174-b408-75c3cfbe975a",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestStatus": {
        "values": [
          {
            "id": "d9bac800-f88d-42ef-b4de-0085e05ce8cf",
            "value": "success",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "relatedRequestId": {
        "values": [
          {
            "id": "66c6a35e-11e9-4841-920a-4bc8eaa60054",
            "value": "753660d1-fd5f-4174-b408-75c3cfbe975a",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestGroupId": {
        "values": [
          {
            "id": "125229ab-49fe-4e96-acce-5dd3de934af0",
            "value": "753660d1-fd5f-4174-b408-75c3cfbe975a",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "clientId": {
        "values": [
          {
            "id": "2d016428-39db-4b70-9349-87bc40686017",
            "value": "rdpclient",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "userId": {
        "values": [
          {
            "id": "8550f2da-6e4c-4514-83d3-a9a6825e0b39",
            "value": "system_user",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestTimestamp": {
        "values": [
          {
            "id": "84a8f6d8-858e-4e24-bbc2-728b0a7a70f6",
            "value": 1635396760754,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "ObjectStore": {
        "values": [
          {
            "id": "f9add15e-41a5-45cd-8845-1ccc659d1267",
            "value": "success",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "impacted": {
        "values": [
          {
            "id": "5bbc901e-fe4b-48b2-82ee-10a17169aaa4",
            "value": false,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "queuedDate": {
        "values": [
          {
            "id": "72606a7d-6ab4-4c53-8ffb-2f5c22b523e3",
            "value": "2021-10-28T10:22:40.662+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "processingStartDate": {
        "values": [
          {
            "id": "385a25d4-d548-4966-9013-c35f75c156bb",
            "value": "2021-10-28T10:22:40.666+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "timeSpentInQueue": {
        "values": [
          {
            "id": "31edf59b-0d7d-4c01-8877-06515bddc2a7",
            "value": "4",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "processingEndDate": {
        "values": [
          {
            "id": "25614e0e-e6ab-4961-8e20-f8b3f4f213c0",
            "value": "2021-10-28T10:22:40.750+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "timeSpentInProcessing": {
        "values": [
          {
            "id": "b6cf851d-7dfa-49b4-8257-80e3bb9a2737",
            "value": "84",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "callerServiceName": {
        "values": [
          {
            "id": "d22eb14b-867f-4fd6-9405-13cbc46cbb90",
            "value": "apiHostService",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "onDemandTroubleshooting": {
        "values": [
          {
            "id": "0553d514-8d98-4271-91d8-f6a7642f8b6a",
            "value": false,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "ARCCount": {
        "group": [
          {
            "id": "b002c0ff-82bf-429a-b70d-fb5409f9a1a3",
            "locale": "en-US",
            "source": "internal",
            "incCtx": {
              "values": [
                {
                  "id": "5ea4fd26-7432-48ac-ba44-bf0d4c2d3a80",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impAttr": {
              "values": [
                {
                  "id": "c84e17fe-50a1-4133-a118-cd182b505395",
                  "value": "85",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "incAttr": {
              "values": [
                {
                  "id": "3412c80a-9253-46e8-b2b2-1547b4c36a52",
                  "value": "85",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impCtx": {
              "values": [
                {
                  "id": "d1ab0b7b-1361-4f8a-a484-fde79ae842b2",
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
            "id": "84ec0d2f-9064-49b2-959d-0af52aa1db11",
            "locale": "en-US",
            "source": "internal",
            "microApp": {
              "values": [
                {
                  "id": "df8a655a-382b-40e5-be97-089746030799",
                  "value": "elasticSearch",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "getByIdCount": {
              "values": [
                {
                  "id": "e2fe1ba6-e336-4a2d-adb5-71773e40ff6b",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          {
            "id": "c8ca72d9-68c8-44be-905e-dd0e647dc142",
            "locale": "en-US",
            "source": "internal",
            "microApp": {
              "values": [
                {
                  "id": "90a97b9f-f1ee-45f2-af7c-79add9c001a6",
                  "value": "dataResolution",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          {
            "id": "eae5a8c7-1cf6-4d24-9361-fdae0b4809ad",
            "locale": "en-US",
            "source": "internal",
            "microApp": {
              "values": [
                {
                  "id": "9040e43a-f0d7-4690-b091-4c6d43e501c5",
                  "value": "defaultValuesPopulation",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          {
            "id": "e1027b1e-2c78-4e88-ada8-b4949ca04ebe",
            "locale": "en-US",
            "source": "internal",
            "microApp": {
              "values": [
                {
                  "id": "6ad4e8f8-7b14-4b22-8d9d-0dfb6a6bdda9",
                  "value": "ruleEvaluation",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          {
            "id": "bbc03562-80fa-4835-9fc8-67980ffdd59b",
            "locale": "en-US",
            "source": "internal",
            "microApp": {
              "values": [
                {
                  "id": "a12fe7e1-b213-49e6-b75f-9d59765577cd",
                  "value": "kafka",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "messagesQueued": {
              "values": [
                {
                  "id": "d72bd7af-de23-477b-a37a-f78d3c1a7bc6",
                  "value": "3",
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
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
