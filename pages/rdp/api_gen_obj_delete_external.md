---
title: Delete a Generic Object
sidebar: rdp_sidebar
permalink: api_gen_obj_delete.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete a generic object:

* [Delete Generic Objects of Particular Type ](api_gen_obj_delete_scenario3.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.genobjdelete}}

**Parameters**: The following table lists the parameters of the JSON request to delete a schedule object:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | genericObject | Yes | Indicates the details of the generic objects to be deleted. See [Generic Object Structure](api_gen_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. 

## Example

The following example demonstrates a sample request and response to delete the generic object using its Id:

<pre><code>
POST {TenantURL or ID}/api/genericobjectmanageservice/delete
Headers: Content-Type: application/json
Body:
{
  "genericObject": {
    "id": "genericObjectToPublishEntities",
    "type": "schedulerequestobject"
  }
}

</code></pre>

**Response**: 
<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "063b693d-5638-409d-8e29-4d8474117176"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0015",
          "message": "Entity has been submitted for delete with entity Id : genericObjectToPublishEntities. Please check back after 1min",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.