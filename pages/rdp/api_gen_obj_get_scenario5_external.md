---
title: Get Generic Objects performing a Particular Task with the Status as "completed"
sidebar: rdp_sidebar
permalink: api_gen_obj_get_scenario5.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This topic describes how to use the RESTful API **{{site.data.rdp_glossary.genobjget}}** to get generic objects, using a scenario.

## Scenario

To get all the generic objects with its status as "completed"and performing the task of publishing the "sku" entities.

{% include snippets/header.html %}

## Request

To get the above generic objects, you can use the REST API {{site.data.rdp_glossary.genobjget}}. In the request send the following details:

* query -> filters -> attributesCriterion: Specify "dataObjectType" as "sku" with the operator as "exact".
* query -> filters -> attributesCriterion: Specify "taskType" as "RSCONNECT_PUBLISH_AGGREATED_JSON_Export_Publish" with the operator as "exact".
* query -> filters -> attributesCriterion: Specify "status" as "Completed" with the operator as "exact" as you wished to get the tasks which are "completed".

<pre>
<code>
POST {TenantURL or ID}/api/genericobjectmanageservice/get
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"scheduledrequestobject"</span>
        ],
        "attributesCriterion": [
          {
            <span style="background-color: #FFFF00">"dataObjectType": {</span>
              "exact": "sku"
            }
          },
          {
            <span style="background-color: #FFFF00">"taskType": {</span>
              "exact": "RSCONNECT_PUBLISH_AGGREATED_JSON_Export_Publish"
            }
          },
          {
            <span style="background-color: #FFFF00">"status": {</span>
              "exact": "COMPLETED"
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
      "maxRecords": 10
    }
  }
}
</code>
</pre>


## Response

Returns all generic objects that are created to publish the "sku" entities with the status as "completed".

<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "d93de56b-dee2-47ca-978b-55ee5ee966d3",
    "maxRecords": 10
  },
  "response": {
    "genericObjects": [
      {
        "id": "941fce0f-8ed7-4765-b8b4-8308c4c3ff23",
        "name": "941fce0f-8ed7-4765-b8b4-8308c4c3ff23",
        "type": "scheduledrequestobject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-02-16T01:23:30.029-0600",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-03-16T06:11:12.614-0500"
        },
        "data": {
          "attributes": {
            "dataObjectId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "a999a70d-4a3b-4fbd-9099-cf867289216e",
                  "value": "0aarKgbHShegkcvxXUbgPg"
                }
              ]
            },
            "dataObjectType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "27fa7266-85b8-4570-ae15-cc427cad46f5",
                  "value": "sku"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "d78df163-aa09-45b2-be6f-cf57f8824a4e",
                  "value": "RSCONNECT_PUBLISH_AGGREATED_JSON_Export_Publish"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "a640c16d-c36d-4bbd-8d32-42234da9ae70",
                  "value": "COMPLETED"
                }
              ]
            }
          }
        }
      },
      {
        "id": "808d7d6a-8c25-4fc6-ac50-0cb86d161275",
        "name": "808d7d6a-8c25-4fc6-ac50-0cb86d161275",
        "type": "scheduledrequestobject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-02-16T00:59:44.528-0600",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-03-16T06:11:12.206-0500"
        },
        "data": {
          "attributes": {
            "dataObjectId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "0d549036-fe15-4cad-8f07-8273de4671c0",
                  "value": "YGVZOYk2Q8CtPY2V_7Gn7w"
                }
              ]
            },
            "dataObjectType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "18aa09aa-0abd-4624-b0ca-e48552eb3327",
                  "value": "sku"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "bce579ee-1f3c-4b12-ae08-460081cb9e79",
                  "value": "RSCONNECT_PUBLISH_AGGREATED_JSON_Export_Publish"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "364f95dc-29de-4c05-a73a-bd5ca0569833",
                  "value": "COMPLETED"
                }
              ]
            }
          }
        }
      },
      {
        "id": "0f7e1a75-fcee-4c8f-a92c-eb1365cbe08c",
        "name": "0f7e1a75-fcee-4c8f-a92c-eb1365cbe08c",
        "type": "scheduledrequestobject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-02-16T01:23:40.011-0600",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-03-16T06:11:12.054-0500"
        },
        "data": {
          "attributes": {
            "dataObjectId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "5f5e410c-b243-45aa-b1d1-e9f264a45623",
                  "value": "Lb8ndepZQmu1riFwM77kjQ"
                }
              ]
            },
            "dataObjectType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "78679325-fee7-4427-82e3-bab6fef0698c",
                  "value": "sku"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "5a103fb5-cf8f-4f0f-89f4-1326cddfd4d2",
                  "value": "RSCONNECT_PUBLISH_AGGREATED_JSON_Export_Publish"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "674d04a7-262f-445a-860a-5d1de2269142",
                  "value": "COMPLETED"
                }
              ]
            }
          }
        }
      },
      {
        "id": "5846021f-28eb-44ce-b9c4-66727cb9997a",
        "name": "5846021f-28eb-44ce-b9c4-66727cb9997a",
        "type": "scheduledrequestobject",
        "properties": {
          "createdService": "genericObjectManageService",
          "createdBy": "system_user",
          "createdDate": "2018-02-16T05:48:14.456-0600",
          "modifiedService": "genericObjectManageService",
          "modifiedBy": "system_user",
          "modifiedDate": "2018-03-16T06:11:13.479-0500"
        },
        "data": {
          "attributes": {
            "dataObjectId": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "33b3db11-e1ab-4939-9b32-70c2aa3d2554",
                  "value": "V0nFlyHNS7el02cDJdp_5Q"
                }
              ]
            },
            "dataObjectType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "aea221ed-394e-44f5-a34c-079f97f8af43",
                  "value": "sku"
                }
              ]
            },
            "taskType": {
              "values": [
                {
                  "locale": "en-US",
                  "source": "source",
                  "id": "e1912fa8-ec95-40d2-a6db-0b6fda5f59d3",
                  "value": "RSCONNECT_PUBLISH_AGGREATED_JSON_Export_Publish"
                }
              ]
            },
            "status": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "5f577dee-22d9-4ae4-8584-4d4b6898aa15",
                  "value": "COMPLETED"
                }
              ]
            }
          }
        }
      }
    ],
    "status": "success",
    "totalRecords": 1785
  }
}
</code></pre>

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips in-case you encounter any errors.