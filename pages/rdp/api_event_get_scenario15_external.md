---
title: Get Workflow History of an Entity for a particular Workflow Activity
sidebar: rdp_sidebar
permalink: api_event_get_scenario15.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get workflow events of an entity for a Workflow Activity, using a scenario.

## Scenario

To get the workflow events of an entity "sku" for the "skuSubmission" activity of the "NewSKUIntroduction" workflow.

{% include snippets/header.html %}

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> contexts : Specify the context type as "self" and entity id as "eOzo0e4AwpV0l".
* query -> contexts : Specify the name of the workflow as "NewSKUIntroduction".
* query -> typesCriterion : Specify as "entitygovernevent".
* query -> attributesCriterion : Specify the activityName as "skuSubmission".

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "self": "self/eOzo0e4AwpV0l",
          "workflow": "NewSKUIntroduction"
        }
      ],
      "filters": {
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "activities/activityName": {
              "eq": "skuSubmission"
            }
          }
        ],
        "typesCriterion": [
          <span style="background-color: #FFFF00">"entitygovernevent"</span>
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
    "options": {
      "totalRecords": 1
    }
  }
}
</code>
</pre>

## Response

Returns the workflow events for the "sku" entity. In the response, you can view all the govern events related to "skuSubmission" activity of the "NewSKUIntroduction" workflow.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "63a059d2-d2e1-492e-a2dd-8bc974b51f48",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "f6313562-5372-4ab2-8538-d11ad24768ed",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-06T05:50:55.273-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "00987d77-93fb-450a-b250-6f0d14892043",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b505b534-9859-4dda-8df9-4f09c1f79780",
                  "value": "governanceClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "78d0cf0e-5a61-488e-98b8-355bbfc8a844",
                  "value": "2018-09-06T05:50:55.271-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ab3a4e40-1909-4e0f-92ae-ef3c97c76d6d",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ef4fc251-4736-40a0-97cb-6a716e955deb",
                  "value": "z_fAPRXkRMG00mxpBbzVfg"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "caf52f65-de19-4e03-b289-198f5553ae86",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "244bafbf-cf18-4500-900c-9f941acd8680",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a8545e54-9b79-4e44-ae01-1187658c7624",
                  "value": "b5f62a91-bcf7-4ed1-a834-a6745e87eec3"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b7fbaa03-0903-453b-9475-797f30993198",
                  "value": "79e3b19d-131f-4dec-a23a-fd0ad64d6460"
                }
              ]
            }
          },
          "relationships": {
            "eventTarget": [
              {
                "id": "e6d14791-b1ce-40ec-b337-a28606829725",
                "relTo": {
                  "id": "z_fAPRXkRMG00mxpBbzVfg",
                  "type": "sku"
                },
                "properties": {
                  "version": 1
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "self": "self",
                "workflow": "NewSKUIntroduction"
              },
              "attributes": {
                "activities": {
                  "group": [
                    {
                      "workflowInstanceId": {
                        "values": [
                          {
                            "id": "fd8e25f7-9883-457c-bd5b-5881a22c5881",
                            "value": "ade8d7af-c409-4d1d-80c1-6c37f83af1e1"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "f394a19a-87ac-46b0-bd6c-b9ad7326ee5e",
                            "value": "ef11d50d-7cc1-4b38-a5ff-38139d7145d0"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "1ab2c387-d14d-4c60-bae0-9e2da6fcd9e0",
                            "value": "skuSubmission"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "437989b8-bc46-4153-a7cd-22722a0804b2",
                            "value": "dev1admin@riversand.com"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "4bd8bcaf-8014-4954-99a7-4dac3db6203e",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "f7e54f20-0ede-4fe9-b492-44095ab3da45",
                            "value": "2018-09-06T10:50:50.617-0500"
                          }
                        ]
                      },
                      "id": "aa0831f5-08ae-40ff-b05c-36423a6bed9f"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addAttributeToContext"
                  }
                }
              }
            }
          ]
        }
      },
      {
        "id": "b3e6c60c-4da8-4312-9db9-b2311ffb7931",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-06T05:50:53.390-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4907da30-afe9-4729-ac8d-98f5fed7874c",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ea310b34-f561-455f-9947-8f7d38dc9646",
                  "value": "governanceClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "34596793-fbeb-4857-9fba-1239718c5468",
                  "value": "2018-09-06T05:50:53.362-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "14fb0d15-0674-4587-b948-447128022d57",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "240dbdb4-4ec2-4236-beb4-7da8ddb8c802",
                  "value": "3pQ8YRwQRfy_6pMizXhStw"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "95715c7a-241f-43f0-9207-158168587122",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0ac16a9f-f767-4185-9d55-5e3670406b93",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2b5851bb-3066-40de-97bd-ec4b652c8c2a",
                  "value": "3b1a17ef-de59-43b9-b547-ffd0d5659eba"
                }
              ]
            },
            "taskId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e882f6df-47d5-490e-bdd7-363defcb813a",
                  "value": "79e3b19d-131f-4dec-a23a-fd0ad64d6460"
                }
              ]
            }
          },
          "relationships": {
            "eventTarget": [
              {
                "id": "11ae5ef8-ddab-4219-8d89-28f7212d8d6e",
                "relTo": {
                  "id": "3pQ8YRwQRfy_6pMizXhStw",
                  "type": "sku"
                },
                "properties": {
                  "version": 1
                }
              }
            ]
          },
          "contexts": [
            {
              "context": {
                "self": "self",
                "workflow": "NewSKUIntroduction"
              },
              "attributes": {
                "activities": {
                  "group": [
                    {
                      "workflowInstanceId": {
                        "values": [
                          {
                            "id": "cceda511-4656-41d2-b2a2-c3e4fc60d9f5",
                            "value": "d83b67eb-6256-4e45-9f35-9fd54d603b6c"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "cc29afe4-64e0-47f4-8a6a-2bb3153c024a",
                            "value": "ef11d50d-7cc1-4b38-a5ff-38139d7145d0"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "6b18b811-2cdf-49d1-b89e-9e222ca7c980",
                            "value": "skuSubmission"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "a5d09825-2192-4f85-91a5-da3833129b2f",
                            "value": "dev1admin@riversand.com"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "f6493d2b-4b83-4710-b43e-f647d3dfa56e",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "34044add-0d0a-4139-a0d7-6275906077c3",
                            "value": "2018-09-06T10:50:49.117-0500"
                          }
                        ]
                      },
                      "id": "c592d438-a3e0-489b-8e71-3231fbd9a253"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addAttributeToContext"
                  }
                }
              }
            }
          ]
        }
      }
      .
      .
      .
      .
      .
    ],
    "status": "success",
    "totalRecords": 34
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.