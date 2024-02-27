---
title: System Users Model
sidebar: rdp_sidebar
permalink: api_system_user_data_model.html
folder: rdp
type: HowToAPI
---

{% include snippets/api_preview.md %}

This object defines the information related to the System Users with the predefined [roles](api_system_role_data_model.html). You can use this model to define different users as per your business requirements under various [Manage Models](api_manage_model.html). For example, users such as germanyadmin, germanyuser can be defined.

The following users are available in the out-of-the-box(OOTB) instance of Riversand Platform:

| Name of the User Models | Description | 
|-------------------|----------------------|
| System | Indicates the "system" user with "admin" role. |
| DataReader | Indicates the "DataReader" user with "datareader" role. |
| Service Client | Indicates the "serviceclient" user with "admin" role.

## Scenario 

To create a user, you can use the REST API {{site.data.rdp_glossary.createdatamodel}}. 

<pre><code>
{
  "entityModel": {
    "id": "dev1admin@riversand.com_user",
    "name": "dev1admin@riversand.com",
    "type": "user",
    "properties": {
      "firstName": "Dev1",
      "lastName": "Admin",
      "email": "dev1admin@riversand.com",
      "roles": [
        "admin",
        "vendor"
      ],
      "defaultRole": "admin",
      "createdService": "entityManageModelService",
      "createdBy": "system_user",
      "modifiedService": "entityManageModelService",
      "modifiedBy": "system_user",
      "createdDate": "2018-12-14T01:12:20.811-0600",
      "modifiedDate": "2018-12-14T01:12:20.811-0600"
    }
  }
}
</code></pre> 

The following diagram depicts the structure of the above Data Model:

{% picture systemusermodel.png alt="System User Model" %}

## entityModel

This object contains an array of various System Users models. The following table lists the details of the entityModel object:

| Property | Description | Type | 
|----------|-------------|------|
| id | Indicates the identifier of this System User model. | String |
| name | Indicates the name of this System User model. | String |
| type | Indicates the type of this array. | String |
| properties | Indicates an array of group of [properties](#properties). | [properties](#properties) |

Data for Sample [Scenario](#scenario): Set the following properties for **entityModel** object:

| Property | Description | 
|----------|-------------|
| id | dev1admin@riversand.com_user |
| name | dev1admin@riversand.com |
| type | user |

## properties

This object contains the description about this System User Model. The following table lists the details of the properties object:

| Property | Description | Type | 
|----------|-------------|-------|
| firstName | Indicates the first name of the user. | String |
| lastName | Indicates the last name of the user. | String |
| email | Indicates the email id of the user. | String |
| roles | Indicates the roles for which user is mapped to. | String |
| defaultRole | Indicates default role of the user displayed in the UI. This property is useful when a user is assigned multiple roles. If a user is assigned multiple roles and no default role is specified, then the first role defined for a user is considered. | String |
| createdService | Indicates the name of the service that created this object. | String |
| createdBy | Indicates the user who created this object. | String | 
| modifiedService | Indicates the name of the service that was used to last update this object. | String |
| modifiedBy | Indicates the user who last updated the object. | String |
| createdDate | Indicates the date and time when the object was created. | String |
| modifiedDate | Indicates the date and time when the object was last updated. | String |

Data for Sample [Scenario](#scenario): Set the following properties for **properties** object:

| Property | Description | 
|----------|-------------|
| firstName | Dev1 |
| lastName | Admin |
| email | dev1admin@riversand.com | 
| roles | admin, vendor |
| defaultRole | admin | 
| createdService | entityManageModelService |
| createdBy | system_user |
| modifiedService | entityManageModelService |
| modifiedBy | system_user |
| createdDate | 2018-12-14T01:12:20.811-0600 |
| modifiedDate | 2018-12-14T01:12:20.811-0600 |