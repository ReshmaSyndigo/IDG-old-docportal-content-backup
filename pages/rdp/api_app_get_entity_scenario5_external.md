---
title: Get all Attributes of Entities
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario5.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get all attributes of an entity using entity Id.

## Scenario

To get all attributes of entity "e3" using entity Id.

{% include snippets/header.html %}

## Request

To get the above entity with all its attributes, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> Ids: Specify the entity identifier.
* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* fields -> attributes: Specify "_ALL" to get all the attributes of the entity.
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
      },
      <span style="background-color: #FFFF00">"id": "e3"</span>
    },
    "fields": {
      "attributes": [
        "_ALL"
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

Returns the matching entity with all its attributes.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "df6f72ef-d1cc-4deb-97ca-448394401e29",
    "maxRecords": 1
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
            },
            "width": {
              "values": [
                {
                  "uom": "cm",
                  "source": "internal",
                  "locale": "en-US",
                  "id": "c7501676-9dcb-4620-abac-b5e70f7f09ae",
                  "value": 20.33
                }
              ]
            },
            "length": {
              "values": [
                {
                  "uom": "cm",
                  "source": "internal",
                  "locale": "en-US",
                  "id": "82b8ae57-f951-48dc-9c04-87b6c8098b97",
                  "value": 34.33
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "46b6066d-4179-4924-9538-61fd8154e3aa",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "New"
                }
              ]
            },
            "createdate": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6f7a791f-d529-47b3-9d27-aa4f639f912d",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": "2018-07-19T03:18:31.209-0500"
                }
              ]
            },
            "hypearticle": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "920cb63b-95c7-450a-b2b2-7da8e8f745c5",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ]
            },
            "enabled": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "78957b79-2ff3-4c14-bdd6-ba190ae124f8",
                  "os": "defaults",
                  "osid": "sku_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
                  "value": false
                }
              ]
            },
            "dimensionslabel": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "37fc2b89-332f-457e-a9ce-4af2865e5e85",
                  "os": "businessRule",
                  "osid": "calculateDimensionsLabel_businessRule",
                  "ostype": "businessRule",
                  "value": "34.33 X 20.33 X H"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

