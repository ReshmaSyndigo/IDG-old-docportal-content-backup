---
title: Get Specific Attributes of Entities
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario6.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get specific attributes of entities using entity Ids.

## Scenario

To get specific attributes of entities "e2" and "e3" using entity Ids.

{% include snippets/header.html %}

## Request

To get the above entities with the specified attributes, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> Ids: Specify a comma separated list of entity identifiers.
* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* fields -> attributes: Specify the names of the attributes that you wish to get, such as "mdmid","mdmname".
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
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku",
          "product"
        ]
      },
      <span style="background-color: #FFFF00">"ids": [</span>
        "e2",
        "e3"
      ]
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        "mdmid",
        "mdmname"
      ]
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre>

## Response

Returns the "mdmid" and "mdmname" of all the entities matching the entity Ids.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "edb791ea-04d2-428e-9b5d-83f864c30342",
    "maxRecords": 20
  },
  "response": {
    "entities": [
      {
        "id": "e3",
        "name": "Polo Mens Shirt Green_Large",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T03:18:30.557-0500",
          "modifiedDate": "2018-07-19T03:18:30.557-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0c53c7a2-f72f-42da-b12a-80dfd3d67a94",
                  "value": "PG_L"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4db3f93f-e941-4289-88ef-95eb81ac6cea",
                  "value": "PoloGreen_Large"
                }
              ]
            }
          }
        }
      },
      {
        "id": "e2",
        "name": "Polo Mens Shirt Blue_Large",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T03:18:48.698-0500",
          "modifiedDate": "2018-07-19T03:18:48.698-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e7353ebe-851d-4e20-9dd7-65bd7a847629",
                  "value": "PB_L"
                }
              ]
            },
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c215a2ad-a8f5-465c-bf3e-a2f9eba3935b",
                  "value": "Polo Blue"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 2
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.