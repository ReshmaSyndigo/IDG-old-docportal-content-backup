---
title: Save Mappings
sidebar: rdp_sidebar
permalink: api_save_mappings.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Platform allows users to upload their data in excel format. There are various attributes in the excel. Riversand Platform enables you to map these attribute names in the input file to attribute names in Riversand Platform. 

This topic describes how to use the **{{site.data.rdp_glossary.savemappings}}** API to perform this mapping.

## Scenario

To map "Assembly Required" attribute in excel to "Item Type" attribute in Riversand Platform.

{% include snippets/header.html %}

## Request

To map the above attributes, use the RESTful API {{site.data.rdp_glossary.savemappings}}. In the request provide the following details:

* type : Specify as "attributemapping" as we are mapping attributes.
* contexts : Specify the mapping context. In this scenario, the attribute mapping is done for SKU entitytype, for the specified user and role during entity import in excel format.
* attributes : Specify the name to which the attribute is to be mapped.
* attributes -> values : Specify the name of the attribute in the excel you wish to match.

<pre>
<code>
POST **{{site.data.rdp_glossary.savemappings}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "",
    <span style="background-color: #FFFF00">"type": "attributemapping",</span>
    "data": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "entitytype": "sku",
            "user": "testinfodev@riversand.com_user",
            "role": "admin",
            "ownershipdata": "_DEFAULT",
            "service": "ENTITY_IMPORT",
            "format": "Excel"
          },
          "attributes": {
            <span style="background-color: #FFFF00">"itemtype": {</span>
              "properties": {
                "enabled": true,
                "required": true,
                "externalName": "Item Type",
                "id": 111293961
              },
              "values": [
                {
                  <span style="background-color: #FFFF00">"value": "Assembly Required",</span>
                  "locale": "en-US",
                  "id": ""
                }
              ]
            }
          }
        }
      ]
    }
  },
  "hotline": true
}
</code>
</pre>

## Response

Returns the status of the response saying whether attributes have been mapped or not.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "bf9e749c-ca65-455b-840b-ca57927d91db"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Entity has been submitted for update with entity Id : hfzZ_vrnR5aJ_DbV7e-91w. Please check back after 1 min",
          "messageType": "success"
        },
        {
          "messageCode": "I0020",
          "message": "Entity matched with existing entity id: hfzZ_vrnR5aJ_DbV7e-91w. Action changed to update.",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>