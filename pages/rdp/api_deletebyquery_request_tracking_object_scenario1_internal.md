---
title: Delete Request Tracking Objects using Query
sidebar: rdp_sidebar 
permalink: api_deletebyquery_request_tracking_object_scenario1.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.deletebyquery}}** to delete a request tracking object using a query, in a scenario.

## Scenario

To delete all request objects created from "2019-01-01T00:00:01.000+0000" to "2019-03-01T00:00:01.000+0000".

{% include snippets/header.html %}

## Request

To get the above request details, you can use the REST API {{site.data.rdp_glossary.deletebyquery}}. In the request, send the following details:

* typesCriterion: Specify as requestobject.
* createdDate -> gt: Specify the time period starting from which you wish to delete the request objects.
* createdDate -> lt: Specify the time period until which you wish to delete the request objects.
* createdDate -> type: Specify as "_DATETIME".
* propertiesCriterion - The following table shows different attribute values that can be specified in propertiesCriterion:

{% picture request-tracking.png alt="Attribute Values in propertiesCriterion" %}

<pre>
<code>
POST **{{site.data.rdp_glossary.deletebyquery}}**
Headers: Content-Type: application/json
BODY: 
{
  "params": {
    "query": {
      "filters": {
        <span style="background-color: #FFFF00">"typesCriterion": [</span>
          "requestobject"
        ],
        "propertiesCriterion": [
          {
            "createdDate": {
              <span style="background-color: #FFFF00">"gt": "2019-01-01T00:00:01.000+0000",</span>
              <span style="background-color: #FFFF00">"lt": "2019-03-01T00:00:01.000+0000",</span>
              <span style="background-color: #FFFF00">"type": "_DATETIME"</span>
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

The following response is returned if the request is submitted successfully:

<pre>
<code>
{
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageType": "success",
          "totalVersionConflicts": 0,
          "message": "Total Records deleted: 0"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.