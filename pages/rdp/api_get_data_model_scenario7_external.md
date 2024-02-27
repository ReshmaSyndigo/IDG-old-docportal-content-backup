---
title: "Get all Entity Types of a Domain"
sidebar: rdp_sidebar
permalink: api_get_data_model_scenario7.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getdatamodel}}** to get all entity types of a domain, using a scenario. 

## Scenario

To get all entity types of "thing" domain.

{% include snippets/header.html %}

## Request

To get the above model, you can use the REST API {{site.data.rdp_glossary.getdatamodel}}. In the request send the following details:

* query -> domain: Specify the "domain" as "thing"
* query -> filters -> typesCriterion: Specify the type as "entityType"
* query -> fields -> attributes: Specify "_ALL" attributes
* query -> fields -> relationships: Specify "_ALL" relationships

<pre><code>
POST **{{site.data.rdp_glossary.getdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"domain": "thing",</span>
      "filters": {
      <span style="background-color: #FFFF00">"typesCriterion": [</span>
        "entityType"
      ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    }
  }
}
</code></pre>

## Response

Returns all entity types of "thing" domain. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "b9284559-84ac-4e17-8d07-a23429c5a0ce"
  },
  "response": {
    "entityModels": [
      {
        "id": "productgroup_entityType",
        "name": "productgroup",
        "type": "entityType",
        "domain": "thing",
        "source": "internal",
        "properties": {
          "externalName": "Product Group",
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-02-10T23:48:05.729-0600",
          "modifiedDate": "2020-02-10T23:48:05.729-0600"
        },
        "data": {
          "attributes": {
            "externalName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "91283dba-67bb-4dac-a38c-2bb32f83a3e5",
                  "value": "Product Group"
                }
              ]
            }
          }
        }
      },
      {
        "id": "bundle_entityType",
        "name": "bundle",
        "type": "entityType",
        "domain": "thing",
        "source": "internal",
        "properties": {
          "externalName": "Bundle",
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-02-10T23:48:05.731-0600",
          "modifiedDate": "2020-02-10T23:48:05.731-0600"
        },
        "data": {
          "attributes": {
            "externalName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "d1b86fb4-c731-42c2-8710-0117a5e0f6f7",
                  "value": "Bundle"
                }
              ]
            }
          }
        }
      },
      {
        "id": "product_entityType",
        "name": "product",
        "type": "entityType",
        "domain": "thing",
        "source": "internal",
        "properties": {
          "externalName": "Product",
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com_user",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com_user",
          "createdDate": "2020-02-10T23:48:05.726-0600",
          "modifiedDate": "2020-02-10T23:48:05.726-0600"
        },
        "data": {
          "attributes": {
            "externalName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "667f080e-c58f-4ba8-b1b1-a3371ee7274c",
                  "value": "Product"
                }
              ]
            }
          }
        }
      },
      {
        "id": "sku_entityType",
        "name": "sku",
        "type": "entityType",
        "domain": "thing",
        "source": "internal",
        "properties": {
          "externalName": "SKU",
          "description": "",
          "createdService": "entityManageModelService",
          "createdBy": "infodevadmin@riversand.com",
          "modifiedService": "entityManageModelService",
          "modifiedBy": "infodevadmin@riversand.com",
          "createdDate": "2020-02-11T00:14:34.066-0600",
          "modifiedDate": "2020-02-11T00:14:34.066-0600"
        },
        "data": {
          "attributes": {
            "externalName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "internal",
                  "id": "c512a28b-a97a-4956-9a5b-75ce8a7cc10a",
                  "value": "SKU"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 4
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
