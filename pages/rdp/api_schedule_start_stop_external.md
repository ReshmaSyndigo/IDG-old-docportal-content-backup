---
title: Schedule a Task based on the Start and Stop Time 
sidebar: rdp_sidebar
permalink: api_schedule_start_stop.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides you the ability to schedule a task based on the specified start and stop time in order for the user to control when a schedule periodically runs. The start and stop time of a schedule consists of RDP supported date and time format. It also keep track of the number of occurrences of a schedule.

**The following are the conditions under which the schedule run:**

| **Start Time** | **Stop Time** | **Description** |
|----------------|---------------|-----------------|
| ![No](images/rdp/no.png "No") | ![No](images/rdp/no.png "No") | Schedule starts running. | 
| ![Yes](images/rdp/pass-bc-icon.png "Yes") | ![No](images/rdp/no.png "No") | If start time is not passed, then the schedule starts running at the given timestamp. | 
| ![No](images/rdp/no.png "No") | ![Yes](images/rdp/pass-bc-icon.png "Yes") | Schedule considers the current date time as start time and stops at the given stop datetime. |
| ![Yes](images/rdp/pass-bc-icon.png "Yes") | ![No](images/rdp/no.png "No") | If start time is passed, then the schedule considers the next day date and the given start time to invoke schedular. |
 
{% include callout.html content="**Notes**:
* If start time is after stop time, then scheduler will not run the task.
* The start time supports only 3 formats such as **yyyy-MM-dd hh:mm AM/PM**, **hh:mm AM/PM** and **yyyy-MM-ddTHH:mm** in UTC timezone.
* The stop time supports only 2 formats **yyyy-MM-dd hh:mm AM/PM** and **yyyy-MM-ddTHH:mm** in UTC timezone, where date part is mandatory.
" type="primary" %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schcreate}}** to create a schedule object, using a scenario.

## Scenario

Create a schedule to publish entities generic object to blobstore based on the specified start and stop time.

{% include snippets/header.html %}

## Request

To create the above schedule object, use the REST API {{site.data.rdp_glossary.schcreate}}. In the request send the following details:

* enabled: Specify as "true".
* scheduleTaskUrl: Specify the URL of the required REST API task.
* intervalInMins: Specify the required time gap in minutes after which the scheduled task executes once again.
* scheduleTaskPayload: Specify all the query details of the REST API of the task that you wish to schedule.
* startTime: Specify the start time of a task.
* stopTime: Specify the stop time of a task to schedule.

<pre>
<code>
POST {{site.data.rdp_glossary.schcreate}}
Headers: Content-Type: application/json
Body:
{
  "scheduleObject": {
    "id": "scheduletopublishentitiesgenericobjecttoblobstoretoblobstore",
    "name": "Schedule To Publish Entities Generic Object To BlobStore",
    "type": "scheduleobject",
    "properties": {
      <span style="background-color: #FFFF00">"enabled": true,</span>
      "createdService": "scheduleObjectManageService",
      "createdDate": "2019-12-11T01:16:06.662-0600",
      "modifiedService": "scheduleObjectManageService",
      "modifiedDate": "2019-12-11T01:16:06.662-0600"
    },
    "data": {
      "attributes": {
        "scheduleType": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "b7b601ac-693c-4034-9c9c-28c7142449fa",
              "value": "fixedRate"
            }
          ]
        },
        "scheduleTaskName": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "11a2f14f-00c9-4197-bb66-a83e47255009",
              "value": "scheduletopublishentitiesgenericobjecttoblobstore"
            }
          ]
        },
        <span style="background-color: #FFFF00">"scheduleTaskUrl": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "2e3bc0cf-9a77-48db-9f67-4cfe8ed2381c",
              "value": "http://imp-exp-rest:9095/rdwrdpengg11/api/rsConnectService/publish"
            }
          ]
        }
      },
      "jsonData": {
        "scheduleConfiguration": {
          <span style="background-color: #FFFF00">"intervalInMins": 30,</span>
          <span style="background-color: #FFFF00">"startTime": "2019-12-16 9:45 AM",</span>
          <span style="background-color: #FFFF00">"stopTime": "2019-12-17 9:58 AM",</span>
          "authContext": {
            "x-rdp-userRoles": "admin",
            "x-rdp-clientId": "rdpclient",
            "x-rdp-tenantId": "rdwrdpengg11",
            "x-rdp-ownershipdata": "",
            "x-rdp-userid": "system_user",
            "x-rdp-username": "system",
            "x-rdp-useremail": "system",
            "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
          }
        },
        <span style="background-color: #FFFF00">"scheduleTaskPayload": {</span>
          "params": {
            "query": {
              "filters": {
                "attributesCriterion": [
                  {
                    "taskType": {
                      "exact": "RSCONNECT_PUBLISH_AGGREATED_entities_export_to_genericobject_blobstore"
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
                "collect_from_genericobjects_blobstore"
              ]
            }
          }
        }
      }
    }
  }
}
</code>
</pre> 

## Response

If the schedule create request is submitted successfully, then the following response is received from create schedule API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "fd063888-ec33-4250-ba9d-96afb4a17c68"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted scheduleobject for create with Id scheduletopublishentitiesgenericobjecttoblobstoretoblobstore. Check after some time",
          "messageCode": "I0122",
          "messageType": "success",
          "messageParams": [
            "scheduleobject",
            "create",
            "scheduletopublishentitiesgenericobjecttoblobstoretoblobstore"
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
* The response message of the task executed is internal to the task. The schedule can only determine the success of the HTTP REST API call based on known HTTP protocol such as HTTP response 200. Any other internal interpretation of the response message is not in the scope of the schedule service.
" type="primary" %}

## Troubleshooting
See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.