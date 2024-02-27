---
title: Create Export Profile for JSON Export
sidebar: rdp_sidebar
permalink: api_create_exp_profile_config_json.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createconfig}}** to create export profile for JSON export, using a scenario.

## Scenario

To create export profile for JSON export.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API {{site.data.rdp_glossary.createconfig}}. In the request send the following details:

{% include snippets/clientState.html %}
* configObjects: In the [configObjects](api_config_object_structure.html) object, provide the name, type and version. In the data object, specify the context for the configuration to export in JSON. See [Entity Export Services](api_exp_entity_service.html).

<pre>
<code>
POST **{{site.data.rdp_glossary.createconfig}}**
Headers: Content-Type: application/json  
Body:
{
  "configObjects": [
    {
      <span style="background-color: #FFFF00">"id": "downloadDataJSONJob",</span>
      <span style="background-color: #FFFF00">"name": "downloadDataJSONJob",</span>
      <span style="background-color: #FFFF00">"type": "integrationprofile",</span>
      "data": {
        "contexts": [
          {
            <span style="background-color: #FFFF00">"context": {</span>
              "app": "RSConnect",
              "service": "ENTITY_EXPORT",
              "channel": "JOB",
              "format": "JSON",
              "source": "internal",
              "role": "admin",
              "user": "system",
              "subtype": "User",
              "order": "10"
            },
            "jsonData": {
              "integrationType": "User",
              "isEnabled": "true",
              "collect": {
                "isDataPersistent": "true",
                <span style="background-color: #FFFF00">"channel": [</span>
                  {
                    "type": "rdpConnector",
                    "settings": {
                      "version": "1.1"
                    }
                  }
                ],
                "format": {
                  "type": "RSJSON",
                  "version": "1.1",
                  "batchSize": 1,
                  "settings": {
                    "encoding": "utf8",
                    "includeParent": "false",
                    "includeChildren": "false",
                    "includeSiblings": "false",
                    "includeRelatedEntityExternalIds": "true",
                    "supportsCollection": "true",
                    "additionalSettings": {
                      "encoding": "utf8",
                      "supportEmptyContextsRequest": true,
                      "isGetCoalesce": false
                    }
                  }
                },
                "filter": {
                  "include": {
                    "typesCriterion": {
                      "_ALL": {
                        "queryFields": {
                          "attributes": [
                            "mdmid",
                            "property_originalfilename",
                            "itemtype",
                            "productclassification",
                            "webclassification",
                            "mdmname"
                          ]
                        }
                      }
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
                    "type": "presentationConnector",
                    "settings": {
                      "mode": "ASYNC"
                    }
                  }
                ],
                <span style="background-color: #FFFF00">"format": {</span>
                  "type": "RSJSON",
                  "version": "1.1",
                  "batchSize": 100,
                  "settings": {
                    "additionalSettings": {
                      "includeEntityProperties": true
                    },
                    "entityProperties": {
                      "publishedBy": "executionContext.userId",
                      "publishedUserEmail": "executionContext.userEmail"
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
                  "entityType": "@field(type)",
                  "enableDynamicMapping": "true",
                  "source": "rms",
                  "allowNullValues": "false",
                  "collectionSeparator": "||",
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
          "message": "Submitted integrationprofile for create with Id downloadDataJSONJob. Check after some time",
          "messageType": "success",
          "messageParams": [
            "integrationprofile",
            "create",
            "downloadDataJSONJob"
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