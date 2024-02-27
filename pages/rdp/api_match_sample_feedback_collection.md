---
title: Get Matched Entities with standardized data for Match Feedback Collection
sidebar: rdp_sidebar
permalink: api_match_sample_feedback_collection.html
type: HowToAPI
folder: rdp
---

Using the match service you can get the matched entities with standardized data for match feedback collection. For more information, see [Configure Match Feedback Collection](/{{site.data.rdp_links_version.APP}}/dm_config_match_feedback.html).

A sample feedback collection is displayed below.

#### Request

A sample request of the entities that are sent for match service search: 

<pre>
<code>
{
  "entity": {
    "name": "Apache Corporation",
    "type": "organization",
    "properties": {
      "createdService": "entityManageService",
      "createdBy": "mcadmin@riversand.com_user",
      "modifiedService": "entityManageService",
      "modifiedBy": "mcadmin@riversand.com_user",
      "createdDate": "2020-05-25T09:33:14.205-0500",
      "modifiedDate": "2020-05-25T09:33:14.205-0500"
    },
    "data": {
      "attributes": {
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
              "value": "Apa"
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
              "value": "US0374111051"
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

#### Response

When the rquest is submitted successfully, then the following response is received.

**Notes**: 
* You can view two types of entities that is "Matched Entities" and "Source Entity / Incoming Entity":
  * Match Entities consists of additional attribute that is match "Score". 
    * Score: Indicates the similarity score between the match entity family and the source entity family. The overall entity score is based on these family scores. 
    * Data: Indicates the standardized data of the matched entity.
  * Source Entiity / Incoming Entity consists of families with the standardized attribute values. 
* The match response includes multiple matched entities and one source entity. The source entity consists of "isSource" attribute that differentiates from the matched entity.
* The total number of matched entities are displayed in the "total records" and the source entity is not part of this count.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "79d9d943-a17f-4517-9236-63f73a4c69e0",
    "taskId": "79d9d943-a17f-4517-9236-63f73a4c69e0"
  },
  "response": {
    "entities": [
      {
        "id": "apachecorporation3",
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
                  "id": "fd9f8c8d-2e95-458e-89c6-b6c0b46df364",
                  "value": "apachecorporation3",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "score": {
              "values": [
                {
                  "id": "c3711a2d-4fbe-431c-93fa-e737e098067c",
                  "value": "99.57404136657715",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_businessname": {
              "group": [
                {
                  "id": "e5669688-232e-4519-a543-2d87ee812ff6",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "626d22c2-73e3-43d6-8648-fda9726a5d38",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "c831dd95-da0e-4cd0-a5c7-deb677801df4",
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
                  "id": "c5a853f7-4b67-4d1a-ac71-e511573289f4",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "ac81b98b-b6ff-4e94-97ce-2dc9ea4043e1",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "5641a6b7-080e-4829-b98a-b66706cd7f5f",
                        "value": "apa petroleum hydro carbon",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "system_country": {
              "group": [
                {
                  "id": "621dc7a4-6c36-4650-b084-eb2e9fcb4819",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "d92401d7-ef40-4386-becf-fd8500d75b73",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "9cd7b067-02c6-4b13-ac24-6997a12f4d4c",
                        "value": "texas united states of america",
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
                  "id": "8189a4e3-27f0-48ea-9d35-10211ef9632f",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "8c70acdf-a7bc-47b0-9e1d-04951a7f458a",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "91b5734f-d8c9-4815-8b09-e7eed4b9c6de",
                        "value": "713 2966000",
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
                  "id": "5e4e3d5f-f75b-460d-8aa6-fde8a050ed3e",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "79438fee-8dca-4f63-9858-638c17321317",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "7b36e49e-928f-47c4-a4c8-b31e09e174c2",
                        "value": "us0374111051 345534434234",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "system_zipcode": {
              "group": [
                {
                  "id": "c123eb44-0e47-4c76-8c4c-9ca2a6f54475",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "7431ba2d-f8fa-47a0-a5c0-d8bf54f20a9e",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "48db6410-ddfb-4324-9cf5-529c6821f61e",
                        "value": "77056",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  }
                }
              ]
            },
            "system_address": {
              "group": [
                {
                  "id": "fe2cf4f8-45af-4278-b0a7-4871d1553a93",
                  "locale": "en-US",
                  "source": "internal",
                  "score": {
                    "values": [
                      {
                        "id": "b65c5c45-fc71-40fa-b898-f4445fa33da3",
                        "value": "high",
                        "locale": "en-US",
                        "source": "internal"
                      }
                    ]
                  },
                  "data": {
                    "values": [
                      {
                        "id": "feec8859-0a14-45ae-bec5-a25c10d718b9",
                        "value": "2000 post oak 100 houston",
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
      },
      {
        "id": "1f7c9097-77a3-4323-a2b8-11e5601d76f7",
        "name": "Apache Corporation",
        "type": "organization",
        "properties": {
          "modifiedBy": "system_user",
          <span style="background-color: #FFFF00">"isSource": "true"</span>
        },
        "data": {
          "attributes": {
            "system_address": {
              "values": [
                {
                  "id": "a6a3ce9b-11a5-4845-8641-06b8678e3524",
                  "value": "2000 Post Oak Blvd #100 Houston",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_alternatename": {
              "values": [
                {
                  "id": "5562bd5f-2b64-45e0-9365-517cf333af56",
                  "value": "Apa Petroleum Hydro Carbon",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_businessname": {
              "values": [
                {
                  "id": "46c0b895-fd42-4def-87ba-8bab508f30a1",
                  "value": "Ap-ache corp?orat@ion",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_country": {
              "values": [
                {
                  "id": "5cfa01ff-1917-4d97-986a-c82a015179b9",
                  "value": "Texas United States of America",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_phonenumber": {
              "values": [
                {
                  "id": "d9dada1e-95c9-4a88-94a2-331db0a348e9",
                  "value": "(713) 296-6000",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_universalbusinessnumber": {
              "values": [
                {
                  "id": "4d48408e-1be4-4005-a0a8-e8f3a55bbf94",
                  "value": "US0374111051 345534434234",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_zipcode": {
              "values": [
                {
                  "id": "5edd52f3-8f6d-4f67-a5a9-2e171dc8f417",
                  "value": "77056",
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
    "statusDetail": {
      "probabilisticMatch": true,
      "mergeThreshold": 95,
      "createThreshold": 0,
      "modelVersion": "1.0.0"
    },
    "totalRecords": 1
  }
}
</code>
</pre>