---
title: Workflow Assignment Rule Model
sidebar: rdp_sidebar
permalink: api_workflow_assignment_rule_model.html
folder: rdp
type: HowTo
---

{% include snippets/api_preview.md %}

This object defines the basic structure of the workflow assignment rule model with its attributes. It contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [data](#data): Contains an array of [contexts](#contexts) and [attributes](#attributes), that are the details of a workflow assignment rule model.

<br>
{% if site.build == "internal" %}
See [Map Workflow Assignment Rule Model](api_create_data_model_scenario74.html) for more scenarios and examples.{% endif %} This topic describes the workflow assignment rule model object structure using a sample scenario.

## Scenario 

Consider you wish to create a workflow assignment rule model with "Business Rule" as assignmentType. The following example demonstrates the sample JSON format to create a workflow assignment rule model:

<pre><code>
{
  "entityModel": {
    "id": "NewSKUIntroduction_skuSubmission_sku_2_workflowAssignmentRule",
    "name": "NewSKUIntroduction_skuSubmission_sku_2",
    "type": "workflowAssignmentRule",
    "data": {
      "attributes": {
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
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture workflowassignmentrulemodel.png alt="Workflow Assignment Rule Model" %}

## entityModel

This object is the parent container that holds all the required information about the entity model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String | 
| name | Indicates the name of the workflow assignment rule model. | String |
| type | Indicates the type of this array. | String | 
| data | Indicates the section for all business data. | [data](#data) | 

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | NewSKUIntroduction_skuSubmission_sku_2_workflowAssignmentRule |
| name | NewSKUIntroduction_skuSubmission_sku_2 |
| type | workflowAssignmentRule |

## data

This object contains the contexts and attributes of the base model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates the attributes of the data model. This can be simple or nested attributes. | [attributes](#attributes) objects | 

## attributes  

This object contains details of an array of attributes. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| Property | Description | Type | 
|----------|-------------|------|
| workflowName | Indicates the name of the configured workflow. | List of [Value](#values) objects. |
| activityName | Indicates the workflow activity name. | List of [Value](#values) objects. | 
| dataObjectType | Indicates type of the entity which is in the workflow. | List of [Value](#values) objects. |
| sequence | Indicates the sequence of the workflow assignment rule model to be followed when there are multiple models for the same workflow, activity, entity type and context. Value of this attribute should be unique across all workflow assignment rule models. | List of [Value](#values) objects. | 
| assignmentType | Indicates the type of assignment to perform for the workflow step in the provided context. <br> • <b>Business Rule</b>: The given rule definition is evaluated and if the result is true, the workflow step is assigned to the user mentioned in the userID attribute. <br> • <b>Creator</b>: The workflow step is assigned to the user who created this entity. <br> • <b>Previous User On Re-entry</b>: If there is re-entry into the step, the workflow step is assigned to the user who previously acted on that entity. <br> • <b>Least Queue Size</b>: The workflow step is assigned to the user who has the least number of entities assigned for that step. <br> • <b>Assign to Invoker</b>: This option automatically assigns entity to the user who invoked the workflow. For Example: Consider a scenario where Mr. Smith created an entity and it is updated by Mr. John. The workflow invoke business rule is mapped at update event of this entity. Thus if assignmentType is set as "Assign to Invoker", then this entity will be assigned to Mr. John who invoked the workflow, not to the creator of the entity. Note that the invoker details cannot be retrieved using [Reevaluate](api_govern_reevaluate.html) API. After the [Reevaluate](api_govern_reevaluate.html) API is executed, the invoker information will not work as expected. | List of [Value](#values) objects. | 
| definition | Indicates the definition of the business rule to be used. The result should evaluate to true or false. | List of [Value](#values) objects. | 
| userId | Indicates the ID of the user to be assigned to the workflow step. | List of [Value](#values) objects. |

## values 

This object contains the values of the simple, nested, and relationship attributes of an entity. The following table lists the details of the values object:

| Property | Description | Type | 
|----------|-------------|------|
| source | Indicates the source of attribute value. | String |
| locale | Indicates the locale for the attribute value. | String | 
| value | Indicates the actual attribute value. | String, Number | 

Data for Sample [Scenario](#scenario): Set the following properties for **values** object:

| Property | Description | 
|----------|-------------|
| source | internal |
| locale | en-US |
| value | NewSKUIntroduction |