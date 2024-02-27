---
title: Get Configuration using Id
sidebar: rdp_sidebar
permalink: api_get_config_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getconfig}}** to get configuration using Id in a context, using a scenario.

## Scenario

To get the details of a "search-grid" configuration using Id.

{% include snippets/header.html %}

## Request

To get the above configuration, you can use the REST API {{site.data.rdp_glossary.getconfig}}. In the request send the following details:

* query -> contexts: Specify the app, service, component as required.
* query -> Id: Specify the configuration identifier
* query -> filters -> typesCriterion: Specify the configuration type as "uiConfig"

<pre>
<code>
POST **{{site.data.rdp_glossary.getconfig}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "app": "entitysearch",
          "service": "searchdiscovery",
          "component": "searchresults",
          "subComponent": "datagrid",
          "entityType": "product",
          "relationshipType": "crossSell",
          "role": "ALL",
          "user": "ALL"
        }
      ],
      <span style="background-color: #FFFF00">"id": "configGuid15",</span>
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "uiConfig"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre>

## Response

Returns the configuration matching the Id in the specified list.

<pre><code>
{
  "response": {
    "configObjects": [
      {
        "id": "configGuid15",
        "name": "Search-Grid-Columns",
        "type": "gridconfig",
        "properties": {
          "createdByService": "entityservice",
          "createdBy": "user"
        },
        "data": {
          "contexts": [
            {
              "context": {
                "app": "entitysearch",
                "service": "searchdiscovery",
                "component": "searchresults",
                "subComponent": "datagrid",
                "entityType": "product",
                "relationshipType": "crossSell",
                "role": "ALL",
                "user": "ALL"
              },
              "jsonData": {
                "type": "uiConfig",
                "config": "JSON format of the config"
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.