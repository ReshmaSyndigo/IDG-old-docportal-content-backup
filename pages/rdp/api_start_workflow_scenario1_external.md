---
title: Start Workflow for an Entity
sidebar: rdp_sidebar
permalink: api_start_workflow_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.startworkflow}}** to start a workflow for an entity, using a scenario.

## Scenario

To start a workflow "NewSKUIntroduction" for a "sku" entity "Polo Mens Shirt Blue_Large".

{% include snippets/header.html %}

## Request

To start the above workflow, you can use the REST API {{site.data.rdp_glossary.startworkflow}}. In the request send the following details:

* params: In the params object, fill the workflow name as "NewSKUIntroduction".
* entity: In the [entity](api_start_workflow.html) object, fill the details about the entity identifier, name, type, and contexts as required. 

<pre>
<code>
POST **{{site.data.rdp_glossary.startworkflow}}**
Headers: Content-Type: application/json
Body:
{    
  "params": {
    "workflow": {
      <span style="background-color: #FFFF00">"workflowName": "NewSKUIntroduction"</span>
    }
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "skuentity1",
    "name": "Polo Mens Shirt Blue_Large",
    "type": "sku"
  }
}
</code>
</pre>

## Response

If the start workflow request is submitted successfully, then the following response is received from start workflow API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "d7a13039-14e5-4052-b917-12ca73c3d588"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "start request successful"
    },
      "totalRecords": 0
  }
}
</code></pre>

Verify the started workflow:
* You can use {{site.data.rdp_glossary.getgoverndata}} API to verify the started workflow details for the requested entity. See [Get Entity Govern Data](api_get_govern_data.html)
* If you know the details of your elastic server and the indices, then you can verify the started workflow details for the  entity using - http://<<ESSERVER>>:9200/<<tenant_govern_write_index>>/_search?q=<<WorkflowName>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.