---
title: Get System Uptime Report
sidebar: rdp_sidebar
permalink: api_diag_get_system_uptime_scenario1.html
type: HowTo
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.diaguptime}}** to get the system uptime report.

## Scenario

Get system uptime report.

{% include snippets/header.html %}

## Request

To get above report, use the REST API {{site.data.rdp_glossary.diaguptime}}. In the request send the following details:

* query -> filters -> typesCriterion: Specify the type as "appuptimereport".

<pre>
<code>
POST **{Tenant URL or ID}/api/diagnosticservice/getuptimereport**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"appuptimereport"</span>
        ]
      }
    }
  }
}
</code>
</pre>

## Response

In the response, "properties" section includes system status indicated by **system_status** and individual checks are indicated by <<**check**>>_<<**checkname**>>.

{% highlight json %}
{
  "request": {
    "returnRequest": false,
    "requestId": "276822bd-c99c-4538-a02e-76558aa6a17a"
  },
  "response": {
    "infoObjects": [
      {
        "id": "7a8069fd-3941-4c3d-a80e-e3364b1eeff8",
        "type": "appuptimereport",
        "properties": {
          "check_CreateItem": 0,
          "check_ImportExcel": 0,
          "check_ImportJson": 0,
          "check_Login": 0,
          "check_Search": 0,
          "check_UpdateItem": 0,
          "system_status": 0,
          "timestamp": "2019-06-22T14:03:24.564-0500"
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
{% endhighlight %}

See [Understand Uptime Report Results](api_diag_get_understand_results.html), for more details on the uptime report results.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.