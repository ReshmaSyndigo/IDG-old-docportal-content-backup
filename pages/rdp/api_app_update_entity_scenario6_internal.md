---
title: "Add New Relationship"
sidebar: rdp_sidebar
permalink: api_app_update_entity_scenario6.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to add new relationships to an entity, using a scenario. 

## Scenario

To add two new relationships "productischildof" and "crosssell" to "Product" entity "Polo Women's Formals".

{% include snippets/header.html %}

## Request

To update the above entity, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:

* entity: In the [entity](api_entity_object_structure.html) object, provide the id, name and type. In the data object, include the details about the new relationships to be added.

<pre>
<code>
POST **{{site.data.rdp_glossary.appupdateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "PoloWomen",</span>
    <span style="background-color: #FFFF00">"name": "Polo Women's Formals",</span>
    <span style="background-color: #FFFF00">"type": "product",</span>
    "data": {
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"productischildof": [</span>
          {
            "id": "ChildOf",
            "relationshipType": "Composition",
            "relTo": {
              "id": "Women's Formals",
              "type": "productgroup"
            }
          }
        ],
        <span style="background-color: #FFFF00">"crosssell": [</span>
          {
            "id": "CrossSell2",
            "relationshipType": "association",
            "relTo": {
              "id": "PoloTies_Checked",
              "type": "sku"
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

If the entity update request is submitted successfully, then the following response is received from update entity API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "d797ee16-8f53-44d0-b2f2-45439ea2fc67"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted product for update with Id PoloWomen. Check after some time",
          "messageType": "success",
          "messageParams": [
            "product",
            "update",
            "PoloWomen"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the updated entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the updated entity. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.