---
title: Get Entity with Non-Leaf Node Value for Path Attribute
sidebar: rdp_sidebar
permalink: api_val_leaf_node_path_attr.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

To get non-leaf node value for path attribute using the RESTful API **{{site.data.rdp_glossary.appgetentity}}**.

## Scenario

Get path attribute value for "SKU" entity, "JBL Headset" to verify whether the path attribute contains a leaf node.

{% include snippets/header.html %}

## Request

To get the path attribute value, use the REST API **{{site.data.rdp_glossary.appgetentity}}**. In the request, send the following details:

* query -> Id: Specify the entity identifier as "T185BT".
* query -> filters -> typesCriterion: Specify "sku" entity type.
* fields -> attributes: Specify as "_ALL".
* fields -> relationships: Specify as "_ALL".

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "id": "T185BT",
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ],
      "relationships": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 10
    }
  }
}
</code>
</pre>

## Response

Returns the non-leaf node value for "productclassification" path attribute. {% if site.build == "internal" %} See [Create Entity with Leaf Node Violation Error for Path Attribute](api_app_create_leaf_node_path_attribute.html) for more information. {% endif %} 


<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "4dd11984-5687-4f74-98fc-49de9f4f7d3e",
    "maxRecords": 10
  },
  "response": {
    "entities": [
      {
        "id": "T185BT",
        "name": "_EMPTY",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "createdDate": "2021-04-12T05:43:41.939-0600",
          "modifiedDate": "2021-04-12T05:43:41.939-0600"
        },
        "data": {
          "attributes": {
            "productclassification": {
              "values": [
                {
                  "id": "f09350bc-53a8-46e8-8b87-5ab4ffca1edb",
                  "value": "Product Classifications>>Electronics",
                  "locale": "en-US",
                  "source": "internal",
                  "properties": {
                    <span style="background-color: #FFFF00"> "referenceDataIdentifier": "electronics", </span>
                    <span style="background-color: #FFFF00"> "refIdPath": "productclassificationroot>>electronics", </span>
                    <span style="background-color: #FFFF00"> "referenceData": "classification/electronics" </span>  
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.  