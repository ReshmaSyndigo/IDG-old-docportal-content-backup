---
title: Request Tracking Services
sidebar: rdp_sidebar
permalink: api_request_tracking_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform allows you to track the requests sent to the APIs through Request Tracking Services. A request in Riversand Platform invokes the corresponding RESTful API during which it passes through different service layers. Using Request Tracking Service, you can get to know the current status details of the request in each of these service layers. 

You can leverage this service to further troubleshoot the requests, if there are any errors. Consider that you have created the request to create an entity. If this request is failed, using the Request Tracking Service, you can understand at which service layer an error has occurred and accordingly take the necessary action.

{% if site.build == "internal" %}
This section describes how an [Request Tracking Object is structured](api_request_tracking_object_structure.html) in RDP and also covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Create Request Tracking Object](api_create_request_tracking_object_scenario1.html) | {{site.data.rdp_glossary.createrequesttrackingobject}} |
| [Update Request Tracking Object](api_update_request_tracking_object_scenario1.html) | {{site.data.rdp_glossary.updaterequesttrackingobject}} |
| [Track Requests using Request Tracking Object](api_get_request_tracking_object.html) | {{site.data.rdp_glossary.getrequesttrackingobject}} |
| [Delete Request Tracking Object](api_delete_request_tracking_object_scenario1.html) | {{site.data.rdp_glossary.deleterequesttrackingobject}} |
| [Delete Request Tracking Objects using Query](api_deletebyquery_request_tracking_object_scenario1.html) | {{site.data.rdp_glossary.deletebyquery}} |
| [Track Graph Operations using Request Object Service](api_request_graph_operations.html) | {{site.data.rdp_glossary.getrequesttrackingobject}} | 
{% endif %}

{% if site.build == "external" %}

This section covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Track Requests using Request Tracking Object](api_get_request_tracking_object.html) | {{site.data.rdp_glossary.getrequesttrackingobject}} |
{% endif %}