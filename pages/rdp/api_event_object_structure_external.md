---
title: Event Object Structure
sidebar: rdp_sidebar
permalink: api_event_object_structure.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

An Event Object in Riversand Platform is a JSON structure that comprises event details such as the event Id, event type, and domain along with the attributes containing details of the event. It contains the following sub-objects:

* [properties](#properties): Contains the audit information of the event such as createdBy, source, and modifiedBy. This is used for external events.
* [data](#data): Contains the event details related to the [contexts](#contexts), [attributes](#attributes), and [relationships](#relationships) details of an entity.

An entity event object can be identified using the following:

| Property | Description | Type |
|----------|-------------|------|
| id | Indicates the event Id that is automatically generated by the system. | String |
| name | Indicates the name of the event. | String | 
| type | Indicates the entity type. Possible values - entitymanageevent and entitygovernevent. | String | 
| domain | Indicates the domain associated to the event.| String | 

This topic describes the Event Object Structure using a sample scenario.

## Scenario 

Consider a SKU entity 'E01'. You have updated an attribute, 'displayname' in the entity. This JSON shows all the events corresponding to the entity.

<pre><code>
 "events": [
    {
      "id": "a28e00d1-1979-49ca-ab3a-2bed269f6d3c",
      "type": "entitymanageevent",
      "domain": "eventDataObject",
      "properties": {
        "modifiedService": "entityManageService",
        "modifiedBy": "mary.jane@riversand.com",
        "modifiedDate": "2018-04-12T02:57:45.042-0500"
      },
      "data": {
        "attributes": {
          "displayname": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "id": "542a1fe9-5ca8-450f-b9a6-0f6ab21bd3b2",
                "value": "Polo's 3/4 Sleeve V-Neck T-Shirt-Women's"
              }
            ],
            "properties": {
              "changeContext": "entityManageService",
              "changeType": "updateAttributeInContext"
            }
          },
          "previous-displayname": {
            "values": [
              {
                "source": "internal",
                "locale": "en-US",
                "id": "057b1451-6a3b-4842-8765-4102dfb233b5",
                "value": "Polo's 3/4 Sleeve T-Shirt-Women's"
              }
            ],
            "properties": {
              "changeContext": "entityManageService",
              "changeType": "updateAttributeInContext"
            }
          },
          "eventSubType": {
            "values": [
              {
                "id": "7886f1a5-054d-4682-a2fd-14c144106b50",
                "value": "EntityUpdate"
              }
            ]
          },
          "clientId": {
            "values": [
              {
                "id": "c53715f9-c3eb-487b-a4f1-91043ca168ff",
                "value": "rdpclient"
              }
            ]
          },
          "entityType": {
            "values": [
              {
                "id": "840713f3-b9e7-42c2-a28b-3ab35e4eec72",
                "value": "sku"
              }
            ]
          },
          "entityId": {
            "values": [
              {
                "id": "7ae83bcf-1883-4dfc-b711-19a5d069426e",
                "value": "E01"
              }
            ]
          },
          "eventType": {
            "values": [
              {
                "id": "be7eb4e9-1329-47b2-94bc-8f91f21308db",
                "value": "EntityUpdate"
              }
            ]
          },
          "entityAction": {
            "values": [
              {
                "id": "18beefda-4c4b-4ae4-9c29-3ac5cd1b40d7",
                "value": "update"
              }
            ]
          },
          "relatedRequestId": {
            "values": [
              {
                "id": "8efd759e-b7cc-4c7a-aaf5-f48a89a719e5",
                "value": "e5b70711-9254-475e-8791-4ac1253d39cf"
              }
            ]
          }
        }
      }
    }
  ]
</code></pre>


