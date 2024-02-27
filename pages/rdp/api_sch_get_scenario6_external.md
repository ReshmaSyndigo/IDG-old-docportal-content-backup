---
title: Get a particular schedule object using Id
sidebar: rdp_sidebar
permalink: api_sch_get_scenario6.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schget}}** to get a schedule object, using a scenario.

## Scenario

To get a schedule object with its Id as "groomEntityManageEvents".

{% include snippets/header.html %}

## Request

To get the above schedule object, you can use the REST API {{site.data.rdp_glossary.schget}}. In the request send the following details:

* query -> Id: Specify the schedule object identifier.
* query -> filters -> typesCriterion: Specify the type as "scheduleobject".

<pre>
<code>
POST **{TenantURL or ID}/api/schedulerservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
     <span style="background-color: #FFFF00">"id": "scheduletopublishentitiesgenericobjecttoeventhub",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"scheduleobject"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "totalRecords": 10
    }
  }
}
</code>
</pre>

## Response

Returns the schedule object matching the Id in the specified list.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "0cf5a292-a964-45e9-a909-f29732b61517",
    "maxRecords": 2000
  },
  "response": {
    "scheduleObjects": [
      {
        "id": "scheduletopublishentitiesgenericobjecttoeventhub",
        "name": "Schedule To Publish Entities Generic Object To EventHub",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "infodevadmin@riversand.com_user",
          "createdDate": "2019-11-12T02:49:01.802-0600",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "modifiedDate": "2019-11-12T02:49:01.802-0600"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "730561bc-ebaa-4b2b-86ee-bc9e167b1be6",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7305a2ba-46e6-464d-9c5c-95c8def2d3dc",
                  "value": "scheduletopublishentitiesgenericobjecttoeventhub"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e421c48c-fe53-4014-a310-4bac7d4f430f",
                  "value": "http://imp-exp-rest:9095/qa8infodev/api/rsConnectService/publish"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 30,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "qa8infodev",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "filters": {
                    "attributesCriterion": [
                      {
                        "taskType": {
                          "exact": "RSCONNECT_PUBLISH_AGGREATED_entities_export_to_genericobject_eventhub"
                        }
                      },
                      {
                        "status": {
                          "exact": "QUEUED"
                        }
                      }
                    ],
                    "typesCriterion": [
                      "scheduledrequestobject"
                    ]
                  }
                },
                "fields": {
                  "attributes": [
                    "_ALL"
                  ],
                  "relationships": [
                    "_ALL"
                  ]
                },
                "rsconnect": {
                  "profiles": [
                    "collect_from_genericobjects_eventhub"
                  ]
                }
              }
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.