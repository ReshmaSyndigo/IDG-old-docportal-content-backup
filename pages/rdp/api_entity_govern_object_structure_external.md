---
title: Entity Govern Object Structure
sidebar: rdp_sidebar
permalink: api_entity_govern_object_structure.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

An Entity Govern Object in Riversand Platform is a JSON structure that comprises details about validation messages, business conditions, and workflow state information of an entity for a particular workflow instance. It contains the following sub-objects:

* [properties](#properties): Contains the audit information of the entity govern object such as createdDate and modifiedDate.
* [data](#data): Contains an array of [contexts](#contexts) and [attributes](#attributes) details of entity govern object.

An entity govern object is for an entity and can be identified using the following:

| Property | Description | Type |
|----------|-------------|------|
| id | Indicates the entity Id for which this entity object is applicable. | String |
| name | Indicates the name of the entity for which this entity object is applicable. | String | 
| type | Indicates the type of the entity model for which this entity object is applicable. | String | 

This topic describes the Entity Govern Object Structure using a sample scenario.

## Scenario 

Consider that an entity of type "sku" is in a workflow "newProductSetup" with one activity "New SKUs to Submit" and another in "executing" status. The following example demonstrates the sample JSON format of the current workflow instance of the entity type "sku":

<pre><code>
      {
        "id": "eoalvo0xlom7g",
        "type": "sku",
        "properties": {
          "modifiedByService": "WorkflowGovernanceService",
          "modifiedDate": "2017-04-03T05:39:51.6858962-07:00"
        },
        "data": {
          "attributes": {
            "productType": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "vendorSKUCreate_BusinessRule"
                  }
                ],
                "rulesRun": "vendorSKUCreate_BusinessRule"
              }
            },
            "colorDesc": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "vendorSKUCreate_BusinessRule"
                  }
                ],
                "rulesRun": "vendorSKUCreate_BusinessRule"
              }
            },
            "size": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "vendorSKUCreate_BusinessRule"
                  }
                ],
                "rulesRun": "vendorSKUCreate_BusinessRule"
              }
            },
            "productTitle": {
              "properties": {
                "messages": [
                  {
                    "messageType": "error",
                    "messageCode": "Req001",
                    "businessRule": "vendorSKUCreate_BusinessRule"
                  }
                ],
                "rulesRun": "vendorSKUCreate_BusinessRule"
              }
            }
          },
          "contexts": [
            {
              "context": {
                "self": "self/eoalvo0xlom7g",
                "workflow": "newProductSetup"
              },
              "attributes": {
                "workflowInstanceId": {
                  "values": [
                    {
                      "id": "1ba1cabd-47a3-4bff-b47a-8f14524f19a4",
                      "value": "d7180946-a491-4b8c-bc54-5fbe9c2414e7"
                    }
                  ]
                },
                "startDateTime": {
                  "values": [
                    {
                      "id": "1c337b0b-81d9-41e4-88d5-22e8029d8a8e",
                      "value": "2017-04-03T12:39:49.0296085Z"
                    }
                  ]
                },
                "status": {
                  "values": [
                    {
                      "id": "d1632a4e-e602-48f6-93c0-ddc8b1cdab00",
                      "value": "Executing"
                    }
                  ]
                },
                "activities": {
                  "group": [
                    {
                      "activityGuid": {
                        "values": [
                          {
                            "id": "eae00190-8910-4271-9909-98c52a112419",
                            "value": "e4d9b1cb-1a58-468f-a0c0-af8f00383c5c"
                          }
                        ]
                      },
                      "activityName": {
                        "values": [
                          {
                            "id": "5663fe44-0b81-4a5a-b2e5-6160e9ae2272",
                            "value": "New SKUs to Submit"
                          }
                        ]
                      },
                      "assignedUser": {
                        "values": [
                          {
                            "id": "2333bcff-6a21-4312-809a-b37263298763",
                            "value": "cfadmin"
                          }
                        ]
                      },
                      "performedAction": {
                        "values": [
                          {
                            "id": "0f03b5cc-ae28-462b-aa87-433f45ad7e5b",
                            "value": ""
                          }
                        ]
                      },
                      "comments": {
                        "values": [
                          {
                            "id": "972d94aa-526e-4cff-86c8-e4288bffb187",
                            "value": ""
                          }
                        ]
                      },
                      "status": {
                        "values": [
                          {
                            "id": "aa311f7a-7169-437b-8011-305e58644ce6",
                            "value": "Executing"
                          }
                        ]
                      },
                      "startDateTime": {
                        "values": [
                          {
                            "id": "5dc112d9-be27-4b1b-8a4e-f64ae6976231",
                            "value": "2017-04-03T12:39:50.0296444Z"
                          }
                        ]
                      },
                      "endDateTime": {
                        "values": [
                          {
                            "id": "c14f569a-ba77-4e32-9b45-a36927ce0d7d",
                            "value": ""
                          }
                        ]
                      },
                      "id": "df6a4436-b94f-4923-8615-b3213266c2a4"
                    }
                  ]
                }
              }
            }
          ]
        }
      }
