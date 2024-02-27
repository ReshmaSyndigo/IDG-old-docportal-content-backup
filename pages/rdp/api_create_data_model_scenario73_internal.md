---
title: Map Business Rules or Business Conditions to a Context
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario73.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to map workflow business rules to SKU context, using a scenario.

## Scenario

To map the "invokenewskuintroductionforsku_businessRule" business rules to self context. This internally implies that, you wish to create a relationship of type "hasBusinessRules" between SKU and businessRule.

{% include snippets/header.html %}

## Request

To create the above model, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. In the request send the following details:
  
* entityModel: In the [entity model](api_rule_context_mapping_data_model.html) object, fill the details about the model id, name, and type. Create an array of relationship type "hasBusinessRules" and in the "relTo" object for each, specify the id of the business rule and type as required.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "sku_ruleContextMappings",</span>
    <span style="background-color: #FFFF00">"type": "ruleContextMappings",</span>
    "domain": "generic",
    "data": {
      "relationships": {
        <span style="background-color: #FFFF00">"hasBusinessRules": [</span>
          {
            "id": "hasBusinessRules_invokenewskuintroductionforsku_businessRule",
            "relationshipType": "association",
            "direction": "both",
            <span style="background-color: #FFFF00">"relTo": {</span>
              "id": "invokenewskuintroductionforsku_businessRule",
              "type": "businessRule"
            },
            "attributes": {
              "ignoreChangeContext": {
                "values": [
                  {
                    "value": true,
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
              "enabled": {
                "values": [
                  {
                    "value": true,
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "executionOrder": {
                "values": [
                  {
                    "value": "1",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "triggerActions": {
                "values": [
                  {
                    "value": "create",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              }
            }
          }
        ]
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
          "message": "Submitted ruleContextMappings for create with Id sku_ruleContextMappings. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "ruleContextMappings",
            "create",
            "sku_ruleContextMappings"
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