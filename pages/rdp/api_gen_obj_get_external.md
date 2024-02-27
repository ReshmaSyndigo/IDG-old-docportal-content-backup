---
title: Get Generic Objects
sidebar: rdp_sidebar
permalink: api_gen_obj_get.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get generic objects:

* [Get Generic Objects using dataObjectId ](api_gen_obj_get_scenario4.html)
* [Get Generic Objects performing a Particular Task with the Status as "completed"](api_gen_obj_get_scenario5.html)
* [Get Generic Objects by Sorting](api_gen_obj_get_scenario6.html)
* [Get Generic Objects for Impact Processing Identification](api_gen_obj_get_scenario7.html)
* [Get Generic Objects for Impact Processing Execution](api_gen_obj_get_scenario8.html)
* [Configure Search Generic Object Column](sdk_plugin_api_configure_search_generic_objects_column.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.genobjget}}

**Parameters**: The following table lists the parameters of the JSON request to get the generic object or collection of generic objects:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting a generic object or collection of generic objects. |
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> attributesCriterion -> <<AttrName>> | No | Indicates the name of the attribute. |
| query | filters -> attributesCriterion -> <<AttrName>> -> <<Operator>> : <<AttrValue>> | No | Indicates the type of operator to be used for comparing the AttrValue. Indicates the operator used to join the keywords. Currently, for generic object service, you can use "_EXACT" as the value for the operator. |
| query | filters -> propertiesCriterion -> <<PropertyName>> | No | Indicates the name of the attribute. |
| query | filters -> propertiesCriterion -> <<PropertyName>> -> <<Operator>> : <<PropertyValue>> | No | Indicates the type of operator to be used for comparing the PropertyValue. Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". |
| query | filters -> typesCriterion | No | Indicates a comma separated list of data object types. Since generic objects are typically used for scheduled requests, typesCriterion is usually "scheduledrequestobject" for generic objects. |

## Response

The response is returned in a JSON format and includes the following details:

| Parameters | Name | Description |
|-------|--------|----------------|
| request | returnRequest | Indicates if the request sent is included in the response received or not. |
| request | requestId | Indicates a system generated unique request identifier. This can be used to track requests. |
| request | maxRecords | Indicates the maximum records returned in the response. |
| response |  | List of generic objects that matched the search criteria. See [Generic Object Structure](api_gen_object_structure.html), for more information. |
| response| status | Indicates if the request is submitted successfully or not. |
| response | totalRecords | List of generic objects that matched the search criteria.|

## Example

The following example demonstrates a sample request and response to get the generic objects with the type as "scheduledrequestobject", status as "OUEUED", and tasktype as "imapactIdentify":

<pre><code>
POST {TenantURL or ID}/api/genericobjectmanageservice/get
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "scheduledrequestobject"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 2
    }
  }
}
</code></pre>

**Response**: 
<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "b5602d2c-922d-4b5f-aae8-1c57c72c563f",
    "maxRecords": 2
  },
  "response": {
    "genericObjects": [
      {
        "id": "genericObjectForImportingEntities",
        "name": "Generic Objects for Entity Import",
        "type": "scheduledrequestobject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "dev1@riversand.com",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "dev1@riversand.com",
          "createdDate": "2018-09-07T06:46:04.585-0500",
          "modifiedDate": "2018-09-07T06:46:04.585-0500"
        },
        "data": {
          "attributes": {
            "dataObjectId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "cb80d2d8-2c8a-4a79-adc3-7415191ede48",
                  "value": "Sku_Import"
                }
              ]
            },
            "dataObjectType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "e1c72c8e-563c-4f47-8284-e7db17945202",
                  "value": "sku"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "3398019e-9dff-4208-9753-61d266644223",
                  "value": "RSCONNECT_IMPORT_JSON"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "9ef9ca9c-af1d-40e8-a2d4-2cba779530dd",
                  "value": "QUEUED"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.