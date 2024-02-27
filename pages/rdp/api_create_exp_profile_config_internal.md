---
title: Create Export Profile
sidebar: rdp_sidebar
permalink: api_create_exp_profile_config.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create export profile, using a scenario.

## Scenario

To create export profile for performing a scheduled export of data from Riversand Platform to Kinesis.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name, type, and version. In the data object, specify the context for the configuration and the actual configuration in a valid JSON format. See [Entity Export Services](api_exp_entity_service.html). 

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    <span style="background-color: #FFFF00">"id": "scheduled_Kinesis_JSON_Export_Publish",</span>
    <span style="background-color: #FFFF00">"name": "scheduled_Kinesis_JSON_Export_Publish",</span>
    <span style="background-color: #FFFF00">"type": "integrationprofile",</span>
    "data": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "app": "RSConnect",
            "service": "ENTITY_EXPORT",
            "channel": "SCHEDULE_JOB",
            "format": "JSON",
            "source": "internal",
            "role": "admin",
            "user": "system",
            "subtype": "System",
            "order": "10"
          },
          "jsonData": {
            "integrationType": "System",
            "isEnabled": "true",
            "isMergeableWithCustom": "true",
            "collect": {
              "isDataPersistent": "false",
              <span style="background-color: #FFFF00">"channel": [</span>
                {
                  "type": "genericObjectConnector",
                  "settings": {}
                }
              ],
              "format": {
                "type": "RSJSON",
                "version": "1.1",
                "settings": {
                  "additionalSettings": {
                    "encoding": "utf8"
                  }
                }
              },
              "filter": {
                "include": {},
                "exclude": {}
              }
            },
            "publish": {
              "isDataPersistent": "false",
              "channel": [
                {
                  "type": "folderConnector",
                  "settings": {
                    "sourceFolder": "",
                    "pattern": "*"
                  }
                }
              ],
              <span style="background-color: #FFFF00">"format": {</span>
                "type": "RSJSON",
                "version": "1.1",
                "batchSize": 100,
                "settings": {}
              },
              "filter": {
                "include": {},
                "exclude": {}
              }
            },
            "transform": {
              "settings": {
                "nullRecordTransformer": "true"
              }
            }
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
          "message": "Submitted integrationprofile for create with Id scheduled_Kinesis_JSON_Export_Publish. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "scheduled_Kinesis_JSON_Export_Publish"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

Verify the created configuration:
* You can use {{site.data.rdp_glossary.getconfig}} API to verify the created configuration. See [Get Configuration](api_get_configuration.html) and [Get Nearest Configuration](api_get_nearest_configuration.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.