---
title: Entity App Model Services
sidebar: rdp_sidebar
permalink: api_app_manage_data_model.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

All the data in Riversand Platform are modeled as either an entity, attribute, or relationship. These data can be further defined with respect to a context. A relationship allows you to specify the link between entities with a specific relationship type and name. The following diagram depicts the relationship between Entity, Attribute, and Relationship with respect to a Context:

{% picture E-A-R-relationship2.png alt="Relationship between Entity, Attribute and Relationship in a Context" %}

Based on your domain and requirement, you can define different relationship types between entities in the data model.

| Relationship Type | Description | Example |
| ---------- | ----------| ---------- |
| Aggregation | In this type of relationship, all objects have their own existence but there is an ownership like parent and child. Child object cannot belong to another parent object at the same time. |
| Association | In this type of relationship, all objects have their own existence and there is no owner. | You can define "has-a" relationship between kits and bundles of type "association", which indicates that a kit is associated with the bundle. | 
| Composition | In this type of relationship, the Parent and Child objects relationship exists together. If parent object gets deleted, then all of its child objects will also be deleted. | Example 1: You can define an "ischildof" relationship between SKU and Product of type "composition", which indicates that a Product is composed of one or more individual SKUs. <br>Example 2: You can define a "hasimages" relationship between a SKU and an image of type "composition", which indicates that a SKU is composed of one or more images. | 

The Riversand Data Framework (RDF) provides a way for you to store, retrieve, manage your data. Riversand Platform need these data to be structured before they are entered into the system. It allows you to structure your data through the concept of **Data Modeling** that is defined per **entity type**. RDF validates the entered data using these defined **data models**. Therefore, you need to define a data model in the platform to describe its structure before even you start creating your data. 

{% include callout.html content="**Notes**: You can visualize the entire data in Riversand Platform as a huge graph structure with nodes or vertices and edges representing the link between different nodes. A **Node** represents an entity such as SKU or an asset (document, image, video, or audio). Entity data is also governed by a **Governance Model** that contains constructs, mappings, and rules to govern entity data. You can define data model for each of these entity types in Riversand Platform.
" type="primary" %}

This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

{% if site.build == "internal" %}
| How do I | Basic URI |
|----------|-------------|
| [Get Data Model](api_get_data_model.html)| {{site.data.rdp_glossary.getdatamodel}} |
| [Model Coalesce](api_model_coalesce.html) | {{site.data.rdp_glossary.getmodelcoalesce}} |
| [Get Composite](api_get_composite.html) | {{site.data.rdp_glossary.getcomposite}} |

See [Data Model Object Structure](api_data_model_object_structure.html), for more information. 
{% endif %}

{% if site.build == "external" %}
| How do I | Basic URI |
|----------|-------------|
| [Get Data Model](api_get_data_model.html)| {{site.data.rdp_glossary.getdatamodel}} |
{% endif %}