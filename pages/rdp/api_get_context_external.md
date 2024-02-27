---
title: Get Context
sidebar: rdp_sidebar
permalink: api_get_context.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appgetcontext}}** to get the context information, using a scenario.

## Scenario

To get the context "Germany", "India" and "France".
{% include snippets/header.html %}

## Request

To get the context, you can use the REST API {{site.data.rdp_glossary.appgetcontext}}. In the request send the following details:
* query -> typesCriterion : The types of the models that needs to be coalesced
* query -> id : Entity identifier
In this scenario, you wish to get context details of SKU entity "SKU01".

{% include callout.html content="**Notes:** 
**getcontext** API provides only the context information. If you specify attributes or relationships as **_ALL** in the fields section of the request and then call getcontext API, only context information is provided. Attributes and relationships information is not seen in the response.
" type="primary" %}

<pre><code>
POST **{TenantURL or ID}/api/binarystreamobjectservice/uploadContinuous**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "sku"
        ]
      },
      "id": "SKU01"
    }
  }
}
</code></pre> 

## Response

The response of get context is as shown below.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e68b3fbf-9bfd-46ac-ba4d-b400b2cae113",
    "maxRecords": 2000
  },
  "response": {
    "entities": [
      {
        "id": "SKU01",
        "name": "SKU01",
        "type": "sku",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "testadmin@riversand.com_user",
          "createdDate": "2019-04-27T03:30:19.381-0500",
          "modifiedService": "entityManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2019-05-29T05:10:05.498-0500"
        },
        "data": {
          "contexts": [
            {
              "context": {
                "country": "Germany"
              }
            },
            {
              "context": {
                "country": "India"
              }
            },
            {
              "context": {
                "country": "France"
              }
            }
          ]
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