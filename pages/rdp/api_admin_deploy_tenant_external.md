---
title: Deploy New Tenant
sidebar: rdp_sidebar
permalink: api_admin_deploy_tenant.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

'Software Multitenancy' is a software architecture in which a single instance of software runs on a server and serves multiple tenants.

**Instance** : An instance is defined as a container of resources sharing technologies with its physical host that are preinstalled on a cloud hosting. A cloud instance refers to a virtual server instance from a public or private cloud network. In cloud instance computing, single hardware is implemented into software and run on top of multiple computers.

**Tenant** : A Multi-Tenant application involves a centralized administration to maintain a common code based application and run common instances of application for multiple tenants. This process ensures that the confidential data for each tenant is secured from other tenants. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deploytenant}}** to deploy a new tenant, using a scenario.

The figure below illustrates an instance having multiple tenants. 

{% picture instance-tenant.png alt="Instance with multiple Tenants" %}

{% include callout.html content="**Note:**
To onboard a new tenant we must create elastic indices, hbase tables and necessary configs to use tenant APIs. 
" type="primary" %}

## Scenario

To deploy "rdw" tenant on Riversand Platform machine. 

{% include snippets/header.html %}

## Request

To deploy the above tenant on any instance, you can use the RESTful API 
**{{site.data.rdp_glossary.deploytenant}}**. In the request send the following details:

* adminObject : Specify the tenant id, name, type, and its properties.
* data : Specify the JSON data containing the new tenant details.

<pre>
<code>
POST **{{site.data.rdp_glossary.deploytenant}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "replicaCount": 0,
    "contextDelimiter": ">>",
    "caseSensitiveValue": "lowercase"
  },
  "adminObject": {
    <span style="background-color: #FFFF00">"id": "rdw",</span>
    <span style="background-color: #FFFF00">"name": "rdw-tenant-config",</span>
    <span style="background-color: #FFFF00">"type": "tenantserviceconfig",</span>
    "properties": {
      "createdByService": "configservice",
      "createdService": "configurationManageService",
      "createdDate": "2018-09-23T08:41:33.985-0500",
      "modifiedService": "configurationManageService",
      "modifiedDate": "2018-09-23T08:41:33.985-0500"
    },
    <span style="background-color: #FFFF00">"data": {</span>
      "jsonData": {
        "tenantId": "rdw",
        "tenantAuthKey": "2527f502-8e88-4614-80ae-5888202af9c5",
        "messageLocale": "en-US",
        "defaultValueLocale": "en-US",
        "defaultValueSource": "internal",
        "timezone": "America/Chicago",
        "logLevel": "info",
        "contextDelimiter": ">>",
        "isCacheEnabled": true,
        "isModelCoalesceCacheEnabled": false,
        "isSortValidationEnabled": true,
        "isValueMappingEnabled": true,
        "isValueMappingSuccessIncludedInEvent": false,
        "isModelSourceEnabled": false,
        "maxResultWindow": 30000,
        "allowableDelayBeforeRevalidateCreateActionInMs": 60000,
        "warnLatencyThresholdForAction": {
          "create": 200,
          "createMultiple": 400,
          "update": 200,
          "delete": 100,
          "deleteByQuery": 1000,
          "clearScrollId": 100,
          "get": 100,
          "existsById": 100,
          "getById": 100,
          "getByIds": 200,
          "getOffset": 200
        },
        "services": {
          "authorizationService": {
            "serviceSpecific": {
              "logLevel": "info",
              "defaultMaxRecords": 100,
              "roleComputePolicy": ""
            }
          },
          "bulkEntityService": {
            "serviceSpecific": {
              "logLevel": "info",
              "defaultMaxRecords": 2000,
              "inboundService": {
                "restUri": "http://imp-exp-rest:9095/rdw/api/rsInboundService/",
                "process": "process",
                "process-query": "process",
                "process-multi-query": "process",
                "transitionWorkflow": "process",
                "transitionWorkflow-query": "process",
                "transitionWorkflow-multi-query": "process",
                "changeAssignment": "process",
                "changeAssignment-query": "process",
                "changeAssignment-multi-query": "process",
                "delete": "process",
                "delete-query": "process"
              }
            }
          },
          "entityManageService": {
            "serviceSpecific": {
              "logLevel": "info",
              "enableSelfCoalesce": true,
              "enableSystemInboundTopicType": true,
              "enableBulkInboundTopicType": true,
              "enableUIBulkInboundTopicType": true,
              "enableBulkSystemInboundTopicType": true,
              "enableUIBulkSystemInboundTopicType": true,
              "enableHotlineInboundTopicType": true,
              "enableMigrateInboundTopicType": true,
              "defaultMaxRecords": 2000,
              "defaultBatchSize": 1000,
              "warnOnMaxDesiredDataSize": 524288,
              "errorOnMaxDesiredDataSize": 2097152,
              "isRequestOfRequestsEnabled": true,
              "isMigrationEnabled": false,
              "defaultDataTypes": {
                "dataObject": "entity",
                "deleteDataObject": "deleteentity",
                "eventDataObject": "event",
                "requestDataObject": "request",
                "internalEventDataObject": "internalEvent"
              },
              "isEventPersistenceEnabled": true,
              "isCreateEventDataPersistenceEnabled": true,
              "entityManage": {
                "isEntityManageEventsEnabled": true,
                "isEntityManageAttributeEventsEnabled": false,
                "isEntityManageModelInferenceEnabled": false,
                "isForcedDeleteEnabled": true,
                "isSoftDeleteEnabled": true,
                "isDefaultValuesPopulationEnabled": true
              },
              "migrationConfig": {
                "isEventPersistenceEnabled": false
              },
              "artifactName": "@@KEYWORD_EXTENSION@@"
            },
            "platformSpecific": {
              "searchStoreAdminConfig": {
                "indices": [
                  {
                    "index": "rdwentityindex",
                    "alias": [
                      "rdwentitywriteindex",
                      "rdwentityreadindex"
                    ]
                  },
                  {
                    "index": "rdweventindex",
                    "alias": [
                      "rdweventwriteindex",
                      "rdweventreadindex"
                    ]
                  },
                  {
                    "index": "rdwentitymanageeventindex",
                    "alias": [
                      "rdwentitymanageeventwriteindex",
                      "rdwentitymanageeventreadindex"
                    ]
                  },
                  {
                    "index": "rdwrequestobjectindex",
                    "alias": [
                      "rdwrequestobjectwriteindex",
                      "rdwrequestobjectreadindex"
                    ]
                  },
                  {
                    "index": "rdwinternaleventindex",
                    "alias": [
                      "rdwinternaleventwriteindex",
                      "rdwinternaleventreadindex"
                    ]
                  }
                ]
              },
              "searchStore": {
                "domains": {
                  "dataObject": {
                    "objectTypes": {
                      "entity": {
                        "indices": {
                          "readIndex": "rdwentityreadindex",
                          "writeIndex": "rdwentitywriteindex"
                        }
                      }
                    }
                  },
                  "deleteDataObject": {
                    "objectTypes": {
                      "deleteentity": {
                        "indices": {
                          "readIndex": "rdwentityreadindex",
                          "writeIndex": "rdwentitywriteindex"
                        }
                      }
                    }
                  },
                  "eventDataObject": {
                    "objectTypes": {
                      "event": {
                        "indices": {
                          "readIndex": "rdweventreadindex",
                          "writeIndex": "rdweventwriteindex"
                        }
                      },
                      "entitymanageevent": {
                        "indices": {
                          "readIndex": "rdwentitymanageeventreadindex",
                          "writeIndex": "rdwentitymanageeventwriteindex"
                        }
                      }
                    }
                  },
                  "requestDataObject": {
                    "objectTypes": {
                      "request": {
                        "indices": {
                          "readIndex": "rdwrequestobjectreadindex",
                          "writeIndex": "rdwrequestobjectwriteindex"
                        }
                      }
                    }
                  },
                  "internalEventDataObject": {
                    "objectTypes": {
                      "internalEvent": {
                        "indices": {
                          "readIndex": "rdwinternaleventreadindex",
                          "writeIndex": "rdwinternaleventwriteindex"
                        }
                      }
                    }
                  }
                }
              },
              "objectStoreAdminConfig": {
                "tables": [
                  {
                    "table": "rdwentitywritetable"
                  },
                  {
                    "table": "rdweventwritetable"
                  },
                  {
                    "table": "rdwentitymanageeventwritetable"
                  },
                  {
                    "table": "rdwrequestobjectwritetable"
                  },
                  {
                    "table": "rdwinternaleventwritetable"
                  }
                ]
              },
              "objectStore": {
                "domains": {
                  "dataObject": {
                    "objectTypes": {
                      "entity": {
                        "storageProvider": {
                          "storageProviderId": "defaultAzureBlobStore",
                          "configProperties": {
                            "containerName": "rdw-dev-next-entity",
                            "legacyContainerName": "rdwentitywritetable"
                          }
                        }
                      },
                      "product": {
                        "storageProvider": {
                          "storageProviderId": "defaultAzureBlobStore",
                          "configProperties": {
                            "containerName": "rdw-dev-next-entity",
                            "legacyContainerName": "rdwentitywritetable"
                          }
                        }
                      }
                    }
                  },
                  "deleteDataObject": {
                    "objectTypes": {
                      "deleteentity": {
                        "storageProvider": {
                          "storageProviderId": "defaultAzureBlobStore",
                          "configProperties": {
                            "containerName": "rdw-dev-next-entity",
                            "legacyContainerName": "rdwentitywritetable"
                          }
                        }
                      }
                    }
                  },
                  "eventDataObject": {
                    "objectTypes": {
                      "event": {
                        "storageProvider": {
                          "storageProviderId": "defaultAzureBlobStore",
                          "configProperties": {
                            "containerName": "rdw-dev-next-event",
                            "legacyContainerName": "rdweventwritetable"
                          }
                        }
                      },
                      "entitymanageevent": {
                        "storageProvider": {
                          "storageProviderId": "defaultAzureBlobStore",
                          "configProperties": {
                            "containerName": "rdw-dev-next-entitymanageevent",
                            "legacyContainerName": "rdwentitymanageeventwritetable"
                          }
                        }
                      }
                    }
                  },
                  "requestDataObject": {
                    "objectTypes": {
                      "request": {
                        "storageProvider": {
                          "storageProviderId": "defaultAzureBlobStore",
                          "configProperties": {
                            "containerName": "rdw-dev-next-requestobject",
                            "legacyContainerName": "rdwrequestobjectwritetable"
                          }
                        }
                      }
                    }
                  },
                  "internalEventDataObject": {
                    "objectTypes": {
                      "internalEvent": {
                        "storageProvider": {
                          "storageProviderId": "defaultAzureBlobStore",
                          "configProperties": {
                            "containerName": "rdw-dev-next-internalevent",
                            "legacyContainerName": "rdwinternaleventwritetable"
                          }
                        }
                      }
                    }
                  }
                }
              },
              "eventStore": {
                "domains": {
                  "eventDataObject": {
                    "objectTypes": {
                      "event": {
                        "defaultStreamProvider": "azureEventHub",
                        "streamProviders": {
                          "azureEventHub": {
                            "configProperties": {
                              "namespaceName": "dev-next-rdw-eventhub",
                              "eventHubName": "events",
                              "applicationId": "6712c557-aff9-4ae5-9c0f-0d313c76988f",
                              "applicationSecret": "oG72vSRTnbLcYotQO2B+y78mQyq3rZSh3LA1NbD7nnY=",
                              "keyVaultUrl": "https://dev-next-keyvault.vault.azure.net/",
                              "sharedAccessKeyName": "RDP",
                              "partitionKey": "10"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "graphStore": {
                "graphDatabase": "rdwgraph",
                "traversalSource": "rdwsource"
              },
              "eventSubscribers": [
                {
                  "name": "PushToStreamSubscriber",
                  "description": "Riversand Platform event hub connector for rdw",
                  "active": true,
                  "filters": [
                    {
                      "filterType": "include",
                      "dataObjectType": "entitymanageevent"
                    }
                  ]
                },
                {
                  "name": "EntityManageSubscriber",
                  "description": "Riversand Platform entity govern connector for rdw",
                  "active": true,
                  "filters": [
                    {
                      "filterType": "include",
                      "dataObjectType": "entitymanageevent"
                    }
                  ]
                }
              ]
            }
          }
        },
        "adminService": {.....},
        "bulkEventService": {.....},
        "bulkRequestService": {.....},
        "bulkGenericService": {.....},
        "entityAppModelService": {.....},
        "entityAppService": {.....},
        "matchService": {.....},
        "snapshotManageService": {.....},
        "entityService": {.....},
        "entityGovernService": {.....},
        "entityGraphManageService": {.....},
        "entityPostProcessService": {.....},
        "entityManageModelService": {.....},
        "entityModelService": {.....},
        "eventManageService": {.....},
        "externalEventManageService": {.....},
        "scheduleObjectManageService": {.....},
        "genericObjectManageService": {.....},
        "impactManageService": {.....},
        "impactIdentifyService": {.....},
        "impactExecuteService": {.....},
        "requestManageService": {.....},
        "eventReportService": {.....},
        "notificationManageService": {.....},
        "configurationManageService": {.....},
        "binaryObjectManageService": {.....},
        "binaryStreamObjectService": {.....},
        "authenticationService": {.....},
        "rsConnectService": {.....},
        "rsAssetService": {.....}
        "sources": [
          {
            "id": "platformSeed",
            "name": "Platform Seed",
            "description": "Configuration defined by the platform",
            "contact": "Riversand",
            "url": "https://www.riversand.com/"
          },
          {
            "id": "tenantSeed",
            "name": "rdw Configuration",
            "description": "Configuration defined by rdw"
          }
        ],
        "replacementTokenValues": {
          "ENVNAME": "dev-next",
          "APPLICATION_URL": "@@APPLICATION_URL@@",
          "AWSCREDENTIALSTYPE": "AMAZON_EC2_INSTANCE_PROFILE",
          "AWSREGIONNAME": "us-east-1"
        },
        "storageProviders": {
          "defaultS3Store": {
            "configProperties": {
              "type": "AWS_S3",
              "S3Region": "us-east-1",
              "S3CredentialsType": "AMAZON_EC2_INSTANCE_PROFILE",
              "S3AccessKey": "@@S3_ACCESS_KEY@@",
              "S3SecretKey": "@@S3_SECRET_KEY@@",
              "containerName": "rdw-dev-next-data-store",
              "validityDurationInMins": 1440
            }
          },
          "defaultAzureBlobStore": {
            "configProperties": {
              "type": "Azure_Blob",
              "storageConnectionString": "DefaultEndpointsProtocol=https;AccountName=devnextmediastorage;AccountKey=ago8eEzQrOOY26qyitWXNeV9JfXGsgifl6KDf89VJLBCtdTwsX3iG42bGiginQINVpCpUlJojp9asWUQKQ+OFg==;EndpointSuffix=core.windows.net",
              "containerName": "rdw-dev-next-data-store",
              "validityDurationInMins": 1440,
              "storageFormat": "external"
            }
          },
          "defaultHDFSStore": {
            "configProperties": {
              "type": "Apache_Hdfs",
              "replicationFactor": 1
            }
          },
          "defaultHbaseStore": {
            "configProperties": {
              "type": "Apache_Hbase"
            }
          }
        }
      }
    }
  }
}
</code>
</pre>

{% include callout.html content="**Note:**
The **HBase** deployment is optional. If HBase is not required for a customer, it can be removed when deploying tenant. 
" type="primary" %}

The following example shows the section of API that must be removed if a user does not want HBase to be included while deploying entityManageService into "rdw" tenant.

<pre><code>
 "objectStoreAdminConfig": {
    "tables": [
      {
        "table": "rdwentitywritetable"
      },
      {
        "table": "rdweventwritetable"
      },
      {
        "table": "rdwentitymanageeventwritetable"
      },
      {
        "table": "rdwrequestobjectwritetable"
      },
      {
        "table": "rdwinternaleventwritetable"
      }
    ]
  },
</code></pre>

## Response

When a new tenant is successfully deployed, then the following response is shown.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1de31dc2-5735-4a40-be97-aef6ae5853f7",
    "taskId": "1de31dc2-5735-4a40-be97-aef6ae5853f7"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "message": "Tenant has been submitted for deployment. Please check back after 1 min to use the new tenant."
    },
    "totalRecords": 0
  }
}
</code></pre>