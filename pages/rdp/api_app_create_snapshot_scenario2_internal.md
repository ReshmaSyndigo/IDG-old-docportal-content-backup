---
title: Create Snapshot for an Entity in a Context
sidebar: rdp_sidebar
permalink: api_app_create_snapshot_scenario2.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.appcreatesnapshot}}** to create a snapshot for an entity in a context, using a scenario. 

## Scenario 

To create a snapshot for **sku** entity in **France** country context. 

{% include snippets/header.html %}

## Request

To create the above scenario, use the REST API {{site.data.rdp_glossary.appcreatesnapshot}}. In the request, send the following details:

* entity -> data -> contexts -> context -> country: Specify the name of the country context for which you wish to create the snapshot.
* entity: Specify the id and type. 
* params -> snapshotLabel: Specify as "SnapshotLabel2".

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreatesnapshot}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "data": {
      "contexts": [
        {
          "context": {
            <span style="background-color: #FFFF00">"country": "France"</span>
          }
        }
      ]
    },
    <span style="background-color: #FFFF00">"id": "RDW Snapshot Entity04",</span>
    <span style="background-color: #FFFF00">"type": "sku"</span>
  },
  "params": {
    <span style="background-color: #FFFF00">"snapshotLabel": "SnapshotLabel2"</span>
  }
}
</code>
</pre> 

## Response

If the create snapshot request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "06ecd442-773e-4434-ad61-a2a2cedbb421"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id RDW Snapshot Entity04. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "RDW Snapshot Entity04"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre> 

Verify the created entity:<br>
* You can use {TenantURL or ID}/api/entityappservice/getsnapshot API to verify the created snapshot. See [Get Snapshots](api_app_get_snapshot.html).

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.