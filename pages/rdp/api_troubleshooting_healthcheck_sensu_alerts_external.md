---
title: Sensu Healthcheck Alerts
sidebar: rdp_sidebar
permalink: api_troubleshooting_healthcheck_sensu_alerts.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

The following are the Sensu alerts that are triggered based on [Healthcheck API](api_troubleshooting_healthcheckAPI.html) response:

{% include callout.html content="**Notes:** 
* The timeout for healthcheck API is 60 seconds.
* Each of the health checks runs every 5 min.
" type="primary" %}

|#|Criteria|Sensu Alert|Remarks|
|--- |--- |--- |--- |
|1|Health check api returns 'error'|no email|log to influxDB|
|2|Health check api returns 'warning'|no email|log to influxDB|
|3|Timeout/ Network/ Other error|no email|log to influxDB|
|4|Health check api returns 'error' 2 times in a row|send 'warning' email|Query to InfluxDB|
|5|Health check api returns 'error' 3 times in a row|send 'critical' email|Query to InfluxDB|
|6|Health check  api returns 'warning' 2 times in a row|send 'warning' email|Query to InfluxDB|
|7|Timeout/ Network/ Other error 3 times in a row|send 'critical' email|Query to InfluxDB|
|8|All health checks failed in last run|send 'critical' email|Query to InfluxDB|