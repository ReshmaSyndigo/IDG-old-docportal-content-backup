---
title: Get all External Events
sidebar: rdp_sidebar
permalink: api_event_get_scenario21.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, an external event is used to track the status of a particular job in a system by the user. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get all the external events present in a particular tenant using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response. 

## Scenario

To get all the external events.

{% include snippets/header.html %}

## Request

Consider you wish to get all the external events present in a particular tenant.

* query -> typesCriterion : Specify as "externalevent". 

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
          <span style="background-color: #FFFF00">"externalevent"</span>
        ]
      }
    }
  }
}
</code>
</pre>

## Response

Returns all the external events of that particular instance. As you can see, the response returns the "name" and "id" of the four external events.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "c8f8b084-ddff-43f1-a063-a7990e86a5b0",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "b49fd22d-78ae-4342-b02b-154cf4e24a31",
        "name": "933a5710-5acd-41a3-b0a1-081858ba683e",
        "type": "externalevent"
      },
      {
        "id": "c4ee0881-ef48-4f06-95c3-fdf697bad293",
        "type": "externalevent"
      },
      {
        "id": "ecba8d19-4d74-4d95-a660-7965f49a1870",
        "name": "cc136339-0ab6-48c5-ad15-e933e6804a3d",
        "type": "externalevent"
      },
      {
        "id": "batch002",
        "name": "batch002",
        "type": "externalevent"
      }
    ],
    "status": "success",
    "totalRecords": 4
  }
}

</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.