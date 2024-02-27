---
title: Get Configuration
sidebar: rdp_sidebar
permalink: api_get_configuration.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get configuration details:

* [Get Configuration using Id](api_get_config_scenario1.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.getconfig}}

**Parameters**: The following table lists the parameters of the JSON request to get configuration details:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting configuration objects. |
| query | id | No | Indicates configuration unique identifier. |
| query | name | No | Indicates configuration name. |
| query | ids | No | Indicates an array of configuration unique identifiers. |
| query | contexts | No | Indicates an array of context for getting configuration objects. |
| query | contexts -> app | Yes | Indicates the app such as entitysearch. |
| query | contexts -> service | Yes | Indicates the service in the app. |
| query | contexts -> component | Yes | Indicates the component of the service. |
| query | contexts -> subComponent | No | Indicates the subComponent of the component. |
| query | contexts -> entityType | No | Indicates the entity type. |
| query | contexts -> list | No | Indicates the list the configuration is linked to. |
| query | contexts -> relationshipType | No | Indicates the relationship type. |
| query | contexts -> role | No | Indicates the role the configuration is linked to. |
| query | contexts -> user | No | Indicates the user the configuration is linked to. |
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> typesCriterion | No | Indicates a comma separated list of configuration types. |
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. |
| options | options -> maxRecords | No | Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 2000.|

{% include callout.html content="**Notes**: 
* **_ALL** in the attributesCriterion fields implies all attributes that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | configObjects | List of configuration objects that matched the search criteria. {% if site.build == "internal" %} See [Configuration Object Structure](api_config_object_structure.html), for more information.{% endif %} |
| response | totalRecords | Count of config objects that matched the search criteria.|
| response| status | Indicates if the request is submitted successfully or not. |
| response| statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample request and response to get all system profiles:

<pre><code>
POST **{{site.data.rdp_glossary.getconfig}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "contexts": [
        {
         "app": "RSConnect",
         "source": "internal",
         "role": "admin",
         "user": "system"
        }],
      "filters": {
        "typesCriterion": [
          "integrationprofile",
          "integrationprofile-system",
          "overrides"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_All"
      ]
    }
  }
}
</code></pre>

**Response**: 
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1a4a798c-61e0-4bea-91b6-55f990d8bb53",
    "maxRecords": 100
  },
  "response": {
    "configObjects": [
      {
        "id": "EventHub_JSON_Export_Process",
        "name": "EventHub_JSON_Export_Process",
        "type": "integrationprofile",
        "properties": {
          "modifiedService": "configurationManageService",
          "modifiedDate": "2018-10-22T05:12:02.721-0500"
        },
        "data": {
          "contexts": [
            {
              "context": {
                "app": "RSConnect",
                "service": "ENTITY_EXPORT",
                "channel": "EventHub",
                "format": "JSON",
                "source": "internal",
                "role": "admin",
                "user": "system",
                "subtype": "System",
                "order": "10"
              },
              "jsonData": {
                "transform": {
                  "settings": {
                    "nullRecordTransformer": "true"
                  }
                },
                "integrationType": "System",
                "isEnabled": "true",
                "publish": {
                  "filter": {
                    "include": {},
                    "exclude": {}
                  },
                  "channel": [
                    {
                      "settings": {
                        "keyVaultUrl": "https://engg-az-qa7-keyvault.vault.azure.net/",
                        "eventHub": "export",
                        "eventHubNamespace": "engg-az-qa7-rwtest-eventhub"
                      },
                      "type": "eventHubConnector"
                    }
                  ],
                  "format": {
                    "settings": {
                      "additionalSettings": {
                        "encoding": "utf8"
                      }
                    },
                    "type": "RSJSON",
                    "batchSize": 1,
                    "version": "1.1"
                  },
                  "isDataPersistent": "true"
                },
                "collect": {
                  "filter": {
                    "include": {},
                    "exclude": {}
                  },
                  "channel": [
                    {
                      "settings": {
                        "type": "RSJSON",
                        "version": "1.1",
                        "requestforvaluemapping": "true"
                      },
                      "type": "rdpConnector"
                    }
                  ],
                  "format": {
                    "settings": {
                      "additionalSettings": {
                        "encoding": "utf8"
                      }
                    },
                    "type": "RSJSON",
                    "batchSize": 1,
                    "version": "1.1"
                  },
                  "isDataPersistent": "true"
                }
              }
            }
          ]
        }
      },
      {
        "id": "JSON_Export_Publish",
        "name": "JSON_Export_Publish",
        "type": "integrationprofile",
        "properties": {
          "createdService": "configurationManageService",
          "createdBy": "system_user",
          "createdDate": "2018-10-23T01:48:36.922-0500",
          "modifiedService": "configurationManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-10-23T01:48:36.922-0500"
        },
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
                "transform": {
                  "settings": {
                    "nullRecordTransformer": "true"
                  }
                },
                "integrationType": "System",
                "isEnabled": "true",
                "publish": {
                  "filter": {
                    "include": {},
                    "exclude": {}
                  },
                  "channel": [
                    {
                      "settings": {
                        "keyVaultUrl": "https://engg-az-qa7-keyvault.vault.azure.net/",
                        "containerName": "export-data-engg-az-qa7-rwtest",
                        "storageAccountName": "enggazqa7mediastorage",
                        "fileType": "json"
                      },
                      "type": "azureBlobConnector"
                    }
                  ],
                  "format": {
                    "settings": {},
                    "type": "RSJSON",
                    "batchSize": 5,
                    "version": "1.1"
                  },
                  "isDataPersistent": "true"
                },
                "collect": {
                  "filter": {
                    "include": {
                      "queryFields": {
                        "relationships": [],
                        "attributes": []
                      },
                      "queryFilters": {
                        "typesCriterion": []
                      }
                    },
                    "exclude": {
                      "queryFields": {
                        "relationships": [],
                        "attributes": []
                      },
                      "queryFilters": {
                        "relationshipAttributesCriterion": [],
                        "typesCriterion": []
                      }
                    }
                  },
                  "channel": [
                    {
                      "settings": {
                        "includeParent": "true",
                        "includeChildren": "false",
                        "includeSiblings": "false",
                        "includeRelatedEntityExternalIds": "true"
                      },
                      "type": "rdpConnector"
                    }
                  ],
                  "format": {
                    "settings": {
                      "additionalSettings": {
                        "encoding": "utf8"
                      }
                    },
                    "type": "RSJSON",
                    "version": "1.1"
                  },
                  "isDataPersistent": "false"
                }
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.