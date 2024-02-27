---
title: Create Export Profile for Excel Export
sidebar: rdp_sidebar
permalink: api_create_exp_profile_config_excel.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create export profile for excel export, using a scenario.

## Scenario

To create export profile for performing a scheduled export of data from Riversand Platform to UI.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* configObjects: In the [configObjects](api_config_object_structure.html) object, provide the name, type and version. In the data object, specify the context for the configuration to export in Excel. See [Entity Export Services](api_exp_entity_service.html).
* In the settings object, set **loadDynamicContext** to true to calculate context at run-time based on the context model defined at the domain level.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json  
Body:
{
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "downloadDataExcel",</span>
      <span style="background-color: #FFFF00">"name": "downloadDataExcel",</span>
      <span style="background-color: #FFFF00">"type": "integrationprofile",</span>
      "data": {
        "contexts": [
          {
            <span style="background-color: #FFFF00">"context": {</span>
              "app": "RSConnect",
              "service": "ENTITY_EXPORT",
              "channel": "UI",
              "format": "Excel",
              "source": "{{TENANT_SOURCE}}",
              "role": "admin",
              "user": "system",
              "subtype": "User",
              "order": "10"
            },
            "jsonData": {
              "integrationType": "User",
              "isEnabled": "true",
              "collect": {
                "isDataPersistent": "false",
                <span style="background-color: #FFFF00">"channel": [</span>
                  {
                    "type": "rdpConnector",
                    "settings": {
                      "version": "1.1",
                      "includeMatchingAttributes": true,
                      "includeEnhancerAttributes": true,
                      "includeParent": false,
                      "includeRelatedEntityExternalIds": true,
                      "includeRelatedEntities": false,
                      "includeRelatedEntitiesRecursive": false
                    }
                  }
                ],
                "format": {
                  "type": "RSJSON",
                  "version": "1.1",
                  "batchSize": 1,
                  "settings": {
                    "supportsCollection": "true",
                    "additionalSettings": {
                      "encoding": "utf8",
                      "supportEmptyContextsRequest": true,
                      "isGetCoalesce": false,
                      "loadDynamicContext": true
                    }
                  }
                },
                "filter": {
                  "include": {
                    "typesCriterion": {
                    }
                  },
                  "exclude": {
                    "typesCriterion": {
                      "_ALL": {
                        "queryFields": {
                          "relationships": [
                            "belongsto",
                            "belongstotaxonomy",
                            "belongstoroot",
                            "allowedlocales"
                          ]
                        }
                      },
                      "queryFilters": {}
                    }
                  }
                }
              },
              "publish": {
                "isDataPersistent": "true",
                "channel": [
                  {
                    "type": "folderConnector",
                    "settings": {
                      "sourceFolder": "",
                      "pattern": ""
                    }
                  }
                ],
                <span style="background-color: #FFFF00">"format": {</span>
                  "type": "SMARTEXCEL",
                  "version": "1.1",
                  "settings": {
                    "encoding": "utf8",
                    "additionalSettings": {
                      "inheritedValueAsToolTip": true
                    }
                  }
                },
                "filter": {}
              },
              "transform": {
                "settings": {
                  "entityType": "@field(type)",
                  "enableDynamicMapping": "true",
                  "source": "rms",
                  "allowNullValues": "false",
                  "clearMissingAttributes": "false",
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
                  ]
                }
              }
            }
          }
        ]
      }
    }
  ]
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
          "message": "Submitted integrationprofile for create with Id downloadDataExcel. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "downloadDataExcel"
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