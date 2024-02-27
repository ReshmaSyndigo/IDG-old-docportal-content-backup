---
title: Get Model Information in the Tenant
sidebar: rdp_sidebar
permalink: api_get_data_model_scenario2.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatamodel}}** to get the information of the specified model in the system using a scenario. 

## Scenario

To get the information of the specified model in the system.

{% include snippets/header.html %}

## Request

To get the information of the specified model, you can use the REST API, {{site.data.rdp_glossary.getdatamodel}}. In the request, send the following details:

* query -> typesCriterion: Specify the model name, that you want to retrieve the information. The following are the list of available models in Riversand Platform, where you can specify the model name in "typesCriterion" to retrieve the information of the respective model:

| typesCriterion | Description |
|------------------ | ------------------|
| attributeModel | Retrieves the information of  Attribute model. |
| authorizationModel | Retrieves the information of Authorization model. |
| entityDefaultValuesModel | Retrieves the information of Entity Default model. |
| entityDisplayModel | Retrieves the information of Entity Display model. |
| entityManageModel | Retrieves the information of Entity Manage model. |
| entityValidationModel | Retrieves the information of Entity Validation model. |
| entityType | Retrieves the information of Entity Type model. |
| graphProcessModel | Retrieves the information of Graph Process model. |
| role | Retrieves the information of Role model. |
| user | Retrieves the information of User model. |
| workflowAssignmentRule | Retrieves the information of Workflow Assignment Rule. |

* params -> fields -> attributes: Specify as "_ALL" to retrieve all the attributes of the respective model. 
* params -> fields -> relationships: Specify as "_ALL" to retrieve all the relationships of the respective model.

<pre>
<code>
POST **{{site.data.rdp_glossary.getdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          <span style="background-color: #FFFF00">"entityDisplayModel"</span>
        ]
      }
    },
    "fields": {
       <span style="background-color: #FFFF00">"attributes": [</span>
        "_ALL"
      ],
      <span style="background-color: #FFFF00">"relationships": [</span>
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1
    }
  }
}
</code>
</pre>

## Response

Returns the specified model in the system. In the above query request, "entityDisplayModel" is specified in the "typesCriterion". Hence, the response retrieves the information of Entity Display model.

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "params": {},
        "requestId": "e3b02ecd-62f0-4ce9-9ff3-c9f4e69ab7b0"
    },
    "response": {
        "entityModels": [
            {
                "id": "zP3wSPdrQV6gguMhSDkPow_entityDisplayModel",
                "name": "AT - Austria",
                "type": "entityDisplayModel",
                "domain": "generic",
                "source": "internal",
                "properties": {
                    "createdService": "entityManageModelService",
                    "createdBy": "seema.appai@riversand.com_user",
                    "modifiedService": "entityManageModelService",
                    "modifiedBy": "seema.appai@riversand.com_user",
                    "createdDate": "2020-08-24T08:32:47.979-0500",
                    "modifiedDate": "2020-08-24T08:32:47.979-0500"
                },
                "data": {
                    "attributes": {
                        "webclassification": {
                            "properties": {
                                "displayType": "path"
                            }
                        },
                        "reviewcount": {
                            "properties": {
                                "displayType": "numerictextbox"
                            }
                        },
                        "listprice": {
                            "properties": {
                                "displayType": "numerictextbox"
                            }
                        },
                        "countrylaunchdate": {
                            "properties": {
                                "displayType": "date"
                            }
                        },
                        "isactive": {
                            "properties": {
                                "displayType": "boolean"
                            }
                        },
                        "rating": {
                            "properties": {
                                "displayType": "numerictextbox"
                            }
                        },
                        "discount": {
                            "properties": {
                                "displayType": "numerictextbox"
                            }
                        },
                        "skustatus": {
                            "properties": {
                                "displayType": "referencelist",
                                "referenceEntityInfo": [
                                    {
                                        "thumbnail": "none",
                                        "listTitle": "{entity.name}"
                                    }
                                ]
                            }
                        },
                        "dropshipsh": {
                            "properties": {
                                "displayType": "boolean"
                            }
                        },
                        "productfeatures": {
                            "properties": {
                                "displayType": "textarea"
                            }
                        }
                    }
                }
            }
        ],
        "status": "success",
        "totalRecords": 136
    }
}
</code>
</pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
