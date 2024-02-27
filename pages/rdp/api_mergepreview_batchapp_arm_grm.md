---
title: Batch app for Golden Record Management (GRM) and Address Record Management (ARM) process
sidebar: rdp_sidebar
permalink: api_mergepreview_batchapp_arm_grm.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

A batch app is created to process the qualified Source Record (SR) at specific intervals and run them through the Golden Record Management (GRM) process and Address Record Management (ARM) process to generate golden and address records. When a SR is onboarded, the Riversand Platform generates the Golden Record (GR). If GR is qualified, then the platform links the SR and GR. This process of linking the SR to the GR is done using "Golden Record Management (GRM) Batch App" via the restful API. When the imported SR contain matching attributes that are quailifed for generating GR, then GRM batch app is run to establish the relevant relationship. Upon configuring, when you run the batch app, the GR will be in any of the following state, that is **GRM state** and **GRM process states**. 

{% include callout.html content="**Notes:** 
* A **GRM** is a process where a SR is processed and GR is linked to it.
* A **ARM** is a process wherein when the address attributes is available (arm is configured) in SR, the address gets created/maintained and linked to it. It uses Address service to fetch standardized values for address fields. For example, smartystreet service. 
" type="primary" %}
 
#### GRM State

The platform determines if the GR is processed by GRM or not and the GR can be in any of the state:
* inreview
* done
* new
* update

#### GRM Process State

The GRM process state denotes the action taken on SR and GR and can be any of the state:
* inreview
* autocreated
* automerged
* manualmerged
* discarded
* unmerged

#### Prerequiste

The following are the prerequites:

* Configure to Process Source Record to create Golden Record
* ARM config for SR
* Match related configurations:
  * domain match profile for source entity
  * source entity match config
  * golden entity match config and match profile
  * match standardization keyword configured for source and golden entity
  * address entity match config
  * ml model for golden entity
* smartystreet RESTFUL api configuration:
  * syndication service config
  * fields mapping config

## Request

You must trigger a batch job with certain attributes criterion. Call the proxy service with the following details:
* **appId**: matchservice 
* **jobdefid**: grmbatch

<pre>
<code>
{
  "proxyObject": {
    "type": "batch-create-job",
    "data": {
      "jsonData": {
        "requestBody": {
          "jobIdentifier": {
            "appId": "matchservice",
            "jobDefId": "grmbatch"
          },
          "batchOptions": {
            "poolId": "rsbatch"
          },
          "jobInputPayload": {
            "rdpQuery": {
              "params": {
                "query": {
                  "id": "rxOPRPKHTc6dW5u3lz_Wfg",
                  "filters": {
                    "typesCriterion": [
                      "rsdraftorganization"
                    ]
                  }
                },
                "fields": {
                  "attributes": [
                    "_ALL"
                  ],
                  "relationships": [
                    "_ALL"
                  ]
                }
              }
            }
          }
        },
        "requestHeaders": {
          "x-rdp-taskId": "{{guid}}"
        }
      }
    }
  }
}
</code>
</pre>

**Result**: The **jobinputpayload -> rdpquery -> id**: Fetches the qualified records for GRM and ARM process. 

