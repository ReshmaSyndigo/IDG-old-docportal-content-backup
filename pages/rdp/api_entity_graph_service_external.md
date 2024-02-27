---
title: Entity Graph Services
sidebar: rdp_sidebar
permalink: api_entity_graph_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform is designed to handle wide variety of data from master data to unstructured data. You can visualize the entire data as a huge graph structure with nodes or vertices and edges representing the link between different nodes. As all the data in Riversand Platform are modeled either as entity, attribute, or relationship, a **Node** represents an entity such as SKU or an asset. Riversand Platform provides the ability to link or relate a source entity with a target entity using a specific relationship type via **Entity Graph Service**. 

{% if site.build == "internal" %}
In order, to link or relate nodes in a graph, you must:
* Identify the related node (Match): Define a match configuration for the target entity type in the [Graph Process Model](api_graph_process_model.html). See [Graph Process Model](api_graph_process_model.html) for more information on how to specify a match configuration.
{% endif %}

{% if site.build == "external" %}
In order, to link or relate nodes in a graph, you must:
* Identify the related node (Match): Define a match configuration for the target entity type in the Graph Process Model.
{% endif %}

* Decide the processing based on action (Review): The matching process can result in one of the following actions:

| Result | Possible Action |
|----------|-------------|
| No Target Found | Do nothing or Create target entity and link to the source entity, merge the required attributes. |
| Single Target Found | Do nothing or Link existing target entity to the source entity, merge the required attributes. |
| Multiple Targets Found | Do nothing or Link source entity to all the targets and merge the required attributes  |

* Perform the decided action (Rollup/RollDown): Define a model that indicates how the action must be performed. Example: Consider that on finding a match between source and target entity, you wish to copy certain attributes from source entity to the target entity. You can define the required model and specify the those attributes in the model. {% if site.build == "internal" %} See [Create Graph Process Models to Link Nodes](api_create_graph_process_model.html) for a few commonly used scenarios.{% endif %}

Graph operations are generally expensive operations, hence it is recommended to control the usage of this service only after it is ascertained that the link is absolutely required. Typically, this can be achieved using [Workflow Management](/{{site.data.rdp_links_version.APP}}/wf_manage_workflows.html). 

**Example**: Consider that you wish to rollup SKU to Product when a new SKU is created. You can setup a step in the 'New Product Introduction' workflow to execute rollup as a system activity only after the created SKU is reviewed and approved. Consider that based on the requirement you wish to define the following rollup details:

| Result | Possible Action |
|----------|-------------|
| No Target Found | Create target entity and link to the source entity, merge the required attributes. |
| Single Target Found | Link existing target entity to the source entity, merge the required attributes. |
| Multiple Targets Found | Error out.|

This section covers how to use the Entity Graph Service API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Create Link between Related Nodes](api_create_link.html) | {{site.data.rdp_glossary.creategraphlink}} |