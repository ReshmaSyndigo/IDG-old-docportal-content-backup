---
title: Bulk Generic Services
sidebar: rdp_sidebar
permalink: api_bulk_generic_service.html
folder: rdp
type: HowToAPI
layout: page_api
---

{% include snippets/api_preview.md %}

In Riversand Platform, data can flow in various forms in exploding volume and velocity from different sources and often is heterogeneous in nature. Riversand Platform supports different forms of processing of these data depending on your business requirements. Riversand Platform handles such requests that involves processing of large amounts of input data by creating the **Generic objects** through the Generic Object Manage Services. Riversand Platform enables you to manage **generic objects** by providing you with various REST APIs. With the [Bulk Generic Services API](api_bulk_generic_service.html), you can specify the various generic objects that need to be consumed while executing the scheduled tasks. 

Bulk Generic Services helps to perform scheduled tasks. It helps you to carry out events that needs to be performed while running a scheduled task. In case the user wishes to execute a  scheduled task then the URL is specified to the scheduler. In case the user wishes to run on demand then you specify the following URL and parameters as shown below.
**URL "{uri}/api/rsGenericInboundService/process"**

<pre><code>
{
  "params": {
    "operationType": "inboundService",
    "batchSize": 1000,
    "query": {
      "filters": {
        "attributesCriterion": [
          {
            "status": {
              "exact": "QUEUED"
            }
          },
          {
            "graphprocessconfig": {
              "exact": "sku_contentGeneration"
            }
          }
        ],
        "typesCriterion": [
          "scheduledrequestobject"
        ]
      }
    },
    "sort": {
      "attributes": [
        {
          "dataObjectId": "_DESC",
          "sortType": "_STRING"
        }
      ]
    },
    "distinct": {
      "attributes": [
        "doId",
        "doType"
      ]
    },
    "groupBy": {
      "attributes": [
        "chBucket"
      ]
    },
    "aggregate": {
      "attributes": [
        "evId"
      ]
    }
  }
}
</code></pre>

{% include callout.html content="**Notes**:<br/>
As the generic objects are created, used, and maintained mainly for the **internal purposes** by the Riversand Platform, it is not recommended for you to explicitly create the generic objects using \"{TenantURL or ID}/api/genericobjectmanageservice/create\" API unless you have the business requirement that strongly needs the creation of the generic objects. The following are the main characteristics of the generic object manage service:
	 
* It stores the generic objects temporarily before they are taken for the actual processing.
* It does not require the usage of well-defined modeled entity; hence it does not perform actions such as validations and authorizations.
* It keeps track of status of already submitted data.
" type="primary" %}

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.