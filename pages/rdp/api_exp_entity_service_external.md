---
title: Entity Export Services
sidebar: rdp_sidebar
permalink: api_exp_entity_service.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform allows you to **publish** or **download** the entity data from Riversand Platform to offline environment in various data formats such as JSON and Excel through Entity Export Services. These services make use of the **profiles** for all the export related operations. A profile defines the mapping information between fields of the entity data and the fields of the exported data. It is in the form of configuration which details how the export must happen for this data. A profile can have multiple contexts such as import profile and export profile contexts. For export service, a profile also has the information about the data format for publishing the data. For each export Service, the data can be exported to multiple channels. Each channel needs a specific profile for it.

{% include callout.html content="**Note:** Riversand Platform does not support the usage of special characters in nested attributes and nested child attributes.
" type="primary" %}

This section describes [how an entity export object is structured](api_exp_entity_object_structure.html) in Riversand Platform. This section also covers how to use the RESTful API's in Riversand Platform SDK to:

{% if site.build == "internal" %}
| How do I | Basic URI |
|----------|-------------|
| [Publish Data - Excel](api_exp_publish_data.html) | {{site.data.rdp_glossary.publishdata}} |
| [Download Data Job](api_exp_down_data_job.html) | {{site.data.rdp_glossary.downloadDataJob}} |
| [Download Data in Excel Format](api_exp_down_data_excel.html) | {{site.data.rdp_glossary.downloadDataExcel}} |
| [Download Data in Excel Format in Specified Locale](api_exp_down_data_job_1.html) | {{site.data.rdp_glossary.downloadDataJob}} |
| [Download Data in Excel Format in Specified Locale and Context](api_exp_down_data_job_2.html) | {{site.data.rdp_glossary.downloadDataJob}} |
| [Download Data in JSON Format](api_exp_down_data_json.html) | {{site.data.rdp_glossary.downloadDataJob}} |
| [Download Data in DSV Format](api_exp_down_data_dsv.html) | {{site.data.rdp_glossary.downloadDataJob}} |
| [Download Model Excel](api_exp_down_mod_excel.html) | {{site.data.rdp_glossary.downloadModelExcel}} |
| [Download Generic Object](api_imp_gen_obj_str.html) | {TenantURL or ID}/api/rsConnectService/collect |
{% endif %}

This section describes [how an entity export object is structured](api_exp_entity_object_structure.html) in Riversand Platform. This section also covers how to use the RESTful API's in Riversand Platform SDK to:

{% if site.build == "external" %}
| How do I | Basic URI |
|----------|-------------|
| [Publish Data - Excel](api_exp_publish_data.html) | {{site.data.rdp_glossary.publishdata}} |
{% endif %}