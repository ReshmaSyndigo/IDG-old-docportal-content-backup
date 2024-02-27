---
title: Get All Govern Events in the System
sidebar: rdp_sidebar
permalink: api_event_get_scenario14.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get all govern events generated in the system, using a scenario.

## Scenario

To get all govern events in the system.

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> typesCriterion : Specify as "entitygovernevent"

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"entitygovernevent"</span>
        ]
      }
    },
    "options":{
      "maxRecords": 4
    }
  }
}
</code>
</pre>

## Response

Returns all govern events in the system. As in the request, you are specifying "maxRecords" as "4", it returns "4" govern events.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "9a39e21e-0531-474c-be79-12b4b18f3bb1",
    "maxRecords": 4
  },
  "response": {
    "events": [
      {
        "id": "89c2a542-6b28-4d0b-8958-58e1da003614",
        "type": "entitygovernevent",
        "domain": "eventDataObject"
      },
      {
        "id": "92e29435-bbd6-485e-8918-abac8b80f9ff",
        "type": "entitygovernevent",
        "domain": "eventDataObject"
      },
      {
        "id": "b7ca3487-7dcf-4e57-9964-41f05ca49a61",
        "type": "entitygovernevent",
        "domain": "eventDataObject"
      },
      {
        "id": "7c82b8bd-87d2-4726-998e-d911a1240a36",
        "type": "entitygovernevent",
        "domain": "eventDataObject"
      }
    ],
    "status": "success",
    "totalRecords": 1862834
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.