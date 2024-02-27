---
title: Create Export Profile to Prevent Export of Attributes not Present in the Model
sidebar: rdp_sidebar
permalink: api_create_exp_profile_config_non_model_attributes.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create an export profile to prevent exporting attributes not present in the manage model of the entity.

## Scenario

To create an export profile to prevent exporting attributes not present in the manage model of the entity being exported.

Consider an entity has attributes a1, a2, a3, b1, b2, b3 where, attributes a1, a2 and a3 are present in the manage model of the entity, but attributes b1, b2 and b3 are not present in the manage model of the entity. Hence, when the entity is exported, attributes a1, a2 and a3 must be exported and attributes b1, b2 and b3 must not be exported. This behavior is applicable for JSON exports only.

{% include callout.html content="**Note**: This behavior is not supported for relationship attributes and nested child attributes.
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request, send the following details:

{% include snippets/clientState.html %}

* configObjects: In the [configObjects](api_config_object_structure.html) object, specify the id, name and type. In the data object, specify the context for the configuration to export.

* transform: Specify "false" in the **nullRecordTransformer** parameter to prevent exporting attributes not present in the manage model of the entity. 

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json  
Body:
{
  <span style="background-color: #FFFF00">"id": "export_data_json_any_task",</span>
  <span style="background-color: #FFFF00">"name": "export_data_json_any_task",</span>
  <span style="background-color: #FFFF00">"type": "integrationprofile",</span>
  "data": {
    "contexts": [
      {
        "context": {
          "app": "RSConnect",
          "service": "ENTITY_EXPORT",
          "channel": "ALL",
          "format": "JSON",
          "source": "internal",
          "role": "admin",
          "user": "system",
          "subtype": "System",
          "order": "10"
        },
        "jsonData": {
          "id": "sys_export_data_json_any_task_base",
          "name": "sys_export_data_json_any_task_base",
          "type": "ENTITY_EXPORT",
          "integrationType": "System",
          "isEnabled": "true",
          "isMergeableWithCustom": true,
          "statusEventEnabled": false,
          "collect": {
            "isBinaryStreamPersistent": "true",
            "channel": [
              {
                "type": "rdpConnector",
                "settings": {
                  "type": "RSJSON",
                  "version": "1.1",
                  "requestforvaluemapping": "true"
                }
              }
            ],
            "format": {
              "type": "RSJSON",
              "version": "1.1",
              "batchSize": 1,
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
            "isBinaryStreamPersistent": "true",
            "channel": [
              {
                "type": "eventHubConnector",
                "settings": {}
              }
            ],
            "format": {
              "type": "RSJSON",
              "version": "1.1",
              "batchSize": 1,
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
          <span style="background-color: #FFFF00">"transform": {</span>
            "settings": {
              "entityType": "@field(type)",
              "enableDynamicMapping": true,
              "matchEnhancerAttributes": true,
              "source": "rms",
              <span style="background-color: #FFFF00">"nullRecordTransformer": "false",</span>
              "allowNullValues": "false",
              "clearMissingAttributes": "false",
              "strategies": [
                {
                  "useExternalName": "false",
                  "caseFormat": "NONE",
                  "removeSpecialCharacters": "false",
                  "removeWhitespace": "false",
                  "trimLeadingNumbers": "false",
                  "trimTrailingNumbers": "false",
                  "isDefault": "false"
                }
              ]
            }
          }
        }
      }
    ]
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
          "message": "Submitted integrationprofile for create with Id export_data_json_any_task. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "export_data_json_any_task"
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