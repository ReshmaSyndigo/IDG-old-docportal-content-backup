---
title: Restore Latest Snapshot for SKU in Multiple Contexts and Specified Version
sidebar: rdp_sidebar
permalink: api_app_restore_snapshot_scenario3.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.apprestoresnapshot}}** to restore the entity snapshot, using the following scenario. 

## Scenario 

To restore latest snapshot for **sku** entity in country context **Germany**, channel context **Germany Web**, and entity version **4**.

{% include snippets/header.html %}

## Request

To restore the snapshot, you can use the REST API {{site.data.rdp_glossary.apprestoresnapshot}}. In the request, send the following details:

* entity -> data -> contexts -> context -> country: Germany. 
* entity -> data -> contexts -> context -> channel: Germany Web. 
* entity -> id: ebnLVIVBSmiyk.
* entity -> type: sku.
* params -> version: 4.

<pre>
<code>
POST **{{site.data.rdp_glossary.apprestoresnapshot}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "data": {
      "contexts": [
        {
          <span style="background-color: #FFFF00">"context": {</span>
            "country": "Germany",
            "channel": "Germany Web"
          }
        }
      ]
    },
    <span style="background-color: #FFFF00">"id": "ebnLVIVBSmiyk",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>
  },
  "params": {
  	<span style="background-color: #FFFF00">"version": "4"</span>
  }
}
</code>
</pre>

## Response

Restores the **sku** entity with the latest snapshot.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "1d70d917-7cda-4f5a-8607-882a05b5856c"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0013",
          "message": "Submitted sku for update with Id ebnLVIVBSmiyk. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "update",
            "ebnLVIVBSmiyk"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.