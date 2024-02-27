---
title: Merge Source Record with Golden Record based on 'SourceBasedScore' Strategy
sidebar: rdp_sidebar
permalink: api_get_merge_preview_v2_scenario43.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityservice/mergepreviewv2** to merge the Source Record (SR) with the Golden Record (GR) based on the 'SourceBasedScore' strategy. You can define a score for each source and based on this you can merge the SR and GR. The comparison between the SR and the GR is based on 'src', 'trustscore', and 'trustscore' config. If the comparison factor value is missing in the SR, then any strategy fails to choose the survivor value. In such a scenario, the fallback strategy is executed, if configured. In case the fallback strategy is not defined, then the original value is retained as is.

The following are the key points:
* You must define the scores in 'trustScoreConfig' for the target entity type. For example, organization_trustScoreConfig. 
* Out-of-the-box the entity type level 'trustScoreConfig' object is configured. All the attributes refer to the entity type level configurations only. In case you modify the default configuration, the scores are applied to the new set of entities.
* If 'src' is not defined, then it is considered as user-defined value and this takes precendence over other values.
* The trust score value can be integer or decimal. 
* You can configure multiple sources and each source can have a score. These scores can be defined in any order (ascending or descending).
* Trust score value 10 has higher priority than trust score value 20.
* You must not define this strategy in the "Merge Model" if "Manage Model" considers "mergeMatrix" concept.
* The 'SourceBasedScore' strategy can be configured for entity attribute, collection attributes, relationship attributes, and context attributes and also supports locale. This strategy behaves differently for simple attribute and collection attribute. Simple attribute compares locale related data of the SR. But for collection attribute compares the locale + value for identifying the data of the SR.

## Sample Merge Model and Trust Score Configuration

The following are the sample model and trust score config:
* Merge Model: <a href="files/merge_model_mergepreview_SourceBasedScore.json" download>merge_model_mergepreview_SourceBasedScore.json</a> 
* TrustScoreConfig: <a href="files/goldenRecordEntityType_trustScoreConfig.json" download>goldenRecordEntityType_trustScoreConfig.json</a> 

The following are the parameters in the Merge Model JSON for 'SourceBasedScore' strategy:
* **strategy** - Indicates the primary strategy name.
* **fallback** - Indicates the fallback strategy. This is optional and can be configured based on your requirement. Supports only one strategy here. Anything that is defined in this section is considered as secondary strategy details and everything outside this section is considered as primary strategy details.

## Example

Consider that SR source (BB) score is 20 and the GR source (BB) score is 50. During the merge process, the platform considers SR value, as value holds more weightage than the GR score.

## Limitation

* Nested attribute is not supported.

## Request

To merge the SR into GR based on 'SourceBasedScore' Strategy, you can use the RESTful API **{TenantURL or ID}/api/entitymanagemodel/get**. In the request, send the following details:
* **src**: Specify the source data of the incoming entity. 
* **data**: Specifies the attributes.

<pre>
<code>
{
  "params": {
    "authorizationType": "accommodate",
    "src": "IC"
  },
  "entity": {
    "id": "Sourcebased001",
    "name": "Sourcebased001",
    "type": "supplier",
    "data": {
      "attributes": {
        "siccodeone": {
          "values": [
            {
              "value": "ind",
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "revenueinbilliondec": {
          "values": [
            {
              "value": 21.22,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "intone": {
          "values": [
            {
              "value": 9,
              "source": "internal",
              "locale": "en-US"
            }
          ]
        },
        "orgFoundedYeardate": {
          "values": [
            {
              "value": "2001-10-06T04:44:20.053-0500",
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

If the request is successful, the following response is recieved.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "7e55d098-8870-4d9f-af3b-efb1565f5a49",
    "taskId": "7e55d098-8870-4d9f-af3b-efb1565f5a49"
  },
  "response": {
    "entities": [
      {
        "id": "Sourcebased001",
        "name": "Sourcebased001",
        "type": "supplier",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com",
          "modifiedService": "entityManageService",
          "createdDate": "2021-11-04T02:22:31.248-0500",
          "modifiedDate": "2021-11-04T02:22:31.248-0500",
          "modifiedBy": "system_user"
        },
        "data": {
          "attributes": {
            "siccodeone": {
              "values": [
                {
                  "value": "ind",
                  "locale": "en-US",
                  "src": "IC",
                  "source": "internal"
                }
              ]
            },
            "revenueinbilliondec": {
              "values": [
                {
                  "value": 21.22,
                  "locale": "en-US",
                  "src": "IC",
                  "source": "internal"
                }
              ]
            },
            "intone": {
              "values": [
                {
                  "value": 9,
                  "locale": "en-US",
                  "src": "IC",
                  "source": "internal"
                }
              ]
            },
            "orgFoundedYeardate": {
              "values": [
                {
                  "id": "1_0",
                  "value": "2021-10-06T04:44:20.053-0500",
                  "locale": "en-US",
                  "invalidValue": "2021-10-06T04:44:20.053-0500",
                  "src": "BB",
                  "source": "internal"
                }
              ]
            },
            "onsocialmediaboolean": {
              "values": [
                {
                  "value": false,
                  "locale": "en-US",
                  "src": "IC",
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