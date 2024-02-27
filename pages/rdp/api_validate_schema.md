---
title: Validate JSON Object Schema during Import
sidebar: rdp_sidebar
permalink: api_validate_schema.html
folder: rdp
type: HowToAPI
---

Riversand Platform performs JSON schema validations while importing models or configs to the system. The system performs validations at Entity, Attribute, Relationship, Context, and Property Levels. 

If the JSON schema validation fails at any level while performing an API request, then the system sends the response with the response message indicating that the schema validation is failed and removes the respective schema element that has error. 

The system records the event for the respective entity, which has schema validation error. You can track these events for troubleshooting purposes. For more information, see [Get Schema Validation Event](api_event_get_schema_validation_event.html).

The following are the various JSON schema validations that are performed during import:

* Entity Level Validation 
* Attribute/Relationship/Context/Property Level Validation

### Entity Level Validation

The system performs JSON schema validation at the entity level while creating an entity using RESTful API or importing the entities via JSON file. During schema validations, if the entity type is not specified for an entity, then the system stops creating the entity and sends a response with the response message indicating that the schema validation is failed. 

##### Scenario

Consider that you are creating a SKU entity with the missing entity type using the RESTful API {TenantURL or ID}/api/entityappservice/create}. For more information, see [Create Entity](api_app_create_entity_scenario1.html).

##### Request 

In the below request, you can check that the "type" parameter is missing in the entity object:

<pre>
<code>
{
  "entity": {
    "id": "ETEmpty",
    "name": "Entity Level Validation",
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              "value": "mdm65"
            }
          ]
        }
      }
    }
  }
}
</code>
</pre>


##### Response

In the response, you can check the response message, indicating that the system failed to process the request due to schema validation error.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "dbe76acd-699e-4ff1-b11b-57d6a31103c8",
    "taskId": "dbe76acd-699e-4ff1-b11b-57d6a31103c8"
  },
  "response": {
    "status": "error",
    "statusDetail": {
      "messages": [
        {
          <span style="background-color: #FFFF00">"message": "Failed to process request, Schema validation failed at data object with id TestSchemaValidationEntity001",</span>
          "messageCode": "E0129",
          "messageType": "error"
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>

### Attribute/Relationship/Context/Property Level validation

The system performs JSON schema validation at the Attribute/Relationship/Context/Property level while creating the entity using RESTful API or importing the entities via JSON file. If the schema validation fails at any of these levels, then the system imports the entity by removing the respective schema element and sends the API response with the response message indicating that the schema validation is failed.

For more information on various JSON schema validations, see [Riversand JSON Object Schema Validations](json_schema_val_end_pnt.html).

<br>
##### Scenario

Consider that you are creating a SKU entity with the missing "mdmid" attribute value and related to its own entity with "ischildof" relationship.

##### Request 

In the below request, you can check the following:
* In "attributes", the "value" for "mdmid" attribute is not specified.
* In "relationships", the "id" and "type" specified under "ischildof" is same as the "Id" and "type" of the current entity.

<pre>
<code>
{
  "entity": {
    "id": "entity_567",
    "name": "Entity Level Validation",
    "type": "sku",
    "data": {
      "attributes": {
        "mdmid": {
          "values": [
            {
              "source": "internal",
              "locale": "en-US",
              <span style="background-color: #FFFF00">"value": ""</span>
            }
          ]
        }
      },
      "relationships": {
        "ischildof": [
          {
            <span style="background-color: #FFFF00">"id": "entity_567",</span>
            "properties": {
              "relationshipType": "composition"
            },
            "relTo": {
              <span style="background-color: #FFFF00">"id": "entity_567",</span>
              <span style="background-color: #FFFF00">"type": "sku"</span>
            }
          }
        ]
      }
    }
  }
}
</code>
</pre>

##### Response

In the response, you can check the response message, indicating that the schema validation is failed. In this case, the SKU entity gets created in the system but the respective attributes/relationship, which has schema error will not be imported.

<pre>
<code>
{
  "request": {
    "returnRequest": false,
    "requestId": "b371aa5b-6aa6-43f1-afdf-74fc2acd243b",
    "taskId": "b371aa5b-6aa6-43f1-afdf-74fc2acd243b"
  },
  "response": {
    "status": "success",
    "statusDetail": {
      "messages": [
        {
          "messageCode": "I0011",
          "message": "Submitted sku for create with Id TestSchemaValidationEntity001. Check after some time",
          "messageType": "success",
          "messageParams": [
            "sku",
            "create",
            "TestSchemaValidationEntity001"
          ]
        },
        {
          <span style="background-color: #FFFF00">"message": "Schema validation failed for id TestSchemaValidationEntity001, type sku",</span>
          "messageCode": "E0866",
          "messageType": "error",
          "messageParams": [
            "TestSchemaValidationEntity001",
            "sku"
          ]
        }
      ]
    },
    "totalRecords": 0
  }
}
</code>
</pre>