---
title: Create Workflow Definition with Activities, Actions, and Allowed Users
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario69.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a workflow definition with a few activities, actions and allowed users or roles, using a scenario.

## Scenario

To create a "NewSKUIntroduction" workflow with activities such as "skuSubmission" and "buyerApproval".

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_workflow_defn_data_model.html) object, fill the details about the workflow name and version. Create a nested attribute "activities" and specify the actions, allowed users, and allowed roles for each activity as required. If you wish to publish the workflow, then set the "published" attribute to "true".

* For "skuSubmission" Activity, specify the action as "Done" and assign allowed roles. 
* For "buyerApproval" Activity, specify the action as "Approve", "Reject" and assign allowed roles.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "NewSKUIntroduction_workflowDefinition",</span>
    <span style="background-color: #FFFF00">"name": "NewSKUIntroduction",</span>
    <span style="background-color: #FFFF00">"type": "workflowDefinition",</span>
    "domain": "generic",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"workflowName": {</span>
          "values": [
            {
              "value": "New SKU Introduction"
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
        <span style="background-color: #FFFF00">"published": {</span>
          "values": [
            {
              "value": true
            }
          ]
        },
        <span style="background-color: #FFFF00">"activities": {</span>
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
              <span style="background-color: #FFFF00">"activityName": {</span>
                "values": [
                  {
                    "value": "skuSubmission"
                  }
                ]
              },
              "externalName": {
                "values": [
                  {
                    "value": "SKU Submission"
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
              <span style="background-color: #FFFF00">"allowedRoles": {</span>
                "values": [
                  {
                    "value": "admin"
                  },
                  {
                    "value": "vendor"
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
              <span style="background-color: #FFFF00">"actions": {</span>
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
                    <span style="background-color: #FFFF00">"actionText": {</span>
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
              <span style="background-color: #FFFF00">"activityName": {</span>
                "values": [
                  {
                    "value": "buyerApproval"
                  }
                ]
              },
              "externalName": {
                "values": [
                  {
                    "value": "Buyer Approval"
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
              <span style="background-color: #FFFF00">"allowedRoles": {</span>
                "values": [
                  {
                    "value": "admin"
                  },
                  {
                    "value": "buyer"
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
              <span style="background-color: #FFFF00">"actions": {</span>
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
                          "value": "Approve"
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
                          "value": "Reject"
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
                          "value": "Mandatory"
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
</code>
</pre>

## Response

If the entity model create request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3ce5b682-48ce-4dd1-97c9-5352fffffc9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted workflowDefinition for create with Id NewSKUIntroduction_workflowDefinition. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "workflowDefinition",
            "create",
            "NewSKUIntroduction_workflowDefinition"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Verify the created default model for the entity type:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.