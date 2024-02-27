---
title: Track the status of Bulk Entities using Client Attributes
permalink: api_bulk_entities_using_client_attr.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Riversand Data Framework(RDF) provides you the Client Attributes that contains the details about a particular **task** that you have performed on the bulk entities in a workflow such as "task name" and "task type". Using the **Client Attributes**, you can track the status of tasks that are performed in the workflow transitions or workflow change assignments on bulk entities.

{% include callout.html content="**Notes**:<br/>
* The Client Attributes are 'not' the entity attributes which you have filled during the bulk entities creation.
* You can design your Apps to use this Client Attributes to enable the users to track the status of submitted tasks on workflows. Riversand UI Framework(RUF) has designed its UI to use these client attributes.
" type="primary" %}

This section covers the following scenarios to explain the usage of Bulk Entity Process REST API to update the bulk entities:

* [Track the status of Bulk Change Assignments](api_bulk_entity_scenario16.html)
* [Track the status of Bulk Transitions](api_bulk_entity_scenario17.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.bulkentityservices}}

**Parameters**: The following table lists the parameters of the JSON request to track the status of Bulk Entities using Client Attributes:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| Body | clientAttributes | Yes | Indicates the details about client attributes.|
| clientAttributes | taskName | No | Indicates the name of the task that you wish to track for this request. |
| clientAttributes | taskType | No | Indicates the type of the task that you wish to track for this request.|
| Body | params | Yes | Indicates the details about "this" request type. Refer [params for bulk process](api_bulk_process_entity.html) or [params for bulk trasnitions](api_bulk_transitions.html) or [params for bulk Change assignments](api_bulk_change_assignments.html) depending on the your intended operation. |

{% include callout.html content="**Note**:<br/>
* 'taskName' and 'taskType' parameters are 'only' a few set of parameters under clientAttributes that you can send in the request. However, RDF allows you to send more 'parameters' in the 'clientAttributes' based on your requirements that provides more details on the tasks performed. 
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | taskId | Indicates a system generated unique task identifier. This can be used to track tasks . |
| response | status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | Indicates the number records returned to you in the response. |

## Example

Consider that you wish to create multiple "SKU" entities "PoloMens Blue Shirt Large" and "PoloMens Blue Shirt Medium" and track the status of created entities using the client attribute "task name". The following example demonstrates a sample JSON request to create multiple "sku" entities &  the created entities:

<pre><code>
POST **{TenantURL or ID}/api/bulkentityservice/createtask**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "taskType": "process",
    "operationType": "inboundService"
  },
  "clientAttributes": {
    "taskName": {
      "values": [
        {
          "source": "internal",
          "locale": "en-US",
          "value": "bulkprocess"
        }
      ]
    }
  },
  "entities": [
    {
      "id": "PBM-001",
      "name": "PoloMens Blue Shirt Large",
      "type": "sku",
      "data": {
        "attributes": {
          "mdmname": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PoloMens_Blue_Shirt_Large"
              }
            ]
          },
          "productId": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PBM-10001"
              }
            ]
          }
        }
      }
    },
    {
      "id": "PBM-002",
      "name": "PoloMens Blue Shirt Medium",
      "type": "sku",
      "data": {
        "attributes": {
          "mdmname": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PoloMens_Blue_Shirt_Medium"
              }
            ]
          },
          "productId": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "value": "PBM-10002"
              }
            ]
          }
        }
      }
    }
  ]
}
</code></pre>

**Response**:
<pre><code>
{
    "request": {
        "returnRequest": false,
        "requestId": "8d9d1bc6-85e8-4a58-980d-e9f1d638d516",
        "taskId": "8d9d1bc6-85e8-4a58-980d-e9f1d638d516"
    },
    "response": {
        "status": "success",
        "totalRecords": 6
    }
}
</code></pre>

Verify the status of the request:
* You can use {{site.data.rdp_glossary.bulkentityservices}} API to verify the created track request. See [Get Task Details](api_bulk_entity_get_task_details.html).
* If you know the details of your elastic server and the indices, then you can verify the created track request using - http://<<ESSERVER>>:9200/<<tenant_write_index>>/_search?q=<<EntityName>>&pretty.

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.