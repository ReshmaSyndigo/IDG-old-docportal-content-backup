---
title: Create an Entity with Deeply Nested Attribute (DNA)
sidebar: rdp_sidebar
permalink: api_crt_dna_entities.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You can create an entity with Deeply Nested Attribute (DNA) using the RESTful API **{TenantURL or ID}/api/entityappservice/create**.

{% include callout.html content="**Note:** All children in root DNA must have same locale as the row they are contained in.
" type="primary" %}

## Scenario

To create an entity with 'nutritionalinformation' DNA.

{% include snippets/header.html %}

## Request

To create an entity with DNA, use the REST API **{TenantURL or ID}/api/entityappservice/create**. A sample JSON is as follows.

<pre><code>
POST **{TenantURL or ID}/api/entityappservice/create**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "integrationImportEntity001",
    "type": "sku",
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"nutritionalinformation": {</span>
          "group": [
            {
              "id": "TESTHA",
              "locale": "en-US",
              "source": "internal",
              <span style="background-color: #FFFF00">"contains": {</span>
                "values": [
                  {
                    "value": "Wheat and milk", 
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"ingredientlist": {</span>
                "values": [
                  {
                    "value": "Bulgur wheat", 
                    "locale": "en-US",
                    "source": "internal"
                  }
                ]
              },
              <span style="background-color: #FFFF00">"nutrientdetails": {</span>
                "group": [
                  {
                    "locale": "en-US",
                    "source": "internal",
                    "servingsizedescription": {
                      "values": [
                        {
                          <span style="background-color: #FFFF00"> "value": "1 Serving per Container", </span>
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"servingsize": {</span>
                      "values": [
                        {
                          "value": "250 ml", 
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"dailyvalueintakedescription": {</span>
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
              <span style="background-color: #FFFF00">"nutritionfacts": {</span>
                "group": [
                  {
                    "locale": "en-US",
                    "source": "internal",
                    <span style="background-color: #FFFF00">"servingpercontainer": {</span>
                      "values": [
                        {
                          "value": "4",
                          "locale": "en-US",
                          "source": "internal"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"amountperservingcalories": {</span>
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
              <span style="background-color: #FFFF00">"nutrients": {</span>
                "group": [
                  {
                    "locale": "en-US",
                    "source": "internal",
                    <span style="background-color: #FFFF00">"cholestrol": {</span>
                      "values": [
                        {
                          "value": 5, 
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"sodium": {</span>
                      "values": [
                        {
                          "value": 430, 
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "g"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"totalcarbohydrates": {</span>
                      "values": [
                        {
                          "value": 46, 
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "g"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"calcium": {</span>
                      "values": [
                        {
                          "value": 260, 
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"potassium": {</span>
                      "values": [
                        {
                          "value": 240, 
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"protein": {</span>
                      "values": [
                        {
                          "value": 11, 
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "g"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"vitamind": {</span>
                      "values": [
                        {
                          "value": 2, 
                          "locale": "en-US",
                          "source": "internal",
                          "uom": "mg"
                        }
                      ]
                    },
                    <span style="background-color: #FFFF00">"iron": {</span>
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

If the entity model create request is submitted successfully, then the following response is received from the API:

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
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id integrationImportEntity001. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "integrationImportEntity001"
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

## Related Links

* [Create Display Model for Deeply Nested Attribute (DNA)](api_create_display_model_dna.html)
* [Create Manage Model for Deeply Nested Attribute (DNA)](api_create_manage_model_dna.html)
* [Update an entity with Deeply Nested Attribute (DNA) values](api_updt_dna_entities.html)
* [Delete Deeply Nested Attribute (DNA) from an Entity](api_del_dna_entities.html)
* [Validate Deeply Nested Attribute (DNA) errors](api_get_data_model_for_dna_scenario4.html) 