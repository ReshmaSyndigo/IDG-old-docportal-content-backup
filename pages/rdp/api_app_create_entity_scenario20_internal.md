---
title: Create Locale with Fallback Locales
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario20.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create a locale entity with fallback locale sequence, using a scenario. 

## Scenario

To create "de-DE" entity with fallback locale sequence as "en-US" and "fr-FR". 
* If there are no values populated for the "localizable" data in "de-DE" locale, then it falls back to the values in "fallback locale sequence 1" - "en-US". 
* If there are no values available in "en-US" locale as well, it falls back to the values in "fallback locale sequence 2" - "fr-FR". 
* If there are no values populated in any of the locales in the fallback sequence, then it falls back to the system default locale - "defaultValueLocale" in the tenant configuration.

<pre><code>
{
  "configObjects": [
    {
      "id": "rdw",
      "name": "rdw-tenant-config",
      "type": "tenantserviceconfig",
      "data": {
        "jsonData": {
          "tenantId": "rdw",
          "tenantAuthKey": "2527f502-8e88-4614-80ae-5888202af9c5",
          "messageLocale": "en-US",
          "defaultValueLocale": "en-US",
          "defaultValueSource": "internal",
          "timezone": "America/Chicago",
          "logLevel": "info",
          ...
          ...
          ...
        }
      }
    }
  ]
}
</code></pre> 

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the attributes inside the data object. 
* In relationships section, specify the fallback locale relationship with fallback sequence.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "vFexwFTdRI2ENaGBabjJFw",</span>
    <span style="background-color: #FFFF00">"name": "de-DE",</span>
    <span style="background-color: #FFFF00">"type": "locale",</span>
    "data": {
      "attributes": {
        "externalname": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "c48cdc89-659c-43e0-8672-a800fe8153ff",
              "value": "German - Germany"
            }
          ]
        },
        "language": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "762d9942-d9e0-496e-a0e9-c9add4fec310",
              "value": "German"
            }
          ]
        },
        "code": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "6ebc6ad5-34fc-460f-a240-395663d602c5",
              "value": "de-DE"
            }
          ]
        },
        "region": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "d7d43853-7a15-4b41-91d4-d6e4c4c1e515",
              "value": "Germany"
            }
          ]
        }
      },
      "relationships": {
        <span style="background-color: #FFFF00">"fallbacklocale": [</span>
          {
            "relTo": {
              "id": "1bc496d0-e977-4f23-a31d-72a39119aa53",
              "type": "locale"
            },
            "attributes": {
              <span style="background-color: #FFFF00">"fallbacklocalesequence": {</span>
                "values": [
                  {
                    "source": "internal",
                    <span style="background-color: #FFFF00">"locale": "en-US",</span>
                    "value": 1
                  }
                ]
              },
              <span style="background-color: #FFFF00">"fallbacksequence": {</span>
                "values": [
                  {
                    "source": "internal",
                    <span style="background-color: #FFFF00">"locale": "en-US",</span>
                    "value": 1
                  }
                ]
              }
            },
            "id": "1bc496d0-e977-4f23-a31d-72a39119aa53",
            "properties": {
              "direction": "both",
              "operation": "association"
            }
          },
          {
            "relTo": {
              "id": "F6bg43kiSWGl1EM2HMMxOQ",
              "type": "locale"
            },
            "attributes": {
              <span style="background-color: #FFFF00">"fallbacklocalesequence": {</span>
                "values": [
                  {
                    "source": "internal",
                    <span style="background-color: #FFFF00">"locale": "fr-FR",</span>
                    "value": 2
                  }
                ]
              },
              <span style="background-color: #FFFF00">"fallbacksequence": {</span>
                "values": [
                  {
                    "source": "internal",
                    <span style="background-color: #FFFF00">"locale": "fr-FR",</span>
                    "value": 2
                  }
                ]
              }
            },
            "id": "F6bg43kiSWGl1EM2HMMxOQ",
            "properties": {
              "direction": "both",
              "operation": "association"
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Response

If the entity create request is submitted successfully, then the following response is received from create entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "380d2d8d-5ab7-4c15-acef-4a41a619e5fc"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted locale for create with Id vFexwFTdRI2ENaGBabjJFw. Check after some time",
          "messageType": "success",
          "messageParams": [
            "locale",
            "create",
            "vFexwFTdRI2ENaGBabjJFw"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Entities](api_app_get_entity.html).
* If you know the details of your elastic server and the indices, then you can verify the created entity using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
