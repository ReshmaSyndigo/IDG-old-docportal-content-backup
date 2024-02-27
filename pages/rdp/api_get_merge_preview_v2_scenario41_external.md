---
title: Merge Source Record with Golden Record based on 'MostRecentEntity' Strategy
sidebar: rdp_sidebar
permalink: api_get_merge_preview_v2_scenario41.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityservice/mergepreviewv2** to merge the Source Record (SR) with the Golden Record (GR) based on the 'MostRecentEntity' strategy. Based on the "datetime" property, the platform compares the most recently updated data of the SR with the date time of the GR. The comparison factor in this process is the "modifiedDate" property value. 

{% include callout.html content="**Notes:** 
* The **Merge Preview** considers **id**, **type**, and **name** parameters of the GR and the **properties** data of SR during the merge process.
* You can also use this as the fallback strategy or along with the other fallback strategy.
* SR and GR will always have self-context level system properties. The comparison factor between SR and GR will never be missing in this strategy. You can configure the fallback strategy when both the entities have 'modifiedDate' property value is the same.
* In the model, only the strategy is defined.
* The 'MostRecentEntity' strategy can be configured for entity attribute, relationship attribute, context attribute, and context relationship attribute.
* The platform considers simple and collection attributes with locale in self, defined context, and self-relationship for this strategy.
" type="primary" %}

## Sample Merge Model

Merge model: <a href="files/merge_model_mergepreview_MostRecentEntity.json" download>merge_model_mergepreview_MostRecentEntity.json</a> 

## Assumption

The following are the assumptions:
* SR and GR both are in self context level during the merge process.
* You can configure a fallback strategy when both entities 'modifiedDate' property value is the same.

## Limitation

The following is the limitation:
* Nested Attribute is not supported.

## Request

To merge the SR into GR based on 'MostRecentEntity' strategy, you can use the RESTful API **{TenantURL or ID}/api/entityservice/mergepreviewv2**. In the request, send the following details:
* **data**: Specifies the attributes.

<pre>
<code>
{
  "params": {
    "authorizationType": "accommodate"
  },
  "entity": {
    "id": "Mostrecent001",
    "type": "supplier",
    "properties": {
      "createdService": "entityManageService",
      "createdBy": "system_user",
      "modifiedService": "entityManageService",
      "modifiedBy": "system_user",
      "createdDate": "2019-10-07T04:43:41.320-0500",
      "modifiedDate": "2025-10-29T02:53:22.676-0500"
    },
    "data": {
      "attributes": {
        "selfdec": {
          "values": [
            {
              "value": 2.88,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "selfint": {
          "values": [
            {
              "value": 11,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "selfstringone": {
          "values": [
            {
              "value": "inning record",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "selfstringtwo": {
          "values": [
            {
              "value": "most recent activity Street textarea",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "orgFoundedYeardate": {
          "values": [
            {
              "value": "2010-10-07T04:43:41.320-0500",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "onsocialmediaboolean": {
          "values": [
            {
              "value": false,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>

## Response

If the get request is successful, the following response is received.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "7413e476-138f-4037-9a69-940ab9b01238",
    "taskId": "7413e476-138f-4037-9a69-940ab9b01238"
  },
  "response": {
    "entities": [
      {
        "id": "Mostrecent001",
        "type": "supplier",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "system_user",
          "modifiedService": "entityManageService",
          "modifiedBy": "system_user",
          "createdDate": "2019-10-07T04:43:41.320-0500",
          "modifiedDate": "2025-10-29T02:53:22.676-0500"
        },
        "data": {
          "attributes": {
            "selfdec": {
              "values": [
                {
                  "value": 2.88,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "selfint": {
              "values": [
                {
                  "value": 11,
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "selfstringone": {
              "values": [
                {
                  "value": "inning record",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "selfstringtwo": {
              "values": [
                {
                  "value": "most recent activity Street textarea",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "orgFoundedYeardate": {
              "values": [
                {
                  "value": "2010-10-07T04:43:41.320-0500",
                  "locale": "en-US",
                  "source": "internal"
                }
              ]
            },
            "onsocialmediaboolean": {
              "values": [
                {
                  "value": false,
                  "locale": "en-US",
                  "source": "internal"
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
</code>
</pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.