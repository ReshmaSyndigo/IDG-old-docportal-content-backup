---
title: Get a Schedule Object using Scheduler Service
sidebar: rdp_sidebar
permalink: api_sch_get.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get schedule objects:

* [Get a particular schedule object using Id](api_sch_get_scenario6.html)
* [Get a schedule object performing a particular task](api_sch_get_scenario7.html)
* [Get schedule objects which are Inactive](api_sch_get_scenario8.html)
* [Get all schedule Info objects](api_sch_get_scenario9.html)
* [Get a particular schedule Info object using schedule Id](api_sch_get_scenario10.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.schget}}

**Parameters**: The following table lists the parameters of the JSON request to get the schedule object or schedule info object or collection of schedule objects:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting an entity or collection of entities. |
| query | id  | No | Indicates entity unique identifier. |
| query | name  | No | Indicates entity name. |
| query | ids  | No | Indicates an array of entity unique identifiers. |
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> attributesCriterion -> <<AttrName>> | No | Indicates the name of the attribute. |
| query | filters -> attributesCriterion -> <<AttrName>> -> <<Operator>> : <<AttrValue>> | No | Indicates the type of operator to be used for comparing the AttrValue. Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND". |
| query | filters -> propertiesCriterion -> <<PropertyName>> | No | Indicates the name of the attribute. |
| query | filters -> propertiesCriterion -> <<PropertyName>> -> <<Operator>> : <<PropertyValue>> | No | Indicates the type of operator to be used for comparing the PropertyValue. Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". |


## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response |  | List of schedule objects that matched the search criteria. See [Schedule Object Structure](api_sch_object_structure.html), for more information. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of entity objects that matched the search criteria.|

## Example

The following example demonstrates a sample request and response to get the schedule objects:

<pre><code>
POST {TenantURL or ID}/api/schedulerservice/get
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "scheduleobject"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 3
    }
  }
}

</code></pre>

