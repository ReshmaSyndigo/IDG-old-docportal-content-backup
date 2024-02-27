---
title: "Create Entity with Unique mdmid"
sidebar: rdp_sidebar
permalink: api_app_process_entity_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appprocessentity}}** to create an entity with unique 'mdmid'. 

## Scenario

To create a "sku" entity "AppServiceProcess101" with unique 'mdmid' and 'mdmname' that does not already exist in the system. 

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
              "value": "Blue"
            }
          ]
        },
        "size": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "1 Seat"
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
    "requestId": "5b34d651-a39f-4c57-96dd-8b41ffdadb41"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id AppServiceProcess101. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
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

{% include callout.html content="**Note**: As the given 'mdmid' in the above scenario is unique, 'process' API creates the given entity. 
" type="primary" %}

## Verify the created entity

* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Entities](api_app_get_entity.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.