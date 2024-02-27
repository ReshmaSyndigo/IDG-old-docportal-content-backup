---
title: "Get all Users"
sidebar: rdp_sidebar
permalink: api_get_data_model_scenario8.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatamodel}}** to get all users in the system, using a scenario. 

## Scenario

To get all available users in the system.

{% include snippets/header.html %}

## Request

To get the above model, you can use the REST API {{site.data.rdp_glossary.getdatamodel}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the type as "user"
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
        <span style="background-color: #FFFF00">"user"</span>
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

Returns all the users in the system. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "168dcfc9-021c-45da-ad26-9a53fe89be24"
  },
  "response": {
    "entityModels": [
      {
        "id": "infodev-rwtest-business-admin@riversand.com_user",
        "name": "infodev-rwtest-business-admin@riversand.com",
        "type": "user",
        "properties": {
          "firstName": "InfoDev Admin",
          "lastName": "User",
          "email": "infodev-rwtest-business-admin@riversand.com",
          "login": "infodev-rwtest-business-admin@riversand.com",
          "defaultRole": "admin",
          "roles": "admin",
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-01-09T03:37:04.419-0600",
          "modifiedDate": "2020-01-09T03:37:04.419-0600"
        }
      },
      {
        "id": "qavendor@riversand.com_user",
        "name": "qavendor@riversand.com",
        "type": "user",
        "properties": {
          "email": "qavendor@riversand.com",
          "firstName": "RSQA",
          "lastName": "Vendor-API",
          "login": "qavendor@riversand.com",
          "ownershipData": "Nike",
          "roles": "vendor",
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-02-10T23:49:06.273-0600",
          "modifiedDate": "2020-02-10T23:49:06.273-0600"
        }
      },
      {
        "id": "rwdmdtest@riversand.com_user",
        "name": "rwdmdtest@riversand.com",
        "type": "user",
        "properties": {
          "firstName": "RWDMDTEST",
          "lastName": "Admin",
          "email": "rwdmdtest@riversand.com",
          "login": "rwdmdtest@riversand.com",
          "roles": "admin",
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-02-10T23:49:06.272-0600",
          "modifiedDate": "2020-02-10T23:49:06.272-0600"
        }
      },
      {
        "id": "system_user",
        "name": "system",
        "type": "user",
        "properties": {
          "lastName": "",
          "firstName": "System",
          "email": "system@rdp.com",
          "login": "system",
          "roles": "admin",
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-02-10T23:49:06.273-0600",
          "modifiedDate": "2020-02-10T23:49:06.273-0600"
        }
      }
    ],
    "status": "success",
    "totalRecords": 118
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
