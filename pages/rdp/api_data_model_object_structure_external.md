---
title: Data Model Object Structure
sidebar: rdp_sidebar
permalink: api_data_model_object_structure.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

A Data Model in Riversand Platform is a JSON structure that defines a model to structure your data in Riversand Platform as per the business requirements. Certain models are automatically available in the out-of-the-box (OOTB) instance when you deploy Riversand Platform. The remaining models are offered to you with the basic model structure to structure your data once the initial set-up is ready. Broadly, these include model structure for the entities; specific validation and governance model for entities.

The following lists the models supported in Riversand Platform:

{% if site.build != "internal" %}
* [Lists](api_list_data_model.html): Defines the pre-defined lists in Riversand Platform.
  * [Classification](api_classification_list_data_model.html): Defines a list of enhancer attributes.
  * [Country](api_country_list_data_model.html): Defines a list of country contexts.
  * [Channel](api_channel_list_data_model.html): Defines a list of channel contexts.
  * [Colors](api_colors_list_data_model.html): Defines a list of colors.
  * [Locale](api_locale_list_data_model.html): Defines a list of locales.
* [Domains](api_domain_data_model.html): Defines the various domains.
  * [EntityType Model](api_entityType_data_model.html): Defines the entityTypes under a particular domain.
    * [Entity Manage Model](api_manage_model.html): Defines the basic data model structure of the entity; its attributes, relationships and relationship attributes. This also includes attribute data types.
    * [Entity Manage Model for Reference Data Domain](api_reference_manage_model.html): Defines the basic data model structure of the entity; its attributes, relationships and relationship attributes for reference data domain. This also includes attribute data types.
    * [Entity Validation Model](api_validation_model.html): Defines the structural model and validations that must to be validated. Based on this, entity and its data is evaluated for correctness and completeness, and finally the values or relationships are tagged as valid or invalid. Examples: Basic rules such as min/max length, precision, lookups, cardinality for values, relationships, and context links.
    * [Entity Display Model](api_display_model.html): Defines the display name and display type for the attributes and relationships of entities that is used by the user interface to display various aspects of the data.
    * [Entity Default Values Model](api_default_model.html): Defines the default values for the attributes.
  * [Entity Context Model](api_context_data_model.html): Defines the various contexts in Riversand Platform. This also includes Primary and Additional contexts.
    * [Primary Context](api_primary_context_data_model.html): Defines the primary context.
    * [Primary Context Instance - Country](api_country_context_data_model.html): Defines the primary context for country instance.
    * [Additional Context](api_additional_context_data_model.html): Defines the additional context.
  * [Attribute Model](api_attribute_data_model.html): Defines the attribute models for a particular domain.
  * [Relationship Model](api_relationship_data_model.html): Defines the relationshipType models for a particular domain.
* [Govern Model](api_govern_data_model.html): Defines all the govern details related to workflows, businessRule, businessCondition.
  * [Entity Govern Model for Entity Type](api_governance_data_model.html): Defines the govern model for an entity type.
  * [Governance Workflow Definition Mapping Model](api_workflow_mapping_model.html): Defines the mapping for a workflow of an entity type.
    * [Governance Workflow Definition Data Model](api_workflow_defn_data_model.html): Defines details of a workflow with few activities.
      * [Governance Business Rule Definition Data Model](api_business_rule_defn_data_model.html): Defines the business rule details for entities. This includes validation and computation rules. Validation rules are defined by the tenant that validate various aspects of entity data and tag these as valid or invalid. Computation rules are the rules defined by the tenant that compute entity's attribute values or any other aspect of data. 
      * [Governance Business Condition Data Model](api_business_condition_data_model.html): Defines the business condition details mapped to a business rule.
    * [Workflow Assignment Rule Model](api_workflow_assignment_rule_model.html): Defines the basic structure of the workflow assignment rule model with its attributes. You can have four types of workflow assignment rule models based on the assignmentType attribute. You must also specify the sequence of execution of these models which are unique across all models.
  * [Rule Context Mapping](api_rule_context_mapping_data_model.html): Defines the mapping of business rules/business conditions to a context.
* [Locales Model](api_locale_data_model.html): Defines the locale information for various domains.
* [Entity Variant Model](api_entity_variant_model.html): Defines the basic structure of the entity variant model with its attributes. An entity variant model is used to define the attributes of the child entities for a specific entity type.
* [Graph Process Model](api_graph_process_model.html): Defines a model to link nodes in a graph. It contains match configuration for the target entity type indicating the action that must be taken after matching the target entity. You can also specify the attributes, if any, that must be copied from source to target after linking the nodes.
{% endif %}

{% if site.build == "internal" %}
{% picture modelobjectstructure.png alt="Data Model Object Structure" %}

* [Lists](api_list_data_model.html): Defines the pre-defined lists in Riversand Platform.
  * [Classification](api_classification_list_data_model.html): Defines a list of enhancer attributes.
  * [Country](api_country_list_data_model.html): Defines a list of country contexts.
  * [Channel](api_channel_list_data_model.html): Defines a list of channel contexts.
  * [Colors](api_colors_list_data_model.html): Defines a list of colors.
  * [Locale](api_locale_list_data_model.html): Defines a list of locales.
