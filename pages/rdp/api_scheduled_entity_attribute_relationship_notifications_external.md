---
title: Schedule Notifications based on Entity Manage Attribute/Relationship query 
sidebar: rdp_sidebar
permalink: api_scheduled_entity_attribute_relationship_notifications.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to schedule the notifications for entity manage attribute or relationship based query using the RESTful API **{TenantURL or ID}/api/schedulerservice/create**.

## Scenario

Consider a scenario, where you have 5 SKU entities that have "Status" attribute, which is in pending state for more than a week. You wish to send a scheduled email notification to the vendor by triggering the schedule object. Similarly, you can send a scheduled email notification for relationship based query.

To schedule a task based on the specified start and stop time. For more information, see [Schedule a Task based on the Start and Stop Time](api_schedule_start_stop.html).

{% include snippets/header.html %}

## Request

To create the above schedule object, use the REST API {{site.data.rdp_glossary.schcreate}}. In the request, specify the following details:

| Attribute | Description | 
|-----------|--------------|
| id | Indicates the ID of the schedule task. In this case it is, **scheduled-entity-default-emailNotification**. |
| scheduleTaskName | Indicates the name of the schedule task. In this case it is, **schedule entity default emailNotification**. |
| scheduleTaskUrl | Indicates the rest URL of the task that must be scheduled. In this case, it is batch proxy service call URL. This API is used to call any "Batch" app.   |
| scheduleTaskPayload | Indicates the request for the rest API mentioned in the scheduleTaskUrl. This payload indicates the "Batch" app that needs to be run based on the details given in the "appId" and "jobDefId" fields of the payload. |
| jobInputPayload | Indicates the input for the "Batch" app to run the given query. Ensure that "taskType" is present and "prepareScroll" is true. To create a query for the pending items. For more information, see [Get Entities](api_app_get_entity.html). |
| identifier | Indicates the unique identifier of the email notification config. Note that, for multiple notification configs identifier must be different. |
 
