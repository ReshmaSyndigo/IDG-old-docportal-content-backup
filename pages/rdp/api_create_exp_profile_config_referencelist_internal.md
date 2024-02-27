---
title: Create Export Profile - Reference List
sidebar: rdp_sidebar
permalink: api_create_exp_profile_config_referencelist.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createconfig}}** to create export profile, using a scenario. Note the use of **maxReferenceDropDownList** property in this scenario. This can be used to specify maximum number of items to export in the drop-down list for a reference data. By default, the system can export maximum of 2000 reference values.
 
## Scenario

To create an export profile for performing export of data, also indicating the amount of reference data to be exported.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* configObject: In the [configObject](api_config_object_structure.html) object, provide the name, type, and id. In the data object, specify the context for the configuration and the actual configuration in a valid JSON format. See [Entity Export Services](api_exp_entity_service.html). 
* maxReferenceDropDownList: Set the value as 2500.

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    <span style="background-color: #FFFF00">"id": "entityModelDownload",</span>
    <span style="background-color: #FFFF00">"name": "entityModelDownload",</span>
    <span style="background-color: #FFFF00">"type": "integrationprofile-system",</span>
    "properties": {
      "createdService": "configurationManageService",
      "createdBy": "system_user",
      "createdDate": "2019-01-15T19:51:44.132-0600",
      "modifiedService": "configurationManageService",
      "modifiedBy": "system_user",
      "modifiedDate": "2019-01-15T19:51:44.132-0600"
    },
    "data": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "app": "RSConnect",
            "service": "MODEL_TEMPLATE",
            "channel": "ALL",
            "format": "SMARTEXCEL",
            "source": "internal",
            "role": "admin",
            "user": "system",
            "subtype": "System",
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
                    "search": {
                      "params": {
                        "query": {
                          "filters": {
                            "typesCriterion": [
                              "entityManageModel"
                            ]
                          },
                          "id": "sku_entityManageModel"
                        },
                        "fields": {
                          "attributes": [
                            "_ALL"
                          ],
                          "relationships": [
                            "_ALL"
                          ]
                        }
                      }
                    }
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
              "isDataPersistent": "false",
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
                "batchSize": 1,
                "settings": {
                  "additionalSettings": {
                    "encoding": "utf8",
                    "isLocalizationEnabled": "true",
                    <span style="background-color: #FFFF00">"maxReferenceDropDownList": 2500</span>
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
                "entityType": "@field(TYPE)",
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
          "message": "Submitted integrationprofile for create with Id entityModelDownload. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "entityModelDownload"
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