---
title: Delete Events
sidebar: rdp_sidebar
permalink: api_events_delete.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, entity manage events and entity govern events records the changes occurred on the managed and governed data. By deleting unwanted events a user can free up memory in the system. This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to delete an event.

* [Entity Manage Events](api_events_delete_manage.html)
* [Entity Govern Events](api_events_delete_govern.html)
* [External Events](api_events_delete_ext.html)

{% include snippets/header.html %}

## Request

The following example demonstrates a sample request to delete an entitymanageevent having it's ID as e1.

<pre><code>
POST **{{site.data.rdp_glossary.deleteevent}}**
Headers: Content-Type: application/json
Body:
{
  "event": {
    "id": "e1",
    "type": "entitymanageevent"
  }
}
</code></pre>

**Parameters**: The following table lists the parameters of the JSON request to delete an event:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | id | Yes | Indicates the unique identifier of the event. Id is alpha-numeric with a maximum length of 128 characters. |
| Body | type | Yes | Indicates the type of event which is to be deleted. |

## Response

The response is returned in a JSON format and includes the following details:

<pre><code>
{
   "request": {
      "requestId": "a168a958-9b46-46c8-8ccb-1b19b4f55202"
   },
  "response": {
    "status": "success",
      "statusDetail": {
         "message": "Entity has been submitted for delete with entity Id : e1. Please check back after 30 min"
      }
   }
}
</code></pre>

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. 

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.