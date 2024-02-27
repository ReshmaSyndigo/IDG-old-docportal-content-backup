---
title: Create Entity with Attribute in a Locale set as Do Not Inherit
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario18.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with "empty/do not inherit" attribute value in a locale and non-empty value in another locale, using a scenario. 

## Scenario

To create "SKU" entity "Polo Mens Shirt Blue_Large" with attribute "description" having Do not Inherit value in "de-DE" locale and non-empty value in "en-US" locale. 

{% include callout.html content="**Note**:
If an attribute is set as Do not Inherit, and if default value population gets triggered, the attribute value is retained as _NULL.
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
    <span style="background-color: #FFFF00">"id": "Polo Mens Shirt Blue_Large",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Blue_Large",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "Polo Mens Shirt Blue_Large",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "mdmname": {
          "values": [
            {
              "value": "Polo Mens Shirt Blue_Large",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"description": {</span>
          "values": [
            {
              "value": "100% Cotton",
              "locale": "en-US",
              "source": "internal"
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
          "message": "Submitted sku for create with Id Polo Mens Shirt Blue_Large. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "Polo Mens Shirt Blue_Large"
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
* You can see that "description" attribute has "_NULL" value in "de-DE" locale and non-empty value in "en-US" locale.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.