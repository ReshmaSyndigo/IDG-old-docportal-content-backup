---
title: Track Create, Update and Delete Entity Requests Using Entity Id and Entity Action
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object_scenario3.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track create, update and delete entity requests, using a scenario. 

## Scenario

Consider that you wish to track all create, update and delete entity requests of an entity "Shelf Book Case - Narrow" using the entity Id and entity action.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "requestobject".
* query -> filters -> attributesCriterion -> entityAction: Specify "create update delete" to get all the related entity requests.
* query -> filters -> attributesCriterion -> entity Id: Specify "shelfNarrowBookcase001".
* query -> fields -> attributes: Specify "_ALL" to get all attributes of the request.

{% include callout.html content="**Note**: 
* You can filter on request Id as well. Provide the request Id in query -> filters -> attributesCriterion as **requestGroupId**.
* If you are aware of the taskId, then you can add an additional filter in query -> filters -> attributesCriterion as **taskId**.
" type="primary" %}

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "requestobject"
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00">"entityAction": {</span>
              "contains": "create update delete"
            }
          },
          {
            <span style="background-color: #FFFF00">"entityId": {</span>
              "exact": "shelfNarrowBookcase001"
            }
          }
        ]
      },
      "valueContexts": [
        {
          "locale": "en-US"
        }
      ]
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code>
</pre> 

## Response

Returns the request tracking object entities matching the search criteria.
<pre><code>
{
  "response": {
    "requestObjects": [
      {
        "id": "1d61ffa1-e777-452b-9f35-cd0658b3a2a5",
        "type": "requestobject",
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e0e480f4-69ff-41fb-9627-9f3ea1ad82a0",
                  "value": "update"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "929bc46b-a55c-4e45-a95d-3e9ed8f280d7",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a1073e5c-2e31-405e-ad79-4f07912af9c4",
                  "value": "sku"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "688f066d-1aea-4adc-ba64-64de9a584fc7",
                  "value": "entityGovernService"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "d6b47072-8ba3-423f-8f24-7fd2b2a76819",
                  "value": "1d61ffa1-e777-452b-9f35-cd0658b3a2a5"
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
                  "id": "765ccfca-2630-4095-8c99-11ae4d87bc8f",
                  "value": 1532411771466
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "ac0ee081-b0dc-4b57-b41c-15e093dac821",
                  "value": "1d61ffa1-e777-452b-9f35-cd0658b3a2a5"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "0fec26c6-0256-42d7-aab3-be3dd57b7851",
                  "value": "ba380b10-fb23-4f9e-825d-232fd9c18113"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "f2f96c62-76af-4944-8a0f-45e1618a14fb",
                  "value": "governanceClient"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a2cba680-c997-4d2d-a5dd-59058acb009e",
                  "value": "system_user"
                }
              ]
            },
            "impersonateClientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "8bd93cf2-f031-4095-acf3-3fa70cbc6e46",
                  "value": "rdpclient"
                }
              ]
            },
            "impersonateUserId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "54197dbe-1004-4a82-bfb9-47e0cd6cd61c",
                  "value": "dev1admin@riversand.com"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "69c5476a-d390-415c-83c2-062174045c14",
                  "value": "success"
                }
              ]
            },
            "offset": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "6d930c9c-e25b-4fe0-852f-905ea9ca0d84",
                  "value": 17531
                }
              ]
            },
            "partition": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "f3c93bd7-8839-4ed5-b778-5101b54fea77",
                  "value": 2
                }
              ]
            },
            "topic": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "2694c332-efb2-4264-9edf-71a2dee803ed",
                  "value": "rdpentitygoverninbound"
                }
              ]
            },
            "GovernRulePreparation": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "6db00dc4-3853-43d7-b4ba-e3e6683ca3fd",
                  "value": "success"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "9de6d8ee-c23e-4b1b-83c3-fb3a1da955ad",
                  "value": "success"
                }
              ]
            },
            "GovernRuleRun": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "d64e1e4a-e947-4624-b3e0-599125ffd6ee",
                  "value": "success"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "963302bd-cbe3-457c-b025-84891af4da7e",
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
      },
      {
        "id": "a00a49a2-5c98-4aab-a109-7c2aac0eb890",
        "type": "requestobject",
         "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "2f936a43-bd0c-4ad9-9895-65f7e26d7652",
                  "value": "create"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "d59a58cc-a4d7-4e17-941d-3555f9793410",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a5c019fd-f291-4ea6-a996-69770c0b7644",
                  "value": "sku"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "c5a01fa3-8cc3-4be6-a51d-958cf03b5f1f",
                  "value": "entityPostProcessService"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "3430e928-b64a-4481-b3d5-6919b06523cc",
                  "value": "a00a49a2-5c98-4aab-a109-7c2aac0eb890"
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
                  "id": "3b5fe8e8-f2c0-465b-963d-9aa23302f1c9",
                  "value": 1535617386448
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "aec70ad4-af40-4125-ac95-7451a295fd8d",
                  "value": "e68e379b-c56c-4444-aa60-2f01737a0923"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "6fa29a08-e7f5-4bcd-a045-f72ad6b51942",
                  "value": "d9572a5b-642a-4a96-adfd-d7e0bb770878"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "f658a435-2d92-423e-a48f-95087e03838a",
                  "value": "rdpclient"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "0b63e2f3-07df-416f-b98c-54a4d1129a69",
                  "value": "idg.rwtest.admin@riversand.com"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "41db0e7d-8d44-4b63-a6b8-a3c64b2d2b1b",
                  "value": "success"
                }
              ]
            },
            "offset": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "6a04fb4f-6f36-4e89-b33b-0aa08520d9ef",
                  "value": 9157
                }
              ]
            },
            "partition": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "6d4c0e0a-8235-411a-9f22-ffee255a8b52",
                  "value": 2
                }
              ]
            },
            "topic": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e684ff01-4bbc-49c5-9250-cceafbb9a30e",
                  "value": "rdpentitypostprocessinbound"
                }
              ]
            },
            "PostProcessRulePreparation": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e85cbc7c-907b-401e-8d1c-28d0cd533de0",
                  "value": "success"
                }
              ]
            },
            "PostProcessRuleRun": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "f7e8024b-8078-42d3-8290-c07b850b0291",
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
    "totalRecords": 2
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.