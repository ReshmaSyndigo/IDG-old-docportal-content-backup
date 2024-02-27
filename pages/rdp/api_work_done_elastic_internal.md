---
title: Metrics to Track Elasticsearch 
sidebar: rdp_sidebar
permalink: api_work_done_elastic.html
folder: rdp
type: HowTo
---
 
Riversand Platform allows you to track the measurement of work done in **elasticSearch** by the various apps such as **Entity Manage**, **Post-process**, **Govern** app, and so on. The request sent through these apps are processed in **elasticSearch** based on the create, update, and delete requests. To track the metric operations of various apps, a request object is generated in the API response, where you can view the details in the "appMetrics" nested attribute.  

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description | Example |
|----------|-----------|--------------|-------------|---------|
| elasticSearch | searchCount | 1 | Indicates the number of calls that are made to the elasticSearch based on the search query request. | Consider that if you wish to search an entity, which consists of "Color" "attribute with the value as red. The particular entity is fetched from the elastic based on the get request. In this case, the "searchCount" is set to 1 in the  "entityManageService" request object. | 
| | getByIdCount | 1 | Indicates the number of calls that are made to the elasticSearch to fetch the entity using the Id. | Consider that you wish to add the attribute value for the existing SKU. To add the attribute value, "entityManageService" fetches the existing SKU using the Id to update the attribute value. The updated value is stored in the elasticSearch. In this case, "getByIdCount" is set to 1 as the existing SKU is fetched based on the given SKU Id. |
| | createOperationsCount | 1 | Indicates the number of calls that are made to the elasticSearch for the create operation. | Consider that you have created a query request to create a new entity in the application. Once the entity is created it gets persisted in the elasticSearch. In this case, "createOperationCount" is set to 1 in the "entityManageService" request object. |
| | updateOperationsCount | 1 | Indicates the number of calls that are made to the elasticSearch for the update operation. | Consider that you wish to update the attribute value for the existing SKU. To update the attribute value, "entityManageService" fetches the existing SKU using the Id to update the attribute value. The updated value is stored in the elasticSearch. In this case, "UpdateOperationCount" is set to 1 in the "entityManageService" request object. |
| | deleteOperationsCount | 1 | Indicates the number of calls that are made to the elasticSearch based on the delete operation. | Consider that you have created a query request to delete an entity. The "entityManageService" sends the delete query request to elasticSearch to delete the entity. In this case, "deleteOperationsCount" is set to 1 in the "entityManageService" request object. |
