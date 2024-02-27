---
title: Model Govern Validate
sidebar: rdp_sidebar
permalink: api_model_govern_validate.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.modelgovernservice}}** to validate rule definition of a given business rule using the following scenarios. 

## Scenario 1

To validate **invokenewskuintroductionforsku_businessRule** business rule using id and type.

{% include snippets/header.html %}

## Request

To validate the above model, you can use the REST API {{site.data.rdp_glossary.modelgovernservice}}. In the request send the following details:

* entityModel: In the entity model object, fill details about Id and type of the business rule. 

{% include callout.html content="**Note**: If the validate API request contains id and type of the **businessRule** object, then the API :
* loads the BR based on the given id and type.
* identifies supported service type for given value of the ruleType attribute.
* rule definition is validated taking into consideration the keywords supported for that service type.
* rule definition is validated for the correctness of the syntax.
" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.modelgovernservice}}**
Headers: Content-Type: application/json
Body:
{ 
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "invokenewskuintroductionforsku_businessRule",</span>
    <span style="background-color: #FFFF00">"type": "businessRule"</span>
  }
}
</code>
</pre> 

## Scenario 2

To validate **invokenewskuintroductionforsku_businessRule** business rule using full business rule object.

{% include snippets/header.html %}

## Request

To validate the above model, you can use the REST API {{site.data.rdp_glossary.modelgovernservice}}. In the request send the following details:

* entityModel: In the entity model object, fill details about Id, and type of the business rule. 
* data: In the attributes object, provide the attributes of the business rule object.

{% include callout.html content="**Note**: If the validate API request contains the entire **businessRule** object, then the API:
* identifies supported service type for given value of the ruleType attribute.
* rule definition is validated taking into consideration the keywords supported for that service type.
* rule definition is validated for the correctness of the syntax.
" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.modelgovernservice}}**
Headers: Content-Type: application/json
Body:
{ 
  "entityModel": {
    <span style="background-color: #FFFF00">"id": "invokenewskuintroductionforsku_businessRule",</span>
    <span style="background-color: #FFFF00">"type": "businessRule",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "name": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "b9b4bd39-696e-4929-aa15-12c072943847",
              "value": "Invoke NewSKUIntroduction for SKU"
            }
          ]
        },
        "description": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "7c3c6634-20dc-4c93-86ee-21a3cde62773",
              "value": "Invoke NewSKUIntroduction for SKU"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "0385bba7-61e1-408c-bdfb-4b50fc0de17b",
              "value": "validationpostprocess"
            }
          ]
        },
        "executionMode": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "6c2ad47e-eb6a-4011-86ba-b2c4af984f40",
              "value": "any"
            }
          ]
        },
        "definition": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "bbb071bb-bcd7-4fa8-8d5a-fdb8b15f613a",
              "value": "IIF[IsEntityInWorkflow[\"NewSKUIntroduction\"]=false,InvokeWorkflow[\"NewSKUIntroduction\"],false]"
            }
          ]
        },
        "enabled": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "2f79dd3b-3e61-4752-bfa2-a3f9048fd95a",
              "value": true
            }
          ]
        },
        "isDraft": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "29a9bbf1-e34e-44a9-bfdc-e1d9ff460519",
              "value": false
            }
          ]
        },
        "isDeleted": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "7bf00ef2-3bb8-47af-9a57-ed2a498b66bf",
              "value": false
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

If the validate API request is submitted successfully and no validate errors are found, then the following response is received from validate API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "9da391b5-a539-4cea-83a5-16f17a5ac8ac"
  },
  "response": {
    "entityModels": [
      {
        "id": "invokenewskuintroductionforsku_businessRule",
        "type": "businessRule",
        "data": {
          "attributes": {
            "definition": {
              "properties": {
                "messages": [
                  {
                    "messageType": "success",
                    "messageCode": "SYS001"
                  }
                ]
              }
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre> 

## Response with validation message

If the validate API request is submitted successfully and validate errors are found, then the following response is received from validate API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "c478c2b6-b8f9-4827-a449-d374b0c076e0"
  },
  "response": {
    "entityModels": [
      {
        "id": "SendEntityForGraphProcessing_businessRule",
        "type": "businessRule",
        "data": {
          "attributes": {
            "definition": {
              "values": [
                {
                  "properties": {
                    "messages": [
                      {
                        "messageType": "error",
                        "messageCode": "E0521",
                        "messageParams": [
                          "SendEntityForGraphProcessing",
                          "Manage"
                        ],
                        "message": "Invalid rule definition. Either the keyword 'SendEntityForGraphProcessing' is not allowed for 'Manage' service type or it has an open square parenthesis without an operand keyword."
                      }
                    ]
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.