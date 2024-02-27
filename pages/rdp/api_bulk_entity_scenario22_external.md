---
title: Get Task Details where Task Status is "not Queued"
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario22.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get the task details where Task Status is "Not Queued".

## Scenario

To get the events generated for tasks whose Task Status is "not Queued".

{% include snippets/header.html %}

## Request

To get the above event data, use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> typesCriterion : Specify as "externalevent".
* query -> attributesCriterion : taskStatus -> exact : Specify as "Queued".
* query -> attributesCriterion : taskStatus -> not : Specify as "true".

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"externalevent"</span>
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00">"taskStatus": {</span>
              "exact": "queued",
              "not": true
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the event objects generated for all the task status other than "Queued".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "73ca067a-d28f-4ae2-9814-5d6675733db1",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "b06a86f5-c5b2-47a1-a9ab-520bd2bb777d",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-09-12T04:22:18.812-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-12T04:22:18.812-0500"
        },
        "data": {
          "attributes": {
            "taskType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d9d833b3-f7ab-451f-ab97-da07320e4399",
                  "value": "loadtenantseed"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f4408b63-c4c2-4849-8474-a30cfc761238",
                  "value": "PROCESSING_STARTED"
                }
              ]
            },
            "engine": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "91bd5c18-89a2-4a38-939a-25e00654be37",
                  "value": "COP"
                }
              ]
            },
            "module": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ba448497-6790-475d-98c3-1b5b03a20ef1",
                  "value": "rsAdminInboundService"
                }
              ]
            },
            "operationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c23dd76d-065d-47f3-9c5d-2569053680cc",
                  "value": "inboundService"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e710bf3a-71f0-46a7-984c-0e59de8c61cc",
                  "value": "taskOfTasks"
                }
              ]
            },
            "createdOn": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ea3b14ce-d5ae-4d43-9af3-1ab15adcd763",
                  "value": "2018-09-12T09:22:18.810+0000"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "854bb3ec-f339-48e2-b320-6f31160bd228",
                  "value": "system_user"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bdb0352a-3aef-49a4-8309-a3094fc7494a",
                  "value": "404a361c-cb6b-4392-a892-857d43c096a1"
                }
              ]
            },
            "taskStatus": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "968a19b3-f0f2-4538-9e66-1c0e15d59d7e",
                  "value": "Processing"
                }
              ]
            },
            "recordCount": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "70453395-0a93-4e85-834e-596fbd8fb278",
                  "value": 7
                }
              ]
            },
            "fileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3713d1f9-5911-404f-a6ea-9e94470315df",
                  "value": "rdw-config-1.44.0.1002.zip"
                }
              ]
            },
            "parentTaskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "95a1e61e-f30a-4877-8494-8d5812f13a80",
                  "value": "404a361c-cb6b-4392-a892-857d43c096a1"
                }
              ]
            },
            "originatingClientId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "660779cc-9553-41f8-b803-267ea1193e6d",
                  "value": "rdpclient"
                }
              ]
            }
          }
        }
      },
      {
        "id": "0c719844-eace-48e5-95b4-05b7732a4ac8",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-09-19T00:32:18.155-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-19T00:32:18.155-0500"
        },
        "data": {
          "attributes": {
            "taskType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5145e70e-cc7e-4567-8d2a-a60aaa2d2fba",
                  "value": "loadtenantseed"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6e1c630d-2385-4f7b-a532-5c88f61ac036",
                  "value": "PROCESSING_STARTED"
                }
              ]
            },
            "engine": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "60ac25fa-bc93-41f4-ae04-624d173d48a8",
                  "value": "COP"
                }
              ]
            },
            "module": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "46eae0ad-d9ed-47fd-a352-5cfead67014e",
                  "value": "rsAdminInboundService"
                }
              ]
            },
            "operationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2aedead3-29c6-4a44-9fc1-d8d4f4037a83",
                  "value": "inboundService"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b0e8f85a-4ffc-4c9f-9fd2-6852aa9f7638",
                  "value": "taskOfTasks"
                }
              ]
            },
            "createdOn": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8bffa684-890e-418a-8c51-9fe248ad73f7",
                  "value": "2018-09-19T05:32:18.152+0000"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f266c45e-081b-4204-8f38-a9a5887b8e6b",
                  "value": "system_user"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9e856a74-ea08-497d-9de1-9e091685f27c",
                  "value": "54231be9-f5f1-44bc-a51b-2005e89c4c5b"
                }
              ]
            },
            "taskStatus": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c76769e4-3e19-4711-b551-ccd1bd298cb1",
                  "value": "Processing"
                }
              ]
            },
            "recordCount": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a9d47a2a-59dd-4eb6-a633-1c37a39eaddd",
                  "value": 7
                }
              ]
            },
            "fileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c09a71f6-f480-49a7-89b4-4988fe41cfdf",
                  "value": "rdw-config-1.44.0.1006.zip"
                }
              ]
            },
            "parentTaskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e17dc0a6-d1f5-48d6-b502-441d2de9de49",
                  "value": "54231be9-f5f1-44bc-a51b-2005e89c4c5b"
                }
              ]
            },
            "originatingClientId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8233f89d-f3e0-4950-8aa0-9694d56b80a1",
                  "value": "rdpclient"
                }
              ]
            }
          }
        }
      }
      .
      .
      .
      .
    ],
    "status": "success",
    "totalRecords": 7
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.