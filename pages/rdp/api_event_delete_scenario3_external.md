---
title: Delete Entity Govern Event
sidebar: rdp_sidebar
permalink: api_event_delete_scenario3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, certain govern events can be deleted if a user wishes to. By deleting unwanted events a user can free up memory in the system. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get such events using a [scenario](#scenario).

## Scenario

To delete govern events for "sku" entity.

{% include snippets/header.html %}

## Request

Consider a "sku" entity. You wish to delete "GovernAdd" event from an entity. To get the request, you can use the REST API {{site.data.rdp_glossary.deleteevent}}. In the request send the following details:

* query -> id : Specify the required event Id for which you wish to delete from an entity. In this scenario we have deleted "GovernAdd" event having id as "8822f75c-97cd-41fc-b46e-a0bd9a69c969".
* query -> type : As this change type occurred on the governed data, specify as "entitygovernevent". 

<pre>
<code>
POST **{{site.data.rdp_glossary.deleteevent}}**
Headers: Content-Type: application/json
Body:
{
  "event": {
    <span style="background-color: #FFFF00">"id": "8822f75c-97cd-41fc-b46e-a0bd9a69c969",</span>
    <span style="background-color: #FFFF00">"type": "entitygovernevent"</span>
  }
}
</code>
</pre> 

## Response

Returns the status of the response saying whether the GovernAdd events have been deleted or not.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "2eab8656-8397-44e2-be2c-e8ea1bdaf758"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0015",
          "message": "Submitted entitygovernevent for delete with Id 8822f75c-97cd-41fc-b46e-a0bd9a69c969. Check after some time",
          "messageType": "success",
          "messageParams": [
            "entitygovernevent",
            "delete",
            "8822f75c-97cd-41fc-b46e-a0bd9a69c969"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.