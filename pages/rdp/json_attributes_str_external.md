---
title: AttributesObject Schema
sidebar: rdp_sidebar
permalink: json_attributes_str.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

The **attributesObject** in the Riversand Platform is a JSON structure that details the properties of attributes that are mapped to the entity data. It includes **Simple attributes** and **Nested attributes**. It contains the details of the UOM and the relationship of an entity. 

The following is the JSON schema of "attributesObject" which is part of general JSON schema:

{% highlight json %}
{% raw %}
"attributes": {
  <simpleAttribute> OR <nestedAttribute>,
  ...more simpleAttributes or nestedAttributes...
}
{% endraw %}
{% endhighlight %}

## Simple Attribute 

Simple Attribute describes the atomic attributes of an entity such as Product ID and Product Description. An object which includes all the details about an attribute such as value, locale, and so on. The attribute contains one or more **valueObjects**. For more information, see [Get Attributes of Entities](api_app_get_entity_scenario6.html)

The following is the JSON schema of Simple attribute in the "attributesObject":

{% highlight json %}
{% raw %}
"<attributeName>": {
  "values": [
    <valueObject>,
    ...more valueObjects...
  ]
}
{% endraw %}
{% endhighlight %}

## Nested Attribute 

Nested attributes are a collection of simple attributes or a group of objects which includes values which is part of another JSON object. This can have any number or levels of nesting. It contains one or more **rowObjects**.

The following is the JSON schema of Nested attribute in the "attributesObject":


{% highlight json %}
{% raw %}
"<attributeName>": {
  "group": [
    <rowObject>,
    ...more rowObjects...
  ]
}
{% endraw %}
{% endhighlight %}

The following table lists the attributes that form the schema:

| Property |	Description	| Type |	Required |
|-----------|-----------------|----------|----------------|
| attributes | Indicates the attributes of the entity which can be simple or nested attributes. For more information, see [Get Entities using Attribute Criterion](api_app_get_entity_scenario39.html) | data | Mandatory |
| attributeName | Indicates the collection of attributes that contains all the details about an attribute such as value, locale, and so on. For example, description, price, threadCount, and so on|	attribute	| Mandatory |
| values | Indicates the collection of Value Objects which contains the attribute value and all additional contextual information about the value. This is typically referred to as Simple Attributes. | data | Mandatory | 
| value/valueObjects | Value Objects contain the values of the simple, nested, and relationship attributes of an entity. For more information, see [rowObjects and valueObjects](#schema-of-rowobjects-and-valueobjects) | valueObjects | Mandatory | 
|  group/rowObjects | Indicates the typical structure of Nested Attributes. This is a set of attributes grouped together which can have any number or levels of nesting. | rowObjects | Mandatory | 

## Schema of rowObjects and valueObjects

The simple attributes and nested attribute of "attributeObject" includes multiple row objects and valueObjects. 

##### rowObjects

The rowObjects contains set of attributes grouped together which can have any number or levels of nesting.

The following is the JSON schema of simple object with rowObjects:

{% highlight json %}
{% raw %}
{
  <simpleAttribute> OR "value": "_NULL",
  "id": <string>,
  "locale": <string>,
  "source": <string>,
  "os": <string>,
  "osid": <string>,
  "ostype": <string>,
  "osctxpath": <string>,
  "src": <string>
}
{% endraw %}
{% endhighlight %}

##### valueObjects

The valueObjects contains the values of the simple, nested, and relationship attributes of an entity. It also provides the additional contextual information about the value such as id, locale, source, and so on.
 
The following is the JSON schema of valueObjects:

{% highlight json %}
{% raw %}
{
  "id": <string>,
  "locale": <string>,
  "source": <string>,
  "os": <string>,
  "osid": <string>,
  "ostype": <string>,
  "osctxpath": <string>,
  "src": <string>,
  "value": <primitive>,
  "invalidValue": <primitive>,
  "properties": {
    "referenceDataIdentifier": <string>,
    "refIdPath": <string>,
    "referenceData": <string>
  }
  "uom": <string>,
  "invalidUom": <primitive>,
  "properties": {
    "uomIdentifier": <string>,
    "uomData": <string>
  }
}
{% endraw %}
{% endhighlight %}

The following are the list of properties of rowObjects and valueObjects:

| Property |	Sub-property | Description	| Type |	Required |
|------------|----------------|----------|----------------|
|id |  | Indicates the unique identifier of the entity. Id is alpha-numeric with a maximum length of 128 characters. | String	| Optional |
| locale | |  Indicates the locale of attribute value such as en-US, de-DE, and so on. For more information, see [Locales Model](api_locale_data_model.html) | string | Mandatory | 
| source | |  Indicates the source of an attribute value. The source can be external data or internal systems where the data originates from such as PLM, ERP, CRM systems and so on.  | string | Mandatory | 
| os |  | Indicates the originating source. For example, businessRule, graph, inheritance, and so on. For more information, see [Entities using Originating Source Information](api_app_get_entity_scenario26.html) | String	| Optional |
| osid | | 	Indicates the originating source Id such as 'entity_entityDefaultValuesModel', 'sku_entityDefaultValuesModel',and so on. Created internally, a customer doesn’t have to send it while creating JSON for Import purpose. | String	| Optional |
| ostype | | Indicates the originating source entity/model type such as 'entityDefaultValuesModel'.  | string. Created internally, a customer doesn’t have to send it while creating JSON for Import purpose. | optional | 
| osctxpath | |  Indicates the originating source context path. | string  | Optional |
| src |  | Indicates the external source name such as 'SAP'. Specifically used to indicate the data pool that gives the data. This property is required when, a customer is using match and merge feature. For more information, see [Trust-based Merge](/{{site.data.rdp_links_version.APP}}/rdp_feature_trust_matrix.html) | String | Optional |
| value |  | Indicates the actual attribute value of the entity. For example, the value for "size" attribute is "Small", "Large", and so on. For more information, [Get Entities with Mapped Values for Size Attribute](api_app_get_mapped_self.html) | value | Mandatory |
| invalidValue | |  Indicates the invalid attribute value for the entity. | value | Optional |
| properties |  | Indicates the properties of the value objects such as referenceDataIdentifier, refIdPath, and referenceData.  | Properties | Optional |
|  | referenceDataIdentifier | Indicates the unique reference data identifier. For example, when user wants to get "SKU" and "Product" entities with the exact string "red" in attribute "color", then the value for reference data **color** is WRD, ABL, and so on. For more information, see [Get Entities using Attribute Criterion - exact String](api_app_get_entity_scenario19.html). | string | Optional |
|  | refIdPath | Indicates the path of the reference. For **productclassification** reference, the rerefIdPath specifies the path of reference such as "productclassificationroot>>apparelnfootwear>>apparelnfootwearaccessories>>bags". | String  | Optional |
| | referenceData | Indicates the unique combination of reference and internal referenceId. For **productclassification** reference, the value is **classification/bag**. | string | Optional |
| uom |  | Indicates the Unit of Measure for this attribute value. For more information, see [Get Entities based on Multiple Valued UOM](api_sch_uom_multiple_value.html) | string | Mandatory  |
| uom |  | Indicates the properties of UOM objects such as uomIdentifier, uomData, and so on. | properties | Mandatory (If attribute type is UOM) |
| | uomIdentifier | Indicates the unique UOM identifier such as m, km, inch, and so on. | String | Optional |
| | uomData |  Indicates the combination of Unit of Measure with the uomid. For UOM "inch", the value is **uomLength/bbf6d493-3826-44f1-8344-49f738875699**. For more information, see [Get Entities based on UOM Range](api_sch_uom_range.html). | 



