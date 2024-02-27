---
title: Track Govern Requests of an Entity
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object_scenario5.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track all entity govern requests, using a scenario. 

## Scenario

Consider that you wish to track all govern requests of an entity "shelfNarrowBookcase001" using the entity Id.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "requestobject".
* query -> filters -> attributesCriterion -> serviceName: Specify "entityGovernService" to get all the entity govern requests.
* query -> valueContexts: Specify locale as "en-US".
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
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "requestobject"
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00">"serviceName": {</span>
              "contains": "entityGovernService"
            }
          },
          {
            <span style="background-color: #FFFF00">"entityId": {</span>
              "exact": "shelfNarrowBookcase001"
            }
          }
        ]
      },
      <span style="background-color: #FFFF00">"valueContexts": [</span>
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
        "id": "55a41bb1-dd40-42c7-8b77-fea5d63f8641",
        "type": "requestobject",
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "56566967-f5f7-4601-b925-f4593a1efa1d",
                  "value": "update"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "97c01c6c-9de9-4676-8dd8-c6245519c8d1",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "c1369d1d-b2de-4cd7-be23-641670a46a77",
                  "value": "sku"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "b5f871ec-2b1a-4524-9669-e21f3b17590a",
                  "value": "entityGovernService"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "7e7da14d-e32a-45e0-bbe7-565fd2ee52df",
                  "value": "55a41bb1-dd40-42c7-8b77-fea5d63f8641"
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
                  "id": "6a9fe5e6-ac7b-4814-8528-0941fff6be2d",
                  "value": 1532411777622
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "f6606045-d6fb-43b9-902d-3df6d8d9266b",
                  "value": "55a41bb1-dd40-42c7-8b77-fea5d63f8641"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a705153f-d0d0-43eb-8648-f08763b1a616",
                  "value": "ba380b10-fb23-4f9e-825d-232fd9c18113"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "750e6b9a-7ccb-4a00-9c7a-6e3406bfda24",
                  "value": "governanceClient"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e69d7935-2aa5-415d-a1f1-6c21ba5f006d",
                  "value": "system_user"
                }
              ]
            },
            "impersonateClientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "ab058693-68b2-4686-ae59-c2e50c6f29c1",
                  "value": "rdpclient"
                }
              ]
            },
            "impersonateUserId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "509494e8-ab6b-4739-af9e-67f527ac40d2",
                  "value": "dev1admin@riversand.com"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "33b8755e-b7da-4822-a638-d3352f6997cf",
                  "value": "success"
                }
              ]
            },
            "offset": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "8ac94ba6-e0ea-4a59-ba81-8505d06ee2c3",
                  "value": 17532
                }
              ]
            },
            "partition": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "84ac5ce9-4238-4c70-8413-234dc1c4fbe7",
                  "value": 2
                }
              ]
            },
            "topic": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "1d980c92-26e7-4dfb-9692-76aee7c6803f",
                  "value": "rdpentitygoverninbound"
                }
              ]
            },
            "GovernRulePreparation": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "36cfe400-8397-4b5d-8d06-35c035dc1e93",
                  "value": "success"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e431d82a-308b-4bcb-87fc-9a85a6c355c6",
                  "value": "success"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "361ce0c9-1fd3-497d-ab9e-900702d88530",
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
        "id": "bea990eb-42e5-4214-91e6-01e9c3d723e6",
        "type": "requestobject",
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "0f0125ed-265c-49d9-b83e-0ff11872bed8",
                  "value": "create"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e34b63bb-2819-46de-b4aa-17a15fccd57f",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "1f0538c3-52a3-43b7-ab2f-2ba0f8990902",
                  "value": "sku"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "3e7c3c64-0646-438f-a9e0-bdfd3af4cb07",
                  "value": "entityGovernService"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "d85c27ab-4a32-46a2-9bf3-e5ecc2e08859",
                  "value": "bea990eb-42e5-4214-91e6-01e9c3d723e6"
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
                  "id": "06c803f3-9931-4861-ac43-f909c79a4f62",
                  "value": 1535617386417
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "c7395044-ec39-4dd5-b8ba-55777b2ff1c1",
                  "value": "bea990eb-42e5-4214-91e6-01e9c3d723e6"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "4091cae7-53eb-4eb7-a404-0b03856822fc",
                  "value": "d9572a5b-642a-4a96-adfd-d7e0bb770878"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "dd6305e3-6c34-4c71-81ad-7f731101196f",
                  "value": "rdpclient"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "c0643bef-464f-4096-90bc-4815a930e98c",
                  "value": "idg.rwtest.admin@riversand.com"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "ee49567c-1004-4569-b592-fe272d5ea11e",
                  "value": "success"
                }
              ]
            },
            "offset": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "7070710c-cc38-4d83-b0ca-81338c6fb790",
                  "value": 19515
                }
              ]
            },
            "partition": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "71628fc8-38db-42a4-9893-061670fa0be5",
                  "value": 2
                }
              ]
            },
            "topic": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "dc08d964-4b60-4320-939a-0184fc168f6b",
                  "value": "rdpentitygoverninbound"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "474f2afd-3bd8-4682-82b8-0b306b635ab0",
                  "value": "success"
                }
              ]
            },
            "GovernRuleRun": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "bd88d988-60fc-46b6-9f4e-c403f1738458",
                  "value": "success"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "b390a50d-f1ba-4590-904c-26156c67ec38",
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
        "id": "6fd92be6-cf29-405c-8ee7-03bac94c6109",
        "type": "requestobject",
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "632fe2d6-3d1b-45a2-94aa-20706f518ea7",
                  "value": "create"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "3b58ad2e-c879-4a5e-aafb-45205a4653e8",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "b2dbd920-83f3-44f6-b919-2083a0c09445",
                  "value": "sku"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "47285af0-f6db-4b4f-b4ce-b9383a0a313c",
                  "value": "entityGovernService"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "43ae1680-8c4e-411d-b33a-6feffad063d8",
                  "value": "6fd92be6-cf29-405c-8ee7-03bac94c6109"
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
                  "id": "a7f0b71f-50e0-41d1-987c-9ee2cfeb20b5",
                  "value": 1532411767275
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "44c8dc71-9f5a-44b8-93f2-775586feb819",
                  "value": "6fd92be6-cf29-405c-8ee7-03bac94c6109"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "ada9409a-d298-44ad-ae91-f02947eb52ad",
                  "value": "ba380b10-fb23-4f9e-825d-232fd9c18113"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "244633a2-8150-4926-9b6f-9bc0727551d1",
                  "value": "rdpclient"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "15bc6bb4-5333-4f9f-9628-cd5aea859f6f",
                  "value": "dev1admin@riversand.com"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "cedf389b-5ee0-4517-94ad-022cd4dfb4eb",
                  "value": "success"
                }
              ]
            },
            "offset": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "1fc4270d-2f1e-4633-96c6-43c8d3fec289",
                  "value": 17530
                }
              ]
            },
            "partition": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "610cd17d-7984-4d8b-ae74-3de73f8c3774",
                  "value": 2
                }
              ]
            },
            "topic": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "7eacbb7c-06e0-4a47-b97d-1da8bb6025c4",
                  "value": "rdpentitygoverninbound"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "77f663b1-2c03-4f5d-8fec-95193e9ecb4c",
                  "value": "success"
                }
              ]
            },
            "GovernRulePreparation": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "d86bea38-28ea-47ab-bba4-86eec8e0fac3",
                  "value": "success"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "49ee6d5b-c48f-41c2-9255-de7106f79647",
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
        "id": "f63e0cea-3fb3-4af7-8d10-e38269f09d5c",
        "type": "requestobject",
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a7815863-685b-45b4-85c3-03de32406f93",
                  "value": "create"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "107a42ea-3028-48e5-b98e-487fe7178f47",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "ab6f0f49-b340-4faf-9277-537663d9947e",
                  "value": "sku"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "20cc4ed9-7bc9-45ca-910e-ca5bd96b0924",
                  "value": "entityGovernService"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "de9e456c-b328-4426-91c1-548cd1e849ed",
                  "value": "f63e0cea-3fb3-4af7-8d10-e38269f09d5c"
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
                  "id": "63a2a081-6a6d-4ef9-9d06-277f0787c886",
                  "value": 1535613601142
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "14fe8925-2d69-467b-9192-7e6f7f0be501",
                  "value": "f63e0cea-3fb3-4af7-8d10-e38269f09d5c"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "6089bf58-c788-46ad-bd66-f758e82edea5",
                  "value": "b0ed1261-f54f-4e21-899f-29d2289460d9"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "c840b702-9842-4aca-a9b3-65771a14839a",
                  "value": "rdpclient"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "58896294-8928-41d5-9fcf-b58c28fb046f",
                  "value": "idg.rwtest.admin@riversand.com"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "378f3bf8-3d68-4f1a-9721-4c8a4a30bb77",
                  "value": "success"
                }
              ]
            },
            "offset": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "29c65515-7e6b-4f70-95b5-4389fe77cc4e",
                  "value": 19510
                }
              ]
            },
            "partition": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "1bb96634-2a87-4804-85fc-cb2452c76ae3",
                  "value": 2
                }
              ]
            },
            "topic": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "91805de8-79e9-41ee-9b00-20863b5f4e42",
                  "value": "rdpentitygoverninbound"
                }
              ]
            },
            "GovernRuleRun": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "d9547f03-09be-43a8-8cf2-4a4d3c956498",
                  "value": "success"
                }
              ]
            },
            "GovernRulePreparation": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "3c74e3d3-844c-4577-a297-21227644c521",
                  "value": "success"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e2162c6b-60fc-421a-8d32-82215872f753",
                  "value": "success"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "c973cb0a-2b28-4ea9-adc9-f715c1282b0c",
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
    "totalRecords": 5
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.