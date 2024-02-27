---
title: Get Root Node Mismatch Error for Path Attribute Value
sidebar: rdp_sidebar
permalink: api_govern_get_scenario8.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getgoverndata}}** to get root node mismatch error for path attribute value, using a scenario. To view invalid classification for path attributes, see [View and Delete Invalid Classification Path Attributes](/{{site.data.rdp_links_version.APPU}}/dda_viu_n_del_inv_clasi_pth_attr.html){:target="_blank"} for more information.

## Scenario

Get path attribute value for "sku" entity "Levis Women Top", to verify whether the path attribute value consists root node mismatch error.

{% include snippets/header.html %}

## Request

To get the above entity govern data, you can use the REST API {{site.data.rdp_glossary.getgoverndata}}. In the request, send the following details:

* query -> Id: Specify the entity identifier as "LWT01".
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
      "id": "LWT01",
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

Returns the root node mismatch error for "productclassification" path attribute. 
{% if site.build == "internal" %} See [Create Entity with Root Node Mismatch Error for Path Attribute](api_app_create_path_attribute.html) for more information {% endif %}.

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
        "id": "LWT01",
        "type": "sku",
        "properties": {
          "createdService": "entityGovernService",
          "createdBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "modifiedService": "entityGovernService",
          "modifiedBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "createdDate": "2020-11-26T05:43:42.134-0600",
          "modifiedDate": "2020-11-26T05:43:42.134-0600"
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
                        <span style="background-color: #FFFF00">"messageCode": "InvalidVal001",</span>
                        <span style="background-color: #FFFF00">"businessRule": "invalidValueRule"</span>
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