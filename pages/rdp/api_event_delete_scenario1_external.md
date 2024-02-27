---
title: Delete Entity Manage Event
sidebar: rdp_sidebar
permalink: api_event_delete_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, certain events can be deleted if a user wishes to. By deleting unwanted events a user can free up memory in the system. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deleteevent}}** to get such events using a [scenario](#scenario).

## Scenario

To delete manage events for "sku" entity.

{% include snippets/header.html %}

## Request

Consider a "sku" entity. You wish to delete "EntityCreate" event from an entity. To get the request, you can use the REST API {{site.data.rdp_glossary.deleteevent}}. In the request send the following details:

* query -> id : Specify the required event Id for which you wish to delete from an entity. In this scenario we have deleted "EntityCreate" event having id as "d6c03f93-785d-4eec-acee-a02c589eba5f".
* query -> type : As this change type occurred on the managed data, specify as "entitymanageevent". 

<pre>
<code>
POST **{{site.data.rdp_glossary.deleteevent}}**
Headers: Content-Type: application/json
Body:
{
  "event": {
    <span style="background-color: #FFFF00">"id": "d6c03f93-785d-4eec-acee-a02c589eba5f",</span>
    <span style="background-color: #FFFF00">"type": "entitymanageevent"</span>
  }
}
</code>
</pre> 

## Response

Returns the status of the response saying whether the EntityCreate events have been deleted or not.

<pre>
<code>
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
          "message": "Submitted entitymanageevent for delete with Id d6c03f93-785d-4eec-acee-a02c589eba5f. Check after some time",
          "messageType": "success",
          "messageParams": [
            "entitymanageevent",
            "delete",
            "d6c03f93-785d-4eec-acee-a02c589eba5f"
          ]
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