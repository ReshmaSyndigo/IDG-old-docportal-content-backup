---
title: Get Entities
sidebar: rdp_sidebar
permalink: api_app_get_entity.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get entities:

{% if site.build == "internal" %}
* [Get Entities by Type](api_app_get_entity_scenario1.html)
* [Get Entities using Multiple Types](api_app_get_entity_scenario2.html)
* [Get Entities using Multiple Ids](api_app_get_entity_scenario3.html)
* [Get Entities using Name](api_app_get_entity_scenario4.html)
* [Get All Attributes of Entities](api_app_get_entity_scenario5.html)
* [Get Specific Attributes of Entities](api_app_get_entity_scenario6.html)
* [Get All Relationships of an Entity](api_app_get_entity_scenario7.html)
* [Get Nested Attribute of an Entity](api_app_get_entity_scenario8.html)
* [Get Specific Relationships of an Entity](api_app_get_entity_scenario9.html)
* [Get Entities with Context Attributes in Value Context](api_app_get_entity_scenario12.html)
* [Get Entities Sorted in Descending Order](api_app_get_entity_scenario13.html)
* [Get Entities Sorted in Ascending Order](api_app_get_entity_scenario14.html)
* [Get Entities using Properties Criteria](api_app_get_entity_scenario15.html)
* [Get Entities using Properties Criterion - contains Wildcard(*)](api_app_get_entity_scenario37.html)
* [Get Entities using Keyword Criterion](api_app_get_entity_scenario17.html)
* [Get Entities using Keyword Criterion - contains Wildcard(*)](api_app_get_entity_scenario38.html)
* [Get Entities using Attribute Criterion - contains String](api_app_get_entity_scenario18.html)
* [Get Entities using Attribute Criterion - exact String](api_app_get_entity_scenario19.html)
* [Get Entities using Attribute Criterion - contains Integer](api_app_get_entity_scenario20.html)
* [Get Entities using Attribute Criterion - equals Wildcard(*)](api_app_get_entity_scenario36.html)
* [Get Entities using Attribute Criterion - "ALL" Attributes](api_app_get_entity_scenario39.html)
* [Get Entities using Single Relationship Criterion](api_app_get_entity_scenario21.html)
* [Get Entities using Multiple Relationship Criteria](api_app_get_entity_scenario22.html)
* [Get Entities Pagewise](api_app_get_entity_scenario23.html)
* [Scroll Support in Entity App Service](api_app_scroll_support.html)
* [Get Entity History](api_app_get_entity_scenario28.html)
* [Get Context Of Entity](api_app_get_entity_scenario25.html)
* [Get Entities using Originating Source Information](api_app_get_entity_scenario26.html)
* [Get Entities with NULL Attribute](api_app_get_entity_scenario27.html)
* [Get Entities with Mapped Values for Size Attribute](api_app_get_mapped_self.html)
* [Get Related Entities](api_app_get_related.html)
* [Get Draft Entities by Type](api_app_get_draft_entities.html)
* [Get Tenant Configuration Details for Do not inherit](api_app_get_tenant_configuration_for_set_as_null.html)
* [Get Valid Path Attribute Value](api_val_path_attr.html)
* [Get Root Node Mismatch Value for Path Attribute](api_val_root_node_path_attr.html)
* [Get Entity with Non-Leaf Node Value for Path Attribute](api_val_leaf_node_path_attr.html)
{% endif %}

