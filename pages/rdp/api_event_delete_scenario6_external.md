---
title: Get External Event History for Entity
sidebar: rdp_sidebar
permalink: api_event_delete_scenario6.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, there are various external events in an entity. When an external event is deleted from an entity Riversand Platform records these change types. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get such events using a [scenario](#scenario).

## Scenario

To get history of external events for "sku" entity.

{% include snippets/header.html %}

## Request

In the request send the following details:

* query -> attributesCriterion : Specify the required entity Id for which you wish to get the events.
* query -> typesCriterion : As you wish to see the remaining external events, specify as "externalevent". 

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
          <span style="background-color: #FFFF00">"externalevent"</span>
        ],
        "attributesCriterion": [
          {
            "entityId": {
              <span style="background-color: #FFFF00">"exact": "edk5ZXwfvQfX9"</span>
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1000
    }
  }
}
</code>
</pre> 

## Response

Returns the events that are currently present for "sku" entity. As you can see in the response, the "LOAD" event that was deleted in the [Delete External Events](api_event_delete_scenario5.html) is not present. All the other events corresponding to the entity, such as rsConnect can be seen.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "e20078b3-3617-441d-b9a8-a786442e776d",
    "maxRecords": 1
  },
  "response": {
    "events": [
      {
        "id": "b49fd22d-78ae-4342-b02b-154cf4e24a31",
        "name": "933a5710-5acd-41a3-b0a1-081858ba683e",
        "type": "externalevent",
        "properties": {
          "source": "internal",
          "createdBy": "santu@gmail.com_user",
          "createdDate": "2018-09-21T03:02:17.625-0500",
          "createdByService": "rsConnectService",
          "createdService": "eventManageService",
          "modifiedService": "eventManageService",
          "modifiedBy": "santu@gmail.com_user",
          "modifiedDate": "2018-09-21T03:02:17.625-0500"
        },
        "data": {
          "attributes": {
            "eventType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "d12a2418-bb95-44c9-a672-0f14292d6f0f",
                  "value": "rsconnect"
                }
              ]
            },
            "eventSubType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "1db4434d-85fd-431b-b5ca-eb1b822a46ba",
                  "value": "workAutomationStarted"
                }
              ]
            },
            "profileType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "af8f0636-d18c-484a-9a08-46f3e4641876",
                  "value": "MODEL_IMPORT"
                }
              ]
            },
            "profileName": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "dc53d5f1-bac2-4b2f-aba9-0b58bbfa59b2",
                  "value": "base_datamodel_ui_excel_import_process"
                }
              ]
            },
            "workAutomationId": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a2d40e46-d76f-4c54-a3a9-21894f17c726",
                  "value": "933a5710-5acd-41a3-b0a1-081858ba683e"
                }
              ]
            },
            "message": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cea030a7-29b9-4d9b-8cd6-52342c3bbb33",
                  "value": "The entity import task is received for processing."
                }
              ]
            },
            "integrationType": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "43868250-ffa0-439b-9bde-08c9b1f1d624",
                  "value": "User"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 13
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.