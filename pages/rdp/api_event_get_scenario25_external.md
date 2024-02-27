---
title: Get External Events by Event Type
sidebar: rdp_sidebar
permalink: api_event_get_scenario25.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, an external event is used to track the status of a particular job in a system by the user. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get external events by specifying the eventType using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response. 

## Scenario

To get the external events by specifying the eventType.

{% include snippets/header.html %}

## Request

Consider you wish to get all the external events of a particular task. In the request specify the following

* query -> typesCriterion : Specify as "adminexternalevent". 
* query -> attributesCriterion : Specify the required eventType. In this scenario we have specified "INBOUND".

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
          <span style="background-color: #FFFF00">"adminexternalevent"</span>
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "eventType": {
              "eq": "INBOUND"
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

Returns all the external events belonging to the eventType "INBOUND". As you can see the response there are six external events.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "b6bc724c-0996-4bc5-b2a3-7c4601f82c0b",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "1e271f03-fe4a-4549-a000-8a7268a9f0b7",
        "type": "adminexternalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-23T05:58:53.734-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-07-23T05:58:53.734-0500"
        },
        "data": {
          "attributes": {
            "taskType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3fdbda4d-4c0c-43ed-babe-77f8d7bf3d79",
                  "value": "loadplatformseed"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c60bd100-7bee-4567-bdbb-50381d30636d",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            },
            "engine": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ae467d3e-894b-445e-afa3-163a324de07e",
                  "value": "COP"
                }
              ]
            },
            "module": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9dc7092c-700c-4505-a8fc-f03bcb17590c",
                  "value": "rsAdminInboundService"
                }
              ]
            },
            "operationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d9325321-bbca-42bc-b728-b70b6cdda5e7",
                  "value": "inboundService"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ff6a1cda-ce79-41c0-8b83-a8e6b2d1f1fe",
                  "value": "INBOUND"
                }
              ]
            },
            "createdOn": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3b0c36de-4b34-4d09-9cea-b700946646e4",
                  "value": "2018-07-23T10:58:53.731+0000"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8a430ed5-0aa7-4af5-94b6-bba036e45aa9",
                  "value": "mary.jane@riversand.com"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0330726a-3258-449f-b10d-473751929873",
                  "value": "e60c6c63-b2e0-48af-8e19-f5e33aeca008"
                }
              ]
            },
            "taskStatus": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bb3d1e0a-871b-4459-88ed-1f242152c28e",
                  "value": "Queued"
                }
              ]
            },
            "recordCount": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4865b2b9-9fc0-4d69-bda8-3c9c258f2fde",
                  "value": 859
                }
              ]
            },
            "fileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3e79e846-f959-485f-bf93-fecc3db93c25",
                  "value": "core-apps-config-1.1.1637.zip"
                }
              ]
            },
            "parentId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "264d5024-6a49-4847-a2db-5e872f3b189b",
                  "value": "e60c6c63-b2e0-48af-8e19-f5e33aeca008"
                }
              ]
            },
            "originatingClientId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c1dd6140-f5a9-49ed-8f4d-c97daff3673e",
                  "value": "rdpclient"
                }
              ]
            }
          }
        }
      },
      {
        "id": "86bcec88-17cd-4e8d-91ef-6d2deb0d5ba6",
        "type": "adminexternalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-21T14:04:10.093-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-21T14:04:10.093-0500"
        },
        "data": {
          "attributes": {
            "taskType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6a3a994a-3d70-46ab-a5ee-1faa2b841146",
                  "value": "loadplatformseed"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e09d4be1-dc57-45b9-9a2c-8a9bc47cdf78",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            },
            "engine": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "13fac76f-2797-4d7d-a0fc-215ff360d516",
                  "value": "COP"
                }
              ]
            },
            "module": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8cfef03a-5007-4675-92ca-e042738be1a0",
                  "value": "rsAdminInboundService"
                }
              ]
            },
            "operationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "013f5ada-4ab0-4766-b551-4f21cc904fdc",
                  "value": "inboundService"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2dde0c8b-ff6f-4ac2-aeca-95e263f89923",
                  "value": "INBOUND"
                }
              ]
            },
            "createdOn": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f21b7d1b-679e-457a-9245-b677b0718e47",
                  "value": "2018-08-21T19:04:10.075+0000"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "aabf15a3-94a0-4651-a75d-1701c37c831f",
                  "value": "system_user"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5c92e827-2078-4b6f-a4b6-a3ed40312726",
                  "value": "cd16867c-e493-471f-8a82-866ed51f3719"
                }
              ]
            },
            "taskStatus": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e7c7f404-7172-4ac8-b483-e6a8b24076f8",
                  "value": "Queued"
                }
              ]
            },
            "recordCount": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9e3bb084-ad34-4e9a-9caf-7b6206d4a231",
                  "value": 877
                }
              ]
            },
            "fileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9243f9c9-bcbd-489b-952c-8ac14a7dadef",
                  "value": "core-apps-config-1.1.1777.zip"
                }
              ]
            },
            "parentId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e22324c8-9950-4b00-8b71-84d1b77e0b0e",
                  "value": "cd16867c-e493-471f-8a82-866ed51f3719"
                }
              ]
            },
            "originatingClientId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a4ff47da-102a-4741-9cb4-98feb76ff517",
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
    "totalRecords": 6
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.