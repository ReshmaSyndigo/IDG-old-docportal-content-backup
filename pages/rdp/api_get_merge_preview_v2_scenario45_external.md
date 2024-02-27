---
title: Merge Source Record with Golden Record based on 'Replace' Strategy
sidebar: rdp_sidebar
permalink: api_get_merge_preview_v2_scenario45.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{TenantURL or ID}/api/entityservice/mergepreviewv2** to merge the nested attribute of the incoming Source Record (SR) (entity type) with the Golden Record (GR) based on the 'Replace' strategy. 

{% include callout.html content="**Notes:** 
* Supports nested attribute in self context and named context (entity attribute).
* Nested attribute is not supported for relationship attributes.
* Simple or collection attributes are not supported.
* Supports all nested attributes including the enhancer given / category nested nested attributes.
" type="primary" %}

As part of this strategy, a new “replace” flag is introduced in the “Merge Matrix”. Consider the following scenario, when the “replace” flag is set to 'true' and the incoming SR has value from 'IC' source and the existing GR has value from 'SAP' source, then the 'IC' source overrides the existing data. 

## Sample Entity Manage Model

The following is the sample Manage model: <a href="files/manage_model_mergepreview_Replace.json" download>manage_model_mergepreview_Replace.json</a>

## Scenario

Sample valid scenario when the nested attribute has the following configurations:

* **Scenario 1**: Consider that the incoming SR nested attribute has higher priority over the existing GR nested attribute value.

  **Result**: The GR nested attribute value is overridden by the incoming SR nested attribute value.

* **Scenario 2**: Consider that the incoming SR nested attribute has lesser priority than the existing GR nested attribute value.

  **Result**: The GR nested attribute value will not be overridden by the incoming SR nested attribute value.

* **Scenario 3**: Consider the following merge sequence where the incoming SR has higher priority than GR. In this scenario, there are three GRs and one SR.

  **Result**: After merge, the existing GR nested attribute values of all the three records are replaced with the incoming SR's attribute value as it has higher priority.

* **Scenario 4**: Consider the merge sequence of the existing GR that has three nested records and has higher priority over one nested record in incoming SR.

  **Result** : As GR has higher priority, the GR attribute value is considered over incoming SR attribute value after merge.

Sample invalid scenario when the nested attribute has the following configurations:

* **Scenario 1**: 'ignoreMergeMatrix', 'replace', and 'aggregate' parameter values are set to 'true'. 

  **Result**: An error is logged in Kibana and the nested attribute is not processed further. 

#### Data Model for Replace Strategy

A new "Merge Replace" column is added in the following data model sheets to support DMD imports and exports:

* Base Data Model - Thing or Party
  * ATTRIBUTES sheet
  * E-A-R MODEL sheet

For more information, see [Populate Attributes](/{{site.data.rdp_links_version.APP}}/dm_prep_attributes.html) and [Populate E-A-R Model](/{{site.data.rdp_links_version.APP}}/dm_prep_ear_model.html).

* Instance Data Model
  * ATTRIBUTES sheet
  * C-A-R MODEL sheet

For more information, see [Populate C-A-R Model](/{{site.data.rdp_links_version.APP}}/dm_prep_ins_car_model.html) and [Populate Instance Attributes](/{{site.data.rdp_links_version.APP}}/dm_prep_ins_attributes.html).

* Taxonomy App Model
  * ATTRIBUTES sheet
  * Category MODEL sheet

For more information, see [Populate Taxonomy Attributes](/{{site.data.rdp_links_version.APP}}/dm_prep_tax_attributes.html) and [Populate Category Model](/{{site.data.rdp_links_version.APP}}/dm_prep_tax_cat.html).


## Assumptions

The following are the assumptions:
* Any incoming nested attribute will have one single 'src'.
* Any existing nested attribute is expected to have one single 'src' across all the nested rows.
* User updated value for the incoming or existing record is considered as an 'update'. In this scenario, the nested attribute does not go through the flush and fill process.
* ‘aggregate’ in mergeMatrix is not supported. 

## Scenario

Consider that you are merging the nested attribute values of 'src: BB' of the incoming SR. 

{% include snippets/header.html %}

## Request

To perform merge incoming SR into GR based on survivorship rules, you can use the RESTful API **{TenantURL or ID}/api/entityservice/mergepreviewv2**. In the request, send the following details:
* **src**: Specify the source data of the incoming entity. This can be defined at each attribute level also.
* **data**: Specifies the nested attributes.

<pre>
<code>
POST **{TenantURL or ID}/api/entityappservice/mergepreviewv2**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "authorizationType": "accommodate",
    "src": "BB"
  },
  "entity": {
    "id": "replace002",
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
        "nestedoneparent": {
          "group": [
            {
              "locale": "en-US",
              "nestedchildreplaceone": {
                "values": [
                  {
                    "value": "replaced data",
                    "locale": "en-US"
                  }
                ]
              },
              "nestedchildreplacetwo": {
                "values": [
                  {
                    "value": 23.66,
                    "locale": "en-US"
                  }
                ]
              },
              "nestedchildreplacethree": {
                "values": [
                  {
                    "value": 54,
                    "locale": "en-US"
                  }
                ]
              }
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

If the request is successful, the following response is received.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "e12fc6ee-3873-4637-b649-5e3bea91b1d7",
    "taskId": "e12fc6ee-3873-4637-b649-5e3bea91b1d7"
  },
  "response": {
    "entities": [
      {
        "id": "replace002",
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
            "nestedoneparent": {
              "group": [
                {
                  "locale": "en-US",
                  "src": "BB",
                  "source": "internal",
                  "nestedchildreplaceone": {
                    "values": [
                      {
                        "value": "replaced data",
                        "locale": "en-US",
                        "src": "BB",
                        "source": "internal"
                      }
                    ]
                  },
                  "nestedchildreplacetwo": {
                    "values": [
                      {
                        "value": 23.66,
                        "locale": "en-US",
                        "src": "BB",
                        "source": "internal"
                      }
                    ]
                  },
                  "nestedchildreplacethree": {
                    "values": [
                      {
                        "value": 54,
                        "locale": "en-US",
                        "src": "BB",
                        "source": "internal"
                      }
                    ]
                  }
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