---
title: Restore Snapshot for SKU using snapshotId
sidebar: rdp_sidebar
permalink: api_app_restore_snapshot_scenario4.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.apprestoresnapshot}}** to restore the entity snapshot, using the following scenario. 

## Scenario 

To restore the snapshot for **sku** entity using **snapshotId**.

{% include snippets/header.html %}

## Request

To restore the snapshot, you can use the REST API {{site.data.rdp_glossary.apprestoresnapshot}}. In the request, send the following details:

* entity -> id: ebnLVIVBSmiyk.
* entity -> type: sku.
* params -> snapshotId: 45bb48b8-06ec-484f-8a39-fa92b4038fac.

<pre>
<code>
POST **{{site.data.rdp_glossary.apprestoresnapshot}}**
Headers: Content-Type: application/json
Body:
{
  <span style="background-color: #FFFF00">"entity": {</span> 
    "id": "ebnLVIVBSmiyk",
    "type": "sku"
  },
  "params": {
    <span style="background-color: #FFFF00">"snapshotId": "45bb48b8-06ec-484f-8a39-fa92b4038fac"</span> 
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
