---
title: Scheduler Services
sidebar: rdp_sidebar
permalink: api_sch_service.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform provides you the ability to schedule the execution of REST based tasks at a planned time through Scheduler Services. The scheduler in Riversand Platform executes the tasks at  fixed regular intervals. Consider that you wish to proclaim the disk space regularly by clearing up the event data. You can use Bulk Service REST API to delete the events. You can perform this task at regular intervals automatically by using the scheduler services that in turn executes Bulk Service REST API to delete the events.

You must configure the scheduler service to automatically schedule the planned tasks that you wish to schedule. The scheduler service is configured by the **schedule** object that contains configuration for each schedule. The schedule object maintains the state of each schedule through the **schedule Info** object.

This section describes how the [schedule](api_sch_object_structure.html) and  [scheduleInfo](api_sch_info_object_structure.html) objects are structured in Riversand Platform. This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Create a schedule object using Scheduler Service](api_sch_create.html) | {{site.data.rdp_glossary.schcreate}} |
| [Update a schedule object using Scheduler Service](api_sch_update.html) | {{site.data.rdp_glossary.schupdate}} |
| [Get a schedule object using Scheduler Services](api_sch_get.html)| {{site.data.rdp_glossary.schget}} |
| [Delete a schedule object using Scheduler Service](api_sch_delete.html) | {{site.data.rdp_glossary.schdelete}} |
| [Create/Update Scheduled Jobs](api_create_update_scheduled_jobs.html) | {TenantURL or ID}/api/proxyservice/call |
| [Enable/Disable Scheduled Jobs](api_enable_disable_list_scheduled_jobs.html) | {TenantURL or ID}/api/proxyservice/call |
| [List Scheduled Jobs](api_list_scheduled_jobs.html) | {TenantURL or ID}/api/proxyservice/call |