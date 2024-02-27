---
title: Match Search Services
sidebar: rdp_sidebar
permalink: api_match_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform provides the ability to search entities based on match configuration details through Match Search Services. This is useful when you create multiple entities which have same attribute values as the entities that are already available in the system. Match Configuration details is created per entity type and you can create a match configuration using the [Configuration Services](api_configuration_service.html). 

{% if site.build == "internal" %}
This section describes [how a match configuration object is structured](api_match_object_structure.html) in Riversand Platform. This section also covers how to use RESTful API's in Riversand Platform SDK to:
{% endif %}

{% if site.build == "external" %}
This section covers how to use RESTful API's in Riversand Platform SDK to:
{% endif %}

| How do I | Basic URI |
|----------|-------------|
| [Search Entities](api_get_match_results.html)| {{site.data.rdp_glossary.matchurl}} |

{% include callout.html content="**Notes**:
* **matchservice/search** is used to perform both deterministic and Machine-Leanring (ML) based match. This is the recommended API.
* If you wish to perform only ML based match, then you can use **matchservice/match** API.
" type="primary" %}