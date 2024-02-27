---
title: Mapping Workflow to a Context
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario70.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to map a workflow to SKU, using a scenario.

## Scenario

To map the workflow "NewSKUIntroduction" to "SKU" entity. This internally implies that, you wish to create a relationship of type "association" between the SKU and the workflow definition.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_workflow_mapping_model.html) object, fill the details about the model id, name, and type. Create a relationship of type "hasWorkflowsDefined" and in the relTo object, specify the id as "NewSKUIntroduction_workflowDefinition" and type as "workflowDefinition". This will map the workflow to SKU.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "sku_workflowDefinitionMapping",</span>
    <span style="background-color: #FFFF00">"name": "sku",</span>
    <span style="background-color: #FFFF00">"type": "workflowDefinitionMapping",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"hasWorkflowsDefined": [</span>
          {
            "id": "rel106",
            "direction": "both",
            <span style="background-color: #FFFF00">"relationshipType": "association",</span>
            <span style="background-color: #FFFF00">"relTo": {</span>
              "id": "NewSKUIntroduction_workflowDefinition",
              "type": "workflowDefinition"
            }
          },
          {
            "id": "rel107",
            "direction": "both",
            "relationshipType": "association",
            "relTo": {
              "id": "UpdateSKU_workflowDefinition",
              "type": "workflowDefinition"
            }
          }
        ]
      },
      "contexts": []
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
          "message": "Submitted workflowDefinitionMapping for create with Id sku_workflowDefinitionMapping. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "workflowDefinitionMapping",
            "create",
            "sku_workflowDefinitionMapping"
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