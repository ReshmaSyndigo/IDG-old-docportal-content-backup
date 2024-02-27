---
title: Get Entity History
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario28.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Entity history shows all the changes that the entity has undergone since its creation. 

* Entity history shows all change events that occur on an entity. 
* The change events are captured for simple, nested, collection attributes, relationships, relationship attributes and contexts. 
* Any update contains the current value and previous value. In case of collection and nested attributes, it contains the complete set of current values and previous values.
* All filter criteria supported by [entity get](api_app_get_entity.html) are supported by getentityhistory.
* The authorization for getEntityHistory is same as entity get. Attribute, relationship, context, entityType and domain authorization are supported. All common event attributes (entityType, entityAction, eventType, eventSubType, etc) are readable without configuring explicitly in any authorization model. If an entity attribute has read permission, then attribute representing its previous value (previous-attributeName) also inherits the read permission.

The entity history contains event metadata, changeType and changeContext.

## Event Metadata 

Event metadata contains the generic details/properties related to change events.

| Metadata | Description |
|---------|-----------|
| entityId | Indicates the Entity Identifier |
| entityAction | Indicates action performed on the entity - create, update, delete |
| entityType | Indicates type of entity such as SKU, Product |
| eventType | Indicates type of change event - NoChange, EntityAdd, EntityUpdate, EntityDelete |
| eventSubType | Indicates subtype of the change event - AttributesAdd, EntityUpdate, NoChange |
| clientId | Indicates the Client Identifier |
| sourceTimestamp | Indicates time at which the change event occured |
| relatedRequestId | Indicates ID of the request that generated the change event |
| taskId | Indicates ID of the request that generated the change event, in case the request is a task |
| eventTarget | Indicates target entity ID and type for change events on relationships |

## Change Type

Change type indicates the type of the change event.

| ChangeType | EntityAction | Description |
|-------------|-------------|--------------|
| addContext | Create | Indicates new entity is created in self/primary context |
| addContext | Update | Indicates new context is added to existing entity |
| deleteContext | Update | Indicates context is deleted from an entity |
| addAttributeToContext | Update | Indicates new attribute is added to context |
| UpdateAttributeInContext | Update | Indicates attribute value is added or updated in context |
| deleteAttributeFromContext | Update | Indicates attribute is deleted from context |
| addRelationshipToContext | Update | Indicates new relationship is added to context |
| deleteRelationshipFromContext | Update | Indicates relationship is deleted from context |
| addAttributeToRelationship | Update | Indicates new attribute is added to existing relationship |
| updateAttributeInRelationship | Update | Indicates attribute value is added or updated in existing relationship |
| deleteAttributeFromRelationship | Update | Indicates attribute is deleted from relationship |
| deleteDataObject | Delete | Indicates entity is deleted |

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get entity history:

* [Get Entity History - Self](api_app_get_entity_scenario24.html)
* [Get Entity History - Context](api_app_get_entity_scenario29.html)

