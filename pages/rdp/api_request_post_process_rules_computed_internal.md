---
title: Get the Details of Work done in Post-Process App 
sidebar: rdp_sidebar
permalink: api_request_post_process_rules_computed.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

You can get the details of the work done in the **Post-Process** app using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the work done in the **Post-Process** app based on the **Rule evaluation**, **Data Resolution**, and **ARC** count.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityPostProcessService" to get the details of the work done in the **Post-Process** app.
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
              "exact": "entityPostProcessService"
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

<pre>
<code>
{
  "id": "7b42d1cf-5e1e-4753-b0d2-d3fbf86889b2",
  "type": "requestobject",
  "properties": {
    "createdService": "requestManageService",
    "createdBy": "system_user",
    "modifiedService": "requestManageService",
    "modifiedBy": "system_user",
    "createdDate": "2021-06-20T10:52:16.706-0500",
    "modifiedDate": "2021-06-20T10:52:16.706-0500"
  },
  "data": {
    "attributes": {
      "entityAction": {
        "values": [
          {
            "id": "7de455f4-5475-4f89-9dfc-79630d4acee2",
            "value": "systemupdate",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityId": {
        "values": [
          {
            "id": "568d33cd-72fd-4b4f-9aac-d7d24d58a5f8",
            "value": "test16",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityType": {
        "values": [
          {
            "id": "811a083b-3754-4693-b618-ead939a42a34",
            "value": "sku",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "serviceName": {
        "values": [
          {
            "id": "1aee5e9d-0f14-4153-88d2-90918af7c7ed",
            "value": "entityPostProcessService",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestId": {
        "values": [
          {
            "id": "0bdbd5d4-3d2e-490b-8a98-4992b6e50f30",
            "value": "7b42d1cf-5e1e-4753-b0d2-d3fbf86889b2",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestStatus": {
        "values": [
          {
            "id": "d5b36fa5-5575-4f71-94a6-c4671e09d598",
            "value": "success",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "relatedRequestId": {
        "values": [
          {
            "id": "ef24a16b-3af4-44ad-9970-321891efbd08",
            "value": "9f0b53b7-fbc1-43ca-af36-44f1155831bc",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestGroupId": {
        "values": [
          {
            "id": "a7bc5459-231d-470d-9c2c-7f85ea0f4117",
            "value": "fcd6367d-fb9e-46fa-a80d-a6caede55199",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "clientId": {
        "values": [
          {
            "id": "da622a38-90d7-4d28-a181-aa34878c1b33",
            "value": "rdpclient",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "userId": {
        "values": [
          {
            "id": "9479803f-e48f-44b9-8f15-0a8dbb00ec30",
            "value": "system_user",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestTimestamp": {
        "values": [
          {
            "id": "b7b281a1-0a09-411b-99c7-b848b0b7feec",
            "value": 1624204336670,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "PostProcessRuleRun": {
        "values": [
          {
            "id": "ca1c564a-9bf2-40f5-a543-08cd4a9346d6",
            "value": "success",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "impacted": {
        "values": [
          {
            "id": "1f908ec1-6bf4-4a58-88e0-75f6706e7b68",
            "value": true,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "queuedDate": {
        "values": [
          {
            "id": "cb37d8c8-ab60-4a61-9d53-aee42705efd8",
            "value": "2021-06-20T21:22:12.069+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "processingStartDate": {
        "values": [
          {
            "id": "713a4029-a1ea-4d1b-b4eb-dd0550cf69ff",
            "value": "2021-06-20T21:22:12.072+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "timeSpentInQueue": {
        "values": [
          {
            "id": "d4ee7b4f-4725-42c8-80d2-bf0011e0c493",
            "value": "3",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "processingEndDate": {
        "values": [
          {
            "id": "3fa4dc80-0a1d-4c0d-b8a5-bc12479b6256",
            "value": "2021-06-20T21:22:16.670+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "timeSpentInProcessing": {
        "values": [
          {
            "id": "128c5972-45aa-46d3-98a4-21437f1c6357",
            "value": "4598",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "manageARCCount": {
        "group": [
          {
            "id": "850c0c4f-6532-4838-a9af-23aaf2e02e2b",
            "locale": "en-US",
            "source": "internal",
            "incCtx": {
              "values": [
                {
                  "id": "afed2df6-8c2d-4354-a2e5-aa5a2e1cd47c",
                  "value": "3",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "incRelAttr": {
              "values": [
                {
                  "id": "15aa205a-da7f-45a9-b29e-80482886c5e9",
                  "value": "2",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "incRel": {
              "values": [
                {
                  "id": "ec20a89b-c90d-40ee-bcea-f5a3e76e8b99",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "incAttr": {
              "values": [
                {
                  "id": "8134f06e-a4c1-4ce6-8f6b-7ec02513c864",
                  "value": "6",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          }
        ]
      },
      "governARCCount": {
        "group": [
          {
            "id": "c3903bf3-0ac8-4bd8-84fb-0e9db105a727",
            "locale": "en-US",
            "source": "internal",
            "incCtx": {
              "values": [
                {
                  "id": "9cc32897-d4a9-4935-9d1c-43f55f557fe0",
                  "value": "3",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "incRelAttr": {
              "values": [
                {
                  "id": "97b37694-53b4-4ffe-8226-d1aeb139c741",
                  "value": "2",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "incRel": {
              "values": [
                {
                  "id": "0d865e2f-ab19-40ba-9203-ad436abc4f58",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "incAttr": {
              "values": [
                {
                  "id": "a461fd40-e1ad-403d-a98f-c5ef27820572",
                  "value": "2",
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
            "id": "24b6c3bd-7ab6-45ff-8bd5-31c02b451928",
            "locale": "en-US",
            "source": "internal",
            "microApp": {
              "values": [
                {
                  "id": "824442c6-27f9-49be-ac88-4c117b993c62",
                  <span style="background-color: #FFFF00"> "value": "ruleEvaluation", </span>
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpent": {
              "values": [
                {
                  "id": "81a95a6d-25e1-4fbc-967b-be1e0c58915f",
                  "value": "288",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "rulesRun": {
              "values": [
                {
                  "id": "773d10c3-0366-4d08-adbd-28be130e98b6",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "erroredRules": {
              "values": [
                {
                  "id": "773d10c3-0366-4d08-adbd-28be130e98b6",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "wflwReq": {
              "values": [
                {
                  "id": "d95ecf42-96cd-475c-8508-1e410b0f7ec1",
                  "value": "2",
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
            "graphReq": {
              "values": [
                {
                  "id": "036b7837-6b64-440f-a623-50a9034be7db",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impEnt": {
              "values": [
                {
                  "id": "036b7837-6b64-440f-a623-50a9034be7db",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "selfImpEnt": {
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
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.