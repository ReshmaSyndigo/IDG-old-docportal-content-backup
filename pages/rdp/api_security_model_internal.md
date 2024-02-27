---
title: Authorization Model
sidebar: rdp_sidebar
permalink: api_security_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

Authorization model checks if a [user](api_system_user_data_model.html) mapped to [role](api_system_role_data_model.html) / [roles](api_system_role_data_model.html) has the required permissions to perform an operation. It defines the read, write, and delete permissions for various domains and entity types belonging to the domain. Permissions can be defined at the Entity (Self Context) Level, Context Level, Attribute Level, Relationship Level, Relationship Attribute Level, and Nested Attribute Level. The following lists different types of permissions available:

* **Read permission**: You can only get or read values for these objects.
* **Write permission**: You can create, update, or write values for these objects. 
* **Delete permission**: You can delete the object. 
* **Owner Permission**: Only the authorized owner can view the data.
* **OwnerEdit Permission**: Only the authorized owner can edit the data.
* **submitPermission**: You can only submit entity for review during merge.
* **mergePermission**: You can review the source entity and decide if you wish to merge, create new, or discard the source entity.

{% if site.build == "internal" %}
**Note:** See [Configure Authorization for Match](/{{site.data.rdp_links_version.APP}}/rdp_feature_match_auth.html), for more information on submitPermission and mergePermission.
{% endif %}

A single user can be mapped to multiple roles. In this case, the authorization model is computed by **merging the permissions** from all roles of that user per domain.

The following illustration depicts different permissions available in the authorization model:

{% picture AuthorisationModel.png alt="Authorization Model" %}

Authorization model follows a pessimistic approach. If you do not have a setting, then it is considered as no permission, implying that specifying "write" as false is the same as no write node present at the attribute.

