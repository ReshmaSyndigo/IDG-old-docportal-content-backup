---
title: Get Events of an Entity when an Attribute Value is Updated in a Context (Entity History)
sidebar: rdp_sidebar
permalink: api_event_get_scenario4.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

In Riversand Platform, updating an existing contextual attribute in an entity results in the **updateAttributeInContext** change type. An event in the Riversand Platform records this change type. For this change type, event also records the details about the previous value of the attribute that is updated along with the updated value. In RRiversand PlatformDP, this is also termed as **Entity History**. This topic describes how to use the RESTful API **{{site.data.rdp_glossary.getevent}}** to get such events using a [scenario](#scenario). It also lists the [key verification points you can consider](#key-points-to-consider-for-verification) in the generated event response.

## Scenario

To get events for a "sku" entity when contextual attribute "size" is updated in a context. 

{% include snippets/header.html %}

## Request

Consider a "sku" entity linked to a context. You updated the contextual attribute "size". To get the above entity event data, you can use the REST API {{site.data.rdp_glossary.getevent}}. In the request send the following details:

* query -> attributesCriterion : Specify the required entity Id for which you wish to query the events.
* query -> typesCriterion : As this change type occurred on the managed data, specify as "entitymanageevent".

<pre>
<code>
POST **{{site.data.rdp_glossary.getevent}}**
Headers: Content-Type: application/json
Body:
{
  "params": {
    "query": {
      "filters": {
        "typesCriterion": [
          <span style="background-color: #FFFF00">"entitymanageevent"</span>
        ],
        <span style="background-color: #FFFF00">"attributesCriterion": [</span>
          {
            "entityId": {
              "exact": "pedro"
            }
          }
        ]
      }
    },
    "fields": {
      <span style="background-color: #FFFF00">"attributes": [</span>
        "size"
      ]
    },
    "sort": {
      "properties": [
        {
          "modifiedDate": "_DESC",
          "sortType": "_DATETIME"
        }
      ]
    },
    "options": {
      "maxRecords": 4
    }
  }
}
</code>
</pre>

## Response

Returns the events generated for "updateAttributeInContext" change type. The following response snippet demonstrates a generated event related to updating an existing contextual attribute in the entity. As you can see the response, the events show that the "size" attribute in "Electronics>>Batteries" context has been updated from 1 Seat to 2 Seats and then to 2.5 Seats.


<pre><code>
{
  "request": {
    "returnRequest": false,
    "params": {},
    "requestId": "11203fe8-fd65-4514-9b7a-8c15632fb096",
    "maxRecords": 4
  },
  "response": {
    "events": [
      {
        "id": "cfa8823d-35d6-4dbb-bef8-10faf8e52bc8",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-09-06T02:43:12.783-0500"
        },
        "data": {
          "attributes": {
            "size": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "4a69a960-f284-4878-b85c-990ad44b2d35",
                  "value": "2.5 Seats",
                  "properties": {
                    "referenceData": "sizes/674669cd-e25c-4f2c-bda2-f8b099adb8c7",
                    "referenceDataIdentifier": "2.5 Seats"
                  }
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "updateAttributeInContext"
              }
            }
          }
        }
      },
      {
        "id": "8c5cc76a-c833-4b20-9b18-5595c8698a06",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-09-06T02:35:47.201-0500"
        },
        "data": {
          "attributes": {
            "size": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "19e51c78-eac4-4a97-a379-f794af969dab",
                  "value": "1 Seat",
                  "properties": {
                    "referenceData": "sizes/538a3862-f2b4-44f9-a11a-cea809dbb128",
                    "referenceDataIdentifier": "1 Seat"
                  }
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "updateAttributeInContext"
              }
            }
          }
        }
      },
      {
        "id": "69d908e8-d4ae-42b5-9aff-30d77d00efa3",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com_user",
          "modifiedDate": "2018-09-06T02:33:29.668-0500"
        },
        "data": {
          "attributes": {
            "size": {
              "values": [
                {
                  "source": "internal",
                  "locale": "en-US",
                  "id": "14c0874f-c12c-4eb0-b059-d69ea90f34bc",
                  "value": "2 Seats",
                  "properties": {
                    "referenceData": "sizes/3a93e2ec-d276-4521-a0f5-15d016395860",
                    "referenceDataIdentifier": "2 Seats"
                  }
                }
              ],
              "properties": {
                "changeContext": "entityManageService",
                "changeType": "addAttributeToContext"
              }
            }
          }
        }
      },
      {
        "id": "25a2f4af-82cc-4292-8a2e-2a84bbe17ea5",
        "type": "entitymanageevent",
        "domain": "eventDataObject",
        "properties": {
          "createdService": "entityManageService",
          "createdBy": "rdwadmin@riversand.com",
          "modifiedService": "entityManageService",
          "modifiedBy": "rdwadmin@riversand.com",
          "createdDate": "2018-09-06T02:14:48.747-0500",
          "modifiedDate": "2018-09-06T02:14:48.747-0500",
          "changeContext": "entityManageService",
          "changeType": "addContext"
        },
        "data": {
          "attributes": {}
        }
      }
    ],
    "status": "success",
    "totalRecords": 4
  }
}

</code></pre>

## Key points to consider for verification

The following lists key points you can consider for your verification when you get an event generated for any of the create, update, or delete operation you carried out on a data object such as an entity. This aids you in troubleshooting the requests, if there are any errors. 

* In the above [response](#response), "previous-size" indicates the previous value of the "size" attribute. An events records the previous value for an attribute only in updateAttributeInContext and updateAttributeInRelationship change types.
* The attributes such as eventType and entityAction helps you find out which operation has triggered this event. In the above [response](#response), eventType indicates that "EntityUpdate" has triggered this event. 
* The attributes such as relatedRequestId helps you get the request Id of the request which has triggered this event. In the above [response](#response), relatedRequestId indicates the request Id for the "update" operation which updated an existing contextual attribute in an entity triggering an event.
* The {{site.data.rdp_glossary.getevent}} API also returns the corresponding [change type](api_event_change_types.html) properties for each of the created, updated, or deleted contexts, attributes, or relationships. In the above [response](#response), "changeType" indicates "updateAttributeInContext" as you updated an existing contextual attribute in an entity.

## Troubleshooting

See [Troubleshooting Tips](api_troubleshooting_tips.html), for common troubleshooting tips, if required.