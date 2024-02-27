---
title: Metrics to Track Event Service App  
sidebar: rdp_sidebar
permalink: api_work_done_event_service.html
folder: rdp
type: HowTo
---

Riversand Platform allows you to measure the amount of work done by the system in **Event Service** app for a particular request. To track this metric operation, a request object is generated for the event service with the details in the "appMetrics" nested attribute, which is use to capture the app specific metrics. 

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description | Example |
|----------|-----------|--------|-------------|---------------|
| eventSubscription | qualifiedSubscriptionCount | 2 | Indicates the count of the qualified subscribers in the event service based on the event type. | Event Topology has different event subscribers that sends events to the respective subscribers. For example, "Entity Govern" subscriber and "Entity Manage" subscriber. Consider that you have created a request to create a SKU. A request is sent to the event topology to generate the events. In this case, the event is sent to "Entity Govern" and "Entity Manage" subscriber. Based on this, the total number of "qualifiedSubscriptionCount" is considered as 2. |
| | succeededSubscriptionCount | 2 | Indicates the count of the subscribers, who are succeeded in processing the event based on the event type. | Consider that you have created a request to create a SKU. A request is sent to the event topology to generate the events. In this case, the event is sent to "Entity Govern" and "Entity Manage" subscriber. If both the subscriptions are successful, then the total number of "succeededSubscriptionCount" is considered as 2. | 
| | erroredSubscriptionCount | 1 | Indicates the count of the subscribers, who are not succeeded in processing the event based on the event type. | Consider that you have created a request to create a SKU. A request is sent to the event topology to generate the events. In this case, the event is sent to "Entity Govern" and "Entity Manage" subscriber. If one of the subscription is failed, then the total number of "erroredSubscriptionCount" is considered as 1. | 

The following topic is covered in this article:

* [Get the Details of Work Done in Event Service App](api_request_work_done_event_service.html)