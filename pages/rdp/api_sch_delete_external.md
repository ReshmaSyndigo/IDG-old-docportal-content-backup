---
title: Delete a Schedule Object using Scheduler Service
sidebar: rdp_sidebar
permalink: api_sch_delete.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete a schedule object:

* [Delete schedule objects which are Inactive](api_sch_delete_scenario11.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.schdelete}}

**Parameters**: The following table lists the parameters of the JSON request to delete a schedule object:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | scheduleObject | Yes | Indicates the details of the schedule objects to be deleted. See [Schedule Object Structure](api_sch_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. 

## Example

The following example demonstrates a sample request and response to delete the schedule object using the Id:

<pre><code>
POST {TenantURL or ID}/api/schedulerservice/delete
Headers: Content-Type: application/json
Body:
{
  "scheduleObject": {
    "id": "groomEntityGovernEvents",
    "type": "scheduleobject"
  }
}

</code></pre>

**Response**: 
<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "3cfa3a82-20af-4ee2-8322-d82e281dfb86"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "message": "Schedule has been submitted for update with schedule Id : groomEntityGovernEvents. Schedule changes will take affect within 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre>

## Troubleshooting
See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.