---
title: Track Create Entity Request Using Request Id
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track create entity request from request Id, using a scenario.

## Scenario

Consider that you wish to create an entity "Polo Mens Shirt Blue_Large". The following steps describe how to use the RESTful API in Riversand Platform SDK to track the create entity request:

* Use the API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity. In the response, take a note of the request identifier. For more information, see 
* Pass the request identifier in the **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track create entity request.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API {{site.data.rdp_glossary.getrequesttrackingobject}}. In the request send the following details:

* query -> Id: Specify the request identifier
* query -> filters -> typesCriterion: Specify the entity type as "requestObject"
* query -> fields -> attributes: Specify "_ALL" to get all attributes of the request

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY: 
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id":"b0ed1261-f54f-4e21-899f-29d2289460d9",</span>
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
      "maxRecords": 100
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
        "id": "b0ed1261-f54f-4e21-899f-29d2289460d9",
        "type": "requestobject",
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e1df6bfc-2344-4039-88d3-6d5e2593dd1e",
                  "value": "create"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "583ddd7d-e2c4-483c-9a62-7ccdb23f1839",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "856e6798-cb9d-43a5-a79a-e70b04656f9a",
                  "value": "sku"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a1774765-45f9-4c7b-863e-65dbdd065d21",
                  "value": "entityManageService"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "9c639725-1cce-45e9-8698-d6a4f2006d83",
                  "value": "b0ed1261-f54f-4e21-899f-29d2289460d9"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "source": "rdp",
                  "locale": "en-US",
                  "value": "success"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "8003dd3f-c719-4ede-b9de-e66566ef18c9",
                  "value": 1535613600159
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "7f2c87f7-12f0-4c28-b369-8db68c4ccc23",
                  "value": "b0ed1261-f54f-4e21-899f-29d2289460d9"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "c05e2b0d-f6d6-49c6-8362-bb14c178b1d7",
                  "value": "b0ed1261-f54f-4e21-899f-29d2289460d9"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "12e1e763-ef13-4993-9ee9-85708b98f3da",
                  "value": "rdpclient"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "965518ab-0c8f-41c9-9639-51ee046e0397",
                  "value": "idg.rwtest.admin@riversand.com"
                }
              ]
            },
            "ManageRulePreparation": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "5a9517be-6f7d-4b2a-993d-e263e2e1acfd",
                  "value": "success"
                }
              ]
            },
            "ManageRuleRun": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "54b76831-3af7-4353-8870-4ec4ca1f1b8b",
                  "value": "success"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a83a66ce-5cff-4c7c-a0f4-9be63fd26c64",
                  "value": "success"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "736ab680-edd3-41b0-9493-0578fa1c7865",
                  "value": "success"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a49a45ac-f21d-4269-b031-28cb49a6179d",
                  "value": "success"
                }
              ]
            }
          },
          "jsonData": {
            "clientState": {
              "someJson": {}
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