---
title: Create Country with Allowed Locales
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario19.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create a country entity with allowed locales, using a scenario. This helps to filter the locales listed for a country.

## Scenario

To create "country" entity "Germany" with allowed locales as "en-US" and "de-DE". This means in "Germany" context, you can enter data only in "en-US" and "de-DE" locales. If there is no data provided in the allowed locales, data is coalesced from the [fallback locales](api_app_create_entity_scenario20.html). Also, reference data list is filtered based on the allowed locales. See [Reference localization](api_get_data_coalesce_scenario6.html).

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the attributes inside the data object. 
* Specify the locales for the country in "allowedlocales" relationship.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "pQvY77QvTqecQe6OFnp_6g",</span>
    <span style="background-color: #FFFF00">"name": "Germany",</span>
    <span style="background-color: #FFFF00">"type": "country",</span>
    "data": {
      "attributes": {
        "code": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "032f9b5b-784a-477a-a945-c26d96ccabcb",
              "value": "germany"
            }
          ]
        },
        "value": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "id": "16127c5a-2d67-42ef-9d9f-61317972851f",
              "value": "Germany"
            }
          ]
        }
      },
      "relationships": {
        <span style="background-color: #FFFF00">"allowedlocales": [</span>
          {
            "relTo": {
              <span style="background-color: #FFFF00">"id": "1bc496d0-e977-4f23-a31d-72a39119aa53",</span>
              <span style="background-color: #FFFF00">"type": "locale"</span>
            },
            "attributes": {},
            "id": "1bc496d0-e977-4f23-a31d-72a39119aa53",
            "properties": {
              "direction": "both",
              "operation": "association"
            }
          },
          {
            "relTo": {
              <span style="background-color: #FFFF00">"id": "vFexwFTdRI2ENaGBabjJFw",</span>
              <span style="background-color: #FFFF00">"type": "locale"</span>
            },
            "attributes": {},
            "id": "vFexwFTdRI2ENaGBabjJFw",
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
    "requestId": "dfc1710c-a5c1-45c7-a7b9-6b9083eb1f26"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted country for create with Id pQvY77QvTqecQe6OFnp_6g. Check after some time",
          "messageType": "success",
          "messageParams": [
            "country",
            "create",
            "pQvY77QvTqecQe6OFnp_6g"
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