{% if site.build == "external" %}
* [Get Entities by Type](api_app_get_entity_scenario1.html)
* [Get Entities using Multiple Types](api_app_get_entity_scenario2.html)
* [Get Entities using Multiple Ids](api_app_get_entity_scenario3.html)
* [Get Entities using Name](api_app_get_entity_scenario4.html)
* [Get All Attributes of Entities](api_app_get_entity_scenario5.html)
* [Get Specific Attributes of Entities](api_app_get_entity_scenario6.html)
* [Get All Relationships of an Entity](api_app_get_entity_scenario7.html)
* [Get Nested Attribute of an Entity](api_app_get_entity_scenario8.html)
* [Get Specific Relationships of an Entity](api_app_get_entity_scenario9.html)
* [Get Entities with Context Attributes in Value Context](api_app_get_entity_scenario12.html)
* [Get Entities Sorted in Descending Order](api_app_get_entity_scenario13.html)
* [Get Entities Sorted in Ascending Order](api_app_get_entity_scenario14.html)
* [Get Entities using Properties Criteria](api_app_get_entity_scenario15.html)
* [Get Entities using Properties Criterion - contains Wildcard(*)](api_app_get_entity_scenario37.html)
* [Get Entities using Keyword Criterion](api_app_get_entity_scenario17.html)
* [Get Entities using Keyword Criterion - contains Wildcard(*)](api_app_get_entity_scenario38.html)
* [Get Entities using Attribute Criterion - contains String](api_app_get_entity_scenario18.html)
* [Get Entities using Attribute Criterion - exact String](api_app_get_entity_scenario19.html)
* [Get Entities using Attribute Criterion - contains Integer](api_app_get_entity_scenario20.html)
* [Get Entities using Attribute Criterion - equals Wildcard(*)](api_app_get_entity_scenario36.html)
* [Get Entities using Attribute Criterion - "ALL" Attributes](api_app_get_entity_scenario39.html)
* [Get Entities using Single Relationship Criterion](api_app_get_entity_scenario21.html)
* [Get Entities using Multiple Relationship Criteria](api_app_get_entity_scenario22.html)
* [Get Entities Pagewise](api_app_get_entity_scenario23.html)
* [Get Entity History](api_app_get_entity_scenario28.html)
* [Get Context Of Entity](api_app_get_entity_scenario25.html)
* [Get Entities using Originating Source Information](api_app_get_entity_scenario26.html)
* [Get Entities with NULL Attribute](api_app_get_entity_scenario27.html)
* [Get Entities with Mapped Values for Size Attribute](api_app_get_mapped_self.html)
* [Get Related Entities](api_app_get_related.html)
* [Get Valid Path Attribute Value](api_val_path_attr.html)
* [Get Root Node Mismatch Value for Path Attribute](api_val_root_node_path_attr.html)
* [Get Entity with Non-Leaf Node Value for Path Attribute](api_val_leaf_node_path_attr.html)
{% endif %}

{% if site.build == "ascend" %}
* [Get Entities by Type](api_app_get_entity_scenario1.html)
* [Get Entities using Multiple Types](api_app_get_entity_scenario2.html)
* [Get Entities using Multiple Ids](api_app_get_entity_scenario3.html)
* [Get Entities using Name](api_app_get_entity_scenario4.html)
* [Get All Attributes of Entities](api_app_get_entity_scenario5.html)
* [Get Specific Attributes of Entities](api_app_get_entity_scenario6.html)
* [Get All Relationships of an Entity](api_app_get_entity_scenario7.html)
* [Get Nested Attribute of an Entity](api_app_get_entity_scenario8.html)
* [Get Specific Relationships of an Entity](api_app_get_entity_scenario9.html)
* [Get Entities with Context Attributes in Value Context](api_app_get_entity_scenario12.html)
* [Get Entities Sorted in Descending Order](api_app_get_entity_scenario13.html)
* [Get Entities Sorted in Ascending Order](api_app_get_entity_scenario14.html)
* [Get Entities using Properties Criteria](api_app_get_entity_scenario15.html)
* [Get Entities using Properties Criterion - contains Wildcard(*)](api_app_get_entity_scenario37.html)
* [Get Entities using Keyword Criterion](api_app_get_entity_scenario17.html)
* [Get Entities using Keyword Criterion - contains Wildcard(*)](api_app_get_entity_scenario38.html)
* [Get Entities using Attribute Criterion - contains String](api_app_get_entity_scenario18.html)
* [Get Entities using Attribute Criterion - exact String](api_app_get_entity_scenario19.html)
* [Get Entities using Attribute Criterion - contains Integer](api_app_get_entity_scenario20.html)
* [Get Entities using Attribute Criterion - equals Wildcard(*)](api_app_get_entity_scenario36.html)
* [Get Entities using Attribute Criterion - "ALL" Attributes](api_app_get_entity_scenario39.html)
* [Get Entities using Single Relationship Criterion](api_app_get_entity_scenario21.html)
* [Get Entities using Multiple Relationship Criteria](api_app_get_entity_scenario22.html)
* [Get Entities Pagewise](api_app_get_entity_scenario23.html)
* [Get Entities with NULL Attribute](api_app_get_entity_scenario27.html)
* [Get Entities with Mapped Values for Size Attribute](api_app_get_mapped_self.html)
* [Get Related Entities](api_app_get_related.html)
{% endif %}

