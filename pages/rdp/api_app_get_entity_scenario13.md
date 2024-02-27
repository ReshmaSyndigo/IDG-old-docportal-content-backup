---
title: Get Entities Sorted in Descending Order
sidebar: rdp_sidebar
permalink: api_app_get_entity_scenario13.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get the entities sorted in **Descending** order. You can sort the entities based  on different attributes with different data types such as Integer, Decimal, Datetime, Boolean, and String.

## Scenario

To get "SKU" entities sorted in Descending order of "createdDate" which is of "Date" data type.

{% include snippets/header.html %}

## Request

To get the above entities, you can use the REST API {{site.data.rdp_glossary.appgetentity}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the entity type as "sku".
* query -> fields -> attributes: Specify the attribute you wish to get, such as "mdmid".
* query -> sort -> (attribute): Specify the attribute based on which you wish to sort, such as "createdDate", and the order in which you wish to sort, such as "_ASC" or "_DESC". 
* query -> sort -> sortType: Specify the sort type as "_INTEGER" for Integer data type, "_STRING" for string data type, "_DECIMAL" for Decimal data type, "_DATETIME" for Datetime data type, and "_BOOLEAN" for Boolean data type. Here "createdDate" is of data type "_DATETIME".
* query -> options -> maxRecords: Specify the number of records to retrieve.

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
          <span style="background-color: #FFFF00">"sku"</span>
        ]
      }
    },
    "fields": {
      "attributes": [
        "mdmid"
      ]
    },
    <span style="background-color: #FFFF00">"sort": {</span>
      "properties": [
        {
          "createdDate": "_DESC",
          "sortType": "_DATETIME"
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

Returns a list of all the "sku" entities, sorted in the descending order of "createdDate" attribute.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "b28be643-8b8e-4dd8-b7b1-647a9c621d70",
    "maxRecords": 100
  },
  "response": {
    "entities": [
      {
        "id": "JohnyShirts",
        "name": "JohnyShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-20T03:40:06.521-0500",
          "modifiedDate": "2018-07-20T03:40:06.521-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "94e3d1c0-7229-4f75-8e31-b7a9c4a8ba6c",
                  "value": "JohnyShirts"
                }
              ]
            }
          }
        }
      },
      {
        "id": "VanShirts",
        "name": "VanShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-20T00:44:50.096-0500",
          "modifiedDate": "2018-07-20T00:44:50.096-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "81faeb1d-3c45-47e7-8343-1b475a69c2e0",
                  "value": "VanShirts"
                }
              ]
            }
          }
        }
      },
      {
        "id": "e2",
        "name": "Polo Mens Shirt Blue_Large",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T03:18:48.698-0500",
          "modifiedDate": "2018-07-19T03:18:48.698-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e7353ebe-851d-4e20-9dd7-65bd7a847629",
                  "value": "PB_L"
                }
              ]
            }
          }
        }
      },
      {
        "id": "e3",
        "name": "Polo Mens Shirt Green_Large",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T03:18:30.557-0500",
          "modifiedDate": "2018-07-19T03:18:30.557-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "0c53c7a2-f72f-42da-b12a-80dfd3d67a94",
                  "value": "PG_L"
                }
              ]
            }
          }
        }
      },
      {
        "id": "Polo Mens Shirt Teal",
        "name": "Polo Mens Shirt Teal",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:54.261-0500",
          "modifiedDate": "2018-07-19T01:56:54.261-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "751e0892-ff66-4827-9b0f-7c964f226688",
                  "value": "Polo Mens Shirt Teal"
                }
              ]
            }
          }
        }
      },
      {
        "id": "Polo Mens Shirt Red",
        "name": "Polo Mens Shirt Red",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:49.266-0500",
          "modifiedDate": "2018-07-19T01:56:49.266-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "14c1a622-5d2e-47f9-a696-6fccc671a319",
                  "value": "Polo Mens Shirt Red"
                }
              ]
            }
          }
        }
      },
      {
        "id": "PoloWhite_Large",
        "name": "Polo Mens Shirt White_Large",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:41.179-0500",
          "modifiedDate": "2018-07-19T01:56:41.179-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e9f0e5b9-95bd-4fc6-841a-54b26895f6d8",
                  "value": "PW_L"
                }
              ]
            }
          }
        }
      },
      {
        "id": "DWShirts",
        "name": "DWShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:26.264-0500",
          "modifiedDate": "2018-07-19T01:56:26.264-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "e33303b2-d381-47e9-95ae-fef54b7b5737",
                  "value": "DWShirts"
                }
              ]
            }
          }
        }
      },
      {
        "id": "JPShirts",
        "name": "JPShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:22.155-0500",
          "modifiedDate": "2018-07-19T01:56:22.155-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a9bdd980-ac97-4306-a421-3524d6914541",
                  "value": "JPShirts"
                }
              ]
            }
          }
        }
      },
      {
        "id": "PeterShirts",
        "name": "PeterShirts",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "createdDate": "2018-07-19T01:56:02.324-0500",
          "modifiedDate": "2018-07-19T01:56:02.324-0500"
        },
        "data": {
          "attributes": {
            "mdmid": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "cf0a6a3d-2e09-4fce-8f0c-ac7fcffac5f8",
                  "value": "PeterShirts"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 10
  }
}
</code></pre> 

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.

