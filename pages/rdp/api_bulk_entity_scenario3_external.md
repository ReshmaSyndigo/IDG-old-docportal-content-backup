---
title: Update Bulk Entities without using Query
sidebar: rdp_sidebar
permalink: api_bulk_entity_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.bulkentityservices}}** to update the bulk entities using a "match" on the given attributes without using Query.

## Scenario

Update the attributes "cost" and "size" for those "sku" entities which "matches" the following condition:

Having the attribute "productId" with the value as "PoloMens Blue Shirt Large" or "PoloMens Blue Shirt medium".

{% include snippets/header.html %}

## Request

To update the above bulk entities, use the REST API {{site.data.rdp_glossary.bulkentityservices}}. In the request send the following details:

* params: In the params object, fill the details about the taskType and operationType. In the entities object, specify entity identifier, name, and type. In the data, specify the updated attribute value. specify the required typesCriterion and attributesCriterion. In the data, specify the updated attribute value.

* params -> taskType: Specify as "process".
* params -> operationType: Specify as "inboundService".
* entities -> specify the required matching attributes and new attribute value to be updated.

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkentityservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "taskType": "process",
    "operationType": "inboundService"
  },
  "entities": [
    {
      <span style="background-color: #FFFF00">"id": "e001",</span>
      <span style="background-color: #FFFF00">"name": "PoloMens Blue Shirt Large",</span>
      <span style="background-color: #FFFF00">"type": "sku",</span>
      "data": {
        <span style="background-color: #FFFF00">"attributes": {</span>
          "productcode": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PoloMens_Blue_Shirt_Large"
              }
            ]
          },
          "division": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "Mens"
              }
            ]
          },
          "subdivision": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "MNS FASHION ACC"
              }
            ]
          }
        }
      }
    },
    {
      <span style="background-color: #FFFF00">"id": "e002",</span>
      <span style="background-color: #FFFF00">"name": "PoloMens Blue Shirt Small",</span>
      <span style="background-color: #FFFF00">"type": "sku",</span>
      "data": {
        <span style="background-color: #FFFF00">"attributes": {</span>
          "productcode": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PoloMens_Blue_Shirt_Small"
              }
            ]
          },
          "division": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "Mens"
              }
            ]
          },
          "subdivision": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "MNS FASHION ACC"
              }
            ]
          }
        }
      }
    }
  ]
}
</code>
</pre> 

## Response

If the bulk entities are updated successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "5de0e0e2-b843-4ec1-a2d3-69d54f331e33",
    "taskId": "5de0e0e2-b843-4ec1-a2d3-69d54f331e33"
  },
  "response": {
    "status": "success",
    "totalRecords": 5
  }
}
</code></pre> 

Verify the updated bulk entities:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the updated bulk entities. See [Get Task Details](api_bulk_entity_get_task_details.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.