---
title: Create Custom Extension
sidebar: rdp_sidebar
permalink: si_ext_create_custom.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

After understanding the business requirement and the technical aspect of creating a custom extension, you can start creating corresponding classes to implement the logic of extract, transform, and load as required. Consider that you have a requirement to import XML data. The following illustration depicts the steps to extend **Connector facet** for XML import:

{% picture si-ext-technical.png alt="Technical Aspects" %}

This section describes how to create extract, transform, and loader classes and update in the corresponding configuration file for the above scenario:

* [Create Extractor Class](si_ext_create_extractor_class.html)
* [Create Transform Class](si_ext_create_transform_class.html)
* [Create Loader Class](si_ext_create_loader_class.html)
* [Update "Components" in Configuration File](si_ext_update_ext_config.html)
* [Update Profile Details for Extensions](si_ext_update_profile.html)