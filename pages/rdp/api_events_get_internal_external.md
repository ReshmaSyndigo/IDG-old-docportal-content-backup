---
title: Get Events
sidebar: rdp_sidebar
permalink: api_events_get.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, broadly, there are two types of events:

* **Entity Manage Events**: These events are generated on the **managed** data when an entity level, attribute level or relationship level changes occur. 
* **Entity Govern Events**: These events are generated on the **governed** data when entities that are passing through a workflow are validated against the business conditions or validation model rules.
* **External Events**: These events are used to track the status of the job within a system.
<br />

This section covers the following topics to explain the usage of RESTful APIs in the Riversand Platform SDK to get events:

* [Entity Manage Events](api_events_get_manage.html)
* [Entity Govern Events](api_events_get_govern.html)
* [Events](api_events_get_ext.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.getevent}}

**Parameters**: The following table lists the parameters of the JSON request to get the event data:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting the entity govern data. |
| query | contexts  | No | Indicates an array of lists. |
| query | contexts -> list | No | Indicates where the event belongs to. |
| query | contexts -> country | No | Indicates the country the current event is linked to. |
| query | contexts -> self | No | Indicates the self context for the entity. |
| query | contexts -> workflow | No | Indicates the workflow name. |
| query | contexts  | No | Indicates an array of lists. |
| query | valueContexts  | No | Indicates an array of source and locale. |
| query | valueContexts -> source  | No | Indicates the source of the entity. |
| query | valueContexts -> locale  | No | Indicates the locale of the entity. |
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> attributesCriterion -> <<AttrName>> | No | Indicates the name of the attribute. |
| query | filters -> attributesCriterion -> <<AttrName>> -> <<Operator>> : <<AttrValue>> | No | Indicates the type of operator to be used for comparing the AttrValue. Possible values - "eq" (equal to), "gte" (greater than or equal to), and "lte" (less than or equal to). |
| query | filters -> relationshipsCriterion | No | Indicates an array of relationships names and attribute values that are used to filter the results. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> | No | Indicates the name of the relationship.|
| query | filters -> relationshipsCriterion -> <<RelationshipName>> -> attributes| No | Indicates an array of relationship attributes. You can use the same filter criteria as applicable for attributes.|
| query | filters -> excludeNonContextual | No | Indicates whether to exclude non contextual events or not.|
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | keywordsCriterion -> keywords | No | Indicates the keywords to be used to filter the results.|
| query | keywordsCriterion -> operator | No | Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND"|
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. |
| fields | fields -> relationships | No | Indicates the relationships to be returned in the result. |
| fields | fields -> relationshipAttributes | No | Indicates a comma separated list of relationship attribute to be returned in the result. |
| sort | sort -> attributes | No | Indicates an array of attributes that is used to sort the results. Results are sorted based on the order specified. |
| sort | sort -> attributes -> <<AttrName>> : <<SortOrder>> | Yes | Indicates attribute and the sort order. Possible values are _DESC and _ASC. |
| sort | sort -> attributes -> sortType  | No | Indicates the sort type such as "_DATETIME", "_DECIMAL", or "_INTEGER". If sort type is not specified, then records are sorted using "string" type. |
| options | options -> maxRecords | No | Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 2000.|

{% include callout.html content="**Notes**: 
* **_ALL** keyword can be substituted for individual records. Example: In typesCriterion, you can specify ALL or sku or product. 
* **_ALL** in the attributesCriterion or relationshipsCriterion fields implies all attributes or relationships that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
* If you do not specify any attributes or relationships in fields, then only basic event information such as is returned in the response. 
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | entities | List of event objects that matched the search criteria. See [Event Object Structure](api_event_object_structure.html), for more information. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of events objects that matched the search criteria.|

## Example

The following example demonstrates a sample request and response to get the workflow events of an entity:

<pre><code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "contexts": [
        {
          "self": "self/Entity01",
          "workflow": "newProductSetup"
        }
      ],
      "filters": {
        "typesCriterion": [
          "entitygovernevent"
        ],
        "excludeNonContextual": true
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    },
    "options": {
      "totalRecords": 100
    }
  }
}
</code></pre>

