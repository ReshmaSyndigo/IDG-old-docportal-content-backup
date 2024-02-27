---
title: Delete Events using Query 
sidebar: rdp_sidebar
permalink: api_event_delete_scenario7.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.eventdeletebyquery}}** to delete an event using a query, in a [scenario](#scenario).

## Scenario

To delete all external events created from "2019-01-01T00:00:01.000+0000" to "2019-03-01T00:00:01.000+0000".

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API {{site.data.rdp_glossary.eventdeletebyquery}}. In the request, send the following details:

* typesCriterion: Specify as externalevent.
* createdDate -> gt: Specify the time period starting from which you wish to delete the external events.
* createdDate -> lt: Specify the time period until which you wish to delete the external events.
* createdDate -> type: Specify as "_DATETIME".

<pre>
<code>
POST **{{site.data.rdp_glossary.eventdeletebyquery}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"externalevent"</span>
        ],
        "propertiesCriterion": [
          {
            "createdDate": {
              <span style="background-color: #FFFF00">"gt": "2019-01-01T00:00:01.000+0000",</span>
              <span style="background-color: #FFFF00">"lt": "2019-03-01T00:00:01.000+0000",</span>
              <span style="background-color: #FFFF00">"type": "_DATETIME"</span>
            }
          }
        ]
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
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "fc06c077-0113-4e53-9246-80e92d3e096a",
    "maxRecords": 1
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageType": "success",
          "totalVersionConflicts": 0,
          "message": "Total Records deleted: 1"
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