---
title: Get Schema Validation Event
sidebar: rdp_sidebar
permalink: api_event_get_schema_validation_event.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

Riversand Platform performs JSON schema validations while creating an entity using RESTful API or importing the entities via JSON file. The system performs validations at Entity, Attribute, Relationship, Context, and Property Levels. 

If the JSON schema validation fails at any level while performing an API request, then the system sends the response with the response message indicating that the schema validation is failed and removes the respective schema element that has error. The system records the event for the respective entity, which has schema validation error. This topic describes how to use the RESTful API {TenantURL or ID}/api/eventservice/get} to get schema validation event using a scenario. For more information, see [Validate JSON Object Schema during Import](api_validate_schema.html).

## Scenario

To get events for a "sku" entity, which has schema validation error.

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}

In the request send the following details:

* query -> attributesCriterion: Specify the required entity Id for which you wish to query the events.
* query -> typesCriterion: specify as "schemavalidationevent" to get the details of the schema validation for the specificied entity.

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"schemavalidationevent"</span>
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "entityId": {
              "exact": "PoloWomen"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ],
      "contexts": [
        "_ALL"
      ]
    },
    "sort": {
      "properties": [
        {
          "modifiedDate": "_DESC",
          "sortType": "_DATETIME"
        }
      ]
    },
    "options": {
      "maxRecords": 1
    }
  }
}
</code>
</pre>

## Response

In the response, you can check the response message as "Schema validation failed at attribute" for the specified entity.

<pre><code>
{
  "id": "675397f2-8317-4d32-b106-50ba48b79d20",
  "type": "schemavalidationevent",
  "domain": "eventDataObject",
  "properties": {
    "createdService": "externalEventManageService",
    "createdBy": "system_user",
    "modifiedService": "externalEventManageService",
    "modifiedBy": "system_user",
    "createdDate": "2021-07-16T01:08:43.943-0500",
    "modifiedDate": "2021-07-16T01:08:43.943-0500"
  },
  "data": {
    "attributes": {
      "_EMPTY": {
        "properties": {
          "messages": [
            {
              "messageType": "error",
              "messageCode": "E0868",
              "message": "Schema validation failed at attribute {\"\": {\"values\":[{\"source\":\"internal\",\"locale\":\"en-US\",\"value\":\"12D\"}]}}",
              "messageParams": [
                "",
                "{\"values\":[{\"source\":\"internal\",\"locale\":\"en-US\",\"value\":\"12D\"}]}"
              ]
            }
          ]
        }
      },
      "entityId": {
        "values": [
          {
            "id": "2347d193-b427-4fc4-a564-c5e368d8931f",
            "value": "testNull001",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityType": {
        "values": [
          {
            "id": "b1f6c992-4232-472b-9d47-74639ed15b8b",
            "value": "sku",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "messageCode": {
        "values": [
          {
            "id": "ded0a4fc-7c5f-4ad1-ad09-f51043fb57d3",
            "value": "E0866",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "message": {
        "values": [
          {
            "id": "9b50931e-4846-4b34-9c1f-5267daab28f0",
            "value": "Schema validation failed for id testNull001, type sku",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "eventType": {
        "values": [
          {
            "id": "cf0a6d07-df9b-40d7-9ad9-126d5d45bdab",
            "value": "LOAD",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "eventSubType": {
        "values": [
          {
            "id": "0871497b-9187-4b8c-9294-ab2462273176",
            "value": "PROCESSING_ERROR",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "taskId": {
        "values": [
          {
            "id": "2c0331df-7a5a-4427-ba5c-5f951757692a",
            "value": "668e7d7d-afe7-45ef-acdc-96e2198fb50c",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "serviceName": {
        "values": [
          {
            "id": "519cf54e-fff4-4674-a0ce-dee930a6a8bf",
            "value": "entityManageService",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "entityAction": {
        "values": [
          {
            "id": "13c3e2b3-c539-4a03-b43f-07b72aa969a0",
            "value": "create",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      },
      "requestGroupId": {
        "values": [
          {
            "id": "809b922b-2ce4-4b7e-b0e4-b21423d9395d",
            "value": "668e7d7d-afe7-45ef-acdc-96e2198fb50c",
            "locale": "en-US",
            "source": "internal"
          }
        ]
      }
    }
  }
}
</code></pre>