---
title: Merge Source Record with Golden Record based on Survivorship Rules
sidebar: rdp_sidebar
permalink: api_get_merge_preview_v2_scenario40.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityservice/mergepreviewv2** to merge incoming Source Record (SR) with Golden Record (GR) based on survivorship rules. 

The merge preview is based on the combination of the Manage Model and Merge Model. 
* Firstly, the merge preview executes the merge matrix from the Manage model.
* Secondly, the resulted value goes through the "Merge model". In this model, the "strategy" property is defined at each attribute level and depending on the defined strategy, the attribute value is executed. 

Based on the merge sequence, the incoming SR is merged with the GR. As a result, the "Merge Preview" displays complete data based on the merge strategy. In this process, the merge results are just displayed, and the user decides to perform other actions such as merge, link the data and so on. 

The survivorship rules can be defined at the attribute level, relationship attribute level, entity's self context level, and/or context level. 
  * If the rules are not defined at the attribute level, the merge matrix falls back to the context (self) level.
  * If the merge matrix is defined at context level (For example, "Germany"), and not at attribute level, the attribute falls back on the merge matrix context level.

## Sample Merge and Manage model

The samples models is as follows: 
* Merge Model: <a href="files/merge_model_mergepreviewv2.json" download>merge_model_mergepreviewv2.json</a> 
* Manage Model: <a href="files/manage_model_mergepreviewv2.json" download>manage_model_mergepreviewv2.json</a>

## Assumptions

The following are the assumptions:
* In case the merge strategy is executed at context level, consider "Germany" as an example, the merge model must have "Germany" context defined for attributes or relationship attributes. In this scenario, there is no fallback concept for context.
* If the "src" value is ““ or no "src" in the request implies, the value is provided by the user. So merge matrix considers the user value over any existing value, which in turn impacts the merge preview results. 
  * If the existing value has no "src", then the merge matrix overrides the value with any incoming value. This strategy also can change the merge preview results.

## Limitations

The following are the limitations:
* Per attribute, only one strategy must be configured.
* Collection and Nested attributes are not supported.
* Only simple attributes with locale is supported.
* If the relationship attribute is not configured with the merge matrix, but the only relationship is configured, then the relationship is considered for merge. If no merge matrix is defined at the relationship level, then it falls back to the context level merge matrix.
* Merge Strategy is executed after the merge matrix.
* “Aggregate” must not be configured at the entity level in the merge matrix.
* “SourceBased“ strategy must only be configured in merge matrix and not in the merge model to avoid conflicts.
* Fallback strategy and Representative strategy concept are not supported in merge model.
* Merge Strategy defined at attribute level takes precedence over Merge Preview. Consider the following scenario:
  * Existing entity: Attribute: Brand and value is “Dolis & Gabsana“ and src is "BB". 
  * Incoming entity: Attribute: Brand and value is “Laviees“ and src is “IC“.
  * Merge Sequence: IC>>BB
 
    **Result**: The **Merge Preview** displays “Dolis & Gabsana“ value (src “BB“). Though the merge matrix considers “Laviees“ value (scr "IC") based on the merge sequence, the "BB" value “Dolis & Gabsana” has more length than "IC" value based on the 'Longest strategy. 

    If incoming "src" is of higher priority, then only that value must be displayed. But due to the manage model and merge model approach, if merge model strategy is configured at attribute level, then the merge strategy decides the final merge preview value.

{% include snippets/header.html %}

## Scenario

Consider that the 'Organization' (entity type) is the 'Golden Record' and 'Draft organization' (draft entity type) is the source record. In this scenario, you are merging the "Draft" entity type data into the 'Golden Record' based on the survivorship rules. 

## Request

To perform merge incoming SR with GR based on survivorship rules, you can use the RESTful API **{TenantURL or ID}/api/entitymanagemodel/get** for manage model. In the request, send the following details:
* **src**: Specify the source data of the incoming entity. This can be defined at each attribute level also.
* **data**: Displays the source data of the GR.

{% include callout.html content="**Notes:** 
* The Merge Preview considers **id**, **type**, and **name** parameters that are part of the GR.
* The request and response are based on the defined merge and manage model. 
" type="primary" %}

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/get**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "authorizationType": "accommodate",
    "src": "SAP"
  },
  "entity": {
    "id": "org001",
    "name": "_EMPTY",
    "type": "organization",
    "data": {
      "attributes": {
        "siccode": {
          "values": [
            {
              "value": "siccode SAP",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "alternatename": {
          "values": [
            {
              "value": "alternatename value SAP",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "parentdunsnumber": {
          "values": [
            {
              "value": "parentdunsnumber SAP",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "accountsite": {
          "values": [
            {
              "value": "accountsite SAP",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "invoicename": {
          "values": [
            {
              "value": "invoicename value SAP",
              "locale": "en-US",
              "source": "internal"
            }
          ]
        },
        "street": {
          "values": [
            {
              "value": "street value SAP",
              "locale": "en-US",
              "source": "internal"
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

If the get request is successful, then the following response is received.

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

