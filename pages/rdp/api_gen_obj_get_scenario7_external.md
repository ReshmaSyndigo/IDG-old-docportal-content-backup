---
title: Get Generic Objects for Impact Processing Identification 
sidebar: rdp_sidebar
permalink: api_gen_obj_get_scenario7.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/genericobjectmanageservice/get to get generic objects, using a scenario.

## Scenario

To get all generic objects identified for impact processing. These objects indicate what changed in the application. Example: It lists the business rules or business conditions that changed in the application.

{% include snippets/header.html %}

## Request

To get the above generic objects, you can use the REST API {{site.data.rdp_glossary.genobjget}}. In the request, specify the following details:

* Filters: Indicate the criteria for generic objects to be picked up for processing.
  * query->filters->attributesCriterion: Specify the "status" as "QUEUED".
  * query->filters->typesCriterion: Specify as "impactIdentifyRequestObject".

<pre>
<code>
POST {TenantURL or ID}/api/genericobjectmanageservice/get
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "attributesCriterion": [
          {
            "status": {
              "exacts": [
                "QUEUED"
              ]
            }
          }
        ],
        "typesCriterion": [
          "impactIdentifyRequestObject"
        ]
      }
    },
    "sort": {
      "attributes": [
        {
          "doId": "_DESC",
          "sortType": "_STRING"
        }
      ]
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 5
    }
  }
}
</code>
</pre>

## Response 1

Returns all generic objects that are created for the given **attributesCriterion** and **typesCriterion** of type **impactIdentifyRequestObject**.

{% include callout.html content="**Note**:
This is the response returned if the change model is governance rules, conditions, mappings, contentTemplateModels or templateQualificationConfigs.
" type="primary" %}

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "d3628a96-0252-4812-824b-9f3fc3cc55d8",
    "maxRecords": 2000
  },
  "response": {
    "genericObjects": [
      {
        "id": "be23792e-0e62-46e4-97d3-19bf886d2254",
        "type": "impactIdentifyRequestObject",
        "domain": "genericDataObject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-19T05:31:42.241-0500",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-07-19T05:47:06.297-0500"
        },
        "data": {
          "attributes": {
            "evId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "8d92499d-a18d-4f86-ae4e-ade259c059fd",
                  "value": "67c24f52-9eb1-44cb-91ac-ade209e7b446"
                }
              ]
            },
            "chBucket": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5f7f6f40-2aed-4871-b9b3-1b5230c8f388",
                  "value": "DDG"
                }
              ]
            },
            "doId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f5a55945-93f0-4c47-8882-1693d10521cd",
                  "value": "validateEmptyRelationship_businessRule"
                }
              ]
            },
            "evType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f6e6373a-4535-4cb8-94e4-aa7cf5498ddf",
                  "value": "ModelUpdate"
                }
              ]
            },
            "doType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b6798aff-195e-49e4-8ae1-3a653113bf6e",
                  "value": "businessRule"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "822bf66d-1add-40e4-8b17-e5e51dc06f84",
                  "value": "QUEUED"
                }
              ]
            }
          }
        }
      },
      {
        "id": "2055d7c2-ae07-44cd-be43-719e3a362688",
        "type": "impactIdentifyRequestObject",
        "domain": "genericDataObject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-19T05:30:44.073-0500",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "modifiedDate": "2018-07-19T05:47:06.279-0500"
        },
        "data": {
          "attributes": {
            "evId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "10fdb7b8-6697-44aa-8103-805fd6f0e072",
                  "value": "9c18414f-c668-41a3-a982-c55dd6a047c6"
                }
              ]
            },
            "chBucket": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e49cf3e7-0cf7-4dfe-b5bc-17584b7fc463",
                  "value": "DDG"
                }
              ]
            },
            "doId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0817365c-1191-43ee-81f1-5d836b745261",
                  "value": "vendorRequiredAttributesArePopulated_businessCondition"
                }
              ]
            },
            "evType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4c2fbfba-7ca7-41cc-a41e-35f10c96a529",
                  "value": "ModelUpdate"
                }
              ]
            },
            "doType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ed477680-86c4-4870-adf9-d7007f308c28",
                  "value": "businessCondition"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "135ad958-6c79-4f66-a955-4d5f1484a722",
                  "value": "QUEUED"
                }
              ]
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

## Response 2

Returns all generic objects that are created for the given **attributesCriterion** and **typesCriterion** of type **impactIdentifyRequestObject**.

