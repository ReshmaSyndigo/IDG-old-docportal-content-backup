---
title: Get the Details of Work done in Entity Manage App
sidebar: rdp_sidebar
permalink: api_request_work_done_manage_app.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

You can get the details of the work done in the **Entity Manage** app using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the work done in the **Entity Manage** app based on the **Default value population**, **Rule evaluation**, **Data Resolution**, and **ARC count**.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityManageService" to get the details of the work done in the **Entity Manage** app.
* query -> fields -> attributes: Specify "_ALL" to get all attributes of the request.

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "requestobject"
        ],
        "attributesCriterion": [
          {
            "requestGroupId": {
              "exacts": "fc005fce-7150-470c-89cf-3c43683d5c04"
            }
          },
          {
            <span style="background-color: #FFFF00"> "serviceName": { </span>
              "exact": "entityManageService"
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
      "maxRecords": 100
    },
    "sort": {
      "properties": [
        {
          "createdDate": "_DESC",
          "sortType": "_DATETIME"
        }
      ]
    }
  }
}
</code>
</pre>

## Response

The following response is received if the request is submitted successfully:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "934fc58d-009c-41f8-b5bf-ad5948eeccdd",
    "maxRecords": 100,
    "taskId": "934fc58d-009c-41f8-b5bf-ad5948eeccdd"
  },
  "response": {
    "requestObjects": [
      {
        "id": "672c32b6-22c8-4c35-968a-b4f89aa163d5",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2021-06-20T09:53:58.667-0500",
          "modifiedDate": "2021-06-20T09:53:58.667-0500"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "7dba2781-55ac-4fd7-a424-7dc58a55f5c8",
                  "value": "create",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "84cacd79-58a7-4800-83bb-83afd73b8c41",
                  "value": "test15",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "2150ca19-0b9c-4863-92a7-a25ffec0d811",
                  "value": "sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "id": "36656805-2464-4935-b88e-9182af400b91",
                  "value": "entityManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "65d5ddd1-79da-41e2-a232-984cdebf331c",
                  "value": "672c32b6-22c8-4c35-968a-b4f89aa163d5",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "id": "c38e8e7d-3398-4374-927f-d8cbaba86577",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "cf974acf-34d0-44bd-9734-2427e687963b",
                  "value": "672c32b6-22c8-4c35-968a-b4f89aa163d5",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "f7c7eb44-153a-4dc0-ac9c-ed59d9117044",
                  "value": "672c32b6-22c8-4c35-968a-b4f89aa163d5",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "fae8cdc1-99f0-44a4-ab52-bc038084928a",
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "8aa43015-d417-4ab0-bfc7-11349dae8cf3",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "362929e4-646d-401b-9789-0f9a78aebb1a",
                  "value": 1624200838636,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "id": "1ce13eed-80c4-4f79-b9ff-d091f6d7fce1",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "id": "3b203761-3232-41d1-979e-6ca82f4e95df",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "queuedDate": {
              "values": [
                {
                  "id": "fc5f7809-d711-4135-977d-1fa0c670efe5",
                  "value": "2021-06-20T20:23:50.536+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingStartDate": {
              "values": [
                {
                  "id": "69c8671e-abec-4df0-bddf-4cce32cb0782",
                  "value": "2021-06-20T20:23:50.718+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInQueue": {
              "values": [
                {
                  "id": "c2a2f593-9920-43ca-a972-be432e9bf3a4",
                  "value": "182",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingEndDate": {
              "values": [
                {
                  "id": "d4e17645-bb74-4462-b743-a14991bddf74",
                  "value": "2021-06-20T20:23:58.381+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInProcessing": {
              "values": [
                {
                  "id": "046578ed-9a1a-478b-bfa7-5febf4057fa0",
                  "value": "7663",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00"> "ARCCount": { </span>
              "group": [
                {
                  "id": "a33d4dc0-972a-4201-ab3a-9c61f3dffca4",
                  "locale": "en-US",
                  "source": "internal",
                  "incCtx": {
                    "values": [
                      {
                        "id": "7f7eade3-1982-4bac-87ad-987893b28e6e",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impRelAttr": {
                    "values": [
                      {
                        "id": "6a695661-0dd3-4353-9436-461987220349",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incRel": {
                    "values": [
                      {
                        "id": "eaca9c4d-d646-4253-bf51-bfae1efc545e",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impAttr": {
                    "values": [
                      {
                        "id": "bab57485-9fea-4797-9f85-b3d1cbe4052c",
                        "value": "6",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incRelAttr": {
                    "values": [
                      {
                        "id": "001b5010-6fab-4f31-8545-7e9b78bd19bf",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "incAttr": {
                    "values": [
                      {
                        "id": "9cb3454d-8781-4939-a76e-d5c07427010d",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impCtx": {
                    "values": [
                      {
                        "id": "aa0d38c2-3517-4111-879d-c4e03db159af",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impRel": {
                    "values": [
                      {
                        "id": "88adc235-e7cf-408f-8a4e-1e78081d5133",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "appMetrics": {
              "group": [
                {
                  "id": "d7a6331c-0d5e-4020-a8fd-33fd5e6ae91b",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "dee984a0-73ab-443a-87dd-b00a6d24abec",
                        <span style="background-color: #FFFF00"> "value": "defaultValuesPopulation", </span>
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procRelAttr": {
                    "values": [
                      {
                        "id": "2dc527ab-5487-48e1-93cf-75909e8b54db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procAttr": {
                    "values": [
                      {
                        "id": "d96842eb-277f-4241-a85c-99afae92c876",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "timeSpent": {
                    "values": [
                      {
                        "id": "46c0967e-d03f-4363-8828-5b94e18b8906",
                        "value": "78",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "66f43ab9-4c1d-4fa9-9fb9-70c004ee1c48",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "7ecabe9a-9423-448b-a7b0-940921632be1",
                        <span style="background-color: #FFFF00"> "value": "ruleEvaluation", </span>
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procAttr": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procRelAttr": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procRel": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "timeSpent": {
                    "values": [
                      {
                        "id": "ca08706c-0581-4b66-aa70-5df44ceece78",
                        "value": "487",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "rulesRun": {
                    "values": [
                      {
                        "id": "d007624d-75c8-4d1d-a2c2-a907538f6e65",
                        "value": "5",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                   "erroredRules": {
                    "values": [
                      {
                        "id": "d007624d-75c8-4d1d-a2c2-a907538f6e65",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "procCtx": {
                    "values": [
                      {
                        "id": "ab9028d7-d25c-4c87-84c0-09457d14b9db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "restAPICalls": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "addCtxLoaded": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "loadedBRs": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "loadedBCs": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "qualifiedBRs": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                },
                {
                  "id": "66f43ab9-4c1d-4fa9-9fb9-70c004ee1c48",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "7ecabe9a-9423-448b-a7b0-940921632be1",
                        <span style="background-color: #FFFF00"> "value": "dataResolution", </span>
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "refValRes": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "refValCop": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "uomValRes": {
                    "values": [
                      {
                        "id": "a3cf228c-c186-43ed-871f-e3e491181cb2",
                        "value": "3",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "pathValRes": {
                    "values": [
                      {
                        "id": "ca08706c-0581-4b66-aa70-5df44ceece78",
                        "value": "487",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "pathValCop": {
                    "values": [
                      {
                        "id": "d007624d-75c8-4d1d-a2c2-a907538f6e65",
                        "value": "5",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "invalidVal": {
                    "values": [
                      {
                        "id": "ab9028d7-d25c-4c87-84c0-09457d14b9db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "unmodAttrs": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "unmodRelAttrs": {
                    "values": [
                      {
                        "id": "036b7837-6b64-440f-a623-50a9034be7db",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            }
          },
          "jsonData": {}
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.