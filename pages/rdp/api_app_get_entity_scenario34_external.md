---
title: Get Entities using Originating Source Information - Attribute Criterion "Specific" Attribute
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario34.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities based on originating source information, using a scenario.

## Scenario

To get entities whose "status" attribute has "originatingsource" as "defaults".

{% include snippets/header.html %}

## Request

To get the entities satisfying the above criterion, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> filters -> attributesCriterion: Specify the attribute name, that you wish to filter based on the originating source(os). In this scenario, you wish to get all entities whose "status" attribute has "originating source" as "defaults".
Based on the location of the "originating source" property in the entity object, following search keywords can be used

| Location | Search Keyword | 
|----------|-------------|
| context | propertiesCriterion| 
| relationship | properties | 
| attribute.value | valueProperties | 

In this scenario, since the location of the "originating source" property to be filtered is "attribute.value", we must use the search keyword "valueProperties".

* fields -> attributes: Specify the attribute you wish to get, such as "status".
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
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "status": {
              "hasvalue": true,
              "type": "_STRING",
              <span style="background-color: #FFFF00">"valueProperties": [</span>
                {
                  "os": {
                    "eq": "defaults"
                  }
                }
              ]
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "status"
      ]
    },
    "options": {
      "from": 0,
      "maxRecords": 100
    }
  }
}
</code>
</pre> 

## Response

Returns the entities whose "status" attribute has "originating source" as "defaults".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e69f42bf-7de7-43b8-b9e4-606d58fe897e",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "DWShirts",
        "name": "DWShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-08-29T01:14:30.309-0500",
          "modifiedDate": "2018-08-29T01:14:30.309-0500"
        },
        "data": {
          "attributes": {
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "250edc16-adba-48ed-bffd-4646600b213d",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            }
          }
        }
      },
      {
        "id": "PeterShirts",
        "name": "PeterShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-08-29T01:11:35.370-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-08-30T23:57:29.480-0500"
        },
        "data": {
          "attributes": {
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e8835377-96ba-41e3-b26e-59938b2c22c1",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            }
          }
        }
      },
      {
        "id": "JohnShirts",
        "name": "JohnShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-08-29T01:11:34.075-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-08-31T00:05:57.979-0500"
        },
        "data": {
          "attributes": {
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "228a33ae-f259-48cd-a08f-678627b3bb17",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            }
          }
        }
      },
      {
        "id": "Polo Women's Shirt Blue",
        "name": "Polo Women's Shirt Blue",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-09-03T00:57:32.596-0500",
          "modifiedDate": "2018-09-03T00:57:32.596-0500"
        },
        "data": {
          "attributes": {
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "59fcae8c-bfbe-4125-affa-aa6a7daae34e",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
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

