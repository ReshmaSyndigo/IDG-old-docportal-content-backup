---
title: Create Snapshot for SKU
sidebar: rdp_sidebar
permalink: api_app_create_snapshot_scenario1.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreatesnapshot}}** to create an entity snapshot, using the following scenario. 

## Scenario 

Create a snapshot for **sku** entity in self context.

{% include snippets/header.html %}

## Request

To create snapshot for the **sku** entity, use the REST API {{site.data.rdp_glossary.appcreatesnapshot}}. In the request, send the following details:
  
* entity: In the [entity](api_entity_object_structure.html) object, specify the id and type. 
* params -> snapshotLabel: Specify as "SnapshotLabel1"

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreatesnapshot}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    <span style="background-color: #FFFF00">"id": "sku001",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>
  },
  "params": {
    <span style="background-color: #FFFF00">"snapshotLabel": "SnapshotLabel1"</span>
  }
}
</code>
</pre> 

## Response

If the create snapshot request is submitted successfully, then the following response is received from the API:

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "b5410048-19c6-417b-be1d-b0bf692b6398"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id sku001. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "sku001"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre> 

Verify the created entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/get API to verify the created entity. See [Get Snapshots](api_app_get_snapshot.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.