* [Domains](api_domain_data_model.html): Defines the various domains.
  * [EntityType Model](api_entityType_data_model.html): Defines the entityTypes under a particular domain.
    * [Entity Manage Model](api_manage_model.html): Defines the basic data model structure of the entity; its attributes, relationships and relationship attributes. This also includes attribute data types.
    * [Entity Manage Model for Reference Data Domain](api_reference_manage_model.html): Defines the basic data model structure of the entity; its attributes, relationships and relationship attributes for reference data domain. This also includes attribute data types.
    * [Entity Validation Model](api_validation_model.html):  Defines the structural model and validations that must to be validated. Based on this, entity and its data is evaluated for correctness and completeness, and finally the values or relationships are tagged as valid or invalid. Examples: Basic rules such as min/max length, precision, lookups, cardinality for values, relationships, and context links.
    * [Entity Display Model](api_display_model.html): Defines the display name and display type for the attributes and relationships of entities that is used by the user interface to display various aspects of the data.
    * [Entity Default Values Model](api_default_model.html): Defines the default values for the attributes.
  * [Entity Context Model](api_context_data_model.html): Defines the various contexts in Riversand Platform. This also includes Primary and Additional contexts.
    * [Primary Context](api_primary_context_data_model.html): Defines the primary context.
    * [Primary Context Instance - Country](api_country_context_data_model.html): Defines the primary context for country instance.
    * [Additional Context](api_additional_context_data_model.html): Defines the additional context.
  * [Attribute Model](api_attribute_data_model.html): Defines the attribute models for a particular domain.
  * [Relationship Model](api_relationship_data_model.html): Defines the relationshipType models for a particular domain.
* [Entity Authorization Model](api_entity_authorization_model.html): Defines various permissions for a particular role for a particular domain.
  * [System Roles Model](api_system_role_data_model.html): Defines the various roles inRiversand Platform.
  * [System Users Model](api_system_user_data_model.html): Defines the various users in Riversand Platform.
  * [Authorization Model](api_security_model.html): Defines permissions for a domain, reference data, model, and entities for an entity type and role. You can define permissions at the Entity Level, Context Level, Attribute Level, Relationship Level, Relationship Attribute Level, and Nested Attribute Level. This model also defines Owner Permission attribute. Ownership is limited to attributes only and declares which attribute in the entity data must be substituted for ownership queries. This is applicable only at entity level and not at context level. Ownership is applied only for [Entity Get](api_app_get_entity.html) queries.
* [Govern Model](api_govern_data_model.html): Defines all the govern details related to workflows, businessRule, businessCondition.
  * [Entity Govern Model for Entity Type](api_governance_data_model.html): Defines the govern model for an entity type.
  * [Governance Workflow Definition Mapping Model](api_workflow_mapping_model.html): Defines the mapping for a workflow of an entity type.
    * [Governance Workflow Definition Data Model](api_workflow_defn_data_model.html): Defines details of a workflow with few activities.
      * [Governance Business Rule Definition Data Model](api_business_rule_defn_data_model.html): Defines the business rule details for entities. This includes validation and computation rules. Validation rules are defined by the tenant that validate various aspects of entity data and tag these as valid or invalid. Computation rules are the rules defined by the tenant that compute entity's attribute values or any other aspect of data. 
      * [Governance Business Condition Data Model](api_business_condition_data_model.html): Defines the business condition details mapped to a business rule.
    * [Workflow Assignment Rule Model](api_workflow_assignment_rule_model.html): Defines the basic structure of the workflow assignment rule model with its attributes. You can have four types of workflow assignment rule models based on the assignmentType attribute. You must also specify the sequence of execution of these models which are unique across all models.
  * [Rule Context Mapping](api_rule_context_mapping_data_model.html): Defines the mapping of business rules/business conditions to a context.
* [Locales Model](api_locale_data_model.html): Defines the locale information for various domains.
* [Entity Variant Model](api_entity_variant_model.html): Defines the basic structure of the entity variant model with its attributes. An entity variant model is used to define the attributes of the child entities for a specific entity type.
* [Graph Process Model](api_graph_process_model.html): Defines a model to link nodes in a graph. It contains match configuration for the target entity type indicating the action that must be taken after matching the target entity. You can also specify the attributes, if any, that must be copied from source to target after linking the nodes.
{% endif %}

<br>
The structure below indicates the basic object structure in Riversand Platform:

{% include callout.html content="**Note**:<br/>
* Attribute name must not be **id**, **name**, **type** or **action**.
* External name of nested child attribute must not contain a dot ('.'). 
" type="primary" %}

<pre><code>
{
  "entityModel": {
    "id": "",
    "name": "",
    "type": "",
    "domain": "",
    "properties": {},
    "data": {
      "attributes": {
        "attribute 1": {
          "properties": {}
        },
        "attribute 2": {
          "properties": {}
        }
      },
      "relationships": {
        "relationship 1": [
          {
            "properties": {},
            "attributes": {
              "relationship attribute 1": {
                "properties": {}
              }
            }
          }
        ]
      },
      "contexts": [
        {
          "context 1": {
            "primary context 1": "_ALL",
            "primary context 2": "_ALL"
          },
          "attributes": {},
          "relationships": {}
        },
        {
          "context 2": {
            "primary context 1": "_ALL",
            "primary context 2": "_ALL"
          },
          "attributes": {},
          "relationships": {}
        }
      ]
    }
  }
}
</code></pre>