---
title: Get Entities Sorted in Ascending Order
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario14.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get the entities sorted in **Ascending** order. You can sort the entities based  on different attributes with different data types such as Integer, Decimal, Datetime, Boolean, and String.

## Scenario

To get "SKU" entities sorted in Ascending order of "mdmid" which is of "String" data type.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "product".
* fields -> attributes: Specify the attribute you wish to get, such as "mdmid".
* sort -> (attribute): Specify the attribute based on which you wish to sort, such as "mdmid", and the order in which you wish to sort, such as "_ASC" or "_DESC". 
* sort -> sortType: Specify the sort type as "_INTEGER" for Integer data type, "_STRING" for string data type, "_DECIMAL" for Decimal data type, "_DATETIME" for Datetime data type, and "_BOOLEAN" for Boolean data type. Here "mdmid" is of data type "_STRING".
* options -> maxRecords: Specify the number of records to retrieve.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"product"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        <span style="background-color: #FFFF00">"mdmid"</span>
      ]
    },
    <span style="background-color: #FFFF00">"sort": {</span>
      "attributes": [
        {
          "mdmid": "_ASC",
          "sortType": "_STRING"
        }
      ]
    },
    "options": {
      "maxRecords": 100
    }
  }
}
</code>
</pre> 

## Response

Returns a list of all the "sku" entities, sorted in the ascending order of "mdmid" attribute.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "31f5a295-d5cc-4112-aec8-b0e2e9ee9e02",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "Men's Ties",
        "name": "Men's Ties",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:33.188-0500",
          "modifiedDate": "2018-07-19T01:56:33.188-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "7fec0c54-4b8f-487f-b83a-2aeb7e4bc967",
                  "value": "Men's Ties"
                }
              ]
            }
          }
        }
      },
      {
        "id": "MensShirts",
        "name": "MensShirts",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:55:31.214-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-07-20T00:52:18.270-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "881face5-a9dd-4b16-9155-0cc1b276e95b",
                  "value": "MensShirts"
                }
              ]
            }
          }
        }
      },
      {
        "id": "PoloMensShirt",
        "name": "Polo Mens Shirt",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:58.360-0500",
          "modifiedDate": "2018-07-19T01:56:58.360-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "df010776-1521-418b-8200-0c60405dda1e",
                  "value": "PS"
                }
              ]
            }
          }
        }
      },
      {
        "id": "PoloTies",
        "name": "Polo Ties",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:29.123-0500",
          "modifiedDate": "2018-07-19T01:56:29.123-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "3eb4c39e-67f6-44f6-9902-7cb413aaefc4",
                  "value": "PT"
                }
              ]
            }
          }
        }
      },
      {
        "id": "PoloWomen",
        "name": "Polo Women's Formals",
        "type": "product",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:37.293-0500",
          "modifiedDate": "2018-07-19T01:56:37.293-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "19ea1eb6-3d8e-45a8-bcdd-fa38c5dbe490",
                  "value": "PW"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 5
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

