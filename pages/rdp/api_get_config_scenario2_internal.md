---
title: Get Nearest Configuration using Id
sidebar: rdp_sidebar
permalink: api_get_config_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getconfig}}** to get nearest configuration using Id in a context, using a scenario.

## Scenario

To get the details of nearest "search-grid" configuration using Id.

{% include callout.html content="**Note**: Consider for this example, that the context is available only up-to 'entityType' level in the hierarchy.
" type="primary" %}

{% include snippets/header.html %}

## Request

To get the above configuration, you can use the REST API {{site.data.rdp_glossary.getconfig}}. In the request send the following details:

* query -> contexts: Specify the app, service, component, sub-component, entityType, role, user as required.
* query -> Id: Specify the configuration identifier
* query -> filters -> typesCriterion: Specify the configuration type as "uiConfig"

<pre>
<code>
POST **{{site.data.rdp_glossary.getnearestconfig}}**
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

Returns the nearest configuration matching the Id in the specified list.

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
                "entityType": "product"
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