---
title: Create Entity with Nested Attribute in a Locale set as Do Not Inherit
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario21.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with nested attribute set as "empty/do not inherit" in a locale and non-empty in another locale, using a scenario. 

## Scenario

To create "SKU" entity "Polo Black" with nested attribute "alternatevendor" having Do not Inherit value in "de-DE" locale and non-empty value in "en-US" locale. 

{% include callout.html content="**Note**: If an attribute is set as Do not Inherit, and if default value population gets triggered, the attribute value is retained as _NULL.
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the attributes inside the data object. 
* Specify a non-empty value for attribute "alternatevendor" in "en-US" locale.
* Set the attribute "alternatevendor" as Do not Inherit in "de-DE" locale.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "Polo Black",</span>
    <span style="background-color: #FFFF00">"name": "Polo Black",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "Polo Black",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "Polo Black",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"alternatevendor": {</span>
          "group": [
            {
              "vendorpartnumber": {
                "values": [
                  {
                    "value": "Vendor1",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "vendorid": {
                "values": [
                  {
                    "value": "N123",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "vendorcost": {
                "values": [
                  {
                    "value": "11.24",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "vendorname": {
                "values": [
                  {
                    "value": "Smart Apparels",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "source": "internal",
              "locale": "en-US"
            },
            {
              <span style="background-color: #FFFF00">"value": "_NULL",</span>
              <span style="background-color: #FFFF00">"locale": "de-DE",</span>
              "source": "internal"
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

If the entity create request is submitted successfully, then the following response is received from create entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5fb5cd68-f18e-40ab-8e87-0dd814b9b7d5"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id Polo Black. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "Polo Black"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Entity with Empty Attribute](api_app_get_entity_scenario27.html).
* You can see that "alternatevendor" attribute has "_NULL" value in "de-DE" locale and non-empty value in "en-US" locale.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
