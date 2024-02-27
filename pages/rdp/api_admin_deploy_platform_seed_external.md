---
title: Deploy Platform Seed Data
sidebar: rdp_sidebar
permalink: api_admin_deploy_platform_seed.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

**Platform Seed** data is applicable for all tenants provisioned to use the Riversand Platform application. This data is owned and maintained by Riversand Engineering team. The seed data is maintained in Riversand's private source control system (github). Only Riversand engineering team can make the necessary modifications to the system seed data. Platform Seed data contains the following:

* Base Seed Data : The initial seed data to be loaded into the system that has no other dependency. It is to bootstrap and includes the system functionality and other additional seed data.
* Config Seed Data : Consists of configuration objects including UI and others.
* Model Seed Data : Includes model data.
* Govern Seed Data : Includes govern rules.
* Entity Seed Data : Includes reference data.

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deployplatformseed}}** to deploy platform seed data, using a scenario.

{% include callout.html content="**Note:** This API supports only JSON files.
" type="primary" %}

## Scenario

To deploy Platform Seed data in "rdw" tenant.

{% include snippets/header.html %}

## Request

To deploy the above seed data, use the RESTful API **{{site.data.rdp_glossary.deployplatformseed}}**. In the request send the following details:

In the adminObject,
* properties : objectKey -> Specify the zipped JSON file containing Platform Seed data. Here we have mentioned "platform-seed-rdw-1.1.1730-test.zip".
* properties : tenantId -> Specify the tenant name on which you wish to upload the Platform Seed data. Here we have mentioned "rdw".

The API uses **dataplatformpod** configuration file to determine the artifact server location before pulling the platform seed data zip file. 

<pre>
<code>
POST **{{site.data.rdp_glossary.deployplatformseed}}**
Headers: Content-Type: application/json
Body:
{
  "adminObject": {
    "id": "someguid",
    "type": "adminObject",
    "properties": {
      "storageType": "stream",
      <span style="background-color: #FFFF00">"objectKey": "platform-seed-rdw-1.1.1730-test.zip",</span>
      <span style="background-color: #FFFF00">"tenantId": "rdw"</span>
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


**Note**: The **tenantId** and **objectKey** are mandatory parameters.

## Verify the Platform Seed Data

You can track the task progress using requesttrackingservice/get.