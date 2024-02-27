---
title: Get Leaf Node Violation Error for Path Attribute Value
permalink: api_govern_get_scenario9.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

To get leaf node violation error for path attribute value using the RESTful API **{{site.data.rdp_glossary.getgoverndata}}**.

## Scenario

Consider a SKU "JBL Headset", where you need to verify if the path attribute value of the SKU contains a leaf node violation error by performing Get query request.

{% include snippets/header.html %}

## Request

To get the above entity govern data, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request, send the following details:

* query -> Id: Specify the entity identifier as "T185BT".
* query -> filters -> typesCriterion: Specify "sku" entity type.
* fields -> attributes: Specify attributes as "productclassification".
* fields -> relationships: Specify as "_ALL".

<pre>
<code>
POST **{{site.data.rdp_glossary.getgoverndata}}**
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
        <span style="background-color: #FFFF00">"productclassification"</span>
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

Returns the leaf node violation error for "productclassification" path attribute. 
{% if site.build == "internal" %} See [Create Entity with Leaf Node Violation Error for Path Attribute](api_app_create_leaf_node_path_attribute.html) for more information {% endif %}.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "80b42d49-2604-4df0-8da1-1bec31e3eab0",
    "maxRecords": 10
  },
  "response": {
    "entities": [
      {
        "id": "T185BT",
        "type": "sku",
        "properties": {
          "createdService": "entityGovernService",
          "createdBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "modifiedService": "entityGovernService",
          "modifiedBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "createdDate": "2021-04-12T05:43:42.134-0600",
          "modifiedDate": "2021-04-12T05:43:42.134-0600"
        },
        "data": {
          "attributes": {
            "productclassification": {
              "values": [
                {
                  "id": "06e42a66-5769-4b86-b7fe-5b036deb16dc",
                  "value": "valueIds/b65bab6e-f502-493f-9e7f-356f47742ab3",
                  "properties": {
                    "messages": [
                      {
                        <span style="background-color: #FFFF00">"messageType": "error",</span>
                        <span style="background-color: #FFFF00">"messageCode": "isLeafNodeViolation001",</span>
                        <span style="background-color: #FFFF00">"businessRule": "isLeafNodeOnly"</span>
                      }
                    ]
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