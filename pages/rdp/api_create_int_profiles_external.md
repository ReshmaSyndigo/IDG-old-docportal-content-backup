---
title: Create Integration Profiles
sidebar: rdp_sidebar
permalink: api_create_int_profiles.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform allows you to **upload** or **transform** the data to Riversand Platform through [Entity Import Services](api_imp_entity_service.html). Through these import services, you can upload the content from different sources into Riversand Platform. These services use **profiles** for all the import related operations. A profile defines the mapping information between fields of the entity data and the fields of the imported data.

Similar to **Entity Import Services**, Riversand Platform also allows you to **publish** or **download** the entity data from Riversand Platform to offline environment in various data formats such as JSON and Excel through [Entity Export Services](api_exp_entity_service.html). These services also use **profiles** for all the export related operations. A profile defines the mapping information between fields of the entity data and the fields of the exported data. See [Profile Configuration Object Structure](api_profile_object_structure.html), for more information.

This section describes how to create integration profiles using **Configuration Service**. The topics covered in this section are:

{% if site.build == "internal" %}
* [Create Import Profile](api_create_imp_profile_config.html)
* [Create Import Profile for Migration](api_create_imp_profile_config1.html)
* [Create Import Profile for Importing Image from URL](api_create_imp_profile_config2.html)
* [Create Import Profile for Importing Binary Object](api_create_imp_profile_config3.html)
* [Create Import Profile for Importing DSV Files](api_create_imp_profile_config4.html)
* [Create Configuration to Enable Taxonomy and Classifications](api_create_imp_profile_config5.html)
* [Create Export Profile](api_create_exp_profile_config.html)
* [Create Export Profile for Excel Export](api_create_exp_profile_config_excel.html)
* [Create Export Profile for JSON Export](api_create_exp_profile_config_json.html)
* [Create Export Profile for DSV Export (Relationships in the Same File)](api_create_exp_profile_config_dsv.html)
* [Create Export Profile for DSV Export (Relationships in Separate File)](api_create_exp_profile_config_dsv_relsep.html)
* [Create Export Profile - Reference List](api_create_exp_profile_config_referencelist.html)
* [Create Export Profile to Prevent Export of Attributes not Present in the Model](api_create_exp_profile_config_non_model_attributes.html)
* [Create Export Profile to Export Attributes with No Value](api_create_exp_profile_config_null_value_attributes.html)
* [Create Export Profile to Export Assets](api_create_exp_profile_config_asset.html)
* [Create Export Profile to Export Entities with Assets](api_create_exp_profile_config_entity_asset.html)
* [Create Export Profile to disable Pop-up Messages in Smart Excel](api_disable_excel_tooltip_excel.html)
* [Create Export Profile to auto-resize Header Column in Smart Excel](api_fit_column_headers_excel.html)
{% endif %}