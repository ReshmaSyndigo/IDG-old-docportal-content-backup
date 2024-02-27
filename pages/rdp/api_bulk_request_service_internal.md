---
title: Bulk Request Services
sidebar: rdp_sidebar
permalink: api_bulk_request_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

In Riversand Platform, there are various requests and often is heterogeneous in nature. These requests become unwanted to the user after a period of time. Also these request objects by consuming large volumes of space reduce the storage space in a system. Riversand Platform enables you to manage this diverse and **bulk requests** by providing you with various REST APIs. With the [Bulk Request Services API](api_bulk_request_service.html), you can delete all the unwanted request objects by specifying the time period between which you wish to delete all the request objects. Consider that you have the requirement to delete multiple request objects at one shot. To fulfill such requirements, Riversand Platform provides the "Bulk Request Service API" with the URI as **{{site.data.rdp_glossary.bulkrequestservices}}**. 

## Scenario

Consider you have an entity with various request objects that are no longer needed by the user. Now you wish to delete all the unwanted request objects.

## Request

To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.bulkrequestservices}}. In the request send the following details:

* query -> propertiesCriterion : Here all the requests that were created from 01-01-2017 till seven days before today gets deleted.
* query -> operationType : Specify as "inboundService". 
* query -> taskType : Specify as "delete".

<pre>
<code>
POST **{{site.data.rdp_glossary.bulkrequestservices}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    <span style="background-color: #FFFF00">"taskType": "delete",</span>
    <span style="background-color: #FFFF00">"operationType": "inboundService",</span>
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"requestobject"</span>
        ],
        "propertiesCriterion": [
          {
            <span style="background-color: #FFFF00">"createdDate": {</span>
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

Deletes all the request objects according to the specified time period. Hence in the UI all the requests that were created from 01-01-2017 till seven days before today gets deleted.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "requestId": "07b9d226-76ef-4d21-aa90-42a351f8c078",
    "taskId": "07b9d226-76ef-4d21-aa90-42a351f8c078"
  },
  "response": {
    "status": "success",
    "totalRecords": 0
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
