---
title: Track Multiple Graph Operations with Request Status
sidebar: rdp_sidebar
permalink: api_request_graph_operations_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can track the "Send SKU for graph processing" and "Auto link an image to SKU" requests with "Success" status using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you have created a single request to track the multiple graph operations such as "Send SKU for graph processing" and "Auto link an image to SKU". A request object is generated for these two graph operations with the "requestStatus" as "success".

**Result:** In this scenario, "Send SKU for graph processing" operation is successful whereas "Auto link an image to SKU" operation is failed. By using the **Request Tracking Service**, you can check the "graphIdsFailed" and take necessary action accordingly. 

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

The following response is received if the requested graph operations are submitted successfully:

<pre><code>
{
  "id": "bfed0815-b822-4358-93df-3f8c848d96b2",
  "type": "requestobject",
  "properties": {
    "createdService": "requestManageService",
    "createdBy": "rdwadmin@riversand.com_user",
    "modifiedService": "requestManageService",
    "modifiedBy": "rdwadmin@riversand.com_user",
    "createdDate": "2021-03-17T01:32:22.752-0500",
    "modifiedDate": "2021-03-17T01:32:22.752-0500"
  },
  "data": {
    "attributes": {
      "entityAction": {
        "values": [
          {
            "id": "f0eb9176-d4af-419f-beb7-364ea966f394",
            "value": "create",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityId": {
        "values": [
          {
            "id": "ff048f23-f8df-4a92-af3a-1376df5aaf4a",
            "value": "sg1",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityType": {
        "values": [
          {
            "id": "7b157a22-6f2c-4c31-aef6-7e350a268516",
            "value": "sku",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "serviceName": {
        "values": [
          {
            "id": "b2cdbe11-bf57-4e55-b96b-2b90810b6ce5",
            "value": "entityGraphManageService",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestId": {
        "values": [
          {
            "id": "9b09ad9b-687d-45aa-8c6f-0a8dd1824b5f",
            "value": "bfed0815-b822-4358-93df-3f8c848d96b2",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      <span style="background-color: #FFFF00"> "requestStatus": { </span>
        "values": [
          {
            "id": "58159ac5-dda5-4a61-9df8-98e54dfff311",
            <span style="background-color: #FFFF00"> "value": "success", </span>
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "relatedRequestId": {
        "values": [
          {
            "id": "71a1bded-5197-464b-9003-73b16e360532",
            "value": "c1f905ac-61bc-411a-901f-9a11aea0e5aa",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestGroupId": {
        "values": [
          {
            "id": "31c63e39-6d57-4594-a6dd-5b11fe451e55",
            "value": "c639343b-3239-4f8e-8aaa-0f1e13967f62",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "clientId": {
        "values": [
          {
            "id": "f80e1c42-9eeb-42f3-9c58-d0fe011f69a4",
            "value": "rdpclient",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "userId": {
        "values": [
          {
            "id": "4ea395bf-66ec-40f2-b1b4-5dc6cb7336a3",
            "value": "kritika.sharma@riversand.com",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestTimestamp": {
        "values": [
          {
            "id": "5c50a088-795d-4c30-8f52-9d8c1356cd49",
            "value": 1615962742728,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "SearchStore": {
        "values": [
          {
            "id": "519efe31-286a-4360-8e7a-986813cf9aa9",
            "value": "success",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "graphid": {
        "values": [
          {
            "id": "42f231bb-bd83-4de6-bfa8-9d1d19a6f1c3",
            "value": "4dc28fe5-897a-480e-a97c-e3a34a3fcb83",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "graphrepeatcount": {
        "values": [
          {
            "id": "1bbdd278-f4b4-4a8b-81f0-bff829f0989b",
            "value": 0,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "impacted": {
        "values": [
          {
            "id": "1068fb80-9816-4944-bb5f-06f97351de4d",
            "value": false,
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "queuedDate": {
        "values": [
          {
            "id": "05b568c4-c9b1-45c7-b033-a28a8b82e9fa",
            "value": "2021-03-17T12:02:16.506+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "processingStartDate": {
        "values": [
          {
            "id": "e375c419-6bf6-4ecd-b33c-4b97ab597242",
            "value": "2021-03-17T12:02:17.058+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "processingEndDate": {
        "values": [
          {
            "id": "9749221d-68cf-4ca3-800f-a92344ce48e3",
            "value": "2021-03-17T12:02:22.726+0530",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "timeSpentInProcessing": {
        "values": [
          {
            "id": "bc3985e5-adda-410b-a9de-860a8a0db3e9",
            "value": "5668",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "timeSpentInQueue": {
        "values": [
          {
            "id": "c545f057-a6d6-4411-967a-6766feb1b038",
            "value": "552",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "appMetrics": {
        "group": [
          {
            "id": "937d8beb-07ec-4c41-981e-958d3ec881e4",
            "locale": "en-US",
            "source": "internal",
            "graphImpactedEntitiesCount": {
              "values": [
                {
                  "id": "0b2e7c90-cbfb-48d5-ac97-735e0c1ecab1",
                  "value": "2",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "graphIdsFailed": {
              "values": [
                {
                  "id": "1eedefbc-f2b2-4f1b-a3b4-20517db95167",
                  "value": "sku_hasimages_image",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "graphIdsSuccessful": {
              "values": [
                {
                  "id": "e85e8b2d-4d3b-4fba-b854-0bdccd8bc155",
                  "value": "sku_ischildof_product",
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
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.