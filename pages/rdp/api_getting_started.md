---
title: Riversand RESTful APIs
sidebar: rdp_sidebar
permalink: api_getting_started.html
type: Description
folder: rdp
layout: page_api
---

Riversand Platform exposes various RESTful APIs that enables you to manage data efficiently as per the business requirement. To use these APIs, your application must use https to authenticate the request. It is mandatory to only use https for API access, http must not be used. See [Authentication Services](api_auth_service.html), for more information. 

The request and responses are in JSON format and caters to numerous variations to support most common business scenarios. Because the REST API is based on open standards, you can use any web development language to access the API.

This section covers the RESTful APIs of the following services in Riversand Platform:

{% if site.build == "internal" %}
| Services | Description | Service Path | 
|----------|--------|----------------|
| [Authentication Services](api_auth_service.html) | Responsible for authenticating the API requests. |
| [Authorization Services](api_authorization_service.html) | Responsible for authorization of API requests. | 
| [Entity Model Services](api_manage_data_model.html) | Similar to Entity App Model Services. But this must be sparingly and for reference only. | {TenantURL or ID}/api/entitymodelservice/ |
| [Entity App Model Services](api_app_manage_data_model.html) | Responsible for all the models related to data and governance data. | {TenantURL or ID}/api/entityappmodelService/ |
| [Entity App Services](api_app_service.html) | Responsible for the providing additional services for all the master data. | {TenantURL or ID}/api/entityappservice/ |
| [Bulk Entity Services](api_bulk_entity_service.html) | Responsible for providing services for all the bulk master data. |  {TenantURL or ID}/api/bulkentityservice/ |
| [Entity Govern Services](api_manage_govern_data.html) | Responsible for all the governance on the master data provided. | {TenantURL or ID}/api/entitygovernservice/ |
| [Model Govern Services](api_model_govern_service.html) | Responsible for handling governance related functionalities for models. | {TenantURL or ID}/api/modelgovernservice/ |
| [Entity Import Services](api_imp_entity_service.html) | Responsible for importing the data into Riversand Platform. | {TenantURL or ID}/api/entityImportservice/ |
| [Entity Export Services](api_exp_entity_service.html) | Responsible for exporting the data from Riversand Platform. | {TenantURL or ID}/api/entityexportservice/ |
| [Configuration Services](api_configuration_service.html) | Responsible for all the configurations for different applications or services to work on the data. | {TenantURL or ID}/api/configurationservice/ |
| [Notification Services](api_notfn_service.html) | Responsible for primarily sending email notifications for entity related tasks, attributes or task related summary. | {TenantURL or ID}/api/notificationservice/ |
| [Scheduler Services](api_sch_service.html) | Responsible for scheduling REST based tasks in Riversand Platform. | {TenantURL or ID}/api/schedulerservice/ |
| [Generic Object Manage Services](api_gen_obj_man_service.html) | Responsible for processing large amounts of input data by enabling the CRUD (Create, Read, Delete, and Update) operations on any data objects. This service is internal to Riversand Platform. | {TenantURL or ID}/api/genericobjectmanageservice/ |
| [Match Search Services](api_match_service.html) | Responsible for searching the entities based on match configuration details. | {TenantURL or ID}/api/matchservice/ |
| [Request Tracking Services](api_request_tracking_service.html) | Responsible for tracking the status of a request. | {TenantURL or ID}/api/requesttrackingservice/getStatus |
| [Event Services](api_event_service.html) | Responsible for all the event data that is generated in Riversand Platform. | {TenantURL or ID}/api/eventservice/ |
| [Bulk Event Services](api_bulk_event_service.html) | Responsible for deleting all the event data that is unwanted in Riversand Platform. | {TenantURL or ID}/api/bulkeventservices/ |
| [Bulk Request Services](api_bulk_request_service.html) | Responsible for deleting all the request objects that is unwanted in Riversand Platform. | {TenantURL or ID}/api/bulkrequestservices/ |
| [Bulk Generic Services](api_bulk_generic_service.html) | Responsible for performing scheduled tasks. | {TenantURL or ID}/api/rsGenericInboundService/process |
| [Ingest Metrics](api_ingest_metrics.html) | Responsible for collecting all the data points that occur or exist in the last one hour (aggregation period) and pushes the overall data to RDP. | {TenantURL or ID}/api/metricsService/ingestMetrics |
| [Get Metrics](api_get_metrics.html) | Responsible to collect updated Metrics counts. | {TenantURL or ID}/api/metricsService/get |
| [Binary Stream Object Services](api_binary_stream_service.html) | Responsible for managing the digital assets such as storing the metadata of the asset, uploading, and downloading assets in Riversand Platform. | {TenantURL or ID}/api/binarystreamobjectservice/ |
| [Asset Services](api_asset_services.html) | Responsible for managing Asset details. | {TenantURL or ID}/api/rsAssetService/ |
| [Entity Graph Services](api_entity_graph_service.html) | Responsible for linking or relating nodes in Riversand Platform. | {TenantURL or ID}/api/entitygraphservice/ |
| [Diagnostic Services](api_diag_services.html) | Responsible for enabling you to troubleshoot support related issues in Riversand Platform. | {TenantURL or ID}/api/diagnosticservice/ |
| [Admin Services](api_adminservice.html) | Services that are deployed to use the system efficiently. | {TenantURL or ID}/api/adminservice/ |
| [Troubleshooting Tips](api_troubleshooting_tips.html) | List of API's used for troubleshooting. | |
{% endif %}

