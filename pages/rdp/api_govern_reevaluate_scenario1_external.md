---
title: Reevaluate Deleted Govern Data of an Entity
sidebar: rdp_sidebar
permalink: api_govern_reevaluate_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.revaluategoverndata}}** to restore the deleted govern data of an entity, using a scenario.

## Scenario

To restore the deleted govern data for "product" entity with Id "entity_01".

{% include snippets/header.html %}

## Request

To execute the above scenario, you can use the Restful API **{{site.data.rdp_glossary.revaluategoverndata}}**. In the request send the following details:

<pre>
<code>
POST **{{site.data.rdp_glossary.revaluategoverndata}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "entity_01",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>
  }
}
</code>
</pre>

## Response

If the reevaluate request is submitted successfully, then the following response is received from reevaluate API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "eef6e23c-84c5-4a27-b53d-f3bb5c08fc2d"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Request sent to Kafka successfully"
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the re-evaluated entity:
* You can use **{{site.data.rdp_glossary.getgoverndata}}** API to verify the entity govern data that has been re-evaluated for the requested entity. See [Get Entity Govern Data](api_get_govern_data.html).

{% include callout.html content="**Notes**: 
* The details of the user who invoked the workflow cannot be retrieved back using Reevaluate API.
* When **Reevaluate API** is executed, workflow start time is capture based on the current activity in the workflow. The current activity can be invoke workflow, assignment or transitioned.
" type="primary" %}

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.