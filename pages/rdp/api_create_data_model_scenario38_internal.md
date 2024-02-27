---
title: "Set User Role Mapping"
sidebar: rdp_sidebar
permalink: api_create_data_model_scenario38.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.createdatamodel}}** to create and map users to single/multiple role(s), using a scenario.

## Scenario

To map user to single or multiple role(s). 

{% include snippets/header.html %}

To create a role and user, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. See how to [create a role](api_system_role_data_model.html) and [create a user](api_system_user_data_model.html).

To demonstrate the different authorization model scenarios, we create the following users and map them to roles.

| User | Role(s) | 
|----|---------------|
| infodev1_beladmin | belgiumadmin|
| infodev1_beluser | belgiumuser | 
| infodev1_vendor | vendor | 
| infodev1_beluservend | belgiumuser,vendor | 
| infodev1_buyer | buyer | 