This topic describes the properties of the event object using the above scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object.
* Using the properties how you can set data for the [sample Scenario](#scenario).

In the sample [Scenario](#scenario), for the manage event, Id, domain, and type is set to the following values:

| Property | Value | 
|----------|-------------|
| id | a28e00d1-1979-49ca-ab3a-2bed269f6d3c |
| domain | eventDataObject |
| type | entitymanageevent |

## properties  

This object stores the audit information of the event such as createdBy, source, and modifiedBy. This is used for external events. The following table lists the details of the properties object:

| Property | Description | Type | Required |
|----------|-------------|------|----------|
| source | Indicates the source of the event. This source can be external data providers or internal systems of the event origin. | String | No | 
| createdByService | Indicates the name of the service that created this object. | String | No |
| createdBy | Indicates the user who created this object. | String | No |
| createdDate | Indicates the date and time when the object was created. | String | No |
| modifiedByService | Indicates the name of the service that was used to last update this object. | String | No |
| modifiedBy | Indicates the user who last updated the object. | String | No |
| modifiedDate | Indicates the date and time when the object was last updated. | String | No |

Data for sample [Scenario](#scenario): The following properties are set in the **properties** object:

| Property | Value | 
|----------|-------|
| modifiedService | entityManageService |
| modifiedBy | mary.jane@riversand.com |
| modifiedDate | 2018-04-12T02:57:45.042-0500 |

## data

This object contains the event details related to the [contexts](#contexts), [attributes](#attributes), and [relationships](#relationships) details of an entity. The following table lists the details of the object:

| Property | Description | Type |
|----------|-------------|------|
| contexts | Indicates the contexts details related to an event.| [contexts](#contexts) |
| relationships | Indicates the relationship details related to an event.| [relationships](#relationships) |
| attributes | Indicates the attributes details pertaining to the event. | [attributes](#attributes)  |

### contexts

This object contains the event details related to the context information of an entity. The following table lists the details of the contexts object:

| Property | Description | Type | 
|----------|-------------|------|
| context | Indicates a single context, specified by context group, with the contextual attributes and relationships. Refer to **contexts** section in [Entity Object Structure](api_entity_object_structure.html). Each of the context also contains [changeType properties](#changetype-properties), which contains details related to change type current event has recorded related to contexts present in the entity. | [context](api_entity_object_structure.html) |

Data for sample [Scenario](#scenario): As the event generated for the [Scenario](#scenario) is updating a non-contextual attribute, information about the contexts is is not present in the generated event object. 

### relationships

This object contains the event details related to the relationship information of the entity. The following table lists the details of the relationship object:

| Property | Description | Type | 
|----------|-------------|------|
| relationship | Indicates relationship details with the relationship attributes. Refer to **relationships** section in [Entity Object Structure](api_entity_object_structure.html). Each of the relationship also contains [changeType properties](#changetype-properties), which contains details related to change type current event has recorded related to relationships present in the entity. | [relationships](api_entity_object_structure.html) |

Data for sample [Scenario](#scenario): As the event generated for the [Scenario](#scenario) is updating a non-relationship attribute, information about the relationships is is not present in the generated event object.

### attributes

This object contains the event details related to the attribute information of the entity. The following table lists the details of the  attributes object:

| Property | Description | Type |
|----------|-------------|------|
| <<attrName>> | Indicates the details about an attribute which is added or updated, by which an event is generated. | [<<attrName>>](#attrname) |
| previous-<<attrName>> | Indicates the details about the previous value details about an attribute which is updated. | [previous-<<attrName>>](#previous-attrname)
| eventType | Indicates the type of event which is generated. | [eventType](#eventtype) |
| clientId | Indicates the identifier of the client from where the event is generated. | [clientId](#clientid) |
| eventSubType | Indicates the sub-type of the event which is generated. It is reserved for the future use. | [eventSubType](#eventsubtype) |
| entityId | Indicates the identifier of the entity which is involved in the current event generation. | [entityId](#entityid) |
| entityAction | Indicates the action carried out on the attribute which has triggered the event. | [entityAction](#entityaction) |
| relatedReuestId | Indicates the request Id for the current event which is generated for the current request.| [relatedRequestId](#relatedreuestid) |

#### <<attrName>>

This object contains the details about an attribute which is added or updated, by which an event is generated. It contains the following details:

| Property | Description | Type |
|----------|-------------|------|
| values | Indicates the value details of the current attribute. | [values](#values) |
| changeType properties | Indicates the details related to change type current event has recorded. | [changeType properties](#changetype-properties) | 

#### values

This object contains the values for various properties of the current attribute. The following table lists the details of the values object:

| Property | Description | Type |
|----------|-------------|------|
| source | Indicates the source for the current attribute. | String |
| locale | Indicates the locale for the current attribute. | String |
| id | Indicates an unique identifier for the current attribute. It is in the form of some GUID. | String |
| value | Indicates added or updated value of the current attribute | String |

#### changeType properties

This object contains details related to change type current event has recorded related to attributes, contexts, and relationships present in the entity. It includes information about  changeContext and changeType. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| changeContext | Indicates the service which has added, updated, or deleted the entity triggering the event. Possible values are: entityManageService and entityGovernService.| String |
| changeType | Indicates the change type current event has recorded related to contexts, relationships, and attributes present in the entity. | String |

Data for sample [Scenario](#scenario): In the scenario, the following values are set for the <<attrName>>, "displayname":

| Property | Value | 
|----------|-------|
| displayname -> values -> source  | internal |
| displayname -> values -> locale  | en-US |
| displayname -> values -> id | 542a1fe9-5ca8-450f-b9a6-0f6ab21bd3b2|
| displayname -> values -> value | Polo's 3/4 Sleeve V-Neck T-Shirt-Women's |
| displayname -> properties -> changeContext | entityManageService | 
| displayname -> properties -> changeType | updateAttributeInContext |

#### previous-<<attrName>>

This object contains the details about the previous value details about an attribute which is updated. In Riversand Platform, this is also termed as **Entity History**. Refer to [<<attrName>>](#attrname) section for its structural details.

Data for sample [Scenario](#scenario): In the scenario, the following values are set for the <<previous-<<attrName>>, "displayname":

| Property | Value | 
|----------|-------|
| previous-displayname -> values -> source  | internal |
| previous-displayname -> values -> locale  | en-US |
| previous-displayname -> values -> id | 057b1451-6a3b-4842-8765-4102dfb233b5 |
| previous-displayname -> values -> value | Polo's 3/4 Sleeve T-Shirt-Women's |
| previous-displayname -> properties -> changeContext | entityManageService | 
| previous-displayname -> properties -> changeType | updateAttributeInContext |
 
#### eventType

This object contains the type of event which is generated. Possible values are: EntityAdd, EntityUpdate, NoChange, and EntityDelete. The following table lists the details of the eventType object:

| Property | Description | Type |
|----------|-------------|------|
| values -> id | Indicates the identifier for the "values" of "this" object. | String |
| values -> value | Indicates the type of the event generated. Possible values are: EntityAdd, EntityUpdate, NoChange, and EntityDelete. | String |

Data for sample [Scenario](#scenario): In the scenario, the following values are set for the eventType:

| Property | Value | 
|----------|-------|
| id | be7eb4e9-1329-47b2-94bc-8f91f21308db |
| value | EntityUpdate |

#### clientId

This object contains the identifier of the client from where the event is generated. The following table lists the details of the clientId object:

| Property | Description | Type |
|----------|-------------|------|
| values -> id | Indicates the identifier for the "values" of "this" object. | String |
| values -> value | Indicates an identifier of the client from where the event is generated. | String |

Data for sample [Scenario](#scenario): In the scenario, the following values are set for the clientId:

| Property | Value | 
|----------|-------|
| id | c53715f9-c3eb-487b-a4f1-91043ca168ff |
| value | rdpclient |

#### eventSubType

This object contains the sub-type of the event which is generated. It is reserved for the future use. Currently, it has the same values as [eventType](#eventtype). The following table lists the details of the eventSubType object:

| Property | Description | Type |
|----------|-------------|------|
| values -> id | Indicates the identifier for the "values" of "this" object. | String |
| values -> value | Indicates the sub-type of the event generated. It is reserved for the future use. Currently, it has the same values as [eventType](#eventtype). | String |

Data for sample [Scenario](#scenario): In the scenario, the following values are set for the eventSubType:

| Property | Value | 
|----------|-------|
| id | 7886f1a5-054d-4682-a2fd-14c144106b50 |
| value | EntityUpdate |

#### entityId

This object contains the identifier of the entity on which an event is generated. The following table lists the details of the entityId object:

| Property | Description | Type |
|----------|-------------|------|
| values -> id | Indicates the identifier for the "values" of "this" object. | String |
| values -> value | Indicates the identifier of the entity which has the current attribute that triggered the event. | String |

Data for sample [Scenario](#scenario): In the scenario, the following values are set for the entityId:

| Property | Value | 
|----------|-------|
| id | 7ae83bcf-1883-4dfc-b711-19a5d069426e |
| value | E01 |

#### entityAction

This object contains the operation (Create, Update, or Delete) carried out on the entity which has triggered the event. The following table lists the details of the entityAction object:

| Property | Description | Type |
|----------|-------------|------|
| values -> id |Indicates the identifier for the "values" of "this" object. | String |
| values -> value | Indicates the action carried out on the attribute which has triggered the event. | String |

Data for sample [Scenario](#scenario): In the scenario, the following values are set for the entityAction:

| Property | Value | 
|----------|-------|
| id | 18beefda-4c4b-4ae4-9c29-3ac5cd1b40d7 |
| value | update |

#### relatedReuestId

This object contains the request Id for the current event which is generated for the current request. This help you in tracking the changes occurred on the data objects. The following table lists the details of the entityAction object:

| Property | Description | Type |
|----------|-------------|------|
| values -> id |Indicates the identifier for the "values" of "this" object. | String |
| values -> value | Indicates the request Id for the current event which is generated for the current request. | String |

Data for sample [Scenario](#scenario): In the scenario, the following values are set for the relatedReuestId:

| Property | Value | 
|----------|-------|
| id | 8efd759e-b7cc-4c7a-aaf5-f48a89a719e5 |
| value | e5b70711-9254-475e-8791-4ac1253d39cf |