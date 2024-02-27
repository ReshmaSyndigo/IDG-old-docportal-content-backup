---
title: Search Entities based on mdmid
sidebar: rdp_sidebar
permalink: api_get_match_results_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getmatch}}** to search an entity whose "mdmid" matches the specified "mdmid". 

{% if site.build == "internal" %}
Consider that you have created a match configuration to perform a deterministic match on mdmid. See [Create Deterministic Match Configuration to Match mdmid](api_match_config_scenario3.html), for information. Consider that you already have an entity with mdmid - Z13 in the application. The following table lists the match results when a duplicate entity is created/updated:
{% endif %}

{% if site.build == "external" %}
Consider that you have created a match configuration to perform a deterministic match on mdmid. Consider that you already have an entity with mdmid - Z13 in the application. The following table lists the match results when a duplicate entity is created/updated:
{% endif %}

| mdmid | Match Result |
|--------------------|
| Z13 | Match |
| skuZ13 | No Match | 
 
## Scenario

To search if a "sku" entity with mdmid "Z13" exists in the system.

{% if site.build == "internal" %}
{% include callout.html content="**Note**: Match/Search Services are defined based on the [match configuration](api_create_config_scenario2.html) provided by the user for the entity type. If the configuration is not explicitly defined, then it falls back to manage model of entity type and matches based on the attributes whose properties **isEntityIdentifier** and **isExternalName** are set as true.
" type="primary" %}
{% endif %}

{% include snippets/header.html %}

## Request

To search the above entity, use the REST API {{site.data.rdp_glossary.getmatch}}. In the request send the following details:

* entity : Specify the entity id and entity type.
* attributes : Specify the value of mdmid you wish to search. 

<pre>
<code>
POST **{{site.data.rdp_glossary.getmatch}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "eAhpYaggJHjyP",</span>
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
    "requestId": "770d87c7-bfca-4202-9b67-5aacd4ebf2a0"
  },
  "response": {
    "entities": [
      {
        "id": "Zeo Sweat Shirts",
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