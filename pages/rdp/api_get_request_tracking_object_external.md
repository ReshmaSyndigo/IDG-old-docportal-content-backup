---
title: Track Requests using Request Tracking Object 
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This section covers the following scenarios to explain the usage of RESTful APIs in the Riversand Platform SDK to get the request tracking object:

* [Track Create Entity Request Using Request Id](api_get_request_tracking_object_scenario1.html)
* [Track Govern Requests of Create Entity Using Request Id](api_get_request_tracking_object_scenario2.html)
* [Track Create, Update and Delete Entity Requests Using Entity Id and Entity Action](api_get_request_tracking_object_scenario3.html)
* [Track Task Summary Object using Task Id and typesCriterion](api_get_request_tracking_object_scenario4.html)
* [Track Govern Requests of an Entity](api_get_request_tracking_object_scenario5.html)

{% include snippets/header.html %}

## Request

POST {{site.data.rdp_glossary.getrequesttrackingobject}}

**Parameters**: The following table lists the parameters of the JSON request to get the status of the requests for an entity or collection of entities:

| Parameters | Name | Required | Description |
|-------|--------|----------------|-------------|
| params | query | Yes | Indicates the search criteria for getting the status of the request for an entity or collection of entities. |
| query | id | No | Indicates request unique identifier. |
| query | name | No | Indicates request name, if any. |
| query | ids | No | Indicates an array of request unique identifiers. |
| query | contexts | No | Indicates an array of lists. |
| query | contexts -> list | No | Indicates where the entity belongs to. |
| query | contexts -> country | No | Indicates the country the current request is linked to. |
| query | filters -> typesCriterion | Yes | Indicates an array of types that are used to filter the results. |
| query | filters -> attributesCriterion | No | Indicates an array of attribute names and values that are used to filter the results. |
| query | filters -> attributesCriterion -> <<AttrName>> | No | Indicates the name of the attribute. |
| query | filters -> attributesCriterion -> <<AttrName>> -> <<Operator>> : <<AttrValue>> | No | Indicates the type of operator to be used for comparing the AttrValue. Possible values - "eq" (equal to), "gte" (greater than or equal to), and "lte" (less than or equal to). |
| query | keywordsCriterion -> keywords | No | Indicates the keywords to be used to filter the results.|
| query | keywordsCriterion -> operator | No | Indicates the operator used to join the keywords. Possible Values - "_AND", "_OR", "_EXACT". If operator is not specified, then the default operator used is "_AND"|
| fields | fields -> attributes | No | Indicates a comma separated list of attributes to be returned in the result. |
| sort | sort -> attributes | No | Indicates an array of attributes that is used to sort the results. Results are sorted based on the order specified. |
| sort | sort -> attributes -> <<AttrName>> : <<SortOrder>> | Yes | Indicates attribute and the sort order. Possible values are _DESC and _ASC. |
| sort | sort -> attributes -> sortType | No | Indicates the sort type such as "_DATETIME", "_DECIMAL", or "_INTEGER". If sort type is not specified, then records are sorted using "string" type. |
| options | options -> maxRecords | No | Indicates the number of records to be returned in the result. The maximum limit for total records in one call is 2000.|

{% include callout.html content="**Notes**: 
* **typesCriterion** is mandatory and it must include the value as **requestObject** or _ALL or **requestofrequestsobject**. 
* **_ALL** in the attributesCriterion or relationshipsCriterion fields implies all attributes or relationships that satisfy the context.
* **id** is optional, if an Id is specified, then all the conditions is applied only to that identifier.
* If you do not specify any attributes in fields, then only basic request information such as request Id and  type are returned in the response. 
" type="primary" %}

## Response

The response is returned in a JSON format and includes the following details:

{% if site.build == "internal" %}
| Parameters | Name | Description |
|-------|--------|----------------|
| response | binaryStreamObjects | List of requested tracking object that matched the search criteria. See [Request Tracking Object Structure](api_request_tracking_object_structure.html), for more information. Example: 565560dc-1763-4d4c-8d63-75a941cef5f3|
| response | totalRecords | Number of requested tracking objects that matched the search criteria.|
| response| status | Indicates if the request is submitted successfully or not. |
{% endif %}

{% if site.build == "external" %}
| Parameters | Name | Description |
|-------|--------|----------------|
| response | binaryStreamObjects | List of requested tracking object that matched the search criteria. Example: 565560dc-1763-4d4c-8d63-75a941cef5f3|
| response | totalRecords | Number of requested tracking objects that matched the search criteria.|
| response| status | Indicates if the request is submitted successfully or not. |
{% endif %}

## Example

The following example demonstrates a sample request and response to track the create entity request using request Id:

<pre><code>
POST **{TenantURL or ID}/api/requesttrackingobject/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      "id":"565560dc-1763-4d4c-8d63-75a941cef5f3",
      "filters": {
        "typesCriterion": [
          "requestobject"
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 100
    }
  
  }
}
</code></pre>

**Response**: 
<pre><code>
{
  "response": {
    "requestObjects": [
      {
        "id": "565560dc-1763-4d4c-8d63-75a941cef5f3",
        "type": "requestobject",
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "6f216933-fbaa-4896-8ccd-aae56a5b4390",
                  "value": "create"
                }
              ]
            },
            "entityId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "31767bed-cb3e-4734-a4e4-f84e2502afe3",
                  "value": "shelfNarrowBookcase001"
                }
              ]
            },
            "entityType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "51334648-fa67-4933-926e-b1d990b2d0f4",
                  "value": "sku"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "84d7743f-c902-4cab-9f52-d8dd8340886f",
                  "value": "entityManageService"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "52869fd7-37f2-4eab-864c-b6756d78c6ba",
                  "value": "565560dc-1763-4d4c-8d63-75a941cef5f3"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "source": "rdp",
                  "locale": "en-US",
                  "value": "success"
                }
              ]
            },
            "requestTimestamp": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a02d5821-7cf8-44ef-97c1-5dde9e77255d",
                  "value": 1498468586472
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "78170e8d-bbf5-4f58-af24-999e1acb7b52",
                  "value": "565560dc-1763-4d4c-8d63-75a941cef5f3"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "1d9c7f17-ff64-4945-bb46-a6bde26676af",
                  "value": "565560dc-1763-4d4c-8d63-75a941cef5f3"
                }
              ]
            },
            "clientId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a8ae0435-9de9-479a-884b-3e3aa4c2cdee",
                  "value": "rdpclient"
                }
              ]
            },
            "userId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "387237be-d327-4f2f-9dd5-4f0b9fa54c52",
                  "value": "mary.jane@riversand.com"
                }
              ]
            },
            "ApiService": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "5285bbbd-efc4-40ab-bb57-9598b55a8d4e",
                  "value": "success"
                }
              ]
            },
            "ObjectStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "e9a75698-8fbf-4a5f-ae23-5fb196b219cb",
                  "value": "success"
                }
              ]
            },
            "SearchStore": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "rdp",
                  "id": "a3d61a1c-62e7-4c68-ba02-93f1f4851bc0",
                  "value": "success"
                }
              ]
            }
          },
          "jsonData": {
            "clientState": {
              "someJson": {}
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.