{% if site.build == "internal" %}
{% include callout.html content="**Note:** You can define authorization model for a locale and a role such as 'de-DE_authorizationModel_buyer'. However, you can only define read and write permission at the locale level. See [Set Read Permission for Specific Role in Locale](api_create_data_model_scenario65.html), for a sample scenario.
" type="primary" %}
{% endif %}

## Applying the Authorization Model

The authorization model is decided from the type of entity and userRole from the authorization header, such as **<<entityType>>_authorizationModel_<<userRole>>**. If entity type level authorization model is not found, then a fall back authorization approach "Domain Authorization" is applied. If both approaches fail, then a permission denied error is sent in response. 

In addition, there are two types of authorization **reject** and **accommodate**:

* **Reject**: This is the pessimistic approach to authorization, where even a single element denial of access stops the request from passing through. For example, if one attribute in the create entity request does not have write permission, the entity is not created and a Permission Denied response is returned. 
* **Accommodate**: This approach is more optimistic. If an element does not have permission, just the particular element is ignored and rest of the entity is processed. {% if site.build == "internal" %} For details and sample scenarios, see [Set Authorization type - Accommodate/Reject](api_create_data_model_scenario40.html) {% endif %}.

The following illustration depicts the flow of how authorization model is applied:

{% picture AuthorizationFlow.png alt="Applying the Authorization Model" %}

### Get Nearest Matching Context from Authorization Model

When the incoming request does not exactly match any of the existing contexts in the authorization model, the nearest matching context is applied. This is determined based on the hierarchy specified in the **contextauthorizationpath** in the authorization model. 

A weightage is given to each context type and the context score is calculated. Consider the contextauthorization path is "**country>>channel**". Channel has the highest weightage and country the lowest. The nearest match is the context that gets the maximum score.

The following illustration depicts how context authorization is applied:

{% picture ContextAuthorization.png alt="Context Authorization" %}

## Authorization Model Object Structure

Broadly, Authorization Model contains the following sub-objects:

* [entityModel](#entitymodel): Contains all the required information of the entity model.
* [properties](#properties): Contains the audit information of an entity model such as createdBy and modifiedBy. This includes the read and write permission for an entity type at entity, attribute, relationship and context levels.
* [data](#data): Contains an array of contexts, attributes, and relationships details with read and write permissions to override the permissions for certain specific attributes and relationships.

The following table lists out some of the common scenarios to set permissions for a role at the entity or self-context level:

{% picture perm-entity-level.png alt="Entity Level Permissions" %}

The following table lists out some of the common scenarios to set permissions for a role at the context level:

{% picture perm-context-level.png alt="Context Level Permissions" %}

This topic describes the authorization model object structure using a sample scenario. {% if site.build == "internal" %} See [Set Permissions using Authorization Model](api_create_entity_auth_model.html), for more scenarios and examples.{% endif %}

## Scenario 

Consider that you wish to create a security model for "sku" entity type and buyer role to only create new attributes at entity level. The following example demonstrates the sample JSON format to create a authorization model:

<pre><code>
{
  "entityModel": {
    "id": "sku_authorizationModel_buyer",
    "name": "sku_authorizationModel_buyer",
    "type": "authorizationModel",
    "properties": {
      "readPermission": true,
      "writePermission": true,
      "deletePermission": false,
      "attributesPermission": [
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      "relationshipsPermission": [
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      "contextsPermission": [
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      "contextsAttributesPermission": [
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ],
      "contextsRelationshipsPermission": [
        {
          "readPermission": true,
          "writePermission": true,
          "deletePermission": false
        }
      ]
    },
    "data": {
      "attributes": {
        "suppliername": {
          "properties": {
            "readPermission": true,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "internalavailabilitydate": {
          "properties": {
            "readPermission": false,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "registered": {
          "properties": {
            "readPermission": false,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "trademark": {
          "properties": {
            "readPermission": false,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "primaryvendor": {
          "properties": {
            "readPermission": false,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "setupgoaldate": {
          "properties": {
            "readPermission": false,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "setuppriority": {
          "properties": {
            "readPermission": false,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "collaborationpmcomments": {
          "properties": {
            "readPermission": true,
            "writePermission": false,
            "ownerPermission": false
          }
        },
        "collaborationvendorcomments": {
          "properties": {
            "readPermission": true,
            "writePermission": false,
            "ownerPermission": false
          }
        }
      }
    }
  }
}
</code></pre>

This topic describes the properties of the security model details using this scenario. Note that each section in this topic contains two aspects:

* Properties and description of each object. 
* Using the properties how you can set data for the [Sample Scenario](#scenario).

## entityModel

This object is the parent container that holds all the required information about security model. You can identify a model by using id, name, version, and type. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of the model. | String | 
| name | Indicates the name of the model. Generally, this is the entity type for which the model is defined. | String |  
| type | Indicates the type of model. | String | 
| properties | Indicates the read and write permission for an entity type, at entity level and at context level. | [properties](#properties) |
| data | Indicates a section to specify specific read and write permission for existing attributes and relationships at an entity or context level. | [data](#data)  |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | sku_authorizationModel_buyer |
| name | sku_authorizationModel_buyer |
| type | authorizationModel |

## properties

This object stores the audit information of the entity model and includes the read and write permission at the entity type, entity, and context level. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|------|
| readPermission | Indicates that the role can read this entity type. | Boolean |
| writePermission | Indicates that the role can write into this entity type. | Boolean |
| deletePermission | Indicates that the role can delete this entity type. | Boolean |
| ownerPermission | Indicates that this attribute in the entity data must be substituted for ownership queries. | Boolean |
| attributesPermission | Indicates that the role can create or read new attributes at entity level not at context level. | [properties](#properties) |
| relationshipsPermission | Indicates that the role can create or read new relationships at entity level not at context level. | [properties](#properties) |
| contextsPermission | Indicates that the role can create or read a new context. | [properties](#properties) |
| contextsAttributesPermission | Indicates that the role can create or read new attributes within a new context. | [properties](#properties) |
| contextsRelationshipsPermission | Indicates that the role can create or read new relationships within a new context. | [properties](#properties) |
| ownerPermission | Indicates that this attribute in the entity data must be substituted for ownership queries. | [properties](#properties) |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| readPermission | true |
| writePermission | true |
| deletePermission | false |
| ownerPermission | false |

## data

This object contains the attributes of validation model. The following table lists the details of the data object:

| Property | Description | Type | 
|----------|-------------|------|
| attributes | Indicates an array of group of [attributes](#attributes) objects. | [attributes](#attributes) | 

## attributes

This object contains model details of simple, nested, and relationship attribute model details of an entity. The following table lists the details of the attributes object:

| Property | Description | Type | 
|----------|-------------|------|
| <<AttrName>> | Indicates the name of the attribute. | [attribute](#attribute) |

## attribute

This object contains the details of the attribute of an entity. The following table lists the details of the attribute object:

| <<AttrName>> -> properties | Indicates the properties of the attribute. | List of [properties](#properties) objects |