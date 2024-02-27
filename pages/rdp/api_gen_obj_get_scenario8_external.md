---
title: Get Generic Objects for Impact Processing Execution
sidebar: rdp_sidebar
permalink: api_gen_obj_get_scenario8.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API {TenantURL or ID}/api/genericobjectmanageservice/get to get generic objects, using a scenario.

## Scenario

To get all generic objects identified for impact processing execution. This lists the entity types that are impacted by the change in the application.

{% include snippets/header.html %}

## Request

Impact execution phase processes all generic objects of type **impactExecuteRequestObject** in the system (specified by type attribute of the generic object). See [Create a schedule to identify impacted data objects](api_sch_create_scenario5.html).

To get the above generic objects, you can use the REST API {{site.data.rdp_glossary.genobjget}}. In the request, specify the following details:

* Filters: Indicate the criteria for generic objects to be picked up for processing.
  * query->filters->attributesCriterion: Specify the "status" as "QUEUED".
  * query->filters->typesCriterion: Specify as "impactExecuteRequestObject".

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
          "impactExecuteRequestObject"
        ]
      }
    },
    "sort": {
      "attributes": [
        {
          "modifiedDate": "_DESC",
          "sortType": "_DATETIME"
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

Returns all generic objects that are created for the given **attributesCriterion** and **typesCriterion** of type **impactExecuteRequestObject**.

{% include callout.html content="**Note**: 
This is the response returned if the change model is governance rules, conditions, mappings, contentTemplateModels or templateQualificationConfigs. 
" type="primary" %}

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "8ca829f1-19b5-46f9-897d-99fd9c2c7b20",
    "maxRecords": 2000
  },
  "response": {
    "genericObjects": [
      {
        "id": "2334ab89-7f58-4213-b2f9-0b16dd04934b",
        "type": "impactExecuteRequestObject",
        "domain": "genericDataObject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-19T05:47:06.533-0500",
          "modifiedDate": "2018-07-19T05:47:06.533-0500"
        },
        "data": {
          "attributes": {
            "chBucket": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "cfbbdf4c-5165-4013-b20a-8cb5216b277b",
                  "value": "DDG"
                }
              ]
            },
            "doId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c6cf388a-d8cd-4723-b80e-556f7bd67520",
                  "value": "be23792e-0e62-46e4-97d3-1234"
                }
              ]
            },
            "businessCondition": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "f4777119-e916-44d4-9ab9-fc8e921c62ce",
                  "value": "vendorRequiredAttributesArePopulated_businessCondition"
                }
              ]
            },
            "businessRule": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "ded6915b-a41f-4cc8-928b-fdba53f0223e",
                  "value": "validateEmptyRelationship_businessRule"
                }
              ]
            },
            "doType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "43069e2e-bb10-4257-84ad-1c48294b95d7",
                  "value": "sku"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "3e4bde73-f029-4ba5-8bdd-d66902ba47bb",
                  "value": "QUEUED"
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

## Response 2

Returns all generic objects that are created for the given **attributesCriterion** and **typesCriterion** of type **impactExecuteRequestObject**. 

{% include callout.html content="**Note**: 
This is the response returned if the change model is authorization model. 
" type="primary" %}

<pre><code>
{
  "response": {
    "genericObjects": [
      {
        "id": "3eeb77ad-d9b5-4388-8200-a433946ae793",
        "type": "impactExecuteRequestObject",
        "domain": "genericDataObject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-24T04:48:54.531-0500",
          "modifiedDate": "2018-07-24T04:48:54.531-0500"
        },
        "data": {
          "attributes": {
            "role": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "9a5a292b-7b91-4993-ab2c-8434a33b63a7",
                  "value": "vendor"
                }
              ]
            },
            "doId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "4c30659a-433a-4ae9-80a7-61eafc4e1829",
                  "value": "testUserA_user"
                }
              ]
            },
            "doType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "2adf1b7f-06ab-4dd3-a62d-73f236e2d017",
                  "value": "user"
                }
              ]
            },
            "authorizationModel": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "21236605-c48b-4186-92c9-c8fea9a58a8b",
                  "value": "authorizationModel"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "973f47b2-52bb-41c2-af1f-46984ac33edd",
                  "value": "QUEUED"
                }
              ]
            }
          }
        }
      },
      {
        "id": "97604609-9078-4c28-aba6-c3a59a3ed0f6",
        "type": "impactExecuteRequestObject",
        "domain": "genericDataObject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "mary.jane@riversand.com",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "mary.jane@riversand.com",
          "createdDate": "2018-07-24T04:48:54.784-0500",
          "modifiedDate": "2018-07-24T04:48:54.784-0500"
        },
        "data": {
          "attributes": {
            "role": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "7a2d4345-a6e7-46ec-9d5c-7cf3600620f4",
                  "value": "admin"
                }
              ]
            },
            "doId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "0881d413-0459-40fe-9b86-2dfd72b72985",
                  "value": "testUserA_user"
                }
              ]
            },
            "doType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d79c7a53-98d8-4f91-8a2a-1b438c091261",
                  "value": "user"
                }
              ]
            },
            "authorizationModel": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "08ed52e0-3906-4592-8899-7738631e8466",
                  "value": "authorizationModel"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "588be73c-4aed-4cad-9275-67c0fc94fe74",
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

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.