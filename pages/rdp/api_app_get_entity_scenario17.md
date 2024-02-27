---
title: Get Entities using Keyword Criterion
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario17.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get entities satisfying a keyword criterion, using a scenario.

## Scenario

To get "Product" entities containing keyword "polo" or "men" in entity data. 

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "product".
* query -> filters -> keywordsCriterion: Specify the keyword criterion, such as "polo" or "men".
* fields -> attributes: Specify the attribute you wish to get, such as "mdmid".
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
          <span style="background-color: #FFFF00">"product"</span>
        ],
        <span style="background-color: #FFFF00">"keywordsCriterion": {</span>
          "keywords": "polo men",
          "operator": "_OR"
        }
      }
    },
    "fields": {
      "attributes": [
        "mdmid"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre> 

## Response

Returns a list of all the "product" entities satisfying the keyword criterion.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "b2e9cc9c-44f0-4865-b88e-c34f4097d1e7",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "PoloMensShirt",
        "name": "Polo Mens Shirt",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:58.360-0500",
          "modifiedDate": "2018-07-19T01:56:58.360-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "df010776-1521-418b-8200-0c60405dda1e",
                  "value": "PS"
                }
              ]
            }
          }
        }
      },
      {
        "id": "PoloTies",
        "name": "Polo Ties",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:29.123-0500",
          "modifiedDate": "2018-07-19T01:56:29.123-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3eb4c39e-67f6-44f6-9902-7cb413aaefc4",
                  "value": "PT"
                }
              ]
            }
          }
        }
      },
      {
        "id": "PoloWomen",
        "name": "Polo Women's Formals",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:37.293-0500",
          "modifiedDate": "2018-07-19T01:56:37.293-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "19ea1eb6-3d8e-45a8-bcdd-fa38c5dbe490",
                  "value": "PW"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 3
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

