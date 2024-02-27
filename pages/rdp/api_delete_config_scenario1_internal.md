---
title: "Delete Configuration using Id"
sidebar: rdp_sidebar
permalink: api_delete_config_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deleteconfig}}** to delete a configuration, using a scenario.

## Scenario

Delete a configuration of type "matchConfig" with Id "sku_matchConfig".

{% include snippets/header.html %}

## Request

To delete the above configuration, use the REST API {{site.data.rdp_glossary.deleteconfig}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* configObject: In the configObject, provide Id as "sku_matchConfig" and type as "matchConfig".

<pre>
<code>
POST **{{site.data.rdp_glossary.deleteentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "configObject": {
    <span style="background-color: #FFFF00">"id": "sku_matchConfig",</span>
    <span style="background-color: #FFFF00">"type": "matchConfig"</span>
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
    "requestId": "1d0e9b78-c995-4006-9cd8-c9c2c2b26e7a"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted matchConfig for delete with Id sku_matchConfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "matchConfig",
            "delete",
            "sku_matchConfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the deleted configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the deleted configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.