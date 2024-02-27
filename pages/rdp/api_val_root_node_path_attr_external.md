---
title: Get Root Node Mismatch Value for Path Attribute
sidebar: rdp_sidebar
permalink: api_val_root_node_path_attr.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get root node mismatch value for path attribute, using a scenario. To view invalid classification for path attributes, see [View and Delete Invalid Classification Path Attributes](/{{site.data.rdp_links_version.APPU}}/dda_viu_n_del_inv_clasi_pth_attr.html){:target="_blank"} for more information.

## Scenario

Get path attribute value for "sku" entity "Levis Women Top", to verify whether the path attribute consists of invalid value.

{% include snippets/header.html %}

## Request

To get the path attribute value, use the REST API **{{site.data.rdp_glossary.appgetentity}}**. In the request, send the following details:

* query -> Id: Specify the entity identifier as "LWT01".
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
      "id": "LWT01",
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

Returns the root node mismatch value for "productclassification" path attribute. {% if site.build == "internal" %}  See [Create Entity with Root Node Mismatch Error for Path Attribute](api_app_create_path_attribute.html) for more information. {% endif %} 


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
        "id": "LWT01",
        "name": "_EMPTY",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "createdDate": "2020-11-26T05:43:41.939-0600",
          "modifiedDate": "2020-11-26T05:43:41.939-0600"
        },
        "data": {
          "attributes": {
            "productclassification": {
              "values": [
                {
                  "id": "b65bab6e-f502-493f-9e7f-356f47742ab3",
                  "value": "Web Classifications>>Apparel & Footwear>>Clothing>>Web Tops",
                  "locale": "en-US",
                  <span style="background-color: #FFFF00">"invalidValue": "Web Classifications>>Apparel & Footwear>>Clothing>>Web Tops",</span>
                  "source": "internal"
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