</code></pre>

This topic describes the properties of the  Entity Govern Object with a particular Workflow Instance Data details using this scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object.
* Using the properties how you can set data for the [sample Scenario](#scenario).

For the sample [Scenario](#scenario), Id and name is set to the following values:

| Property | Description | 
|----------|-------------|
| id | eoalvo0xlom7g |
| type | sku |

## properties

This object stores the audit information of an entity such as createdBy and modifiedBy. The following table lists the details of the properties object:

| Property | Description | Type |
|----------|-------------|------|
| source | Indicates the source of the data. This source can be external data providers or internal systems of the data origin. This property serves as the default source for all the data elements, unless explicitly specified at the element level. | String | 
| createdByService | Indicates the name of the service that created this object. | String | 
| createdBy | Indicates the user who created this object. | String | 
| createdDate | Indicates the date and time when the object was created. | String |
| modifiedByService | Indicates the name of the service that was used to last update this object. | String |
| modifiedBy | Indicates the user who last updated the object. | String |
| modifiedDate | Indicates the date and time when the object was last updated. | String |

Data for sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Value | 
|----------|-------|
| modifiedByService | WorkflowGovernanceService |
| modifiedDate | 2017-04-03T05:39:51.6858962-07:00 | 

## data

This object contains the contexts and attributes of entity govern object. The following table lists the details of the data object:

| Property | Description | Type |
|----------|-------------|------|
| attributes | Indicates the attributes that defines the entity govern object. | List of [attributes](#attributes) objects |
| contexts | Indicates an array of group of [contexts](#contexts) and [context attributes](#context-attributes).| [contexts](#contexts) |

### attributes

This object contains the attribute details of the entity govern object. The following table lists the details of the attributes object:

| Property | Description | Type |
|----------|-------------|------|
| <<AttrName>> -> properties | Indicates the properties of the attribute object. | List of [properties](#properties-1) objects |

### properties

This object contains the properties of the attributes object. The following table lists the details of the properties of the attributes object:

| Property | Description | Type |
|----------|-------------|------|
| messages | Indicates the list of messages if there is any error  or warning for this attribute. | List of [messages](#messages) object | 
| rulesRun | Indicates the business rule which is executed for this attribute. | String |

### messages

This object contains the message details for this attribute describing whether it is an error or a warning and what business rule is executed on this attribute. You can see messages only when there is an error or warning. The following table lists the details of the messages object:

| Property | Description | Type |
|----------|-------------|------|
| messageType | Indicates type of the message | String. Possible values are error or warning. |
| messageCode | Indicates the code associated with this message | String |
| businessRule | Indicates the business rule which is executed for this attribute. | String |

Data for sample [Scenario](#scenario): Set the following attributes for the entity in the workflow instance: 

| Property | Value | 
|----------|-------------|
| <<AttrName>> -> properties -> messages -> messageType | productType -> error |
| <<AttrName>> -> properties -> messages -> messageCode | productType -> Req001 |
| <<AttrName>> -> properties -> messages -> businessRule | productType -> vendorSKUCreate_BusinessRule |
| <<AttrName>> -> properties -> rulesRun | productType -> vendorSKUCreate_BusinessRule |
| <<AttrName>> -> properties -> messages -> messageType | colorDesc -> error | 
| <<AttrName>> -> properties -> messages -> messageCode | colorDesc -> Req001 | 
| <<AttrName>> -> properties -> messages -> businessRule | colorDesc -> vendorSKUCreate_BusinessRule |
| <<AttrName>> -> properties -> rulesRun | colorDesc -> vendorSKUCreate_BusinessRule |
| <<AttrName>> -> properties -> messages -> messageType | size -> error | 
| <<AttrName>> -> properties -> messages -> messageCode | size-> Req001 | 
| <<AttrName>> -> properties -> messages -> businessRule | size -> vendorSKUCreate_BusinessRule |
| <<AttrName>> -> properties -> rulesRun | size -> vendorSKUCreate_BusinessRule |
| <<AttrName>> -> properties -> messages -> messageType | productTitle -> error | 
| <<AttrName>> -> properties -> messages -> messageCode | productTitle-> Req001 | 
| <<AttrName>> -> properties -> messages -> businessRule | productTitle -> vendorSKUCreate_BusinessRule |
| <<AttrName>> -> properties -> rulesRun | productTitle -> vendorSKUCreate_BusinessRule |

### contexts

This object contains the context information of the entity govern object. The following table lists the details of the contexts object:

| Property | Description | Type |
|----------|-------------|------|
| context | Indicates a list of all the business and organizational contexts this object is linked to and all the data for this context.| [context](#context) |
| context attributes | Indicates the attributes that defines the meta-data for the model.| List of [context attributes](#context-attributes) objects |

### context  

This object contains all the business and organizational contexts this entity govern object is linked to. The following table lists the details of the context object:

| Property | Description | Type |
|----------|-------------|------|
| list | Indicates where the entity belongs to. | String  |
| workflow | Indicates the workflow the entity is participating in. | String |
| self | Indicates the Id of the entity for which this Entity Govern Object has details. | String |

Data for sample [Scenario](#scenario): For the entity  of type "sku" participating in the workflow "newProductSetup", the context object contains the following data:

| Property | Value | 
|----------|-------------|
| self | self/eoalvo0xlom7g |
| workflow | newProductSetup |

### context attributes

This object contains the actual workflow instance details with the activities. The following table lists the details of the attributes object:

| Property | Description | Type |
|----------|-------------|------|
| <<AttrName>> -> values -> value | Indicates the value of the attributes. | String |

Data for sample [Scenario](#scenario): Set the following attributes for the entity in its workflow instance: 

| Property | Value | 
|----------|-------------|
| <<AttrName>> -> values -> id | workflowInstanceId -> values -> 1ba1cabd-47a3-4bff-b47a-8f14524f19a4 |
| <<AttrName>> -> values -> value | workflowInstanceId -> values -> d7180946-a491-4b8c-bc54-5fbe9c2414e7 |
| <<AttrName>> -> values -> id | startDateTime -> values -> 1c337b0b-81d9-41e4-88d5-22e8029d8a8e |
| <<AttrName>> -> values -> value | startDateTime -> values -> 2017-04-03T12:39:49.0296085Z |
| <<AttrName>> -> values -> id | status -> values -> d1632a4e-e602-48f6-93c0-ddc8b1cdab00 |
| <<AttrName>> -> values -> value | status -> value -> executing |

Similarly, in the array for activities, you can view the status of each activity one in "executing" status and another in "completed" status.