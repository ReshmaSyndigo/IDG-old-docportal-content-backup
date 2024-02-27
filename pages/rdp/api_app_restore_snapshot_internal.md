---
title: Restore Snapshots
sidebar: rdp_sidebar
permalink: api_app_restore_snapshot.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Restore snapshot operation restores the entity with the snapshot information. 

The entity object along with the restore request parameters must be passed to the restore snapshot request in order to restore the snapshot. 

The default behavior of restore snapshot operation restores the entity with the latest snapshot.

As the same entity can exist in different contexts, you can specify the context(s) for which the snapshot can be restored.

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to restore the entity snapshot:

* [Restore Latest Snapshot for SKU in Specific Context](api_app_restore_snapshot_scenario1.html)
* [Restore Latest Snapshot for SKU in Multiple Contexts](api_app_restore_snapshot_scenario2.html)
* [Restore Latest Snapshot for SKU in Multiple Contexts and Specified Version](api_app_restore_snapshot_scenario3.html)
* [Restore Snapshot for SKU using snapshotId](api_app_restore_snapshot_scenario4.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.apprestoresnapshot}}

**Parameters**: The following table lists the parameters of the JSON request to restore a snapshot for **sku** entity:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| entity | data -> contexts -> context | No | Indicates a comma separated list of contexts for which the snapshot must be restored. |
| entity | id | Yes | Indicates the Id of the entity to be updated. |
| entity | type | Yes | Indicates the type of the entity to be updated. |
| params | snapshotGetMode | No | Indicates hierarchy of the snapshot that is restored. Specify as "latest", "oldest" or "all". If not specified, then default behavior restores the latest snapshot. |
| params | snapshotLabel | No | Indicates the label provided at the time of creating the snapshot. |
| params | version | No | Indicates version of the entity for which the snapshot must be restored. | 
| params | snapshotId | No | Indicates Id of the snapshot to be restored. |
| params | snapshotType | No | Indicates type of the snapshot to be restored. Type of the snapshot is always (type of the entity_snapshot). |
| params | allContextual | No | Indicates if the snapshot must be restored to all the contexts. Specify as true or false. If context is specified and this flag is not specified, then the snapshot is restored to the entity in the specified context. On the other hand, if context is not specified and this flag is or not specified, then the snapshot is restored to the entity in all the contexts. |
| params | nonContextual | No | Indicates if the snapshot must be restored to self  context only. Specify as true or false. If context is specified and this flag is not specified, then the snapshot is restored to the entity in the self context. On the other hand, if context is not specified and this flag is or not specified, then the snapshot is restored to the entity in self context. |

See the table below for more information on restoring snaphots for entity with/without contexts and allContextual/nonContextual flags specified:

<b>[contexts] unspecified</b>

| allContextual | nonContextual | Context restored to |
|---------------|---------------|---------------------|
| true| true | all contexts |
| true | false | all contexts |
| true | not specified | all contexts |
| not specified | true | all contexts |
| not specified | false | all contexts |
| not specified | not specified | all contexts |
| false | true | self context |
| false | not specified | self context |
| false | false | no operation |

<b>[contexts] specified</b>

| allContextual | nonContextual | Context restored to |
|---------------|---------------|---------------------|
| true | true | all contexts |
| true | false | all contexts |
| true | not specified | all contexts |
| not specified | true | all contexts |
| not specified | false | all contexts |
| not specified | not specified | all contexts |
| false | true | [contexts] + self context |
| false | not specified | [contexts] + self context |
| false | false | [contexts] | 

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | statusDetail -> message | Indicates any information, warning, or error message related to the request submitted. |

## Example

The following example demonstrates a sample request and response to restore snapshots for **sku** entity.

<pre><code>
POST **{TenantURL or ID}/api/entityappservice/restoresnapshot**
Headers: Content-Type: application/json
Body:
{
  "entity": {
    "data": {
      "contexts": [
        {
          "context": {
            "country": "France"
          }
        }
      ]
    },
    "id": "ebnLVIVBSmiyk",
    "type": "sku"
  },
  "params": {
    "allContextual": true
  }
}
</code></pre>

## Response

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "8f671c54-dc4c-4372-b3af-e51aa8772af5"
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