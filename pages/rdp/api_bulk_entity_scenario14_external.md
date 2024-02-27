---
title: Delete Bulk Entities using Entity IDs
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario14.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to delete bulk entities using Entity IDs.

## Scenario

Delete bulk "sku" entities that are having the Entity IDs as "ed0sa3xXrk44d" and "eVKg5cjBoutE8".

{% include snippets/header.html %}

## Request

To delete the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params -> taskType: Specify as "delete-query"
* params -> operationType: Specify as "inboundService". 
* In the query, specify the required Entity IDs and typesCriterion.

{% include callout.html content="**Note**: If the passed ids array is empty **“ids”: []**, it deletes all the entities. Ensure that the **“ids”: []** must not be empty while initiating the request for bulk entities deletion.
" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"taskType": "delete-query",</span>
    "operationType": "inboundService",
    "query": {
      <span style="background-color: #FFFF00">"ids": [</span>
        "ed0sa3xXrk44d",
        "eVKg5cjBoutE8"
      ],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    }
  }
}
</code>
</pre> 

## Response

If the bulk entities are deleted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "9e3d6b50-d7f3-419b-8f9e-9e8f14194950",
    "taskId": "9e3d6b50-d7f3-419b-8f9e-9e8f14194950"
  },
  "response": {
    "status": "success",
    "totalRecords": 5
  }
}
</code></pre>

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.