{% if site.build == "external" %}
| Services | Description | Service Path | 
|----------|--------|----------------|
| [Authentication Services](api_auth_service.html) | Responsible for authenticating the API requests. |
| [Authorization Services](api_authorization_service.html) | Responsible for authorization of API requests. | 
| [Entity App Model Services](api_app_manage_data_model.html) | Responsible for all the models related to data and governance data. | {TenantURL or ID}/api/entityappmodelService/ |
| [Entity App Services](api_app_service.html) | Responsible for the providing additional services for all the master data. | {TenantURL or ID}/api/entityappservice/ |
| [Bulk Entity Services](api_bulk_entity_service.html) | Responsible for providing services for all the bulk master data. |  {TenantURL or ID}/api/bulkentityservice/ |
| [Entity Govern Services](api_manage_govern_data.html) | Responsible for all the governance on the master data provided. | {TenantURL or ID}/api/entitygovernservice/ |
| [Model Govern Services](api_model_govern_service.html) | Responsible for handling governance related functionalities for models. | {TenantURL or ID}/api/modelgovernservice/ |
| [Entity Import Services](api_imp_entity_service.html) | Responsible for importing the data into Riversand Platform. | {TenantURL or ID}/api/entityImportservice/ |
| [Entity Export Services](api_exp_entity_service.html) | Responsible for exporting the data from Riversand Platform. | {TenantURL or ID}/api/entityexportservice/ |
| [Configuration Services](api_configuration_service.html) | Responsible for all the configurations for different applications or services to work on the data. | {TenantURL or ID}/api/configurationservice/ |
| [Scheduler Services](api_sch_service.html) | Responsible for scheduling REST based tasks in Riversand Platform. | {TenantURL or ID}/api/schedulerservice/ |
| [Match Search Services](api_match_service.html) | Responsible for searching the entities based on match configuration details. | {TenantURL or ID}/api/matchservice/ |
| [Request Tracking Services](api_request_tracking_service.html) | Responsible for tracking the status of a request. | {TenantURL or ID}/api/requesttrackingservice/getStatus |
| [Bulk Generic Services](api_bulk_generic_service.html) | Responsible for performing scheduled tasks. | {TenantURL or ID}/api/rsGenericInboundService/process |
| [Ingest Metrics](api_ingest_metrics.html) | Responsible for collecting all the data points that occur or exist in the last one hour (aggregation period) and pushes the overall data to RDP. | {TenantURL or ID}/api/metricsService/ingestMetrics |
| [Get Metrics](api_get_metrics.html) | Responsible to collect updated Metrics counts. | {TenantURL or ID}/api/metricsService/get |
| [Binary Stream Object Services](api_binary_stream_service.html) | Responsible for managing the digital assets such as storing the metadata of the asset, uploading, and downloading assets in Riversand Platform. | {TenantURL or ID}/api/binarystreamobjectservice/ |
| [Asset Services](api_asset_services.html) | Responsible for managing Asset details. | {TenantURL or ID}/api/rsAssetService/ |
| [Entity Graph Services](api_entity_graph_service.html) | Responsible for linking or relating nodes in Riversand Platform. | {TenantURL or ID}/api/entitygraphservice/ |
| [Admin Services](api_adminservice.html) | Services that are deployed to use the system efficiently. | {TenantURL or ID}/api/adminservice/ |
| [Troubleshooting Tips](api_troubleshooting_tips.html) | List of API's used for troubleshooting. | | 
{% endif %}


{% if site.build == "ascend" %}
| Services | Description | Service Path | 
|----------|--------|----------------|
| [Authentication Services](api_auth_service.html) | Responsible for authenticating the API requests. |
| [Entity App Services](api_app_service.html) | Responsible for the providing additional services for all the master data. | {TenantURL or ID}/api/entityappservice/ |
| [Asset Services](api_asset_services.html) | Responsible for managing Asset details. | {TenantURL or ID}/api/rsAssetService/ |
{% endif %}