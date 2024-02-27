---
title: Prerequisites for developing Custom Extension
sidebar: rdp_sidebar
permalink: si_ext_set_pre.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

Content Onboarding and Content Distribution profiles are a part of Riversand Platform installation and deployment itself and no separate setup is required. The following lists a few prerequisites to extend **Connector facet**:
Content Onboarding and Content Distribution profiles are a part of Riversand Platform installation and deployment itself and no separate setup is required. The following lists a few prerequisites to extend **Connector facet** or **Connector facet**:

* Understand the business requirement and analyze the use case for which you wish to create extension. See [Understand Business Flow](si_ext_how_business.html), for sample use cases.

* Get an understanding of how a profile object is configured in [Entity import services](api_imp_entity_service.html) and [Entity export services](api_exp_entity_service.html).

* Understand the technical aspect and analyze if you require extractor, loader, and transformer classes. See [Understand Technical Aspects](si_ext_how_technical.html), for a sample flow chart.

* Get access to the Git repository of rsConnect and Connector JARs.

* Set up the development environment required to develop custom extension. See [Setup Prerequisites](si_prereq.html), for more information.

* Understand the solution structure and create classes to implement custom extension logic as required. See [Create Custom Extension](si_ext_create_custom.html), for more information.