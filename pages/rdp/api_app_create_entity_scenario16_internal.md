---
title: Create Entity with Multivalued Nested Attribute set as Do Not Inherit
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario16.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with "empty/do not inherit" nested attribute , using a scenario. 

## Scenario

Create "SKU" entity "Polo Mens Shirt Blue_Large" with empty nested attribute "alternatevendor". 

{% include callout.html content="**Notes**:
* If an attribute is set as Do not Inherit, and if default value population gets triggered, the attribute value is retained as _NULL.
* For nested attributes, the attribute as a whole/group can be set as Do not Inherit. For example, the attribute **alternatevendor** can be set to Do not Inherit.
* A nested child attribute cannot be set as Do not Inherit. The child attributes of **alternatevendor** such as **vendorpartnumber**, **vendorid** cannot be individually set as Do not Inherit.
* For multivalued attribute, Do not Inherit can be set as a value. In this case, attribute cannot have any other value. For example, it is not possible to have one row of a multivalued attribute **alternatevendor** as non-empty and another row as Do not Inherit. In this case, rows having values are ignored and Do not Inherit row is saved.
* When a user wants to inherit say only two out of three values of a multivalued attribute, the user has to override the value at the child level with only two values. 
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the attributes inside the data object. To set a nested attribute with "empty/do not inherit" value, specify the value as "_NULL". Here, value of attribute "alternatevendor" is set as "_NULL".

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
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "Polo Mens Shirt Blue_Large",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"alternatevendor": {</span>
          "group": [
            {
              <span style="background-color: #FFFF00">"value": "_NULL",</span>
              "locale": "en-US",
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
* You can see that the value of the attribute is shown as "_NULL" in the response of get entity.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
