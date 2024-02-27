---
title: "Create Entity with Duplicate mdmid"
sidebar: rdp_sidebar
permalink: api_app_process_entity_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appprocessentity}}** to create an entity with an existing 'mdmid'. 

## Scenario

To create a "sku" entity "AppServiceProcess101" with already existing 'mdmid' and 'mdmname'. 

{% include snippets/header.html %}

## Request

To create the above entity, use the REST API {{site.data.rdp_glossary.appprocessentity}}. In the request send the following details:

* entity : In the [entity](api_entity_object_structure.html) object, provide id, name and type. 
* data : Specify the attributes along with its values to be created, in the entity. 

<pre>
<code>
POST **{{site.data.rdp_glossary.appprocessentity}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "AppServiceProcess101",</span>
    <span style="background-color: #FFFF00">"name": "AppServiceProcess101",</span>
    <span style="background-color: #FFFF00">"type": "sku",</span>
    "data": {
      "attributes": {
        <span style="background-color: #FFFF00">"mdmid": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "Process101"
            }
          ]
        },
        <span style="background-color: #FFFF00">"mdmname": {</span>
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "AppServiceProcess101"
            }
          ]
        },
        "color": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "Red"
            }
          ]
        },
        "size": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "10"
            }
          ]
        },
        "width": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "4"
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

If the entity create request is submitted successfully, then the following response is received from create entity API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "f254bcac-b986-45c8-9bfc-dd34f3c8cdf2"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id AppServiceProcess101. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "AppServiceProcess101"
          ]
        },
        {
          "messageCode": "I0020",
          "message": "Matched with existing entity id: AppServiceProcess101. Action changed to update.",
          "messageType": "success",
          "messageParams": [
            "AppServiceProcess101"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

{% include callout.html content="**Note**: In the above scenario, as the specified 'mdmid' and 'mdmname' already exists in the system, the 'process API' does not create the entity. It just updates the matched entity with the given details.
" type="primary" %}

## Verify the created entity

* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.