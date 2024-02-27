---
title: Merge original Source Record with Golden Record based on 'DoNotMerge' Strategy
sidebar: rdp_sidebar
permalink: api_get_merge_preview_v2_scenario44.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityservice/mergepreviewv2** to consider the original attribute value of the incoming source record (SR) during the merge process. In the merge model, you must define the 'strategy' parameter as "DoNotMerge", then the platform ignores such attributes while merging the SR attribute values with GR. You can define this strategy for simple and collection attributes.

## Sample Merge Model

The following is the sample merge model: <a href="files/merge_model_mergepreview_DoNotMerge.json" download>merge_model_mergepreview_DoNotMerge.json</a> 

## Assumptions

The following are the assumptions:
* When 'DoNotMerge'strategy is used as a primary strategy, then you cannot define any fallback strategy. 
* You can define 'DoNotMerge'strategy as a fallback strategy with any other primary strategy.
* The configured attribute must be present in the original entity (golden record) or the incoming attribute is skipped while executing the strategy.

## Limitation

The following is the limitation:
* Nested attribute in relationships and cannot be configured in Merge Model.

{% include snippets/header.html %}

## Request

To merge the incoming SR into GR based on 'DoNotMerge' Strategy, you can use the RESTful API **{TenantURL or ID}/api/entitymanagemodel/get**. In the request, send the following details:
* **data**: Specifies the attributes.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "authorizationType": "accommodate"
  },
  "entity": {
    "id": "donotmerge001",
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
        "donotmergestring": {
          "values": [
            {
              "value": "donotmerge",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "donotmergeinteger": {
          "values": [
            {
              "value": 200011,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "donotmergedecimal": {
          "values": [
            {
              "value": 20002.11,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "donotmergeboolean": {
          "values": [
            {
              "value": false,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "donotmergestringloc": {
          "values": [
            {
              "value": "do not merge loc",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "donotmergedate": {
          "values": [
            {
              "value": "2001-11-19T04:44:20.053-0500",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "donotmergeref": {
          "values": [
            {
              "value": "Australia",
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
    "requestId": "9f6617d1-bd5b-4db0-a2a3-63efaca47554",
    "taskId": "9f6617d1-bd5b-4db0-a2a3-63efaca47554"
  },
  "response": {
    "entities": [
      {
        "id": "org001",
        "name": "_EMPTY",
        "type": "organization",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "system_user",
          "modifiedService": "entityManageService",
          "createdDate": "2021-08-18T07:05:45.675-0500",
          "modifiedDate": "2021-08-18T07:05:45.675-0500",
          "modifiedBy": "system_user"
        },
        "data": {
          "attributes": {
            "siccode": {
              "values": [
                {
                  "id": "fcc503f6-e271-417f-88f5-a97e4cce2050",
                  "value": "siccode",
                  "locale": "en-US",
                  "src": "BB",
                  "source": "internal"
                }
              ]
            },
            "alternatename": {
              "values": [
                {
                  "id": "7ff1cbb0-97b7-4508-a707-a599ed4920cb",
                  "value": "alternatename value",
                  "locale": "en-US",
                  "src": "BB",
                  "source": "internal"
                }
              ]
            },
            "parentdunsnumber": {
              "values": [
                {
                  "id": "c22fbd0d-25d0-4072-95f5-dec33d6006a6",
                  "value": "parentdunsnumber",
                  "locale": "en-US",
                  "src": "BB",
                  "source": "internal"
                },
                {
                  "id": "425c49fa-36b3-434e-959a-b3112b002e13",
                  "value": "germanyValue",
                  "locale": "de-DE",
                  "src": "BB",
                  "source": "internal"
                }
              ]
            },
            "accountsite": {
              "values": [
                {
                  "id": "8a25cdce-5810-43c3-975e-3058ec964ded",
                  "value": "accountsite",
                  "locale": "en-US",
                  "src": "BB",
                  "source": "internal"
                }
              ]
            },
            "invoicename": {
              "values": [
                {
                  "id": "f8977fd1-9648-4538-9f29-a542302368f6",
                  "value": "invoicename value",
                  "locale": "en-US",
                  "src": "BB",
                  "source": "internal"
                },
                {
                  "id": "67b1faac-d164-483b-883b-65f21e13890c",
                  "value": "germanyValueUSer",
                  "locale": "de-DE",
                  "src": "BB",
                  "source": "internal"
                }
              ]
            },
            "street": {
              "values": [
                {
                  "id": "7d9d3b20-e750-4042-813a-9701c46be7e9",
                  "value": "street value",
                  "locale": "en-US",
                  "src": "BB",
                  "source": "internal"
                }
              ]
            },
            "inheritedemployeecount": {
              "values": [
                {
                  "id": "561c0533-af2d-4146-a55e-00e9f671f540",
                  "value": 43,
                  "locale": "en-US",
                  "src": "BB",
                  "source": "internal"
                }
              ]
            },
            "recordstatus": {
              "values": [
                {
                  "id": "a2a6f85a-4944-4082-8f45-3a556ac23655",
                  "value": "Golden Record",
                  "locale": "en-US",
                  "os": "defaults",
                  "osid": "organization_entityDefaultValuesModel",
                  "ostype": "entityDefaultValuesModel",
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