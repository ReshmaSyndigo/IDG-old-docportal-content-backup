---
title: Configure Do Not Inherit Status
sidebar: rdp_sidebar
permalink: api_app_change_set_as_null_status.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to disable or enable **allowSetAsNull** values for Do not Inherit icon on application for specific tenant based on request.

## Scenario

To get the configuration details for tenant to disable or enable Do not Inherit icon on application using the tenant "id". 

{% include callout.html content="**Note**:
By default Do not Inherit icon is enabled for all the tenants, this configuration is specific to a tenant based on request.
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {TenantURL or ID}:{Webport}/{Tenant ID}/api/configurationservice/create. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the attributes inside the data object. 
* Specify a non-empty value for attribute "alternatevendor" in "en-US" locale.
* Set the attribute "alternatevendor" as NULL in "de-DE" locale.

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/{Tenant ID}/api/configurationservice/create**
Headers: Content-Type: application/json
Body:
{
    "configObject": {
        "id": "tenant_rsglobalconfig",
        "type": "rsglobalconfig",
        "data": {
            "jsonData": {
                <span style="background-color: #FFFF00">"allowSetAsNull": false</span>
            }
        }
    }
}
</code>
</pre> 

## Response

If the "allowSetAsNull" value is changed correctly for specific tenant, then the following response is received from tenant configuration:

<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "216ce2b1-2490-4d03-8de7-493d4c734529"
    },
    "response": {
        <span style="background-color: #FFFF00">"status": "success",</span>
        "statusDetail": {
            "messages": [
                {
                    <span style="background-color: #FFFF00">"message": "Submitted rsglobalconfig for create with Id tenant_rsglobalconfig. Check after some time",</span>
                    "messageCode": "I0011",
                    <span style="background-color: #FFFF00">"messageType": "success",</span>
                    "messageParams": [
                        "rsglobalconfig",
                        "create",
                        "tenant_rsglobalconfig"
                    ]
                }
            ]
        },
        "totalRecords": 0
    }
}
</code></pre> 

Verify the tenant configuration details:<br>
* You can look for "allowSetAsNull" value in tenant configuration, see [Get Tenant Configuration Details for Do not Inherit](api_app_get_tenant_configuration_for_set_as_null.html). The value will change to false based on your updates.
* It is recommended after enabling or disabling Do not Inherit icon, do bump up version or clear cache.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.