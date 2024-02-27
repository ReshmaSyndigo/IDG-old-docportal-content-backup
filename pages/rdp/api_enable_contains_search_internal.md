---
title: Enable Partial Value (Contains) Search Capability
sidebar: rdp_sidebar
permalink: api_enable_contains_search.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/create** to enable the partial value (contains) search capability in Search page, Entity Manage page, and Classification dialog box. This allows you to perform partial value search instead of the entire keyword in the reference data attribute Search bar by appending star * in the beginning of keyword. With the leading wildcard search capability, the application performs a search and displays all the data records that includes the partial value.

## Scenario

To enable the partial value search capability in Search page, Entity Manage page, and Classification dialog box. You can enable this option by setting **isLeadingWildcardSearchEnabled** flag to 'true' for a specific tenant based on the request. By default, "isLeadingWildcardSearchEnabled" is set to 'false' for all the tenants. 
 
{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API **{TenantURL or ID}/api/configurationservice/create**. In the request, send the following details:
  
* configObject: In the configObject object, specify the Id and type.
* Set **isLeadingWildcardSearchEnabled"** flag to "true".

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
                <span style="background-color: #FFFF00">"isLeadingWildcardSearchEnabled": true </span>
            }
        }
    }
}
</code>
</pre> 

## Response

If **isLeadingWildcardSearchEnabled** flag is set to 'true' for a specific tenant, then the following response is received from the tenant configuration:

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
* You can verify the "isLeadingWildcardSearchEnabled" flag in the tenant configuration. For more information, see [Get Tenant Configuration Details](api_get_config_scenario3.html).
* In the UI, you can verify that the "isLeadingWildcardSearchEnabled" option is enabled in Search page, Entity Manage page, and Classification dialog box. For more information see, [Filter entities using Wildcard for Reference Data Attributes](/{{site.data.rdp_links_version.APPU}}/dda_filter_refernce_data_attribute.html){:target="_blank"}.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.








  