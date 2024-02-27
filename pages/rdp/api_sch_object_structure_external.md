---
title: Schedule Object Structure
sidebar: rdp_sidebar
permalink: api_sch_object_structure.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

A Schedule Object in Riversand Platform is a JSON structure that contains all the details of a schedule. The schedule object maintains the state of each schedule through the [schedule Info](api_sch_info_object_structure.html) object. Broadly, a schedule object contains the following sub-objects:

* [Request Level Attributes](#request-level-attributes): Contains attributes required for processing the request.
* [params](#params): Contains any additional parameters required for processing data in the request.
* [scheduleObject](#scheduleobject): Contains all the required information of a schedule object.
* [properties](#properties): Contains the audit information and status information of a schedule object such as createdBy, modifiedBy, and enabled.
* [data](#data): Contains an array of [attributes](#attributes) and [jsonData](#jsondata) details of a schedule object. <br />

This topic describes the schedule object structure using a sample scenario. 

## Scenario

Consider that you wish to schedule "Event Grooming Jobs" to maintain the disk space regularly by clearing the data. The following example demonstrates the sample JSON format to create the schedule object:

<pre>
<code>
{
  "scheduleObject": {
    "id": "groomEntityManageEvents",
    "name": "Schedule of grooming entity manage events",
    "type": "scheduleobject",
    "properties": {
      "enabled": true,
      "createdService": "scheduleObjectManageService",
      "createdBy": "system",
      "createdDate": "2018-01-05T01:39:42.975-0600",
      "modifiedService": "scheduleObjectManageService",
      "modifiedBy": "system",
      "modifiedDate": "2018-01-05T01:39:42.975-0600"
    },
    "data": {
      "attributes": {
        "scheduleType": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "e14d087b-b5cd-4b7e-8dbf-aa39ba6fce54",
              "value": "fixedRate"
            }
          ]
        },
        "scheduleTaskName": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "e7743059-61d7-4403-aa52-e87579a7483c",
              "value": "groomEntityManageEvents"
            }
          ]
        },
        "scheduleTaskUrl": {
          "values": [
            {
              "locale": "en-US",
              "source": "internal",
              "id": "90708a57-881b-4252-b248-f9606be13483",
              "value": "http://{uri}/api/bulkeventservice/createtask"
            }
          ]
        }
      },
      "jsonData": {
        "scheduleConfiguration": {
          "intervalInMins": 60,
          "authContext": {
            "x-rdp-userRoles": "admin",
            "x-rdp-clientId": "rdpclient",
            "x-rdp-tenantId": "",
            "x-rdp-ownershipdata": "",
            "x-rdp-userid": "system_user",
            "x-rdp-username": "system",
            "x-rdp-useremail": "system",
            "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE="
          }
        },
        "scheduleTaskPayload": {
          "params": {
            "taskType": "delete",
            "operationType": "inboundService",
            "query": {
              "filters": {
                "typesCriterion": [
                  "entitymanageevent"
                ],
                "attributesCriterion": [
                  {
                    "sourceTimestamp": {
                      "gt": "2017-01-01T00:00:01.000+0000",
                      "lt": "now-60d/d",
                      "type": "_DATETIME"
                    }
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
}
</code>
</pre>

The following section describes the properties of the schedule object in detail using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object.
* Using the properties how you can set the data for the [sample scenario](#scenario).

{% include snippets/paramsOthers.md %}

## scheduleObject

This object is the the parent container that holds all the required information about a schedule object. The following table lists the details of the scheduleObject:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| id | Indicates the unique identifier of the schedule object. It must be unique per schedule and must not change during the life of a schedule. | String | Yes |
| name | Indicates the name of the schedule object. Name can contain underscore(_), spaces, and alpha-numeric with a maximum length of 256 characters. Name can be duplicate. | String | Yes |
| type | Indicates the type of object. For schedule objects, the type must be "scheduleobject".| String | Yes |
| properties | Indicates the properties of the schedule object. Properties must be used to store simple name-value pairs, where the values are **Absolute** and **do not change with context**. | [properties](#properties) | No |
| data | Indicates the section for all business data. | [data](#data) | No |

Data for sample [Scenario](#scenario): Set the following properties for the schedule object:

| Property | Value | 
|----------|-------------|
| id | groomEntityManageEvents |
| name | Schedule of grooming entity manage events |
| type | scheduleobject |

The following sections describe how to set the values for [properties](#properties) and [data](#data) objects.

## properties  

This object stores the audit information of the schedule object such as createdBy and modifiedBy. It also contains the information whether the schedule object is active or inactive. The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| enabled | Indicates whether or not the schedule is **active**. | Boolean | Yes | 
| createdByService | Indicates the name of the service that created this object. | String | No |
| createdBy | Indicates the user who created this object. | String | No |
| createdDate | Indicates the date and time when the object was created. | String | No |
| modifiedByService | Indicates the name of the service that was used to last update this object. | String | No |
| modifiedBy | Indicates the user who last updated the object. | String | No |
| modifiedDate | Indicates the date and time when the object was last updated. | String | No |

Data for sample [Scenario](#scenario): As you wish to keep this schedule object in **active** state, set the following properties for the **properties** object:

| Property | Value | 
|----------|-------|
| enabled  | true |
| createdByService | entityService |
| createdBy | system |
| createdDate | 2018-01-05T01:39:42.975-0600|
| modifiedService | scheduleObjectManageService |
| modifiedBy | system |
| modifiedDate | 2018-01-05T01:39:42.975-0600 |

## data  

This object contains the configurable data of the schedule object. It includes attributes and jsonData details. The following table lists the details of the data object:

| Property | Description | Type | Required |
|----------|-------------|------|---------- |
| [attributes](#attributes) | Indicates an array of attributes of a scheduler object .| [attributes](#attributes) object | Yes |
| [jsonData](#jsondata) | Indicates an array of jsonData details of a scheduler object. | [jsonData](#jsondata) | Yes |

### attributes  

This object contains the details of attributes of a schedule object. The following table lists the details of the attributes object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| [scheduleType](#scheduletype) | Indicates the attributes for the type of the schedule object. | [scheduleType](#scheduletype) | Yes |
| [scheduleTaskName](#scheduletaskname) | Indicates the attributes for the name of the task you wish to schedule under the current schedule object. | [scheduleTaskName](#scheduletaskname) | Yes |
| [scheduleTaskUrl](#scheduletaskurl) | Indicates the attributes for the REST API URL of the task that you wish to schedule under the current schedule object. | [scheduleTaskUrl](#scheduletaskurl) | Yes |

### scheduleType

This object contains the details of the attributes for the type of the current schedule object. The following table lists the details of the scheduleType object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<values>> -> locale | Indicates the locale for the scheduleType.|String | Yes |
| <<values>> -> source | Indicates the source for the scheduleType.|String | Yes |
| <<values>> -> id | Indicates the identifier for the scheduleType.|String | No |
| <<values>> -> value | Indicates the type of the schedule. Currently, you can provide only **fixedRate** as the value for this property. It implies that the schedule executes at the fixed interval from the time it starts.|String | Yes|

Data for sample [Scenario](#scenario): Set the following properties for the **scheduleType** object:

| Property | Value | 
|----------|-------|
| locale | en-US |
| source | internal |
| id | e14d087b-b5cd-4b7e-8dbf-aa39ba6fce54 |
| value | fixedRate |

### scheduleTaskName

This object contains the details of the attributes for the name of the task you wish to schedule under the current schedule object. The following table lists the details of the scheduleTaskName object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<values>> -> locale | Indicates the locale for the scheduleTaskName.|String | Yes |
| <<values>> -> source | Indicates the source for the scheduleTaskName.|String | Yes |
| <<values>> -> id | Indicates the identifier for the scheduleTaskName.|String | No |
| <<values>> -> value | Indicates the name of the task which is scheduled under the current schedule object. |String | Yes|

Data for sample [Scenario](#scenario): Set the following properties for the **scheduleTaskName** object:

| Property | Value | 
|----------|-------|
| locale | en-US |
| source | internal |
| id | e7743059-61d7-4403-aa52-e87579a7483c |
| value | groomEntityManageEvents |

### scheduleTaskUrl

This object contains the details of the REST API URL of the task that you wish to schedule under the current schedule object. The following table lists the details of the scheduleTaskName object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| <<values>> -> locale | Indicates the locale for the scheduleTaskUrl.|String | Yes |
| <<values>> -> source | Indicates the source for the scheduleTaskUrl.|String | Yes |
| <<values>> -> id | Indicates the identifier for the scheduleTaskUrl.|String | No |
| <<values>> -> value | Indicates the URL to the REST API service method that is being scheduled. |String | Yes|

Data for sample [Scenario](#scenario): As you are scheduling the event grooming jobs, set the following properties for the **scheduleTaskUrl** object:

| Property | Value | 
|----------|-------|
| locale | en-US |
| source | internal |
| id | 90708a57-881b-4252-b248-f9606be13483 |
| value | http://{uri}/api/bulkeventservice/createtask |


### jsonData

This object contains the details of the configuration and task payload details of a schedule object. The following table lists the details of the jsonData object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| [scheduleConfiguration](#scheduleconfiguration) | Indicates the configuration details of a schedule object. | [scheduleConfiguration](#scheduleconfiguration) | Yes |
| [scheduleTaskPayload](#scheduleTaskPayload) | Indicates the payload details of the REST API of the task that you wish to schedule.|  [scheduleTaskPayload](#scheduleTaskPayload) | Yes |

### scheduleConfiguration

This object contains the configuration details of a schedule object. The following table lists the details of the scheduleConfiguration object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| intervalInMins | Indicates the time gap after which the scheduled task executes once again. It is specified in minutes. **Note** that the schedule frequency can not be less than one minute. | Integer | Yes|
| authContext | Indicates an array of HTTP headers to be used when making the REST API call. Depending on the target service, it can contain different headers. Example: "x-rdp-tenantId" header value is different for different tenants.| Array of HTTP headers | Yes |

Data for sample [Scenario](#scenario): As you are scheduling the event grooming jobs, set the following properties for the **scheduleConfiguration** object:

| Property | Value | 
|----------|-------|
| intervalInMins| 60 |
| authContext | { <br /> "x-rdp-userRoles": "admin", <br /> "x-rdp-clientId": "rdpclient", <br /> "x-rdp-tenantId": "", <br /> "x-rdp-ownershipdata": "", <br /> "x-rdp-userid": "system_user", <br /> "x-rdp-username": "system", <br /> "x-rdp-useremail": "system", <br /> "x-rdp-authtoken": "vA/BnGa6ue5oCdgxaogJRvxDy7dAudrs3qstHYJNBUE=" <br />} |

### scheduleTaskPayload

This object contains the payload content of the REST API of the task that you wish to schedule. The following table lists the details of the scheduleTaskPayload object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| params | Indicates all the query parameters required to detail the payload content of the REST API of the task. | array of params. | Yes |

Data for sample [Scenario](#scenario): As you are scheduling the event grooming jobs, set the following properties for the **scheduleTaskPayload** object:

| Property | Value | 
|----------|-------|
| params | {  <br /> "taskType": "delete", <br /> "operationType": "inboundService", <br /> "query": { <br /> "filters": { <br /> "typesCriterion": [ <br /> "entitymanageevent" <br /> ], <br /> "attributesCriterion": [ <br /> { <br /> "sourceTimestamp": { <br /> "gt": "2017-01-01T00:00:01.000+0000", <br /> "lt": "now-60d/d", <br /> "type": "_DATETIME" <br /> } <br /> } <br /> } <br /> |

Sample JSON where you are scheduling the schedule export job for the **scheduleTaskPayload** object using "params" property:

<pre><code>
{
  "query": {
    "filters": {
      "attributesCriterion": [
        {
          "taskType": {
            "exact": "RSCONNECT_PUBLISH_AGGREATED_entities_export_to_genericobject_eventhub"
          }
        },
        {
          "status": {
            "exact": "QUEUED"
          }
        }
      ],
      "typesCriterion": [
        "scheduledrequestobject"
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
  },
  "rsconnect": {
    "profiles": [
      "collect_from_genericobjects_eventhub"
    ]
  }
}
</code></pre>

The following points describes the properties of the params object in detail using the above sample JSON. 

* **taskType** is the concatenation of **RSCONNECT_PUBLISH_AGGREATED_entities_export_to_genericobject_eventhub** . This is the concatenation of "RSCONNECT_PUBLISH_AGGREATED" and ID of the profile from generic object creation "Entities_Export_To_GenericObject_EventHub". See [Configure Generic Object Profile](/{{site.data.rdp_links_version.APP}}/rdp_feature_sch_export_conf_generic_profile.html).
* **scheduledrequestobject** is the container where the generic object data is stored.
* The generic collect profile ID is specified in rsconnect -> profiles - Collect_From_GenericObjects_EventHub, which collects the generic object data and calls publishSyndicationProfile to publish the data. See [Configure Collection of Generic Data](/{{site.data.rdp_links_version.APP}}/rdp_feature_sch_export_conf_generic_profile_collection.html).