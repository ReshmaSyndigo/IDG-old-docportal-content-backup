---
title: Entity App Services
sidebar: rdp_sidebar
permalink: api_app_service.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform is designed to handle wide variety of data from master data to unstructured data. You can visualize the entire data as a huge graph structure with nodes or vertices and edges representing the link between different nodes. The following example depicts a Company Employee Graph that is driven by "reports to" relationships with "Employees" as its entities.

{% picture df-company-graph.png alt="Company Employee Graph" %}

In general terms, an entity can be any corporate data asset such as products, customers, vendors, and employees. Entities are classified and conceptualized based on your business model. Example: In Customer Domain, you can classify the entities based on demographics, geographical spread or other similar concepts whereas in Product Domain, entities can be classified based on the hierarchical structure of the product itself. 

Entities consists of attributes to define them. **Simple attributes** describe the atomic attributes of an entity such as Product ID and Product Description. **Nested attributes** are collection of simple attributes such as address. **Relationship attributes** describe the relational properties specific to the relationship type for an entity. Hence, an **Entity Object** forms the backbone of this graph representation. 

All the data in Riversand Platform are modeled as either an entity, attribute, or relationship, which can be further defined with respect to a context. See [Understand Entity in a Context](api_entity_context.html), for more information on different types of context an entity can be linked to.

This section covers the following topics to explain the Data type summary and Relationship type summary:

* [Data Type Summary](api_data_type_summary.html)
* [Relationship Type Summary](api_rel_type_summary.html)

<br>
This section also describes [how an entity object is structured](api_entity_object_structure.html) in Riversand Platform. This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

{% if site.build == "internal" %}
| How do I | Basic URI |
|----------|-------------|
| [Create an Entity](api_app_create_entity.html) | {{site.data.rdp_glossary.appcreateentity}} |
| [Update an Entity](api_app_update_entity.html) | {{site.data.rdp_glossary.appupdateentity}} |
| [Delete an Entity](api_app_delete_entity.html) | {{site.data.rdp_glossary.appdeleteentity}} |
| [Process an Entity](api_app_process_entity.html) | {{site.data.rdp_glossary.appprocessentity}} |
| [Get Entities through Combined Get](api_app_get_combinedget.html)| {{site.data.rdp_glossary.appcombinedget}} |
| [Get Entities](api_app_get_entity.html)| {{site.data.rdp_glossary.appgetentity}} |
| [Generate Entity Variants](api_app_generate_entity_variants.html) | {{site.data.rdp_glossary.generatevariants}} |
| [Data Coalesce](api_data_coalesce.html) | {{site.data.rdp_glossary.getdatacoalesce}} |
| [Create Snapshots](api_app_create_snapshot.html) | {{site.data.rdp_glossary.appcreatesnapshot}} |
| [Get Snapshots](api_app_get_snapshot.html) | {{site.data.rdp_glossary.appgetsnapshot}} |
| [Restore Snapshots](api_app_restore_snapshot.html) | {{site.data.rdp_glossary.apprestoresnapshot}} |
| [Authorize Relationships based on Ownership / Ownership Edit Data](api_auth_relationship.html) | {{site.data.rdp_glossary.appcreateentity}} |
| | {{site.data.rdp_glossary.appgetentity}} |  
{% endif %}

{% if site.build == "external" %}
| How do I | Basic URI |
|----------|-------------|
| [Delete an Entity](api_app_delete_entity.html) | {{site.data.rdp_glossary.appdeleteentity}} |
| [Process an Entity](api_app_process_entity.html) | {{site.data.rdp_glossary.appprocessentity}} |
| [Get Entities](api_app_get_entity.html)| {{site.data.rdp_glossary.appgetentity}} |
| [Data Coalesce](api_data_coalesce.html) | {{site.data.rdp_glossary.getdatacoalesce}} |
| [Get Snapshots](api_app_get_snapshot.html) | {{site.data.rdp_glossary.appgetsnapshot}} |
| [Authorize Relationships based on Ownership / Ownership Edit Data](api_auth_relationship.html) | {{site.data.rdp_glossary.appcreateentity}} |
| | {{site.data.rdp_glossary.appgetentity}} | 
{% endif %}