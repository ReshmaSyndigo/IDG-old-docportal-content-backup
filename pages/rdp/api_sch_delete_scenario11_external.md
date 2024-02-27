---
title: Delete schedule objects which are Inactive
sidebar: rdp_sidebar
permalink: api_sch_delete_scenario11.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schdelete}}** to delete a schedule object, using a scenario. 

## Scenario

Delete the schedule objects which are inactive.

{% include snippets/header.html %}

## Request

To delete the above schedule object, use the REST API {{site.data.rdp_glossary.schdelete}}. In the request send the following details:
  
* enabled: Specify as "false".
* type: Specify type as "scheduleobject".

<pre>
<code>
POST {TenantURL or ID}/api/schedulerservice/delete
Headers: Content-Type: application/json
Body:
{
  "scheduleObject": {
    <span style="background-color: #FFFF00">"type": "scheduleobject",</span>
    "properties": {
        <span style="background-color: #FFFF00">"enabled": false</span>
    }
  }
}
</code>
</pre>
 

## Response

If the schedule delete request is submitted successfully, then the following response is received from delete entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "887dd172-2b6a-4141-a789-4df66ad10847"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Schedule has been submitted for update with schedule Id : e6f32efd-ed50-4e99-9f4b-eaef6deb7e30. Schedule changes will take affect within 1 min"
    },
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.