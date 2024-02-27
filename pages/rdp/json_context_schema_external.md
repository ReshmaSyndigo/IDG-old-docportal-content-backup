---
title: ContextObject Schema
sidebar: rdp_sidebar
permalink: json_context_schema.html
folder: rdp
type: Description
---

{% include snippets/disclaimer_internal.md %} 

The **contextObject** in the Riversand Platform is a JSON structure that details all the business and organizational contexts that are linked to the Entity object. Each  **contextObject**  contain array of contexts, attributesObject and relationshipsObject. 
 
The following is the JSON schema of "contextObject" which is part of general JSON schema:
 
{% highlight json %}
{% raw %}
{
<contextId>, -------> The object structure is described individually
  "os": <string>,
  "osid": <string>,
  "ostype": <string>,
  "osctxpath": <string>,
<attributesObject>,
<relationshipsObject>
}
{% endraw %}
{% endhighlight %}
 
## contextId
 
The contextId contains one or more **contextTypePathPairs**. 
 
{% highlight json %}
{% raw %}
"context": {
<contextTypePathPair>, -------> The object structure is described individually
  ...more contextTypePathPairs...
}
{% endraw %}
{% endhighlight %}
 
## contextTypePathPair
 
The contextTypePathPair describes the type and path of the context associated with the entity. For example, "country": "United Kingdom", "channel": "United Kingdom Mobile", and so on. For more information, see [Data Coalesce](api_data_coalesce.html).
 
{% highlight json %}
{% raw %}
"<contextType>": "<contextPath>"
{% endraw %}
{% endhighlight %}
 
The following table lists the properties that form the "Contextsobject" schema:

| Property |  Description | Type | Required |
|-----------|-----------------|----------|----------------|
| contextObjext | Contains array of group of context, Attributes & Relationship objects. | data | Mandatory  |
| contextTypePathPair | Contains the type and path of the context associated with the entity. | data | Mandatory  |
| contextType:contextPath | Indicates the pair of type and path of the context such as "country": "United Kingdom", "channel": "United Kingdom Mobile", and so on. For more information, see [Get Context of Entity](api_app_get_entity_scenario25.html). | String | Mandatory |
| os | Indicates the originating source. For example, businessRule, graph, inheritance, and so on. For more information, see [Entities using Originating Source Information](api_app_get_entity_scenario26.html) | String | Optional |
| osid |  Indicates the originating source id such as 'entity_entityDefaultValuesModel', 'sku_entityDefaultValuesModel',and so on. Created internally, a customer doesn’t have to send it while creating JSON for Import purpose. | String  | Optional |
| ostype | Indicates the originating source. Created internally, a customer doesn’t have to send it while creating JSON for Import purpose. |  string   |  Optional  |
| osctxpath | Indicates the originating source context path. | string  | Optional |
| attributesObject |  Indicates the attributes of the entity. | data | Optional |
| relationshipsObject | Indicates the relationships of the entity. | data | Optional |
