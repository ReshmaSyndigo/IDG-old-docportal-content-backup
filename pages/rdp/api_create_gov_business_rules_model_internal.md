---
title: Create and Map Business Rules using Governance Business Rule Model
sidebar: rdp_sidebar
permalink: api_create_gov_business_rules_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to create and map business rules using Governance Business Rule Model:

* [Create Business Rule to Invoke Workflow](api_create_data_model_scenario71.html)
* [Create Business Rule to Update Attribute Value](api_create_data_model_scenario21.html)
* [Create Business Rule to Validate Basic Attributes](api_create_data_model_scenario22.html)
* [Create Business Condition with Validation Rules](api_create_data_model_scenario72.html)
* [Map Business Rules or Business Conditions to a Context](api_create_data_model_scenario73.html)

## Request

POST {{site.data.rdp_glossary.createdatamodel}}

**Parameters**: The following table lists the parameters of the JSON request to create a data model:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientId | Yes | Indicates the unique identifier of the client. Id is alpha-numeric with a maximum length of 128 characters. This is required for request manage tracking. |
| Body | clientState | Yes | Indicates a JSON with the client state. This is required for request manage tracking. |
| Body | entityModel | Yes | Indicates the details of the entity model to be created. See [Data Model Object Structure](api_business_rule_defn_data_model.html), for more information. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response | status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample JSON request to create a business rule "skuImageAddedValidationRule_businessRule" to validate if images have been added: 

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
    "id": "skuImageAddedValidationRule_businessRule",
    "type": "businessRule",
    "domain": "generic",
    "data": {
      "attributes": {
        "name": {
          "values": [
            {
              "value": "Validate Images have been added",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "description": {
          "values": [
            {
              "value": "Validate Images have been added",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "ruleType": {
          "values": [
            {
              "value": "validation",
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
              "value": "IIF[HaveRelationships[\"hasimages\"],AddAttributeInformation[\"_DEFAULT\",\"_DEFAULT\",\"SYS001\", \"\", \"unknown\"],AddAttributeError[\"_DEFAULT\",\"_DEFAULT\",\"Req001\", \"\", \"unknown\"]]",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "enabled": {
          "values": [
            {
              "value": "true",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "isDraft": {
          "values": [
            {
              "value": "false",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "isDeleted": {
          "values": [
            {
              "value": "false",
              "source": "internal",
              "locale": "en-US"
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
        "requestId": "fa601bbd-107a-4bf4-b01d-1fcf8c39dd7f"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "message": "Entity has been submitted for create with entity Id : skuImageAddedValidationRule_businessRule. Please check back after 1 min"
        },
        "totalRecords": 0
    }
}
</code></pre> 

Verify the created data model:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* If you know the details of your elastic server and the indices, then you can verify the created data model using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityModelName>>&pretty.
* After creating the business rule and mapping to a context:
  * [Create an entity](api_app_create_entity.html) in a context so the business rule is triggered. 
  * [Get govern data](api_get_govern_data.html) for the entity. You can view the business rules or conditions instance data for the entity with the details of the rules and status.

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.