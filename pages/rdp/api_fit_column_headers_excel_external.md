---
title: Create Export Profile to auto-resize Header Column in Smart Excel
sidebar: rdp_sidebar
permalink: api_fit_column_headers_excel.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/create** to auto-resize the header column to view the full name of the display name in the excel file.

## Scenario

Consider that you wish to create an export profile to auto-resize the header column to view the full name of the display name in the excel file. You can expand the header column of the display name by setting **autoResizeColumn** flag to "true" at the profile level based on your requirements. For more information see, [Download Entities in Excel File](/{{site.data.rdp_links_version.APPU}}/srch_download_upload_entities_excel.html){:target="_blank"}.

{% include callout.html content="**Note**: Maximum of 255 characters is supported for the display name to fit in the header column of excel.   
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request, send the following details:

{% include snippets/clientState.html %}
* configObjects: In the [configObjects](api_config_object_structure.html) object, provide the name, type and version. In the data object, specify the context for the configuration to export the excel. See [Entity Export Services](api_exp_entity_service.html). Specify the following details in **publish** section:
  * **format -> additionalSettings**: Set **autoResizeColumn** flag to "true" to expand the header column in the excel file. **minWidth** and **maxWidth** properties are optional.
  * **format -> type**: Specify the format as **SMARTEXCEL**.

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/{Tenant ID}/api/configurationservice/create**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "sys_export_data_excel_ui_task_base",
    "name": "Base export Excel data",
    "type": "integrationprofile",
    "data": {
      "contexts": [
        {
          "context": {
            "app": "RSConnect",
            "channel": "JOB",
            "format": "Excel",
            "order": "10",
            "role": "admin",
            "service": "ENTITY_EXPORT",
            "source": "internal",
            "subtype": "User",
            "user": "system"
          },
          "jsonData": {
            "statusEventEnabled": false,
            "transform": {
              "settings": {
                "allowNullValues": "false",
                "clearMissingAttributes": "false",
                "strategies": [
                  {
                    "caseFormat": "NONE",
                    "trimTrailingNumbers": "false",
                    "isDefault": "false",
                    "removeSpecialCharacters": "false",
                    "removeWhitespace": "false",
                    "useExternalName": "true",
                    "trimLeadingNumbers": "false"
                  }
                ],
                "entityType": "@field(type)",
                "enableDynamicMapping": "true",
                "source": "rms"
              }
            },
            "integrationType": "User",
            "profileType": "base",
            "isEnabled": "true",
            <span style="background-color: #FFFF00"> "publish": { </span>
              "filter": {
                "include": {},
                "exclude": {}
              },
              "isBinaryStreamPersistent": "true",
              "channel": [
                {
                  "settings": {
                    "mode": "ASYNC"
                  },
                  "type": "presentationConnector"
                }
              ],
              <span style="background-color: #FFFF00"> "format": { </span>
                "settings": {
                  <span style="background-color: #FFFF00"> "additionalSettings": { </span>
                    "maintainSortOrder": true,
                    "inheritedValueAsToolTip": true,
                    "calculateEnhancerAttribute": true,
                    <span style="background-color: #FFFF00"> "autoResizeColumn": true, </span>
                    "minWidth": 12,
                    "maxWidth": 50
                  },
                  "encoding": "utf8"
                },
                "type": "SMARTEXCEL",
                "version": "1.1"
              }
            },
            "isMergeableWithCustom": true,
            "collect": {
              "filter": {
                "include": {
                  "typesCriterion": {}
                },
                "exclude": {
                  "typesCriterion": {
                    "queryFilters": {},
                    "_ALL": {
                      "queryFields": {
                        "relationships": [
                          "belongsto",
                          "belongstotaxonomy",
                          "belongstoroot",
                          "allowedlocales"
                        ]
                      }
                    }
                  }
                }
              },
              "isBinaryStreamPersistent": "true",
              "channel": [
                {
                  "settings": {
                    "includeMatchingAttributes": true,
                    "includeEnhancerAttributes": true,
                    "includeRelatedEntities": false,
                    "includeRelatedEntitiesRecursive": false,
                    "version": "1.1",
                    "includeRelatedEntityExternalIds": true
                  },
                  "type": "rdpConnector"
                }
              ],
              "format": {
                "settings": {
                  "supportsCollection": true,
                  "additionalSettings": {
                    "supportEmptyContextsRequest": true,
                    "loadDynamicContext": true,
                    "encoding": "utf8"
                  },
                  "encoding": "utf8"
                },
                "type": "RSJSON",
                "batchSize": 100,
                "version": "1.1"
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
          "message": "Submitted integrationprofile for create with Id sys_export_data_excel_ui_task_base. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "sys_export_data_excel_ui_task_base"
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








  