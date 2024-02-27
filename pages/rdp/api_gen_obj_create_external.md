---
title: Create a Generic Object
sidebar: rdp_sidebar
permalink: api_gen_obj_create.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create a generic object using generic object manage service:

* [Create a Generic Object to Import the Entities](api_gen_obj_create_scenario1.html)

{% include callout.html content="**Note**:<br/>
As the generic objects are created, used, and maintained mainly for the **internal purposes** by the Riversand Platform, it is not recommended for you to explicitly create the generic objects using \"{TenantURL or ID}/api/genericobjectmanageservice/create\" API unless you have the business requirement that strongly needs the creation of the generic objects.
" type="primary" %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.genobjcreate}}

**Parameters**: The following table lists the parameters of the JSON request to create a schedule object:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | genericObject | Yes | Indicates the details of the generic object to be created. See [Generic Object Structure](api_gen_object_structure.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response or not.|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |
|response|totalRecords|Indicates the list of generic objects that matched the search criteria.

## Example

Consider that you have the requirement to publish the entities. As it involves processing of larger entities, you wished to create generic objects to handle this request. The following example demonstrates the sample request and response in JSON format to create the generic object for the same:

<pre><code>
POST {TenantURL or ID}/api/genericobjectmanageservice/create
Headers: Content-Type: application/json
Body:
{
  "genericObject": {
    "id": "genericObjectToPublishEntities",
    "name": "Generic Object To Publish Entities",
    "type": "schedulerequestobject",
    "data": {
      "attributes": {
        "dataObjectId": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "2be127f2-6cf9-4dad-8ffe-4544342b15dc",
              "value": "Entities_Publish"
            }
          ]
        },
        "dataObjectType": {
          "values": [
            {
              "locale": "en-US",
              "source": "source",
              "id": "e3738a56-0638-4250-b53d-4f9e04d51bdd",
              "value": "entity"
            }
          ]
        },
        "taskType": {
          "values": [
            {
              "locale": "en-US",
              "source": "source",
              "id": "2e60eca8-dde7-40f9-a004-aba7b36d8ff1",
              "value": "RSCONNECT_PUBLISH_AGGREATED_JSON_Export_Publish"
            }
          ]
        },
        "status": {
          "values": [
            {
              "locale": "en-US",
              "source": "source",
              "id": "56cd1c70-8b97-4815-b625-f7841033f364",
              "value": "QUEUED"
            }
          ]
        }
      }
    }
  }
}
</code></pre>

**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "7095073b-8c71-40c7-a7c3-d3a7a4008181"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Entity has been submitted for create with entity Id : genericObjectToPublishEntities. Please check back after 1 min",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

{% include callout.html content="**Note:** <br/>
You can use \"{TenantURL or ID}/api/genericobjectmanageservice/get\" API to verify the created generic object. See [Get generic objects](api_gen_obj_get.html).
" type="primary" %}

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.