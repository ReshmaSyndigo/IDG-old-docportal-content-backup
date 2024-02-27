---
title: Create UOM as Entity Type
sidebar: rdp_sidebar
permalink: api_create_uom_entity_type.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can create a UOM as an Entity Type by using the **{{site.data.rdp_glossary.createdatamodel}}** REST API.

## Scenario

Consider that you wish to create **UOM Weight** UOM as a **Entity Type**.

{% include snippets/header.html %}

## Request

To create **Weight** as an Entity Type, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* externalName: Indicates the external name of the Entity Type.
* baseUnitSymbol: Indicates the base unit symbol for Entity Type. In this scenario, "gm" is a base symbol for "UOM Weight" .

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "id": "uomWeight_entityType",
  "name": "uomweight",
  "type": "entityType",
  "domain": "UOMData",
  "data": {
    "attributes": {
      "externalName": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "value": "UOM Weight"
          }
        ]
      },
      "baseUnitSymbol": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "value": "gm"
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Response

Upon successfully submitting the request, the following response is received from the API:

<pre>
<code>
{
  "id": "uomWeight_entityType",
  "name": "uomweight",
  "type": "entityType",
  "domain": "UOMData",
  "data": {
    "attributes": {
      "externalName": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "168b4315-a65a-41f0-bf7f-975dfb5e7ca0",
            "value": "UOM Weight"
          }
        ]
      },
      "baseUnitSymbol": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "328e8840-5ec0-4ea8-9806-1936ce605ab4",
            "value": "gm"
          }
        ]
      }
    }
  }
}
</code>
</pre>

Verify the created UOM Entity Type
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.