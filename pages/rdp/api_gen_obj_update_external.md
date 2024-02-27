---
title: Update a Generic Object
sidebar: rdp_sidebar
permalink: api_gen_obj_update.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to update a generic object:

* [Update the Status of a Generic Object](api_gen_obj_update_scenario2.html)

{% include callout.html content="**Notes**:<br/>
* As the generic objects are created and maintained by Riversand Platform, unless there is a situation such as fixing the performance issue in the system or a business requirement that requires the updations to the generic objects that are created, you will not update the generic objects.
* When the **{TenantURL or ID}/api/genericobjectmanageservice/update** request is sent to system and if a particular document or generic object is not available in the system. The update request gets converted to create request and performs the insert or create operation in the system.
" type="primary" %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.genobjupdate}}

**Parameters**: The following table lists the parameters of the JSON request to update a generic object:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | genericObject | Yes | Indicates the generic object with the values to be updated. See [Generic Object Structure](api_gen_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request and response that updates the status of the generic objects from 'QUEUED' to 'COMPLETED'.

<pre><code>
POST {TenantURL or ID}/api/genericobjectmanageservice/update
Headers: Content-Type: application/json
Body:
{
  "genericObject": {
    "id": "genericObjectToPublishEntities",
    "name": "Generic Object To Publish Entities",
    "type": "scheduledrequestobject",
    "properties": {
      "createdService": "genericObjectManageService",
      "createdBy": "system_user",
      "modifiedService": "genericObjectManageService",
      "modifiedBy": "system_user",
      "createdDate": "2018-03-19T01:06:40.131-0500",
      "modifiedDate": "2018-03-19T01:06:40.131-0500"
    },
    "data": {
      "attributes": {
        "dataObjectId": {
          "values": [
            {
              "value": "2be127f2-6cf9-4dad-8ffe-4544342b15dc"
            }
          ]
        },
        "status": {
          "values": [
            {
              "value": "COMPLETED"
            }
          ]
        }
      }
    }
  }
}
</code></pre> 


**Response**:

If the generic object update request is submitted successfully, then the following response is received from update API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "ff1de86d-6a2c-409e-b7e0-9eaa1bb7f6e9"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Entity has been submitted for update with entity Id : genericObjectToPublishEntities. Please check back after 1 min",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/genericobjectmanageservice/get\" API to verify the updated generic object. See [Get generic objects](api_gen_obj_get.html).
" type="primary" %}

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.