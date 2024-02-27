---
title: Golden Record Management and Address Record Management Batch App
sidebar: rdp_sidebar
permalink: api_enable_arm_grm.html
folder: rdp
type: HowTo
---

The application allows you to invoke a batch job which processes the qualified source entities at specific interval and take them through Golden Record Management (GRM) process and Address Record Management (ARM) process to generate golden and address records. 
* GRM refers to the process, where source record is processed and the golden record is linked to it.
* ARM refers to the process, when address attributes is available and ARM is configured for source entity, as a result, address gets created and is linked. This process uses the smartystreet service to fetch the standardized values for address fields. For more information, see [Configure Smarty Street](api_smarty_street_arm.html).

A sample screenshot of the GRM and ARM process flow is displayed.

{% picture grm-arm.png alt="GRM and ARM" %}

### Prerequisites

The following are the prerequisites:
* Define Source Record (SR) and Golden Record (GR) in GRM app config. For more information, see [Configure Golden Record Management](/{{site.data.rdp_links_version.APP}}/dm_config_entitytype_processing.html)
* ARM config for source entity
* Match related configurations such as:
  * domain match profile for source entity
  * source entity match config
  * golden entity match config and match profile
  * match standardization keyword configured for source and golden record
  * address entity match config
  * ml model for golden entity
* [Configure Smarty Street](api_smarty_street_arm.html)
* syndication service config
* fields mapping config

## Request

A GRM batch can be invoked via schedule job (specific interval) or Rest API based on requirement. The following is the rest API sample invocation for GRM and ARM.

The following is the sample API request to

{% highlight json %}
{% raw %}
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
          "x-rdp-taskId": "{{$guid}}"
        }
      }
    }
  }
}
{% endraw %}
{% endhighlight %}

## Response

If the request is successful, then the following response is received.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "3db686e6-c683-43eb-9351-38240a533576",
    "taskId": "3db686e6-c683-43eb-9351-38240a533576"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "status": "success",
      "statusDetail": {
        "message": "Successfully queued job.",
        "taskId": "3ad3baac-bc60-4a23-bdee-1e9c62b7952f",
        "jobId": "3ad3baac-bc60-4a23-bdee-1e9c62b7952f"
      }
    },
    "totalRecords": 0
  }
}
</code>
</pre>