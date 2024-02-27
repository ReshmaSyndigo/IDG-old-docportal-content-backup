---
title: "Create Entity with Nested Attributes having Multiple Rows"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario12.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with nested attributes with multiple rows, using a scenario.

## Scenario

Create "SKU" entity "Polo Mens Shirt Teal" with multiple rows of nested attribute "alternatevendor". This nested attribute is made up of simple attributes "vendorpartnumber", "vendorid", "vendorcost" and "vendorname" attributes.

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type.
* data : Provide the attribute details of the entity. 
* data->group : Specify comma separated list of nested attribute "alternatevendor" each indicating a row. Each row of nested attribute "alternatevendor" is made up of simple attributes "vendorpartnumber", "vendorid", "vendorcost" and "vendorname".

| vendorpartnumber | vendorid | vendorcost | vendorname |
|---------|---------------|------------|-------|
| Vendor1 | N123 | 11.24 | Smart Apparels |
| Vendor2 | N456 | 11.24 | Trendy Apparels |

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "Polo Mens Shirt Teal",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt Teal",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
        "mdmid": {
          "values": [
            {
              "value": "Polo Mens Shirt Teal",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        <span style="background-color: #FFFF00">"alternatevendor": {</span>
          <span style="background-color: #FFFF00">"group": [</span>
            {
              <span style="background-color: #FFFF00">"vendorpartnumber": {</span>
                "values": [
                  {
                    "value": "Vendor1",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              "<span style="background-color: #FFFF00">vendorid": {</span>
                "values": [
                  {
                    "value": "N123",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"vendorcost": {</span>
                "values": [
                  {
                    "value": "11.24",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"vendorname": {</span>
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
              <span style="background-color: #FFFF00">"vendorpartnumber": {</span>
                "values": [
                  {
                    "value": "Vendor2",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"vendorid": {</span>
                "values": [
                  {
                    "value": "N456",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"vendorcost": {</span>
                "values": [
                  {
                    "value": "11.24",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"vendorname": {</span>
                "values": [
                  {
                    "value": "Trendy Apparels",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
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

If the entity create request is submitted successfully, then the following response is received from create entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "a3a228d2-6fc0-4e46-a4b2-2731bb6dd4c7"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id Polo Mens Shirt Teal. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "Polo Mens Shirt Teal"
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

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.