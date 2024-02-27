---
title: Metrics to Track appMetrics in Govern App
sidebar: rdp_sidebar
permalink: api_request_appMetrics_govern_app.html
folder: rdp
type: HowToAPI
---

**Govern** app allows you to track the metrics of **Rule evaluation microApp**. To track this metric operation, a request object is generated for the govern service with the details in the "appMetrics" nested attribute.  

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description |
|----------|-----------|--------|-------------|
| Rule evaluation | rulesRun | 2 | Indicates the number of rules executed. Note that, the count indicates only the validation rules that are mapped at self and context or the validation rules that are mapped to any BCs. |
| | timeSpent | 352620 | Indicates the time spent in rule evaluation. Note that the duration is in milliseconds. |
| | erroredRules | 2 | Indicates the number of rules that consist of error (both runtime and syntax error). |
| | loadedBRs | 80 | Indicates the number of rules, which are loaded from the elastic. The created/updated rules are stored in the elastic. Based on the request, all the enabled rules, which have "Is Draft" flag set to "false" are fetched from the elastic irrespective of the entity type, rule type (validation/computation/post-process), and event type (create/update) to which the BR is mapped. For example, 30 BRs are present in the elastic. In addition, if two BRs are created in the system, then all the 32 are BRs are fetched from the elastic. In this example, the total number of the loadedBRs is considered as 32. | 
| | qualifiedBRs | 15 | Indicates the number of rules which gets qualified based on the rule type, execution mode, and event type (create, update, or delete) to which the BRs are mapped to. Consider that there are 50 Business Rules (BRs) in the system. Based on the request (create, update, or delete), the rule engine will calculate the number of rules it must run. In case of govern topology, only validation rules get qualified. For example, there are 50 BRs in the system, out of which 25 are validation rules. Out of 25 BRs, 10 BRs are mapped based on the create event and the remaining 15 BRs are mapped based on the update event. If you wish to track the request based on the update event, then only 15 BRs get qualified. |
| | loadedBCs | 100 | Indicates the number of Business Conditions (BCs), which are loaded from the elastic. Based on the request all the enabled BCs, which have "Is Draft" flag set to "false" are fetched from the elastic. For example, if 100 BCs are loaded from the elastic, then the loadedBCs count is considered as 100. | 
| | qualifiedBCs | 5 | Indicates the number of BCs, which gets qualified based on the execution mode and event type (create, update, or delete) to which the BCs are mapped to. <br/>For example, consider that there are 15 BCs in the system. Based on the request (create, update, or delete), the rule engine will calculate how many business conditions it must run. In this example, out of 15 BCs, 10 BCs are based on the create event and the remaining 5 BCs are based on the update event. If you wish to track the request based on the update event, then 5 BCs get qualified, which are based on the update. |
| | addCtxLoaded | 1 | Indicates the number of additional contexts loaded during the execution of BR. For example, you have a requirement to validate the attribute value in self context but the BR is triggered to validate the attribute in the "Germany" context for the same entity, then based on the request the "Germany" context is fetched from the elastic to validate the attribute value. If the specified context is fetched from the elastic to validate the attribute value, then the count of the additional contexts loaded is considered as 1; otherwise 0. |
| | restAPICalls | 1 | Indicates the number of rest API calls made from the [GetRestAPIResponse](/{{site.data.rdp_links_version.APP}}/ddg_core_keyword_GetRestAPIResponse.html){:target="_blank"} keyword. |
