---
title: Get Metrics
sidebar: rdp_sidebar
permalink: api_get_metrics.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform allows you to use metricService API to collect updated Metrics counts, including the details, such as last updated time, modified by, throughput data, and so on, for the tenants in an interval of 5 mins. These data updates are pushed by **Sensu** according to the scheduled interval. 

## Scenario
To view the counts of successful throughput data through RDP for the tenants.

{% include snippets/header.html %}

## Request

To view the counts of successful throughput data through RDP for the tenants, use the REST API **{TenantURL or ID}/api/metricsService/get**. In the request send the following details

<pre>
<code>
POST **{TenantURL or ID}/api/metricsService/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      <span style="background-color: #FFFF00"> "id": "t1_throughputmetrics", </span>
      "filters": {
        "typesCriterion": [
          "throughputMetrics"
        ]
      }
    }
  }
}
</code>
</pre>

## Response

If the above request is submitted successfully, then the following response for total records are received from the API:

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "params": {},
        "requestId": "fe26cf6f-d08c-435f-ba67-cd56684bf986",
        "maxRecords": 1000
    },
    "response": {
        "metricsObjects": [
            {
                "id": "t1_throughputmetrics",
                "name": "t1-throughputMetrics",
                "type": "throughputMetrics",
                "properties": {
                    <span style="background-color: #FFFF00"> "createdService": "metricsService", </span>
                    <span style="background-color: #FFFF00"> "createdBy": "system_user", </span>
                    <span style="background-color: #FFFF00"> "modifiedService": "metricsService", </span>
                    <span style="background-color: #FFFF00"> "modifiedBy": "system_user", </span>
                    <span style="background-color: #FFFF00"> "createdDate": "2020-08-19T02:39:42.335-0500", </span>
                    <span style="background-color: #FFFF00"> "modifiedDate": "2020-08-19T02:39:42.335-0500" </span>
                },
                "data": {
                    "jsonData": {
                        "services": {
                            "rsConnectService-import": {
                                "producer": 0,
                                "consumer": 0
                            },
                            "entityAppService": {
                                "producer": 200,
                                "consumer": 200
                            },
                            "entityManageService": {
                                "producer": 25,
                                "consumer": 20
                            },
                            "rsConnectService-export": {
                                "producer": 0,
                                "consumer": 0
                            }
                        }
                    }
                }
            }
        ],
        "status": "success",
        <span style="background-color: #FFFF00"> "totalRecords": 1 </span>
    }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
