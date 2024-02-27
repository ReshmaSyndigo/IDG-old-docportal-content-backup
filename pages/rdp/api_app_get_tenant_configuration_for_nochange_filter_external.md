---
title: Get Tenant Configurations to disable 'no change' Entity Data Filter
sidebar: rdp_sidebar
permalink: api_app_get_tenant_configuration_for_nochange_filter.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **configurationservice/get** to disable **isNoChangeFilterEnabled** value for importing 'no change' entity data on the platform for specific tenant based on request.

## Scenario

To get the configuration details for tenant to disable 'no change' filter on the application using the tenant "id". 

{% include callout.html content="**Note**:
By default, **isNoChangeFilterEnabled** flag is enabled for all the tenants and this configuration is specific to a tenant based on request.
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API **{TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get** to get the tenant configuration details.

<!-- In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the attributes inside the data object. 
* Set the flag "isNoChangeEvent" as 'true'.
" type="primary" %} -->

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get**
Headers: Content-Type: application/json
Body:
{
    "params": {
        "query": {
            "id": "rdwengg-az-dev2",
            "filters": {
                "typesCriterion": [
                    "tenantserviceconfig"
                ]
            }
        },
        "fields": {
            "attributes": [
                "_ALL"
            ]
        },
        "options": {
            "totalRecords": 100
        }
    }
}
</code>
</pre> 

If "id" is correct for a specific tenant, then you will get response with tenant configuration details. You can verify the tenant configuration details by searching "isNoChangeEvent" flag value. By default, "isNoChangeFilterEnabled" value is **false** for all the tenants. You can disable this filter globally, by changing the flag value as 'true'. For more information on profile configuration, see [Set-up Import Profile to disable 'No Change' Entity Data Filter](/{{site.data.rdp_links_version.ADM}}/si_import_profile_nochangerecords.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.