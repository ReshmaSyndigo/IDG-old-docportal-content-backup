---
title: Get Generic Objects using dataObjectId 
sidebar: rdp_sidebar
permalink: api_gen_obj_get_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.genobjget}}** to get generic objects, using a scenario.

## Scenario

To get the all generic object with a particular dataObjectId.

{% include snippets/header.html %}

## Request

To get the above generic objects, you can use the REST API {{site.data.rdp_glossary.genobjget}}. In the request send the following details:

* query -> filters -> attributesCriterion: Specify the required "dataObjectId" with the operator as "exact".

<pre>
<code>
POST {TenantURL or ID}/api/genericobjectmanageservice/get
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00">"dataObjectId": {</span>
              "exact": "do2104"
            }
          }
        ]
      }
    },
    "fields": {
      "attributes": [
        "_ALL"
      ]
    },
    "options": {
      "maxRecords": 2
    }
  }
}
</code>
</pre>


## Response

Returns all generic objects that are created for the given data object Id.

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "95936ca1-b303-4603-9f03-a44517d0617f",
    "maxRecords": 2
  },
  "response": {
    "genericObjects": [
      {
        "id": "TestGenericObject2201",
        "name": "TestGenericObject2201",
        "type": "schedulerequestobject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "dev1@riversand.com",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "dev1@riversand.com",
          "createdDate": "2018-09-11T00:38:10.946-0500",
          "modifiedDate": "2018-09-11T00:38:10.946-0500"
        },
        "data": {
          "attributes": {
            "dataObjectId": {
              "values": [
                {
                  "id": "3ceecaa3-182c-4d5b-9403-06730e376a86",
                  "value": "do2104"
                }
              ]
            },
            "dataObjectType": {
              "values": [
                {
                  "id": "7aae885d-301b-4e12-9947-31aa4bfa540f",
                  "value": "[BR]"
                }
              ]
            },
            "changeObjectId": {
              "values": [
                {
                  "id": "d64ac87e-adec-4ebb-a1c0-15c86ed985eb",
                  "value": "bc2003"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "id": "dbd7b27a-3e58-4d03-accb-8d2c94b263a8",
                  "value": "QUEUED"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "id": "546151f1-a5ef-4598-9870-dc47b6d97a69",
                  "value": "impactIdentify"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1
  }
}
</code></pre>

## Troubleshooting
See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.