<pre>
<code>
POST {{site.data.rdp_glossary.schcreate}}
Headers: Content-Type: application/json
Body:
{
  "metaInfo": {
    "dataIndex": "scheduleObject",
    "collectionName": "scheduleObjects",
    "responseObjectName": "response"
  },
  "scheduleObject": {
    "id": "scheduled-entity-default-emailNotification",
    "name": "schedule entity default emailNotification",
    "type": "scheduleobject",
    "properties": {
      "enabled": false
    },
    "data": {
      "attributes": {
        "scheduleType": {
          "values": [
            {
              "id": "110efa2a-912b-4990-90d5-d160de4ad2c4",
              "value": "fixedRate",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        <span style="background-color: #FFFF00"> "scheduleTaskName": { </span>
          "values": [
            {
              "id": "ddaa7172-09d9-442a-9b92-ec8056f75327",
              <span style="background-color: #FFFF00"> "value": "scheduled-entity-default-emailNotification", </span>
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        <span style="background-color: #FFFF00"> "scheduleTaskUrl": { </span>
          "values": [
            {
              "id": "001952cd-5db3-4977-b2dc-1033a83da2f3",
              "value": "http://rdp-rest:8085/qa9rwtest/api/proxyservice/call",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        }
      },
      "jsonData": {
        <span style="background-color: #FFFF00"> "scheduleTaskPayload": { </span>
          "proxyObject": {
            "data": {
              "jsonData": {
                "requestBody": {
                  "batchOptions": {
                    "poolId": "rsbatch"
                  },
                  "jobIdentifier": {
                    "appId": "schnotification",
                    "jobDefId": "schedulednotifications"
                  },
                  <span style="background-color: #FFFF00"> "jobInputPayload": { </span>
                    <span style="background-color: #FFFF00"> "taskType": "entityScehduledNotification", </span>
                    <span style="background-color: #FFFF00"> "identifier": "entityBased01", </span>
                    "params": {
                      "prepareScroll": true,
                      "query": {
                        "filters": {
                          "typesCriterion": [
                            "product"
                          ],
                          "attributesCriterion": [
                            {
                              "price": {
                                "lte": 5000
                              }
                            },
                            {
                              <span style="background-color: #FFFF00"> "status": { </span>
                                "exact": "Pending"
                              }
                            },
                            {
                              "dueDate": {
                                "lt": "Now-7d"
                              }
                            }
                          ]
                        }
                      },
                      "fields": {
                        "attributes": [],
                        "relationships": []
                      },
                      "options": {
                        "from": 0,
                        "to": 0
                      }
                    }
                  }
                }
              }
            },
            "type": "batch-create-job"
          }
        },
        "scheduleConfiguration": {
          "authContext": {
            "x-rdp-userRoles": "admin",
            "x-rdp-clientId": "rdpclient",
            "x-rdp-userid": "system_user",
            "x-rdp-useremail": "system",
            "x-rdp-ownershipdata": "",
            "x-rdp-username": "system",
            "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE=",
            "x-rdp-tenantId": "qa9rwtest"
          },
          "intervalInMins": 10080
        }
      }
    }
  }
}
</code>
</pre>

{% include callout.html content="**Notes**:
* The link between the schedule object and the notification object comes under the context part. The identifier in the context and jobInputPayload must match the query payload specified in the schedule object.
* You must enable the schedule object after creating it.
" type="primary" %}

The following is the sample email notification config for the above request:

<pre>
<code>
{
  "configObjects": [
    {
      "id": "entityDefault_notificationConfig",
      "name": "entityDefault_notificationConfig",
      "type": "notificationConfig",
      "properties": {
        "createdService": "configurationManageService",
        "createdBy": "mmadmin@riversand.com",
        "createdDate": "2021-11-18T02:15:13.969-0600",
        "modifiedService": "configurationManageService",
        "modifiedBy": "mmadmin@riversand.com",
        "modifiedDate": "2021-12-10T00:30:29.243-0600"
      },
      "data": {
        "contexts": [
          {
            "context": {
              "app": "scheduledEmailNotification",
              "component": "product",
              "identifier": "entityBased01",
              "service": "entity",
              "user": "_DEFAULT"
            },
            "attributes": {
              "subscribedroles": {
                "values": [
                  {
                    "id": "1fc5c65c-8203-4247-b8b7-940ae438c4d1",
                    "value": "vendor_role",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "subscribedusers": {
                "values": [
                  {
                    "id": "a6698f89-e08e-4c10-8e7a-f00ff280b9ed",
                    "value": "peter@riversand.com_user",
                    "locale": "en-US",
                    "source": "internal"
                  },
                  {
                    "id": "a6698f89-e08e-4c10-8e7a-f00ff280b9ed",
                    "value": "john@riversand.com_user",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "emailaddress": {
                "values": [
                  {
                    "id": "5739943e-36a9-40b1-b78e-cb0f44cffced",
                    "value": "oliver@riversand.com_user",
                    "locale": "en-US",
                    "source": "internal"
                  },
                  {
                    "id": "5739943e-36a9-40b1-b78e-cb0f44cffcef",
                    "value": "mary@riversand.com_user",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "excludedusers": {
                "values": [
                  {
                    "id": "aff5d8e7-7bb2-45ae-8102-09e4e2ba4547",
                    "value": "jane@riversand.com_user",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "templateId": {
                "values": [
                  {
                    "id": "7bf2f097-b85f-4545-88b0-64c5bcd8dca3",
                    "value": "workflowAssignmentScheduledDefaultTemplate",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "digestemailenabled": {
                "values": [
                  {
                    "id": "080b0158-5a07-4f4e-82d8-012f60d2668e",
                    "value": false,
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              }
            }
          }
        ]
      }
    }
  ]
}
</code>
</pre>

## Response

If the schedule create request is submitted successfully, then the following response is received from create schedule API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5e664f74-ad12-4547-95aa-1450e81eadc9"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted scheduleobject for create with Id scheduled-entity-default-emailNotification. Check after some time",
          "messageCode": "I0122",
          "messageType": "success",
          "messageParams": [
            "scheduleobject",
            "create",
            "scheduled-entity-default-emailNotification"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/schedulerservice/get\" API to verify the created schedule object. See [Get a Schedule Object using Scheduler Service](api_sch_get.html) and [Get a particular schedule Info object using schedule Id](api_sch_get_scenario10.html).
* To create a query for the pending items. For more information, see [Get Entities](api_app_get_entity.html).
* The response message of the task executed is internal to the task. The schedule can only determine the success of the HTTP REST API call based on known HTTP protocol such as HTTP response 200. Any other internal interpretation of the response message is not in the scope of the schedule service.
" type="primary" %}

## Troubleshooting
See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.