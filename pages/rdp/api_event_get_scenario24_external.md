---
title: Get External Events by filtering the Attributes
sidebar: rdp_sidebar
permalink: api_event_get_scenario24.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, an external event is used to track the status of a particular job in a system by the user. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get external events by filtering the attributes using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response. 

## Scenario

To get the external events by filtering the attributes.

{% include snippets/header.html %}

## Request

Consider you wish to get all the external events of a particular task. In the request specify the following

* query -> typesCriterion : Specify as "externalevent". 
* query -> attributesCriterion : Specify the required attribute based on which you wish to filter. In this scenario we filter using "eventSubType".

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
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "eventSubType": {
              "eq": "QUEUED_SUCCESS"
            }
          }
        ]
      }
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        "eventSubType"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the external events belonging to the eventSubType "QUEUED_SUCCESS". As you can see the response there are six external events.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "2baf48dc-0af7-425c-bb7a-3fa321001897",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "24affd8b-7cda-4499-ab3c-70fe606a9d2e",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-21T09:19:36.798-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-21T09:19:36.798-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d270b63c-7531-4c70-9f30-9f85f6d72a2d",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            }
          }
        }
      },
      {
        "id": "c393dd4d-e2f5-43bd-a484-e7769c001ddd",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-23T05:58:52.356-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-07-23T05:58:52.356-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "ff32e26f-c883-43bd-821a-dae65d9eeaa1",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            }
          }
        }
      },
      {
        "id": "88149ceb-b7e2-4c55-ad11-3de38c2385df",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-09-21T08:54:17.711-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-21T08:54:17.711-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "702d4366-f907-4275-8c56-b584dd9c79d1",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            }
          }
        }
      },
      {
        "id": "177e08df-76ec-4e6e-8985-26d873a29a3b",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-21T07:41:53.762-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-21T07:41:53.762-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b60b1966-592c-49b7-8fe3-2f0c0ca1ea58",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            }
          }
        }
      },
      {
        "id": "5f13f7ae-82dd-4f9c-aadd-239796a93cce",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-09-20T03:05:06.993-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-20T03:05:06.993-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "984a8b6b-d06a-44eb-a87a-d1a3991d6b42",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            }
          }
        }
      },
      {
        "id": "0ad035cb-c67f-4e2c-b6a2-fd71ece05ee8",
        "type": "externalevent",
        "properties": {
          "createdByService": "rsAdminInboundService",
          "createdService": "eventManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-21T13:46:32.104-0500",
          "modifiedService": "eventManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-21T13:46:32.104-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cfa544fe-fbb8-4782-95a3-b3abd2f1be78",
                  "value": "QUEUED_SUCCESS"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 6
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.