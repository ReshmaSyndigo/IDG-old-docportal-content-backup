---
title: "Add Relationship in Multiple Contexts"
sidebar: rdp_sidebar
permalink: api_app_update_entity_scenario7.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appupdateentity}}** to add a relationship in multiple contexts.

## Scenario

To add "ischildof" relationship for "sku" entity "CVShirts" in "self" context, "Germany" context and "Germany Web" context.

{% include snippets/header.html %}

## Request

To add the above relationships, you can use the REST API {{site.data.rdp_glossary.appupdateentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type. 
* data : Provide relationship details to be added in "self" context, "Germany" context and "Germany Web" context.

<pre>
<code>
POST **{{site.data.rdp_glossary.appupdateentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "CVShirts",</span>
    <span style="background-color: #FFFF00">"name": "CVShirts",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      <span style="background-color: #FFFF00">"relationships": {</span>
        <span style="background-color: #FFFF00">"ischildof": [</span>
          {
            "id": "Rel000",
            "relationshipType": "Composition",
            "relTo": {
              "id": "eGRZ0BhyWdamA",
              "type": "Product"
            },
            "attributes": {
              "linkdescription": {
                "values": [
                  {
                    "value": "Relation",
                    "source": "internal",
                    "locale": "en-US"
                  }
                ]
              }
            }
          }
        ]
      },
      <span style="background-color: #FFFF00">"contexts": [</span>
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "Germany"</span>
          },
          <span style="background-color: #FFFF00">"relationships": {</span>
            <span style="background-color: #FFFF00">"ischildof": [</span>
              {
                "id": "Rel000",
                "relationshipType": "Composition",
                "relTo": {
                  "id": "eGRZ0BhyWdamA",
                  "type": "Product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "value": "Relation in Germany",
                        "source": "internal",
                        "locale": "en-US"
                      }
                    ]
                  }
                }
              },
              {
                "id": "Rel001",
                "relationshipType": "Composition",
                "relTo": {
                  "id": "eZ9OV3qEH53If",
                  "type": "Product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "value": "Relation 1",
                        "source": "internal",
                        "locale": "en-US"
                      }
                    ]
                  }
                }
              }
            ]
          }
        },
        {
          "context": {
            <span style="background-color: #FFFF00">"channel": "Germany Web"</span>
          },
          <span style="background-color: #FFFF00">"relationships": {</span>
            <span style="background-color: #FFFF00">"ischildof": [</span>
              {
                "id": "Rel000",
                "relationshipType": "Composition",
                "relTo": {
                  "id": "eGRZ0BhyWdamA",
                  "type": "Product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "value": "Relation in Germany",
                        "source": "internal",
                        "locale": "en-US"
                      }
                    ]
                  }
                }
              },
              {
                "id": "Rel002",
                "relationshipType": "Composition",
                "relTo": {
                  "id": "eJs5Q5HBZrXSX",
                  "type": "Product"
                },
                "attributes": {
                  "linkdescription": {
                    "values": [
                      {
                        "value": "Relation 2",
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
      ]
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
    "requestId": "c69df831-c38d-409e-b34b-7146b2b2a4be"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id CVShirts. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "CVShirts"
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