{% include callout.html content="**Note**: All types of search are case-insensitive.
" type="primary" %}

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.getappentity}}

**Parameters**: The following table lists the parameters of the JSON request to get an entity or collection of entities:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting an entity or collection of entities. |
| query | id  | No | Indicates entity unique identifier. |
| query | name  | No | Indicates entity name. |
| query | ids  | No | Indicates an array of entity unique identifiers. |
| query | contexts  | No | Indicates an array of contexts. |
| query | contexts -> list | No | Indicates where the entity belongs to. |
| query | contexts -> country | No | Indicates the country the current entity is linked to. |
| query | contexts -> channel | No | Indicates the channel the current entity is linked to.|
| query | valueContexts  | No | Indicates an array of source and locale. |
| query | valueContexts -> source  | No | Indicates the source of the entity. |
| query | valueContexts -> locale  | No | Indicates the locale of the entity. |
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> attributesCriterion -> <<AttrName>> | No | Indicates the name of the attribute. |
| query | filters -> attributesCriterion -> <<AttrName>> -> <<Operator>> : <<AttrValue>> | No | Indicates the type of operator to be used for comparing the AttrValue. Possible values - "eq" (equal to), "gte" (greater than or equal to), and "lte" (less than or equal to). |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> -> properties -> <<Originating Source Information Name>> -> <<Operator>> : <<Originating Source Information Value>> | No | Indicates the originating source information of the attribute value | 
| query | filters -> relationshipsCriterion | No | Indicates an array of relationships names and attribute values that are used to filter the results. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> | No | Indicates the name of the relationship. |
| query | filters -> relationshipsCriterion -> <<RelationshipName>> -> attributes| No | Indicates an array of relationship attributes. You can use the same filter criteria as applicable for attributes.|
| query | filters -> relationshipsCriterion -> <<RelationshipName>> -> properties -> <<Originating Source Information Name>> -> <<Operator>> : <<Originating Source Information Value>> | No | Indicates the originating source information of the relationship | 
| query | filters -> typesCriterion | No | Indicates a comma separated list of entity types. |
| query | keywordsCriterion -> keywords | No | Indicates the keywords to be used to filter the results.|
| query | keywordsCriterion -> operator | No | Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND"|
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. |
| fields | fields -> relationships | No | Indicates the relationships to be returned in the result. |
| fields | fields -> relationshipAttributes | No | Indicates a comma separated list of relationship attribute to be returned in the result. |
| sort | sort -> attributes | No | Indicates an array of attributes that is used to sort the results. Results are sorted based on the order specified. |
| sort | sort -> attributes -> <<AttrName>> : <<SortOrder>> | No | Indicates attribute and the sort order. Possible values are _DESC and _ASC. |
| sort | sort -> attributes -> sortType  | No | Indicates the sort type such as "_DATETIME", "_DECIMAL", or "_INTEGER". If sort type is not specified, then records are sorted using "string" type. |
| options | options -> maxRecords | No | Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 2000.|

{% include callout.html content="**Notes**: 
* **_ALL** keyword can be substituted for individual records. Example: In typesCriterion, you can specify ALL or sku or product. 
* **_ALL** in the attributesCriterion or relationshipsCriterion fields implies all attributes or relationships that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
* If you do not specify any attributes or relationships in fields, then only basic entity information such as entity Id and entity type are returned in the response. 
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response | entities | List of entity objects that matched the search criteria. See [Entity Object Structure](api_entity_object_structure.html), for more information. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of entity objects that matched the search criteria.|

{% include callout.html content="**Note**: If you do not specify any attributes or relationships in fields, then only basic entity information such as entity Id and entity type are returned in the response. 
" type="primary" %}

## Example

The following example demonstrates a sample request and response to get a "sku" entity using Id 

<pre><code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
{
    "params": {
        "query": {
            "filters": {
                "typesCriterion": [
                    "sku"
                ]
            },
            "id": "e2"
        }
    }
}
}
</code></pre>

**Response**: 
<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "b463dd8f-77e8-4c0d-857d-099c5bed05f3",
        "maxRecords": 10
    },
    "response": {
        "entities": [
            {
                "id": "e2",
                "name": "Polo Mens Shirt Blue_XLarge",
                "type": "sku"
            }
        ],
        "status": "success",
        "totalRecords": 1
    }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.