---
title: "Get all Domains"
sidebar: rdp_sidebar
permalink: api_get_data_model_scenario11.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatamodel}}** to get all domains in the system, using a scenario. 

## Scenario

To get all available domains in the system.

{% include snippets/header.html %}

## Request

To get the above model, you can use the REST API {{site.data.rdp_glossary.getdatamodel}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the type as "domain"
* query -> fields -> attributes: Specify "_ALL" attributes
* query -> fields -> relationships: Specify "_ALL" relationships

<pre><code>
POST **{{site.data.rdp_glossary.getdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {      
      "filters" : {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
        <span style="background-color: #FFFF00">"domain"</span>
        ]
      }
    },
    "fields" : {
      "attributes" : ["_ALL"],
      "relationships": ["_ALL"]
    }
  }
}
</code></pre>

## Response

Returns all the domains in the system. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "e5281fe8-76b3-4560-a3bb-854766c8b63b"
  },
  "response": {
    "entityModels": [
      {
        "id": "digitalAsset_domain",
        "name": "digitalAsset",
        "type": "domain",
        "domain": "generic",
        "properties": {
          "externalName": "Digital Asset",
          "description": "Digital Asset domain is a place holder for all Digital Assets data to support Digital Asset Management features",
          "createdService": "entityManageModelService",
          "createdBy": "system_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "system_user",
          "createdDate": "2020-02-10T21:01:27.922-0600",
          "modifiedDate": "2020-02-10T21:01:27.922-0600"
        }
      },
      {
        "id": "generic_domain",
        "name": "generic",
        "type": "domain",
        "domain": "generic",
        "properties": {
          "externalName": "Generic",
          "description": "Generic domain is a place holder for all domain agnostic data maintained in the platform to support MDM functionality",
          "createdService": "entityManageModelService",
          "createdBy": "system_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "system_user",
          "createdDate": "2020-02-10T21:01:27.851-0600",
          "modifiedDate": "2020-02-10T21:01:27.851-0600"
        }
      },
      {
        "id": "governanceModel_domain",
        "name": "governanceModel",
        "type": "domain",
        "domain": "generic",
        "properties": {
          "externalName": "governanceModel",
          "description": "Goverance Model domain manages the entirety of governanceModel Models & Configs",
          "createdService": "entityManageModelService",
          "createdBy": "system_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "system_user",
          "createdDate": "2020-02-10T21:01:27.885-0600",
          "modifiedDate": "2020-02-10T21:01:27.885-0600"
        }
      },
      {
        "id": "thing_domain",
        "name": "thing",
        "type": "domain",
        "domain": "generic",
        "properties": {
          "externalName": "Thing",
          "description": "Thing domain manages the entirety of data related to products, and maintains a single, consistent version of this data",
          "createdService": "entityManageModelService",
          "createdBy": "system_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "system_user",
          "createdDate": "2020-02-10T21:01:27.909-0600",
          "modifiedDate": "2020-02-10T21:01:27.909-0600"
        }
      },
      {
        "id": "referenceData_domain",
        "name": "referenceData",
        "type": "domain",
        "domain": "generic",
        "properties": {
          "externalName": "Reference Data",
          "description": "Reference data domain manages all the reference data maintained in the platform to support MDM functionality",
          "createdService": "entityManageModelService",
          "createdBy": "system_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "system_user",
          "createdDate": "2020-02-10T21:01:27.895-0600",
          "modifiedDate": "2020-02-10T21:01:27.895-0600"
        }
      },
      {
        "id": "UOMData_domain",
        "name": "UOMData",
        "type": "domain",
        "domain": "generic",
        "properties": {
          "externalName": "UOM Data",
          "description": "UOM Data domain manages the entirety of data related to Unit of measures, and maintains a single, consistent version of this data",
          "createdService": "entityManageModelService",
          "createdBy": "system_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "system_user",
          "createdDate": "2020-02-10T21:01:27.953-0600",
          "modifiedDate": "2020-02-10T21:01:27.953-0600"
        }
      }
    ],
    "status": "success",
    "totalRecords": 17
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
