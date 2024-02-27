---
title: Healthcheck Services
sidebar: rdp_sidebar
permalink: api_troubleshooting_healthcheck.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Healthcheck Services helps you to monitor the functioning and health of various technological layers of the system such as Kafka, Storm, Netty, Elastic Search etc. For each health check operation, the application sends out a request to the healthcheck URL and records the response back. 

The Healthcheck API returns the high level status of the operation such as success, failure or warning. It also provides the statistics such as time taken to perform the healthcheck, data used to perform the healthcheck and so on. In Riversand Platform, **Sensu** is used for monitoring the Healthcheck URLs periodically and sending alerts to stakeholders, as required.

The following topics are covered in this section: 

* [List of Healthcheck APIs](api_troubleshooting_healthcheckAPI.html)
* [Sensu Healthcheck Alerts](api_troubleshooting_healthcheck_sensu_alerts.html)