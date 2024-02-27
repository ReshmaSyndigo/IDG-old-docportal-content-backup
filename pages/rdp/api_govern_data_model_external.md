---
title: Govern Model
sidebar: rdp_sidebar
permalink: api_govern_data_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

An entity undergoes several changes right from its inception into Riversand Platform until it is exported out. These changes can be as simple as entity attribute modifications to complex variant or extension changes. Due to such volatile nature of data, it is necessary to keep track of entity states at each stage of entity modification.

This section covers the various govern models in Riversand Platform.

* [Entity Govern Model for Entity Type](api_governance_data_model.html): Defines the govern model for an entity type.
* [Governance Workflow Definition Mapping Model](api_workflow_mapping_model.html): Defines the mapping for a workflow of an entity type.
    * [Governance Workflow Definition Data Model](api_workflow_defn_data_model.html): Defines details of a workflow with few activities.
        * [Governance Business Rule Definition Data Model](api_business_rule_defn_data_model.html): Defines the business rule details for entities. This includes validation and computation rules. Validation rules are defined by the tenant that validate various aspects of entity data and tag these as valid or invalid. Computation rules are the rules defined by the tenant that compute entity's attribute values or any other aspect of data.
        * [Governance Business Condition Data Model](api_business_condition_data_model.html): Defines the business condition details mapped to a business rule.
    * [Workflow Assignment Rule Model](api_workflow_assignment_rule_model.html): Defines the basic structure of the workflow assignment rule model with its attributes. You can have four types of workflow assignment rule models based on the assignmentType attribute. You must also specify the sequence of execution of these models which are unique across all models.
    * [Rule Context Mapping](api_rule_context_mapping_data_model.html): Defines the mapping of business rules/business conditions to a context.

{% picture governworkflow2.png alt="Governance Workflow" %}

