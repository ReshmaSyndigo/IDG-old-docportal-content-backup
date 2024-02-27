---
title: Track all Requests Related to Create Entity Request Using Request Id
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track all requests related to create entity request, using a scenario. 

## Scenario

Consider that you wish to create an entity "Polo Mens Shirt Blue_Large" and you wish to track all requests related to the entity create request. The following steps describe how to use the RESTful API in Riversand Platform SDK to track all the related requests of create entity:

* Use the API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity. In the response, take a note of the request identifier. 
* Pass the request identifier in the **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track create entity request with the appropriate typesCriterion.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API {{site.data.rdp_glossary.getrequesttrackingobject}}. In the request send the following details:

* query -> Id: Specify the request identifier
* query -> filters -> typesCriterion: Specify the entity type as "requestobject". This object helps to track the lifecycle of the entity as it is used to return all the requests related to the original create request.
* query -> fields -> attributes: Specify "_ALL" to get all attributes of the request

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "d9572a5b-642a-4a96-adfd-d7e0bb770878",</span>
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "requestobject"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
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

Returns the request tracking object entity matching the request Id.
<pre><code>
{
  "response": {
    "requestObjects": [
      {
        "id": "d9572a5b-642a-4a96-adfd-d7e0bb770878",
        "type": "requestofrequestsobject",
        "properties": {
          "createdDate": "2018-08-30T03:23:06.886-0500"
        },
        "data": {
          "attributes": {
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "734f74de-a652-47ff-9341-e4fdc49c535e",
                  "value": "entityManageService"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "3c20c7c6-7336-4d9e-b3e7-03356ed8546c",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "827bc32e-bb58-4d47-af65-515b8820a6e8",
                  "value": "sku"
                }
              ]
            },
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "8ec591e7-2832-469c-8ffc-eb4d3d77a38f",
                  "value": "create"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "faa5d88c-d74c-4a81-a90b-8e356edfb11f",
                  "value": "idg.rwtest.admin@riversand.com"
                }
              ]
            },
            "impersonateUserId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "aa487aeb-2c7f-43fd-a614-9dcc475e860c"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "9740ab51-14e9-445a-a4ad-1ab678ec7d8f",
                  "value": "rdpclient"
                }
              ]
            },
            "impersonateClientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "5c3b551f-dec1-43bb-bdc2-f98d3a05c72b"
                }
              ]
            },
            "requestOfRequests": {
              "group": [
                {
                  "requestId": {
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "rdp",
                        "id": "87a18193-c643-403d-abcb-cff7a15a23ad",
                        "value": "d9572a5b-642a-4a96-adfd-d7e0bb770878"
                      }
                    ]
                  },
                  "serviceName": {
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "rdp",
                        "id": "351c3528-3501-44ea-a306-b1095cf6938e",
                        "value": "entityManageService"
                      }
                    ]
                  },
                  "requestStatus": {
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "rdp",
                        "id": "a42b36f1-7ad2-4195-a6ef-d0d32cb30545",
                        "value": "success"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e67a9d02-1747-46e1-bcec-36577135ead2"
                },
                {
                  "requestId": {
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "rdp",
                        "id": "305405fa-dd33-423f-aba9-9d539fc999e6",
                        "value": "a00a49a2-5c98-4aab-a109-7c2aac0eb890"
                      }
                    ]
                  },
                  "serviceName": {
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "rdp",
                        "id": "2ed2890b-8b47-4bc4-a0c5-b58f22e79872",
                        "value": "entityPostProcessService"
                      }
                    ]
                  },
                  "requestStatus": {
                    "values": [
                      {
                        "locale": "en-US",
                        "source": "rdp",
                        "id": "94f387af-39cc-4f1d-b95e-90ecf959d677",
                        "value": "success"
                      }
                    ]
                  },
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "bae111ad-acf5-4fea-8449-53bbad90f074"
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