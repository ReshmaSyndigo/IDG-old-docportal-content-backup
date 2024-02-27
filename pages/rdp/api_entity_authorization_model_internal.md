---
title: Entity Authorization Model
sidebar: rdp_sidebar
permalink: api_entity_authorization_model.html
type: HowToAPI
folder: rdp
---

{% include snippets/api_preview.md %}

This object defines the authorization models for various roles in various domains such as party, thing, referenceData, generic, digitalAsset. 

Certain authorization models comes out-of-the-box (OOTB) when you deploy Riversand Platform. The following table lists OOTB authorization models:

| Name of the authorization model | Name of the system User | Description |
|--------------------|-------------|-----------------------------------|
| party_authorizationModel_admin | Admin | It defines the permissions for the party domain for admin. |
| referenceData_authorizationModel_admin | Admin | It defines the permissions for the refernceData domain for admin. |
| digitalAsset_authorizationModel_admin | Admin | It defines the permissions for the digitalAsset domain for admin. |
| generic_authorizationModel_admin | Admin | It defines the permissions for the generic domain for admin. |
| thing_authorizationModel_admin | Admin | It defines the permissions for the thing domain for admin. |
| location_authorizationModel_admin | Admin | It defines the permissions for the location domain for admin. |
| party_authorizationModel_dataReader | Data Reader | It defines the permissions for the party domain for data reader. |
| location_authorizationModel_dataReader | Data Reader | It defines the permissions for the party domain for data reader. |
| referenceData_authorizationModel_dataReader | Data Reader | It defines the permissions for the refernceData domain for data reader.|
| digitalAsset_authorizationModel_dataReader | Data Reader | It defines the permissions for the digitalAsset domain for data reader. |
| generic_authorizationModel_dataReader | Data Reader| It defines the permissions for the generic domain for data reader. |
| thing_authorizationModel_dataReader | Data Reader | It defines the permissions for the thing domain for data reader. |

This topic describes the properties of the entity authorization model object in detail.

## Scenario

The following example demonstrates the sample JSON format to create "vendor" authorization permissions for "bundle" entity type.

<pre><code>
{
  "entityModel": {
    "id": "bundle_authorizationModel_vendor",
    "name": "bundle_authorizationModel_vendor",
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
    }
  }
}
</code></pre>

## entityModel

This object contains an array of various authorization models for various domains. The following table lists the details of the entityModel object:

| Property | Description | Type |
|----------|-------------|------|
| id | Indicates the identifier of this authorization model. | String | 
| name | Indicates the name this authorization model. | String |
| type | Indicates the type of this array. | String |
| properties | Indicates an array of group of [properties](#properties). | [properties](#properties) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | bundle_authorizationModel_vendor |
| name | bundle_authorizationModel_vendor |
| type | authorizationModel |

## properties

This object contains the various permissions set for this authorization model. The following table lists the details of the properties object:

| Property | Description | Type |
|----------|-------------|-------|
| readPermission | Indicates whether or not "Read" permission is set for entity type. | Boolean |
| writePermission | Indicates whether or not "Write" permission is set for entity type. | Boolean |
| deletePermission | Indicates that the role can delete this entity type. | Boolean |
| attributesPermission | Indicates whether or not  "Read" and "Write" permissions are set on the given attributes. | Boolean |
| relationshipsPermission | Indicates whether or not  "Read" and "Write" permissions are set on the given relationships. | Boolean |
| contextsPermission | Indicates whether or not  "Read" and "Write" permissions are set on the given contexts. | Boolean |
| contextsAttributesPermission | Indicates whether or not  "Read" and "Write" permissions are set on the given contextual attributes. | Boolean |
| contextsRelationshipsPermission | Indicates whether or not  "Read" and "Write" permissions are set on the given contextual relationships. | Boolean |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| readPermission | true |
| writePermission | true |
| deletePermission | false |

This section covers the following topics to explain the object structure of the models associated with authorization:

* [System Roles Model](api_system_role_data_model.html)
* [System Users Model](api_system_user_data_model.html)
* [Authorization Model](api_security_model.html)