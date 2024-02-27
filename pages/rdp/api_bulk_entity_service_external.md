---
title: Bulk Entity Services
sidebar: rdp_sidebar
permalink: api_bulk_entity_service.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

In Riversand Platform, data can flow in various forms in exploding volume and velocity from different sources and often is heterogeneous in nature. Riversand Platform enables you to manage this diverse and **bulk data** by providing you with various REST APIs. However, using this service, you can handle the request for "only" one entity at a time. Consider that you have the requirement to create multiple entities or to update all matched entities in the given search criteria with the new data. To fulfill such requirements, Riversand Platform provides the "Bulk Entity Service API" with the URI as **{{site.data.rdp_glossary.bulkentityservices}}**.

{% if site.build == "internal" %}
{% include callout.html content="**Note**:<br/>
The Bulk Entity Services process the submitted bulk entities asynchronously. Each operation that is carried out in this service emits the [events](api_event_service.html). You can get the  status of these events by the [Task Details](api_bulk_entity_get_task_details.html).
" type="primary" %}
{% endif %}

This section describes how a [bulk entity object is structured](api_bulk_entity_object_strcuture.html) in Riversand Platform and how to use the above RESTful API in the Riversand Platform SDK to perform:

* [Process Bulk Entities](api_bulk_process_entity.html)
* [Workflow Assignments for Bulk Entities](api_bulk_change_assignments.html)
* [Workflow Transitions for Bulk Entities](api_bulk_transitions.html) 
* [Update Bulk Entities using Multiple Queries](api_bulk_entities_with_multi_queries.html)
* [Delete Bulk Entities](api_bulk_delete_entities.html)
* [Track the status of Bulk Entities using Client Attributes](api_bulk_entities_using_client_attr.html)