---
title: Track ARC Count Metrics in Post-Process App
sidebar: rdp_sidebar
permalink: api_request_arc_count_post_process_app.html
folder: rdp
type: HowToAPI
---

**Post-Process** app allows you to track the metrics of incoming ARC (attributes/relationships/relationship attributes/contexts) count at the app level. The **Post-Process** app does not persist the data based on the added/updated/deleted request, as it sends the data to persist in the **Entity Manage** app. To track this metrics operation, a request object is generated for the post-process service and in the API response, you can view the details outside the "appMetrics" nested attribute.

In case of **Computation Post-Process**, a request comes from the manage app therefore the post-process request object has only **manageARC** count, which consists of incoming ARC manage changes. For example, a SKU entity is created with 5 attributes. When the same entity is sent to the **Entity Manage** app, then the count of the incoming attribute is considered as 5. If the default value model adds 10 attributes and computation BR adds 5 attributes during the update for the current entity, then the count of the impacted attributes (5 attributes during the entity creation + 10 default attributes + 5 BR attributes) in the manage app is considered as 20. If the current entity with 20 impacted attributes from the manage app is sent to the post-process app, then these 20 impacted attributes are considered as the incoming attributes count (that is 20 attributes) in the post-process app. 

Similarly, when the request is sent from the **Manage** app, the count of relationships, relationship attributes, and contexts is considered as the incoming ARC count in the **Post-Process** app. 

The following is the sample **Computation Post-Process** request object, which depicts the metrics of incoming ARC count: 

<a href="files/entimangeARCcount/computation-postprocess.json" download>computation-postprocess.json</a>

In case of **Validation Post-Process**, a request comes from **Govern** app. So, it consists of both **manageARC** and **governARC** count as the incoming ARC count based on the (updated/added/deleted) request. 


The following is the sample **Validation Post-Process** request object, which depicts the metrics of incoming ARC count: 

<a href="files/entimangeARCcount/validation-postprocess.json" download>validation-postprocess.json</a>

{% include callout.html content="**Note**: For govern entity, coalesced attributes is also validated and persisted with no OS information. Whereas in the manage entity, coalesce attributes will not get persisted. Hence, the coalesce attribute count is not considered for 'ManageARC' count as it is considered in 'GovernARC' Count
" type="primary" %}

