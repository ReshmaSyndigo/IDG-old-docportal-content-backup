---
title: Asset Services
sidebar: rdp_sidebar
permalink: api_asset_services.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

**Riversand Platform** is designed to handle variety of assets such as image, audio, video and document. An asset is an entity that is stored digitally in Riversand Platform. You can organize, store, and retrieve assets using **Riversand Digital Asset Management** (RS-DAM).

Consider a SKU entity "classmate_noteBook". The following example depicts the SKU entity "classmate_noteBook" linked to all the four assets.

{% picture assetoverview.png alt="Entity linked to Assets" %}

{% if site.build != "ascend" %}
<br>
This section covers the following topics:

* [Overview of Asset Creation](api_asset_creation_overview.html)
* [Asset Object Structure](api_asset_obj_structure.html)
* [Map Asset Metadata Fields to Attributes](api_map_asset_metadata_fields.html) 
* [Ignore processing assets used in Add-on apps](api_ignore_processing_assets.html)
{% endif %}

{% if site.build == "ascend" %}
This section describes how an asset object is structured. See [Asset Object Structure](api_asset_obj_structure.html).
{% endif %}

<br>
This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Get Asset Details using Asset Id](api_dam_get_scenario1.html) | {{site.data.rdp_glossary.getasseturl}} |
| [Get Details of Asset Linked to an Entity](api_dam_get_scenario2.html) | {{site.data.rdp_glossary.getlinkedasseturl}} |
