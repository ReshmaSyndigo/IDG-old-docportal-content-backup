---
title: Get Entities with Mapped Values for Size Attribute
sidebar: rdp_sidebar
permalink: api_app_get_mapped_self.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityappservice/getmappedvalues** to get entities with the mapped values for an attribute using a scenario.

## Scenario

To get entities of type "sku" with the mapped value for the "size" attribute.

{% include snippets/header.html %}

{% include callout.html content="**Note**:<br/>
It is mandatory that the pre-requisites for enabling value mapping are satisfied to get entities with the mapped attribute values.
" type="primary" %}

## Request

To get "sku" entities with the mapped value for the "size" attribute, use the REST API **{TenantURL or ID}/api/entityappservice/getmappedvalues**. In the request send the following details:

* params -> requestforvaluemapping: Specify as "true".
* entity -> id: Specify the entity Id for which the mapped value must be retreived. In this case, it is "RDW Size Entity".
* entity -> name: Specify as "RDW Size Entity".
* entity -> type: Specify as "sku".
* entity -> data: In the "attributes" object, specify mdmname as "RDW Size Testing" and the "size" as "XXL". 

<pre>
<code>
POST **{{site.data.rdp_glossary.appmappedget}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"requestforvaluemapping": true</span>
  },
  <span style="background-color: #FFFF00">"entity": {</span>
    "id": "RDW Size Entity",
    "name": "RDW Size Entity",
    "type": "sku",
    "data": {
      <span style="background-color: #FFFF00">"attributes": {</span>
      	"mdmname": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "RDW Size Testing"
            }
          ]
        },
        "size": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "XXL"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response

Returns the "sku" entity with the mapped attribute value for "size" attribute.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "f43869cc-f545-4bb7-9fb2-e7f9348adb6c"
  },
  "response": {
    "entities": [
      {
        "id": "RDW Size Entity",
        "name": "RDW Size Entity",
        "type": "sku",
        "data": {
          "attributes": {
            "mdmname": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "value": "RDW Size Testing"
                }
              ]
            },
            "size": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "value": "16"
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
