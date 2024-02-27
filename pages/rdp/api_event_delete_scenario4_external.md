---
title: Get Govern History for Entity
sidebar: rdp_sidebar
permalink: api_event_delete_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, there are various govern events in an entity. When a govern event is deleted from an entity Riversand Platform records these change types. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get such events using a [scenario](#scenario).

## Scenario

To get histoty of govern events for "sku" entity.

{% include snippets/header.html %}

## Request

In the request send the following details:

* query -> attributesCriterion : Specify the required entity Id for which you wish to get the events.
* query -> typesCriterion : As this change type occurred on the govern data, specify as "entitygovernevent". 

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"entitygovernevent"</span>
        ],
        "attributesCriterion": [
          {
            "entityId": {
              <span style="background-color: #FFFF00">"exact": "edk5ZXwfvQfX9"</span>
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
      "maxRecords": 1000
    }
  }
}
</code>
</pre> 

## Response

Returns the events that are currently present for "sku" entity. As you can see in the response, the "GovernAdd" event that was deleted in the [Delete Entity Govern Event](api_event_delete_scenario3.html) is not present. All the other events corresponding to the entity, such as GovernUpdate can be seen.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "5c46296d-56c3-4e89-8c91-c969e5875491",
    "maxRecords": 1000
  },
  "response": {
    "events": [
      {
        "id": "d455da80-e743-42ab-91d4-45b15400f1a3",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-24T00:27:13.930-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0a2f4319-ed30-40cc-8bc8-59ea0d57a6a6",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e72ce16c-88e3-4285-8254-870495d622ec",
                  "value": "governanceClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c1030baf-174d-4553-8836-02c48cebffa6",
                  "value": "2018-09-24T00:27:13.930-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f5ae4836-84ed-4071-a742-8b24189a642c",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "bf6c2e11-2055-4a84-bfe2-6f28fac5bd0d",
                  "value": "edk5ZXwfvQfX9"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b18f4aae-f9fe-4dc3-92b2-9489ac189aec",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4a1a44a2-7003-4798-ae82-c298be3bf552",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e99cf4bb-0de9-43f8-8fd0-00463de37476",
                  "value": "fce9a7ba-2db4-40c8-8496-6fa41ae3b190"
                }
              ]
            }
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
                            "id": "f45436bc-1478-4db2-9832-fcda734fec13",
                            "value": "182d6304-2c60-4965-bb31-81f39f4ab889"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "9dfd312c-12e4-4589-a958-72e58450dacd",
                            "value": "ef11d50d-7cc1-4b38-a5ff-38139d7145d0"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "a088a9f3-8e1c-4a34-91d4-1ef72152da34",
                            "value": "skuSubmission"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "20cfecf7-d393-4ea6-905d-25c16de75601",
                            "value": "dev1admin@riversand.com"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "2d6b77e0-1a1f-4bf4-8f8b-bb7e1b8c6e37",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "ab4d03d2-ebd9-4b60-84dc-edfcd8eddd18",
                            "value": "2018-09-24T05:27:12.637+0000"
                          }
                        ]
                      },
                      "id": "a7b62a73-ff5d-4b7b-be77-19650babb20e"
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
        "id": "8c1fb2a2-2368-41f1-a61a-5ec0303830fd",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-09-24T00:27:12.844-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "013c68b7-f26c-4e5d-a7e2-30999ad8e2bf",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "fbed6597-8227-4e7c-8734-26360a45f6bf",
                  "value": "governanceClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "85b5b778-9653-4541-b2dc-db0f6c5c8d3f",
                  "value": "2018-09-24T00:27:12.844-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6e538bc0-479b-4eea-a3b7-675211c0a6e3",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b6f0ccbf-a551-4d88-ba25-2156fde317ef",
                  "value": "edk5ZXwfvQfX9"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "16426e73-be8d-4bd6-917b-5ea07cd696a5",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "34340dc8-0672-4880-9dc8-6d1a969899e1",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "dfc2aa57-377d-4380-8c26-628507ee4611",
                  "value": "fce9a7ba-2db4-40c8-8496-6fa41ae3b190"
                }
              ]
            }
          },
          "contexts": [
            {
              "context": {
                "self": "self",
                "workflow": "NewSKUIntroduction"
              },
              "attributes": {
                "workflowInstanceId": {
                  "values": [
                    {
                      "id": "e9da0cc5-79ba-46bf-8550-31238717224b",
                      "value": "182d6304-2c60-4965-bb31-81f39f4ab889"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "d6fac620-d1c2-409e-b6e7-51493a1dd486",
                      "value": "2018-09-24T05:27:12.511+0000"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                },
                "status": {
                  "values": [
                    {
                      "id": "3d98f44a-9884-43e3-b60d-0223b64b3423",
                      "value": "Executing"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                }
              },
              "properties": {
                "changeContext": "entityGovernService",
                "changeType": "addContext"
              }
            }
          ]
        }
      },
      {
        "id": "fbbdf776-b860-476e-887f-74a3b7316dd3",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityGovernService",
          "modifiedBy": "dev1admin@riversand.com_user",
          "modifiedDate": "2018-09-24T00:27:33.023-0500"
        },
        "data": {
          "attributes": {
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "dc8f9be5-e7a7-4e3a-980a-c8965a38fa4d",
                  "value": "GovernUpdate"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "35d7781f-f72f-4904-b282-98fc2cc23b66",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5bc8609f-0835-4e98-bd8b-3105c606f8bf",
                  "value": "2018-09-24T00:27:33.023-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5a0a889a-1ef6-4863-8a30-acb214785aa8",
                  "value": "sku"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "55e6c1b1-5738-457e-92fa-80a1ab462c7d",
                  "value": "edk5ZXwfvQfX9"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d4b2874e-40e1-44eb-b5ce-a8301c6753dc",
                  "value": "GovernUpdate"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "45438825-0301-457e-80d8-ddf91cc68192",
                  "value": "update"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3d1f9950-6436-4854-89cd-889258c55768",
                  "value": "0a86d7e4-9c84-41c6-b6f4-bbd09709d852"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 3
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.