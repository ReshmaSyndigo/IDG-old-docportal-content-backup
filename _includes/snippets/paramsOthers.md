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

This object contains additional parameters required for processing the data in the request:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| authorizationType | Indicates the type of authorization that must be applied during processing of request. Possible values are - accommodate, reject. If authorizationType value is not specified in the request, then value specified in the tenant configuration is considered. If the value is not specified in tenant configuration, then it is considered as "reject". See [Authorization Model](/{{site.data.rdp_links_version.APP}}/dm_prep_auth.html){:target="_blank"}.| String | No - Default value is reject. |