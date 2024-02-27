---
title: Create Request Tracking Object
sidebar: rdp_sidebar 
permalink: api_create_request_tracking_object_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createrequesttrackingobject}}** to create a request object to track the status of entities, using a scenario. See [Request Tracking Object Structure](api_request_tracking_object_structure.html) for more information. Note that request tracking objects are **internally** created by the system during the entity operations.

## Scenario

To create a task summary object "guid" for tracking the status of entities.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API {{site.data.rdp_glossary.createrequesttrackingobject}}. In the request, send the following details:

* requestObject -> id: Specify the unique identifier of the request object.
* requestObject -> name: Specify the name of request object.
* requestObject -> type: Specify as "tasksummaryobject".
* data -> attributes: Attributes are generated specific to each request. The attributes generated for tracking the status of entities are - totalRecords, status, taskId, taskType and submittedBy.
<br/>

<pre>
<code>
POST **{{site.data.rdp_glossary.createrequesttrackingobject}}**
Headers: Content-Type: application/json
BODY: 
{
  "requestObject": {
    <span style="background-color: #FFFF00">"id": "guid",</span>
    <span style="background-color: #FFFF00">"name": "guid",</span>
    <span style="background-color: #FFFF00">"type": "tasksummaryobject",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "totalRecords": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "a7afc530-5e65-4ead-a73f-a8d8b6ef0572",
              "value": 50
            }
          ]
        },
        "status": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "8c1613a7-fbdb-476b-a0d4-a7051ac1870a",
              "value": "Queued"
            }
          ]
        },
        "taskId": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "5b937027-637d-40e0-8f86-8abc79042b8e",
              "value": "guid"
            }
          ]
        },
        "taskType": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "3d6365d8-c182-47d9-86a9-73dbb56f36e3",
              "value": "ENTITY_IMPORT"
            }
          ]
        },
        "submittedBy": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "26b9f74c-d1ed-47cf-afda-683da900137a",
              "value": "test@riversand.com"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre> 

## Response

The following response is returned after the request is submitted successfully:

<pre>
<code>
{
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Entity has been submitted for create with entity Id : guid. Please check back after 1 min",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.