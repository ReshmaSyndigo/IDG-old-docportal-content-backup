---
title: Track ARC Count Metrics in Manage App
sidebar: rdp_sidebar
permalink: api_request_arc_count_manage_app.html
folder: rdp
type: HowToAPI
---

**Entity Manage** app allows you to track the metrics of incoming and impacted ARC (attributes/relationships/relationship attributes/contexts) count at the app level. To track this metrics operation, a request object is generated for the entity manage service and in the API response, you can view the details outside the "appMetrics" nested attribute. The following are the two outcomes of the ARC count in the **Entity Manage** app:

### Incoming 

This indicates the number of attributes/relationships/relationship attributes/contexts count that are coming to the **Entity Manage** app based on the request. In case of the nested attribute, child attributes count is not considered. The attributes, which are sent for delete are also considered for the count. For example, a SKU entity is created in the self context with three attributes, one relationship, and one relationship attribute. In this example, the attributes, relationships, contexts, and relationship attributes, which are sent for create are considered as the incoming ARC count. Note that the ARC, which is sent for update after the entity creation is also considered as the incoming ARC count. The following table depicts the metrics of the incoming ARC count in the "Entity Manage" app:

| Incoming ARC  | ARC (attributes/relationships/relationship attributes/contexts) | ARC Count | 
|-----------|---------------------------------------------------------------------|-----------|
| Incoming Attributes (incAttr) | color, size, brand | The total number of incoming attributes count is 3 |
| Incoming Relationships (incRel) | hasimages | The total number of incoming relationship count is 1 |
| Incoming Relationship Attributes (incRelAttr) | assetsequence  | The total number of incoming relationship attribute count is 1 |
| Incoming Contexts (incCtx) | self  | The total number of incoming context count is 1 |

Consider that you have a request to update the two attribute values for the same entity by using the post-process keyword such as [SetEntityAttributeValue](/{{site.data.rdp_links_version.APP}}/ddg_post_process_keyword_SetEntityAttributeValue.html){:target="_blank"}. When you use this keyword to update the two attribute values for the same entity, then the post-process app sends the entity for the **Entity Manage** app to update the attribute values. Based on the request, the **Entity Manage** app considers these two attributes as the incoming attributes count. 

{% include callout.html content="**Notes**:
* The request which comes from post-process to entity manage app is tracked in the separate manage request object . 
* Consider that an entity is in 'Self' and 'Germany' context. If you wish to send the request to update the attribute only in 'Germany' context, then the incoming context count is considered as 2.        
" type="primary" %}

### Impacted

This indicates the number of ARC count, which are impacted based on the added/updated/deleted request. In case of the nested attribute, child attributes count is not considered. For example, If the default value model or Business Rule (BR) adds 3 attributes, 1 relationship, and 1 relationship attribute for the created SKU entity. In this case, metrics of the impacted ARC count in the "Entity Manage" app are shown in the below table:

| Impacted ARC | ARC | Count | 
|-----------|-----|-------|
| Impacted Attributes (impAttr) | color, size, brand, featurespecs, manufacturernamedetails, and createdate | The total number of impacted attributes count is 6 |
| Impacted Relationships (impRel) | hasimages | The total number of impacted relationship count is 1 |
| Impacted Relationship Attributes (impRelAttr) | assetsequence, isprimary  | The total number of impacted relationship attributes count is 2 |
| Impacted Contexts (impCtx) | self, country: America, country:Germany  | The total number of impacted context count is 3 |

The following is the sample JSON of the incoming and impacted entity in the **Entity Manage** app:

| Incoming Entity | Impacted Entity | Request object | 
|-----------------|-----------------|----------------|
| <a href="files/entimangeARCcount/incoming-entity.json" download>incoming-entity.json</a> | <a href="files/entimangeARCcount/impacted-entity.json" download>impacted-entity.json</a> | <a href="files/entimangeARCcount/request-object.json" download>request-object.json</a> | 