**Response**: 
<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "cb274196-48c7-4a94-8d82-df0f42c10b98",
    "maxRecords": 2000
  },
  "response": {
    "events": [
      {
        "id": "5bb2c673-69b7-45ee-b3d9-cb20b091de71",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "data": {
          "contexts": [
            {
              "context": {
                "self": "self/Entity01",
                "workflow": "newProductSetup"
              },
              "attributes": {
                "activities": {
                  "group": [
                    {
                      "workflowInstanceId": {
                        "values": [
                          {
                            "id": "9179ceb2-70e3-4138-8065-049a3248c4de",
                            "value": "faaa9a0a-2453-46d9-8c42-58dcbf82b3bc"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "17d1981b-bd03-4068-93c8-3b5ee40edd6c",
                            "value": "dfb626ce-8c79-40b0-8455-22ea9336edb5"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "6a65fc87-fa1b-42b2-9f06-2cd2669f17fd",
                            "value": "newSkusToSubmit"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "9300d948-60f1-4d8b-afdf-7ec2f1a89be5",
                            "value": "_UNASSIGNED"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "bad6fd8b-d5e8-4274-a881-9b65bc2ed930",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "8e37fa57-1c24-452f-a643-3c153fa9dc2c",
                            "value": "2017-06-27T15:41:25.623+0000"
                          }
                        ]
                      },
                      "id": "c037dffc-58ea-442e-bbdd-4d1c4bb00168"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addAttributeToContext"
                  }
                }
              }
            }
          ]
        }
      },
      {
        "id": "c792ab14-2e3e-4105-a848-68ef4ea1359f",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "data": {
          "contexts": [
            {
              "context": {
                "self": "self/Entity01",
                "workflow": "newProductSetup"
              },
              "attributes": {
                "workflowInstanceId": {
                  "values": [
                    {
                      "id": "bc15caf1-313f-4c05-9993-121f3498abae",
                      "value": "faaa9a0a-2453-46d9-8c42-58dcbf82b3bc"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "3520ed7e-9d2e-413d-ac71-3125b1479c77",
                      "value": "2017-06-27T15:41:25.530+0000"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                },
                "status": {
                  "values": [
                    {
                      "id": "98f00217-6ec1-4c04-a8e4-cced08e7138a",
                      "value": "Executing"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addContext"
                  }
                }
              }
            }
          ]
        }
      },
      {
        "id": "3156388d-59bc-49db-9176-d9929f6e8f02",
        "type": "entitygovernevent",
        "domain": "eventDataObject",
        "data": {
          "contexts": [
            {
              "context": {
                "self": "self/Entity01",
                "workflow": "newProductSetup"
              },
              "attributes": {
                "activities": {
                  "group": [
                    {
                      "workflowInstanceId": {
                        "values": [
                          {
                            "id": "f06578b8-a27f-400e-bdae-1a7e02f634ef",
                            "value": "faaa9a0a-2453-46d9-8c42-58dcbf82b3bc"
                          }
                        ]
                      },
                      "activityGuid": {
                        "values": [
                          {
                            "id": "50fd543f-aae6-44cf-80c4-6059aa59e6f9",
                            "value": "dfb626ce-8c79-40b0-8455-22ea9336edb5"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "ffde4acd-a038-44a3-a7b6-0d865e898f6a",
                            "value": "newSkusToSubmit"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "68c7a88a-7311-4dca-8913-a38cf9fe5fff",
                            "value": "_UNASSIGNED"
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "02cb4fd0-d34a-4c92-9424-a36d56bc2d71",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "aefbcb61-b2e3-4e02-97ac-e1f176d9f9ff",
                            "value": "2017-06-27T15:41:25.623+0000"
                          }
                        ]
                      },
                      "id": "40367a41-5cb6-4f51-a348-ad264734b32d"
                    }
                  ],
                  "properties": {
                    "changeContext": "entityGovernService",
                    "changeType": "addAttributeToContext"
                  }
                }
              }
            }
          ]
        }
      }
    ],
    "status": "success",
    "totalRecords": 3
  }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.