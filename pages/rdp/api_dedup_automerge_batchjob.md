---
title: Run dedup job for Auto-merge
sidebar: rdp_sidebar
permalink: api_dedup_automerge_batchjob.html
folder: HowToAPI
type: description
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API to invoke a dedup job for auto-merge. You can invoke either by using the 'task id' or post dedup activity. 

{% include snippets/header.html %}

Consider you wish to invoke dedup job for auto-merge.

## Request

To invoke a dedup job for auto merge use the REST API . In the request send the following details:
* **title**: By the job title.
* **invoke_automerge**: Specify as 'true' to invoke a batch job for automerge.
* **profileName**: Specify the profile name based on whoch the merge strategies are applied for the auto-merge. This is defined in the model service with type mergemodel.
* **taskId**: Enter the dedup taskId.
* **mergeThreshold**: Specify the merge threshold here.

By default, the following are specified:
* "appId": "app-dedup"
* "jobDefId": "dedup"

<pre>
<code>
{
  "proxyObject": {
    "type": "batch-process",
    "data": {
      "jsonData": {
        "requestBody": {
          "jobIdentifier": {
            <span style="background-color: #FFFF00">"appId": "app-dedup",</span>
            <span style="background-color: #FFFF00">"jobDefId": "dedup"</span>
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
                          "exact": "moneymart-automerge-apitestload4"
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
              <span style="background-color: #FFFF00">"title": "Dedup Run Batch Job 4"</span>
            },
            "dedupType": "b2c",
            "sync_rest": true,
            <span style="background-color: #FFFF00">"invoke_automerge": true,</span>
            <span style="background-color: #FFFF00">"automerge_config": {</span>
              <span style="background-color: #FFFF00">"profileName": "dedupmergemodel-APITest4",</span>
              <span style="background-color: #FFFF00">"mergeThreshold": "0.7"</span>
            }
          }
        },
        "requestHeaders": {
          "x-rdp-taskId": "dedupcanadacustomer4"
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
    "requestId": "dd4f3238-29ad-49c6-b5a7-ae35498f927b",
    "taskId": "dd4f3238-29ad-49c6-b5a7-ae35498f927b"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "status": "success",
      "statusDetail": {
        "jobId": "dedupcanadacustomer4",
        "taskId": "dedupcanadacustomer4"
      }
    },
    "totalRecords": 0
  }
}
</code>
</pre>
