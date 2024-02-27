---
title: Search Entities based on mdmid and mdmname
sidebar: rdp_sidebar
permalink: api_get_match_results_scenario4.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmatch}}** to search an entity based on the specified "mdmid" and "mdmname".

{% if site.build == "internal" %}
Consider that you have created a match configuration to perform a deterministic match on mdmid. See [Create Deterministic Match Configuration to Match mdmid and mdmname](api_match_config_scenario4.html), for information. Consider that you already have an entity with mdmid - Z13  and mdmname - Zeo Sweat Shirts in the application. The following table lists the match results when a duplicate entity is created/updated:
{% endif %}

{% if site.build == "external" %}
Consider that you have created a match configuration to perform a deterministic match on mdmid. Consider that you already have an entity with mdmid - Z13  and mdmname - Zeo Sweat Shirts in the application. The following table lists the match results when a duplicate entity is created/updated:
{% endif %}


| mdmid | mdmname| Match Result |
|----|----------|--------------|
| Z13 | Zeo Sweat Shirts  | Match |
| pdZ13 | Zeo Sweat Shirts | No Match | 
| Z13 | Zeo Sweat Shirt | No Match | 
| pdZ31 | Zeo Sweat Skirt | No Match |

## Scenario

To search if a "sku" entity with mdmid "Z13" and mdmname "Zeo Sweat Shirts" exists in the system based on the defined match configurations.

{% if site.build == "internal" %}
{% include callout.html content="**Note**: Match Search Services are defined based on the [match configuration](api_create_config_scenario2.html) provided by the user for the entity type. If the configuration is not explicitly defined, then it falls back to manage model of entity type and matches based on the attributes whose properties **isEntityIdentifier** and **isExternalName** are set as true.
" type="primary" %}
{% endif %}

{% if site.build == "external" %}
{% include callout.html content="**Note**: Match Search Services are defined based on the match configuration provided by the user for the entity type. If the configuration is not explicitly defined, then it falls back to manage model of entity type and matches based on the attributes whose properties **isEntityIdentifier** and **isExternalName** are set as true.
" type="primary" %}
{% endif %}

{% include snippets/header.html %}

## Request

To search the above entity, use the REST API {{site.data.rdp_glossary.getmatch}}. In the request send the following details:

* entity : Specify the entity id and entity type.
* attributes : Specify the values of mdmid and mdmname you wish to search. 

<pre>
<code>
POST **{{site.data.rdp_glossary.getmatch}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
  	<span style="background-color: #FFFF00">"id": "eLriXmRN0SqCm",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"mdmid": {</span>
          "values": [
            {
              "value": "Z13",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"mdmname": {</span>
          "values": [
            {
              "value": "Zeo Sweat Shirts",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response

If there is a duplicate entity present in the system then the following response is returned:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e3c86ca7-97c0-45a8-bca2-0854b9689642"
  },
  "response": {
    "entities": [
      {
        "id": "eR5OSapWbA6XE",
        "name": "Zeo Sweat Shirts",
        "type": "sku"
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.