---
title: Run Dedup Job
sidebar: rdp_sidebar
permalink: api_dedup_run_job.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

You use the RESTful API to invoke run the dedup job.

{% include snippets/header.html %}

## Request

<pre>
<code>
{
  "proxyObject": {
    "type": "batch-process",
    "data": {
      "jsonData": {
        "requestBody": {
          "jobIdentifier": {
            "appId": "app-dedup",
            "jobDefId": "dedup"
          },
          "batchOptions": {
            "poolId": "rsbatch"
          },
          "jobInputPayload": {
            "rdpQuery": {
              "params": {
                "query": {
                  "filters": {
                    "typesCriterion": [
                      "rssourcecustomer"
                    ],
                    "attributesCriterion": [
                      {
                        "sysloadid": {
                          "exact": "apimoneymart-testload1"
                        }
                      },
                      {
                        "sysdedupstatus": {
                          "exact": "New"
                        }
                      }
                    ]
                  }
                },
                "fields": {
                  "attributes": [
                    "_ALL"
                  ]
                }
              }
            },
            "taskInfo": {
              "title": "API Dedup Run"
            },
            "dedupType": "b2c",
            "sync_rest": true
          }
        },
        "requestHeaders": {
          "x-rdp-taskId": "apideduprun"
        }
      }
    }
  }
}
</code>
</pre>

## Response

If the request is submitted successfully, then the following response is received from the API:

<pre>
<code>
{
    "request": {
        "returnRequest": false,
        "requestId": "7266d85a-2d6c-43c1-ad51-6099dd27e77f",
        "taskId": "7266d85a-2d6c-43c1-ad51-6099dd27e77f"
    },
    "response": {
        "status": "success",
        "statusDetail": {
            "status": "success",
            "statusDetail": {
                "jobId": "apideduprun",
                "taskId": "apideduprun"
            }
        },
        "totalRecords": 0
    }
}
</code>
</pre>

## Troubleshooting

See [Troubleshooting](api_troubleshooting_tips.html) Tips, for common troubleshooting tips, if required.

