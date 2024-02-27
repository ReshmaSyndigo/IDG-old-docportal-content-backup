---
title: Create Snapshots
sidebar: rdp_sidebar
permalink: api_app_create_snapshot.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Snapshot is similar to taking a backup of the entity in its current version at a particular point of time. Snapshot of the entity is created so that you can rollback the entity to the snapshot version in the workflow. See [Entity Snapshot and Rollback](/{{site.data.rdp_links_version.APPU}}/dda_entity_snapshot_and_rollback.html){:target="_blank"} for more information on snapshots.

* When you create a snapshot for an entity, the complete entity information is copied to the entity snapshot object. 
* Version of an entity is internally stored. The first time an entity is created, its version is one, and it is changed to two when it undergoes an update. 
* The default and recommended number of snapshots that can be created for an entity is 5. This is defined as **maxSnapshotCount** in tenantserviceconfig -> snapshotmanageservice and can be overwritten.
* If count of the snapshots created exceeds **maxSnapshotCount**, then the oldest snapshot is deleted to accomodate the latest snapshot.
* You can have multiple snapshot objects for a single version of an entity. Hence, the snapshot label along with the entity version is used for uniquely identifying a snapshot object.

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to:

* [Create Snapshot for SKU](api_app_create_snapshot_scenario1.html)
* [Create Snapshot for an Entity in a Context](api_app_create_snapshot_scenario2.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.appcreatesnapshot}}

**Parameters**: The following table lists the parameters of the JSON request to create an entity snapshot:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| entity | id | Yes | Indicates the Id of the entity for which snapshot must be created. The entity here refers to the original object used for creating the snapshot. |
| entity | type | Yes | Indicates the type of the entity. |
| params | snapshotLabel | Yes | Indicates the label which is used with the entity version for uniquely identifying a snapshot object. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample request and response to create a snapshot for **sku** entity.

<pre>
<code>
POST **{{site.data.rdp_glossary.appcreatesnapshot}}**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "id": "sku001",
    "type": "sku"
  },
  "params": {
    "snapshotLabel": "SnapshotLabel1"
  }
}

</code>
</pre>

## Response

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "072efbdc-d232-4195-8b41-e40538e5c3da"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Entity has been submitted for update with entity Id : sku001. Please check back after 1 min",
          "messageType": "success"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.