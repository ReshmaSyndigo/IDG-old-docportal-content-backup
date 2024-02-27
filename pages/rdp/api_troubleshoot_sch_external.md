---
title: Troubleshoot the Scheduler Services
sidebar: rdp_sidebar
permalink: api_troubleshoot_sch.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Data Management Platform facilitates you to execute the REST based tasks such as title generation, linking entity to a product, and publishing the entities at fixed regular intervals through [Scheduler Services](api_sch_service.html). The scheduler services can be diagnosed if the configured schedules are not working as intended. The following steps can help you to troubleshoot the scheduler services if you are facing the issues with it:

1. Ensure schedule is enabled and has correct schedule cycle as per the plan. See [Troubleshoot the Scheduler Services using Get query on Schedule Objects](api_troubleshoot_sch_using_get_sch.html) for more details on this step.
2. Determine if the schedules are working correctly as per the configuration. See [Troubleshoot the Scheduler Services using Get query on Schedule Info Objects](api_troubleshoot_sch_using_get_sch_info.html) for more details on this step.
3. Diagnose the Kibana logs if scheduler encountered any errors. See 
[Troubleshoot the Scheduler Services using Kibana logs](api_troubleshoot_sch_kib_logs.html) for more details on this step.