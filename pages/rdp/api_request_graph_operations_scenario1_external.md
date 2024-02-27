---
title: Track Graph Operations with Success Status
sidebar: rdp_sidebar
permalink: api_request_graph_operations_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can track the "Send Sku for Graph Processing" request with "Success" status using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API. 

## Scenario

Consider that you wish to send the SKU for graph processing when the productId is updated. When [Send SKU for Graph Processing](/{{site.data.rdp_links_version.APP}}/ddg_riversand_business_language_scenarios_compost2.html){:target="_blank"} business rule is triggered, a graph processor is invoked to send the SKU for graph processing. Wherein a request object is generated for this graph operation with the "requestStatus" value as **success**.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject". 
* query -> filters -> attributesCriterion -> serviceName: Specify "entityGraphManageService" to get the request status of the graph operation.
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
        <span style="background-color: #FFFF00">  "typesCriterion": [ </span>
          "requestobject"
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00"> "requestGroupId": { </span>
              "exact": "31c63e39-6d57-4594-a6dd-5b11fe451e55"
            },
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
    }
  }
}
</code>
</pre>

## Response

The following response is received if the requested graph operation is submitted successfully:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e72e561e-cb1e-44a7-a019-71f87a2c5637",
    "maxRecords": 100,
    "taskId": "e72e561e-cb1e-44a7-a019-71f87a2c5637"
  },
  "response": {
    "requestObjects": [
      {
        "id": "b391c937-288f-47d9-92c6-2a7b44acb43a",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2021-06-28T23:29:14.772-0500",
          "modifiedDate": "2021-06-28T23:29:14.772-0500"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "ddab2b82-0f01-4225-b1e5-380eaed647b0",
                  "value": "create",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "42e60a03-76f7-47bf-8388-c3e4aa1b32c4",
                  "value": "test45",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "e41b34cc-aac1-4e7c-ad0b-332fc6f09e81",
                  "value": "sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "id": "b1abaa78-e2d0-4647-8ef3-02ba5a29d7db",
                  "value": "entityGraphManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "90a2fbb4-f7a5-4f40-8910-f2be420c508a",
                  "value": "b391c937-288f-47d9-92c6-2a7b44acb43a",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00"> "requestStatus": { </span>
              "values": [
                {
                  "id": "ddcd1263-0cb3-4b3c-b7d7-e7673e5cf869",
                  <span style="background-color: #FFFF00"> "value": "success", </span>
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "46f4971f-48be-4bb9-b754-650c482e73f7",
                  "value": "b391c937-288f-47d9-92c6-2a7b44acb43a",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "4f7f9655-ab59-4349-9d38-6c77798bc36e",
                  "value": "b391c937-288f-47d9-92c6-2a7b44acb43a",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "cdcfd22c-b7a6-4982-9755-7785c65d775d",
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "8728f7aa-abb1-4eb7-a8da-af0dd0b556da",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "bf5fe30b-0f80-4c8f-ab5d-1b971efaebb4",
                  "value": 1624940954752,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "id": "f133c9ac-454d-464e-862f-7eb529ff0317",
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "id": "6d3213c0-d42b-4430-a6aa-81f4d9c021c1",
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "queuedDate": {
              "values": [
                {
                  "id": "a5b6d6ff-73b0-4b20-8f3d-b75e8f3c45a3",
                  "value": "2021-06-29T09:59:14.570+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingStartDate": {
              "values": [
                {
                  "id": "3685164a-af1c-40ae-b87c-d235b143e1f3",
                  "value": "2021-06-29T09:59:14.575+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInQueue": {
              "values": [
                {
                  "id": "71247b39-7df2-4cb7-be93-689f717eec2e",
                  "value": "5",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "processingEndDate": {
              "values": [
                {
                  "id": "317091e1-a907-4b41-9e72-c32c71ef358f",
                  "value": "2021-06-29T09:59:14.739+0530",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "timeSpentInProcessing": {
              "values": [
                {
                  "id": "df5a71a7-4539-4b6b-98fc-9f74797c5dea",
                  "value": "164",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "appMetrics": {
              "group": [
                {
                  "id": "8c14f02e-c3b5-4c61-b6fc-d006718073a7",
                  "locale": "en-US",
                  "source": "internal",
                  "microApp": {
                    "values": [
                      {
                        "id": "4bd87327-bd12-474d-a5d7-255662177469",
                        "value": "graphProcessing",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "entLinked": {
                    "values": [
                      {
                        "id": "8b2edf6c-fb27-4b2d-9f1e-58e57a41f89c",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impRel": {
                    "values": [
                      {
                        "id": "1fcf7a97-785b-4e61-adb0-890ae0f23bab",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impRelAttr": {
                    "values": [
                      {
                        "id": "1fcf7a97-785b-4e61-adb0-890ae0f23bab",
                        "value": "1",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "graphIdsSuccessful": {
                    "values": [
                      {
                        "id": "f586bbd7-3722-4ba6-8a00-0170f57060d3",
                        "value": "sku_ischildof_product",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impAttr": {
                    "values": [
                      {
                        "id": "4b64325b-b095-4fa9-a897-8a2eb19c707b",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "impEnt": {
                    "values": [
                      {
                        "id": "425bdac6-47f5-4898-9113-8aca7d5c66ac",
                        "value": "2",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            }
          }
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