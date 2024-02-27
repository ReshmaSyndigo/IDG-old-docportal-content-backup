## Request Level Attributes

You can specify certain attributes such as hotline or migrate as applicable for the request:

{% if site.build == "internal" %}
| Property | Description | Type | Required |
|----------|-------------|------|----------|
| hotline | Indicates if this request must be prioritized, so that the tasks complete faster. It is recommended to use hotline sparingly and only if required. | String | No - Default value is false. |
| migrate | Indicates if the request must be executed in migration mode or not. See [Migration](/{{site.data.rdp_links_version.APP}}/rdp_feature_migration_data.html){:target="_blank"}. | String | No - Default value is false. |
{% endif %}

{% if site.build == "external" %}
| Property | Description | Type | Required |
|----------|-------------|------|----------|
| hotline | Indicates if this request must be prioritized, so that the tasks complete faster. It is recommended to use hotline sparingly and only if required. | String | No - Default value is false. |
| migrate | Indicates if the request must be executed in migration mode or not. | String | No - Default value is false. |
{% endif %}

Data for sample [Scenario](#scenario): Set the following attributes at request level:

| Property | Value | 
|----------|-------------|
| hotline | true |

## params 

This object contains additional parameters required for processing the data in the request:

{% if site.build != "ascend" %}
| Property | Description | Type | Required |
|----------|-------------|------|----------|
| requestforvaluemapping | Indicates if the value mapping must be performed for the attributes or not. | String | No - Default value is false. |
| authorizationType | Indicates the type of authorization that must be applied during processing of request. Possible values are - accommodate, reject. If authorizationType value is not specified in the request, then value specified in the tenant configuration is considered. If the value is not specified in tenant configuration, then it is considered as "reject". See [Authorization Model](/{{site.data.rdp_links_version.APP}}/dm_prep_auth.html){:target="_blank"}.| String | No - Default value is reject. | 
| src | Indicates the external source name. | String | No |
| ignoreMergeMatrix | Indicates whether or not to ignore values from different data sources merged into one single record. By default, the value is false. | Boolean | No |
{% endif %}

{% if site.build == "ascend" %}
| Property | Description | Type | Required |
|----------|-------------|------|----------|
| requestforvaluemapping | Indicates if the value mapping must be performed for the attributes or not. | String | No - Default value is false. |
| authorizationType | Indicates the type of authorization that must be applied during processing of request. Possible values are - accommodate, reject. If authorizationType value is not specified in the request, then value specified in the tenant configuration is considered. If the value is not specified in tenant configuration, then it is considered as "reject". | String | No - Default value is reject. | 
| src | Indicates the external source name. | String | No |
| ignoreMergeMatrix | Indicates whether or not to ignore values from different data sources merged into one single record. By default, the value is false. | Boolean | No |
{% endif %}

Sample JSON structure which includes "externalSource" parameter:

{% highlight json %}
{
  "params": {
    "src": "SAP"
  },
  "entity": {}
}
{% endhighlight %}

Data for sample [Scenario](#scenario): Set the following properties for **params** object:

| Property | Value | 
|----------|-------------|
| requestforvaluemapping | true |
| authorizationType | accomodate |