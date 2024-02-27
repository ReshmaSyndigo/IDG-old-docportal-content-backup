---
title: Create Import Profile for Importing DSV Files
sidebar: rdp_sidebar
permalink: api_create_imp_profile_config4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create import profile for DSV files, using a scenario.

## Scenario

To create import profile for uploading entity data in DSV file to Riversand Platform.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* In the request, specify the id, name and type. In the data object, specify the context for the configuration and the actual configuration in a valid JSON format. See [Entity Import Services](api_imp_entity_service.html).

The following JSON demonstrates a configuration for importing entity data in DSV format to Riversand Platform through UI with appropriate collect, publish, and transform details. Note that the format must be **DSV** and channel as **UI**. In the dsvSettings section, specify "delimiter", "quotechar" and "startLine" values as required.

<pre>
<code> 
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "id": "import_data_dsv_ui_task",
  "name": "import_data_dsv_ui_task",
  "type": "integrationprofile",
  "properties": {
    "modifiedService": "configurationManageService",
    "modifiedBy": "system_user",
    "modifiedDate": "2019-05-16T01:35:11.634-0500"
  },
  "data": {
    "contexts": [
      {
        "context": {
          "app": "RSConnect",
          "service": "ENTITY_IMPORT",
          "channel": "UI",
          "format": "DSV",
          "source": "internal",
          "role": "admin",
          "user": "system",
          "subtype": "User",
          "order": "10"
        },
        "jsonData": {
          "isEnabled": "true",
          "integrationType": "User",
          "isMergeableWithCustom": true,
          "statusEventEnabled": false,
          "collect": {
            "isBinaryStreamPersistent": "true",
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
              <span style="background-color: #FFFF00">"type": "DSV",</span>
              "version": "1.1",
              "settings": {
                "httpSettings": {
                  "bulkLoadAttributes": [
                    "Primary Image URL"
                  ]
                },
                "additionalSettings": {
                  "bulkLoadProfile": "sys_import_bulk-load_asset_blob_task_base",
                  "encoding": "utf8",
                  "supportsCollection": "false",
                  "supportDynamicContextMapping": true,
                  "attributeSeperator": "#@#"
                },
                <span style="background-color: #FFFF00">"dsvSettings": {</span>
                  "delimiter": ",",
                  "quotechar": "\"",
                  "startLine": 0
                }
              }
            },
            "filter": {
              "include": {},
              "exclude": {}
            }
          },
          "publish": {
            "isBinaryStreamPersistent": "false",
            "channel": [
              {
                "type": "rdpConnector",
                "settings": {
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
                  "encoding": "utf8",
                  "supportsCollection": "true"
                }
              }
            },
            "filter": {
              "include": {},
              "exclude": {}
            }
          },
          "transform": {
            "settings": {
              "matchEnhancerAttributesOnImport": true,
              "entityType": "@field(Type)",
              "defaultEntityType": "sku",
              "enableDynamicMapping": "true",
              "allowNullValues": "false",
              "clearMissingAttributes": "false",
              "collectionSeparator": "||",
              "strategies": [
                {
                  "useExternalName": "true",
                  "caseFormat": "NONE",
                  "removeSpecialCharacters": "false",
                  "removeWhitespace": "false",
                  "trimLeadingNumbers": "false",
                  "trimTrailingNumbers": "false",
                  "isDefault": "false"
                }
              ],
              "excludeMappingHeaders": [
                "Action",
                "Type",
                "ID",
                "Name"
              ],
              "loadDefaultOverrides": true,
              "useDefaultContext": false
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
          "message": "Submitted integrationprofile for create with Id import_data_dsv_ui_task. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "import_data_dsv_ui_task"
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