---
title: Get Entities with Context Attributes in Value Context
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario12.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entity in a value context, using a scenario. 

## Scenario

To get context attributes for entity "JohnyShirts" in value context - "en-US" locale and "internal" source.

{% include snippets/header.html %}

## Request

To get the entity with its value context attributes, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> Id: Specify the entity identifier.
* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* query -> valueContext: Specify the value context - "locale,source".
* fields -> attributes: Specify the value context attributes that you wish to get, such as "color","description"
* options -> maxRecords: Specify the number of records to retrieve.

<pre>
<code>
POST **{TenantURL or ID}/api/appentityservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00">"valueContexts": [</span>
        {
          "locale": "en-US",
          "source": "internal"
        }
      ],
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "sku",
          "product"
        ]
      },
      <span style="background-color: #FFFF00">"id": "JohnyShirts"</span>
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        "color",
        "description"
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

Returns the value context attributes, for the matching entity.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "209067f3-f1dc-4ca3-94b4-864694a7472b",
    "maxRecords": 10
  },
  "response": {
    "entities": [
      {
        "id": "JohnyShirts",
        "name": "JohnyShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-20T03:40:06.521-0500",
          "modifiedDate": "2018-07-20T03:40:06.521-0500"
        },
        "data": {
          "attributes": {
            "color": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1e5969be-f644-4d06-8d66-82d82892ae8f",
                  "value": "Red",
                  "properties": {
                    "referenceData": "colors/fc32390a-75ea-4d0f-95ab-effa53a1e8cd",
                    "referenceDataIdentifier": "WRD"
                  }
                },
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "9cb151c8-9f5b-4393-87b5-fea953599276",
                  "value": "Black",
                  "properties": {
                    "referenceData": "colors/1c868427-a941-4dd5-bd06-1fc08bd8b703",
                    "referenceDataIdentifier": "ABL"
                  }
                }
              ]
            },
            "description": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "6926f98d-92c4-40a9-afc7-5314411487f1",
                  "value": "JohnyShirts in US"
                },
                {
                  "source": "internal",
                  "locale": "de-DE",
                  "id": "b9474c6f-2913-4dee-9fba-9981b8239784",
                  "value": "JohnyShirts in DE"
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

