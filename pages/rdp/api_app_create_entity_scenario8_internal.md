---
title: "Create Entity with Relationship and Relationship Attributes"
sidebar: rdp_sidebar
permalink: api_app_create_entity_scenario8.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreateentity}}** to create an entity with relationship and relationship attributes, using a scenario. 

## Scenario

To create "Product" entity "PoloWomen" with "crosssell" relationship, and relationship attributes "linkdescription","efffrom" and "effto".

{% include snippets/header.html %}

## Request

To create the above entity entity with relationship and relationship attributes, you can use the REST API {{site.data.rdp_glossary.appcreateentity}}. In the request send the following details:
  
{% include snippets/clientState.html %}
* entity: In the [entity](api_entity_object_structure.html) object, provide id, name and type. Include the details of the relationship "crosssell" and relationship attributes inside the data object.
	
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
    <span style="background-color: #FFFF00">"id": "PoloWomen",</span>
    <span style="background-color: #FFFF00">"name": "Polo Women's Formals",</span>
    <span style="background-color: #FFFF00">"type": "product",</span>
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "value": "PW",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      },
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"crosssell": [</span>
          {
            "id": "PoloWomen",
            "relationshipType": "association",
            "relTo": {
              "id": "PoloTies",
              "type": "product"
            },
            <span style="background-color: #FFFF00">"attributes": {</span>
              <span style="background-color: #FFFF00">"efffrom": {</span>
                "values": [
                  {
                    "value": "2018-05-21",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"effto": {</span>
                "values": [
                  {
                    "value": "2018-06-21",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"linkdescription": {</span>
                "values": [
                  {
                    "value": "Often bought together",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              }
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
    "requestId": "4594d6f0-a069-412c-a8f7-2c232b7eeaa1"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted product for create with Id PoloWomen. Check after some time",
          "messageType": "success",
          "messageParams": [
            "product",
            "create",
            "PoloWomen"
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