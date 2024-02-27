---
title: Delete Deeply Nested Attribute (DNA) from an Entity
sidebar: rdp_sidebar
permalink: api_del_dna_entities.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can delete the Deeply Nested Attribute (DNA) from an entity by using the RESTful API **{TenantURL or ID}/api/entityappservice/update**.

You can delete a DNA (in model or entity), its rows, and its child attributes in the following ways:
* To delete the whole DNA, you must specify the “action": delete” for root DNA in update request similar to any attribute delete.
* To delete root DNA row, you must specify the “action": delete” for such rows of root DNA in update request.

Apart from these cases, the “action": delete” is not supported for inner levels of root DNA. To delete any child DNA or child regular attribute or child DNA row, you must include that the child DNA or its row or regular child attribute in 'update' request. As the system follows flush and fill concept for DNA, anything is given in request for DNA is persisted as is. So, expectation is that you must send root DNA with only the data that is required to be persisted in system. Thus, child DNA or its row or any regular child attribute that is not included as part of API request, would be considered to be deleted and those will not be resulted as part of the get API response as they are not persisted in the system.

<br> 

##### Sample 1: Sample JSON to define the “action": delete” for ROOT DNA.

<pre>
<code>
{
  "entity": {
    "id": "integrationImportEntity001",
    "type": "sku",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"nutritionalinformation": {
          "action": "delete",</span>
          "group": [
            {
              "id": "43ac0d55-3cb2-483e-9e7a-e2c5858087ce",
              "locale": "en-US",
              "source": "internal",
              "contains": {
                "values": [
                  {
                    "id": "441f56ea-cded-46d7-8a54-c42c9a3de2bd",
                    "value": "Wheat and milk",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "ingredientlist": {
                "values": [
                  {
                    "id": "91aa9663-5ee6-4e21-bbc0-966fc00eaf34",
                    "value": "Bulgur wheat",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "nutrientdetails": {
                "group": [
                  {
                    "id": "2763f8fb-06b9-47b6-8b33-dce31fcc17bb",
                    "locale": "en-US",
                    "source": "internal",
                    "servingsizedescription": {
                      "values": [
                        {
                          "id": "78837d23-a6c5-493f-ba2e-53f3fb33319d",
                          "value": "1 Serving per Container",
                          "locale": "en-US",
                          "source": "internal"
                        },
                        {
                          "id": "67837d23-a6c5-493f-ba2e-53f3fb33319d",
                          "value": "2 Serving",
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    }
                  }
                ]
              },
              "nutrients": {
                "group": [
                  {
                    "id": "b8f2df69-4fad-4ae8-a24c-0166d5e887af",
                    "locale": "en-US",
                    "source": "internal",
                    "cholestrol": {
                      "values": [
                        {
                          "id": "ba27e9c8-106a-4958-91cd-fcebf753bdce",
                          "value": 5.2,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "cg"
                        }
                      ]
                    },
                    "sodium": {
                      "values": [
                        {
                          "id": "5627e9c8-106a-4958-91cd-fcebf753bdce",
                          "value": "sodium",
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>
<br>

##### Sample 2: Sample JSON to define the “action": delete” for root DNA row.

<pre>
<code>
{
  "entity": {
    "id": "integrationImportEntity001",
    "type": "sku",
    "data": {
      "attributes": {
        "nutritionalinformation": {
          "group": [
            {
              "id": "43ac0d55-3cb2-483e-9e7a-e2c5858087ce",
              "locale": "en-US",
              "source": "internal",
              "contains": {
                "values": [
                  {
                    "id": "441f56ea-cded-46d7-8a54-c42c9a3de2bd",
                    "value": "Wheat and milk",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "ingredientlist": {
                "values": [
                  {
                    "id": "91aa9663-5ee6-4e21-bbc0-966fc00eaf34",
                    "value": "Bulgur wheat",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "nutrientdetails": {
                "group": [
                  {
                    "id": "2763f8fb-06b9-47b6-8b33-dce31fcc17bb",
                    "locale": "en-US",
                    "source": "internal",
                    "servingsizedescription": {
                      "values": [
                        {
                          "id": "78837d23-a6c5-493f-ba2e-53f3fb33319d",
                          "value": "1 Serving per Container",
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    }
                  }
                ]
              },
              "nutrients": {
                "group": [
                  {
                    "id": "b8f2df69-4fad-4ae8-a24c-0166d5e887af",
                    "locale": "en-US",
                    "source": "internal",
                    "cholestrol": {
                      "values": [
                        {
                          "id": "ba27e9c8-106a-4958-91cd-fcebf753bdce",
                          "value": 5.2,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "cg"
                        }
                      ]
                    },
                    "sodium": {
                      "values": [
                        {
                          "id": "5627e9c8-106a-4958-91cd-fcebf753bdce",
                          "value": "sodium",
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            <span style="background-color: #FFFF00">{
              "action": "delete",</span>
              "locale": "de-DE",
              "source": "internal",
              "contains": {
                "values": [
                  {
                    "value": "Tea and Coffee",
                    "locale": "de-DE",
                    "source": "internal"
                  }
                ]
              },
              "nutrientdetails": {
                "group": [
                  {
                    "locale": "de-DE",
                    "source": "internal",
                    "servingsize": {
                      "values": [
                        {
                          "value": "1 Serving",
                          "locale": "de-DE",
                          "source": "internal"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Scenario

Consider that you wish to delete the **iron** attribute from the **nutrients** CHILD level. 

{% include snippets/header.html %}

## Request

To delete only the selected attribute (which is part of the DNA), use the REST API **{TenantURL or ID}/api/entityappservice/update**.

Sample JSON to define the “action": delete” for no action delete supported within root DNA.

In the request, do not include the following:

<pre>
<code>
{
  "id": "d130a330-3029-4c96-bac3-82f697fac6de",
  <span style="background-color: #FFFF00">"iron": {
    "properties": {
      "uomEntityInfo": [
        {
          "uomEntityType": "uomWeight",
          "uomRelationshipName": "hasUnits"
        }
      ],
      "dataType": "decimal"</span>
    }
  }
}
</code>
</pre>

Send the following request:

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/update**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "integrationImportEntity001",
    "type": "sku",
    "data": {
      "attributes": {
        "nutritionalinformation": {
          "group": [
            {
              "id": "TESTHAID",
              "locale": "en-US",
              "source": "internal",
              "contains": {
                "values": [
                  {
                    "value": "Wheat and milk",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "ingredientlist": {
                "values": [
                  {
                    "value": "Bulgur wheat",
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              "nutrientdetails": {
                "group": [
                  {
                    "locale": "en-US",
                    "source": "internal",
                    "servingsizedescription": {
                      "values": [
                        {
                          "value": "2 Serving per Container",
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    },
                    "servingsize": {
                      "values": [
                        {
                          "value": "250 ml",
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    },
                    "dailyvalueintakedescription": {
                      "values": [
                        {
                          "value": "The value that are provided are the Daily Value for each nutrient in a serving of the food. The Daily Values are reference amounts (in grams, milligrams, or micrograms) of nutrients to consume or not to exceed each day.",
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    }
                  }
                ]
              },
              "nutritionfacts": {
                "group": [
                  {
                    "locale": "en-US",
                    "source": "internal",
                    "servingpercontainer": {
                      "values": [
                        {
                          "value": "4",
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    },
                    "amountperservingcalories": {
                      "values": [
                        {
                          "value": "240",
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    }
                  }
                ]
              },
              "nutrients": {
                "group": [
                  {
                    "locale": "en-US",
                    "source": "internal",
                    "cholestrol": {
                      "values": [
                        {
                          "value": 5,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    },
                    "sodium": {
                      "values": [
                        {
                          "value": 430,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "g"
                        }
                      ]
                    },
                    "totalcarbohydrates": {
                      "values": [
                        {
                          "value": 46,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "g"
                        }
                      ]
                    },
                    "calcium": {
                      "values": [
                        {
                          "value": 260,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    },
                    "potassium": {
                      "values": [
                        {
                          "value": 240,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    },
                    "protein": {
                      "values": [
                        {
                          "value": 11,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "g"
                        }
                      ]
                    },
                    "vitamind": {
                      "values": [
                        {
                          "value": 2,
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  }
}
</code></pre>

## Response

If the entity model delete request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "REQUESTID"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id integrationImportEntity001. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "integrationImportEntity001"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

{% if site.build == "internal" %}
## Related Links

* [Create Display Model for Deeply Nested Attribute (DNA)](api_create_display_model_dna.html)
* [Create Manage Model for Deeply Nested Attribute (DNA)](api_create_manage_model_dna.html)
* [Create an Entity with Deeply Nested Attribute (DNA)](api_crt_dna_entities.html)
* [Update an entity with Deeply Nested Attribute (DNA) values](api_updt_dna_entities.html)
* [Validate Deeply Nested Attribute (DNA) errors](api_get_data_model_for_dna_scenario4.html)
{% endif %}

{% if site.build == "external" %}
## Related Link

* [Delete Deeply Nested Attribute (DNA) from an Entity](api_del_dna_entities.html)
{% endif %}