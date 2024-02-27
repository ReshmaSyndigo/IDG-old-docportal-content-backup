---
title: Download Data in JSON Format
sidebar: rdp_sidebar
permalink: api_exp_down_data_json.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform provides Download Data JSON API that downloads the entity data asynchronously. If you wish to submit a job for JSON export, then you can use {TenantURL or ID}/api/rsConnectService/downloadDataJob to download the data. You can use the WorkAutomationId you receive in the response for further tracking of the submitted job.

This topic describes how to use the **{TenantURL or ID}/api/rsConnectService/downloadDataJob** to download the data in JSON format, using a scenario.

## Scenario

To download a "product" entity, in JSON format.

## Request

To download the above entity, you can use the REST API {TenantURL or ID}/api/rsConnectService/downloadDataJob. In the request send the following details:

* Id of the product to be downloaded and the filter criteria to be applied on the query. 
* In the rsconnect -> profile, specify the appropriate export profile.

<pre>
<code>
POST {TenantURL or ID}/api/rsConnectService/downloadDataJob
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"id": "f65ee3d5-a979-4722-b5b2-667e0e6ad891",</span>
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"product"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
      "_ALL"
      ]
    },
    "options": {
      "maxRecords": "10"
    },
    "rsconnect": {
      <span style="background-color: #FFFF00">"profiles": [</span>
        "downloadDataJSONJob"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the Work Automation ID after submitting the binary object as a job for further processing.

<pre><code>
{
  "response": {
    "binaryObjects": [
      {
        "id": "19e5295c-6eab-4e2b-b095-5fafe3ac4f46",
        "type": "JSONObject",
        "systemInfo": {
          "tenantId": "rwtest"
        },
        "properties": {
          "fileName": "SmartDSVBaseTemplatev012.json",
          "version": "0.14",
          "extension": "JSON"
        },
        "data": {
          "blob": "UEsDBBQACAgIAHgtDU0AAAAAAAAAAAAAAAALAAAAX3JlbHMvLnJlbHOtksFqwzAMhu99CqN747SDMUbdXsagtzK6B9BsJTFJLGOrW/b2M7tsCw1ssKOQ9P0fQrvDNA7qlVL2HAxsqhoUBcvOh9bA8/lxfQcqCwaHAwcyEBgO+9XuiQaUspI7H7MqjJANdCLxXutsOxoxVxwplE7DaUQpZWp1RNtjS3pb17c6fWfADKqOzkA6ug2oM6aWxMA06DdO/QtzXxVuabxH+k0qN4239MD2MlKQK+GzCdALMtsvGcf2lLisWk70N53lI+iRBB0KflLXsQRQEk950ejmihHG+N/3oUkoOHJzJf3jD/arD1BLBwjq1A8U5gAAAE8CAABQSwMEFAAICAgAeC0NTQAAAAAAAAAAAAAAABMAAABbQ29udGVudF9Ue"
        }
      }
    ],
    "status": "success",
    "statusDetail": {},
    "totalRecords": 1
  }
}
</code></pre>

For the above request, the job is submitted successfully as detailed in the status object. The downloaded excel is part of the data -> blob. As displayed in above response, you receive the following details:

* properties -> fileName: Indicates the downloaded file name.
* properties -> version: Indicates the version of the downloaded JSON.
* properties -> extension: Indicates the extension of the downloaded JSON.
* totalRecords: Indicates the total records that is received in the response.