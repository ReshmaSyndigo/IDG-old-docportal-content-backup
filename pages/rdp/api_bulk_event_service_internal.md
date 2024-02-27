---
title: Bulk Event Services
sidebar: rdp_sidebar
permalink: api_bulk_event_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

In Riversand Platform, there are various events and often is heterogeneous in nature. These events become unwanted to the user after a period of time. Also these events by consuming large volumes of space reduce the storage space in a system. Riversand Platform enables you to manage this diverse and **bulk events** by providing you with various REST APIs. With the [Bulk Event Services API](api_bulk_event_service.html), you can delete all the unwanted events by specifying the time period between which you wish to delete all the events. Consider that you have the requirement to delete multiple events at one shot. To fulfill such requirements, Riversand Platform provides the "Bulk Event Service API" with the URI as **{{site.data.rdp_glossary.bulkeventservices}}**.

## Scenario

Consider you have an entity with various events that are no longer needed by the user. Now you wish to delete all the unwanted events.

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.bulkeventservices}}. In the request send the following details:

* query -> operationType : Specify as "inboundService".
* query -> taskType : Specify as "delete".
* query -> attributesCriterion : Here all the events that were created from 01-01-2017 till seven days before today gets deleted.
 
<pre>
<code>
POST **{{site.data.rdp_glossary.bulkeventservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"taskType": "delete",</span>
    <span style="background-color: #FFFF00">"operationType": "inboundService",</span>
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"externalevent"</span>
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00">"createdOn": {</span>
              "gt": "2017-01-01T00:00:01.000+0000",
              "lt": "now-7d/d",
              "type": "_DATETIME"
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

## Response

Deletes all the events according to the specified time period. Hence in the UI all the events that were created from 01-01-2017 till seven days before today gets deleted. 

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "461f506a-d70c-4a26-a1cd-5bff7751f69f",
    "taskId": "461f506a-d70c-4a26-a1cd-5bff7751f69f"
  },
  "response": {
    "status": "success",
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.