---
title: Governance Workflow Definition Mapping Model
sidebar: rdp_sidebar
permalink: api_workflow_mapping_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the mapping for the workflow defined in [Governance Workflow Definition Data Model](api_workflow_defn_data_model.html). It contains the following sub-objects:
* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [data](#data): Contains an array of [contexts](#contexts) and [relationships](#relationships) that contains the mapping details for the business rules.

<br>
{% if site.build == "internal" %}
See [Mapping Workflow to a Context](api_create_data_model_scenario70.html) for more scenarios and examples.{% endif %} This topic describes the Governance Workflow Definition Mapping Model object structure using a sample scenario.

## Scenario 

The following example demonstrates the sample JSON format to create mapping details for "NewSKUIntroduction" workflow created in [Governance Workflow Definition Data Model](api_workflow_defn_data_model.html). Here the workflows NewSKUIntroduction and UpdateSKU are mapped to "sku" entity type.

<pre><code>
{
  "entityModel": {
    "id": "sku_workflowDefinitionMapping",
    "name": "sku",
    "type": "workflowDefinitionMapping",
    "domain": "generic",
    "data": {
      "relationships": {
        "hasWorkflowsDefined": [
          {
            "id": "rel106",
            "direction": "both",
            "relationshipType": "association",
            "relTo": {
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
</code></pre>

The following diagram depicts the structure of the above Data Model:

{% picture governanceworkflowdefinitionmappingmodel.png alt="Governance Workflow Definition Mapping Model" %}

## entityModel

This object is the parent container that holds all the required information about the entity model. You can identify a model by using id, name, version, and type. The following table lists the details of the entity model object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String |
| name | Indicates the name of the model. | String | 
| type | Indicates the model type of the entity model. | String |
| domain | Indicates the root domain to which domain of this attribute model belongs to. | String | 
| data | Indicates the section for all business data. | [data](#data) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | sku_workflowDefinitionMapping |
| name | sku |
| type | workflowDefinitionMapping |
| domain | generic |

## data

This object contains the relationships and contexts of the model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| relationships | Indicates the list of relationships. | [relationships](#relationships) |
| contexts | Indicates the list of contexts. | [contexts](#contexts) |

## relationships

This object contains an array of relationships. The following table lists the details of the relationships object:

| Property | Description | Type | 
|----------|-------------|------|
| <<RelName>> | Indicates the relationship type name. | [relationship](#relationship) |

## contexts 

This object contains the context information for which the configuration is applicable. The following table lists the details of the contexts object:

| Property | Description | Type | 
|----------|-------------|------|
| context | Indicates the context to which object is linked to. | [context](#context) |
| attributes | Indicates a list of contextual attributes. | [attributes](#attributes) |

## relationship
 
This object contains the relationship model details such as id, relationship type. Relationships can be simple or nested. The following table lists the details of the relationship object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the relationship. |  String |
| direction | Indicates the direction of the relationship. |  String. Possible values are both, up and down. | 
| relationshipType | Indicates the type of relationship. | String. Possible values are association and composition. | 
| relTo | Indicates the details about the related domain in the relationship. | [relto](#relto) |

Data for Sample [Scenario](#scenario): Set the following properties for **relationship** object:

| Property | Description | 
|----------|-------------|
| id | rel106 |
| direction | both |
| relationshipType | association |

## context

This object indicates the primary contexts used. The following table lists the details of the context object:

| Property | Description | Type | 
|----------|-------------|------|
| <<primarycontext>> | Indicates the name of primary context to which the object is linked to. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **context** object:

| Property | Description | 
|----------|-------------|
| country | _ALL |
| channel | _ALL |


## relTo

This object contains the details about the related domain object. The following table lists the details of the relTo object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of related object. | String | 
| type | Indicates the type of the related object. | String | 

Data for Sample [Scenario](#scenario): Set the following properties for **relTo** object:

| Property | Description | 
|----------|-------------|
| id | NewSKUIntroduction_workflowDefinition |
| type | workflowDefinition |

This section covers the following topics to explain the object structure of the following models:

* [Governance Workflow Definition Data Model](api_workflow_defn_data_model.html)
* [Workflow Assignment Rule Model](api_workflow_assignment_rule_model.html)