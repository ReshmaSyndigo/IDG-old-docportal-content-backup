---
title: Create Entity with Enhancer given Attribute in a Context set as Do Not Inherit - Inheritance
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario17.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with empty nested attribute in context and show the value inherited at various levels of the inheritance path, using a scenario. 

## Scenario

Create "SKU" entity "Polo Mens Shirt Red" with empty enhancer given nested attribute "uiscochvendorshippingaddress".

{% include callout.html content="**Note**:
If an attribute is set as Do not Inherit, and if default value population gets triggered, the attribute value is retained as _NULL.
" type="primary" %}

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. 
* Include the details of the contexts and attributes inside the data object.
* Populate the nested enhancer given attribute "uiscochvendorshippingaddress" in self context with a non-empty value.
* Set the attribute "uiscochvendorshippingaddress" as Do not Inherit in "Germany" context.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "Polo Mens Shirt Red",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Red",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        "productclassification": {
          "values": [
            {
              "value": "Product Classifications>>Apparel & Footwear>>Hats>>Straw",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "color": {
          "values": [
            {
              "value": "_NULL",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "uiscochvendorshippingaddress": {
          "group": [
            {
              "uiscochvendorshippingaddressinteger": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "999999"
                  }
                ]
              },
              "locale": "en-US",
              "source": "internal"
            },
            {
              "uiscochvendorshippingaddressstring": {
                "values": [
                  {
                    "source": "internal",
                    "locale": "en-US",
                    "value": "address"
                  }
                ]
              },
              "locale": "en-US",
              "source": "internal"
            }
          ]
        }
      },
      "contexts": [
        {
          "context": {
            "country": "Germany"
          },
          <span style="background-color: #FFFF00">"attributes": {</span>
            <span style="background-color: #FFFF00">"uiscochvendorshippingaddress": {</span>
              "group": [
                {
                  <span style="background-color: #FFFF00">"value": "_NULL",</span>
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          }
        },
        {
          "context": {
            "channel": "Germany Web"
          },
          "attributes": {}
        }
      ]
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
          "message": "Submitted sku for create with Id Polo Mens Shirt Red. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "Polo Mens Shirt Red"
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
* You can see that the value of the attribute is shown as "_NULL" in "Germany" context in the response of get entity.
* The [inherited value returned by getCoalesce](api_get_data_coalesce_scenario5.html) shows Do not Inherit value at channel "Germany Web" as it inherits the Do not Inherit value from Germany context.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
