---
title: Get Entity Govern Data
sidebar: rdp_sidebar
permalink: api_get_govern_data.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get entity govern data:

* [Get Workflow Status of an Entity](api_govern_get_scenario1.html)
* [Get Workflow Activity Status](api_govern_get_scenario4.html)
* [Get Status of Workflow Activity Assigned to a User](api_govern_get_scenario6.html)
* [Get Business Condition Status of an Entity](api_govern_get_scenario2.html)
* [Get Status of a Business Condition in a Workflow](api_govern_get_scenario5.html)
* [Get related entities of Pending Business Condition](api_govern_get_scenario10.html)
* [Get related entities of a Invalid Business Condition](api_govern_get_scenario11.html)
* [Get Validation Rules Status of an Entity](api_govern_get_scenario3.html)
* [Get Business Conditions for Multiple Entity Types](api_govern_get_scenario7.html)
* [Get Root Node Mismatch Error for Path Attribute Value](api_govern_get_scenario8.html)
* [Get Leaf Node Violation Error for Path Attribute Value](api_govern_get_scenario9.html)

## Example

The following example demonstrates a sample request and response to get the "newSKUIntroduction" workflow data for a "sku" entity "e1":

POST {{site.data.rdp_glossary.getgoverndata}}

<pre><code>
{    
  "params": {
    "query": {
      "contexts": [
        {
          "workflow": "newSKUIntroduction"
        }
      ],
      "id":"e1",
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code></pre>

**Response**:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "22a1115a-9559-4e21-98c5-cafa743ec7ac",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "e1",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "modifiedDate": "2017-04-04T18:52:07.7804046+05:30"
        },
        "data": {
          "attributes": {},
          "contexts": [
            {
              "context": {
                "workflow": "newSKUIntroduction"
              },
              "attributes": {
                "workflowInstanceId": {
                  "values": [
                    {
                      "id": "b232246a-c91f-4907-9200-897cb461b8b8",
                      "value": "9b519e2f-eea3-4f48-a8d2-2fa1f512abc6"
                    }
                  ]
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "229a1964-750f-4aab-829c-275f41bb27a1",
                      "value": "2017-04-04T13:22:05.1307637Z"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "id": "06e05ba2-abdc-4b9b-87fe-7129735ef9ca",
                      "value": "Executing"
                    }
                  ]
                },
                "endDateTime": {
                  "values": [
                    {
                      "id": "e154bbd8-9997-4b07-9e9b-bf4b61128b46",
                      "value": "2017-04-03T16:07:51.5671270Z"
                    }
                  ]
                },
                "activities": {
                  "group": [
                    {
                      "activityGuid": {
                        "values": [
                          {
                            "id": "90f6b782-6934-499c-bfe7-ef6a38f57775",
                            "value": "e4d9b1cb-1a58-468f-a0c0-af8f00383c5c"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "53139e69-70ba-4804-97bc-53dea9fc4171",
                            "value": "New SKUs to Submit"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "753d5bd4-8d9a-4ac1-92d1-93bd7fe0bd77",
                            "value": "cfadmin"
                          }
                        ]
                      },
                      "performedAction": {
                        "values": [
                          {
                            "id": "999b3c06-cbf6-4c7c-9c31-2ec83f1993f5",
                            "value": ""
                          }
                        ]
                      },
                      "comments": {
                        "values": [
                          {
                            "id": "f4f07457-d112-444d-9fe1-280204a9cd6e",
                            "value": ""
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "5905ebfb-0bdd-44bb-8fe2-dcba025923bb",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "18c16845-5e3b-4022-b446-b00e1996f575",
                            "value": "2017-04-04T13:22:06.3201750Z"
                          }
                        ]
                      },
                      "endDateTime": {
                        "values": [
                          {
                            "id": "c450e371-61ce-43e2-8230-1fb9f6c67824",
                            "value": ""
                          }
                        ]
                      },
                      "id": "740b1019-7ecc-4f73-9d28-43b582228ca9"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Request Object

| Parameters | Name | Description |
|-------|--------|-------------|
| params | query | Indicates the search criteria for getting the entity govern data. |
| query | id  | Indicates unique identifier of the entity. |
| query | name | Indicates name of the entity. |
| query | ids | Indicates an array of entity unique identifiers. |
| query | contexts | Indicates an array of list of contexts. |
| query | contexts -> list | Indicates where the entity belongs to. |
| query | contexts -> country | Indicates the country to which the current entity is linked to. |
| query | contexts -> channel | Indicates the channel to which the current entity is linked to. |
| query | contexts -> workflow | Indicates the workflow to which the current entity is linked to. |
| query | valueContexts | Indicates an array of source and locale. |
| query | valueContexts -> source  | Indicates the source of the entity. |
| query | valueContexts -> locale  | Indicates the locale of the entity. |
| query | filters -> attributesCriterion | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> attributesCriterion -> <<AttrName>> | Indicates the name of the attribute. |
| query | filters -> attributesCriterion -> <<AttrName>> -> <<Operator>> : <<AttrValue>> | Indicates the type of operator to be used for comparing the AttrValue. Possible values - "eq" (equal to), "gte" (greater than or equal to), and "lte" (less than or equal to). |
| query | filters -> relationshipsCriterion | Indicates an array of relationships names and attribute values that are used to filter the results. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> | Indicates the name of the relationship. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> -> attributes| Indicates an array of relationship attributes. You can use the same filter criteria as applicable for attributes.|
| query | filters -> typesCriterion | Indicates a comma separated list of entity types. |
| query | filters -> excludeNonContextual | Indicates whether to exclude non contextual events or not. |
| query | keywordsCriterion -> keywords | Indicates the keywords to be used to filter the results.|
| query | keywordsCriterion -> operator | Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND"|
| fields | fields -> attributes | Indicates a comma separated list of attributes to be returned in the result. |
| fields | fields -> relationships | Indicates the relationships to be returned in the result. |
| fields | fields -> relationshipAttributes | Indicates a comma separated list of relationship attribute to be returned in the result. |
| sort | sort -> attributes | Indicates an array of attributes that is used to sort the results. Results are sorted based on the order specified. |
| sort | sort -> attributes -> <<AttrName>> : <<SortOrder>> | Indicates attribute and the sort order. Possible values are _DESC and _ASC. |
| sort | sort -> attributes -> sortType | Indicates the sort type such as "_DATETIME", "_DECIMAL", or "_INTEGER". If sort type is not specified, then records are sorted using "string" type. |
| options | options -> maxRecords | Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 2000. |

{% include callout.html content="**Note**: 
* **_ALL** keyword can be substituted for individual records. Example: In typesCriterion, you can specify ALL or sku or product. 
* **_ALL** in the attributesCriterion or relationshipsCriterion fields implies all attributes or relationships that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
* If you do not specify any attributes or relationships in fields, then only basic entity governb information such as entity Id and entity type are returned in the response. 
" type="primary" %}

## Response Object

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | entities | List of entity govern data objects that matched the search criteria. See [Entity Object Structure](api_entity_govern_object_structure.html), for more information. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of entity govern objects that matched the search criteria. |

{% include callout.html content="**Notes**: If you do not specify any attributes or relationships in fields, then only basic entity information such as entity id and entity type are returned in the response. 
" type="primary" %}