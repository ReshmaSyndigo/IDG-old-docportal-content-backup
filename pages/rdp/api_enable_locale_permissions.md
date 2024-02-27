---
title: Enable Locale Permissions for a Role
sidebar: rdp_sidebar
permalink: api_enable_locale_permissions.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/update** to enable the locale permissions for a particular role.  

## Scenario

Consider that you wish to provide the write permission for the "Description" attribute in "German" locale (de-DE). You can enable the locale permissions for a specific role by setting **isLocaleAuthEnabled** flag to "true". For more information, see [Manage Locales](/{{site.data.rdp_links_version.APPU}}/loc_about_localization.html){:target="_blank"}.
 
{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API **{TenantURL or ID}/api/configurationservice/update**. In the request, send the following details:
  
* configObject: In the configObject object, specify the Id and type.
* Set **isLocaleAuthEnabled** flag to "true".

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/{Tenant ID}/api/configurationservice/update**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "entityService_rsserviceconfig",
    "type": "rsserviceconfig",
    "data": {
      "jsonData": {
        "logLevel": "info",
        "defaultBatchSize": 1000,
        <span style="background-color: #FFFF00"> "isLocaleAuthEnabled": "true", </span>
        "defaultMaxRecords": 2000
      }
    }
  }
}
</code>
</pre> 

## Response

If the above request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "17a288fb-b6bb-4b15-be0b-cb0771099932",
    "taskId": "17a288fb-b6bb-4b15-be0b-cb0771099932"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted rsserviceconfig for update with Id entityService_rsserviceconfig. Check after some time",
          "messageCode": "I0013",
          "messageType": "success",
          "messageParams": [
            "rsserviceconfig",
            "update",
            "entityService_rsserviceconfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.








  