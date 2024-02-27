---
title: Track ARC Count Metrics in Govern App
sidebar: rdp_sidebar
permalink: api_request_arc_count_govern_app.html
folder: rdp
type: HowToAPI
---

**Govern** app allows you to track the metrics of incoming and impacted ARC (attributes/relationships/relationship attributes/contexts) count at the app level, which includes all model validations and BR/BC changes. To track this metrics operation, a request object is generated for the govern service and in the API response, you can view the details outside the "appMetrics" nested attribute. The following are the two outcomes of the ARC count in the **Govern** app:

### Incoming

This indicates the number of incoming attributes/relationships/relationship attributes/contexts count that are coming to the **Govern** app are based on the impacted ARC count in the **Entity Manage** app. For example, a **Discount** attribute is updated for SKU entity in the **Entity Manage** app (the updated attribute in "Entity Manage" app is considered as impacted ARC count) and the request is sent to **Govern** app to validate if the updated attribute consists of an error (the attribute which is sent to the **Govern** app is considered as incoming ARC count), then this attribute is considered as an incoming attribute and the incoming attribute count is considered as 1. 

The following is the sample JSON to track the metrics of the incoming ARC count in the **Govern** app:
 
| Incoming ARC | ARC | Count | 
|-----------|-----|-------|
| Incoming Attributes (impAttr) | featurespecs, manufacturernamedetails, and createdate | The total number of incoming attributes count is 3 |
| Incoming Relationships (impRel) | hasimages | The total number of incoming relationship count is 1 |
| Incoming Relationship Attributes (impRelAttr) | assetsequence, isprimary  | The total number of incoming relationship attributes count is 2 |
| Incoming Contexts (impCtx) | self, country: America, country:Germany  | The total number of incoming context count is 3 | 

### Impacted

This indicates the number of impacted ARC count based on the request, which is sent to the elastic to update/add/delete the error.

The following is the sample JSON to track the metrics of the impacted ARC count in the **Govern** app:

| Incoming Manage Entity | Impacted Govern Entity | Govern Request object | 
|-----------------|-----------------|----------------|
| <a href="files/governARCcount/incoming-manage-entity.json" download>incoming-manage-entity.json</a> | <a href="files/governARCcount/impacted-govern-entity.json" download>impacted-govern-entity.json</a> | <a href="files/governARCcount/govern-request-object.json" download>govern-request-object.json</a> | 

The following table depicts the metrics of the impacted ARC count in the **Govern** app:

| ARC names in request object | ARC | Count | 
|-----------|-----|-------|
| Impacted Attributes (impAttr) | brand, createdate, merchant name | The total number of impacted attributes count is 3 |
| Impacted Relationships (impRel) | hasimages  | The total number of impacted relationship count is 1 |
| Impacted Relationship Attributes (impRelAttr) | isprimary, assetsequence  | The total number of impacted relationship attributes count is 2 |
| Impacted Contexts Count (impCtx) | self, country: America, country:Germany  | The total number of impacted context count is 3 |