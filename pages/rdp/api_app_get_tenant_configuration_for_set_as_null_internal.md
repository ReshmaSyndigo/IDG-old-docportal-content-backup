---
title: Get Tenant Configuration Details for Do Not Inherit
sidebar: rdp_sidebar
permalink: api_app_get_tenant_configuration_for_set_as_null.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to disable or enable **allowSetAsNull** values for Do not inherit icon on application for specific tenant based on request.

## Scenario

To get the configuration details for tenant to disable or enable Do not inherit icon on application using the tenant "id". 

{% include callout.html content="**Note**:
By default Do not inherit is enabled for all the tenants, this configuration is specific to a tenant based on request.
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the attributes inside the data object. 
* Specify a non-empty value for attribute "alternatevendor" in "en-US" locale.
* Set the attribute "alternatevendor" as NULL in "de-DE" locale.
" type="primary" %}

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/dataplatform/api/configurationservice/get**
Headers: Content-Type: application/json
Body:
{
    "params": {
        "query": {
            "filters": {
                "typesCriterion": [
                    "tenantserviceconfig"
                ]
            },
            <span style="background-color: #FFFF00">"id": "rdwengg-az-qa8"</span>
        },
        "fields": {
            "attributes": [
                "_ALL"
            ]
        },
        "options": {
            "totalRecords": 1
        }
    }
}
</code>
</pre> 

If "id" is correct for a specific tenant, then you will get response with tenant configuration details. You can verify the tenant configuration details by searching "allowSetAsNull" value. By default "allowSetAsNull" value is **true** for all the tenants. To change the value and to disable **Do not inherit** icon, see [Configure Do Not Inherit Status](api_app_change_set_as_Null_status.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.