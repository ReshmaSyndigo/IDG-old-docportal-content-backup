---
title: Metrics to Track Kafka
sidebar: rdp_sidebar
permalink: api_work_done_kafka.html
folder: rdp
type: HowTo
---

Riversand Platform allows you to track the measurement of work done in kafka by the various apps such as **Entity Manage**, **Post-process**, **Govern**, and so on. The requests sent through these apps gets queued in kafka, which processes the requests for further processing based on the create, update, and delete requests. To track the metric operations of various apps, a request object is generated in the API response, where you can view the details in the "appMetrics" nested attribute.  

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description | Example |
|----------|-----------|--------------|-------------|---------|
| kafka | messagesQueued | 1 | Indicates the total number of queued messages in kafka for the requests from the different services. | Consider that you wish to send the request to **Entity Manage** app to set the relationship attribute value for the SKU entity by triggering the business rule based on the create request. The **Entity Manage** app further sends the request to **Event** app for processing.  The request sent through this apps gets queued in kafka, which processes the request for processing. In this case, the "messagesQueued" count is considered as 1. |