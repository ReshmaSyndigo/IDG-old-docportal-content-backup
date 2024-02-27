---
title: Riversand JSON Object Schema Validations
sidebar: rdp_sidebar
permalink: json_schema_val_end_pnt.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

Riversand Platform performs EARCPV (Entity, Attribute, Relationship, Context, Property, and Value Level) schema validations for the JSON data to ensure that the JSON schema adheres to the basic principles of EARCPV schema.

The following table describes the Riversand JSON Object Schema validations at various end points:

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| data | remove data if empty | Yes  | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| contexts | remove contexts array if empty | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| context | remove context object if empty | Yes | Yes |
| context | should contain non empty and non null context type and path | Yes | Yes |
| context | action can be present | Yes | No |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| attributes | remove attributes object if empty | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| attribute | attribute name has to be present and should be non null and non empty | Yes | Yes |
| attribute | remove values array if empty | Yes | Yes |
| attribute | remove group array if empty | Yes | Yes |
| attribute | remove properties object if empty | Yes | Yes |
| attribute | values or group or properties has to be present if attribute name is present | Yes | Yes |
| attribute | action can be present | Yes | No |
| attribute | remove attribute object if empty | Yes | Yes |
| attribute | value can be null | No | No |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| values | remove values if empty | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| value | value or invalid value or properties has to be present | Yes | Yes |
| value | value can be empty string | No | Yes |
| value | value can be null | No | No |
| value | action can be present along with locale | Yes | No |
| value | action can be present with value | Yes | No |
| value | remove value object if empty | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| NestedAttribute Group | remove group array if empty | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| Nested Attribute Row | remove row object if empty | Yes | Yes |
| Nested Attribute Row | action can be present with locale | Yes | No |
| Nested Attribute Row | action can be present with attributes | Yes | No |
| Nested Attribute Row | _NULL value/attributes/properties has to be present | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| Properties | remove properties object if empty | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| Property | property Name has to be present and should be non null and non empty   | Yes | Yes |
| Property | should contain property values or nested property | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| Nested Property | remove nested property array if empty| Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| Relationships | remove relationships object if empty | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| Relationship | remove relationship array if empty | Yes | Yes |
| Relationship | rel Name has to be present and should be non null and non empty| Yes | Yes |
| Relationship | if relTo is present then – id and type should be present and they should be non null and non empty. If relatedEntityInfo is present, then it should have non null and non empty relatedEntityType. | Yes | Yes |
| Relationship | action can be present | Yes | No |
| Relationship | attributes or properties or relTo has to be present | Yes | Yes |

| Schema Element | Scenario | Request (Yes/No) | Response (Yes/No) |
|--------|--------|--------------|----------|
| Relationship Attributes | remove relationship attributes array if empty | Yes | Yes |
| Relationship Properties | remove relationship properties object if empty | Yes | Yes |

Action is a reserved keyword which can have **delete** and **replace** as value.