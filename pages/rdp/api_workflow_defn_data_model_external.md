---
title: Governance Workflow Definition Data Model
sidebar: rdp_sidebar
permalink: api_workflow_defn_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the details of the workflow and its attributes. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [data](#data): Contains an array of [contexts](#contexts) and [attributes](#attributes) details of Governance Workflow Definition Data Model.

<br>
{% if site.build == "internal" %}
See [Create Workflow Definition with Activities, Actions, and Allowed Users](api_create_data_model_scenario69.html) for more scenarios and examples.{% endif %} This topic describes the Governance Workflow Definition Data Model object structure using a sample scenario.

## Scenario 

Consider that you wish to create a "NewSKUIntroduction" workflow. The following example demonstrates the sample JSON format to create "NewSKUIntroduction":

<pre><code>
{
  "entityModel": {
    "id": "NewSKUIntroduction_workflowDefinition",
    "name": "NewSKUIntroduction",
    "type": "workflowDefinition",
    "domain": "generic",
    "data": {
      "attributes": {
        "workflowName": {
          "values": [
            {
              "value": "New SKU Introduction",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "workflowVersion": {
          "values": [
            {
              "value": "v1",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "published": {
          "values": [
            {
              "value": true,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "activities": {
          "group": [
            {
              "activityGuid": {
                "values": [
                  {
                    "value": "9eb6d227-aca1-405b-8018-3014c2f7facd",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "activityName": {
                "values": [
                  {
                    "value": "skuSubmission",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "externalName": {
                "values": [
                  {
                    "value": "SKU Submission",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "sequence": {
                "values": [
                  {
                    "value": "1",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "assignmentType": {
                "values": [
                  {
                    "value": "Queue",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "allowedRoles": {
                "values": [
                  {
                    "value": "admin",
                    "source": "internal",
                    "locale": "en-US"
                  },
                  {
                    "value": "vendor",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "allowedUsers": {
                "values": [
                  {
                    "value": "",
                    "source": "internal",
                    "locale": "en-US"
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
                          "value": "Done",
                          "source": "internal",
                          "locale": "en-US"
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
                          "value": "Optional",
                          "source": "internal",
                          "locale": "en-US"
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
                    "value": "dec70239-3682-438f-bb44-188d9e68ade6",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "activityName": {
                "values": [
                  {
                    "value": "buyerApproval",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "externalName": {
                "values": [
                  {
                    "value": "Buyer Approval",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "sequence": {
                "values": [
                  {
                    "value": "2",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "assignmentType": {
                "values": [
                  {
                    "value": "Queue",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "allowedRoles": {
                "values": [
                  {
                    "value": "admin",
                    "source": "internal",
                    "locale": "en-US"
                  },
                  {
                    "value": "buyer",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "allowedUsers": {
                "values": [
                  {
                    "value": "",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "actions": {
                "group": [
                  {
                    "actionName": {
                      "values": [
                        {
                          "value": "Approve",
                          "source": "internal",
                          "locale": "en-US"
                        }
                      ]
                    },
                    "actionText": {
                      "values": [
                        {
                          "value": "Approve",
                          "source": "internal",
                          "locale": "en-US"
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
                          "value": "Optional",
                          "source": "internal",
                          "locale": "en-US"
                        }
                      ]
                    }
                  },
                  {
                    "actionName": {
                      "values": [
                        {
                          "value": "Reject",
                          "source": "internal",
                          "locale": "en-US"
                        }
                      ]
                    },
                    "actionText": {
                      "values": [
                        {
                          "value": "Reject",
                          "source": "internal",
                          "locale": "en-US"
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
                          "value": "Mandatory",
                          "source": "internal",
                          "locale": "en-US"
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

The following diagram depicts the structure of the above Data Model:

{% picture governanceworkflowdefinitiondatamodel.png alt="Governance Workflow Definition Data Model" %}

## entityModel

This object is the parent container that holds all the required information about the entity model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String | 
| name | Indicates the name of the model. Generally, this is the workflow name for which the model is defined. | String | 
| type | Indicates the model type of the entity model. | String |
| domain | Indicates the root domain this workflow model belongs to. | String |
| data | Indicates the section for all business data. | [data](#data) | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | NewSKUIntroduction_workflowDefinition |
| name | NewSKUIntroduction |
| type | workflowDefinition |
| domain | generic |

## data

This object contains the business data of the model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of attributes of the workflow. | [attributes](#attributes) |

## attributes

This object contains an array of attributes. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) | 

## attribute

This object contains the various attribute details of the workflow. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| workflowName | Indicates the name of the workflow. | List of [values](#values) objects. |
| workflowVersion | Indicates the version of the workflow. | List of [values](#values) objects. |
| published | Indicates whether the workflow is published or not. | List of [values](#values) objects. |
| activities | Indicates an array of attributes of the workflow. | List of [values](#values) objects. |

## activities
 
This object indicates the various activities and versions of the workflow. The following table lists the details of the activities object:

| Property | Description | Type | 
|----------|-------------|------|
| group -> activityGuid | Indicates the activity id in UI. | List of [values](#values) objects |
| group -> activityName | Indicates the name of the activity. | List of [values](#values) objects |
| group -> externalName | Indicates the external name of the step. | List of [values](#values) objects |
| group -> sequence | Indicates the sequence of the activity in the wirkflow. | List of [values](#values) objects |
| group -> assignmentType | Indicates the type of assignment to perform for the workflow step in the provided context. <br> • <b>Business Rule</b>: The given rule definition is evaluated and if the result is true, the workflow step is assigned to the user mentioned in the userID attribute. <br> • <b>Creator</b>: The workflow step is assigned to the user who created this entity. <br> • <b>Previous User On Re-entry</b>: If there is re-entry into the step, the workflow step is assigned to the user who previously acted on that entity. <br> • <b>Least Queue Size</b>: The workflow step is assigned to the user who has the least number of entities assigned for that step. | List of [values](#values) objects |
| group -> allowedRoles | Indicates the roles that can act on this activity. | List of [values](#values) objects |
| group -> allowedUsers | Indicates the users that can act on this activity. | List of [values](#values) objects |
| group -> actions | Indicates the action to be taken at the end of this activity. | List of [values](#values) objects |

## values

This object indicates the value, source and locale information. The following table lists the details of the values object:

| Property | Description | Type | 
|----------|-------------|------|
| value | Indicates the actual attribute value. | String  | 
| source | Indicates the source of attribute value. | String  | 
| locale | Indicates the locale for the attribute value. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| value | skuSubmission |
| source | internal |
| locale | en-US |

This section covers the following topics to explain the object structure of the models associated with business rules and business conditions:

* [Governance Business Rule Definition Data Model](api_business_rule_defn_data_model.html)
* [Governance Business Condition Data Model](api_business_condition_data_model.html)