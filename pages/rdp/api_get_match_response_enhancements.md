---
title: Machine Learning (ML) Match Response Enhancements
sidebar: rdp_sidebar
permalink: api_get_match_response_enhancements.html
folder: rdp
type: HowTo
---

{% include snippets/api_preview.md %}

To enhance the match response, multi-family model is configured for Machine Learning (ML). As part of this enhancement, multiple families can be configured for match profile, based on which the incoming entity picks the right model to standardise the data and display better match reponses. By default, seven models/families are defined for a match profile. You can define any number of models apart from the default model for a match profile.

Consider that you have defined six models/families that is "Business Name", "Alternate Name", "Universal Number", "Address", "Country" and "Zip Code" in "organization_hospitality_matchProfile" match profile. The incoming entity picks the six family model to display the match response. For more information, see [Machine-Learning (ML) based Match Object Structure](api_match_object_structure_ml.html).

{% include callout.html content="**Notes:** 
* **matchservice/search** is used to perform the Machine-Learning (ML) based match. 
* The **mlModel** parameter in the match response helps you to understand which multi-family model is used in this process.
* The **matchProfile** parameter in the match response helps you to understand which match profile is used for standardising the data.
" type="primary" %}

## Sample Scenarios

The following are the sample scenarios:

* **Scenario 1**: If you have not defined any family model for ML match.
  
  **Result**: The platform falls back on the default model, which is seven family model. But this may impact the match response. To get accurate match response, you must define proper models. 

* **Scenario 2**: Less than three or equal to three family model is not supported. If the incoming entity has values that matches only three or less than three.
  
  **Result**: The ML multi-family model approach is not applied on the incoming entity and the **mlModel** parameter displays as "None".

* **Scenario 3**: Mismatch in model. If the incoming entity has "address, zip code, phone number, business name", but you have defined "address, zip code, phone number, alternate name" in the multi family model.

  **Result**: The platform falls back on the default seven multi-family model as there is a mismatch between the incoming entity and the model that you have defined.

## Request

To get better match response, you can use the REST API {{site.data.rdp_glossary.getmatch}}. In the request send the following details:

<pre>
<code>
{
  "entity": {
    "name": "Apache Corporation",
    "type": "organization",
    "properties": {
      "createdService": "entityManageService",
      "createdBy": "admin@riversand.com_user",
      "modifiedService": "entityManageService",
      "modifiedBy": "admin@riversand.com_user",
      "createdDate": "2020-05-25T09:33:14.205-0500",
      "modifiedDate": "2020-05-25T09:33:14.205-0500"
    },
    "data": {
      "attributes": {
        "businessType": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "bdd55ea6-1621-49d5-8f88-72730ed3838f",
              "value": "hospitality"
            }
          ]
        },
        "alternatename": {
          "values": [
            {
              "id": "97d2b548-a5ca-4615-966d-ecc99ead7163",
              "value": "Apa",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "dunsnumber": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "bdd55ea6-1621-49d5-8f88-72730ed3838f",
              "value": "345534434246"
            }
          ]
        },
        "companyid": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "d51dee09-6f7e-4655-9fee-ad99140f3259",
              "value": "CS0374111053"
            }
          ]
        },
        "orgname": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "82a8b776-8655-40b4-9722-e481ac182386",
              "value": "apache corporation"
            }
          ]
        },
        "phone": {
          "values": [
            {
              "id": "7982773a-85dd-4233-8197-b6e006d9b811",
              "value": "(714) 296-6000",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "address": {
          "group": [
            {
              "id": "525ae370-dd63-49b1-a8eb-282bd59384c3",
              "locale": "en-US",
              "source": "internal",
              "otheraddressstreet": {
                "values": [
                  {
                    "id": "5a447be7-ee7e-4e98-999f-f775bff650c6",
                    "value": "2000 Post Oak Blvd #200",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "otheraddresscity": {
                "values": [
                  {
                    "id": "b82c6380-8b49-40ea-9b26-f55cd40e81aa",
                    "value": "Houstons",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "otheraddressstate": {
                "values": [
                  {
                    "id": "77f9e498-9c2d-437c-9aa5-e3b7b1b68a45",
                    "value": "Texas",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "otheraddresscountry": {
                "values": [
                  {
                    "id": "1b0f8395-7b5c-49cf-bdb2-6e3dc66e3cfe",
                    "value": "United States of America",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "otheraddresszipcode": {
                "values": [
                  {
                    "id": "d8b6fb11-5c63-4495-b6e6-ad0210707a29",
                    "value": 77056,
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
  "params": {
    "isFeedbackCollectionEnabled": false
  }
}
</code>
</pre>

## Response

The following response is received if the request is submitted successfully:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "0c40efe3-82dc-411a-854a-c034e17bf3eb",
    "taskId": "0c40efe3-82dc-411a-854a-c034e17bf3eb"
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
                  "id": "b25d2758-ad00-4d30-9dee-5b795e34a4d9",
                  "value": "apachecorporation1",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "score": {
              "values": [
                {
                  "id": "2e5a54ed-1013-4b05-ba0d-8314fac7c5c8",
                  "value": "99.99608993530273",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_address": {
              "values": [
                {
                  "id": "be80e621-45ab-48fa-a05c-6804c130c783",
                  "value": "high",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_alternatename": {
              "values": [
                {
                  "id": "c27e29f2-75f3-4d03-9032-ad71e689454e",
                  "value": "high",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_businessname": {
              "values": [
                {
                  "id": "c90b20d9-0db3-4a9f-a997-90201ef4b174",
                  "value": "high",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_country": {
              "values": [
                {
                  "id": "ba3b7577-f790-4c76-ba0f-5b9f15f98bf3",
                  "value": "high",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_universalbusinessnumber": {
              "values": [
                {
                  "id": "d7402995-29f1-41d3-a567-14b922257dd4",
                  "value": "medium",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "system_zipcode": {
              "values": [
                {
                  "id": "4c67c476-17e4-4f85-9bc9-c078e2a1321f",
                  "value": "high",
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
      "mergeThreshold": 0,
      "createThreshold": 0,
      <span style="background-color: #FFFF00">"mlModel": "6_BUS_ALT_UNI_ADD_COU_ZIP",</span>
      <span style="background-color: #FFFF00">"matchProfile": "organization_hospitality_matchProfile"</span>
    },
    "totalRecords": 1
  }
}
</code>
</pre>