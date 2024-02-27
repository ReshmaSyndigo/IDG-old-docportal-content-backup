---
title: Understand Entity in a Context
sidebar: rdp_sidebar
permalink: api_entity_context.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

A **Context** allows you to have different data models and data values based on the various business requirements. For example, a product can have different attributes and values for different geographies and channels. You can manage entities in different contexts or perspectives such as Country, Channel, and Classification based on your requirement using **Entity App Service**.

## Types of Context

An entity can exists in multiple contexts and different combination of context based on the requirement. There are two types of context - **Primary Context** and **Additional Context**.

* **Primary Context**: Primary context has an ability to give more attributes to an entity and allows maintaining different values for same attributes in different context. Example for primary context are Country, Channel, Season, and so on.

* **Additional Context**: Additional context also has an ability to give more attributes to an entity but does not allow maintaining different values for same attributes in different context.
Examples for additional context are Classification, Item Type, and so on.

## Behavior of an Entity in Context

By default, an entity's data exists without any context (also known as Self context). 

* When the entity exists in a context, data in that context for the entity is available. 
* When an entity exists in a country context, it can have data (attributes & relationships) in that country's context. 
* An entity can exist in combination of contexts. For example, Country, and Classification. 

The following points list the behavior of an entity in Context:

| Behavior | | Example |
|----------| |---------|
| An entity can have more than one additional context for any primary context.| | Entity Polo Men's Shirt can have **Apparels>>Mens>>Shirt** and **Offers>>Mens Apparel>>Valentine Shirts** classification in **Germany** context. |
| An entity can have two classifications linked at self level. | | Entity Polo Men's Shirt can have **Apparels>>Mens>>Shirt** and **Offers>>Mens Apparel>>Valentine Shirts** classification in self context. |
| An entity that has two classifications linked at self level can also have one more classification linked in primary context. | | Entity Polo Men's Shirt can have **Apparels>>Mens>>Shirt** and **Offers>>Mens Apparel>>Valentine Shirts** classification in **Self** context and can also have **Merchandising>>Apparel>>Mens>>Mens Shirts** classification in **Germany** context.|
| If more than one classifications give the same attribute to the entity and if for the same attribute model property there are different values in the two models, then the first classification's attribute properties will be considered. | | Entity Polo Men's Shirt has classification such as **Merchandising>>Apparel>>Mens>>Mens Shirts** and another classification as **Offers>>Mens Apparel>>Valentine Shirts**, and if both classifications have **Sleeve Length** attribute mapped with one as **RangeTo** value as **30** and other attribute model with **RangeTo** value as **10** then while validating the application picks **RangeTo = 30**, as this classification was added first. |
| Even if more than one classifications are given to the same attribute, there will always be one attribute value that will be stored for that attribute and for that entity in a primary context. | | Entity Polo Men's Shirt can have only one value of **Sleeve Length** in **Self**, there can be another value at **Country** context. |
| The attribute values must be stored at the primary context only. Even for the attributes which are coming because of additional contexts that is classification, values must be saved in the primary context alone. | | Entity Polo Men's Shirt that has value for **Sleeve Length** attribute in **Country** is stored even if other attribute are coming from additional context. |

## Behavior of an Attribute in Context

The following table shows how attributes must behave in different context: 

| Model    | | | | | | | | Permissions in Entity Manage |
|----------|-|-|-|-|-|-| |------------------------------|
| Attribute | Self | CLS | CO | CLCO | CH | CLCH | | Attribute | Self | CO | CH |
|-----------|------|--------|----|------|----|------| |-----------|------|----|----|
| A1 | Y | | | | | | | A1 | W | R | R |
| A2 | | Y | | | | | | A2 | W | W | W |
| A3 | | | Y | | | | | A3 |  | W | R |
| A4 | Y | | Y | | | | | A4 | W | W | R |
| A5 | | | | | Y | | | A5 |  | W | W |
| A6 | | Y | | Y | | | | A6 | W | W | W |
| A7 | | | | | | Y | | A7 | | | W |
| A8 | | | Y | | Y | | | A8 | | W | W |
| A9 | Y | | Y | | Y | | | A9 | W | W | W |
| A10 | | Y | | | | Y | | A10 | | | W |
| A11 | | | | Y | | Y | | A11 | | W | W |
| A12 | | Y | | Y | | Y | | A12 | W | W | W |

Terms used in table:

* CLS - Self Level Classification
* CO - Country
* CLCO - Country Level Classification
* CH - Channel
* CHCL - Channel Level Classification
* R - Readable
* W - Writable (Readable as well) 

The following points list the attribute mapping in context:

| Behavior | | Example |
|----------| |---------|
| When attribute mappings are requested for a context then all attributes of parent contexts should be returned as well. | | When requesting for mapped attributes of country: Germany, all attributes mapped at Germany country must be displayed as well as attribute mapped at self level.|
| | | When requesting for mapped attributes of Germany Web channel, all attributes mapped to  Germany Web channel, Germany country, and self level must be displayed. Assumption is that, the channel entity Germany Web has a relationship to the country entity Germany. |
| The attributes from parent contexts must be readonly. Only those attributes which are the current exact context are writable. | | |

## Data Inheritance

Data gets inherited from parent primary contexts to the current. Data also can get inherited from context entity. For example, apparel classification entity, germany country entity, and so on.

## Additional Context

An entity is added to classification in a way that you can easily access them. The following lists the behavior of Classification (additional context):

* Classification acts as an attribute value (Enhancer Attribute).
* Classification gets inherited to the child context. For example, if Polo Men's Shirt is in **Self** context and has **Merchandising>>Apparel>>Mens>>Mens Shirts** classification, then in **Country** context, the classification is **Merchandising>>Apparel>>Mens>>Mens Shirts** only. 
* A Country can have another classification. For example, Polo Men's Shirt can also have **DE MERCH>>Mens Apparel>>Mens Shirts**. 
* A Channel can also have its own classification apart from the self context level.
* A classification attached at a higher level cannot be removed at a lower context level.
* When a classification comes from parent context to child, the **Source** information displays the parent context.

## Value Context

Every attribute can have values in different value contexts within the same entity context. The following contexts are available: Source, Locale, and UOM.

## Scenario

Consider that you have the following context setup in the application based on your business requirement:

* **Country**: A list of countries in which the entity or product is sold.

* **Channel**: Different channels such as web, mobile, or print in the corressponding country through which the product is sold.

* **Classification**: A list of classifications in which an entity can be accessed easily.

{% if site.build != "ascend" %}
See [Prepare Base Data Model - Thing](/{{site.data.rdp_links_version.APP}}/dm_prep.html){:target="_blank"}, for more information on how to create models for primary and additional contexts.
{% endif %}

{% if site.build == "ascend" %}
See [Thing Domain Data Model]({{ site.main_url }}/data_admin_overview.html){:target="_blank"}, for more information on how to create models for primary and additional contexts.
{% endif %}