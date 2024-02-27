---
title: Create Business Rule to Invoke Workflow
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario71.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create a business rule to invoke a workflow, using a scenario.

## Scenario

To create a business rule "invokenewskuintroductionforsku_businessRule" to invoke "NewSKUIntroduction" workflow.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_business_rule_defn_data_model.html) object, fill the details about the attributes of the business rule such as business rule name, description, type, enabled, isDraft, and version as required.

<pre><code>

IIF[IsEntityInWorkflow[\"NewSKUIntroduction\"]=false,InvokeWorkflow[\"NewSKUIntroduction\"],false]

</code></pre> 

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "invokenewskuintroductionforsku_businessRule",</span>
    <span style="background-color: #FFFF00">"type": "businessRule",</span>
    "domain": "generic",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "name": {
          "values": [
            {
              "value": "Invoke NewSKUIntroduction for SKU",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Invoke NewSKUIntroduction for SKU",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "value": "validationpostprocess",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "executionMode": {
          "values": [
            {
              "value": "any",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "definition": {
          "values": [
            {
              "value": "IIF[IsEntityInWorkflow[\"NewSKUIntroduction\"]=false,InvokeWorkflow[\"NewSKUIntroduction\"],false]",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "enabled": {
          "values": [
            {
              "value": true,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "isDraft": {
          "values": [
            {
              "value": false,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "isDeleted": {
          "values": [
            {
              "value": false,
              "source": "internal",
              "locale": "en-US"
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
          "message": "Submitted businessRule for create with Id invokenewskuintroductionforsku_businessRule. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "businessRule",
            "create",
            "invokenewskuintroductionforsku_businessRule"
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