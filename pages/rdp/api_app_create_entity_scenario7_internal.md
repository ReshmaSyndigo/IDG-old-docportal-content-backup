---
title: "Create Entity with Multiple Relationships"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario7.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with relationships, using a scenario. A few examples of relationships between entities are:

| Relationship Type | From Entity |  To Entity |
|----|---------------|--------------|
| isChildOf | SKU| Product | 
| hasImages | SKU  | Images | 
| hasDocuments | SKU | Documents | 
| hasvideos | SKU | Videos | 
| productischildof | Product| ProductGroup |
| crosssell | Product| Product |

## Scenario

Create "Product" entity "PoloMensShirt" with multiple relationships.
* Create relationship "isChildOf"  between "Product" entity "PoloMensShirt" and "ProductGroup" entity "Men's Formals". 
* Create another relationship "crosssell" between "Product" entity "PoloMensShirt" and "Product" entity "PoloTies".

{% picture MultipleRelationships.png alt="Entity with multiple relationships" %}

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:

{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id,name and type. Include the details of the relationships "productischildof" and "crosssell" inside the data object.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreateentity}}**
Headers: Content-Type: application/json
Body:
{
  "clientId": "someguid",
  "clientState": {
    "someJson": {}
  },
  "entity": {
    <span style="background-color: #FFFF00">"id": "PoloMensShirt",</span>
    <span style="background-color: #FFFF00">"name": "Polo Mens Shirt",</span>
    <span style="background-color: #FFFF00">"type": "product",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "PS",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"productischildof": [</span>
          {
            "id": "PoloMensShirt_Rel1",
            "relationshipType": "Composition",
            "relTo": {
              "id": "Men's Formals",
              "type": "productgroup"
            }
          }
        ],
        <span style="background-color: #FFFF00">"crosssell": [</span>
          {
            "id": "PoloMensShirt_Rel2",
            "relationshipType": "association",
            "relTo": {
              "id": "PoloTies",
              "type": "product"
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
    "requestId": "7feb9b09-ca28-4139-8a9b-8d8f29e76bf3"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted product for create with Id PoloMensShirt. Check after some time",
          "messageType": "success",
          "messageParams": [
            "product",
            "create",
            "PoloMensShirt"
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