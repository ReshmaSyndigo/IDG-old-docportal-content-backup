---
title: Metrics to Track appMetrics in Post-Process App
sidebar: rdp_sidebar
permalink: api_request_appMetrics_post_process_app.html
folder: rdp
type: HowToAPI
---

**Post-Process** app allows you to track the metrics of **Rule evaluation microApp**. To track this metric operation, a request object is generated for the post-process service with the details in the "appMetrics" nested attribute.  

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description |
|----------|-----------|--------|-------------|
| Rule evaluation | rulesRun | 2 | Indicates the number of rules executed. Note that, the count indicates only the post-process rules that are mapped at self and context. |
| | timeSpent | 352620 | Indicates the time spent in rule evaluation. Note that the duration is in milliseconds. |
| | erroredRules | 2 | Indicates the number of rules that consist of error (both runtime and syntax error). |
| | loadedBRs | 32 | Indicates the number of rules, which are loaded from the elastic. The created/updated rules are stored in the elastic. Based on the request, all the enabled rules, which have "Is Draft" flag set to "false" are fetched from the elastic irrespective of the entity type, rule type (validation/computation/post-process), and event type (create/update) to which the BR is mapped. For example, 30 BRs are present in the elastic. In addition, if two BRs are created in the system, then all the 32 are BRs are fetched from the elastic. In this example, the total number of the loadedBRs is considered as 32. | 
| | qualifiedBRs | 15 | Indicates the number of rules which gets qualified based on the rule type, execution mode, and event type (create, update, or delete) to which the BRs are mapped to. Consider that there are 50 Business Rules (BRs) in the system. Based on the request (create, update, or delete), the rule engine will calculate the number of rules it must run. In case of post-process topology, either computation post-process or validation post-process rules get qualified. For example, there are 50 BRs in the system, out of which 25 are computation post-process rules. Out of 25 BRs, 10 BRs are mapped based on the create event and the remaining 15 BRs are mapped based on the update event. If you wish to track the computation post-process request based on the update event, then only 15 BRs get qualified. |
| | selfEnt | 1 | Indicates the count of the self entity when the post-process BR sends the request to manage app, to update the current entity. For example, if you wish to send the request to set the attribute value for the current entity by using [SetEntityAttributeValue](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_SetEntityAttributeValue.html){:target="_blank"} keyword, then the count of the self impacted entities is considered as 1; otherwise 0.|   
| | impEnt | 5 | Indicates the count of the impacted entities other than the current entity when the post-process BR sends any entity other than the current entity for update to the manage app. For example, if you wish to send the request to set the attribute values for 5 related entities by using [SetRelatedEntityAttributeValue](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_SetRelatedEntityAttributeValue.html){:target="_blank"} keyword, then the count of the impacted entities is considered as 5; otherwise 0.| 
| | graphReq | 1 | Indicates the number of graph requests triggered from post-process keywords such as [SendEntityForGraphProcessing](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_SendEntityForGraphProcessing.html){:target="_blank"} and [SendRelatedEntitiesForGraphProcessing](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_SendRelatedEntitiesForGraphProcessing.html){:target="_blank"}. Note that, in a single request you can trigger multiple graph operations in the same entity. For example, you wish to track the graph operations such as "Send SKU for graph processing" and "Auto link an image to SKU" in a single request. In this case, the count of the graph request is considered as 1. | 
| | wflwReq | 2 | Indicates the number of workflow requests triggered using post-process keywords such as  [InvokeWorkflow](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_InvokeWorkflow.html){:target="_blank"}, [IsEntityInWorkflow](/{{site.data.rdp_links_version.APP}}/ddg_core_keyword_IsEntityInWorkflow.html){:target="_blank"}, [ChangeAssignment](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_ChangeAssignment.html){:target="_blank"}, [ResumeWorkflow](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_ResumeWorkflow.html){:target="_blank"}, and so on. For example, you wish to invoke "ProductEnrichmentForGermany" workflow for an entity, which has not entered the workflow. If BR is triggered to invoke the workflow based on the create or update event, then the count of the workflow request is considered as 2. The following is the sample business rule to invoke "ProductEnrichmentForGermany" workflow for an entity:<br/> IIF[IsEntityInWorkflow["ProductEnrichmentForGermany"]=false AND HaveAttributesChanged["_DEFAULT","_DEFAULT","description"],InvokeWorkflow["ProductEnrichmentForGermany"],false] | 
| | restAPICalls | 1 | Indicates the number of rest API calls made from post-process keywords such as [InitiateExport](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_InitiateExport.html){:target="_blank"}, [ConnectorService](/{{site.data.rdp_links_version.APP}}/connector_service_keywords.html){:target="_blank"}, and [GetRestAPIResponse](/{{site.data.rdp_links_version.APP}}/ddg_core_keyword_GetRestAPIResponse.html){:target="_blank"}, which is a core keyword. Note that, the workflow count is excluded from the "restAPICalls", as it is shown in the workflow request separately. For example, if you wish to initiate an export for the current entity based on the specified profiles, then [InitiateExport](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_InitiateExport.html){:target="_blank"} keyword will make a restAPICall to RSConnect Publish API. |
| | addCtxLoaded | 1 | Indicates the number of additional contexts loaded during the execution of BR. For example, you have a requirement to update the attribute value in self context but the BR is triggered to update the attribute in the "Germany" context for the same entity, then based on the request the "Germany" context is fetched from the elastic to update the attribute value. If the specified context is fetched from the elastic to update the attribute value, then the count of the additional contexts loaded is considered as 1; otherwise 0. |