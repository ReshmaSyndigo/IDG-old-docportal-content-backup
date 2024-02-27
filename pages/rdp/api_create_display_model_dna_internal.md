---
title: Create Display Model for Deeply Nested Attribute (DNA)
sidebar: rdp_sidebar
permalink: api_create_display_model_dna.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

You can create display model for Deeply Nested Attribute (DNA) using the **{{site.data.rdp_glossary.createdatamodel}}** RESTful API. The **entityDisplayModel** allows you to represent or display the DNA attribute for the user by setting the display model properties such as 'displayType', 'sortType', 'sortSequence' and so on.

## Scenario

To create display model for 'nutritionalinformation' DNA.

{% include snippets/header.html %}

## Request

To create display model for DNA, use the REST API **{{site.data.rdp_glossary.createdatamodel}}**. In the request send the following details:
* Specify the id as "sku_entityDisplayModel", "name" as "sku", and "type" as "entityDisplayModel".
* Specify the display type as 'deeplynested'.

<pre>
<code>
POST **{{site.data.rdp_glossary.createdatamodel}}**
Headers: Content-Type: application/json
Body:
{
  "id": "sku_entityDisplayModel",
  "name": "sku",
  "type": "entityDisplayModel",
  "domain": "generic",
  "source": "internal",
  "data": {
    "attributes": {
      <span style="background-color: #FFFF00">"nutritionalinformation": {</span>
        "group": [
          {
            "id": "eea41747-2da8-4a7a-8574-aa737fb5c80a",
            "contains": {
              "properties": {
                <span style="background-color: #FFFF00">"displayType": "textbox",</span>
                "sortSequence": 2
              }
            },
            <span style="background-color: #FFFF00">"ingredientlist": {</span>
              "properties": {
                <span style="background-color: #FFFF00">"displayType": "textbox",</span>
                "sortSequence": 1
              }
            },
            <span style="background-color: #FFFF00">"nutrientdetails": {</span>
              "group": [
                {
                  "id": "a608f5a8-4336-4d53-aa11-c8afe14e8cc7",
                  "servingsizedescription": {
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"servingsize": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"nutrientbasisquantity": {</span>
                    "properties": {
                      "displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"dailyvalueintakedescription": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"nutrientbasisquantitytypecode": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  }
                }
              ],
              "properties": {
                <span style="background-color: #FFFF00">"displayType": "deeplynested"</span>
              }
            },
            <span style="background-color: #FFFF00">"nutritionfacts": {</span>
              "group": [
                {
                  "id": "680152c6-551a-46af-9963-f76c2da67fd9",
                  "servingpercontainer": {
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"amountperservingcalories": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  }
                }
              ],
              "properties": {
                <span style="background-color: #FFFF00">"displayType": "deeplynested"</span>
              }
            },
            <span style="background-color: #FFFF00">"nutrients": {</span>
              "group": [
                {
                  "id": "1d7f0142-33dc-444b-8b18-a82e2f8709af",
                  "cholestrol": {
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"sodium": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"totalfat": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"totalcarbohydrates": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"calcium": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"potassium": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"protein": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"vitamind": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  },
                  <span style="background-color: #FFFF00">"iron": {</span>
                    "properties": {
                      <span style="background-color: #FFFF00">"displayType": "textbox"</span>
                    }
                  }
                }
              ],
              "properties": {
                <span style="background-color: #FFFF00">"displayType": "deeplynested"</span>
              }
            }
          }
        ],
        "properties": {
          <span style="background-color: #FFFF00">"displayType": "deeplynested"</span>
        }
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
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "3ce5b682-48ce-4dd1-97c9-5352fffffc9e"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "message": "Submitted entityDisplayModel for create with Id sku_entityDisplayModel. Check after some time",
          "messageCode": "I0011",
          "messageType": "success",
          "messageParams": [
            "entityDisplayModel",
            "create",
            "sku_entityDisplayModel"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

Verify the created display model for DNA:
* You can use {{site.data.rdp_glossary.getdatamodel}} API to verify the created model. See [Get Data Model](api_get_data_model.html)
* After creating the model, when you [create an entity](api_crt_dna_entities.html) the fields in the entity are displayed as defined in the display model .

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

## Related Links

* [Create Manage Model for Deeply Nested Attribute (DNA)](api_create_manage_model_dna.html)
* [Create an Entity with Deeply Nested Attribute (DNA)](api_crt_dna_entities.html)
* [Update an entity with Deeply Nested Attribute (DNA) values](api_updt_dna_entities.html)
* [Delete Deeply Nested Attribute (DNA) from an Entity](api_del_dna_entities.html)
* [Validate Deeply Nested Attribute (DNA) errors](api_get_data_model_for_dna_scenario4.html)