---
title: Track Graph Operations with Error Status
sidebar: rdp_sidebar
permalink: api_request_graph_operations_scenario3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can track the "Auto link an image to SKU" request with "Error" status using the **{{site.data.rdp_glossary.getrequesttrackingobject}}** RESTful API.

## Scenario

Consider that you have created the request to auto link an image to the SKU automatically by creating the relationship between the image and SKU. A request object is generated for this graph operation with the "requestStatus" value as **Error**. Note that, by using the **Request Tracking Service**, you can check the error message and take necessary action accordingly. 

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

The following response is received if the requested graph operation has any error:

<pre><code>
{
  "response": {
    "requestObjects": [
      {
        "id": "7034d186-84c0-4847-9247-c69e6a6a7390",
        "type": "requestobject",
        "properties": {
          "createdService": "requestManageService",
          "createdBy": "system_user",
          "modifiedService": "requestManageService",
          "modifiedBy": "system_user",
          "createdDate": "2021-03-03T00:27:21.921-0600",
          "modifiedDate": "2021-03-03T00:27:21.921-0600"
        },
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "id": "6de6cb96-56ac-4136-8874-9ba6ca6f08dc",
                  "value": "create",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "id": "ff8fb34f-15b5-481d-8390-55743ff3754b",
                  "value": "sg1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "id": "19702a16-8676-4fc5-a9aa-fc1923191e35",
                  "value": "sku",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "id": "2c7553ae-7208-44e8-952a-57a3c95153b1",
                  "value": "entityGraphManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "id": "111fe535-17eb-43e6-aa3b-3cba0ba78149",
                  "value": "7034d186-84c0-4847-9247-c69e6a6a7390",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00"> "requestStatus": { </span>
              "values": [
                {
                  "id": "91ee2233-4dff-402e-80bd-812e05382c32",
                  <span style="background-color: #FFFF00"> "value": "error", </span>
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "id": "5502e2c2-9b3a-47a0-9501-3b4cb49477e5",
                  "value": "7034d186-84c0-4847-9247-c69e6a6a7390",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "id": "31c63e39-6d57-4594-a6dd-5b11fe451e55",
                  "value": "7034d186-84c0-4847-9247-c69e6a6a7390",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "id": "3fcd2185-d9e1-4faf-baf0-9b9e9b9629ec",
                  "value": "rdpclient",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "id": "5b67ac42-c55d-40b4-a6ea-dc38009212e3",
                  "value": "system_user",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "id": "1d8e8319-44d3-44a4-8d51-a13566f21393",
                  "value": "1614752841753",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "EntityGraphPreparationBolt": {
              "values": [
                {
                  "id": "cab0d388-be21-4b12-aa17-ca80b6cbf9bd",
                  "value": "error",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00"> "message": { </span>
              "values": [
                {
                  "id": "4f78b83c-66d2-44c2-ae75-d576b63fdc16",
                  <span style="background-color: #FFFF00"> "value": "Graph process model is not defined for sku_hasimages_image_sku_graphProcessModel", </span>
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "messageCode": {
              "values": [
                {
                  "id": "ea6c1b39-b0ac-4a5a-9613-3debc2e0c7f4",
                  "value": "E0320",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "messageParams": {
              "values": [
                {
                  "id": "5b44c796-cba3-450a-989b-d210072c4f60",
                  "value": "\"sku_hasimages_image_sku_graphProcessModel\"",
                  "locale": "en-US",
                  "source": "internal"
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