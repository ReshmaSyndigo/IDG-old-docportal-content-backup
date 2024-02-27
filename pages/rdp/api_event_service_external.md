---
title: Event Services
sidebar: rdp_sidebar
permalink: api_event_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

{% include callout.html content="**Disclaimer**: Riversand recommends to use this service cautiously.
" type="primary" %}

Riversand Platform is designed to record the changes performed on the data of any object type such as entity in the form of **Events**. For example, saving an entity generates an event. It follows the [Event-Driven Architecture](https://en.wikipedia.org/wiki/Event-driven_architecture){:target="_blank"} consisting of "Event Emitters", "Event Consumers", and "Event Channels". The Event Consumers can subscribe to the Event Emitters through the Event Channels. The Event Emitters and Consumers can be either within Riversand Platform or external to Riversand Platform; the Channels are currently present insideRiversand Platform only. See [Data Platform Architecture](/{{site.data.rdp_links_version.APPU}}/app_rdp_logical_architecture.html){:target="_blank"}, for more information. 

An event in Riversand Platform is generated based on the change requests such as create, update, or delete data. The following lists the various changes that can emit an event in Riversand Platform:

* When entity level, attribute level, or relationship level changes occur during entity manage operations.
* When entities are qualified for export during entity export operations.
* When entities are imported into the application during entity import operations.
* When entities that are passing through a workflow are validated against the business conditions or validation model rules during entity governance operations. 

<br/>
The events generated capture the corresponding **change types** based on the modifications. Thus, it helps you to track the changes performed on the data. The **Event Services** in Riversand Platform is responsible for handling all the event data that is generated in Riversand Platform. 
<br/>

This section describes [how an event object is structured](api_event_object_structure.html) and [the various change types that an event records](api_event_change_types.html) in Riversand Platform. This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Get Events](api_events_get.html)| {{site.data.rdp_glossary.getevent}} |
| [Get Task Details](api_bulk_entity_get_task_details.html)| {{site.data.rdp_glossary.getevent}} |
| [Delete Events](api_events_delete.html)| {{site.data.rdp_glossary.deleteevent}} |
| [Delete Events using Query](api_event_delete_scenario7.html)| {{site.data.rdp_glossary.eventdeletebyquery}} |
| [Scroll Support for Event Services](api_event_scroll_support.html)| {{site.data.rdp_glossary.eventdeletebyquery}}, {{site.data.rdp_glossary.getevent}} |