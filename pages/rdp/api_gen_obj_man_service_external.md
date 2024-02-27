---
title: Generic Object Manage Services
sidebar: rdp_sidebar
permalink: api_gen_obj_man_service.html
type: HowToAPI
folder: rdp
layout: page_api
---

{% include snippets/api_preview.md %}

In Riversand Platform, data can flow in various forms in exploding volume and velocity from different sources and often is heterogeneous in nature. Riversand Platform supports different forms of processing of these data depending on your business requirements. Some of your requirements might involve processing of small set of data that requires manual intervention and an immediate response from Riversand Platform. For example, fixing the "required attribute" errors for successful execution of the business conditions. Whereas other requirements might involve processing of high volumes of data that can be executed later and require neither an immediate response nor manual intervention. For example, scheduled bulk request for importing large number of entities into the application. Riversand Platform handles such requests that involves processing of large amounts of input data by creating the **Generic objects** through the **Generic Object Manage Services**.

The generic object manage service enables you to do CRUD (Create, Read, Delete, and Update) operations on any data objects such as entities, models, events, and configs. The generic objects temporarily stores the request data before it is taken for processing by the intended services such as scheduler services in Riversand Platform. Similarly, it temporarily stores the response data sent by the intended services before it is displayed on the application.

{% include callout.html content="**Notes**:<br/>
As the generic objects are created, used, and maintained mainly for the **internal purposes** by the Riversand Platform, it is not recommended for you to explicitly create the generic objects using \"{TenantURL or ID}/api/genericobjectmanageservice/create\" API unless you have the business requirement that strongly needs the creation of the generic objects. The following are the main characteristics of the generic object manage service:

* It stores the generic objects temporarily before they are taken for the actual processing.
* It does not require the usage of well-defined modeled entity; hence it does not perform actions such as validations and authorizations.
* It keeps track of status of already submitted data.
" type="primary" %}

This section describes [how a generic object is structured](api_gen_object_structure.html) in Riversand Platform. This section also covers how to use the RESTful API's in the Riversand Platform SDK to:

| How do I | Basic URI |
|----------|-------------|
| [Create a Generic Object](api_gen_obj_create.html) | {{site.data.rdp_glossary.genobjcreate}} |
| [Update a Generic Object](api_gen_obj_update.html)| {{site.data.rdp_glossary.genobjupdate}} |
| [Delete a Generic Object](api_gen_obj_delete.html)| {{site.data.rdp_glossary.genobjdelete}} |
| [Get Generic Objects](api_gen_obj_get.html)| {{site.data.rdp_glossary.genobjget}} |