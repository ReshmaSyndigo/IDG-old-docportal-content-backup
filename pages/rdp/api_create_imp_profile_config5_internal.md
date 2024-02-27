---
title: Create Configuration to Enable Taxonomy and Classifications
sidebar: rdp_sidebar
permalink: api_create_imp_profile_config5.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create a configuration to enable taxonomy and classifications supported by the system, using a scenario.

## Scenario

To create a configuration for enabling taxonomy and classifications.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request, send the following details:

{% include snippets/clientState.html %}
* In the request, set the value of "isPathAttributeLocalizationEnabled" flag to true. 

<br/>
The following JSON demonstrates a configuration for enabling taxonomy and classifications:

<pre>
<code> 
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "tenant_rsglobalconfig",
    "name": "tenant_rsglobalconfig",
    "type": "rsglobalconfig",
    "data": {
      "jsonData": {
        "isPathAttributeLocalizationEnabled": true
      }
    }
  }
}
</code>
</pre>

## Response

If the configuration create request is submitted successfully, then the following response is received from API:

<pre>
<code>
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
          "message": "Submitted rsglobalconfig for create with Id tenant_rsglobalconfig. Check after some time",
          "messageType": "success",
          "messageParams": [
            "rsglobalconfig",
            "create",
            "tenant_rsglobalconfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

{% include callout.html content="**Note:** It is not recommended to set the value of isPathAttributeLocalizationEnabled flag to false once the value of isPathAttributeLocalizationEnabled flag is set to true.
" type="primary" %}

Verify the created configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.