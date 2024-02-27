---
title: Metrics to Track Graph Operations
sidebar: rdp_sidebar
permalink: api_work_done_graph_operations.html
folder: rdp
type: HowTo
---

Riversand Platform allows you to measure the amount of work done by the system in **Graph Process** app for a particular request.

To track this metric operation, a request object is generated for the graph service with the details in the "appMetrics" nested attribute, which is use to capture the app specific metrics. 

The following are the properties implemented in the "appMetrics" nested attribute:

| microApp | Attribute | Sample Value | Description | Example |
|----------|-----------|--------|-------------|---------------|
| graphProcessing | impEnt | 2 | Indicates the total number of entities, which get impacted (either created/modified) from the triggered graph request. | Consider that you have created a request to link SKU to Product by creating "sku_ischildof_product" relationship. For this request, a graph config is invoked to create the relationship between the SKU and Product. In this example, the total number of impacted entities count is considered as 2. |
| | graphIdsSuccessful | 2 | Indicates the count of the graph config Ids, which are successfully executed. | Consider that you have created a multiple graph operations such as "Send SKU for graph processing" and "Auto link an image to SKU" in a single request. A request object is generated for these two graph operations with the "requestStatus" value as "success". In this example, the count of successful graph Ids is considered as 2. |  
| | graphIdsFailure | 1 | Indicates the count of the graph config Ids, which are errored.  | Consider that you have created a request to auto-link an image to the SKU automatically by creating the relationship between the image and SKU. If the request object is generated for this graph operation with the "requestStatus" value as "Error", then the graphId failure count is considered as 1. | 
| | linkedEntity | 5 | Indicates the number of entities, which are linked as part of the graph request(AddSourceRelationship, AddTargetRelationship). |Consider that you have created a request to link five images to a SKU by creating "sku_hasimages_image" relationship. A graph config is invoked to create a relationship between the SKU and images. If the created request is successfully executed by creating the relationship between the SKU and five images, then the count of the linked entities is considered as 5. | 
| | impAttr | 4 | Indicates the number of attributes, which are copied from source to target. | Consider that you wish to copy attributes such as "ProductID" and "ERPID" from product to 2 SKUs. When the respective business rule is triggered, a graph processor is invoked to link the Product to 2 SKUs by updating the attribute values. In this example, from Product (source entity) the attributes such as "ProductID" and "ERPID" are copied to the SKU entities (target entity), so the total number of impacted attributes is 4. If the requested graph operation is successfully executed, then the count of the impacted attributes is considered as 4. |
| | impRel | 1 | Indicates the number of relationships impacted (the relationship which gets linked) from the triggered graph request. | Consider that you have created a request to auto-link an image to SKU by creating the relationship between the image and SKU. When the respective business rule is triggered, a graph processor is invoked to create the relationship between the image and SKU. In this example, the count of impacted relationships is considered as 1. | 
|  | impRelAttr | 1 | Indicates the number of relationship attributes copied from source to target. | Consider that you have created a request to copy the relationship attribute from SKU to a product. When the respective business rule is triggered, a graph processor is invoked to copy the relationship attribute from SKU to the product. In this example, the count of impacted relationship attributes is considered as 1. |
|  | impCtx | 1 | Indicates the number of contexts impacted from the triggered graph request. | Consider that you wish to send the SKU for graph processing in the "Germany" context when the "productId" is updated. When a particular business rule is triggered, a graph processor is invoked to send the SKU for graph processing in the specified context. In this example, the count of the impacted context is considered as 1. | 

The following are the topics covered in this article:

* [Get the Details of Work Done in Graph Process App](api_request_graph_operations_computed.html)
* [Get the Details of Work done by the Elasticsearch and Kafka in Graph Process App](api_request_work_done_kafka_graph_process.html)
