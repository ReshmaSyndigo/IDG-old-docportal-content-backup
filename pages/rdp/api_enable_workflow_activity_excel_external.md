---
title: Enable Next Generation Workflow
sidebar: rdp_sidebar
permalink: api_enable_workflow_activity_excel.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

{% include callout.html content="**Note**: You must perform the workflow migration before enabling the next generation workflow.
" type="primary" %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/configurationservice/create** to enable the next generation workflow. 

## Scenario

To enable the next generation workflow, you must set **useLegacyWorkflow** flag to 'false' for a specific tenant. For more information see, Workflow Platform Enhancement in [2022.R1 Preview Release Notes](/{{site.data.rdp_links_version.RN}}/rn_s2022_r1_preview.html){:target="_blank"} and [Migrate to Next Generation Workflow](/{{site.data.rdp_links_version.APP}}/rdp_workflow_migration.html){:target="_blank"}.

{% include snippets/header.html %}

## Request

To create the above configuration, use the REST API **{TenantURL or ID}/api/configurationservice/create**. In the request, send the following details:
  
* configObject: In the configObject object, specify the Id and type.
* Set **useLegacyWorkflow** flag to "false".

<pre>
<code>
POST **{TenantURL or ID}:{Webport}/{Tenant ID}/api/configurationservice/create**
Headers: Content-Type: application/json
Body:
{
  "configObject": {
    "id": "entityGovernService_rsserviceconfig",
    "type": "rsserviceconfig",
    "properties": {
      "createdService": "configurationManageService",
      "createdBy": "mary.jane@riversand.com",
      "modifiedService": "configurationManageService",
      "modifiedBy": "mary.jane@riversand.com",
      "createdDate": "2021-11-09T02:29:14.649-0600",
      "modifiedDate": "2021-11-09T02:29:14.649-0600"
    },
    "data": {
      "jsonData": {
        "logLevel": "info",
        <span style="background-color: #FFFF00"> "useLegacyWorkflow": false </span>
      }
    }
  }
}
</code>
</pre> 

## Response

If the configuration create request is submitted successfully, then the following response is received from create configuration API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e79f8862-97dd-4909-b471-b375cfa8d8e7",
    "taskId": "e79f8862-97dd-4909-b471-b375cfa8d8e7"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted rsserviceconfig for create with Id entityGovernService_rsserviceconfig. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "rsserviceconfig",
            "create",
            "entityGovernService_rsserviceconfig"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the tenant configuration details:<br>
* You can verify the **useLegacyWorkflow** flag in (entityGovernService → serviceSpecific → useLegacyWorkflow") in the tenant configuration. For more information, see [Get Tenant Configuration Details](api_get_config_scenario3.html).
* You can verify the workflow activity columns such as **Activity Type**, **Next Activity Names**, **Default Action**, and **Export Profile(s)** columns for the next generation workflow in the "Workflow Activity Definition" sheet. For more information see, [Download Workflow Model File](/{{site.data.rdp_links_version.APP}}/work_download.html){:target="_blank"}. Note that, these columns are not applicable for the legacy workflow.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.







  

