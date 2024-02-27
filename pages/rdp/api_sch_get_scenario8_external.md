---
title: Get schedule objects which are Inactive
sidebar: rdp_sidebar
permalink: api_sch_get_scenario8.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.schget}}** to get a schedule object, using a scenario. 

## Scenario

To get schedule objects which are inactive.

{% include snippets/header.html %}

## Request

To get the above schedule object, you can use the REST API {{site.data.rdp_glossary.schget}}. In the request send the following details:

* fields -> propertiesCriterion: Specify the property "enabled" as "false".
* query -> filters -> typesCriterion: Specify the type as "scheduleobject".

<pre>
<code>
POST **{TenantURL or ID}/api/schedulerservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"scheduleobject"</span>
        ],
        "propertiesCriterion": [
          {
            <span style="background-color: #FFFF00">"enabled": {</span> 
              "exact": "false"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "totalRecords": 100
    }
  }
}
</code>
</pre>

## Response

Returns the schedule objects which are inactive.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "8f35161e-8a85-408a-a7a1-71a9571dad6b",
    "maxRecords": 2000
  },
  "response": {
    "scheduleObjects": [
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
      }
    ],
    "status": "success",
    "totalRecords": 5
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshoot the Scheduler Services](api_troubleshoot_sch.html), for common troubleshooting tips in-case you encounter any errors.