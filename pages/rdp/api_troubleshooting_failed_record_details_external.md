---
title: Failed Record Details
sidebar: rdp_sidebar
permalink: api_troubleshooting_failed_record_details.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

JSON records failure can be troubleshooted using **Event service**. You can get the following details from the events:
* Entity Id
* Entity type
* Filename
* Message

## Request

This topic describes how to use the RESTful API **{TENANT_ID}/api/requesttrackingservice/get** to get the failed record details for tenant seed data, using External event request.

<pre>
<code>
POST **{WEBURL}:{WEBPORT}/{TENANT_ID}/api/eventservice/get
Host: customer.riversand.com
Content-Type: application/json
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "adminexternalevent"
        ],
        "attributesCriterion": [
          {
            "taskId": {
              "exact": "15575bc6-6c11-48f9-8a52-3c6723788d6e"
            }
          },
          {
            "eventSubType": {
              "exact": "PROCESSING_ERROR"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "message",
        "entityType",
        "fileName",
        "entityId"
      ]
    }
  }
}
</code>
</pre>

## Response

If the above request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
  "id": "0ad74ed0-1d15-47f7-8fde-7f11c66df5b6",
  "type": "adminexternalevent",
  "properties": {
    "createdByService": "rsAdminInboundService",
    "createdService": "eventManageService",
    "createdBy": "system_user",
    "createdDate": "2020-01-08T07:14:35.388-0600",
    "modifiedService": "eventManageService",
    "modifiedBy": "system_user",
    "modifiedDate": "2020-01-08T07:14:35.388-0600"
  },
  "data": {
    "attributes": {
      "entityId": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "c23975ab-9ee2-4d63-99ee-e7fb4816446c",
            "value": "7beaf4b5-82aa-4189-b4ad-5f3b45e3c9d5"
          }
        ]
      },
      "entityType": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "95bd05e0-cc55-4dde-b08c-afea8b7e1b12",
            "value": "interactionLocale"
          }
        ]
      },
      "fileName": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "348cb0db-2601-4efd-b44d-7453b9714ea0",
            "value": "customer-seed-tenant-base/00-systemseed/110-sysReferenceDataEntities/19-data-interactionLocale.json"
          }
        ]
      },
      "message": {
        "values": [
          {
            "source": "internal",
            "locale": "en-US",
            "id": "5f52c94e-1f68-4a49-b04f-1a20c22e5aa1",
            "value": "Failed to perform match. Matched multiple entities"
          }
        ]
      }
    }
  }
}
</code>
</pre>

{% include callout.html content="**Note**: 
Response lists down the documents which failed to get loaded containing indicative error. For example - Issue with **7beaf4b5-82aa-4189-b4ad-5f3b45e3c9d5** of type **interactionLocale** and it’s part of **customer-seed-tenant-base/00-systemseed/110-sysReferenceDataEntities/19-data-interactionLocale.json** file.
" type="primary" %}

## Excel Records
As excel sheets get imported using **Rsconnect** service. You can use external event service with type: **externalevent** to track the errors for individual task summary for excel sheets. If any excel is imported in the .zip format, you must find **taskId** relevant for excel using the Parent taskId.

## Search in Kibana logs

Use the **taskId** and search it in Kibana, to see if any unknown errors have occurred or timeout has caused the load to fail.

Once you have details for Task Summary and records, you can share details with Riversand CPS team to resolve the issue.