{% include callout.html content="**Note**:
This is the response returned if the change model is authorization model.
" type="primary" %}

<pre><code>
{
  "response": {
    "genericObjects": [
      {
        "id": "887fbfe1-ff29-48b8-a7f9-9a6a8ea9c464",
        "type": "impactIdentifyRequestObject",
        "domain": "genericDataObject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-24T04:44:28.558-0500",
          "modifiedDate": "2018-07-24T04:44:28.558-0500"
        },
        "data": {
          "attributes": {
            "role": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ededf533-c2c8-4954-bf81-5a16d8792d59",
                  "value": "vendor"
                }
              ]
            },
            "evId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "b5df48f8-7827-4400-a72b-1896f73ff9e9",
                  "value": "a59d90f8-2db7-4ac6-9c47-fcd50fd7a1db"
                }
              ]
            },
            "chBucket": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "58eff3c7-9a52-4d07-96bc-05b7479f63e8",
                  "value": "authorizationModel"
                }
              ]
            },
            "doId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "edd5f0fa-52ce-407a-abca-274a3ec96d1c",
                  "value": "thing_authorizationModel_vendor"
                }
              ]
            },
            "evType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e6cbfeeb-8596-4b48-b98e-1ba25e860803",
                  "value": "ModelAdd"
                }
              ]
            },
            "doType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7821c995-66e0-4a7a-bb5a-89ef58ba56c6",
                  "value": "authorizationModel"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "13539329-8988-4456-ab61-6ec99d35519b",
                  "value": "QUEUED"
                }
              ]
            }
          }
        }
      },
      {
        "id": "3a0cf10b-d742-4d63-b789-c365027d9953",
        "type": "impactIdentifyRequestObject",
        "domain": "genericDataObject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-24T04:43:53.388-0500",
          "modifiedDate": "2018-07-24T04:43:53.388-0500"
        },
        "data": {
          "attributes": {
            "role": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ff31619c-c4f4-4b7b-b60c-57eb9667f83d",
                  "value": "admin"
                }
              ]
            },
            "evId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "e603fa7f-d62b-4c2f-962b-32d906035cf8",
                  "value": "4fabd298-102e-47a5-88ff-67d8e835de35"
                }
              ]
            },
            "chBucket": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f824bf26-cace-4992-bfeb-3698243e2798",
                  "value": "authorizationModel"
                }
              ]
            },
            "doId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4b47e5bb-4beb-44c2-b294-3b00f075c134",
                  "value": "thing_authorizationModel_admin"
                }
              ]
            },
            "evType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "483bb51d-725a-4f0f-aeb0-d6a1c65b394f",
                  "value": "ModelUpdate"
                }
              ]
            },
            "doType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "80405fec-6ec1-4724-87c2-0c3b15fc117d",
                  "value": "authorizationModel"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7978f82c-b020-44d6-9ac7-7152db6eb406",
                  "value": "QUEUED"
                }
              ]
            }
          }
        }
      },
      {
        "id": "386647c9-c548-4ed0-a05e-369aca0c2859",
        "type": "impactIdentifyRequestObject",
        "domain": "genericDataObject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-24T04:38:29.983-0500",
          "modifiedDate": "2018-07-24T04:38:29.983-0500"
        },
        "data": {
          "attributes": {
            "role": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "5f2e76ea-07c6-41e9-a6da-4d00c8149fa4",
                  "value": "admin"
                }
              ]
            },
            "evId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "96c0bb82-2fa5-4b59-8576-581acf9921b9",
                  "value": "9df8ab0f-fe36-4c32-8455-4f1e533d268e"
                }
              ]
            },
            "chBucket": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "93286934-65eb-44d0-bdb3-57e9b0fd1183",
                  "value": "authorizationModel"
                }
              ]
            },
            "doId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "481c4d28-4cd9-4198-81fc-1b2e9f53a60b",
                  "value": "thing_authorizationModel_admin"
                }
              ]
            },
            "evType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "a28e4a09-1f3a-4796-8e08-1cb5a363dca3",
                  "value": "ModelUpdate"
                }
              ]
            },
            "doType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c3b5ac22-bdea-407d-a48c-419a368d6d29",
                  "value": "authorizationModel"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cdf160f9-15c5-47dc-a040-0c608795f921",
                  "value": "QUEUED"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 3
  }
}
</code></pre>

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.