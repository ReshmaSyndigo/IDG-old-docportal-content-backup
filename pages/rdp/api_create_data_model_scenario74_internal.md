---
title: Map Workflow Assignment Rule Model
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario74.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create workflow assignment rule model, using a scenario.

## Scenario

To assign "NewSKUIntroduction_skuSubmission_sku_2" workflow to various attributes.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_workflow_assignment_rule_model.html) object, fill the details about the model id, name, and type.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "NewSKUIntroduction_skuSubmission_sku_2_workflowAssignmentRule",</span>
    <span style="background-color: #FFFF00">"name": "NewSKUIntroduction_skuSubmission_sku_2",</span>
    <span style="background-color: #FFFF00">"type": "workflowAssignmentRule",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "workflowName": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "NewSKUIntroduction"
            }
          ]
        },
        "activityName": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "skuSubmission"
            }
          ]
        },
        "dataObjectType": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "sku"
            }
          ]
        },
        "sequence": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": 2
            }
          ]
        },
        "assignmentType": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "Business Rule"
            }
          ]
        },
        "definition": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "GetAttributeValueFromContext[\"_DEFAULT\",\"_DEFAULT\",\"status\",\"self:self\"]=\"New\""
            }
          ]
        },
        "userId": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "rw.vendorapi@riversand.com_user"
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
          "message": "Submitted workflowAssignmentRule for create with Id NewSKUIntroduction_skuSubmission_sku_2_workflowAssignmentRule. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "workflowAssignmentRule",
            "create",
            "NewSKUIntroduction_skuSubmission_sku_2_workflowAssignmentRule"
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