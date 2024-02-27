---
title: Update an entity with Deeply Nested Attribute (DNA) values
sidebar: rdp_sidebar
permalink: api_updt_dna_entities.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can update an entity with Deeply Nested Attribute (DNA) values using the RESTful API **{TenantURL or ID}/api/entityappservice/update**.

{% include callout.html content="**Note:** The system follows **Flush and Fill** concept for DNA. The system persists DNA as same as what is sent as API request. So, you must always send the entire DNA in the API request, even if one child regular attribute needs to be updated in whole DNA hierarchy. As a result, the system does not validate duplicate data sent the whole DNA. System will persist as is if DNA with duplicate rows/duplicate values in regular attribute is sent in API request. The system will also consider DNA to update even if actual values in DNA are not changed. For example, as compared to persisted DNA, root DNA in API request is such that,
* sequence of its rows (or rows of child DNA at any level) is changed but children’s values are intact
* sequence of values is changed for collection type of children, but values are intact (at any level in root DNA)
* delete a attribute that has value in the entire DNA, you must pass the **action:delete** at the parent row level. <br> 
Such DNA in API request is persisted in system as is according to the sequence given in request. So even if values are intact and sequence is changed, the system will consider it as DNA udpate.
" type="primary" %}

## Scenario

To update the 'servingsizedescription' attribute from '1 Serving per Container' to '2 Serving per Container. This attribute is part of the 'nutritionalinformation' DNA.

{% include snippets/header.html %}

## Request

To update the entity details for deeply nested attribute, use the REST API **{TenantURL or ID}/api/entityappservice/update**.

<pre><code>
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
              "id": "TESTHA",
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
                          <span style="background-color: #FFFF00"> "value": "2 Serving per Container", </span>
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
                    },
                    "iron": {
                      "values": [
                        {
                          "value": 6,
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

If the entity model update request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "TESTID"
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
</code></pre>

## Sample: 2: Delete last attribute that has value in the entire DNA

Consider you wish to delete a attribute (servingsizedescription), which has value in the entire DNA. As DNA follows flush and fill concept, you must pass the "action:delete" at the parent row level. 

A sample JSON is displayed.

<pre><code>
{
  "entity": {
    "id": "integrationImportEntity001",
    "type": "sku",
    "data": {
      "attributes": {
        "nutritionalinformation": {
          "group": [
            {
              "id": "TESTHA",
              "locale": "en-US",
              "source": "internal",
              "nutrientdetails": {
                "group": [
                  {
                    "locale": "en-US",
                    "source": "internal",
                    <span style="background-color: #FFFF00">"servingsizedescription": {</span>
                      <span style="background-color: #FFFF00">"values": [</span>
                        {
                          <span style="background-color: #FFFF00">"value": "2 Serving per Container",</span>
                          <span style="background-color: #FFFF00">"locale": "en-US",</span>
                          <span style="background-color: #FFFF00">"source": "internal"</span>
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

## Sample 2: Request

The update request is as follows:

<pre><code>
{
  "entity": {
    "id": "integrationImportEntity001",
    "type": "sku",
    "data": {
      "attributes": {
        "nutritionalinformation": {
          "group": [
            {
              "id": "TESTHA",
              "locale": "en-US",
              "source": "internal",
              <span style="background-color: #FFFF00">"nutrientdetails": {</span>
                <span style="background-color: #FFFF00">"group": [</span>
                  {
                    <span style="background-color: #FFFF00">"locale": "en-US",</span>
                    <span style="background-color: #FFFF00">"source": "internal"</span>
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

## Sample 2: Response

As the default behavior of DNA is flush and fill, "servingsizedescription attribute" will not get deleted with this approach.

In such cases where the attribute deleted is the only attribute left over in the entire hierarchy of DNA, you must pass "action:delete" attribute at the DNA parent row level as shown below.

The following DNA response is received.

<pre><code>
{
  "entity": {
    "id": "integrationImportEntity001",
    "type": "sku",
    "data": {
      "attributes": {
        "nutritionalinformation": {
          "group": [
            {
              "action" : "delete",
              "id": "TESTHA",
              "locale": "en-US",
              "source": "internal",
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

Verify the created entity:<br>

* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

## Related Links

* [Create Display Model for Deeply Nested Attribute (DNA)](api_create_display_model_dna.html)
* [Create Manage Model for Deeply Nested Attribute (DNA)](api_create_manage_model_dna.html)
* [Create an Entity with Deeply Nested Attribute (DNA)](api_crt_dna_entities.html)
* [Delete Deeply Nested Attribute (DNA) from an Entity](api_del_dna_entities.html)
* [Validate Deeply Nested Attribute (DNA) errors](api_get_data_model_for_dna_scenario4.html)