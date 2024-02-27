---
title: RelationshipsObject Schema
sidebar: rdp_sidebar
permalink: json_relationship_str.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

The **relationshipsObject** in the Riversand Platform is a JSON structure that describe the information about the relationship which is associated with the entity data. Each RelationshipsObject contains an array of relationships with the details of type, related entity information, and attributes. For more information, see [Relationship Model](api_relationship_data_model.html).

The following is the JSON schema of "relationshipsObject" which is part of general JSON schema:

{% highlight json %}
{% raw %}
"relationships": {
  <relationshipArray>, ---------> The object strucuture is described individually 
  ...more relationshipArrays...
}
{% endraw %}
{% endhighlight %}

## relationshipArray

Each RelationshipArray contains one or more relationshipObjects.

The following is the JSON schema of "relationshipsArray" which is part of "relationshipsObject":

{% highlight json %}
{% raw %}
"<relationshipName>": [
    <relationshipObject>, -----> The object structure is described individually
    ...more relationshipObjects...
  ]
{% endraw %}
{% endhighlight %}

## relationshipObjects

Each relationshipObject which is part of "relationshipArray" describes the properties of relationships, attributes associated with the entity data.

The following is the JSON schema of each "relationshipObject" which is part of "relationshipsObject":

{% highlight json %}
{% raw %}
{
  "id": <string>,
  "os": <string>,
  "osid": <string>,
  "ostype": <string>,
  "osctxpath": <string>,
  "src": <string>,
  "properties": {
    "direction": <string>,
    "relationshipType": <string>
  },
  "relTo": {
    "id": <string>,
    "type": <string>
  },
  <attributesObject>
}
{% endraw %}
{% endhighlight %} 

| Object |	Description	| 
|------------|----------------|----------|----------------|
| relationshipsObject | Contains array of relationships (relationshipArray).  | 
| &nbsp; >> relationship<br> &nbsp; &nbsp; Array | Contains multiple relationshipObjects. |
| &nbsp; &nbsp; >> relationship<br> &nbsp; &nbsp; &nbsp; Object | Contains information related to type, context, related entity information, and so on. For more information, see For more inforation, see [Authorize Relationships based on Ownership / Ownership Edit Data](api_auth_relationship.html) 


The following table lists the properties that form the "Relationshipsobject" schema:

| Property | Sub-property |	Description	| Type |
|-----------|--------|-----------|----------|----------------|
| id |  | Indicates the unique identifier of the relationship such as crosssell_relationshipModel.  | | String	| 
| os |  | Indicates the originating source. For example, businessRule, graph, inheritance, and so on. For more information, see [Entities using Originating Source Information](api_app_get_entity_scenario26.html) | String	| 
| osid |  | 	Indicates the originating source id. Created internally, a customer doesn’t have to send it while creating JSON for Import purpose. | String	| 
| ostype |  | Indicates the originating source. Created internally, a customer doesn’t have to send it while creating JSON for Import purpose. |  String	| 
| osctxpath |  | Indicates the originating source context path. | String	| 
| src |  | Indicates the external source name such as 'SAP'. Specifically used to indicate the data pool that gives the data. This property is required when, a customer is using match and merge feature. For more information, see [Trust-based Merge](/{{site.data.rdp_links_version.APP}}/rdp_feature_trust_matrix.html)  | 	String	| 
| properties  | | Indicates the properties of relationship objects. |String	| 
|  | direction | Indicates the direction of the relationship such as 'directional', 'both', and so on. For more information, see [Rule Context Mapping](api_rule_context_mapping_data_model.html) | String	| 
|  | relationshipType | Indicates all the details about the relationship type, such as hasImages, IsChildof, and so on. For more inforation, see [Create Entity with Multiple Relationships](api_app_create_entity_scenario7.html) | String	| 
| relTo |  | Indicates the details about the related domain in the relationship, such as thingdomainrelationshipmodels. For more information, see [Rule Context Mapping](api_rule_context_mapping_data_model.html). |  String	| 
|   | id | Indicates the identifier of the related entity in the relationship. |  String	| 
|  | type | Indicates the type of the associated entity, such as "product", "sku", and so on. | 
| attributesObject |  | Indicates the attributes of the relationship. | String	| 

