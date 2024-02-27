---
title: Disable Null Option from the Attributes Drop-down in Entity Excel
sidebar: rdp_sidebar
permalink: api_remove_null_option_entity_excel.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/create** to disable "Null" option from the attribute drop-down for the entities in excel file.

## Scenario

To disable "Null" option from the attribute drop-down for the entities in excel file. You can disable this option by setting **allowSetAsNull** flag to 'false' for a specific tenant based on the request. By default, "allowSetAsNull" is set to 'true' for all the tenants. 
 
{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API **{TenantURL or ID}/api/configurationservice/create**. In the request, send the following details:
  
* configObject: In the configObject object, specify the Id and type.
* Set **allowSetAsNull** flag to "false".

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
        <span style="background-color: #FFFF00"> "allowSetAsNull": false </span>
      }
    }
  }
}
</code>
</pre> 

## Response

If **allowSetAsNull** flag is set to 'false' for a specific tenant, then the following response is received from the tenant configuration:

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
* You can verify the "allowSetAsNull" flag in the tenant configuration. For more information, see [Get Tenant Configuration Details](api_get_config_scenario3.html).
* You can verify that the "Null" option is disabled in the attributes drop-down by downloading the excel file from UI. For more information see, [Download Entities in Excel File](/{{site.data.rdp_links_version.APPU}}/srch_download_upload_entities_excel.html){:target="_blank"}.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.








  