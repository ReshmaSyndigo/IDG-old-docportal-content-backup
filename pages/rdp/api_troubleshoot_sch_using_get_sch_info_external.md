---
title: Troubleshoot the Scheduler Services using Get query on Schedule Info Objects
sidebar: rdp_sidebar
permalink: api_troubleshoot_sch_using_get_sch_info.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The schedule Info object contains the state of the schedule. It gets updated only when the corresponding schedule is active. To verify this, you can use **{{site.data.rdp_glossary.schget}}** REST API on schedule Info Objects. Perform the following steps:

1. Get the required schedule Info object details by using the "get" REST API on schedule Info objects. See [Get all schedule Info objects](api_sch_get_scenario9.html) scenario for more information. This scenario returns all schedule info objects that are created by various schedule objects as the schedule object ID is not mentioned in the request query. On the other hand, if you know the schedule object ID, you can specify it to get the relevant schedule Info object information. See [Get a particular schedule Info object using schedule Id](api_sch_get_scenario10.html) scenario for more information on the same.
2. After you get the required schedule Info object details, verify the following property of the schedule Info objects. 
	* **lastInvocation** property: The **lastInvocation** property records the time when the corresponding schedule has last run in the "Epoch" time format. Use the value of the **lastInvocation** property along with the **schedule frequency** to conclude whether the schedule is functioning as expected.

{% include callout.html content="**Notes:**<br/>
* **intervalInMins** property of the schedule object gives you the **schedule frequency**.
* See [Schedule Info Object Structure](api_sch_info_object_structure.html) to get the details on overall schedule Info object structure.
" type="primary" %}