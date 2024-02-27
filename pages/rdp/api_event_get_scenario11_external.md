---
title: Get Events when an Entity is Deleted
sidebar: rdp_sidebar
permalink: api_event_get_scenario11.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, deleting any data object such as an entity results in the **deleteDataObject** change type. An event in the Riversand Platform records this change type. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get such events using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response.

## Scenario

To get events for a "product" entity when it is deleted.

{% include snippets/header.html %}

## Request

Consider a "product" entity. You deleted the entity. To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> attributesCriterion : Specify the required entity Id for which you wish to query the events.
* query -> typesCriterion : As this change type occurred on the managed data, specify as "entitymanageevent".

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
          <span style="background-color: #FFFF00">"entitymanageevent"</span>
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "entityId": {
              "exact": "PoloWomen"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ],
      "contexts": [
        "_ALL"
      ]
    },
    "sort": {
      "properties": [
        {
          "modifiedDate": "_DESC",
          "sortType": "_DATETIME"
        }
      ]
    },
    "options": {
      "maxRecords": 1
    }
  }
}
</code>
</pre>

## Response

Returns the events generated for "deleteDataObject" change type. The following response snippet demonstrates a generated event related to delete a data object of type entity. As you can see the response, the events show that the "product" entity is deleted.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "dd874dc2-5727-4a5a-89a3-57edd6bfc680",
    "maxRecords": 1
  },
  "response": {
    "events": [
      {
        "id": "79aadf89-2f9e-47fa-9257-366e3f7c2e9c",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-09-07T00:25:06.082-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1dda9db6-2858-45d9-b64f-4144b163540a",
                  "value": "PW"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "deleteDataObject"
              }
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "103871ed-643c-4db9-bd4a-07d9c9591fab",
                  "os": "defaults",
                  "osid": "product_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "deleteDataObject"
              }
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "b9b54f74-96dc-4e8b-8c68-3ec9956e66f3",
                  "os": "defaults",
                  "osid": "product_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2018-09-06T05:21:57.151-0500"
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "deleteDataObject"
              }
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4ce19631-780d-4d25-8791-025b07d4b868",
                  "os": "defaults",
                  "osid": "product_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "deleteDataObject"
              }
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2688bde1-5e22-4086-b771-a3c9c662a6eb",
                  "os": "businessRule",
                  "osid": "UpdateMDMIDForProduct_businessRule",
                  "ostype": "businessRule",
                  "value": ""
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "deleteDataObject"
              }
            },
            "eventSubType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7fd6b6be-cc7b-44dc-b653-ffeff10481e4",
                  "value": "EntityDelete"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "6292b4bb-2f97-4d47-94cc-be3cf4146200",
                  "value": "rufClient"
                }
              ]
            },
            "sourceTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9fce0736-d60f-44fc-8f28-37e8a3b5ed00",
                  "value": "2018-09-07T00:25:06.075-0500"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "260489cb-4ed0-4c30-898e-5d89e28f57b6",
                  "value": "product"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c75686a7-0420-48b3-b060-d3426cd057d9",
                  "value": "PoloWomen"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7b9f5769-d5d3-4842-898a-7d5c1ce9230f",
                  "value": "EntityDelete"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "49ea49e6-f66a-46e1-bc49-5bea68cf8890",
                  "value": "delete"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5802b4c4-aaea-4a29-ba5b-3f064f0bbf84",
                  "value": "97ab3f99-71c4-4d4b-814d-5848f750d0a8"
                }
              ]
            }
          },
          "relationships": {
            "eventTarget": [
              {
                "id": "704e02d3-172b-42b1-9798-f19bd5cecb12",
                "relTo": {
                  "id": "PoloWomen",
                  "type": "product"
                },
                "properties": {
                  "version": 1
                }
              }
            ],
            "crosssell": [
              {
                "relTo": {
                  "id": "PoloTies",
                  "type": "product"
                },
                "attributes": {
                  "effto": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "b9c70823-b92f-4bbd-b37a-570cc801ac14",
                        "value": "2018-06-21"
                      }
                    ],
                    "properties": {
                      "changeContext": "entityManageService",
                      "changeType": "deleteDataObject"
                    }
                  },
                  "linkdescription": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "8f575a6a-cab4-4a71-b8d1-541edfd1de18",
                        "value": "Men's formal shirts"
                      }
                    ],
                    "properties": {
                      "changeContext": "entityManageService",
                      "changeType": "deleteDataObject"
                    }
                  }
                },
                "id": "PoloWomen",
                "properties": {
                  "relationshipType": "association"
                }
              }
            ]
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 5
  }
}
</code></pre>

## Key points to consider for verification

The following lists key points you can consider for your verification when you get an event generated for any of the create, update, or delete operation you carried out on a data object such as an entity. This aids you in troubleshooting the requests, if there are any errors. 

* The attributes such as eventType and entityAction helps you find out which operation has triggered this event. In the above [response](#response), eventType indicates that "EntityDelete" has triggered this event. 
* The attributes such as relatedRequestId helps you get the request Id of the request which has triggered this event. In the above [response](#response), relatedRequestId indicates the request Id for the "delete" operation which deleted an exiting entity triggering an event.
* The {{site.data.rdp_glossary.getevent}} API also returns the corresponding [change type](api_event_change_types.html) properties for each of the created, updated, or deleted contexts, attributes, or relationships. In the above [response](#response), "changeType" indicates "deleteDataObject" as you deleted an exiting entity.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.