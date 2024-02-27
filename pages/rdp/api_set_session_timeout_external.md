---
title: Set Session Timeout for a Tenant
sidebar: rdp_sidebar
permalink: api_set_session_timeout.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/create** to set session timeout for a specific tenant. If the user is idle for the specified period of time in the application, then the session gets timed out and the user gets automatically logged out of the system. For more information, see [Session Timeout](/{{site.data.rdp_links_version.APPU}}/app_timeout.html){:target="_blank"}.

## Scenario

Consider that you wish to set the session timeout as one hour for a specific tenant. If the user is idle for more than an hour in the application, then the session gets timed out and the user gets automatically logged out of the system.
 
{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API **{TenantURL or ID}/api/configurationservice/create**. In the request, send the following details:
  
* **configObject**: Specify the "Id" and "type".
* **sessionMaxAgeMs**: Specify the duration of session timeout in milliseconds. In the below JSON, "sessionMaxAgeMs" is specified as "3600000".

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
        <span style="background-color: #FFFF00"> "sessionMaxAgeMs": 3600000 </span>
      }
    }
  }
}
</code>
</pre> 

## Response

If the configuration request is submitted successfully, then the following response is received from the platform:

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

Once the session timeout is configured for a specific tenant, raise a ticket to the Riversand support team to restart the auth service.

If you interact with the application after the configured idle time, then the application displays a message, "Your session has expired. Click here to login" as depicted in the below screenshot:

{% picture session-out.png alt="Session Timeout" %}

Verify the tenant configuration details:<br>
* You can verify "sessionMaxAgeMs" flag in the tenant configuration. For more information, see [Get Tenant Configuration Details](api_get_config_scenario3.html).

{% include callout.html content="**Note**: The session timeout is configured at the tenant level and applicable for all the IDPs. You cannot configure the session timeout separately at the IDP level.
" type="primary" %}

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.








  