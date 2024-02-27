---
title: Delete Request Tracking Object
sidebar: rdp_sidebar 
permalink: api_delete_request_tracking_object_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deleterequesttrackingobject}}** to delete a request tracking object, using a scenario. 

## Scenario

To delete "guid" task summary object.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API {{site.data.rdp_glossary.deleterequesttrackingobject}}. In the request, send the following details:

* requestObject -> id: Specify the unique identifier of the request object you wish to delete.
* requestObject -> name: Specify the name of request object you wish to delete.
* requestObject -> type: Specify as "tasksummaryobject".
<br/>

<pre>
<code>
POST **{{site.data.rdp_glossary.deleterequesttrackingobject}}**
Headers: Content-Type: application/json
BODY: 
{
  "requestObject": {
    <span style="background-color: #FFFF00">"id": "guid",</span>
    <span style="background-color: #FFFF00">"name": "guid",</span>
    <span style="background-color: #FFFF00">"type": "tasksummaryobject"</span>
  }
}
</code>
</pre> 

## Response

The following response is returned if the request is submitted successfully:

<pre>
<code>
{
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0015",
          "message": "Entity has been submitted for delete with entity Id : guid. Please check back after 1min",
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