---
title: Delete Entity from All Workflows
sidebar: rdp_sidebar
permalink: api_govern_delete_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deletegovernalldata}}** to delete an entity from all workflows, using a scenario.

## Scenario

To delete "sku" entity "skuentity1" from all workflows.

{% include callout.html content="**Note**:
An entity can belong to the same workflow in different contexts, or the same entity can be in more than one workflow. Unlike **deleteEntityFromWorkflow**, this API does not delete the govern details. During data migration, some entities may come into one or more workflows. So, this API acts like a cleanup API after data migration. If you wish to delete such entities from all workflows, then this API must be used to delete such entities from the Workflow database.
" type="primary" %}

{% include snippets/header.html %}

## Request

To delete the above entity govern data, you can use the REST API {{site.data.rdp_glossary.deletegovernalldata}}. In the request send the following details:

* entity -> id: skuentity1
* entity -> type: sku

<pre>
<code>
POST **{{site.data.rdp_glossary.deletegovernalldata}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "skuentity1"</span>,
    <span style="background-color: #FFFF00">"type": "sku",</span>
  }
}
</code>
</pre>

## Response

If the delete request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "61bc2bfc-3a3c-4fdc-97a6-8cacc8aefbc6"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "deleteEntityFromAllWorkflows request successful"
    },
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.