---
title: Ingest Metrics
sidebar: rdp_sidebar
permalink: api_ingest_metrics.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

Riversand Platform allows you to use metricService API to monitor services that are called in a scheduled interval using Ingest Metrics. These scheduled services data get updated and pushed by **Sensu** to monitoring service according to the scheduled interval. The monitoring service collects all the data points that occur or exist in the last one hour (aggregation period) and data aggregates and then finally  pushes the overall data to RDP using Ingest Metrics API.

## Scenario
To view the persisted data through RDP for the tenants.

{% include snippets/header.html %}

## Request

To view the persisted data, use the REST API **{TenantURL or ID}/api/metricsService/ingestMetrics**. In the request send the following details:

<pre>
<code>
POST **{TenantURL or ID}/api/metricsService/ingestMetrics**
Headers: Content-Type: application/json
Body:
{
  "metricsObjects": [
    {
      <span style="background-color: #FFFF00"> "id": "t1_throughputmetrics", </span>
      <span style="background-color: #FFFF00"> "name": "t1-throughputMetrics", </span>
      <span style="background-color: #FFFF00"> "type": "throughputMetrics", </span>
      "data": {
        "jsonData": {
          "services": {
            "entityAppService": {
              "producer": 200,
              "consumer": 200
            },
            "entityManageService": {
              "producer": 25,
              "consumer": 20
            },
            "rsConnectService-import": {
              "producer": 0,
              "consumer": 0
            },
            "rsConnectService-export": {
              "producer": 0,
              "consumer": 0
            }
          }
        }
      }
    },
    {
      <span style="background-color: #FFFF00"> "id": "t2_throughputmetrics", </span>
      <span style="background-color: #FFFF00"> "name": "t2-throughputMetrics", </span>
      <span style="background-color: #FFFF00"> "type": "throughputMetrics", </span>
      "data": {
        "jsonData": {
          "services": {
            "entityAppService": {
              "producer": 10,
              "consumer": 10
            },
            "entityManageService": {
              "producer": 125,
              "consumer": 120
            },
            "rsConnectService-import": {
              "producer": 10,
              "consumer": 0
            },
            "rsConnectService-export": {
              "producer": 0,
              "consumer": 0
            }
          }
        }
      }
    },
    {
      <span style="background-color: #FFFF00"> "id": "t3_throughputmetrics", </span>
      <span style="background-color: #FFFF00"> "name": "t3-throughputMetrics", </span>
      <span style="background-color: #FFFF00"> "type": "throughputMetrics", </span>
      "data": {
        "jsonData": {
          "services": {
            "entityAppService": {
              "producer": 10,
              "consumer": 10
            },
            "entityManageService": {
              "producer": 125,
              "consumer": 120
            },
            "rsConnectService-import": {
              "producer": 10,
              "consumer": 0
            },
            "rsConnectService-export": {
              "producer": 0,
              "consumer": 0
            }
          }
        }
      }
    }
  ]
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
        "requestId": "893812cd-f3d5-4750-a204-7479466f4146"
    },
    "response": {
        "status": "success",
        <span style="background-color: #FFFF00"> "totalRecords": 3 </span>
    }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.
