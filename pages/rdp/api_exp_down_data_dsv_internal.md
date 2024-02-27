---
title: Download Data in DSV Format
sidebar: rdp_sidebar
permalink: api_exp_down_data_dsv.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform supports downloading data through DSV (Delimiter Separated Values) format synchronously and asynchronously.

If you wish to download data synchronously, then you can use **{{site.data.rdp_glossary.downloadDataExcel}}** API. It returns the corresponding DSV object of the entity for the downloaded data if the request is successful. As this is synchronous service, you can immediately start using downloaded DSV object you receive in the response for your further requirements. It returns an error message in case of invalid requests. 

If you wish to submit a job for DSV export, then you can use **{{site.data.rdp_glossary.downloadDataJob}}** to download the data. You can use the WorkAutomationId you receive in the response for further tracking of the submitted job.

{% if site.build == "internal" %}
See [Understanding DSV File](api_feature_dsv_learning.html), for more information.
{% endif %}

This topic describes how to use **{{site.data.rdp_glossary.downloadDataJob}}** to download the data in DSV format, using a scenario.
 
## Scenario

To download a "product" entity.

## Request

To download the above entity, you can use the REST API {{site.data.rdp_glossary.downloadDataJob}}. In the request send the following details:

* Id of the product to be downloaded and the filter criteria to be applied on the query.
* In the rsconnect -> profile, specify the appropriate [export profile](api_exp_entity_service.html).

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
        "downloadDataDSV"
      ]
    }
  }
}
</code>
</pre>

## Response

Returns the binary object of the downloaded entity for further processing.

<pre><code>
{
  "response": {
    "binaryObjects": [
      {
        "id": "19e5295c-6eab-4e2b-b095-5fafe3ac4f46",
        "type": "DSVObject",
        "systemInfo": {
          "tenantId": "rwtest"
        },
        "properties": {
          "fileName": "SmartDSVBaseTemplatev012.dsv",
          "version": "0.14",
          "extension": "dsv"
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

For the above request, the job is submitted successfully as detailed in the **status** object. The downloaded DSV is part of the **data -> blob**. As displayed in above response, you receive the following details:

* properties -> fileName: Indicates the downloaded file name.
* properties -> version: Indicates the version of the downloaded DSV.
* properties -> extension: Indicates the extension of the downloaded DSV.
* totalRecords: Indicates the total records that is received in the response.