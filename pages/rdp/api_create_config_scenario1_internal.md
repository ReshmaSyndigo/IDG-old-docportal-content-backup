---
title: Create Configuration linked to a Context
sidebar: rdp_sidebar
permalink: api_create_config_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create an configuration linked to context, using a scenario.

## Scenario

To create a configuration for a "search grid" in "entitysearch" App. 

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name, type, and version. In the data object, specify the context for the configuration and the actual configuration in a valid JSON format.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"configObject": {</span>
    "id": "configGuid15",
    "name": "Search-Grid-Columns",
    "version": "2",
    "type": "uiConfig",
    "properties": {
      "createdByService": "entityservice",
      "createdBy": "user"
    },
    "data": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "app": "entitysearch",
            "service": "searchdiscovery",
            "component": "searchresults",
            "subComponent": "datagrid",
            "entityType": "product",
            "relationshipType": "crossSell",
            "role": "_ALL",
            "user": "_ALL"
          },
          "jsonData": {
            "type": "uiConfig",
            "config": "Valid JSON Config"
          }
        }
      ]
    }
  }
}
</code>
</pre> 

## Response

If the configuration create request is submitted successfully, then the following response is received from create configuration API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1d0e9b78-c995-4006-9cd8-c9c2c2b26e7a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted uiConfig for create with Id configGuid15. Check after some time",
          "messageType": "success",
          "messageParams": [
            "uiConfig",
            "create",
            "configGuid15"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html)
* If you know the details of your elastic server and the indices, then you can verify the created configuration using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<Id>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.