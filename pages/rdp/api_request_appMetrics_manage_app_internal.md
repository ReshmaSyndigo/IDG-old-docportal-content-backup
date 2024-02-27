---
title: Metrics to Track appMetrics in Manage App
sidebar: rdp_sidebar
permalink: api_request_appMetrics_manage_app.html
folder: rdp
type: HowToAPI
---

**Entity Manage** app allows you to track the metrics of **Default value population** and **Rule evaluation microApps**. To track this metric operation, a request object is generated for the entity manage service with the details in the "appMetrics" nested attribute. 

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description |
|----------|-----------|--------|-------------|
| Default value population | processedAttributesCount (procAttr) | 2 |  Indicates the total number of default attributes populated both in self and context. Note that, if the attribute value is added from the default values model and gets overridden by BR, then OS information in the persisted attribute value is "osType:businesRule". Wherein, the default value app also processed this attribute, it will be considered in "processedAttributesCount". |
| | processedRelationshipAttributesCount (procRelAttr) | 1 | Indicates the total number of default relationship attributes populated both in self and context. |
| | timeSpent | 78 | Indicates the time spent in the default value population. Note that the duration is in milliseconds. |
| Rule evaluation | rulesRun | 2 | Indicates the number of rules executed. Note that, the count indicates only the computation rules that are mapped at self and context. |
| | erroredRules | 2 | Indicates the number of rules that consist of error (both runtime and syntax error). |
| | timeSpent | 352620 | Indicates the time spent in rule evaluation. Note that the duration is in milliseconds. |
| | loadedBRs | 32 | Indicates the number of rules, which are loaded from the elastic. The created/updated rules are stored in the elastic. Based on the request, all the enabled rules, which have "Is Draft" flag set to "false" are fetched from the elastic irrespective of the entity type, rule type (validation/computation/post-process), and event type (create/update) to which the BR is mapped. For example, 30 BRs are present in the elastic. In addition, if two BRs are created in the system, then all the 32 are BRs are fetched from the elastic. In this example, the total number of the loadedBRs is considered as 32. | 
| | qualifiedBRs | 15 | Indicates the number of rules which gets qualified based on the rule type, execution mode, and event type (create, update, or delete) to which the BRs are mapped to. Consider that there are 50 Business Rules (BRs) in the system. Based on the request (create, update, or delete), the rule engine will calculate the number of rules it must run. In case of manage topology, only computation rules get qualified. For example, there are 50 BRs in the system, out of which 25 are computation rules. Out of 25 BRs, 10 BRs are mapped based on the create event and the remaining 15 BRs are mapped based on the update event. If you wish to track the computation request based on the update event, then only 15 BRs get qualified. |
| | loadedBCs | 100 | Indicates the number of Business Conditions (BCs), which are loaded from the elastic. Based on the request all the enabled BCs, which has "Is Draft" flag set to "false" are fetched from the elastic. For example, if 100 BCs are loaded from the elastic, then the loadedBCs count is considered as 100. | 
| | additionalContextLoaded (addCtxLoaded) | 1 | Indicates the number of additional contexts loaded during the execution of BR. For example, you have a requirement to update the attribute value in self context but the BR is triggered to update the attribute in the "Germany" context for the same entity, then based on the request the "Germany" context is fetched from the elastic to update the attribute value. If the specified context is fetched from the elastic to update the attribute value, then the count of the additional contexts loaded is considered as 1; otherwise 0. |
| | processedAttributes (procAttr) | 1 | Indicates the number of attributes added by the BR. For example, a sku entity is created and wish to send a request to **Entity Manage** app to set the "brand" attribute value by using [SetAttributeValue](/{{site.data.rdp_links_version.APP}}/ddg_man_service_keyword_SetAttributeValues.html) keyword. A BR is triggered to set the attribute value. Once the BR sets the attribute value, then the count of the processed attribute is considered as 1. |
| | processedRelationshipAttributes (procRelAttr) | 1 | Indicates the number of relationship attributes added by the BR. For example, you wish to send the request to **Entity Manage** app to set the relationship attribute value for the SKU entity by using [SetRelationshipAttribute](/{{site.data.rdp_links_version.APP}}/ddg_man_service_keyword_SetRelationshipAttribute.html). Once the BR is triggered based on the create request, then the count of the relationship attribute is considered as 1. | 
| | processedContext (procCtx) | 1 | Indicates the number of contexts added by the BR. For example, you wish to send the request to **Entity Manage** app to add the context for SKU entity by using [AddToContext](/{{site.data.rdp_links_version.APP}}/ddg_man_service_keyword_AddToContext.html) keyword. A BR is triggered to add the context for SKU entity based on the create request. Once the BR is triggered to add the context for SKU entity, then the processed context count is considered as 1. | 
| | processedRelationship (prcRel) | 1 | Indicates the number of relationships added by the BR. For example, when you send a request to **Entity Manage** app to add the relationship for the newly created "Product" entity by using [AddRelationshipInContextByEntityId](/{{site.data.rdp_links_version.APP}}/ddg_man_service_keyword_AddRelationshipInContextByEntityId.html) keyword. A BR is triggered to add the relationship for the entity. Once the BR is triggered to add the relationship, then the count of the processed relationship count is considered as 1. |
| | restAPICalls | 1 | Indicates the number of rest API calls made from the [GetRestAPIResponse](/{{site.data.rdp_links_version.APP}}/ddg_core_keyword_GetRestAPIResponse.html){:target="_blank"} keyword. |

The following is the sample JSON, which depicts the default values model for the sku entity type present in the system:

<a href="files/entimangeARCcount/default-values-model.json" download>default-values-model.json</a>
