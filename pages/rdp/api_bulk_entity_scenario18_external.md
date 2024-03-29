---
title: Get Task Details using Task ID
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario18.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get the task details using Task ID.

## Scenario

To get the events generated by specifying the Task ID.

{% include snippets/header.html %}

## Request

To get the above event data, use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> typesCriterion : Specify as "externalevent".
* query -> attributesCriterion : Specify the required taskId. In this scenario we have mentioned "2abe0f10-ce81-4784-a74d-d61a8adebf39".

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
            <span style="background-color: #FFFF00">"taskId": {</span>
              "exact": "2abe0f10-ce81-4784-a74d-d61a8adebf39"
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
      "maxRecords": 2000
    }
  }
}
</code>
</pre> 

## Response

Returns the event objects generated for the given taskId.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "333a123c-7bda-4332-8ef6-7bae35522426",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "e9684c1d-bf67-44e5-b4e0-d6acc8f83101",
        "type": "externalevent",
        "properties": {
          "source": "internal",
          "createdBy": "system_user",
          "createdDate": "2018-08-23T10:05:07.824-0500",
          "createdByService": "rsConnectService",
          "createdService": "eventManageService",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-23T10:05:07.824-0500"
        },
        "data": {
          "attributes": {
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "78f59c7d-f7b4-47c6-86ff-70dea6503126",
                  "value": "RECORD_TRANSFORM_ENTITY_MODEL_IMPORT"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6472251f-6532-4e71-bdbb-f4450a52a422",
                  "value": "PROCESSING_STARTED"
                }
              ]
            },
            "profileType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3e854fff-0aed-40f9-9a0f-a47ff5242628",
                  "value": "MODEL_IMPORT"
                }
              ]
            },
            "profileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4c4960b9-ea5a-4b40-b6a0-e3eb8fda22f1",
                  "value": "adminservice_model_excel_import_process"
                }
              ]
            },
            "parentTaskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0132c89f-46b5-4f60-bb0e-761a3279fad5"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9837d05c-37c5-4718-8bcb-fddcc8341769",
                  "value": "2abe0f10-ce81-4784-a74d-d61a8adebf39"
                }
              ]
            },
            "message": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "10499243-49f3-4a46-a086-5ca5869a6456",
                  "value": "Extract-transform-load task has started."
                }
              ]
            },
            "integrationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ac278cfc-6487-43c1-bb09-ef15310aca47",
                  "value": "User"
                }
              ]
            }
          }
        }
      },
      {
        "id": "6172137c-7efb-4804-a1f5-34c5e099d032",
        "type": "externalevent",
        "properties": {
          "source": "internal",
          "createdBy": "system_user",
          "createdDate": "2018-08-23T10:05:07.817-0500",
          "createdByService": "rsConnectService",
          "createdService": "eventManageService",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-23T10:05:07.817-0500"
        },
        "data": {
          "attributes": {
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e0384a6b-1854-4c2d-9c52-56728c7ee579",
                  "value": "RECORD_LOAD_ENTITY_MODEL_IMPORT"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "158227ba-7060-4a6b-9555-2b2a3994d9fb",
                  "value": "PROCESSING_COMPLETED"
                }
              ]
            },
            "profileType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5e1fdbc2-361f-48d2-88c1-630e26945345",
                  "value": "MODEL_IMPORT"
                }
              ]
            },
            "profileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "95c51521-83e8-4be7-9244-dd1915d5d5af",
                  "value": "adminservice_model_excel_import_process"
                }
              ]
            },
            "parentTaskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ea15534f-bcc9-43dc-bcea-3a31210c0a3b"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "f694a321-fe93-452d-9f14-1ec77de24a21",
                  "value": "2abe0f10-ce81-4784-a74d-d61a8adebf39"
                }
              ]
            },
            "message": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "76e08394-c3e7-4a53-9119-e8a2b00521e2",
                  "value": "Inbound task has completed"
                }
              ]
            },
            "integrationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "edeb4245-3674-4fff-9ce3-8c140dfb868b",
                  "value": "User"
                }
              ]
            }
          }
        }
      },
      {
        "id": "8b5acbe9-2bff-41b9-83d8-5024dbaad0d7",
        "type": "externalevent",
        "properties": {
          "source": "internal",
          "createdBy": "system_user",
          "createdDate": "2018-08-23T10:05:07.887-0500",
          "createdByService": "rsConnectService",
          "createdService": "eventManageService",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-23T10:05:07.887-0500"
        },
        "data": {
          "attributes": {
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "748d5906-de0d-4fae-a5c6-cea4a70ebc58",
                  "value": "RECORD_LOAD_ENTITY_MODEL_IMPORT"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "04a5c220-c214-4bf4-8b83-4c3a51db876e",
                  "value": "SUBMITTED"
                }
              ]
            },
            "profileType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2076a709-6f52-4216-a6a0-7d55c25e7b03",
                  "value": "MODEL_IMPORT"
                }
              ]
            },
            "profileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "dd979dbf-5bcd-4678-9f97-017e5acedaa2",
                  "value": "adminservice_model_excel_import_process"
                }
              ]
            },
            "parentTaskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3ad5a956-3bf8-47fc-85b6-4aae7e4573f9"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7a3886c2-2b5b-4d26-bbd2-a705e4ed4642",
                  "value": "2abe0f10-ce81-4784-a74d-d61a8adebf39"
                }
              ]
            },
            "message": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cceb7f29-48b6-4495-b231-0a108cd95355",
                  "value": "Inbound task has completed"
                }
              ]
            },
            "integrationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "910250ae-0ce5-4f74-8c71-ae916f40472d",
                  "value": "User"
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
    "totalRecords": 1597
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.