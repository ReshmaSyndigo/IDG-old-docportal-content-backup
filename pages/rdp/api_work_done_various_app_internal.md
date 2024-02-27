---
title: Sample Scenarios to Track Measurement of Work done by Various Apps 
sidebar: rdp_sidebar
permalink: api_work_done_various_app.html
folder: rdp
type: HowTo
---

Riversand platform allows you to validate the amount of work done by the various apps such as **Entity Manage**, **Govern**, **Post-Process**, **Graph**, **Entity Service**, and **Event** app for a particular request. A request object is generated for these apps with the details in the "appMetrics" nested attribute, which is used to capture the app specific metrics. In this request object, you can the verify the amount of work done by the respective app in the "appMetrics" nested attribute. 

The following are the sample scenarios where you can verify the amount of work done by the system in the respective app:

* [Validate the amount of work done by various apps](#validate-the-amount-of-work-done-by-various-apps).
* [Validate the amount of work done by Graph app](#validate-the-amount-of-work-done-by-graph-app).
* [Validate the amount of work done by Event app](#validate-the-amount-of-work-done-by-event-app).

## Validate the amount of work done by various apps

Consider a scenario where a SKU entity is created and you wish to verify the amount of work done by the various apps such as **Entity Manage**, **Govern**, **Post-Process**, **Graph**, and **Event** app by using the entityID. If the graph operation is not executed for the SKU, then the request object does not consist of "graphManageService" as a service name.


The following is the sample request:

<pre>
<code>
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          "requestobject"
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00"> "entityId": { </span>
              "exacts": "skuentity001"
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
    "sort": {
      "properties": [
        {
          "createdDate": "_DESC",
          "sortType": "_DATETIME"
        }
      ]
    }
  }
}
</code>
</pre>

## Validate the amount of work done by Graph app

Consider that you have created a request to auto-link an image to the SKU automatically by creating the relationship between the image and SKU. You can verify whether the requested graph operation is successful or not in the generated request object with the "requestStatus" value as "Error". For more information, see [Get the Details of Work Done in Graph Process App](api_request_graph_operations_computed.html).

## Validate the amount of work done by Event app

Consider that you have created a request to create a SKU. A request is sent to the event topology to generate the events. In this case, the event is sent to "Entity Govern" and "Entity Manage" subscriber. If any one of the subscribers is failed to process the event type, then you can verify in the generated request object. For more information, see [Get the Details of Work done in Event App](api_request_work_done_event_service.html).

