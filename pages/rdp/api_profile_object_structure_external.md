---
title: Profile Configuration Object Structure
sidebar: rdp_sidebar
permalink: api_profile_object_structure.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

**Riversand Platform** allows you to upload or transform the customer offline data through [Entity Import Services (Content Onboarding)](api_imp_entity_service.html). Similarly, it allows you to publish or download the entity data from the application to offline environment in various data formats such as JSON and Excel through [Entity Export Services (Content Distribution)](api_exp_entity_service.html). **Riversand Platform** supports exporting and importing of data in different channels and format. Collectively, these are referred as **Integration Patterns**. These services make use of the **profiles** for all the import and export related operations.

Profiles are configuration objects that defines the connectivity and transformation parameters between the source and target systems. The configurations are defined in three segments:

* **Collect**: Define how inbound batches of records are split and data is read from the source.
* **Transform**: Defines how inbound records are transformed into outbound records.
* **Publish**: Defines how outbound records are batched and data is written to the destination.

The following illustration depicts the building blocks of the **Profile** object:

{% picture si-profile.png alt="Profile Blocks" %}

The following illustration depicts the data flow of each building blocks in **Content Onboarding and Content Distribution** Services:

{% picture si-profile-blocks.png alt="Profile Blocks" %}

{% if site.build == "internal" %}

This section covers the following topics:
* [Seed Connect Profiles](api_profile_seed.html)
* [Out-of-the-box (OOTB) Connectors](api_profile_ootb.html)
* [Supported Integration Patterns](api_profile_integration_patterns.html)
* [Profile Configuration Object Structure for Import Service](api_profile_object_structure_import.html) 
* [Profile Configuration Object Structure for Export Service](api_profile_object_structure_export.html) 

{% endif %}

## Key Terminologies

The following lists some of the key terminologies used in Integration Profiles:

* Base/Seed profile – Indicates Out of the box profile.
* Extension/Overridden profile – Indicates Out of the box profile modified by the implementation team. Note that these refer to only profiles modified by the implementation team explicitly such as batchSize, include/exclude filters and does not include the channel modification done by the data loader API/tool.
* Custom profile – Indicates a new profile created by the implementation team specific to integration tasks such as format and channel details.