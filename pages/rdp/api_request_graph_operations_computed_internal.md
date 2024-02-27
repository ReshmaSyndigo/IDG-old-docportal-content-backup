---
title: Get the Details of Work Done in Graph Process App
sidebar: rdp_sidebar
permalink: api_request_graph_operations_computed.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can get the details of the work done in the **Graph Process** app using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you wish to get the details of the work done in the **Graph Process** app.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityGraphManageService" to get the details of the work done in the **Graph Process** app.
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
              "exact": "entityGraphManageService"
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
  "id": "04ca8da3-00ff-4328-ae4c-f2b613856f08",
  "type": "requestobject",
  "properties": {
    "createdService": "requestManageService",
    "createdBy": "rdwadmin@riversand.com_user",
    "modifiedService": "requestManageService",
    "modifiedBy": "rdwadmin@riversand.com_user",
    "createdDate": "2021-07-14T06:11:03.810-0500",
    "modifiedDate": "2021-07-14T06:11:03.810-0500"
  },
  "data": {
    "attributes": {
      "entityAction": {
        "values": [
          {
            "id": "fe1925c8-340f-4b57-8f67-6d06d308877b",
            "value": "create",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityId": {
        "values": [
          {
            "id": "42c7125f-d6b3-4e35-a6e0-0fc705f086fc",
            "value": "ers92cRzc13vpFk",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityType": {
        "values": [
          {
            "id": "b904bbac-405c-48c4-abff-46320306f8fc",
            "value": "product",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "serviceName": {
        "values": [
          {
            "id": "78e7c320-a8f3-4bdd-a80f-20b63389100f",
            "value": "entityGraphManageService",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestId": {
        "values": [
          {
            "id": "7d8cfe55-7a0c-465c-94e5-97e7de1983c2",
            "value": "04ca8da3-00ff-4328-ae4c-f2b613856f08",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestStatus": {
        "values": [
          {
            "id": "17f96596-ead1-4667-a23d-f6d6ec3a78cd",
            "value": "success",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "relatedRequestId": {
        "values": [
          {
            "id": "ea634c91-992b-41dc-9d79-5fd3eec7436b",
            "value": "4f53f5b0-d301-456b-a903-7fb67731461f",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestGroupId": {
        "values": [
          {
            "id": "773dd554-7cbe-4827-8dbd-a39e16dd0f8f",
            "value": "952666d6-8358-4929-8647-d4407b3d074c",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "clientId": {
        "values": [
          {
            "id": "282be928-34c3-46c5-a454-c8af93acdd5b",
            "value": "rufClient",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "userId": {
        "values": [
          {
            "id": "6cabc58c-5819-4627-af99-60f3dc76de3b",
            "value": "sunil.manjunath@riversand.com_user",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestTimestamp": {
        "values": [
          {
            "id": "34e9175b-774d-4012-99db-3e5e210007e5",
            "value": 1626261063162,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "SearchStore": {
        "values": [
          {
            "id": "eaa1c450-f6f1-4f3f-b33a-f6324b1beecd",
            "value": "success",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "impacted": {
        "values": [
          {
            "id": "37947465-b3e9-44eb-8ec0-0f59616e210b",
            "value": true,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "graphid": {
        "values": [
          {
            "id": "d3244d41-7d87-4561-be50-b0fda6830943",
            "value": "ed2bbae5-cb7d-4310-b1f4-65359d85cb68",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "graphrepeatcount": {
        "values": [
          {
            "id": "d6e7431f-ec72-445d-b080-437d63526fd5",
            "value": 0,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "queuedDate": {
        "values": [
          {
            "id": "e716d98f-9287-41f7-9f8d-a9a5145ba0ad",
            "value": "2021-07-14T11:11:02.949+0000",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "processingStartDate": {
        "values": [
          {
            "id": "d3522171-d4bf-4d81-a19c-b7c3a7cce384",
            "value": "2021-07-14T11:11:02.958+0000",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "timeSpentInQueue": {
        "values": [
          {
            "id": "c6f61930-eba0-4ad1-a729-c4b5420f0756",
            "value": "9",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "processingEndDate": {
        "values": [
          {
            "id": "d062bfa4-12c9-4551-ae1f-09dded0c3574",
            "value": "2021-07-14T11:11:03.161+0000",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "timeSpentInProcessing": {
        "values": [
          {
            "id": "1471394a-8d95-4499-974e-b4d295386f43",
            "value": "203",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "appMetrics": {
        "group": [
          {
            "id": "7bd24288-648f-4f5a-8874-994b2b502776",
            "locale": "en-US",
            "source": "internal",
            "microApp": {
              "values": [
                {
                  "id": "9841ed79-0857-4aeb-8218-eedeca82d9f6",
                  "value": "graphProcessing",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impRelAttr": {
              "values": [
                {
                  "id": "d4829bb6-247a-45da-8707-bf63d22e6338",
                  "value": "15",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impCtx": {
              "values": [
                {
                  "id": "93b2d01d-3ba8-4c6f-adeb-c802c61636f8",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "linkedEntity": {
              "values": [
                {
                  "id": "93b2d01d-3ba8-4c6f-adeb-c802c61636f8",
                  "value": "5",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impRel": {
              "values": [
                {
                  "id": "2eb44c44-3976-48ec-8ac3-93881e7105a9",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "graphIdsSuccessful": {
              "values": [
                {
                  "id": "8e36df66-68a0-4e37-a9ce-8d8b2d6391bf",
                  "value": "product_ischildof_sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impAttr": {
              "values": [
                {
                  "id": "a84ee293-d75a-460b-94c8-2a3bc722fccf",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "graphIdsFailure": {
              "values": [
                {
                  "id": "a84ee293-d75a-460b-94c8-2a3bc722fccf",
                  "value": "1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impEnt": {
              "values": [
                {
                  "id": "fc991460-2361-4873-942c-1bd453d444f8",
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
    "status": "success",
    "totalRecords": 1
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.