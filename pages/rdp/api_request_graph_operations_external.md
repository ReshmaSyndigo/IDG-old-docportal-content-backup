---
title: Track Graph Operations using Request Object Service
sidebar: rdp_sidebar
permalink: api_request_graph_operations.html
folder: rdp
type: HowToAPI
---

{% include callout.html content="**Note**: This is an internal feature and can change without any further notification.
" type="primary" %}

The Riversand Platform supports **Request Tracking** in **Entity Graph Service** to track the graph operations using the request object service. You can track the query request sent to the APIs through Entity Graph Service. This provides an ability to view the status (Queued, Error, and Success) of the requested graph operations. The request object helps you to visualize the system processing for the various graph operations. 

The following are the various graph operations supported in the Riversand Platform:  

* Number of graph operations performed for incoming request/task Ids.
* Number of graph operations based on the request status.
* Number of graph operations, which are impacting 1-1, 1-n. <br/>• For example,  1-1: Link SKU to product. <br/>• 1-n – Link product to child SKUs.  
* Number of graph operations, which are impacted with entity count > 'n' 
* Number of graph operations, which are taking more than 'x' secs. 
* Subsequent graph operations are involved in the 'nth' recursion cycle of the request.

<br/>
Consider that you have created the request to auto link an image to the SKU by creating the relationship between the image and SKU. When the respective business rule is triggered, a graph processor is invoked to create the relationship between the image and SKU. To track the request of this graph operation, a request object is generated with the value of the "requestStatus".

The possible values of "requestStatus" are: 

* **Queued**: Allows you to view the pending queue of requests for graph operations.
* **Success**: Indicates that the graph operations are successful.  
* **Error**: Indicates that there are errors while performing graph operations.

<br/>
The following are the additional details captured in the request object: 

| Attribute | Sample Value  | Description |
|----------|----------------|-------------|
| entityAction | create | When an entity is created this request object is created. |
| entityId | e001 | Indicates the entity Id for which the request object is created. |
| entityType | SKU | Indicates the entity type for which the request object is created. |
| serviceName | entityGraphManageService | Indicates the request object, which is generated for graph service. |
| requestId | d8745f93-17a3-4350-ac01-04c87816581a | Indicates the request Id of the graph service. Internally a unique Id is generated for each request. |
| requestStatus | success | Indicates the status of the request . The possible values are success, error, or queued. If the request is still in queue and not picked for processing, then the status will be queued. |
| relatedRequestId | e54ad415-269b-40bd-ba50-2ed0d6831226 | Indicates the request Id of the caller service. For example, if post process service has triggered the graph request, then request Id of post process is related to the request Id of the graph service. |
| requestGroupId | a383249a-ff05-4116-aabd-52677adb8bf2 | Indicates the request Id of the original request (In this case, entity create request). This will remain same for all the intermediate requests made internally. |
| clientId | copClient | If the original request is initiated from import, then the clientId will be copClient. |
| userId | rdwadmin@riversand.com_user | Indicates the user who has initiated the original request. |
| requestTimestamp | 1616581736213 | Indicates the original request time stamp. |
| SearchStore | success | If the processing is completed successfully, then the attribute is persisted with the success status. |
| taskId | 9729772a-d80b-48b8-a047-5136359a532a | Indicates the taskId of the import. | 
| isEntityData | TRUE | Indicates the client attribute, which has the value "TRUE" for entity data. | 
| impacted | TRUE | Indicates the client attribute. |
| callerServiceName | entityPostProcess | This is the service which initiates the graph process. |
| graphId | 2cecf214-c971-4337-9bc5-8837fff4e8e5 | Indicates the GUID, which is used to track the graph repeat count to check if there is recursion. This attribute is added when Business Rule (BR) triggers the graph. |
| graphRepeatCount | 0 | This gets incremented for graph request if it has same graphId. This is used to check recursion. This attribute is added when BR triggers the graph. |
| queuedDate | 2021-03-24T10:28:56.006+0000 | Indicates the date time value at which the request is sent to kafka queue. |
| processingStartDate | 2021-03-24T10:28:56.013+0000 | Indicates the date time value at which the request is picked for processing from the queue. | 
| ProcessingEndDate | 2021-03-24T10:28:56.212+0000 | Indicates the date time value at which the processing is ended. |
| timeSpentInProcessing | 199 | Indicates the duration of processing time. Note that, the duration is in milliseconds. |
| timeSpentInQueue | 7 | Indicates the duration spent by the request in the queue. Note that, the duration is in milliseconds. | 
| appMetrics | | Indicates the nested attribute, which is use to capture the app specific metrics. | 
| impEnt | 2 | Indicates the total number of entities impacted (either created/modified) from the triggered graph request. |
| graphIdsSuccessful | sku_ischildof_product<br/> sku_hasimages_image | Indicates the graph config Ids, which are successfully executed. |
| graphIdsFailure | sku_ischildof_bundle | Indicates the graph config Ids, which are errored. | 
| linkedEntity | 1 | Indicates the number of  entities, which are linked as part of the graph request(AddSourceRelationship, AddTargetRelationship). | 
| impAttr | 2 | Indicates the number of attributes copied from source to target. |
| impRel | 1 | Indicates the number of relationships impacted (this can be the copied relationship count or the relationship which gets linked). For example, when sku is linked to product, then ischildof relationship gets added at sku level. This is considered for count. Similarly if there is any relationship like image, which gets copied from sku to product, then this relationship is also considered for count. | 
| impRelAttr | 1 | Indicates the number of relationship attributes copied from source to target. | 

<br/>

The topics covered under this section are:

* [Track Graph Operations with Success Status](api_request_graph_operations_scenario1.html)
* [Track Graph Operations with Queued Status](api_request_graph_operations_scenario2.html)
* [Track Graph Operations with Error Status](api_request_graph_operations_scenario3.html)
* [Track Multiple Graph Operations with Request Status](api_request_graph_operations_scenario4.html)