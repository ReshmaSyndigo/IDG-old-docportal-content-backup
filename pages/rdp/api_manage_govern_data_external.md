---
title: Entity Govern Services
sidebar: rdp_sidebar
permalink: api_manage_govern_data.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

An entity undergoes several changes right from its inception into Riversand Platform until it is exported out. These changes can be as simple as entity attribute modifications to complex variant or extension changes. Due to such volatile nature of data, it is necessary to keep track of entity states at each stage of entity modification. These can be validation states or the step an entity is in a workflow. Entity Govern Data APIs provides you the necessary APIs maintain the governance data for an entity.

This section describes [how an entity govern object is structured](api_entity_govern_object_structure.html) in Riversand Platform and also covers how to use the RESTful API's in the Riversand Platform SDK to:

{% if site.build == "internal" %}
| How do I | Basic URI |
|----------|-------------|
| [Get Entity Govern Data](api_get_govern_data.html) | {{site.data.rdp_glossary.getgoverndata}} |
| [Validate Data Synchronously](api_sync_validate.html) | {{site.data.rdp_glossary.syncValidate}} |
| [Start Workflow](api_start_workflow.html) | {{site.data.rdp_glossary.startworkflow}} |
| [Transition Workflow](api_transition_workflow.html) | {{site.data.rdp_glossary.transitionWorkflow}} |
| [Terminate Workflow](api_govern_terminate_workflow_instance.html) | {{site.data.rdp_glossary.terminateWorkflowInstance}} |
| [Delete Entity Govern Data](api_govern_delete_entity.html) | {{site.data.rdp_glossary.deletegoverndata}} |
| [Reevaluate Govern Data](api_govern_reevaluate.html) | {{site.data.rdp_glossary.revaluategoverndata}} {% endif %}

{% if site.build == "external" %}
| How do I | Basic URI |
|----------|-------------|
| [Get Entity Govern Data](api_get_govern_data.html) | {{site.data.rdp_glossary.getgoverndata}} |
| [Start Workflow](api_start_workflow.html) | {{site.data.rdp_glossary.startworkflow}} |
| [Transition Workflow](api_transition_workflow.html) | {{site.data.rdp_glossary.transitionWorkflow}} |
| [Terminate Workflow](api_govern_terminate_workflow_instance.html) | {{site.data.rdp_glossary.terminateWorkflowInstance}} |
| [Reevaluate Govern Data](api_govern_reevaluate.html) | {{site.data.rdp_glossary.revaluategoverndata}} 
{% endif %}
