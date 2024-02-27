---
title: Get External Events by FileName attribute
sidebar: rdp_sidebar
permalink: api_event_get_scenario22.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, an external event is used to track the status of a particular job in a system by the user. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get external events present by specifying the FileName Attribute using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response. 

## Scenario

To get the external events by specifying the FileName Attribute.

{% include snippets/header.html %}

## Request

Consider you wish to get all the external events of a particular task. In the request specify the following

* query -> typesCriterion : Specify as "adminexternalevent". 
* query -> attributesCriterion : Specify the appropriate fileName. In this scenario we have specified "core-apps-config-1.1.1777.zip".

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
            "fileName": {
              "eq": "core-apps-config-1.1.1777.zip"
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

Returns the external events belonging to the specified file. As you can see the response there are six external events belonging to the filename "core-apps-config-1.1.1777.zip".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3a738534-e3ac-4818-91b1-e9fff59fab65",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "fc429078-3929-49c6-a6b3-91e2fcd5fdbf",
        "type": "adminexternalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-21T13:35:49.319-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-21T13:35:49.319-0500"
        },
        "data": {
          "attributes": {
            "taskType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ea398ddf-77bf-429a-b01c-894144b91f61",
                  "value": "loadplatformseed"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "18f57f34-a1ad-4cf9-9ed9-cec4aded5fe7",
                  "value": "PROCESSING_COMPLETED"
                }
              ]
            },
            "engine": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1800e4dd-350e-459f-88c9-9ba310d58973",
                  "value": "COP"
                }
              ]
            },
            "module": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "938c60ad-8bc8-4a7c-94fb-888d8559110c",
                  "value": "rsAdminInboundService"
                }
              ]
            },
            "operationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3479da48-e2a2-4383-a457-6ed2d38c3aa5",
                  "value": "inboundService"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "bf93d7fa-8459-40ab-8bff-7db4f62f6e67",
                  "value": "LOAD"
                }
              ]
            },
            "createdOn": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "417ba14f-5778-4c69-a119-9c28b178680c",
                  "value": "2018-08-21T18:35:49.312+0000"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1c12a1f0-ae93-4b20-99f2-8dc48c5f37ad",
                  "value": "system_user"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "dad47c8a-b27d-41e9-a660-608a8d1920f2",
                  "value": "192db52b-468b-4427-a94a-39072b4e34a2"
                }
              ]
            },
            "taskStatus": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f588cedf-233b-4045-bf99-5f5fff9b28fd",
                  "value": "Processing"
                }
              ]
            },
            "fileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "eb2de107-14fe-4d89-8f34-dfd2e691bcee",
                  "value": "core-apps-config-1.1.1777.zip"
                }
              ]
            },
            "parentId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c2e38b80-0970-4eab-8b10-0daee78375db",
                  "value": "192db52b-468b-4427-a94a-39072b4e34a2"
                }
              ]
            },
            "originatingClientId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "775f9430-ae8a-4bfc-acba-2cf1af749a5b",
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