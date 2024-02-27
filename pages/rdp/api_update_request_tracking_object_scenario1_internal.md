---
title: Update Request Tracking Object
sidebar: rdp_sidebar 
permalink: api_update_request_tracking_object_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.updaterequesttrackingobject}}** to update an attribute of tasksummaryobject, using a scenario. See [Request Tracking Object Structure](api_request_tracking_object_structure.html) for more information.

## Scenario

Consider a scenario where a task summary object "guid" is created to track the status of entities. Now you wish to update the "fileName" attribute in "guid" task summary object.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API {{site.data.rdp_glossary.updaterequesttrackingobject}}. In the request, send the following details:

* requestObject -> id: Specify the unique identifier of the request object you wish to update.
* requestObject -> name: Specify the name of request object you wish to update.
* requestObject -> type: Specify as "tasksummaryobject".
* data -> attributes: Specify as "fileName". Also specify the name of the file in "value" criterion.
<br/>

<pre>
<code>
POST **{{site.data.rdp_glossary.updaterequesttrackingobject}}**
Headers: Content-Type: application/json
BODY: 
{
  "requestObject": {
    <span style="background-color: #FFFF00">"id": "guid",</span>
    <span style="background-color: #FFFF00">"name": "guid",</span>
    <span style="background-color: #FFFF00">"type": "tasksummaryobject",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"fileName": {</span>
          "source": "internal",
          "locale": "en-US",
          "id": "79095090-3c0c-41a6-bfc4-bb7dcb379ec6",
          "value": "test_summary.xlsm"
        }
      }
    }
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
          "messageCode": "I0011",
          "message": "Entity has been submitted for update with entity Id : guid. Please check back after 1 min",
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