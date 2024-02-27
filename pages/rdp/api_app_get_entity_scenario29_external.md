---
title: Get Entity History - Context
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario29.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

EntityHistory in context shows the changes that an entity has undergone in the requested contexts.

To get entity history in context, you can use flags "allContextual","nonContextual" or provide the names of the context in which you wish to get the entity history. Following table illustrates the entity history generated based on combination of various request options.

| AllContextual | NonContextual | Contexts | EntityHistory |
|-------|------|-----------|---------|
| F/N | T/F/N | Unspecified | All Self level Events |
| T | F | Unspecified | All Events in all Contexts including Self |
| T | T/F/N | <<Contexts>> | All Events in all Contexts including Self | 
| F/N | T/N | <<Contexts>> | Self + <<Contexts>> Events | 
| F/N | F | <<Contexts>> | <<Contexts>> Events | 

T - True, F - False, N - Not Specified

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get entity history in context:

* [Get Entity History in All Contexts](api_app_get_entity_scenario30.html)
* [Get Entity History in Self Context](api_app_get_entity_scenario31.html)
* [Get Entity History in Specific Context](api_app_get_entity_scenario32.html)
