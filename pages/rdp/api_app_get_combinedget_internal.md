---
title: Get Entities through Combined Get
sidebar: rdp_sidebar
permalink: api_app_get_combinedget.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides you with a mechanism called as **Combined Get** through which you can "Get" multiple entities which are part of different services such as [Govern Services](api_manage_govern_data.html).

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get an entity through Combined Get using Entity App Service:

* [Get Entities using Workflow Details, Attribute, and Keyword Criterion](api_app_get_combinedget_scenario14.html)
* [Get Entities using Business Condition, Status, and Attribute Criterion](api_app_get_combinedget_scenario15.html)

{% include callout.html content="**Note**:<br/>
With the current Riversand Platform design, we can search entities which are part of 'only' two different services such as 'Entity Services' and 'Govern Services'.
" type="primary" %}

## Request

POST {{site.data.rdp_glossary.appcombinedget}}

**Parameters**:  The following table lists the parameters of the JSON request to Get Entities using Combined Get:

| Parameters | Name | Required | Description |
|-------------|--------|----------------|-------------|
| Body | params | Yes | Indicates the details about "this" request type. |
| params | pageSize | Yes | Indicates the size of the page in terms of number of records that is displayed as part of the 'Response'.|
| Body | entities | Yes | Indicates the **Combined Get** query details.|
| entities | id | Yes | Indicates the unique identifier for "this" Combined Get query and is fixed as "combinedGet". |
| entities | name | No | Indicates the name for "this" Combined Get query and is fixed as "combinedGet". |
| entities | type | Yes | Indicates the type of "this" Combined Get query and is fixed as "config". |
| entities | data | Yes | Indicates the details of the query data "this" Combined Get has. |
| entities | data -> jsonData -> searchQueries | Yes | Indicates an array of search queries "this" Combined Get has. |
| entities | data -> jsonData -> searchQueries -> serviceName | Yes |Indicates the name of the service on which you are performing the "Combined Get" search. |
| entities | data -> jsonData -> searchQueries -> action | Yes | Indicates the action you wish to perform on "this" search.|
| entities | data -> jsonData -> searchQueries -> searchSequence | Yes | Indicates the order at which this search needs to be performed. If you provide the value as "1" in the searchSequence, that particular search is carried out first.|
| entities | data -> jsonData -> searchQueries -> searchQuery | Yes | Indicates the search query that needs to be performed. Refer [Get Entities](api_app_get_entity.html) for its structure details. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | entities | List of entity objects that matched the search criteria. See [Entity App Service Object Structure](api_entity_object_structure.html), for more information. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. <br/>In the response for **getcombined** request, the first message provides info on the number of entity searches that were performed to result in a success match. <br/> The second message provides info on the number of times the search criteria is used. |
| response | totalRecords | List of entity objects that matched the search criteria.|

{% include callout.html content="**Notes**: 

* If you do not specify any attributes or relationships in fields, then only basic entity information such as entity Id and entity type are returned in the response. 
* The limitation with the 'combinedGet' is that if you have more than 30,000 entities participating in a particular activity in a workflow, it might yield you inconsistent search results.
" type="primary" %}

## Example

The following example demonstrates a sample request and response to get all "SKU" entities which are in "skuSubmission" stage of "newSKUIntroduction" workflow with its "status" as "executing" with status attribute as "New".

<pre><code>
POST {TenantURL or ID}/api/entityappservice/getcombined
Headers: Content-Type: application/json
Body:
{
  "params": {
    "pageSize": 30000
  },
  "entity": {
    "id": "combinedGet",
    "name": "combinedGet",
    "type": "config",
    "data": {
      "jsonData": {
        "searchQueries": [
          {
            "serviceName": "entitygovernservice",
            "action": "get",
            "searchSequence": 1,
            "searchQuery": {
              "query": {
                "contexts": [
                  {
                    "workflow": "newSKUIntroduction"
                  }
                ],
                "filters": {
                  "attributesCriterion": [
                    {
                      "activities": {
                        "attributes": [
                          {
                            "activityName": {
                              "eq": "skuSubmission"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "status": {
                        "eq": "Executing"
                      }
                    }
                  ],
                  "typesCriterion": [
                    "sku"
                  ]
                }
              }
            }
          },
          {
            "serviceName": "entityservice",
            "action": "get",
            "searchSequence": 2,
            "searchQuery": {
              "query": {
                "filters": {
                  "typesCriterion": [
                    "sku"
                  ],
                  "attributesCriterion": [
                    {
                      "status": {
                        "exact": "New",
                        "type": "_STRING"
                      }
                    }
                  ]
                },
                "valueContexts": [
                  {
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "fields": {
                "attributes": [
                  "brand",
                  "availableincountries"
                ]
              },
              "options": {
                "maxRecords": 2
              }
            }
          }
        ]
      }
    }
  }
}
</code></pre>


**Response**:
<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "9ec09cc1-e91c-4e63-a74a-66b4f2a5e01b",
    "maxRecords": 2
  },
  "response": {
    "entities": [
      {
        "id": "eyC2x3OpQE-_zJ-WU65x5g",
        "name": "20VendorNewTesting454",
        "type": "sku",
        "data": {
          "attributes": {
            "availableincountries": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8e3dba7d-7b5b-4e40-8baa-7341f34df115",
                  "value": "Australia",
                  "properties": {
                    "referenceData": "country/6cbe5e60-4125-4ac1-a372-85ddc6263b65",
                    "referenceDataIdentifier": "australia"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "8ca5ddb4-d9a2-478d-8fa5-651db550eda8",
                  "value": "Belgium",
                  "properties": {
                    "referenceData": "country/4948ee77-3b4a-41ef-abfa-84464b41a360",
                    "referenceDataIdentifier": "belgium"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "35c49b72-6d69-4b62-9911-639fad2616df",
                  "value": "France",
                  "properties": {
                    "referenceData": "country/b4f7517b-7a78-423f-b0e0-f5570af0ddba",
                    "referenceDataIdentifier": "france"
                  }
                }
              ]
            },
            "brand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d51a3abc-e092-4b74-ba34-4404f0dd85d4",
                  "value": "Toppins"
                }
              ]
            }
          }
        }
      },
      {
        "id": "jcAhQUH5RB2CAkDVTIMDag",
        "name": "20VendorNewTesting424",
        "type": "sku",
        "data": {
          "attributes": {
            "availableincountries": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9be633f4-43c6-42ec-9096-d58fe832b266",
                  "value": "Australia",
                  "properties": {
                    "referenceData": "country/6cbe5e60-4125-4ac1-a372-85ddc6263b65",
                    "referenceDataIdentifier": "australia"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "2d4bba84-f20e-494a-8060-19ab68ffbfc3",
                  "value": "Belgium",
                  "properties": {
                    "referenceData": "country/4948ee77-3b4a-41ef-abfa-84464b41a360",
                    "referenceDataIdentifier": "belgium"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4c645bcb-f1f4-4c35-9c37-e22443cb865b",
                  "value": "France",
                  "properties": {
                    "referenceData": "country/b4f7517b-7a78-423f-b0e0-f5570af0ddba",
                    "referenceDataIdentifier": "france"
                  }
                }
              ]
            },
            "brand": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "58fba309-e890-4588-a2dd-3c880a4b4e6e",
                  "value": "Toppins"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0034",
          "message": "Total Hits in First Query: '34522'",
          "messageType": "info"
        },
        {
          "messageCode": "I0035",
          "message": "Total number of passes: '1'",
          "messageType": "info"
        }
      ]
    },
    "totalRecords": 29997
  }
}
</code></pre>

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.