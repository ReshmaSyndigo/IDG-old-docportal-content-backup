---
title: Deploy Tenant Seed Data
sidebar: rdp_sidebar
permalink: api_admin_deploy_tenant_seed.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Tenant Seed data is specific to tenant needs and requirements. The initial load of seed data is typically managed by Riversand CPS team or third party. However, the customer's business users can modify and update the tenant models and configurations based on their business requirements. Tenant seed data contains the following:

* **Config Seed Data**: Consists of configuration objects including UI and others.
* **Model Seed Data**: Includes model data.
* **Govern Seed Data**: Includes govern rules.
* **Entity Seed Data**: Includes reference data.
* **GenericObject Seed Data**: Includes generic object data.

{% include callout.html content="**Note:** 
 For **GenericObject Seed Data**, you cannot track request objects status. But, you have the option to view the logs in Kibana. Successful logs are indicated with code: **AIS00** and error logs are indicated with code: **AS005**.
" type="primary" %}

For **GenericObject Seed Data** sample, download sample JSON for <a href="files/appsdk/genericObject-seed-data.json" download>genericObject-seed-data.json</a>.

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deploytenantseed}}** to deploy tenant seed data, using a scenario.

{% include callout.html content="**Note:**
This API supports both JSON files and Excel sheets.
" type="primary" %}

## Scenario

To deploy Tenant Seed data in "rdw" tenant.

{% include snippets/header.html %}

## Request

To deploy the above Seed Data, use the RESTful API **{{site.data.rdp_glossary.deploytenantseed}}**. In the request, send the following details:

In the adminObject->properties, 
* **objectKey**: Specify the zipped JSON file containing Platform Seed data. Here it is "platform-seed-rdw-1.1.1730-test.zip".
* **tenantId**: Specify the tenant name on which you wish to upload the Platform Seed data. Here it is "rdw".
* **flushConfig**: Specify as "true" to flush the jsons in the seed data zip. It is an optional parameter which is by default "false". 
* **retryCount**: Specify the number of times you wish to attempt to upload, in case there is a failure.
* **sleepTime**: Specify the time interval between two upload trials.

{% include callout.html content="**Note:**
The **tenantId** and **objectKey** are mandatory parameters. The API uses **dataplatformpod** configuration file to determine the artifact server location before pulling the tenant seed data zip file.
" type="primary" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.deploytenantseed}}**
Headers: Content-Type: application/json
Body:
{
  "adminObject": {
    "id": "someguid",
    "type": "adminObject",
    <span style="background-color: #FFFF00">"properties": {</span>
      "flushConfig": true,
      "storageType": "stream",
      "objectKey": "rdw-config-1.1.1730-test.zip",
      "tenantId": "rdw",
      "retryCount": 1,
      "sleepTime": 1000
    }
  }
}
</code>
</pre>

## Response

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "4b1d2d66-f600-4e0c-a3aa-f43866ad4d7e",
    "taskId": "4b1d2d66-f600-4e0c-a3aa-f43866ad4d7e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "taskId": "4b1d2d66-f600-4e0c-a3aa-f43866ad4d7e"
    },
    "totalRecords": 0
  }
}
</code></pre>

## Verify the Tenant Seed Data

If the tenant seed data contains excel files, track the task progress status through the API **{TenantURL or ID}/api/requesttrackingservice/getparenttasksummary**.