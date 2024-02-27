---
title: Seed Load Errors for Tenants
sidebar: rdp_sidebar
permalink: api_troubleshooting_seed_load_errors_for_tenants.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Seed Load (Tenant Configurations) tracking uses **Task Summary Service** to report status (Success/Failure). If the status is not Completed, it denotes that the load has failed. You can use a basic troubleshooting guide to troubleshoot using task summary Id which is returned in the load API response.

Troubleshooting of seed load includes the following:
* **Task based metrics** - This includes **Total records**, **totalRecordsSuccess**, and so on counts. For more information, see [Task Based Metrics](api_troubleshooting_task_based_metrics.html).
* **Failed record details** – This find the record-based metrics which failed. For example - **EntityId**", **EntityType**, and so on for error documents. For more information, see [Failed Record Details](api_troubleshooting_failed_record_details.html).
