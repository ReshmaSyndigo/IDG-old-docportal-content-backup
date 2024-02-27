---
title: Get Specific Relationships of an Entity
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario9.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get specific relationships of an entity using entity Id.

## Scenario

To get specific relationships of entity "PoloWomen" using entity Id.

{% include snippets/header.html %}

## Request

To get the above entity with the specified relationships, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> Id: Specify the entity identifier.
* query -> filters -> typesCriterion: Specify the entity type as "sku" and "product".
* fields -> relationships: Specify the relationships that you wish to get, such as "crosssell".
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
      <span style="background-color: #FFFF00">"id": "PoloWomen"</span>
    },
    "fields": {
      <span style="background-color: #FFFF00">"relationships": [</span>
        "crosssell"
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

Returns the "crosssell" relationship with relationship attributes, for the matching entity.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "0da10b36-77d0-43d5-bfd0-43a3a6885593",
    "maxRecords": 5
  },
  "response": {
    "entities": [
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
          "relationships": {
            "crosssell": [
              {
                "id": "PoloWomen",
                "relTo": {
                  "id": "PoloTies",
                  "type": "product"
                },
                "attributes": {
                  "efffrom": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "ed8ed703-019b-425b-a4d4-ef2594fc83d0",
                        "value": "2018-05-21"
                      }
                    ]
                  },
                  "effto": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "0561bd11-4a36-4cd6-a7b4-47d9a40ad054",
                        "value": "2018-06-21"
                      }
                    ]
                  },
                  "linkdescription": {
                    "values": [
                      {
                        "source": "internal",
                        "locale": "en-US",
                        "id": "4ceee9a4-d013-4488-8210-71939d40cb22",
                        "value": "Often bought together"
                      }
                    ]
                  }
                },
                "properties": {
                  "relationshipType": "association"
                }
              }
            ]
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

