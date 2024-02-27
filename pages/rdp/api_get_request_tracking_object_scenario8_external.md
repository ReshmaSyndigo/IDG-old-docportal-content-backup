---
title: Track Requests using Task ID and Service Name
sidebar: rdp_sidebar
permalink: api_get_request_tracking_object_scenario8.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}** to track the requests using Task Id and Service Name. 

## Scenario

You can track the import task of an Excel file based on Entity Manage Service and Task ID. This topic describes how to use the RESTful API in Riversand Platform SDK to track the request of the task. This scenario helps you to identify the count of direct changes and impacted/indirect changes from the respective file.

The count of direct changes must be equal to the total count of entities available in the file. The count of impacted/indirect changes can be between zero and the total count of entities available in the file.

{% include snippets/header.html %}

## Request

To get the above request details, you can use the RESTful API **{{site.data.rdp_glossary.getrequesttrackingobject}}**. In the request send the following details:

* query -> filters -> typesCriterion: Specify as "requestobject".
* query -> filters -> attributesCriterion -> serviceName: Specify the "serviceName" as "entityManageService".
* query -> filters -> attributesCriterion -> impacted: Specify the value as true to track all the impacted/indirect requests, which are sent back from the other services (postprocess and graph). Specify as false to track the requests that came directly through UI, import, and API. In this scenario, "impacted" is set to "true".
* query -> filters -> attributesCriterion -> eventType: Specify the event type as "no change". The "no change" value indicates that the request does not have any new or modified values and the system did not process anything. This attribute is not available if the request has any change. In this scenario, it tracks the internal requests that have no changes after processing as the "impacted" flag is set to "true". If the "impacted" flag is set to "false", then it tracks the requests that are created directly and have no changes since the import.
* query -> filters -> attributesCriterion -> taskId: Specify the "taskId".

<pre>
<code>
POST **{TenantURL or ID}/api/requesttrackingservice/get**
Headers: Content-Type: application/json
BODY 
{
  "params": {
    "query": {
      "contexts": [],
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"requestobject"</span>
        ],
        "isAttributesCriterionOR": false,
        "attributesCriterion": [
          {
            "serviceName": {
              <span style="background-color: #FFFF00">"exact": "entityManageService"</span>
            }
          },
          {
            "impacted": {
              <span style="background-color: #FFFF00">"exact": true</span>
            }
          },
          {
            "eventType": {
              <span style="background-color: #FFFF00">"exact": "nochange"</span>
            }
          },
          {
            "taskId": {
              <span style="background-color: #FFFF00">"exact": "55625da8-e154-43cb-8935-f9fb4ba4acf2"</span>
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 1
    }
  }
}
</code>
</pre>

## Response

Returns the request tracking object entity matching the search criteria. The "totalRecords" in the response reduces based on the "attributesCriterion" specified in the query request.

* **callerServiceName**: Indicates the service name, which sends back the request. In the below response, "callerServiceName" is returned as ""entityPostProcessService". The "callerServiceName" returns the service name only if the "impacted" parameter is set to "true" in the query request. If set to false, then the "callerServiceName" returns with nil value, "apiHostservice".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "9dd99c94-f264-432b-a6c8-6164e24687f0",
    "maxRecords": 1,
    "taskId": "9dd99c94-f264-432b-a6c8-6164e24687f0"
  },
  "response": {
    "requestObjects": [
      {
        "id": "30e2c9a6-3b5f-4109-995b-54d70fc7cc82",
        "type": "requestobject",
        "data": {
          "attributes": {
            "entityAction": {
              "values": [
                {
                  "value": "systemupdate",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "serviceName": {
              "values": [
                {
                  "value": "entityManageService",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestId": {
              "values": [
                {
                  "value": "30e2c9a6-3b5f-4109-995b-54d70fc7cc82",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestStatus": {
              "values": [
                {
                  "value": "success",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "relatedRequestId": {
              "values": [
                {
                  "value": "2deb11d1-bf1e-46d2-bbc7-91e63591089e",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "requestGroupId": {
              "values": [
                {
                  "value": "016f7f67-400f-49e6-ae8d-c63f4195567b",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "impacted": {
              "values": [
                {
                  "value": true,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            <span style="background-color: #FFFF00">"callerServiceName": { </span>
              "values": [
                {
                  <span style="background-color: #FFFF00">"value": "entityPostProcessService",</span>
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "eventType": {
              "values": [
                {
                  "value": "nochange",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            }
          },
          "jsonData": {}
        }
      }
    ],
    "status": "success",
    "totalRecords": 44
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.