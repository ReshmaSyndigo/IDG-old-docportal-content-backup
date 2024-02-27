---
title: Get Generic Objects by Sorting
sidebar: rdp_sidebar
permalink: api_gen_obj_get_scenario6.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.genobjget}}** to get generic objects sorted either in an Ascending or Descending order. You can sort the generic objects based on different types of data types such as Integer, Decimal, Datetime, Boolean, and String.

## Scenario

To get the all generic objects which are scheduled to perform the title generation for "products" sorted in the descending order of dataObjectId attribute using "String" data type.

{% include snippets/header.html %}

## Request

To get the above generic objects, you can use the REST API {{site.data.rdp_glossary.genobjget}}. In the request send the following details:

* query -> filters -> attributesCriterion: Specify "graphprocessconfig" as "product_contentGeneration"  with the operator as "exact".
* query -> filters -> typesCriterion: Specify as "scheduledrequestobject".
query -> sort -> attributes: Specify "dataObjectId" attribute with sort order as "_DESC". If you want the entities to be sorted in Ascending order, then specify the sort order as "_ASC".
* query -> sort -> sortType: Specify the sort type as "_STRING". Mention the sort type as "_INTEGER" for Integer data type, "_DECIMAL" for Decimal data type, "_DATETIME" for Datetime data type, and "_STRING" for Boolean data type.

<pre>
<code>
POST {TenantURL or ID}/api/genericobjectmanageservice/get
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "scheduledrequestobject"
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00">"graphprocessconfig": {</span>
              "exact": "product_contentGeneration"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    <span style="background-color: #FFFF00">"sort": {</span>
      "attributes": [
        {
          "dataObjectId": "_DESC",
          "sortType": "_STRING"
        }
      ]
    },
    "options": {
      "maxRecords": 5
    }
  }
}
</code>
</pre>

## Response

Returns all generic objects which are sorted in the descending order of "dataObjectId" attribute value.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "926b1858-fb52-4917-b3b0-b6370bcb4fcd",
    "maxRecords": 5
  },
  "response": {
    "genericObjects": [
      {
        "id": "TestGenericObject2006",
        "name": "TestGenericObject2006",
        "type": "schedulerequestobject"
      },
      {
        "id": "genericObjectToPublishEntities",
        "name": "Generic Object To Publish Entities",
        "type": "schedulerequestobject"
      },
      {
        "id": "TestGenericObject1001",
        "name": "TestGenericObject1001",
        "type": "schedulerequestobject"
      },
      {
        "id": "TestGenericObject2201",
        "name": "TestGenericObject2201",
        "type": "schedulerequestobject"
      }
    ],
    "status": "success",
    "totalRecords": 4
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.