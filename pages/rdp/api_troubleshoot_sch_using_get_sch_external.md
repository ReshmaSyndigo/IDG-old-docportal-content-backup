---
title: Troubleshoot the Scheduler Services using Get query on Schedule Objects
sidebar: rdp_sidebar
permalink: api_troubleshoot_sch_using_get_sch.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The correct working of the schedule requires the schedule to be enabled and to have the correct schedule cycle as per the defined configuration. To verify this, you can use **{{site.data.rdp_glossary.schget}}** REST API on Schedule Objects. Execute the following steps:

1. Get the required schedule object details by using the ["get" REST API of scheduler services](api_sch_get.html). The example provided in this link returns all available schedule objects as the schedule object ID is not mentioned in the request query. On the other hand, if you know the schedule object ID, you can specify it to get the relevant schedule object information. See [Get a particular schedule object using Id](api_sch_get_scenario6.html) scenario for more information on the same. 
2. After you get the required schedule object details, check the following properties of the schedule objects. 
	* **enabled** property: The **enabled** property is a boolean property that controls whether the schedule is active or not. If the value of the **enabled** property is **false**, then the schedule is not active. Make sure the schedule is **active.**
	* **intervalInMins** property: The current scheduler supports only **fixedRate** schedule type. A **fixedRate** schedule is executed on fixed intervals, which is controlled by **intervalInMins** as part of the scheduleConfiguration. Make sure this setting is correct.
{% include callout.html content="**Note:** See [Schedule Object Structure](api_sch_object_structure.html) to get the details on overall schedule object structure.
" type="primary" %}