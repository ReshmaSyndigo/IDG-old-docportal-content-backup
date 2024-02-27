---
title: Get entity based on Entity Type in Match Profile Standardization
sidebar: rdp_sidebar
permalink: api_get_entity_matchprofile.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entity based on entity type used for match profile standardization. 

## Scenario

To get "Organization" entity type for match profile standardization.

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type. 
* data : Provide the context name you wish to link the entity with.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "name": "Apache Corporation",
    "type": "organization",
    "properties": {
      "createdService": "entityManageService",
      "createdBy": "mmadmin@riversand.com_user",
      "modifiedService": "entityManageService",
      "modifiedBy": "mmadmin@riversand.com_user",
      "createdDate": "2020-05-25T09:33:14.205-0500",
      "modifiedDate": "2020-05-25T09:33:14.205-0500"
    },
    "data": {
      "attributes": {
        "businessType": {
          "values": [
            {
              "id": "ca751c3b-40ed-45fc-958b-95e88e99f674",
              "value": "division",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "address": {
          "group": [
            {
              "otheraddressstreet": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "id": "5a447be7-ee7e-4e98-999f-f775bff650c6",
                    "value": "2000 Post Oak Blvd #200"
                  }
                ]
              },
              "otheraddresscity": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "id": "b82c6380-8b49-40ea-9b26-f55cd40e81aa",
                    "value": "Houstons"
                  }
                ]
              },
              "otheraddressstate": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "id": "77f9e498-9c2d-437c-9aa5-e3b7b1b68a45",
                    "value": "Texas"
                  }
                ]
              },
              "otheraddresscountry": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "id": "1b0f8395-7b5c-49cf-bdb2-6e3dc66e3cfe",
                    "value": "United States of America"
                  }
                ]
              },
              "otheraddresszipcode": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "id": "d8b6fb11-5c63-4495-b6e6-ad0210707a29",
                    "value": "77056"
                  }
                ]
              },
              "addresstype": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "id": "f34ae1bf-bbeb-4df1-9927-1cd237ff51cf",
                    "value": "Office"
                  }
                ]
              },
              "locale": "en-US",
              "source": "internal",
              "id": "525ae370-dd63-49b1-a8eb-282bd59384c3"
            }
          ]
        },
        "alternatename": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "97d2b548-a5ca-4615-966d-ecc99ead7163",
              "value": "apa"
            }
          ]
        },
        "dunsnumber": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "bdd55ea6-1621-49d5-8f88-72730ed3838f",
              "value": "345534434234"
            }
          ]
        },
        "label": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "ef365e5b-b5a1-4a2f-b83f-3d8dcfa35bcb",
              "value": "Petroleum"
            }
          ]
        },
        "companyid": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "d51dee09-6f7e-4655-9fee-ad99140f3259",
              "value": "US0374111053"
            }
          ]
        },
        "orgname": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "82a8b776-8655-40b4-9722-e481ac182386",
              "value": "Apache Corporation"
            }
          ]
        },
        "phone": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "7982773a-85dd-4233-8197-b6e006d9b811",
              "value": "(714) 296-6000"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response

If the entity get request is submitted successfully, then the following response is received from get entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e1349464-0cb1-42bd-94b5-4fcfea416fe6",
    "taskId": "e1349464-0cb1-42bd-94b5-4fcfea416fe6"
  },
  "response": {
    "entities": [
      {
        "id": "apachecorporation1",
        "type": "organization",
        "domain": "dataObject",
        "properties": {
          "modifiedBy": "system_user"
        },
        "data": {
          "attributes": {
            "identifier": {
              "values": [
                {
                  "id": "37cde6ff-0480-4364-bba3-0a9c5d171dd8",
                  "value": "apachecorporation1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "score": {
              "values": [
                {
                  "id": "ccb4c07d-3092-4909-a0af-845d02f3b536",
                  "value": "72.31478691101074",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_businessname": {
              "group": [
                {
                  "id": "2296461f-2051-4234-8583-ec54d03c5e71",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "c6f5c446-faa2-49f0-8a48-62486d3c10a7",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "cf66b578-ade3-449b-99fb-ed138ad4d613",
                        "value": "apache corporation",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "system_alternatename": {
              "group": [
                {
                  "id": "37b6d1ee-d21a-4572-a4f1-6a56982df991",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "17e3c9a2-8d3b-430b-8c1c-b197a2e1de04",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "2c44daec-1595-4f4c-988b-8ceabf4b6f77",
                        "value": "apa",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "system_phonenumber": {
              "group": [
                {
                  "id": "736d631f-545b-44fb-ba93-5a20ea6b002b",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "7922b14d-8502-4ba8-b527-e7b4d0f6b917",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "2d491947-a763-4e8f-af10-28b4b654fd27",
                        "value": "714 2966000",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "system_universalbusinessnumber": {
              "group": [
                {
                  "id": "8533b64d-6b88-49a0-8afa-5c65dd24fd27",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "cd49696b-08d0-486f-ae1b-5adb32c30a31",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "f3acb9b0-5998-4468-b8fa-31f79ed9095c",
                        "value": "us0374111051 345534434234",
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
    "statusDetail": {
      "probabilisticMatch": true,
      "mergeThreshold": 95,
      "createThreshold": 0,
      "modelVersion": "1.0.0"
    },
    "totalRecords": 1
  }
}
</code></pre> 

Verify the created entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.