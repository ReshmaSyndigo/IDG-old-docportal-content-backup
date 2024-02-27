---
title: Deploy Tenant Seed Data through API
sidebar: rdp_sidebar
permalink: api_ci_cd_for_tenant_seed_data.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Tenant Seed data is base/seed data comprising of Data models, Configurations around UI, Integrations, Schedules, Notifications, and so on, Reference data primarily maintained in RS Excel Data, RS Excel Data model, and JSON files. Loading the Tenant Seed in the System is only supported by trusted clients (Build system and UI). Platform related configurations are loaded by the build system, and it is inaccessible for customers to load tenant seed data through a Continuous integration mechanism. Customers can load Seed through the Admin Dashboard in UI and deploy them in the System.

Riversand Platform supports APIs to deploy base/seed data. These APIs are in Tenant scope along with Tenant Artifact Server dedicated for the customer. Continuous Integration or Continuous Deployment (CI/CD) can use these APIs to deploy the seed data.

{% include callout.html content="**Notes**:
* Zip can be loaded which contains JSON and Excel sheets in seed format.
* Customers can upload the zip using **binaryStream** service.
* The **Artifact server** is inaccessible for a customer.
* Tenant specific Artifact server does not manage centrally, it is always tied together with the tenant Storage account.
" type="primary" %}

If you wish to know more about how to **Upload Tenant Seed Data**. See [Upload Tenant Seed Data](/{{site.data.rdp_links_version.ADM}}/sys_upload_tenant_seed_action.html){:target="_blank"} for more information.

This topic describes how to use the RESTful API **{TenantURL or ID}/api/binarystreamobjectservice/prepareUpload** to deploy tenant seed data, using a scenario.

## Scenario
To deploy Tenant Seed data in **rdw** tenant, perform the following steps:
1.	Upload the zip in the Tenant artifact server. For more information, see **[Request 1](#request-1)** and **[Response 1](#response-1)**.
2.	Invoke API (adminservice/{TenantId}/deploytenantseed) to load seed config. For more information, see **[Request 2](#response-2)** and **[Response 2](#response-2)**.
3.	Track load using Parent Task Summary. For more information, see **[Request 3](#request-3)**.

{% include snippets/header.html %}

{% include callout.html content="**Prerequisites**:
* Upload the **zip file** to Tenant Artifact Server.
* Invoke the following API endpoint: **adminservice/{TenantId}/deploytenantseed**.
" type="primary" %}

## Request 1

To get the URL to upload the .zip in Tenant artifact server, use the RESTful API **{TenantURL or ID}/api/binarystreamobjectservice/prepareUpload**.

{% include callout.html content="**Notes**:
* Payload for BinaryStream prepareUpload API will have **seedDataStream** as type.
* The **id**, **objectKey**, and **originalFileName** are mandatory parameters.
" type="primary" %}

<pre>
<code>
POST **{TenantURL or ID}/api/binarystreamobjectservice/prepareUpload**
Host: customer.riversand.com
Headers: Content-Type: application/json
Body:
{
    "binaryStreamObject": {
        <span style="background-color: #FFFF00"> "id": "guid", </span>
        "type": "seedDataStream",
        "properties": {
            <span style="background-color: #FFFF00"> "objectKey": "zipname.zip", </span>
            <span style="background-color: #FFFF00"> "originalFileName": "zipname.zip" </span>
        }
    }
}
</code>
</pre>

## Response 1

If the above request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  <span style="background-color: #FFFF00"> "uploadURL" </span>:  "https://qa8rwtestrssa.blob.core.windows.net/qa8rwtest-seed-data/abcd.zip?sig=w%2B0h3kC8RZhgMdU%2FnsqndzwXkbKnAsXrOgRFrSYKUT0%3D&se=2020-08-15T14%3A16%3A42Z&sv=2017-07-29&rscd=attachment%3B%20filename%3Dabcd.zip&sp=acw&sr=b"
}
</code>
</pre>

The **uploadURL** is the link to upload the .zip file. You must upload the Tenant Seed .zip file to URL.

## Request 2

To invoke API to load seed configuration, use the RESTful API **{TENANT_ID}/api/adminservice/deploytenantseed**.

<pre>
<code>
POST **/{TENANT_ID}/api/adminservice/deploytenantseed**
Host: customer.riversand.com
Content-Type: application/json
x-rdp-version: 8.1
x-rdp-clientId: rdpclient
x-rdp-tenantId: rdwengg-az-dev2
x-rdp-ownershipData: Nike
<span style="background-color: #FFFF00"> x-rdp-userId: customeruser@riversand.com </span>
x-rdp-userName: customeruser
x-rdp-firstName: UserFirstName
x-rdp-lastName: UserLastName
x-rdp-userEmail: customeruser@riversand.com
x-rdp-userRoles: ["systemadmin"]
{
    "adminObject": {
        "id": "someguid",
        "type": "adminObject",
        "properties": {
            "objectKey": "zipname.zip"
        }
    }
}
</code>
</pre>

## Response 2

If the above request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "requestId": "35746338-eb6a-4663-81d7-8d24e66b6e0d",
        "taskId": "35746338-eb6a-4663-81d7-8d24e66b6e0d"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            <span style="background-color: #FFFF00"> "taskId": "35746338-eb6a-4663-81d7-8d24e66b6e0d" </span>
        },
        "totalRecords": 0
    }
}
</code>
</pre>

{% include callout.html content="**Note**: You can use taskId associated for the load. The taskId helps you to track Progress.
" type="primary" %}

## Request 3

To track Parent task summary for completion of the Seed load task, use the RESTful API **{TENANT_ID}/api/requesttrackingservice/get**.

<pre>
<code>
POST **{TENANT_ID}/api/requesttrackingservice/get**
Host: customer.riversand.com
Content-Type: application/json

{
    "params": {
        "query": {
            "id": "3e0d1892-c543-42e2-bf5d-fb4f292c89f5",
            "filters": {
                "typesCriterion": [
                    "tasksummaryobject"
                ]
            }
        },
        "fields": {
            "attributes": [
                "status",
                "totalRecords",
                "totalRecordsProcessed",
                "taskType",
                "fileName"
            ]
        },
        "options": {
            "maxRecords": 1
        }
    }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.