---
title: Configuration Services
sidebar: rdp_sidebar
permalink: api_configuration_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform provides the ability to configure and store the configuration data for the various components through Configuration Services.

{% if site.build == "internal" %}

The following lists a few examples where configuration services is used:
* [Match Service](api_match_service.html) to create a match configuration for searching entities. See [Create Match Configuration](api_create_config_scenario2.html), for an example.
* [Import Service](api_imp_entity_service.html) and [Export Service](api_exp_entity_service.html) to create integration profiles for extracting, transforming, and loading data to and from Riversand Platform respectively. See [Create Integration Profiles](api_create_int_profiles.html), for examples on creating integration profiles using Configuration Service.
* [Email Notification Configuration](api_create_email_notfn_configuration.html) to create an email notification configuration for task, bulk task, and automatic workflow assignment or assignment change.

{% endif %}

{% if site.build == "external" %}
A few examples include configuring match service attributes, integration profile details, and e-mail notification.
{% endif %}

The configuration service allows you to specify the context for which the configuration specified in the request is applicable. You can specify the context in a hierarchical structure as follows:

app -> service -> component -> subComponent -> entityType -> list -> relationshipType -> role. 

When a client gets a configuration record, it can specify whether or not the inheritance hierarchy must be traversed to retrieve the record. 

{% if site.build == "internal" %}
This section describes [how a configuration object is structured](api_config_object_structure.html) in Riversand Platform. This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Create Configuration](api_create_configuration.html) | {{site.data.rdp_glossary.createconfig}} |
| [Get Configuration](api_get_configuration.html)| {{site.data.rdp_glossary.getconfig}} |
| [Get Nearest Configuration](api_get_nearest_configuration.html) | {{site.data.rdp_glossary.getnearestconfig}} |
| [Delete Configuration](api_delete_configuration.html)| {{site.data.rdp_glossary.deleteconfig}} |

{% include callout.html content="**Notes**:<br/>
* The configuration information provided by the client using the RESTful APIs is stored as-is as a 'configuration-blob' and hence must be a valid JSON object.
* The configuration information is a flush and fill process. This implies that if you wish to update a configuration, then you still use the create API to flush and fill the configuration data.
" type="primary" %}
{% endif %}

{% if site.build == "external" %}
This section covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Get Configuration](api_get_configuration.html)| {{site.data.rdp_glossary.getconfig}} |
{% endif %}