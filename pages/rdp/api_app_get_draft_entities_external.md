---
title: "Get Draft Entities by Type"
sidebar: rdp_sidebar
permalink: api_app_get_draft_entities.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities all draft entities. Draft entities are created during merge review process. At the end of the merge review process, the draft entity is automatically deleted by the system. See [Perform Match Review for Draft Entities](/{{site.data.rdp_links_version.APPU}}/dda_match_review_draft.html){:target="_blank"}, in Business Administrator documentation for more information.

## Scenario

To get all "draft" entities for customer entity.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "rsdraftcustomer". 
* options -> maxRecords: Specify the number of records to retrieve.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"rsdraftcustomer"</span>
        ]
      }
    },
    "options": {
      "maxRecords": 2
    }
  }
}
</code>
</pre> 

## Response

Returns a list of all "sku" entities.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "4bc22d5b-ba73-48ed-b758-8f77e8374a31",
    "maxRecords": 2
  },
  "response": {
    "entities": [
      {
        "id": "YI8VMWqkQti9AGx1fO94Gw",
        "name": "RiversandDataWorks137",
        "type": "rsdraftcustomer"
      },
      {
        "id": "7ej0znClQk-nDKUXywPIYA",
        "name": "RiversandDataWorks131",
        "type": "rsdraftcustomer"
      }
    ],
    "status": "success",
    "totalRecords": 53
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.