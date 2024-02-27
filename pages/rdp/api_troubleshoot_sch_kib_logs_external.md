---
title: Troubleshoot the Scheduler Services using Kibana logs
sidebar: rdp_sidebar
permalink: api_troubleshoot_sch_kib_logs.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The errors occurred during the execution of the schedules get logged in the Kibana logs along with the schedule details such as schedule Id. You can diagnose these errors for the further analysis.

Under normal execution, the scheduler logs an "info level" logging every time it executes a task. The log entry created in the kibana logs contains the following fields:
* The corresponding REST API URL of the task.
* The payload details of the task.
* The response message from the task. <br/>


The message logged in the kibana logs is in the following format: 

		Scheduler called the task url: <task_url_details> with payload: <payload_details>, the response was: <response_details>

The following illustration depicts the kibana log for the search text "Scheduler called the task url":

{% picture sch_trbshoot_kib_logs.png alt="Kiabana Log" %}