**Response**: 
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "7e1b794d-8ae3-492a-9abf-fcfaf8a330e6",
    "maxRecords": 2000
  },
  "response": {
    "scheduleObjects": [
      {
        "id": "authorization-model-identify-schedule",
        "name": "schedule for authorization model identification",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-29T14:15:13.370-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-29T14:15:13.370-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6a97ad06-7629-4cd3-932b-0ddd5c6be77e",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "84a1c14f-5a7e-4424-b6ec-594387882cea",
                  "value": "authorization-model-identification"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f6c5693e-2aee-48ce-94c2-0419d6bc6112",
                  "value": "http://rdp-rest:8085/rdw/api/impactmanageservice/identify"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 30,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "rdw",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "options": {
                  "maxRecords": 1000
                },
                "query": {
                  "filters": {
                    "attributesCriterion": [
                      {
                        "status": {
                          "exact": "QUEUED"
                        }
                      },
                      {
                        "chBucket": {
                          "exact": "authorizationModel"
                        }
                      }
                    ],
                    "typesCriterion": [
                      "impactIdentifyRequestObject"
                    ]
                  }
                },
                "distinct": {
                  "attributes": [
                    "doId"
                  ]
                },
                "fields": {
                  "attributes": [
                    "_ALL"
                  ]
                }
              }
            }
          }
        }
      },
      {
        "id": "store-snapshot-of-processing-lag",
        "name": "Store snapshot of lag in processing",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-29T14:15:13.450-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-29T14:15:13.450-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d53ce1bb-b242-474b-ba7d-0bcbee141ca6",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5930c699-48b0-4e1f-89b6-5e95e87c08e5",
                  "value": "snapshot-processing-lag"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "38d4b04d-bb03-499a-baca-447d0053d989",
                  "value": "http://rdp-rest:8085/rdw/api/genericobjectmanageservice/snapshotprocessinglag"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 60,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "rdw",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "genericObject": {
                "id": "snapshotProcessingLag",
                "name": "Store snapshot of lag in processing",
                "type": "diagnosticobject"
              }
            }
          }
        }
      },
      {
        "id": "digestemailidentify-schedule",
        "name": "schedule for digest email identification",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-09-12T00:52:52.745-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T00:52:52.745-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ab420e2a-fbb5-4460-b1f6-628092f69764",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4cd22555-394c-43c0-9eb6-25e5f31bb3ab",
                  "value": "digestemail-identification"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "56291cc4-204a-400b-89e5-f852dd7b0884",
                  "value": "http://uri:8085//api/impactmanageservice/identify"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 10080,
              "authContext": {
                "x-rdp-userId": "rdp",
                "x-rdp-clientId": "rdpClient",
                "x-rdp-userRoles": "admin"
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "id": "some-other-unknown-id",
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": "scheduleToPublishEntities",
        "name": "Schedule To Publish Entities",
        "type": "scheduleobject",
        "properties": {
          "enabled": false,
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T01:50:08.629-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b0dd21e6-9ddd-42a6-b023-b8ef3034b29b",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "610ea33e-b0b6-4cfe-af86-de466d0d29db",
                  "value": "scheduled_json_data_publish"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f40dc516-b296-4f6a-8a86-451befaf922a",
                  "value": "http://{URI}/api/rsConnectService/publish"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 30,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "filters": {
                    "attributesCriterion": [
                      {
                        "taskType": {
                          "exact": "publish_entities"
                        }
                      },
                      {
                        "status": {
                          "exact": "QUEUED"
                        }
                      }
                    ],
                    "typesCriterion": [
                      "scheduledrequestobject"
                    ]
                  }
                },
                "fields": {
                  "attributes": [
                    "_ALL"
                  ],
                  "relationships": [
                    "_ALL"
                  ]
                },
                "rsconnect": {
                  "profiles": [
                    "scheduled_json_data_publish"
                  ]
                }
              }
            }
          }
        }
      },
      {
        "id": "impactexecute-schedule",
        "name": "schedule for impact execution",
        "type": "scheduleobject",
        "properties": {
          "enabled": false,
          "createdService": "scheduleObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-29T14:15:13.419-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-29T14:15:13.419-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "eb9e253a-f4e5-4874-b174-aedb6fc402d2",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f4eca39e-e2f2-4dcd-8c0f-d7994e2c7a99",
                  "value": "impact-execution"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5b2ae518-c9fa-468c-9814-0a4db35a6213",
                  "value": "http://rdp-rest:8085/rdw/api/impactmanageservice/execute"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 60,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "rdw",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "options": {
                  "maxRecords": 100
                },
                "query": {
                  "filters": {
                    "attributesCriterion": [
                      {
                        "status": {
                          "exact": "QUEUED"
                        }
                      },
                      {
                        "chBucket": {
                          "exact": "DDG"
                        }
                      }
                    ],
                    "typesCriterion": [
                      "impactExecuteRequestObject"
                    ]
                  }
                },
                "sort": {
                  "attributes": [
                    {
                      "doId": "_DESC",
                      "sortType": "_STRING"
                    }
                  ]
                },
                "distinct": {
                  "attributes": [
                    "doId",
                    "doType"
                  ]
                },
                "aggregate": {
                  "attributes": [
                    "contentTemplateModel",
                    "templateQualificationConfig",
                    "businessRule",
                    "businessCondition",
                    "ruleContextMappings"
                  ]
                },
                "fields": {
                  "attributes": [
                    "_ALL"
                  ]
                }
              }
            }
          }
        }
      },
      {
        "id": "groomEntityManageEvents",
        "name": "Schedule of grooming entity manage events",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T01:59:26.107-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6da3f365-b220-423a-9bdc-24230ad618cc",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d3855631-1ecf-484e-9557-19d638537414",
                  "value": "groomEntityManageEvents"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0d4a97ab-51bd-4e41-82ea-b6c68fc2f403",
                  "value": "http://{URI}/api/bulkeventservice/createtask"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 60,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "taskType": "delete",
                "operationType": "inboundService",
                "query": {
                  "filters": {
                    "typesCriterion": [
                      "entitymanageevent"
                    ],
                    "attributesCriterion": [
                      {
                        "sourceTimestamp": {
                          "gt": "2018-01-01T00:00:01.000+0000",
                          "lt": "now-60d/d",
                          "type": "_DATETIME"
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": "scheduleToLinkSkuToImage",
        "name": "Schedule of linking sku to image",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-09-12T00:33:17.317-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T00:33:17.317-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ccb932f5-5811-4d7d-ba62-c455e30d81ff",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "804efa7e-1022-449a-9846-da7216d6e1a0",
                  "value": "schedule-sku-image-link"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ed2821c4-d671-463f-a986-a03b43d85599",
                  "value": "http://{URI}/api/rsGenericInboundService/process"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 60,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "taskType": "processScheduledGraphRequests",
                "operationType": "inboundService",
                "batchSize": 1000,
                "query": {
                  "filters": {
                    "attributesCriterion": [
                      {
                        "status": {
                          "exact": "QUEUED"
                        }
                      },
                      {
                        "taskType": {
                          "exact": "sku-to-image-linking"
                        }
                      },
                      {
                        "graphprocessconfig": {
                          "exacts": [
                            "sku_hasimages"
                          ]
                        }
                      }
                    ],
                    "typesCriterion": [
                      "scheduledrequestobject"
                    ]
                  }
                },
                "sort": {
                  "attributes": [
                    {
                      "dataObjectId": "_DESC",
                      "sortType": "_STRING"
                    }
                  ]
                },
                "distinct": {
                  "attributes": [
                    "dataObjectId",
                    "graphprocessconfig"
                  ]
                }
              }
            }
          }
        }
      },
      {
        "id": "retryDownloadAssets",
        "name": "Schedule for Retry of Download of Assets From URL",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T01:54:44.942-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "33f76853-31bb-4508-bf9f-93568f20bae1",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5001d545-ec1c-410e-b032-a09fbea78b73",
                  "value": "retryDownloadAssetsFromURL"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c1fbbe37-28d0-4f8a-ad44-cfb12a5648f4",
                  "value": "http://{URI}/api/rsConnectService/publish"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 480,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "filters": {
                    "attributesCriterion": [
                      {
                        "imagestatus": {
                          "eq": "ERROR"
                        }
                      }
                    ],
                    "typesCriterion": [
                      "failedimage"
                    ]
                  }
                },
                "fields": {
                  "attributes": [
                    "property_originalurl"
                  ]
                },
                "rsconnect": {
                  "profiles": [
                    "retryDownloadAssetsFromURL"
                  ]
                }
              }
            }
          }
        }
      },
      {
        "id": "groomGenericDiagnosticObjects",
        "name": "Schedule of grooming diagnosticobject",
        "type": "scheduleobject",
        "properties": {
          "enabled": false,
          "createdService": "scheduleObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-29T14:15:13.433-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-29T14:15:13.433-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2957fe89-ca18-4ea5-a47e-fef4a6a7a847",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "acb48248-9733-453c-9455-7ae687ea4f81",
                  "value": "groomGenericDiagnosticObjects"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3be21673-207f-4d52-9fa0-c020e228870b",
                  "value": "http://rdp-rest:8085/rdw/api/bulkgenericservice/createtask"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 1440,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "rdw",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "taskType": "delete",
                "operationType": "inboundService",
                "query": {
                  "filters": {
                    "typesCriterion": [
                      "diagnosticobject"
                    ],
                    "propertiesCriterion": [
                      {
                        "createdDate": {
                          "gt": "2018-07-01T00:00:01.000+0000",
                          "lt": "now-2d/d",
                          "type": "_DATETIME"
                        }
                      }
                    ]
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": "impactidentify-schedule",
        "name": "schedule for impact identification",
        "type": "scheduleobject",
        "properties": {
          "enabled": false,
          "createdService": "scheduleObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-29T14:15:13.401-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-29T14:15:13.401-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cc5d7e40-79dd-4da9-ae4b-526db1ac49ad",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d74b856f-da77-4a0a-be59-67f44f911b4a",
                  "value": "impact-identification"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "424b1460-38d6-433a-bc7d-33c80d08a7e4",
                  "value": "http://rdp-rest:8085/rdw/api/impactmanageservice/identify"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 10080,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "rdw",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "options": {
                  "maxRecords": 1000
                },
                "query": {
                  "filters": {
                    "attributesCriterion": [
                      {
                        "status": {
                          "exact": "QUEUED"
                        }
                      },
                      {
                        "chBucket": {
                          "exact": "DDG"
                        }
                      }
                    ],
                    "typesCriterion": [
                      "impactIdentifyRequestObject"
                    ]
                  }
                },
                "sort": {
                  "attributes": [
                    {
                      "doId": "_DESC",
                      "sortType": "_STRING"
                    }
                  ]
                },
                "groupBy": {
                  "attributes": [
                    "chBucket"
                  ]
                },
                "distinct": {
                  "attributes": [
                    "doId",
                    "doType"
                  ]
                },
                "aggregate": {
                  "attributes": [
                    "evId"
                  ]
                },
                "fields": {
                  "attributes": [
                    "_ALL"
                  ]
                }
              }
            }
          }
        }
      },
      {
        "id": "scheduleToGenerateTitleForSkuEntity",
        "name": "Schedule of Title generation for sku entities",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-09-12T00:17:33.775-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T00:17:33.775-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "468ed60d-8b9d-4a95-bc92-175bba739778",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "bc1287d6-0285-4761-b641-f68328f31d6e",
                  "value": "schedule-for-title-generation"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "31b59a15-266b-448d-9f1a-6886e8651f2b",
                  "value": "{uri}/api/rsGenericInboundService/process"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 720,
              "authContext": {
                "x-rdp-userId": "rdp",
                "x-rdp-clientId": "rdpClient",
                "x-rdp-userRoles": "admin"
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "id": "some-other-unknown-id",
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": "scheduleToLinkSkuToProduct",
        "name": "Schedule of linking skus to product",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-09-12T00:28:09.393-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T00:28:09.393-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fa829555-35db-4476-b00d-e0dde4deba6a",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ea1aaeea-c005-4867-8435-d7cd140a0a06",
                  "value": "schedule-sku-product-link"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8c76e0c3-8a32-44d2-b909-74a83e24b379",
                  "value": "http://{URI}/api/rsGenericInboundService/process"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 60,
              "authContext": {
                "x-rdp-userId": "rdp",
                "x-rdp-clientId": "rdpClient",
                "x-rdp-userRoles": "admin"
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "id": "some-other-unknown-id",
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": "digestemailexecute-schedule",
        "name": "schedule for digest email execution",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-09-12T01:03:15.289-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T01:03:15.289-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8ac40937-1205-446c-86c0-eabeb2e38148",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5205ce8a-bb07-49aa-b308-f190854928ca",
                  "value": "impact-execution"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "245eddb2-6c9c-4a97-b0d8-cfe0f0fcab65",
                  "value": "http://uri//api/impactmanageservice/execute"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 15,
              "authContext": {
                "x-rdp-userId": "rdp",
                "x-rdp-clientId": "rdpClient",
                "x-rdp-userRoles": "admin"
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "id": "some-other-unknown-id",
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": "test-schedule",
        "name": "This is a dummy test schedule",
        "type": "scheduleobject",
        "properties": {
          "enabled": false,
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T01:10:43.414-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "976e045e-b397-4a99-8564-f9fe8f08f79c",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d2ef675e-51c3-4a52-9bed-1da042b25285",
                  "value": "Dummy get"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c0f78b4c-f066-491a-871b-535b785106d4",
                  "value": "http://manage.dev1.riversand-dataplatform.com:7075/jcpenney/api/entityservice/get"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 120,
              "authContext": {
                "x-rdp-userId": "rdp",
                "x-rdp-clientId": "rdpClient",
                "x-rdp-userRoles": "admin"
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "id": "some-other-unknown-id",
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ]
                  }
                }
              }
            }
          }
        }
      },
      {
        "id": "authorization-model-execute-schedule",
        "name": "schedule for authorization model execution",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "createdService": "scheduleObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-08-29T14:15:13.385-0500",
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-08-29T14:15:13.385-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c1da5cc8-0c75-4e82-a6bf-906493ebfe0a",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b2f749c3-d60a-4285-aa85-8c6477b546fd",
                  "value": "impact-execution"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "76012c95-d0ef-4b5a-a94c-f1a74a519f23",
                  "value": "http://rdp-rest:8085/rdw/api/impactmanageservice/execute"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 15,
              "authContext": {
                "x-rdp-userRoles": "admin",
                "x-rdp-clientId": "rdpclient",
                "x-rdp-tenantId": "rdw",
                "x-rdp-ownershipdata": "",
                "x-rdp-userid": "system_user",
                "x-rdp-username": "system",
                "x-rdp-useremail": "system",
                "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "options": {
                  "maxRecords": 100
                },
                "query": {
                  "filters": {
                    "attributesCriterion": [
                      {
                        "status": {
                          "exact": "QUEUED"
                        }
                      },
                      {
                        "authorizationModel": {
                          "exact": "authorizationModel"
                        }
                      }
                    ],
                    "typesCriterion": [
                      "impactExecuteRequestObject"
                    ]
                  }
                },
                "distinct": {
                  "attributes": [
                    "doId"
                  ]
                },
                "aggregate": {
                  "attributes": [
                    "domain",
                    "entityType",
                    "locale"
                  ]
                },
                "fields": {
                  "attributes": [
                    "_ALL"
                  ]
                }
              }
            }
          }
        }
      },
      {
        "id": "groomEntityGovernEvents",
        "name": "Schedule of grooming entity govern events",
        "type": "scheduleobject",
        "properties": {
          "enabled": true,
          "modifiedService": "scheduleObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-09-12T02:05:57.499-0500"
        },
        "data": {
          "attributes": {
            "scheduleType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "30481f8f-6e8b-40f6-9fdf-68a661b767ca",
                  "value": "fixedRate"
                }
              ]
            },
            "scheduleTaskName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a3c5e613-5600-46b6-a6a6-eec622b95719",
                  "value": "groomEntityGovernEvents"
                }
              ]
            },
            "scheduleTaskUrl": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "193e14d1-4770-4607-beee-92caf37d2a08",
                  "value": "http://{URI}/api/bulkeventservice/createtask"
                }
              ]
            }
          },
          "jsonData": {
            "scheduleConfiguration": {
              "intervalInMins": 60,
              "authContext": {
                "x-rdp-userId": "rdp",
                "x-rdp-clientId": "rdpClient",
                "x-rdp-userRoles": "admin"
              }
            },
            "scheduleTaskPayload": {
              "params": {
                "query": {
                  "id": "some-other-unknown-id",
                  "filters": {
                    "typesCriterion": [
                      "sku"
                    ]
                  }
                }
              }
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 16
  }
}
</code></pre>

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.