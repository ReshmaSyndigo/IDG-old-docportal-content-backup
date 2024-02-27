---
title: Bulk Entity Object Structure
sidebar: rdp_sidebar
permalink: api_bulk_entity_object_strcuture.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The Bulk Entity object in Riversand Platform is a JSON structure that details about the parameter(param) data, query data, business data such as attributes, relationships, and governance data such as workflow. 

You must specify the **task type** in all requests that you wish to send for bulk entities. The "taskType" indicates the specific action to be carried out for the particular request. Depending on the specified task type, the Bulk entity object contains different sub-objects and carries out the specific task. The following table lists the various "taskTypes" that you can specify in Riversand Platform for the bulk entities:

| Task Type | Description |
|-----------|--------------|
| process | Creates/Updates bulk entities without using Query |
| process-query | Updates bulk entities using Query |
| process-multi-query | Updates bulk entities using Multiple Query |
| changeAssignment | Changes the assignments for bulk entities without using Query |
| changeAssignment-query | Changes the assignments for bulk entities using Query |
| changeAssignment-multi-query | Changes the assignments for bulk entities using Multiple Query |
| transitionWorkflow | Transitions the workflow for bulk entities without using Query |
| transitionWorkflow-query | Transitions the workflow for bulk entities using Query | 
| transitionWorkflow-multi-query | Transitions the workflow for bulk entities using Multiple Query |
| delete-query| Delete the bulk entities using Query |

The following section describes different sub-objects a bulk entity object can have using a sample scenario for **process** and **process-query** task types:

* [Bulk Entity Object Structure for Process without using Query](api_bulk_entity_process_object_structure_wout_query.html)
* [Bulk Entity Object Structure for Process using Query](api_bulk_entity_process_object_structure_with_query.html)

{% include callout.html content="**Note**:<br/>
The object structure explained in the above sections holds good for all other task types.
" type="primary" %}