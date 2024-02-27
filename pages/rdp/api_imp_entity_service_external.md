---
title: Entity Import Services
sidebar: rdp_sidebar
permalink: api_imp_entity_service.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform allows you to **upload** or **transform** the customer offline data to Riversand Platform through Entity Import Services. Through these import services, you can upload the content from different sources into Riversand Platform. These services make use of the **profiles** for all the import related operations. A profile defines the mapping information between fields of the entity data and the fields of the imported data. It is in the form of configuration which details how the import must happen for this data. A profile can have multiple contexts such as import profile and export profile contexts. 

{% include callout.html content="**Notes:** 
* Connector facet supports export of RSJSON, RSExcel and DSV that can be edited and imported back into the connect integration.
* Riversand Platform does not support the usage of special characters in nested attributes and nested child attributes.
" type="primary" %}

This section describes [how an entity import object is structured](api_imp_entity_object_structure.html) in Riversand Platform. This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

{% if site.build == "internal" %}
| How do I | Basic URI |
|----------|-------------|  
| [Collect Data](api_imp_collect_data.html) | {{site.data.rdp_glossary.collectdata}} |
| [Upload Data model](api_imp_data_model.html) | {{site.data.rdp_glossary.processmodel}} |
| [Upload Data in Excel Format](api_imp_data_file.html) | {{site.data.rdp_glossary.process}} |
| [Upload Data in JSON Format](api_imp_data_file_json.html) | {{site.data.rdp_glossary.process}} |
| [Upload Data in DSV Format](api_imp_data_file_dsv.html) | {{site.data.rdp_glossary.process}} |
| [Upload Binary Object](api_imp_binary_object.html) | {{site.data.rdp_glossary.process}} |
| [Upload Generic Object](api_exp_gen_obj_str.html) | {TenantURL or ID}/api/rsConnectService/publish | 
| [Get Header Fields](api_imp_get_header_fields.html) | {{site.data.rdp_glossary.getHeaderFields}} |
| [Save Mappings](api_save_mappings.html) | {{site.data.rdp_glossary.savemappings}} |
| [Get Mappings](api_get_mappings.html) | {{site.data.rdp_glossary.getmappings}} |
| [Delete Entities using JSON Import](api_imp_delete_entity.html) | |
| [Import from Custom Blob Container](api_imp_frm_cust_blob_conter.html) | |
{% endif %}

{% if site.build == "external" %}
| How do I | Basic URI |
|----------|-------------|  
| [Collect Data](api_imp_collect_data.html) | {{site.data.rdp_glossary.collectdata}} |
| [Import from Custom Blob Container](api_imp_frm_cust_blob_conter.html) | |
{% endif %}
