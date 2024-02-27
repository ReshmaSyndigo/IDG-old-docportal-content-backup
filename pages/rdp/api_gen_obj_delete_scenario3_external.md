---
title: Delete Generic Objects of Particular Type 
sidebar: rdp_sidebar
permalink: api_gen_obj_delete_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.genobjdelete}}** to delete the generic objects, using a scenario.

## Scenario

Delete the generic objects which are created to refresh the "product" title for the "sku" entities. These generic objects are of "scheduledrequestobject" type.

{% include snippets/header.html %}

## Request

To delete the above generic object, use the REST API {{site.data.rdp_glossary.genobjdelete}}. In the request send the following details:
  
* id: Specify the corresponding id for genericObject which wish to delete.
* type: Specify type as "scheduledrequestobject".

<pre>
<code>
POST {TenantURL or ID}/api/genericobjectmanageservice/delete
Headers: Content-Type: application/json
Body:
{
  "genericObject": {
    <span style="background-color: #FFFF00">"id": "genericObjectContentGeneration",</span>
    <span style="background-color: #FFFF00">"type": "schedulerequestobject"</span>
  }
}
</code>
</pre> 

## Response

If the generic object delete request is submitted successfully, then the following response is received from delete API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "69574dbc-11ad-4f2c-bfba-154602aea73c"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0015",
          "message": "Entity has been submitted for delete with entity Id : genericObjectContentGeneration. Please check back after 1min",
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