---
title: Change Types of an Event
sidebar: rdp_sidebar
permalink: api_event_change_types.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, an event is generated when data of any object type such as an entity is created, updated, or deleted. Every change of data is recorded into various change types. An event captures the change types based on the corresponding change requests. One of the major benefits of events is that tracks the changes on data objects and maintains a history. This aids you in troubleshooting the requests. The following table depicts the various change types an event records in Riversand Platform along with the entity action that triggered the corresponding event:

| **Change Type** | **Entity Action** |  **Description** | 
|----------|------------|---------------------------|
| [addContext](api_event_get_scenario1.html) | Create, Update | This change type is resulted when a new entity is created with the context or an existing entity is updated to add a new context. | 
| [addAttributeToContext](api_event_get_scenario3.html) | Update | This change type is resulted when a new contextual attribute is added to an existing entity. |
| [updateAttributeInContext](api_event_get_scenario4.html) | Update | This change type is resulted when an existing contextual attribute in an entity is updated. This can also include values from different value context or deletion of the attribute values. It is also termed as **Entity History**. | 
| [addRelationshipToContext](api_event_get_scenario6.html) | Update | This change type is resulted when a new relationship is added to an existing context in an entity. | 
| [deleteDataObject](api_event_get_scenario11.html) | Delete| This change type is resulted when an entity is deleted. | 