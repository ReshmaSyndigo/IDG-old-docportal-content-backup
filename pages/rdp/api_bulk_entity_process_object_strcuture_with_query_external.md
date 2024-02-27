---
title: Bulk Entity Object Structure for Process using Query
sidebar: rdp_sidebar
permalink: api_bulk_entity_process_object_structure_with_query.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section describes the Bulk Entity Object Structure for the **"process-query" taskType**. It is a JSON structure detailing the fields to "update" or "delete" the bulk entities. Broadly, the structure contains the following sub-objects:

* [Request Level Attributes](#request-level-attributes): Contains attributes required for processing the request.
* [params](#params): Contains any additional parameters required for processing data in the request.

This topic describes the Bulk Entity Object Structure using a sample scenario. 

## Scenario

{% if site.build == "internal" %}
Consider that you wish to update multiple "SKU" entities such as PoloMens Blue Shirt Large and PoloMens Blue Shirt Medium for the "cost" attribute. The attribute values must be specified according to the rules defined in the [Validation Model](api_validation_model.html#attributes). You can refer to [Data Type Summary](api_data_type_summary.html) for the **value ranges**. The following example demonstrates the sample JSON format to update these "SKU"s:
{% endif %}

{% if site.build == "external" %}
Consider that you wish to update multiple "SKU" entities such as PoloMens Blue Shirt Large and PoloMens Blue Shirt Medium for the "cost" attribute. The attribute values must be specified according to the rules defined in the Validation Model. You can refer to [Data Type Summary](api_data_type_summary.html) for the **value ranges**. The following example demonstrates the sample JSON format to update these "SKU"s:
{% endif %}

<pre><code>
{
  "params": {
    "taskType": "process-query",
    "operationType": "inboundService",
    "query": {
      "ids": [
        "PMB-001",
        "PMB-002"
      ],
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      }
    },
    "data": {
      "attributes": {
        "cost": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": 125.88
            }
          ]
        }
      }
    }
  }
}
</code></pre>

The following section describes the properties of the bulk object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set data for the [sample scenario](#scenario).

## Request Level Attributes

You can specify certain attributes such as hotline or migrate as applicable for the request:

{% if site.build == "internal" %}
| Property | Description | Type | Required |
|----------|-------------|------|----------|
| hotline | Indicates if this request must be prioritized, so that the tasks complete faster. It is recommended to use hotline sparingly and only if required. | String | No - Default value is false. |
| migrate | Indicates if the request must be executed in migration mode. See [Migration](/{{site.data.rdp_links_version.APP}}/rdp_feature_migration_data.html){:target="_blank"}. | String | No - Default value is false. |
{% endif %}

{% if site.build == "external" %}
| Property | Description | Type | Required |
|----------|-------------|------|----------|
| hotline | Indicates if this request must be prioritized, so that the tasks complete faster. It is recommended to use hotline sparingly and only if required. | String | No - Default value is false. |
| migrate | Indicates if the request must be executed in migration mode. | String | No - Default value is false. |
{% endif %}

## params

This object contains the details about "this" request type. The following table lists the properties of the params object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| taskType | Indicates the action to be carried out for this request. Set the value as "process-query" for "this" request.| String | Yes |
| operationType| Indicates whether the intended operation needs to be performed in the online or offline environment.| String | Yes |
| query | Indicates the array of group of query parameters that you are sending in the request for which the update or delete is carried out. | [query](#query) | Yes |
| data | Indicates the section for all business data, with which you want to update the current values.| [data](#data) | Yes |
| requestforvaluemapping | Indicates if the value mapping must be performed for the attributes or not. | String | No - Default value is false. |
| authorizationType | Indicates the type of authorization that must be applied during processing of request. Possible values are - accommodate, reject. If authorizationType value is not specified in the request, then value specified in the tenant configuration is considered. If the value is not specified in tenant configuration, then it is considered as "reject". See [Authorization Model](/{{site.data.rdp_links_version.APP}}/dm_prep_auth.html){:target="_blank"}.| String | No - Default value is reject. |

Data for sample [Scenario](#scenario): As you are sending the query to update the entities, set the following properties for **params** object:

| Property | Value | 
|----------|-------------|
| taskType | process-query |
| operationType | inboundService |

## query

This object contains the information about the query that you are sending in the request. It is an array of multiple queries that you are sending to update the entities with the new values. The following table lists the details of the query object:

| Property | Description | Type | Required |
|-----------|------------|-------|---------|
| Ids | Indicates an array of entity objects unique identifiers which you wish to update or delete.| String | Yes |
| filters -> typesCriterion | Indicates the entity object types that you wish to update. | String | Yes |
| data | attributes | Indicates the attributes that you wish to update. | String | Yes |

Data for sample [Scenario](#scenario): Set the following values for the query parameters:

| Property | Value | 
|----------|-------------|
| ids | PMB-001, PMB-002 |
| fiters -> typesCriterion | sku |
| data -> attributes | cost |

## data

This object contains the business data of the entity consisting of contexts, attributes, and relationship details. It includes the values which you wish to update for the entities. You can refer to **Data** section in the [Entity Object Structure](api_entity_object_structure.html) for its structural details.

Data for sample [Scenario](#scenario): As you wish to update the **cost** attribute for the bulk entities, set the following values:

| Property | Value | 
|----------|-------------|
| «AttrName» -> values -> [{value, source, timestamp}] | cost -> values -> [{internal, en-US, 125.88}] |