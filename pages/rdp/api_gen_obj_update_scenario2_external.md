---
title: Update the Status of a Generic Object
sidebar: rdp_sidebar
permalink: api_gen_obj_update_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.genobjupdate}}** to update a generic object, using a scenario.

## Scenario

To update the status of the generic object, that you have created, from the current state of "QUEUED" to "COMPLETED".

{% include snippets/header.html %}

## Request

To update the  object, you can use the REST API {{site.data.rdp_glossary.genobjupdate}}. In the request send the following details:

* dataObjectId: Specify the corresponding value for the dataObjectId, which you wish to update. 
* dataObjectType: Specify the corresponding data object type as "sku".
* status: Change the status from "QUEUED" to "COMPLETED".

<pre>
<code>
POST {TenantURL or ID}/api/genericobjectmanageservice/update
Headers: Content-Type: application/json
Body:
{
  "genericObject": {
    <span style="background-color: #FFFF00">"id": "genericObjectForlinkingImagesEntities",</span>
    <span style="background-color: #FFFF00">"name": "Generic Objects to link images",</span>
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
              "value": "Image-product-link"
            }
          ]
        },
        <span style="background-color: #FFFF00">"graphprocessconfig": {</span>
          "values": [
            {
              "value": "sku_hasimages"
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

If the generic object update request is submitted successfully, then the following response is received from update API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "1a802064-c837-4fdd-8476-91f5c721ab43"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Entity has been submitted for update with entity Id : genericObjectForlinkingImagesEntities. Please check back after 1 min",
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