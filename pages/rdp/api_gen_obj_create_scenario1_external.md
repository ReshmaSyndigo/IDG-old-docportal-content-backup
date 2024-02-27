---
title: Create a Generic Object to Import the Entities 
sidebar: rdp_sidebar
permalink: api_gen_obj_create_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.genobjcreate}}** to create a generic object, using a scenario.

## Scenario

Create a generic object that imports the "sku" entities into the application. As it involves processing of larger entities, create a generic object to handle this request.

{% include snippets/header.html %}

## Request

To create the above generic object, use the REST API {{site.data.rdp_glossary.genobjcreate}}. In the request send the following details:

* id: Specify as "genericObjectToPublishEntities".
* dataObjectId: – Indicates the id of the data object to be processed.
* dataObjectType: Indicates the type of data object performs the task.
* taskType: Indicates the type of task which is performed by the generic objects. 
* status: Once the generic object is created, specify the status as "QUEUED", "COMPLETED", PROCESSING" and so on.

<pre>
<code>
POST {TenantURL or ID}/api/genericobjectmanageservice/create
Headers: Content-Type: application/json
Body:
{
  "genericObject": {
    <span style="background-color: #FFFF00">"id": "genericObjectForImportingEntities",</span>
    <span style="background-color: #FFFF00">"name": "Generic Objects for Entity Import",</span>
    <span style="background-color: #FFFF00">"type": "scheduledrequestobject",</span>
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
        <span style="background-color: #FFFF00">"dataObjectId": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "source",
              "id": "362f2948-9ca5-4264-a2ef-96cb36e3c133",
              "value": "Sku_Import"
            }
          ]
        },
        <span style="background-color: #FFFF00">"dataObjectType": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "source",
              "id": "e3738a56-0638-4250-b53d-4f9e04d51bdd",
              "value": "sku"
            }
          ]
        },
        <span style="background-color: #FFFF00">"taskType": {</span>
          "values": [
            {
              "locale": "en-US",
              "source": "source",
              "id": "2e60eca8-dde7-40f9-a004-aba7b36d8ff1",
              "value": "RSCONNECT_IMPORT_JSON"
            }
          ]
        },
        <span style="background-color: #FFFF00">"status": {</span>
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
</code>
</pre>

## Response

If the generic object create request is submitted successfully, then the following response is received from create API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "574f603e-5c43-4af6-86c0-9063a97f2eb9"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Entity has been submitted for create with entity Id : genericObjectForImportingEntities. Please check back after 1 min",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

{% include callout.html content="**Notes:** <br/>
* You can use \"{TenantURL or ID}/api/genericobjectmanageservice/get\" API to verify the created generic object. See [Get generic objects](api_gen_obj_get.html).
" type="primary" %}

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.