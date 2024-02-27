---
title: Understand Riversand JSON Object Schema
sidebar: rdp_sidebar
permalink: json_schema.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

Riversand provides multiple schemas of objects (JSON structures) that are exported from the platform to satisfy all the business use cases, speed up the implementation, and publish the lightweight JSON format.

Riversand JSON schema provides detail about the entity data and the business data such as attributes and relationships. The schema includes the sub-categories such as **attributesObject**, **relationshipObject**, and **contextObject**. This provides an understanding of the mapping of the attributes in the JSON to the application schema. You can understand the structure of the objects with the mapped attributes. For more information on the object structure, see [Entity Object Structure](api_entity_object_structure.html).

The following is the general JSON object schema:

{% highlight json %}
{% raw %}
{
  "id":<string>,
  "name": <string>,
  "type": <string>,
  "action": <string>, (Note: JSON-Exported data only)
  "properties": {
    "createdService": <string>,
    "createdBy": <string>,
    "createdDate": <datetime>,
    "modifiedService": <string>,
    "modifiedBy": <string>,
    "modifiedDate": <datetime>,
    "recordId": <number>,
    "rowNo": <number>,
    "thumbnailid": <string>,
    "action": <string> (Note: JSON-Imported data only)
  },
  "data": {
    <attributesObject>, ------> The object structure is described individually 
    <relationshipsObject>, ------> The object structure is described individually 
    "contexts": [
      <contextObject>, ------> The object structure is described individually 
      ...more contextObjects...
    ]
  }
}
{% endraw %}
{% endhighlight %}

Each sub-category such as 'attributesObject', 'relationshipsObject', and 'contextObject' that are enclosed in '<>' are described individually. The following table lists the JSON object schema of Attributes, Relationships, and Context which is part of Riversand JSON object schema:
 
| <strong>Schema (sub-category)</strong> | <strong>Description</strong> | 
| [attributeObjects](json_attributes_str.html) | The attribute object in the Riversand Platform is a JSON structure, that provides details about the properties of attributes that are mapped with the entity data. It describes the characteristics or keywords of fields (JSON schema fields or keywords). Broadly, the attribute object includes **Simple attributes** and **Nested attributes**.|
| [relationshipObjects](json_relationship_str.html) | The Relationship objects in the Riversand Platform is a JSON structure that describes the information about the relationship which is associated with the entity data. It contains relational properties specific to the relationship type for an entity. Each relationship object contains type, related entity information, and attributes. |
| [contextObjects](json_context_schema.html) | The **contextObject** in the Riversand Platform is a JSON structure, that provides details about all the business and organizational contexts that are linked to the Entity object. Each  **contextObject** contain array of contexts, attributesObject and relationshipsObject. |


The table lists the attributes that form the schema with the data types.

| Property | Sub-property | Description	| Type | Required |
|----------|--------------|-------------|------|----------|
| id |  | Indicates the unique identifier of the entity. Id is alpha-numeric with a maximum length of 128 characters. Platform generates one, if it is not provided by you. For more information, see [Get Entities](api_app_get_entity.html)	| String	| Mandatory | 
| name  |	 |Indicates the name of the entity. It can contain underscore(_), spaces, and alpha-numeric with a maximum length of 256 characters and can be duplicated. | String |	Mandatory |
| version  |	| Indicates the version # of the entity, which is maintained by the platform. |	String	| Mandatory |
| type |	| Indicates the type of entity. | String	| Optional |
| action (JSON Exported data) | | Indicates the deleted entity data. When the user exports the entities which are deleted, then the "action" property is "delete" by default. For example, when the user imports **SKU** entity which is deleted, then the response includes **"type": sku**, and **"action:delete"** which indicate the user exported the deleted entity.| String	|  | 
|  properties |	| Properties must be used to store simple name-value pairs, where the values are Absolute and do not change with context. Attributes must be used in scenarios where the value can have additional properties or context specificity. | Properties |	Mandatory |
| | createdService |	Indicates the name of the service that created this object. | Properties |	Optional |
|  | createdBy | Indicates the user who created this object. |  Properties | Optional |
|  | createdDate | Indicates the date and time when the object was created. | Properties |	Optional | 
| | modifiedService |  Indicates the name of the service that was last used to update the object such as "entityservice", "entityManageService", and so on. | Properties | Optional |
|  | modifiedBy |	Indicates the user who last updated the object. | Properties |	Optional |
|  | modifiedDate |	Indicates the date and time when the object was last updated. | Properties |	Optional |
|  | recordId |	Indicates the unique identifier of the record that is being imported. | Properties |	Optional |
|  | rowId | Indicates the row number of the excel sheet that is being imported. | Properties |	Optional |
|  | action (JSON Imported data) | Indicates the enitity to be deleted during JSON import. When the user wants to delete an entity while importing a JSON file, the action value is specified as "delete". For more information, see [Delete Entities using JSON Import](api_imp_delete_entity.html) 	| Properties |	Optional |
| data	|  | Indicates the section for all the business data | Data | Mandatory |