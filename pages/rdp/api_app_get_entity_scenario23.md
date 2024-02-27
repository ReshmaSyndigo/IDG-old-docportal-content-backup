---
title: Get Entities Pagewise
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario23.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities pagewise, using a scenario.

## Scenario

To get a specified number of entities starting from the specified record. This is used for pagewise display of entities.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* fields -> properties: Specify the entity properties you wish to get, such as "_ALL".
* options -> from: Specify the record number from which you wish to display.
* options -> maxRecords: Specify the number of records to retrieve.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "properties": [
        "_ALL"
      ]
    },
    "options": {
      <span style="background-color: #FFFF00">"from": 11,</span>
      "maxRecords": 3
    }
  }
}
</code>
</pre> 

## Response

Returns three "SKU" records starting from the eleventh record.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "88cc71fb-28f2-4410-abc2-cb38111bfa1c",
    "maxRecords": 3
  },
  "response": {
    "entities": [
      {
        "id": "e2",
        "name": "Polo Mens Shirt Blue_XLarge",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-27T00:15:42.946-0500",
          "modifiedDate": "2018-07-27T00:15:42.946-0500"
        }
      },
      {
        "id": "DWShirts",
        "name": "DWShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-27T00:16:35.558-0500",
          "modifiedDate": "2018-07-27T00:16:35.558-0500"
        }
      },
      {
        "id": "e3",
        "name": "Polo Mens Shirt Green_Large",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-27T00:17:18.473-0500",
          "modifiedDate": "2018-07-27T00:17:18.473-0500"
        }
      }
    ],
    "status": "success",
    "totalRecords": 16
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
