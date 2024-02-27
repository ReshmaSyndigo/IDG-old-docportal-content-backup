---
title: Create and Map Workflow using Governance Workflow Model
sidebar: rdp_sidebar
permalink: api_create_gov_workflow_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create and map workflow using [Governance Workflow Model](api_governance_data_model.html):

* [Create Entity Govern Model for Entity Type](api_create_data_model_scenario75.html)
* [Create Workflow Definition with Activities, Actions, and Allowed Users](api_create_data_model_scenario69.html)
* [Mapping Workflow to a Context](api_create_data_model_scenario70.html)
* [Map Workflow Assignment Rule Model](api_create_data_model_scenario74.html)

## Request

POST {{site.data.rdp_glossary.createdatamodel}}

**Parameters**: The following table lists the parameters of the JSON request to create a data model:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entityModel | Yes | Indicates the details of the entity model to be created. See [Data Model Object Structure](api_workflow_defn_data_model.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to create a "NewProductIntroduction" workflow with activities such as "New Product Review" and "Legal Review": 
  
* For "New Product Review" Activity, specify the action as "Done" and assign allowed users.
* For "Legal Review" Activity, specify the action as "Done" and assign allowed users.

<pre><code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    "id": "NewProductIntroduction_workflowDefinition",
    "name": "NewProductIntroduction",
    "type": "workflowDefinition",
    "domain": "generic",
    "data": {
      "attributes": {
        "workflowName": {
          "values": [
            {
              "value": "New Product Introduction"
            }
          ]
        },
        "workflowVersion": {
          "values": [
            {
              "value": "v1"
            }
          ]
        },
        "published": {
          "values": [
            {
              "value": true
            }
          ]
        },
        "activities": {
          "group": [
            {
              "activityGuid": {
                "values": [
                  {
                    "value": "216cebce-345b-4ec6-ae9a-473c4df2b077",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "activityName": {
                "values": [
                  {
                    "value": "newProductReview"
                  }
                ]
              },
              "externalName": {
                "values": [
                  {
                    "value": "New Product Review"
                  }
                ]
              },
              "sequence": {
                "values": [
                  {
                    "value": "1"
                  }
                ]
              },
              "assignmentType": {
                "values": [
                  {
                    "value": "Queue"
                  }
                ]
              },
              "allowedRoles": {
                "values": [
                  {
                    "value": "admin"
                  },
                  {
                    "value": "productmanager"
                  }
                ]
              },
              "allowedUsers": {
                "values": [
                  {
                    "value": ""
                  }
                ]
              },
              "actions": {
                "group": [
                  {
                    "actionName": {
                      "values": [
                        {
                          "value": "Done",
                          "source": "internal",
                          "locale": "en-US"
                        }
                      ]
                    },
                    "actionText": {
                      "values": [
                        {
                          "value": "Done"
                        }
                      ]
                    },
                    "actionIcon": {
                      "values": [
                        {
                          "value": "",
                          "source": "internal",
                          "locale": "en-US"
                        }
                      ]
                    },
                    "commentsMode": {
                      "values": [
                        {
                          "value": "Optional"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "activityGuid": {
                "values": [
                  {
                    "value": "36b48815-a25e-43b0-af06-b7daec8326ce",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "activityName": {
                "values": [
                  {
                    "value": "legalReview"
                  }
                ]
              },
              "externalName": {
                "values": [
                  {
                    "value": "Legal Review"
                  }
                ]
              },
              "sequence": {
                "values": [
                  {
                    "value": "2"
                  }
                ]
              },
              "assignmentType": {
                "values": [
                  {
                    "value": "Queue"
                  }
                ]
              },
              "allowedRoles": {
                "values": [
                  {
                    "value": "admin"
                  },
                  {
                    "value": "legal"
                  }
                ]
              },
              "allowedUsers": {
                "values": [
                  {
                    "value": ""
                  }
                ]
              },
              "actions": {
                "group": [
                  {
                    "actionName": {
                      "values": [
                        {
                          "value": "Done",
                          "source": "internal",
                          "locale": "en-US"
                        }
                      ]
                    },
                    "actionText": {
                      "values": [
                        {
                          "value": "Done"
                        }
                      ]
                    },
                    "actionIcon": {
                      "values": [
                        {
                          "value": "",
                          "source": "internal",
                          "locale": "en-US"
                        }
                      ]
                    },
                    "commentsMode": {
                      "values": [
                        {
                          "value": "Optional"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
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
        "params": {},
        "requestId": "d7f30941-3cfc-4147-aea1-215e993b2652"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "message": "Entity has been submitted for create with entity Id : NewProductIntroduction_workflowDefinition. Please check back after 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre> 

Verify the created data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* After creating a workflow and mapping to a context:
  * [Create an entity](api_app_create_entity.html) in a context so that the workflow is invoked. 
  * [Get govern data](api_get_govern_data.html) for the entity. You can view the workflow instance data for the entity with the details of the workflow activities and status.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.