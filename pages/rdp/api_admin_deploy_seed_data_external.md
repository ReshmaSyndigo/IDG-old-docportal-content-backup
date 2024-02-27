---
title: Deploy Seed Data
sidebar: rdp_sidebar
permalink: api_admin_deploy_seed_data.html
type: Description
folder: rdp
---

{% include snippets/api_preview.md %}

Seed Data is a collection of models, configurations and base data (reference data) that are required to use Riversand Platform efficiently. Seed data is zipped and placed in seed data artifact server. Uploading Seed data through API helps a user to track if all configurations are loaded successfully using task progress summary.
There are two types of Seed Data 
* [Platform Seed data](api_admin_deploy_platform_seed.html) 
* [Tenant Seed data](api_admin_deploy_tenant_seed.html)

This topic describes the process of uploading seed data through API. 

The following illustration shows the seed data API design. The steps involved are: 
* Deploy seed data API request is sent to Riversand Platform.
* Since this is a bulk job, the request is sent to rsAdmin service.
* The zip file provided in the API is fetched from the seed artifact server.
* RSAdminService performs extract-transform-load on the zip file.
* The excel files are loaded using RSConnect service.

{% picture seed-data1.png alt="Seed Data Process Flow" %}

Deployment of seed data involves the following components:

* Seed Artifact Server
* Build process
* Replacement tokens and uiConfig context

<br>

**Seed Artifact Server**: The packaged seed data files pulled from github by the deployment team are present in the seed artifact server. For each deployment of seed data, this location is specified in **dataplatformpod** configuration file. The API uses this configuration file to determine the artifact server location before pulling the seed data zip file. Currently the seed artifact server is in Azure storage account : rsdeploymentfiles/seed-data

During **Build Process** platform seed data zip file created from Git repository is pushed to the designated seed artifact server for deployment. The seed data is loaded for all the tenants that are present on the instance using the **loadplatformseed** API. The API can be triggered on demand by the administrator to reload the seed data.

**Replacement Tokens** : If any tokens used in the data being loaded needs replacement with values, the API can perform the replacement if key:value has been placed in tenantserviceconfig in "replacementTokenValues" section.

**uiConfig context addition**: uiConfigs load context-config.json is placed along with data that has to be merged with each uiConfig context. 

## Troubleshooting

You can troubleshoot the errors encountered while deploying seed data as follows:

1. When the user encounters "Errored / Completed with errors", or if the tasksummary status has other value other than "Complete", after going into "Done" criteria. 
<br>
**Solution**: The user must debug the load request using Event Service to identify the errors.

2. General error occurred while loading Platform Seed data.
<br>
**Solution**: You can get the error message from "adminexternalevent" taskId provided in the **attributesCriterion** that are generated using the external events. The response lists all the events generated for task and those that have additional details such as Error message and the errored file name. Using these generated details, the user can identify and troubleshoot the errors that are encountered.

<pre><code>
POST **{{site.data.rdp_glossary.getevent}}**.
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "adminexternalevent"
        ],
        "attributesCriterion": [
          {
            "taskId": {
              "exact": "f0249907-66d4-4daa-82b4-ae06e4a43dee"
            }
          },
          {
            "eventSubType": {
              "exact": "PROCESSING_ERROR"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    }
  }
}
</code></pre>

This section covers the following topics:
* [Deploy Platform Seed Data](api_admin_deploy_platform_seed.html)
* [Deploy Tenant Seed Data](api_admin_deploy_tenant_seed.html)