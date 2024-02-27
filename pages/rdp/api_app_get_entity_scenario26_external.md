---
title: Get Entities using Originating Source Information
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario26.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities based on originating source information, using a scenario.

Entities have originating source information for its attributes, relationships and contexts. This describes the origin of the data based on when they are populated. The data can be populated by user, business rules, default value model, coalesce or graph. This information is stored as follows:

| Property | Description | 
|----------|-------------|
| os | Indicates the originating source | 
| osid | Indicates the originating source id |
| ostype | Indicates the originating source entity/model type |
| osctxpath | Indicates the originating source context path |

### Example Data

**Business Rule**

| Property | Value | 
|----------|-------------|
| os | businessRule | 
| osid | business rule id |
| ostype | businessRule |

**Default Value Model**

| Parameter | Value | 
|----------|-------------|
| os | defaults | 
| osid | entity type of the entity_entityDefaultValuesModel |
| ostype | entityDefaultValuesModel |

**Graph**

| Parameter | Value | 
|----------|-------------|
| os | graph | 
| osid | entity id from where the data is copied |
| ostype | entity type name from where the data is copied |

**Context Coalesce**

| Parameter | Value | 
|----------|-------------|
| os | contextCoalesce | 
| osid | entity id from which the data is coalesced |
| ostype | entity type name from which the data is coalesced |
| osctxpath | Context from which the data is coalesced |

**Instance Coalesce**

| Parameter | Value | 
|----------|-------------|
| os | instanceCoalesce | 
| osid | entity id from which the data is coalesced |
| ostype | entity type name from which the data is coalesced |
| osctxpath | Context from which the data is coalesced |

If it is a user provided value, there is no originating source information. In case of roll up/roll down services, originating source information corresponds to 'graph'. In case of manually uploaded data, only 'os' graph is added. 'osid' and 'ostype' are not saved.

This section covers the following scenarios to explain the usage of RESTful APIs in Riversand Platform SDK to get originating source information:

* [Get Originating Source Information of Entity](api_app_get_entity_scenario35.html)
* [Get Entities using Originating Source Information - Attribute Criterion "Specific" Attribute](api_app_get_entity_scenario34.html)


