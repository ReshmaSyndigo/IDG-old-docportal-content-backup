---
title: Get Valid Path Attribute Value
sidebar: rdp_sidebar
permalink: api_val_path_attr.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In the Riversand Platform, Classification resolution is implemented to improve the performance of external requests (UI, Import, and so on) and internal requests (BR given attributes) using a cache mechanism. When a classification entity is created, the reference properties are generated for the created entity such as **referenceDataIdentifier**, **referenceData**, and **refIdPath**. 
  
This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetentity}}** to get the path attribute value, using a scenario.

## Scenario

Consider that "productclassification" is a path attribute and you wish to get the valid path attribute value of sku entity "Polo Women Top".

{% include snippets/header.html %}

## Request

To get the path attribute value, use the REST API **{{site.data.rdp_glossary.appgetentity}}**. In the request, send the following details:

* query -> Id: Specify the entity identifier as "PWT01".
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
      "id": "PWT01",
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

The following response is received from the API when the "productclassification" path attribute consists of valid path. {% if site.build == "internal" %} See [Create Entity with Valid Path Attribute Value](api_app_create_val_path_attribute.html) for more information. {% endif %}

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "2bf955c3-2ca4-47da-812f-53e8c6b73cd2",
    "maxRecords": 10
  },
  "response": {
    "entities": [
      {
        "id": "PWT01",
        "name": "_EMPTY",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "Dominik.Adam.external@Beiersdorf.com_user",
          "createdDate": "2020-11-24T22:29:56.311-0600",
          "modifiedDate": "2020-11-24T22:29:56.311-0600"
        },
        "data": {
          "attributes": {
            "productclassification": {
              "values": [
                {
                  "id": "2e5c7b14-3455-4200-a941-c4f5806b9ada",
                  "value": "Product Classifications>>Apparel & Footwear>>Clothing>>Tops",
                  "locale": "en-US",
                  "source": "internal",
                  "properties": {
                    <span style="background-color: #FFFF00">"referenceDataIdentifier": "tops",</span>
                    <span style="background-color: #FFFF00">"refIdPath": productclassificationroot>>apparelnfootwear>>clothing>>tops",</span>
                    <span style="background-color: #FFFF00">"referenceData": "classification/tops"</span>
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